# Plan · Guía 100 % de Kingdom Hearts II Final Mix

Plan por entregas (aprobado el 26-10-2026; entrega 1 hecha ese día): cada entrega se enseña al usuario
antes de seguir. Mismas reglas que BBS, KH FM y KH III (castellano oficial, nunca inventar datos, fuentes en cada sección,
todo marcable, si no hay datos no se pone nada).

## Qué es el «100 %» en KH II Final Mix
Dos progresos, como en los demás juegos:
- **Logros de Steam** (dorado): **ACH_103 … ACH_152** de la app 2552430, 50 logros (comprobado el 26-10-2026 con la
  cookie `Steam_Language=spanish`). Ojo: ACH_056…ACH_102 son de Re:Chain of Memories (incluidos los cinco del Bosque de
  los Cien Acres, ACH_063–067), no de KH II.
  - Historia (17): ACH_103–105 (Maestro, Experto, final), ACH_120–133 (un logro por mundo + «El reencuentro»).
  - Colección (5): ACH_106 nivel 99, ACH_107 «Mi héroe», ACH_146 monopatín 5000, ACH_147 Struggle, ACH_148 antiforma ×13.
  - Diario de Pepito (12): ACH_134–145 (Informes Ansem, Personajes, Sincorazón, Incorpóreos, Tesoros, Puzles, Mapas,
    Misiones, Minijuegos, Límites, Notas de fabricación, Relaciones).
  - Copas (8): ACH_112–119 (4 copas y 4 copas Paradoja).
  - Jefes secretos (4): ACH_108 Consciencia latente, ACH_109 Sephiroth, ACH_110 réplicas de la Organización XIII,
    ACH_111 Micorganización XIII.
  - Nave gumi (4): ACH_149–152 (rango S en una, en todas, en todas las EX; todos los planos).
- **Diario de Pepito · 100 %** (color del juego): todo lo que piden las 12 secciones del diario (cada cofre, pieza de
  puzle, mapa, misión, informe…) más lo coleccionable sin logro (llaves espada, armas de Donald y Goofy, niveles de
  fusión e invocación). Lo que no cuente para el diario va como «extra», como en KH FM.

Según la guía de logros en castellano **no hay perdibles**: todo cabe en una partida en Maestro (o la historia en Maestro y
el resto en Principiante). Un solo personaje (Sora; el prólogo con Roxas no suma cofres para «Tesoros»): sin selector de
personaje, el hub va directo a las secciones, como KH FM.

## Secciones (una página por sección, `#/kh2fm/<seccion>`, con anterior/siguiente como KH FM)
1. **Ruta y logros** (`ruta`): portada `#/kh2fm`. Orden recomendado, dificultad y elecciones iniciales (arma de Roxas:
   porra/espada/varita; de Sora: espada/escudo/bastón), los 50 logros agrupados y enlazados a su sección, con consejo.
2. **Mundos** (`mundos`): los 13 mundos con logro de historia (ACH_120–132) y en cada uno lo que hay allí (cofres, mapas,
   jefes, misiones, setas de la Micorganización, Esencias intangibles), enlazado a su sección. Incluye Bastión Hueco /
   Vergel Radiante, Castillo Disney y el Mundo Inexistente aunque no tengan logro propio.
3. **Diario de Pepito** (`diario`): Informes Ansem (13), Personajes, Relaciones, Sincorazón (con dónde sale cada uno,
   incluidos los de la Gruta de la Evocación), Incorpóreos y Límites (cada límite de aliado e invocación).
   Ids: `kh2fm.ansem.<n>`, `kh2fm.personaje.<id>`, `kh2fm.relacion.<id>`, `kh2fm.sincorazon.<id>`,
   `kh2fm.incorporeo.<id>`, `kh2fm.limite.<id>`.
4. **Tesoros, puzles y mapas** (`tesoros`): cada cofre por mundo y zona con su contenido (lista grande, filtro por mundo y
   «ocultar hechos»), las piezas de puzle y los puzles que se completan, y los mapas. La Gruta de la Evocación aparte (su
   último cofre exige vencer a todas las réplicas). Ids: `kh2fm.tesoro.<mundo>.<n>`, `kh2fm.puzle.<id>`, `kh2fm.mapa.<id>`.
5. **Orfebrería Moguri** (`orfebreria`): recetas (Notas de fabricación) por lista, los materiales con los enemigos que los
   sueltan, las recompensas de colección del moguri y el Arma Artema con los 7 Orichalcum+ marcables.
   Ids: `kh2fm.sintesis.<id>`, `kh2fm.material.<id>`, `kh2fm.oricalco.<id>`.
6. **Sora** (`sora`): fusiones (Valor, Sabiduría, Límite, Maestra, Final y antiforma; nombres a confirmar con la Wiki ES) con
   sus niveles 1–7 y habilidades de crecimiento, invocaciones (Chicken Little, Genio, Stitch, Peter Pan) y cómo subirlas,
   magias, llaves espada y armas de Donald y Goofy (ficha con imagen, como las armas de KH FM), nivel 99.
   Ids: `kh2fm.fusion.<id>.<nivel>`, `kh2fm.invoc.<id>.<nivel>`, `kh2fm.magia.<id>.<n>`, `kh2fm.arma.<id>`.
7. **Minijuegos y misiones** (`minijuegos`): lo que piden las secciones «Misiones» y «Minijuegos» del diario, por mundo
   (trabajillos y Struggle de Villa Crepúsculo, monopatín, Bosque de los Cien Acres, canciones de Atlántica, alfombra y
   patín de arena de Agrabah, Infiernódromo del Coliseo…) con la puntuación que pide cada uno y el consejo.
   Ids: `kh2fm.mision.<id>`, `kh2fm.minijuego.<id>`.
8. **Coliseo** (`coliseo`): 4 copas y 4 copas Paradoja (ACH_112–119), desbloqueo, rondas y estrategia.
   Ids: `kh2fm.copa.<id>` (las que tienen logro usan el id del logro, una sola marca).
9. **Jefes** (`jefes`): de la historia (por mundo, con premio y estrategia) y secretos de Final Mix: las 13 réplicas de
   la Organización XIII (Esencias intangibles y versiones de datos), Sephiroth, Consciencia latente y la Micorganización
   XIII (13 setas con su ubicación). Ids: `kh2fm.jefe.<id>`, `kh2fm.replica.<id>`, `kh2fm.seta.<n>`.
10. **Nave gumi** (`gumi`): rutas, misiones normales y EX con el rango S, planos y cómo se consigue cada uno.
    Ids: `kh2fm.gumi.mision.<ruta>.<n>`, `kh2fm.gumi.ex.<ruta>.<n>`, `kh2fm.gumi.plano.<id>`.

Si una sección no tiene datos con fuente, no se pone (regla del proyecto).

## Fuentes (comprobadas el 26-10-2026)
- Steam: logros (página `?l=spanish`, ver arriba) y % globales (`GetGlobalAchievementPercentagesForApp`).
- **Guía de logros de KH HD 2.5 ReMIX en castellano** (Steam 3298321979): base de la guía. Trae: sin perdibles, elecciones,
  truco para subir invocaciones, límites de cada aliado, materiales y sus enemigos, recompensas de colección, los 7
  Orichalcum+, lista de sincorazón con mundos, las 13 setas, consejos de cada misión y minijuego, copas, jefes secretos y gumi.
- Guías de Steam en inglés: 3294034108 (completa: cada entrada del diario, misiones, planos), 3267298064 (checklist),
  3332619620 (réplicas de la Organización), 3268532837 (subir fusiones e invocaciones), 3267058896 (síntesis y Arma
  Artema), 3268676286 (todos los objetos), 3287632071 (llaves espada).
- Wiki ES (`api.php`): nombres oficiales de mundos, zonas, objetos, jefes, fusiones y entradas del diario.
- KHWiki (`api.php` o `notas/herramientas/khtexto.py`): tablas de cofres por zona, réplicas, gumi, imágenes.
- Destiny Islands: comprobar si tiene sección de KH II FM como la de KH FM.
- Cuando dos fuentes no coincidan: mostrar ambas o `nota`.

## Datos e ids
- Ruta y prefijo: `#/kh2fm` y `kh2fm.` (el id del juego en `juegos.js` ya es `kh2fm`). Logros: `kh2fm.logro.ACH_xxx`.
- Archivos: `src/data/kh2fm-logros.js` (generado con `notas/herramientas/genera_kh2fm_logros.py`, copia del de KH FM con
  ACH_103…ACH_152), `kh2fm.js` (fuentes, grupos de logros, ruta, consejos, mundos) y uno por sección
  (`kh2fm-diario.js`, `kh2fm-tesoros.js`, `kh2fm-orfebreria.js`, `kh2fm-sora.js`, `kh2fm-minijuegos.js`,
  `kh2fm-coliseo.js`, `kh2fm-jefes.js`, `kh2fm-gumi.js`). Las listas largas (cofres, sincorazón) generadas con script.
- Imágenes en `assets/img/kh2fm/<seccion>/` (WebP), iconos de logros en `assets/img/kh2fm/logros/`.
- `juegos.js`: `disponible: true` al terminar la 1.ª entrega.

## Interfaz
Mismo sistema (`DESIGN.md`, vidriera, tokens en `:root`, oscuro por defecto con claro, AA, 390/1280 px, reduced-motion).
Acento `--kh2fm` a decidir con el usuario: propuesta, el azul índigo del «II» del logo (más oscuro y violáceo que el azul de
KH FM y más azul que el lila de KH III). El dorado de la corona no vale: es el color de «Logros». Revisión con
`revisar-diseno` en cada entrega.

## Entregas (1–8 hechas 26 y 27-10-2026, pendientes de revisión del usuario y de commit)
1. Base del juego: logros, ruta, portada con tarjetas por sección y Mundos.
2. Diario de Pepito (Informes Ansem, Personajes, Relaciones, Sincorazón, Incorpóreos, Límites).
3. Tesoros, puzles y mapas (incluida la Gruta de la Evocación).
4. Orfebrería Moguri y Arma Artema.
5. Sora: fusiones, invocaciones, magias y armas.
6. Minijuegos y misiones.
7. Coliseo.
8. Jefes de la historia y jefes secretos (réplicas, Sephiroth, Consciencia latente, Micorganización XIII).
9. Nave gumi. **Pendiente: es lo único que falta de KH II FM.**

## Pendiente al cerrar KH II FM
- Entrega 9 (nave gumi): `#/kh2fm/gumi`, ids `kh2fm.gumi.mision.<ruta>.<n>`, `kh2fm.gumi.ex.<ruta>.<n>`, `kh2fm.gumi.plano.<id>`.
  Fuentes: guía de logros en castellano (Steam 3298321979, apartado de la nave gumi) y guía de Steam en inglés 3294034108.
- Revisión del usuario de las entregas 1–8 y commit (solo cuando lo pida).
- Huecos sin fuente en castellano (no inventar; dejar en inglés entre «» o quitar):
  - «Skillful Ring» (premio de la Copa Titán) y «Protect Belt» (Copa Dolor y Pánico; la Wiki ES enlaza «Gaia Belt»).
  - Estrategia de Capitán Barbossa (KHWiki no tiene; la ficha muestra solo la bonificación).
  - Riku-Ansem: la estrategia de KHWiki no está en castellano; revisar si la guía de Steam la trae.
  - 5 zonas sin fuente y los 3 mapas de la Gruta de la Evocación (ver `kh2fm-tesoros-info.js`).
  - Imágenes: Pete de Río Eterno reutiliza la del Coliseo; Axel de Villa Crepúsculo, la de Chain of Memories.
- Ruta de KH II FM: al terminar la entrega 9, `disponible: true` ya está; la etiqueta «En preparación» de `juegos.js` se quita.
