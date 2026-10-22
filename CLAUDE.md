# Guía 100 % · Kingdom Hearts HD 1.5+2.5 ReMIX

Web personal (en castellano) para completar al 100 % los juegos de la colección en Steam.
El usuario la revisa poco a poco: hacer cambios por entregas y enseñarlos antes de seguir.

## Reglas del proyecto (pedidas por el usuario)
- **Todo en castellano**, con la terminología de la versión española oficial (logros de Steam en
  español, Wiki KH en español). Si solo hay nombre en inglés, no traducirlo por cuenta propia.
- **Nunca inventar datos.** Todo dato lleva fuente y cada sección de la app la enlaza (`fuentes([...])`).
  Si dos fuentes no coinciden, mostrar ambas o avisar con `nota` (ver golpes finales y Coso).
- Nombres de lugares: manda el texto oficial (logros de Steam, diario del juego). Ojo: la Wiki ES mezcla nombres
  (p. ej. «Torre de los Misterios», «Reino Encantado» y «Coloso de Hielo» son los correctos).
- **Dos progresos separados y visibles:** «Logros de Steam» (dorado) e «Informes · 100 %»
  (color del personaje o azul). El selector de modo (`ajustes.modo`) cambia toda la vista.
- **Cada conseguible es marcable** y se guarda en SQLite (`datos/progreso.db`, vía `server.py`) con copia
  en `localStorage` (`kh100:v1`), y con exportar/importar.
- Orden de navegación: Título → Elegir juego → Hub del juego (los 3 personajes arriba del todo) →
  página de personaje.
- Commits y push solo cuando el usuario lo pida.

## Stack y ejecución
Web sin dependencias ni compilación (HTML + CSS + JS con módulos ES) y `server.py` (solo stdlib).
```sh
python server.py   # y abrir http://127.0.0.1:5173
```
`server.py` sirve los archivos sin caché y expone `/api/estado|hecho|ajuste` sobre `datos/progreso.db`
(tablas `hechos(id, fecha)` y `ajustes(clave, valor JSON)`). No sirve `datos/` ni archivos ocultos.
Si la BD está vacía al abrir la web, `store.iniciar()` sube lo que haya en `localStorage`.
**Al probar con Playwright:** usar otro puerto (`python server.py 5174`; el 5173 es el del usuario), guardar antes
`GET /api/estado` y restaurarlo después con `PUT /api/estado`. Nunca vaciar la BD: puede tener progreso real.

## Estructura
- `src/app.js`: router por hash (`#/`, `#/juegos`, `#/bbs`, `#/bbs/<pj>`, `#/khfm`, `#/khfm/<sección>`) y vistas como
  plantillas de texto. Todo texto dinámico pasa por `esc()`. KH FM: la portada (`#/khfm`) muestra en «Logros» la ruta y los
  55 logros (cada grupo enlaza con su sección) y en «Informes» una tarjeta por sección; cada sección tiene su página
  (lista `SECCIONES_KHFM`: mundos, diario, armas, sintesis, gumi, coliseo, jefes, sora) con anterior/siguiente.
- `src/store.js`: progreso (API de SQLite + copia en `localStorage`). `src/cursor.js`: estela de llave espada (solo ratón y sin reduced-motion).
- `src/data/bbs-logros.js`: **generado** desde la página de logros de Steam (no editar a mano).
- `src/data/bbs.js`: fuentes, personajes, ruta de logros, golpes finales, estilos, Cuartelillo,
  Coso Virtual, consejos por logro y builds.
- `src/data/bbs-informes.js`: Informes Xehanort, minijuegos, retos, helados y pegatinas.
- `src/data/bbs-build.js`: build interactiva (combates → baraja → ficha de cada pieza), habilidades, cristales
  y sus fuentes (`FUENTES_BUILD`, que se mezclan en `FUENTES`). Imágenes en `assets/img/bbs/build/`.
- `src/data/bbs-coso.js`: rondas, reto extra HD y estrategia de cada combate del Coso (se abren fichas de la build).
- `src/data/bbs-jefes.js`: jefes de la historia por personaje (debilidades, recompensas, diario oficial, estrategia).
- `src/data/bbs-tableros.js` (**generado**) y `bbs-tableros-info.js`: casillas bonus, desbloqueo y rivales de cada tablero.
- `src/data/bbs-avance.js`: build «Avanzar por la historia» (grupos, jefes y curación por personaje).
- `src/data/bbs-comandos.js`: **generado** (scripts en `notas/herramientas/`): comandos de cada personaje con ficha,
  vías de obtención y recetas. No editar a mano.
- `src/data/bbs-sintesis.js`: a mano. Frase de qué hace cada comando (Wiki ES), tabla tipo de receta × cristal → habilidad
  (guía de Steam; una discrepancia con la Wiki ES en `NOTAS_TABLA`), efecto de cada habilidad y datos de cristales.
  Se usa en la lista de comandos de cada personaje y en la sección «Síntesis» del hub de BBS.
- `src/data/khfm-logros.js`: **generado** (`notas/herramientas/genera_khfm_logros.py`): logros ACH_001…ACH_055 de KH FM
  (ids con tres cifras). `src/data/khfm.js`: fuentes, grupos de logros, ruta, consejos y mundos con su cerradura.
  Ids: `khfm.logro.ACH_xxx`; las cerraduras del 100 % reutilizan el id de su logro (una sola marca).
- `src/data/khfm-diario.js`: a mano. Informes Ansem, 99 dálmatas (33 cofres), 46 marcas Trío, récords y páginas de Pooh.
  Ids: `khfm.ansem.<n>`, `khfm.dalmata.<primer cachorro>`, `khfm.trio.<tipo>.<n>`, `khfm.record.<id>`.
- Resto de KH FM, todo a mano: `khfm-armas.js` (armas y síntesis), `khfm-gumi.js`, `khfm-coliseo.js` (copas y jefes secretos),
  `khfm-jefes.js` (jefes de la historia) y `khfm-sora.js` (partidas, elección, magias, invocaciones). Imágenes en
  `assets/img/khfm/<armas|gumi|coliseo>/` (en `coliseo/` también los jefes, `jefe-*.webp`).
- `DESIGN.md`: sistema de diseño (vidriera como elemento distintivo, tokens en `:root`).

**No cambiar los ids de conseguibles** (`bbs.logro.ACH_xxx`, `bbs.golpe.<pj>.<slug>`, `bbs.coso.<id>`,
`bbs.inf.*`, `bbs.peg.*`, `bbs.peg.mundo.*`): son las claves del progreso guardado del usuario.

## Cómo se investigaron los datos (útil para seguir)
- Logros Steam (app 2552430): `https://steamcommunity.com/stats/2552430/achievements/?l=spanish`
  trae un JSON embebido (`internal_key`, `api_name`, `name`, `description`). BBS = ACH_153…ACH_197.
  % globales: `ISteamUserStats/GetGlobalAchievementPercentagesForApp/v2/?gameid=2552430`.
- Wiki ES: WebFetch da 402; usar la API con curl/Python:
  `https://kingdomhearts.fandom.com/es/api.php?action=parse&page=<título>&prop=wikitext&format=json`.
- KHWiki (inglés, muy completa): `https://www.khwiki.com/api.php` (misma API). Imágenes en kh.wiki.gallery.
- Guía de logros en castellano (Steam, id 3300421820): lista de comandos de cada personaje, recetas de
  síntesis, retos, minijuegos y estrategias. Descargarla con curl y convertir a texto.
- Iconos de logros, renders y logos ya están en `assets/img/`. Imágenes de KHWiki: descargar y convertir a WebP en el
  scratchpad (Pillow en un venv) y copiar con `cp <scratchpad>/out*/*.webp <proyecto>/assets/img/bbs/build/`
  (permitido en `.claude/settings.local.json`).

## Pendiente (en este orden; última sesión: 21-10-2026)
0. **Build recomendada rehecha** (21-10-2026, pendiente de que el usuario la revise): selector de combate,
   ficha de cada pieza con qué es, cómo se consigue, receta e ingredientes, GIFs del juego y habilidades con su
   cristal. Coso con emblemas, rondas, reto extra y estrategia (también pendiente de revisión).
   Jefes de la historia de los tres personajes hechos (pendiente de revisión).
1. **Comandos de cada personaje y Nexos-D hechos** (pendiente de revisión). Los comandos se marcan (21-10-2026):
   ids `bbs.cmd.<pj>.<slug>`, salvo los que solo salen de un tablero, que usan `bbs.tablero.cmd.<pj>.<slug>` (una sola
   marca); cuentan para el 100 % del personaje. Nexos-D: solo cómo se consigue cada uno
   (`src/data/bbs-nexos.js`); el usuario no quiere la lista de comandos de cada Nexo. Si no hay datos, no se pone nada.
1b. **Tesoros de BBS hechos** (21-10-2026, pendiente de revisión): `src/data/bbs-tesoros.js` (**generado** con
   `notas/herramientas/genera_tesoros.py` desde la hoja «Treasures» de la guía de Steam 3292773479, en CSV). Ids
   `bbs.tesoro.<pj>.<mundo>.<zona>.<contenido>`; cuentan para el 100 % salvo los `extra` (tutorial de Ventus y Reino de la
   Oscuridad de Aqua). Cofre de cada mundo: `assets/img/bbs/build/cofre-*.webp` (KHWiki). Solo mundo, zona y contenido
   (el usuario no quiere las indicaciones de cómo llegar). **Zonas en castellano:** las que tienen fuente (Wiki ES, guía de
   Steam) y el resto traducidas por petición del usuario (`ZONA_TRAD` del generador, marcadas `zt`; la web enseña el
   nombre inglés al pasar el ratón). Los ids usan el nombre inglés de la zona, así que traducir no rompe el progreso.
2. **Pegatinas por mundo hechas** (`src/data/bbs-pegatinas.js`, generado; ids `bbs.peg.mundo.<pj>.<mundo>`, cuentan para el
   100 %). El usuario las quiere simples: mundo, número y zona; sin imágenes.
3. Siguientes juegos: KH Final Mix, Re:Chain of Memories, KH II Final Mix (KH FM y KH II FM tienen «Informes Ansem»).
   **KH Final Mix: plan en `notas/plan-khfm.md`.** Entregas 1 y 2 hechas el 21-10-2026 (pendientes de revisión): `#/khfm` con logros,
   ruta, mundos/cerraduras y diario de Pepito; acento `--khfm` (azul del corazón del logo). Cofres: no se listan (el logro
   solo pide 100). Dálmatas con ubicaciones de Final Mix (Destiny Islands + wiki inglesa, filas «FM»); «Los récords» = jugar 9
   minijuegos, sin puntuación (guía de Steam en castellano). **Entrega 3 (armas y síntesis) hecha** el 21-10-2026, pendiente de revisión
   (`src/data/khfm-armas.js`, imágenes en `assets/img/khfm/armas/`; ids `khfm.arma.<id>` y `khfm.sintesis.<id>`, las 3 armas
   de la lista VI usan solo su id de arma). **Entrega 4 (naves gumi) hecha** el 21-10-2026, pendiente de revisión
   (`src/data/khfm-gumi.js`, imágenes en `assets/img/khfm/gumi/`; ids `khfm.gumi.mision.<mundo>.<n>` y `khfm.gumi.plano.<id>`,
   los planos de misión usan el id de su misión III). Piezas gumi: «Gumi Electro», «Gumi Electro+»… cuando hay fuente; si no,
   inglés entre «». **Entrega 5 (Coliseo y jefes secretos) hecha** el 21-10-2026, pendiente de revisión
   (`src/data/khfm-coliseo.js`, imágenes en `assets/img/khfm/coliseo/`; ids `khfm.coliseo.<copa>.<normal|solo|contrarreloj>`
   y `khfm.jefe.<id>`). Faltan los jefes de la historia (no entraron en esta entrega). **Entrega 6 (Sora y dificultad) hecha**
   el 21-10-2026, pendiente de revisión (`src/data/khfm-sora.js`; ids `khfm.magia.<id>.<1-3>` y `khfm.invoc.<id>`).
   **Jefes de la historia hechos y KH FM reorganizado en una página por sección** (21-10-2026, pendiente de revisión;
   ids `khfm.jefe.<id>`). **KH FM queda completo.** Nombres de jefes: los de la Wiki ES («Acechador», «Jaula Parásita»,
   «Armadura Inversa», «Bégimo»…). Sin datos: Riku y Riku-Ansem (no tienen estrategia ni premio de FM en KHWiki).
   **Siguiente: Re:Chain of Memories o KH II FM** (preguntar al usuario cuál).
   **Fuentes de KH FM (mejor que la Wiki ES, que a menudo da el KH original sin los cambios de Final Mix):**
   - Guía de logros de KH1 en castellano (Steam 3293246581): perdibles, consejos, dónde sale cada llave espada, bastón y escudo,
     materiales de síntesis y sus sincorazón, planos gumi. Otras guías de Steam: 3279160251 (síntesis y materiales),
     3277287477 (100 % paso a paso, inglés), 3267866514 (dálmatas, castellano, ubicaciones del original).
     Buscar más con `steamcommunity.com/app/2552430/guides/?searchText=...` y pasarlas a texto como la de BBS.
   - Destiny Islands (`destinyislands.com/kh-fm/`: weapons, synthesis, accessories, gummi-ship, collectables/treasure-chests…),
     específica de Final Mix. curl da 406: usar WebFetch.
   - Wiki inglesa de Fandom (`kingdomhearts.fandom.com/api.php`, misma API): marca las filas «(FM)».
   - KHWiki: la API daba 503; `notas/herramientas/khtexto.py` baja las páginas en HTML (solo funcionan las que están en caché).
   358/2 Days y Re:coded no van: en la colección son solo películas.
4. **KH III + Re Mind** (22-10-2026, pendiente de revisión; juego aparte en Steam, app 2552450): `#/kh3` con los 51 logros
   (`kh3-logros.js` generado con `notas/herramientas/genera_kh3_logros.py`), ruta y consejos (`kh3.js`), y la sección
   `#/kh3/artema` (`kh3-artema.js`): receta, los 7 Orichalcum+ marcables (`kh3.oricalco.<id>`), cristales, mejoras.
   Ids `kh3.logro.ACH_xx`, `kh3.artema.<paso>`. Acento `--kh3` (lila del logo). Nombres de materiales: Wiki ES
   (Wellspring = «Poder», Lucid = «Claro», Pulsing = «Fuerza», comprobado por las caídas). Las guías de Steam dieron
   «too many requests»: reintentar. **Portafortuna hechos** (22-10-2026, pendiente de revisión): `#/kh3/portafortuna`
   (`kh3-portafortuna.js`, a mano), numeración y capturas de KHWiki (`assets/img/kh3/portafortuna/`), ids
   `kh3.portafortuna.<mundo>.<n>`; la numeración de la Wiki ES es distinta. **Siguientes entregas:** tesoros, Orfebrería y materiales, Flantásticos y minijuegos, nave gumi, cocina, Re Mind (datos y méritos de códigos).
