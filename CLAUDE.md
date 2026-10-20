# Guía 100 % · Kingdom Hearts HD 1.5+2.5 ReMIX

Web personal (en castellano) para completar al 100 % los juegos de la colección en Steam.
El usuario la revisa poco a poco: hacer cambios por entregas y enseñarlos antes de seguir.

## Reglas del proyecto (pedidas por el usuario)
- **Todo en castellano**, con la terminología de la versión española oficial (logros de Steam en
  español, Wiki KH en español). Si solo hay nombre en inglés, no traducirlo por cuenta propia.
- **Nunca inventar datos.** Todo dato lleva fuente y cada sección de la app la enlaza (`fuentes([...])`).
  Si dos fuentes no coinciden, mostrar ambas o avisar con `nota` (ver golpes finales y Coso).
- **Dos progresos separados y visibles:** «Logros de Steam» (dorado) e «Informes · 100 %»
  (color del personaje o azul). El selector de modo (`ajustes.modo`) cambia toda la vista.
- **Cada conseguible es marcable** y se guarda en `localStorage` (`kh100:v1`), con exportar/importar.
- Orden de navegación: Título → Elegir juego → Hub del juego (los 3 personajes arriba del todo) →
  página de personaje.
- Commits y push solo cuando el usuario lo pida.

## Stack y ejecución
Web estática sin dependencias ni compilación (HTML + CSS + JS con módulos ES).
```sh
python -m http.server 5173   # y abrir http://127.0.0.1:5173
```
El servidor de Python cachea: al probar con Playwright, forzar `fetch(url, {cache:'reload'})` y recargar.

## Estructura
- `src/app.js`: router por hash (`#/`, `#/juegos`, `#/bbs`, `#/bbs/<pj>`) y vistas como plantillas de texto.
  Todo texto dinámico pasa por `esc()`.
- `src/store.js`: progreso. `src/cursor.js`: estela de llave espada (solo ratón y sin reduced-motion).
- `src/data/bbs-logros.js`: **generado** desde la página de logros de Steam (no editar a mano).
- `src/data/bbs.js`: fuentes, personajes, ruta de logros, golpes finales, estilos, Cuartelillo,
  Coso Virtual, consejos por logro y builds.
- `src/data/bbs-informes.js`: Informes Xehanort, minijuegos, retos, helados y pegatinas.
- `DESIGN.md`: sistema de diseño (vidriera como elemento distintivo, tokens en `:root`).

**No cambiar los ids de conseguibles** (`bbs.logro.ACH_xxx`, `bbs.golpe.<pj>.<slug>`, `bbs.coso.<id>`,
`bbs.inf.*`, `bbs.peg.*`): son las claves del progreso guardado del usuario.

## Cómo se investigaron los datos (útil para seguir)
- Logros Steam (app 2552430): `https://steamcommunity.com/stats/2552430/achievements/?l=spanish`
  trae un JSON embebido (`internal_key`, `api_name`, `name`, `description`). BBS = ACH_153…ACH_197.
  % globales: `ISteamUserStats/GetGlobalAchievementPercentagesForApp/v2/?gameid=2552430`.
- Wiki ES: WebFetch da 402; usar la API con curl/Python:
  `https://kingdomhearts.fandom.com/es/api.php?action=parse&page=<título>&prop=wikitext&format=json`.
- KHWiki (inglés, muy completa): `https://www.khwiki.com/api.php` (misma API). Imágenes en kh.wiki.gallery.
- Guía de logros en castellano (Steam, id 3300421820): lista de comandos de cada personaje, recetas de
  síntesis, retos, minijuegos y estrategias. Descargarla con curl y convertir a texto.
- Iconos de logros, renders y logos ya están en `assets/img/`.

## Pendiente
1. **Comandos de cada personaje** (ataque, magia, acción, defensa, Tiro certero, Nexo-D) con receta
   de síntesis o dónde conseguirlos. Fuente principal: guía de Steam en castellano + Wiki ES.
2. Ficha de cada pegatina (la Wiki ES no las lista; KHWiki y KH Realm sí, pero en inglés).
3. Siguientes juegos: KH Final Mix, Re:Chain of Memories, KH II Final Mix (allí sí hay «Informes Ansem»).
