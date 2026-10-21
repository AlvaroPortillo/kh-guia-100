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
- `src/app.js`: router por hash (`#/`, `#/juegos`, `#/bbs`, `#/bbs/<pj>`) y vistas como plantillas de texto.
  Todo texto dinámico pasa por `esc()`.
- `src/store.js`: progreso (API de SQLite + copia en `localStorage`). `src/cursor.js`: estela de llave espada (solo ratón y sin reduced-motion).
- `src/data/bbs-logros.js`: **generado** desde la página de logros de Steam (no editar a mano).
- `src/data/bbs.js`: fuentes, personajes, ruta de logros, golpes finales, estilos, Cuartelillo,
  Coso Virtual, consejos por logro y builds.
- `src/data/bbs-informes.js`: Informes Xehanort, minijuegos, retos, helados y pegatinas.
- `src/data/bbs-build.js`: build interactiva (combates → baraja → ficha de cada pieza), habilidades, cristales
  y sus fuentes (`FUENTES_BUILD`, que se mezclan en `FUENTES`). Imágenes en `assets/img/bbs/build/`.
- `src/data/bbs-coso.js`: rondas, reto extra HD y estrategia de cada combate del Coso (se abren fichas de la build).
- `src/data/bbs-jefes.js`: jefes de la historia por personaje (debilidades, recompensas, diario oficial, estrategia).
- `src/data/bbs-comandos.js`: **generado** (scripts en `notas/herramientas/`): comandos de cada personaje con ficha,
  vías de obtención y recetas. No editar a mano.
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
1. **Comandos de cada personaje y Nexos-D hechos** (pendiente de revisión). Nexos-D: solo cómo se consigue cada uno
   (`src/data/bbs-nexos.js`); el usuario no quiere la lista de comandos de cada Nexo. Si no hay datos, no se pone nada.
2. **Pegatinas por mundo hechas** (`src/data/bbs-pegatinas.js`, generado; ids `bbs.peg.mundo.<pj>.<mundo>`, cuentan para el
   100 %). El usuario las quiere simples: mundo, número y zona; sin imágenes.
3. Siguientes juegos: KH Final Mix, Re:Chain of Memories, KH II Final Mix (allí sí hay «Informes Ansem»).
