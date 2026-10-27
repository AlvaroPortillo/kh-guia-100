// Datos de Kingdom Hearts 0.2 Birth by Sleep -A fragmentary passage- (colección HD 2.8 Final Chapter Prologue, Steam app 2552440).
// Regla: ningún dato sin fuente. Los 15 logros de 0.2 son ACH_01…ACH_15 (ACH_16…ACH_69 son de DDD).
// Nombres: los de los logros de Steam en español; objetivos, zonas, comandos y enemigos, de la guía de Laps4 (textos del juego)
// y la Wiki ES. Los consejos están redactados con palabras propias (Laps4 prohíbe copiar sus guías).
import { LOGROS_BBS02 } from './bbs02-logros.js';

const KHW = 'https://www.khwiki.com/';
const WES = 'https://kingdomhearts.fandom.com/es/wiki/';
export const FUENTES_BBS02 = {
  steamBbs02: { nombre: 'Steam — logros oficiales (español)', url: 'https://steamcommunity.com/achievements/2552440' },
  laps4Bbs02: { nombre: 'LaPS4 — Guía de trofeos de KH 0.2 Birth by Sleep (Zarped)', url: 'https://www.laps4.com/comunidad/threads/guia-trofeos-kingdom-hearts-0-2-birth-by-sleep-a-fragmentary-passage.432267/' },
  khwikiBbs02: { nombre: 'KHWiki — Kingdom Hearts 0.2 Birth by Sleep -A fragmentary passage-', url: `${KHW}Kingdom_Hearts_0.2_Birth_by_Sleep_-A_fragmentary_passage-` },
  khwikiProyeccion: { nombre: 'KHWiki — Phantom Aqua (estrategia)', url: `${KHW}Game:Phantom_Aqua` },
  khwikiTorre: { nombre: 'KHWiki — Demon Tower', url: `${KHW}Demon_Tower` },
  khwikiOla: { nombre: 'KHWiki — Demon Tide', url: `${KHW}Demon_Tide` },
  khwikiLadoOscuro: { nombre: 'KHWiki — Darkside', url: `${KHW}Darkside` },
  khwikiZodiaco: { nombre: 'KHWiki — Zodiac symbols', url: `${KHW}Zodiac_symbols` },
  khwikiArmario: { nombre: 'KHWiki — Wardrobe (KH0.2): premio y ranura de cada objetivo', url: `${KHW}Wardrobe_(KH0.2)` },
  destinyCofresBbs02: { nombre: 'Destiny Islands — Treasure Chests (KH 0.2): contenido y lugar de cada cofre', url: 'https://www.destinyislands.com/kh-02-bbs/collectables/treasure-chests/' },
  wikiEsPocion: { nombre: 'Wiki ES — Poción, Ultrapoción, Omnipoción, Éter, Omniéter, Elixir y Omnielixir', url: `${WES}Poci%C3%B3n` },
  khwikiSituacion: { nombre: 'KHWiki — Situation Command (0.2)', url: `${KHW}Situation_Command` },
  khwikiHila: { nombre: 'KHWiki — Spellweaver (Hila encantos; Golpe de gracia en PS4 y en PC)', url: `${KHW}Spellweaver` },
  khwikiChorro: { nombre: 'KHWiki — Prism Rain (Chorro Irisado)', url: `${KHW}Prism_Rain` },
  videoCofresBbs02: { nombre: 'Vídeo «Treasure Hunter Trophy Guide», de factor747 (YouTube; lo enlaza Laps4): dónde está cada cofre', url: 'https://www.youtube.com/watch?v=J43E_iScH3U' },
  khwikiRecuerdos: { nombre: 'KHWiki — Lingering memories', url: `${KHW}Lingering_memories` },
  wikiEsProyeccion: { nombre: 'Wiki ES — Proyección de Aqua', url: `${WES}Proyecci%C3%B3n_de_Aqua` },
  wikiEsTorre: { nombre: 'Wiki ES — Torre Maldita (y Ola Infernal)', url: `${WES}Torre_Maldita` },
  wikiEsLadoOscuro: { nombre: 'Wiki ES — Lado Oscuro', url: `${WES}Lado_Oscuro` },
};

export const BBS02 = {
  id: 'bbs02',
  nombre: 'Kingdom Hearts 0.2 Birth by Sleep',
  logo: 'assets/img/logos/bbs02.webp',
  logros: LOGROS_BBS02,
};

// Los 15 logros agrupados por la sección de la guía donde se explican (cada logro en una sola).
export const GRUPOS_LOGROS_BBS02 = [
  { id: 'historia', titulo: 'Historia y dificultad', ids: ['ACH_01', 'ACH_02', 'ACH_03', 'ACH_04', 'ACH_05', 'ACH_08', 'ACH_11'] },
  { id: 'objetivos', titulo: 'Objetivos y armario', ids: ['ACH_07', 'ACH_15'] },
  { id: 'cofres', titulo: 'Cofres', ids: ['ACH_06'] },
  { id: 'combate', titulo: 'Combate', ids: ['ACH_09', 'ACH_10', 'ACH_12', 'ACH_13', 'ACH_14'] },
];

// Antes de empezar: solo hechos con fuente. `logros` enlaza con los logros a los que ayuda.
export const RUTA_BBS02 = [
  {
    id: 'r-guardar',
    titulo: 'Guarda a mano y no uses «Continuar»',
    texto: 'Es el primer KH con autoguardado. La opción «Continuar» del menú principal carga ese autoguardado, que puede ir varios minutos por detrás de tu último guardado manual: podrías perder un cofre o un objetivo. Guarda tú y carga siempre esa partida.',
    logros: ['ACH_06', 'ACH_07'],
    fuentes: ['laps4Bbs02'],
  },
  {
    id: 'r-perdibles',
    titulo: 'Tres logros perdibles',
    texto: 'Cazatesoros (un cofre de la Carretera principal), Invicto (toda la primera partida) y Ambición (cinco objetivos se hacen en un combate concreto: 31, 36, 41, 47 y 50). Abajo, en «Lo que se puede perder», está cada uno con su zona, la partida en que toca y qué hacer si sale mal.',
    logros: ['ACH_06', 'ACH_08', 'ACH_07'],
    fuentes: ['laps4Bbs02'],
  },
];

// Cómo conseguir cada logro, con palabras propias. Las listas completas están en la sección indicada.
export const CONSEJOS_BBS02 = {
  ACH_01: 'Sale al empezar la historia, en el Reino de la oscuridad.',
  ACH_02: 'De historia: al terminar la Aldea fortificada.',
  ACH_03: 'De historia: al salir del Mundo interior tras vencer a la tercera Proyección de Aqua.',
  ACH_04: 'De historia: al vencer al Lado Oscuro que protege el orbe al final del Bosque espinoso.',
  ACH_05: 'Salta en la pantalla de Informe de batalla, después del final, los créditos y el epílogo. Guarda ahí la partida terminada: la necesitas para los cofres nuevos, los objetivos que falten y la Partida +.',
  ACH_06: 'Son 41 cofres; 12 solo aparecen al cargar una partida terminada (son las reliquias del Zodíaco). Si te dejas alguno en la primera visita, vuelve con el teletransporte de los puntos de guardado.',
  ACH_07: 'Los 51 objetivos del armario. Muchos salen solos; los 36, 41, 47 y 50 solo en Partida + y el 51 al terminar en Maestro. Lo que completas pasa de una partida terminada a la nueva, así que si se te escapa alguno puedes empezar otra.',
  ACH_08: 'Termina la historia sin pulsar «Otra vez» ni «Continuar» en la pantalla de derrota. Si caes, carga tu último guardado; si pulsas una de las dos por error, sal al menú principal antes de que el juego guarde.',
  ACH_09: 'Acumulativo: sale solo durante la historia o, si no, al subir de nivel después. El Bosque espinoso tiene muchos enemigos.',
  ACH_10: 'Cuando la barra de situación se llena con combos físicos aparece el comando Hila encantos (cambio de estilo). En PC, el Golpe de gracia sale nada más activarlo; en PS4 había que volver a llenar la barra. Cinco veces; sale jugando con normalidad.',
  ACH_11: 'Termina el juego en Experto o en Maestro. Maestro se desbloquea al acabar una partida en otra dificultad, y además hace falta para el objetivo 51.',
  ACH_12: 'Hay que ejecutar los tres comandos de situación de magia: Piro +++, Hielo +++ y Electro +++. Llena la barra de situación con ataques y magia básica; el comando que sale es el de la primera magia con la que empezaste a llenarla.',
  ACH_13: 'Mantén el botón del Tiro certero, apunta al máximo de objetivos y dispara. La calificación «Excelente» sale si pulsas justo cuando el círculo que se cierra coincide con el fijo. Basta con una vez.',
  ACH_14: 'Sale explorando: recorre mucho camino seguido dentro de un mismo mapa.',
  ACH_15: 'Las prendas se ganan con los objetivos. En el menú de pausa, Armario, pon una en cada ranura (cabeza, brazos, espalda y diseño). Hacia el final del juego ya tendrás al menos una de cada.',
};

// Lo que se puede perder: cada combate o cofre concreto, en qué partida y qué hacer si sale mal (Laps4; «Otra vez» con 41 y 47,
// cargar la partida con 31, 36 y 50). `obj`: objetivo del armario (misma marca); `cofre`: id del cofre; `seccion`: dónde se explica.
export const PERDIBLES_BBS02 = [
  { id: 'cofre-carretera', titulo: 'El cofre de la Carretera principal', zona: 'Carretera principal', partida: '1.ª partida', logro: 'ACH_06', cofre: 'carretera.1', seccion: 'cofres',
    pide: 'Abrirlo antes de entrar en la Aldea fortificada: está delante y a esa zona no se vuelve.', fallo: 'No tiene arreglo en esa partida.' },
  { id: 'invicto', titulo: 'Toda la primera partida', zona: 'Toda la historia', partida: '1.ª partida', logro: 'ACH_08', seccion: 'historia',
    pide: 'Terminar sin pulsar «Otra vez» ni «Continuar» en la pantalla de derrota.', fallo: 'Si caes, carga tu último guardado. Si pulsas una de las dos por error, sal al menú principal antes de que el juego guarde.' },
  { id: 'o31', titulo: 'Tercera Proyección de Aqua: Golpe de gracia', zona: 'Mundo interior (espejo de la sala de pilares)', partida: '1.ª partida (o Partida +, junto con el 41)', logro: 'ACH_07', obj: 31, seccion: 'objetivos',
    pide: 'Rematar el combate habiendo usado el Golpe de gracia de Hila encantos.', fallo: 'Carga la partida guardada antes del espejo (en la 1.ª partida no uses «Otra vez»: perderías Invicto).' },
  { id: 'o36', titulo: 'Torre Maldita de la Aldea fortificada', zona: 'Aldea fortificada (camino al castillo)', partida: 'Partida +', logro: 'ACH_07', obj: 36, seccion: 'objetivos',
    pide: 'Darle el último golpe con el Golpe de gracia de Hila encantos.', fallo: 'Carga la partida del punto de guardado del camino al castillo.' },
  { id: 'o41', titulo: 'Tercera Proyección de Aqua sin recibir daño', zona: 'Mundo interior (espejo de la sala de pilares)', partida: 'Partida +', logro: 'ACH_07', obj: 41, seccion: 'objetivos',
    pide: 'Vencerla sin que te toque ni una vez.', fallo: 'En cuanto te den, déjate vencer y pulsa «Otra vez».' },
  { id: 'o47', titulo: 'Lado Oscuro que protege el orbe sin recibir daño', zona: 'Bosque espinoso (final)', partida: 'Partida +', logro: 'ACH_07', obj: 47, seccion: 'objetivos',
    pide: 'Vencerlo sin que te toque nada, tampoco las bolas del camino hasta él.', fallo: 'En cuanto te den, déjate vencer y pulsa «Otra vez».' },
  { id: 'o50', titulo: 'Torre Maldita con Mickey', zona: 'Profundidades de la oscuridad', partida: 'Partida +', logro: 'ACH_07', obj: 50, seccion: 'objetivos',
    pide: 'Darle el último golpe con Siempre Juntos.', fallo: 'Carga la partida guardada antes del combate.' },
];
export const INTRO_PERDIBLES_BBS02 = 'Todo lo que, si sale mal, obliga a cargar o a repetir. Guarda siempre justo antes. En la Partida + ya tienes Invicto, así que ahí sí puedes usar «Otra vez». El objetivo 51 (vencer a la Ola Infernal en Maestro) no se pierde: basta con terminar esa partida.';

// Ruta al 100 %: las tres fases de la estrategia de Laps4, con los pasos en orden. El progreso de cada fase se calcula en app.js
// con las marcas de lo que toca en ella (logros, jefes, cofres, objetivos y comandos de magia).
export const FASES_BBS02 = [
  {
    id: 'primera', titulo: '1.ª partida', sub: 'Principiante',
    pasos: [
      'Elige Principiante. Guarda a mano a menudo y no pulses nunca «Otra vez» ni «Continuar»: es Invicto.',
      'Abre el cofre de la Carretera principal antes de entrar en la Aldea fortificada, y todos los que veas: 29 en esta visita.',
      'En el Mundo interior deja para el final el espejo de la sala de pilares y guarda antes: ahí va el objetivo 31.',
      'Casi todos los objetivos de esta partida salen solos. Usa una vez Piro +++, Hielo +++ y Electro +++ («Un final mágico»).',
      'En cuanto tengas una prenda de cada ranura, equípalas: «A la moda» y, con el Golpe de gracia de Hila encantos, el objetivo 21.',
      'Tras el final, guarda la partida terminada en la pantalla de Informe de batalla.',
    ],
  },
  {
    id: 'final', titulo: 'Partida terminada', sub: 'Carga el guardado del final',
    pasos: [
      'Al cargarla aparecen 12 cofres nuevos (las reliquias del Zodíaco) y los 4 recuerdos persistentes.',
      'Recoge cofres y recuerdos y haz el objetivo 46 en los raíles del Bosque espinoso.',
      'Sube a nivel 80 dando vueltas al Bosque espinoso (objetivos 7, 8 y 9).',
      'Con las 12 reliquias, entra en el espejo del Zodíaco y vence al jefe secreto (objetivo 42).',
      'Antes de seguir, comprueba en Objetivos que solo te faltan el 36, 41, 47, 50 y 51.',
    ],
  },
  {
    id: 'plus', titulo: 'Partida +', sub: 'Maestro, con los objetivos traspasados',
    pasos: [
      'Empieza una partida nueva en Maestro y traspasa los objetivos de la partida terminada.',
      'Guarda antes de cada combate clave: Torre Maldita de la Aldea (36), tercera Proyección de Aqua sin daño (41), Lado Oscuro del orbe sin daño (47) y Torre Maldita con Mickey (50).',
      'En el 41 y el 47, si te dan, déjate vencer y pulsa «Otra vez»: Invicto ya lo tienes. En el 36 y el 50, carga.',
      'Vence a la Ola Infernal: objetivo 51, «Maestro absoluto/Competidor experto» y, con los 51 objetivos, «Ambición».',
    ],
  },
];
