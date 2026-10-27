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
`GET /api/estado` y restaurarlo después con `PUT /api/estado`. Antes de restaurar, vaciar el `localStorage` del navegador de
Playwright: si no, al recargar vuelve a subir a la BD las marcas de prueba. Nunca vaciar la BD: puede tener progreso real.

**Publicada** en https://alvaroportillo.github.io/kh-guia-100/ (GitHub Pages desde `main`; repo público). Allí no hay
`server.py`: el progreso queda solo en el `localStorage` del navegador. Pages cachea 10 min; si tras un push no se
publica, `gh api -X POST repos/AlvaroPortillo/kh-guia-100/pages/builds`. Portada de proyectos en el repo
`alvaroportillo.github.io` (carpeta hermana `../alvaroportillo.github.io`).
Ojo con `hidden`: `[hidden] { display: none !important; }` en `styles.css` (una clase con `display` lo pisaba).

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
   ids `bbs.cmd.<pj>.<slug>` (`slugCmd`: «+» = «-mas», arreglado el 26-10-2026 porque Piro, Piro+ y Piro++ compartían marca), salvo los que solo salen de un tablero, que usan `bbs.tablero.cmd.<pj>.<slug>` (una sola
   marca); cuentan para el 100 % del personaje. Nexos-D: solo cómo se consigue cada uno
   (`src/data/bbs-nexos.js`); el usuario no quiere la lista de comandos de cada Nexo. Si no hay datos, no se pone nada.
1b. **Tesoros de BBS hechos** (21-10-2026, pendiente de revisión): `src/data/bbs-tesoros.js` (**generado** con
   `notas/herramientas/genera_tesoros.py` desde la hoja «Treasures» de la guía de Steam 3292773479, en CSV). Ids
   `bbs.tesoro.<pj>.<mundo>.<zona>.<contenido>`; cuentan para el 100 % salvo los `extra` (tutorial de Ventus y Reino de la
   Oscuridad de Aqua). Cofre de cada mundo: `assets/img/bbs/build/cofre-*.webp` (KHWiki). Solo mundo, zona y contenido
   (el usuario no quiere las indicaciones de cómo llegar). **Zonas en castellano:** las que tienen fuente (Wiki ES, guía de
   Steam) y el resto traducidas por petición del usuario (`ZONA_TRAD` del generador, marcadas `zt`; la web enseña el
   nombre inglés al pasar el ratón). Los ids usan el nombre inglés de la zona, así que traducir no rompe el progreso.
1c. **Niveles del Coso hechos** (25-10-2026, pendiente de revisión): sección «Coso» (`#coso-niveles`) en la página de cada
   personaje (modo Informes, una casilla por misión) y en el hub de BBS (los dos modos, tres casillas por misión), con
   las 29 misiones de Final Mix que suben del nivel 1 al 30 (`NIVELES_COSO` en `bbs.js`, KHWiki «Arena Mission»), una marca
   por personaje (`bbs.cosonivel.<pj>.<id>`), que cuenta para el 100 % de ese personaje.
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
   `kh3.portafortuna.<mundo>.<n>`; la numeración de la Wiki ES es distinta. **Tesoros hechos** (25-10-2026, pendiente de revisión):
   `#/kh3/tesoros` (`kh3-tesoros.js`, a mano), los 245 cofres en el orden de ruta de PowerPyx con el n.º del gumífono y cómo
   llegar, contrastados con las páginas de objeto de KHWiki. Ids `kh3.tesoro.<mundo>.<n>`; los dos Orichalcum+ reutilizan
   `kh3.oricalco.exile` y `kh3.oricalco.mundo-final`. Nombres de objeto: Wiki ES emparejada por katakana con KHWiki.
   **Orfebrería hecha** (25-10-2026, pendiente de revisión): `#/kh3/orfebreria`, los 88 objetos con receta agrupados por
   lo que los desbloquea, las 20 misiones fotográficas (`kh3-orfebreria.js`, a mano) y los 60 materiales con sus enemigos
   (`kh3-sintesis.js`, **generado** con `notas/herramientas/genera_kh3_sintesis.py`). Ids `kh3.sintesis.<id>` (el Arma Artema
   usa `kh3.logro.ACH_44`), `kh3.foto.<n>`, `kh3.material.<id>`. Familias de materiales: Wiki ES por nombre japonés
   (Blazing = Ígneo, Soothing = Vital, Betwixt = Neutro…; Guijarro/Roca/Gema/Cristal). Iconos en `assets/img/kh3/sintesis/`.
   **Minijuegos y nave gumi hechos** (25-10-2026, pendientes de revisión): `#/kh3/minijuegos` (`kh3-minijuegos.js`: Siete
   Flantásticos, 4 minijuegos con rango A, 23 juegos del Reino clásico enlazados a su cofre y récords del gumífono; ids
   `kh3.flan.<id>[.alta]`, `kh3.mini.<id>`, `kh3.clasico.<n>`, `kh3.record.<grupo>.<n>`) y `#/kh3/gumi` (`kh3-gumi.js`:
   9 constelaciones, 36 tesoros de los combates y Schwarzgeist; ids `kh3.constelacion.<id>`, `kh3.gumi.tesoro.<ruta>.<n>`;
   Schwarzgeist usa el id de su logro). Nombres de shotlocks, naves, combates gumi y constelaciones: inglés entre «».
   **Cocina y Re Mind hechos** (25-10-2026, pendientes de revisión): `#/kh3/cocina` (`kh3-cocina.js` **generado** con
   `notas/herramientas/genera_kh3_cocina.py` desde KHWiki + textos a mano en `kh3-bistro.js`; ids `kh3.plato.<id>` con
   «Excelente» y `kh3.ingrediente.<id>`; platos e ingredientes en inglés salvo las frutas de los flanes) y `#/kh3/remind`
   (`kh3-remind.js`: episodios, 13 datos `kh3.datos.<id>`, 9 retos PRINCIPIANTE `kh3.merito.<id>`, códigos EXPERTO y jefes
   de mérito `kh3.jefe-exp.<id>` con suma de puntos). Marshmallow = **Merengue** (Wiki ES).
   **Adversarios y Jefes hechos** (25-10-2026, pendientes de revisión): `#/kh3/adversarios` (`kh3-adversarios.js`
   **generado** con `notas/herramientas/genera_kh3_adversarios.py`, 81 tarjetas con imagen; ids `kh3.adversario.<id>`) y
   `#/kh3/jefes` (`kh3-jefes.js`, a mano: jefes por mundo con premio y estrategia de KHWiki, `kh3.jefe.<id>`; datos de Re
   Mind con estrategia, mismas marcas `kh3.datos.<id>`; Yozora usa el id de su logro). Lightning Angler = Rape Eléctrico,
   Grim Guardianess = Madre Enloquecida (Wiki ES). **KH III queda completo** (logros y 100 %).
   **Siguiente juego: KH II Final Mix** (elegido el 26-10-2026). **Plan en `notas/plan-kh2fm.md`** (aprobado el 26-10-2026):
   logros ACH_103…ACH_152, ruta `#/kh2fm`, ids `kh2fm.*`, 9 entregas. Fuente base: guía de logros en castellano de
   Steam 3298321979. **Entrega 1 hecha** (26-10-2026, pendiente de revisión): `kh2fm-logros.js` (**generado** con
   `notas/herramientas/genera_kh2fm_logros.py`), `kh2fm.js` (fuentes, grupos, ruta, consejos y mundos) y la sección
   `#/kh2fm/mundos` (logros de historia de cada mundo + Esencias intangibles, setas, minijuegos y jefes con Mickey).
   Ids `kh2fm.logro.ACH_xxx`; los mundos usan las marcas de sus logros. Acento `--kh2fm` (cobalto del «II» del logo).
   **Entrega 2 hecha** (26-10-2026, pendiente de revisión): `#/kh2fm/diario` (`kh2fm-diario.js`, a mano): 13 Informes Ansem
   (`kh2fm.ansem.<n>`), 82 sincorazón (`kh2fm.sincorazon.<slug>`: los 71 de la guía ES + 11 jefes; Anzuelo = Perplex/Beffudler),
   11 incorpóreos (`kh2fm.incorporeo.<slug>`), 21 límites (`kh2fm.limite.<slug>`). Personajes y Relaciones no tienen lista con
   fuente: solo su logro. Nombres comprobados con el campo «ingles» de las fichas de la Wiki ES.
   **Entrega 3 hecha** (26-10-2026, pendiente de revisión): `#/kh2fm/tesoros` con `kh2fm-tesoros.js` (**generado** con
   `notas/herramientas/genera_kh2fm_tesoros.py`: 301 cofres de Fandom inglés «Kingdom Hearts II item locations», 144 piezas y
   40 mapas de KHWiki) y `kh2fm-tesoros-info.js` (textos). Indicaciones traducidas en `kh2fm_trad_cofres.py` y `kh2fm_trad_puzles.py`;
   objetos en `kh2_objetos.py` (KH II: Shard = Guijarro, Stone = Roca, Gem = Piedra, Crystal = Cristal; Mythril Shard = Trozo de
   mitrilo). Zonas: diccionario `ZONAS` del generador con su fuente; las traducidas (marcadas `zt`) por petición del usuario.
   Ids `kh2fm.tesoro.<mundo>.<n>`, `kh2fm.puzle.<puzle>.<n>` y `.resuelto`, `kh2fm.mapa.<slug>`; los mapas de cofre usan el id del cofre.
   **Fuente en castellano:** guía de Megido en GameFAQs (82144, todo KH II con nombres oficiales; v0.3, incompleta). GameFAQs
   bloquea curl y WebFetch (Cloudflare): bajarla con Playwright (`fetch` desde la propia página).
   **Entrega 4 hecha** (26-10-2026, pendiente de revisión): `#/kh2fm/orfebreria` con `kh2fm-orfebreria.js` (**generado** con
   `notas/herramientas/genera_kh2fm_orfebreria.py`: 59 objetos de la plantilla `SynthKHII` de KHWiki y 60 materiales con enemigos
   y % de Fandom) y `kh2fm-artema.js` (a mano: niveles moguri, listas de colección, 7 Orichalcum+, Arma Artema). Imágenes de
   KHWiki en `assets/img/kh2fm/orfebreria/`. Ids `kh2fm.sintesis.<slug>`, `kh2fm.material.<slug>`, `kh2fm.oricalco.<id>`; los
   Orichalcum+ de cofre usan el id del cofre y el de la Copa Diosa del Destino, el de ACH_115. En los slugs, «+» = «-plus».
   **Entrega 5 hecha** (26-10-2026, pendiente de revisión): `#/kh2fm/sora` (`kh2fm-sora.js`, a mano): 5 formas con una casilla por
   nivel y lo que aprende Sora (`kh2fm.fusion.<forma>.<1-7>`), invocaciones (`kh2fm.invoc.<id>`, `kh2fm.invoc.nivel.<2-7>`), magia
   (`kh2fm.magia.<id>.<1-3>`), antiforma y nivel 99 con sus logros. Fuentes: KHWiki, guía de Steam 3268532837 y Megido.
   **Armas hechas** (26-10-2026, pendiente de revisión): `#/kh2fm/armas` con `kh2fm-armas.js` (**generado** con
   `notas/herramientas/genera_kh2fm_armas.py`: 64 armas de Fandom con valores de Final Mix; imágenes de KHWiki en
   `assets/img/kh2fm/armas/`). Nombres solo de fuentes en castellano: página de cada arma en la Wiki ES (enlace `[[en:...]]`) y
   guías. **El usuario no quiere traducciones propias:** buscar siempre el nombre en guías y foros en castellano (EliteGuías,
   KHWorld, blog de Joakokh, Megido, Wiki ES) antes de traducir. Ids `kh2fm.arma.<slug>`; las fabricadas usan el
   id de Orfebrería y las de cofre, el del cofre. MP Haste = Prisa PM (no Prisa Mágica, que es Magic Haste).
   **Entrega 6 hecha** (26-10-2026, pendiente de revisión): `#/kh2fm/minijuegos` (`kh2fm-minijuegos.js`, a mano): 40 minijuegos
   (`kh2fm.minijuego.<id>`) y 76 misiones del diario (`kh2fm.mision.<id>.<n>`); las setas usan `kh2fm.seta.<n>`, las Esencias
   `kh2fm.esencia.<id>` y las réplicas `kh2fm.replica.<id>` para compartirlas con la futura sección Jefes. Requisitos: guía de Steam
   3294034108; nombres y consejos: guía de logros en castellano; canciones de Atlántica: blog de Joakokh.
   Nombres de KH II que antes eran traducción propia, ya de guías en castellano (EliteGuías, KHWorld, Joakokh): solo quedan sin
   fuente 5 zonas y los 3 mapas de la Gruta. `server.py`: `request_queue_size = 128` (con la cola por defecto rechazaba módulos).
   La API de KHWiki vuelve a responder. **Entrega 7 hecha** (27-10-2026, pendiente de revisión): `#/kh2fm/coliseo`
   (`kh2fm-coliseo.js`, a mano: 8 copas con desbloqueo, reglas, premios y combates clave de KHWiki; trofeos en
   `assets/img/kh2fm/coliseo/`). Sin ids nuevos: cada copa usa su logro y las marcas de su entrada en Minijuegos (`mini`).
   **Entrega 8 hecha** (27-10-2026, pendiente de revisión): `#/kh2fm/jefes` (`kh2fm-jefes.js`, a mano): 38 jefes de la historia
   (tabla de la Wiki ES con bonificación + estrategia resumida de KHWiki; imágenes de KHWiki en `assets/img/kh2fm/jefes/`, la CDN
   de Fandom da 403), ids `kh2fm.jefe.<id>`. Secretos con las marcas ya existentes (logros ACH_108–111, `kh2fm.esencia.*`,
   `kh2fm.replica.*`, `kh2fm.seta.*`) y estrategias de la guía de Steam en castellano. Barbossa sin estrategia (KHWiki no tiene).
   Siguiente: entrega 9 (Nave gumi), la última de KH II FM. Plan y pendientes en `notas/plan-kh2fm.md`.
   **Plan maestro de todos los KH** (317 logros, guía de cada logro y de cada «100 %»): `notas/plan-todos-kh.md`.
   **Después: KH HD 2.8 Final Chapter Prologue, Dream Drop Distance (KH DDD)**, plan en `notas/plan-ddd.md`
   (app Steam 2552440: DDD tiene 54 logros, ACH_16…ACH_69; los 15 de ACH_01…ACH_15 son de 0.2 Birth by Sleep). **Hecho el 27-10-2026 (pendiente de revisión):** `#/ddd` y `#/ddd/<sección>`
   (historia, portales, lucientes, minijuegos, realidad, progreso, coleccion); ids `ddd.*`. Portales secretos: 11 (KHWiki). Estado en `notas/plan-ddd.md`. Acento propuesto `--ddd` `#FF66B2` / `#B3105F` (fucsia del logo). Guías en castellano: Gamerbase y KHWorld. Después, Re:Chain of Memories (ACH_056…ACH_102).
5. **KH 0.2 Birth by Sleep -A fragmentary passage-** (juego de Aqua, misma app 2552440, ACH_01…ACH_15). **Plan en
   `notas/plan-bbs02.md`** (aprobado el 27-10-2026). **Entrega 1 hecha** (27-10-2026, pendiente de revisión): `#/bbs02` con los 15
   logros y «Antes de empezar» (`bbs02.js`), y `#/bbs02/historia` (`bbs02-historia.js`: zonas, jefes con estrategia, jefe secreto;
   ids `bbs02.logro.ACH_xx`, `bbs02.jefe.<id>`). Acento `--aqua`. Fuente en castellano: guía de trofeos de Laps4 (51 objetivos con
   el texto del juego; Playwright la abre sin problema). **Entrega 2 hecha** (27-10-2026, pendiente de revisión): `#/bbs02/objetivos`
   (`bbs02-objetivos.js`, a mano): 51 objetivos con premio y ranura de KHWiki, filtro por partida y recuerdos persistentes; ids
   `bbs02.objetivo.<n>`. **El usuario no quiere copiar contenido ajeno:** sin imágenes de prendas, sin vídeos; como mucho un enlace
   directo con el autor como crédito. **Entrega 3 hecha** (27-10-2026, pendiente de revisión): `#/bbs02/cofres` (41 cofres al estilo
   de BBS, con contenido y lugar; ids `bbs02.cofre.<zona>.<n>`) y `#/bbs02/combate` (comandos de magia `bbs02.magia.<id>`).
   Portada con «Ruta al 100 %» (3 fases con progreso) y «Lo que se puede perder». **0.2 queda completo** (119 elementos). El usuario quiere que todo lo que falte se haga como BBS, el primero: metódico y bien organizado.
