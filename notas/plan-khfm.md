# Plan · Guía 100 % de Kingdom Hearts Final Mix

Plan por entregas (pendiente de que el usuario lo apruebe): cada una se enseña al usuario antes de seguir. Mismas reglas que BBS
(castellano oficial, nunca inventar datos, fuentes en cada sección, todo marcable).

## Qué es el «100 %» en KH Final Mix
El juego no tiene un porcentaje propio. La guía lo define con dos progresos, igual que en BBS:
- **Logros de Steam** (dorado): ACH_1 … ACH_55 de la app 2552430 (comprobado el 21-10-2026: 55 logros,
  nombres en español con la cookie `Steam_Language=spanish`; sin ella Steam los da en inglés).
- **Diario de Pepito · 100 %** (azul): lo que pide el logro ACH_33 «Ayudante de Pepito» (diario completo) más
  todo lo coleccionable aunque no tenga logro (armas, síntesis, piezas y planos gumi, cofres, invocaciones…).
  Qué entra exactamente se decide con las fuentes; si algo no cuenta para el diario, se marca como «extra».

Un solo personaje jugable (Sora): no hay selector de personaje. El hub del juego va directo a las secciones.

## Secciones (cada una con sus fuentes y elementos marcables)
1. **Ruta y logros**: orden recomendado para hacer el 100 % en una partida, con los perdibles avisados
   (cofres, Dálmatas, marcas Trío, objetos que solo salen en un momento). Cada logro con consejo.
2. **Mundos**: por mundo, cerradura (ACH_22–32), cofres, Dálmatas, marcas Trío, jefes
   y lo que se consigue allí. Es la sección central; las demás enlazan a ella.
3. **Diario de Pepito**: Historia, Informes Ansem, Personajes, 101 Dálmatas, marcas Trío y Minijuegos
   (ACH_33–39), cada entrada marcable con cómo se consigue.
4. **Armas**: llaves espada (Sora), bastones (Donald) y escudos (Goofy) (ACH_52–55): dónde, cómo y
   estadísticas/habilidad. Ficha por arma con imagen, como en la build de BBS.
5. **Síntesis (Moguri)**: recetas, materiales y dónde se consiguen, orden para desbloquear listas
   (ACH_40–44).
6. **Naves gumi**: rutas, misiones I–III, planos (≥ 30), piezas, abatir 2.500 enemigos, personalizar
   (ACH_45–51). Recomendación de nave y de ruta para farmear.
7. **Coliseo del Olimpo**: copas Fil, Pegaso, Hércules y Hades, desafíos en solitario y contrarreloj, Titán
   Hielo y Sefirot (ACH_10–17), con requisitos de desbloqueo y estrategia.
8. **Jefes**: de la historia y secretos de Final Mix (Hombre misterioso, Espectro, Kurt Zisa, Mundo caótico…):
   debilidades, recompensas y estrategia (ACH_6–9).
9. **Sora**: elección inicial (espada/escudo/varita) y cómo cambia las habilidades por nivel, magias y sus
   niveles, invocaciones, habilidades y build recomendada. Subir a nivel 100 (ACH_18) y farmeo de platines
   y sincorazón (ACH_19–21).
10. **Dificultad**: Experto, sin cambiar equipo, sin continuar, menos de 15 h (ACH_1–6), con qué partidas
    conviene hacerlos (no todos caben en la misma).

Si una sección no tiene datos con fuente, no se pone (regla del proyecto).

## Fuentes a investigar (en este orden)
- Steam: logros y % globales (ya localizado, ver arriba).
- Wiki ES (`api.php`): nombres oficiales de mundos, objetos, armas, jefes y entradas del diario.
- KHWiki (`api.php`): tablas completas de cofres, Dálmatas, marcas Trío, síntesis, gumi y armas; imágenes.
- Guía de logros en castellano de Steam si existe una para KH FM (buscarla como la 3300421820 de BBS).
- Cuando dos fuentes no coincidan: mostrar ambas o `nota`.

## Datos e ids
- Archivos: `src/data/khfm-logros.js` (generado), `khfm.js` (fuentes, ruta, mundos) y uno por sección grande
  (`khfm-armas.js`, `khfm-sintesis.js`, `khfm-gumi.js`, `khfm-diario.js`…). Scripts en `notas/herramientas/`.
- Ids estables desde el primer día: `khfm.logro.ACH_x`, `khfm.cofre.<mundo>.<n>`, `khfm.dalmata.<n>`,
  `khfm.trio.<id>`, `khfm.arma.<slug>`, `khfm.sintesis.<slug>`, `khfm.gumi.<tipo>.<slug>`, `khfm.diario.<sec>.<slug>`.
- Rutas: `#/khfm` (hub con secciones) y `#/khfm/<seccion>`. `juegos.js`: `disponible: true` al terminar la 1.ª entrega.

## Interfaz
Mismo sistema de diseño (`DESIGN.md`, vidriera, tokens en `:root`, oscuro por defecto con claro, AA, 390/1280 px,
reduced-motion). Acento propio de KH1 a decidir con el usuario en la 1.ª entrega. Listas largas (cofres, Dálmatas)
con filtro por mundo y «ocultar hechos». Revisión con `revisar-diseno` en cada entrega.

## Entregas
1. Base del juego + logros + ruta + mundos con cerraduras. Hecha.
2. Diario de Pepito (Informes Ansem, Dálmatas, marcas Trío, récords). Hecha; los cofres no se listan porque el logro solo pide 100.
3. Armas y síntesis. Hecha (48 armas con valores de Final Mix; 33 recetas en 6 listas y 34 materiales).
4. Naves gumi. Hecha (30 misiones, 48 planos con la ruta de cada nave enemiga, nave base de la guía de Steam).
5. Coliseo y jefes. Hecha la parte del Coliseo (4 copas × 3 modos, combates de oro y platino) y los 3 jefes secretos;
   los jefes de la historia, hechos después (22, en `khfm-jefes.js`).
7. Organización: portada `#/khfm` con una tarjeta por sección y una página por sección (`#/khfm/<id>`). Hecha.
6. Sora (habilidades, magia, invocaciones, build) y dificultad. Hecha: dos partidas, elección inicial (estadísticas),
   preguntas y ritmos, 21 niveles de magia, 6 invocaciones y nivel 100. Sin datos con fuente para las habilidades por
   nivel de cada elección ni para una build: no se ponen.
