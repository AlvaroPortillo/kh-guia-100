# Plan · Guía de Kingdom Hearts 0.2 Birth by Sleep -A fragmentary passage-

Juego de Aqua, dentro de KINGDOM HEARTS HD 2.8 Final Chapter Prologue (Steam app **2552440**, la misma que DDD).
Mismas reglas que el resto: castellano oficial, nunca inventar datos, fuente en cada sección, todo marcable, sin datos no se
pone nada. Aprobado el 27-10-2026.

## Logros: 15, ACH_01 … ACH_15
Ya generados en `src/data/bbs02-logros.js` (con `notas/herramientas/genera_ddd_logros.py`); iconos en `assets/img/bbs02/logros/`.
| Grupo | Logros |
|---|---|
| Historia | ACH_01–05 (Reino de la oscuridad, Aldea fortificada, Mundo interior, Bosque espinoso, final) |
| Dificultad y combate | ACH_08 Invicto, ACH_09 500 sincorazón, ACH_10 Hila encantos ×5, ACH_11 Experto/Maestro, ACH_12 los tres comandos mágicos, ACH_13 Tiro certero «Excelente», ACH_14 larga distancia |
| Coleccionismo | ACH_06 Cazatesoros (41 cofres), ACH_07 Ambición (51 objetivos), ACH_15 A la moda (una prenda en cada ranura) |

Perdibles (Laps4): Cazatesoros, Invicto y Ambición. Mínimo dos partidas: la primera en Principiante sin «Otra vez»/«Continuar»,
la segunda en Maestro con los objetivos traspasados (los objetivos 36, 41, 47 y 50 solo salen en Partida +).

## Fuentes
| Fuente | Qué aporta | Límites |
|---|---|---|
| [Laps4 — Guía de trofeos de 0.2](https://www.laps4.com/comunidad/threads/guia-trofeos-kingdom-hearts-0-2-birth-by-sleep-a-fragmentary-passage.432267/) (Zarped, 2017) | **En castellano:** los 51 objetivos con el texto del juego y cómo hacer cada uno, cofres por zona (41, 12 tras terminar), estrategia de dos partidas, cada trofeo | Prohíbe copiar: redactar con palabras propias. Sin lugar de cada cofre ni nombre de las prendas. Cloudflare: bajarla con Playwright |
| [KHWiki — Wardrobe (KH0.2)](https://www.khwiki.com/Wardrobe_(KH0.2)) | Premio de cada objetivo con su ranura (cabeza, brazos, espalda, diseño), cuándo se desbloquea | En inglés |
| [Destiny Islands — Treasure Chests](https://www.destinyislands.com/kh-0-2-bbs/collectables/treasure-chests) | Los 41 cofres en orden, con contenido, lugar y si salen tras terminar el juego (cuadra con Laps4) | En inglés; curl da 406 (usar WebFetch) |
| KHWiki — Zodiac symbols, Lingering memories, Phantom Aqua, Demon Tide | 12 reliquias del Zodíaco (en cofres), 4 recuerdos persistentes, jefe secreto | En inglés |
| Wiki ES — Proyección de Aqua, Torre Maldita, Onda Postrera, Hila Encantos, Pironúcleo/Hidronúcleo/Geonúcleo | Nombres oficiales | Fichas casi vacías |
| Respaldo: guías de Steam 3311551844 (logros) y 3355205993 (guía completa) | Contraste | En inglés |

**Nombres:** zonas, objetivos, comandos y enemigos, de Laps4 (son los textos del juego) y la Wiki ES. Prendas y reliquias del
Zodíaco no tienen nombre en castellano con fuente: van en inglés entre «» (como en DDD). Objetos de los cofres (Poción, Éter…):
comprobar cada uno en la Wiki ES antes de usarlo.

## Secciones (`#/bbs02` y `#/bbs02/<sección>`, con anterior/siguiente)
0. **Portada:** modo Logros (antes de empezar + los 15 logros agrupados) y modo Informes (tarjetas de sección).
1. **Historia y jefes** (`historia`): las cinco zonas en orden con su logro, los jefes con estrategia (Proyección de Aqua ×3,
   Torre Maldita, Lado Oscuro, Ola infernal), Invicto y Experto/Maestro, y el jefe secreto del espejo del Zodíaco.
   Ids `bbs02.jefe.<id>`.
2. **Objetivos y armario** (`objetivos`): los 51 objetivos con cómo conseguirlo, en qué partida conviene (1.ª, tras terminar o
   Partida + en Maestro) y la prenda que dan con su ranura. Debajo, los 4 recuerdos persistentes y «A la moda».
   Ids `bbs02.objetivo.<n>` (1–51).
3. **Cofres** (`cofres`): los 41 por zona, con contenido y lugar, marcando los 12 que salen tras terminar el juego (las 12
   reliquias del Zodíaco). Ids `bbs02.cofre.<zona>.<n>`; los objetivos 37, 39, 44 y 48 se cuentan solos con ellos.
4. **Combate** (`combate`): ACH_09, 10, 12, 13 y 14, con los tres comandos mágicos marcables (`bbs02.magia.<piro|hielo|electro>`).

Ids de logro: `bbs02.logro.ACH_xx`. 100 % = jefes + objetivos + cofres + comandos mágicos (unos 110 elementos).

## Diseño
Acento: reutilizar `--aqua` (`#63C9FF` / `#0B6EA8`, ya en `styles.css` y con contraste AA), el color de Aqua en BBS. Los
iconos de los logros de 0.2 son azules, y así no se añade otro azul parecido a los de KH FM y KH II FM.
Logo: «Kingdom Hearts 0.2 Birth by Sleep -A fragmentary passage-» de KHWiki, en `assets/img/logos/bbs02.webp`.
`src/data/juegos.js`: entrada `bbs02` junto a DDD (colección 2.8).

## Entregas
1. Base, portada, Historia y jefes.
2. Objetivos y armario.
3. Cofres y Combate; revisión a 390 y 1280 px.

## Decisiones (27-10-2026)
1. **Cofres:** ~~con la indicación de dónde está cada uno~~. **Cambiado el 27-10-2026:** solo cuántos hay en cada zona y en cada
   visita (Laps4) y el enlace directo al vídeo «Treasure Hunter Trophy Guide» que cita Laps4 (YouTube J43E_iScH3U, canal factor747),
   como crédito. Nada de copiar ni incrustar vídeos o contenido ajeno: como mucho, enlace con su autor.
2. **Acento:** `--aqua`.

## Estado
- **Entrega 1 hecha (27-10-2026, pendiente de revisión):** logo `assets/img/logos/bbs02.webp` (KHWiki, sin la cabecera de
  Disney/Square Enix), `src/data/bbs02.js`, `src/data/bbs02-historia.js`, portada `#/bbs02` y `#/bbs02/historia`. En «Elige un
  juego» sale como «En preparación». Probado a 1280 y 390 px.
- Jefes: 8 de la historia + el secreto. Discrepancia avisada en la web: KHWiki dice que el espejo del Zodíaco tiene cinco rondas
  y Laps4, tres combates antes del último.
- **Entrega 2 hecha (27-10-2026, pendiente de revisión):** `src/data/bbs02-objetivos.js` (a mano) y `#/bbs02/objetivos`: los 51
  objetivos por zona con el texto del juego (Laps4), cómo hacerlo, en qué partida (1.ª, partida terminada, Partida + · Maestro; filtro
  guardado en `ajustes.bbs02ObjFiltro`), «Guarda antes» en 31, 36, 41, 47 y 50, y la prenda con su ranura (KHWiki, contrastado por
  script: 51/51). Armario por ranuras (12 cabeza, 9 brazos, 9 espalda, 21 diseño) y 4 recuerdos persistentes (KHWiki), marcados
  con su objetivo. Ids `bbs02.objetivo.<n>`; cuentan para el 100 %. Discrepancias avisadas: objetivo 13 (Laps4 50, KHWiki 30) y 36.
  **Sin imágenes de las prendas** (el usuario no las quiere) y sin enlaces a vídeos. Nombres de prendas: traducción propia en
  `PRENDAS_ES` (pedida por el usuario: no hay fuente en castellano y el menú del juego no los enseña hasta tenerlas).
- **Entrega 3 hecha (27-10-2026, pendiente de revisión). 0.2 queda completo.**
  - **Cofres** (`#/bbs02/cofres`, `src/data/bbs02-cofres.js`, a mano), al estilo de BBS: desplegable por zona con «1.ª visita» y
    «Al cargar la partida terminada»; cada cofre con número, contenido, dónde está (Destiny Islands, con palabras propias) y casilla.
    Ids `bbs02.cofre.<zona>.<n>` (41; sustituyen a la tabla provisional `bbs02.cofres.<zona>.<1|2>`, que solo existió unas horas).
    Objetos: Poción, Ultrapoción, Omnipoción, Éter, Omniéter, Elixir, Omnielixir (Wiki ES, nombres de la serie). Reliquias del Zodíaco:
    traducción propia («Reliquia de Virgo»…). Mapas: «Mapa: <zona>» (formato de KH III). Enlace al vídeo de factor747 como crédito.
  - **Combate** (`#/bbs02/combate`, `src/data/bbs02-combate.js`): los 5 logros, barra de situación, Piro/Hielo/Electro +++
    marcables (`bbs02.magia.<id>`), Hila encantos, Siempre Juntos y Tiro certero (Chorro Irisado, nombre de BBS). KHWiki: en PC
    (Epic/Steam) el Golpe de gracia sale nada más activar Hila encantos; corregidos los objetivos 20, 31, 36 y el consejo de ACH_10.
  - Revisado con `revisar-diseno` a 1280 y 390 px, tema oscuro y claro.
- **Después (27-10-2026):** prendas del Armario marcables (misma marca que su objetivo, contador por ranura). Portada: bloque
  «Lo que se puede perder» (`PERDIBLES_BBS02` en `bbs02.js`): cofre de la Carretera, Invicto y los objetivos 31, 36, 41, 47 y 50,
  cada uno con zona, partida, qué pide, qué hacer si sale mal (Laps4) y la casilla del objetivo, cofre o logro.
  Auditado con Impeccable (`detect`): en 0.2 las tarjetas pasan de h4 a h3 (no saltar niveles) y el texto corrido va a 54ch.
  Sin tocar (son de toda la web): halo dorado de la corona (identidad de DESIGN.md), borde izquierdo de `.nota-fuente`, tarjetas
  dentro de tarjetas en Historia.
- Antiguo: entrega 2 (objetivos y armario). Datos: lista de Laps4 (texto del juego) + premio y ranura de KHWiki «Wardrobe (KH0.2)»,
  con las prendas traducidas (`PRENDAS_ES`, sin fuente en castellano; el inglés al pasar el ratón).
- **Ruta al 100 % (27-10-2026):** portada, bloque `#ruta-100` con las tres fases de Laps4 (`FASES_BBS02`): 1.ª partida en Principiante,
  partida terminada y Partida + en Maestro, cada una con sus pasos y su progreso (`IDS_FASE_BBS02` en app.js; entre las tres cubren
  exactamente el 100 %, comprobado por script). Corregido: Invicto y Experto/Maestro no contaban para el 100 % (ahora 119 elementos).
  «Antes de empezar» se queda con «Guarda a mano» y «Tres logros perdibles». Ficha del juego sin «En preparación».
  **0.2 listo para revisión.**

