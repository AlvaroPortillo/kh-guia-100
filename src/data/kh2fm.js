// Datos de Kingdom Hearts II Final Mix (versión HD 1.5+2.5 ReMIX, Steam).
// Regla: ningún dato sin fuente. Cada bloque indica de dónde sale.
// Nombres: los de los logros de Steam en español y la guía de logros en castellano; si no salen allí, los de la Wiki ES.
import { LOGROS_KH2FM } from './kh2fm-logros.js';

const WES = 'https://kingdomhearts.fandom.com/es/wiki/';
export const FUENTES_KH2FM = {
  steamKh2fm: { nombre: 'Steam — logros oficiales (español)', url: 'https://steamcommunity.com/stats/2552430/achievements/?l=spanish' },
  guiaSteamKh2fm: { nombre: 'Guía de logros de Kingdom Hearts HD 2.5 ReMIX (Steam, en castellano)', url: 'https://steamcommunity.com/sharedfiles/filedetails/?id=3298321979' },
  guiaSteamKh2fmEn: { nombre: 'Guía de Steam «KH2FM 100 %» (inglés)', url: 'https://steamcommunity.com/sharedfiles/filedetails/?id=3294034108' },
  khwikiKh2fm: { nombre: 'KHWiki — Kingdom Hearts II Final Mix (novedades)', url: 'https://www.khwiki.com/Kingdom_Hearts_II_Final_Mix' },
  khwikiTrofeos: { nombre: 'KHWiki — Trophies', url: 'https://www.khwiki.com/Trophies' },
  wikiEsKh2: { nombre: 'Wiki ES — Kingdom Hearts II (mundos)', url: `${WES}Kingdom_Hearts_II` },
  wikiEsDificultad: { nombre: 'Wiki ES — Nivel de Dificultad', url: `${WES}Nivel_de_Dificultad` },
  wikiEsCorona: { nombre: 'Wiki ES — Corona (objeto)', url: `${WES}Corona_(objeto)` },
  wikiEsSinExp: { nombre: 'Wiki ES — Sin EXP', url: `${WES}Sin_EXP` },
  wikiEsJefesKh2: { nombre: 'Wiki ES — Jefes de Kingdom Hearts II', url: `${WES}Jefes_de_Kingdom_Hearts_II` },
  wikiEsConsciencia: { nombre: 'Wiki ES — Consciencia Latente', url: `${WES}Consciencia_Latente` },
  wikiEsGruta: { nombre: 'Wiki ES — Gruta de la Evocación', url: `${WES}Gruta_de_la_Evocaci%C3%B3n` },
  wikiEsEsencia: { nombre: 'Wiki ES — Esencia Intangible', url: `${WES}Esencia_Intangible` },
  wikiEsDatosOrg: { nombre: 'Wiki ES — Datos de la Organización XIII', url: `${WES}Datos_de_la_Organizaci%C3%B3n_XIII` },
  wikiEsMicorg: { nombre: 'Wiki ES — Micorganización XIII', url: `${WES}Micorganizaci%C3%B3n_XIII` },
  wikiEsPiedraAngular: { nombre: 'Wiki ES — Piedra Angular de Luz', url: `${WES}Piedra_Angular_de_Luz` },
};

export const KH2FM = {
  id: 'kh2fm',
  nombre: 'Kingdom Hearts II Final Mix',
  logo: 'assets/img/logos/kh2fm.png',
  logros: LOGROS_KH2FM,
};

// Agrupación de los 50 logros (la misma que la guía en castellano). Orden dentro de cada grupo: de más fácil a más difícil.
export const GRUPOS_LOGROS_KH2FM = [
  { id: 'historia', titulo: 'Historia y dificultad', ids: ['ACH_105', 'ACH_133', 'ACH_104', 'ACH_103'] },
  { id: 'mundos', titulo: 'Historia de cada mundo', ids: ['ACH_120', 'ACH_121', 'ACH_122', 'ACH_123', 'ACH_124', 'ACH_125', 'ACH_126', 'ACH_127', 'ACH_128', 'ACH_129', 'ACH_130', 'ACH_131', 'ACH_132'] },
  { id: 'coleccion', titulo: 'Colección', ids: ['ACH_107', 'ACH_147', 'ACH_148', 'ACH_106', 'ACH_146'] },
  { id: 'diario', titulo: 'Diario de Pepito', ids: ['ACH_137', 'ACH_134', 'ACH_140', 'ACH_139', 'ACH_136', 'ACH_145', 'ACH_144', 'ACH_135', 'ACH_143', 'ACH_138', 'ACH_142', 'ACH_141'] },
  { id: 'copas', titulo: 'Copas del Coliseo', ids: ['ACH_112', 'ACH_113', 'ACH_114', 'ACH_115', 'ACH_116', 'ACH_117', 'ACH_118', 'ACH_119'] },
  { id: 'jefes', titulo: 'Jefes secretos', ids: ['ACH_109', 'ACH_110', 'ACH_111', 'ACH_108'] },
  { id: 'gumi', titulo: 'Nave gumi', ids: ['ACH_149', 'ACH_150', 'ACH_152', 'ACH_151'] },
];

// Antes de empezar: solo hechos con fuente. `logros` enlaza con los logros a los que ayuda.
export const RUTA_KH2FM = [
  {
    id: 'r-dificultad',
    titulo: 'Sin perdibles: todo cabe en una partida en Maestro',
    texto: 'Según la guía en castellano no hay logros perdibles, así que basta una partida en Maestro. Si se hace muy cuesta arriba, puedes pasarte la historia en Maestro y conseguir el resto en Principiante. «El Experto» pide Experto o superior, así que terminar en Maestro da los dos.',
    logros: ['ACH_103', 'ACH_104'],
    fuentes: ['guiaSteamKh2fm', 'steamKh2fm'],
  },
  {
    id: 'r-maestro',
    titulo: 'Qué cambia en Maestro',
    texto: 'Es la dificultad nueva de Final Mix. Frente a Normal, los enemigos hacen el doble de daño y tú haces 1,25 veces más (salvo a la Micorganización XIII). Ganas tres cuartas partes de la EXP y la mitad de VT y PM en los niveles de bonificación. A cambio, al empezar el tercer día Roxas recibe varias habilidades, entre ellas Experiencia 0, y los PH suben de 3 en 3 en vez de 2 en 2.',
    logros: ['ACH_103'],
    fuentes: ['khwikiKh2fm', 'wikiEsSinExp'],
  },
  {
    id: 'r-armas',
    titulo: 'Las dos elecciones de arma',
    texto: 'Con Roxas eliges entre una porra (Fuerza +1), una espada (Defensa +1) y una varita (Magia +1): mejor la porra o la espada, normalmente la porra. Después, con Sora, entre espada, escudo y bastón, como en KH 1.5. Solo cambia el orden en que aprendes las habilidades; en Maestro, lo mejor es el escudo.',
    logros: [],
    fuentes: ['guiaSteamKh2fm'],
  },
  {
    id: 'r-mickey',
    titulo: '«Mi héroe» exige caer en ciertos jefes',
    texto: 'El rey Mickey solo acude a la pantalla de continuar si te derrotan en uno de estos combates: Shan-Yu y Jinete de Tormentas (Tierra de Dragones); Custodio y Usurpador, Sombra Acechante, Espinas de Sombra y Xaldin (Castillo de Bestia); el primer combate contra Cerbero (Coliseo del Olimpo); Jefe Volcánico y Jefe Gélido (Agrabah); el primer combate contra la Parca Pirata (Port Royal) y el primero contra Xemnas (El Mundo Inexistente). Si los superas todos sin caer, esa partida ya no tiene ocasión.',
    logros: ['ACH_107'],
    fuentes: ['guiaSteamKh2fmEn', 'wikiEsJefesKh2'],
  },
  {
    id: 'r-diario',
    titulo: 'El diario hay que abrirlo para que salte el logro',
    texto: 'Para algunos logros del diario de Pepito hace falta el nivel 99 y todas las fusiones e invocaciones al máximo. Al completar un apartado, entra en él desde el diario para que se dé el logro. La Orfebrería conviene dejarla para después de la historia: lo que falta aparece como «¿?» y es más fácil de completar.',
    logros: ['ACH_144'],
    fuentes: ['guiaSteamKh2fm'],
  },
  {
    id: 'r-secretos',
    titulo: 'Los jefes secretos, al final y en este orden',
    texto: 'Ve con el nivel máximo, todas las fusiones e invocaciones al máximo y las llaves espada Calabaza Decisiva y Fenrir (te la da Cloud tras vencer a Sephiroth). Sephiroth es, con diferencia, el más sencillo. La Gruta de la Evocación se abre en Vergel Radiante tras conocer a Sephiroth en la segunda visita, y en ella están las réplicas de la Organización XIII. La Consciencia Latente aparece en el Castillo Disney al completar todos los mundos y terminar el juego.',
    logros: ['ACH_109', 'ACH_110', 'ACH_111', 'ACH_108'],
    fuentes: ['guiaSteamKh2fm', 'khwikiKh2fm'],
  },
  {
    id: 'r-coronas',
    titulo: 'Tres marcas, tres coronas',
    texto: 'Los tres retos secretos dan una marca cada uno: la Marca del Nexo (Consciencia Latente), la del Incorpóreo (réplicas de la Organización XIII) y la de la Serenidad (Micorganización XIII). Con una marca Sora lleva la Corona de Cobre; con dos, la de Plata, y con tres, la de Oro. Son solo estéticas.',
    logros: ['ACH_108', 'ACH_110', 'ACH_111'],
    fuentes: ['wikiEsCorona', 'khwikiKh2fm'],
  },
  {
    id: 'r-final',
    titulo: 'El final secreto «Birth by Sleep» depende de la dificultad',
    texto: 'En Principiante no se puede ver. En Maestro basta con terminar el juego y tener la Corona de Oro; en Experto, además, completar el diario de Pepito. En Normal, KHWiki pide también todas las misiones gumi y todos los tesoros gumi; la Wiki ES solo nombra el diario y las misiones gumi.',
    logros: [],
    fuentes: ['khwikiKh2fm', 'wikiEsDificultad'],
  },
];

// Consejos por logro (solo con fuente).
export const CONSEJOS_KH2FM = {
  ACH_103: 'No hay perdibles: si se hace muy difícil, pasa la historia en Maestro y deja el resto para una partida en Principiante.',
  ACH_104: 'También lo da terminar en Maestro.',
  ACH_133: 'Llega al final de la historia principal.',
  ACH_106: 'Completando Tesoros, Puzles y Notas de fabricación deberías estar cerca. Lo más rápido: en la última zona de El Mundo Inexistente, con la llave espada Ala de Gaviota y sin las curaciones de Donald y Goofy, deja que el primer grupo de enemigos te quite la mitad de la vida y elimínalos; sigue hasta la entrada de la fortaleza y repite. Mantén la VT por debajo del 50 % para que haga efecto Extraexperiencia. La guía inglesa añade como sitio la Gruta de la Evocación.',
  ACH_107: 'Salta cuando tu VT llega a 0 y aparece Mickey a ayudarte, solo en ciertos combates de jefe (lista en «Antes de empezar»). Lo normal es conseguirlo durante la historia.',
  ACH_146: 'Habla con McPato en Vergel Radiante. Nada más empezar, deslízate por los muros junto a la escalera; antes de llegar al final, salta y deslízate por la pared contraria. Repite hasta llegar a 5000.',
  ACH_147: 'Hay que acumular las 200 esferas en un combate de Struggle.',
  ACH_148: 'La llave espada Dos Serán Uno lo acelera. La antiforma sale al usar las demás formas a menudo.',
  ACH_134: 'Se completa al derrotar a Xemnas por primera vez.',
  ACH_135: 'Como «Al tanto de todo», pide vencer a los jefes secretos. Además, hay que ganar a todos los rivales del Struggle de Villa Crepúsculo.',
  ACH_136: 'Casi todos salen en la historia. El resto está en la Gruta de la Evocación de Vergel Radiante (hacen falta todas las fusiones para superar sus obstáculos) y los últimos son la Micorganización XIII.',
  ACH_137: 'Se completa al final de la historia principal.',
  ACH_138: 'El último cofre aparece en la Gruta de la Evocación tras derrotar a todas las réplicas de la Organización XIII. Los cofres que abres al principio con Roxas no cuentan.',
  ACH_139: 'Además de reunir las piezas, hay que resolver los puzles del diario.',
  ACH_141: 'El más pesado: hay que superar la puntuación que pide el diario en cada misión.',
  ACH_142: 'Basta con participar en todos los minijuegos.',
  ACH_143: 'Activa todos los límites. Donald: Fantasía y Fulgor Cegador. Goofy: Tornado Fusión y Unidad. Bestia: Luna Aullante. Auron: A Tope. Mulán: Dragón de Fuego. Aladdin: Truco Fantástico. Jack: Ovación. Jack Sparrow: Isla del Tesoro. Simba: Orgullo del Rey. Tron: Compilación Completa. Riku: Sesión Eterna. Sora: Trío. Invocaciones: Chicken Little (Primera persona), Peter Pan (País de Nunca Jamás), Stitch (¡Ohana!) y Genio (Estocada Sónica, Tiro Divino, Arcano e Infinidad, uno con cada forma: Valiente, Sabio, Maestro y Final).',
  ACH_144: 'Hay que crear todos los objetos de las recetas de la Orfebrería. Abre todos los cofres para tener todas las recetas.',
  ACH_145: 'Se completa al derrotar a los jefes secretos.',
  ACH_112: 'Las copas se abren al avanzar en la historia, al subir de nivel las fusiones e invocaciones y al ganar las anteriores. Las normales se juegan desde la entrada del Inframundo.',
  ACH_114: 'Invoca a Stitch y usa su límite para superar la puntuación.',
  ACH_115: 'Invoca a Stitch y usa su límite para superar la puntuación.',
  ACH_116: 'Las copas Paradoja se juegan desde los aposentos de Hades. Usa los límites.',
  ACH_117: 'Usa Electro++ con la Forma Final.',
  ACH_118: 'Invoca a Stitch y usa su límite para superar la puntuación.',
  ACH_119: 'Se abre al completar las demás copas y tener todas las fusiones e invocaciones al nivel máximo. Invoca a Stitch y usa su límite para superar la puntuación.',
  ACH_109: 'En Vergel Radiante: ve adonde luchaste contra los 1000 sincorazón y avanza hasta el final. Lleva Calabaza Decisiva, Cura++, Reflejo++, Ultrapociones y al menos un Elixir. Cuando flota mientras habla, carga un ataque que te deja sin VT ni PM de un golpe: golpéale para interrumpirlo.',
  ACH_110: 'En la sala final de la Gruta de la Evocación (Vergel Radiante). Antes hay que vencer a todas las Esencias intangibles. Lleva Ultrapociones para todo el grupo, la Cura de Donald y Cura++, Electro++ y Reflejo++. Al vencer a las 13 aparece el último cofre del juego en esa sala.',
  ACH_111: 'Son 13 setas repartidas por los mundos, cada una con su reto; la N.º XIII solo acepta el duelo cuando has satisfecho a las otras doce. Dónde está cada una: en la sección Mundos.',
  ACH_108: 'Primero hay que completar todos los mundos y derrotar al jefe final; si lo venciste con mundos sin completar, termínalos y vuelve a vencerlo. Aparece en el Salón de la Piedra Angular, en el sótano del Castillo Disney. La guía recomienda el método Fenrir + Combo Negativo y desactivar las habilidades de acción de Donald y Goofy.',
  ACH_149: 'Vale cualquier misión.',
  ACH_150: 'La descripción en español es incorrecta: basta con el rango S en al menos una misión normal de cada ruta. Usa una nave con el centro hueco: los enemigos disparan al centro de la nave.',
  ACH_151: 'La descripción en español es incorrecta: basta con el rango S en al menos una misión EX de cada ruta. Para el jefe de la misión 3 de «Asalto al Acorazado», absorbe sus ráfagas rojas con la Gumi Drenaje y devuélvelas.',
  ACH_152: 'Se completa al terminar todas las misiones gumi.',
};
export const FUENTES_CONSEJOS_KH2FM = ['steamKh2fm', 'guiaSteamKh2fm', 'guiaSteamKh2fmEn', 'khwikiTrofeos', 'wikiEsPiedraAngular'];

// Mundos en el orden de la Wiki ES. `logros`: los de historia de ese mundo (se completan al terminar sus episodios,
// según KHWiki). `esencia`, `setas`, `mini` y `mickey`: lo que hay allí, según la guía en castellano (y la inglesa para Mickey).
export const MUNDOS_KH2FM = [
  {
    id: 'villa-crepusculo', nombre: 'Villa Crepúsculo', logros: ['ACH_120', 'ACH_132'],
    esencia: 'Lexaeus, en el Solar Deportivo.',
    setas: [['VII', 'En la zona de las alcantarillas, donde luchaste contra Vivi.'], ['VIII', 'En la Torre (hay que coger el tren en la estación).'], ['XII', 'Delante de la mansión.']],
    mini: ['Cartero', 'Cuesta arriba', 'Fanfarronería', 'Pegar carteles', 'Para-zumbidos', '¡Fuera basura!', 'Struggle: Hayner, Setzer y Seifer', 'Delirio callejero (monopatín)'],
  },
  {
    id: 'vergel-radiante', nombre: 'Bastión Hueco / Vergel Radiante', logros: [],
    setas: [['IX', 'Donde luchaste contra Demyx.'], ['XIII', 'Donde luchaste contra los 1000 sincorazón. Solo tras satisfacer a las otras doce.']],
    mini: ['Estilo libre (monopatín, con McPato)', 'Gruta de la Evocación (entrada por el agujero del Postigo)'],
    secretos: 'Sephiroth, al fondo de donde luchaste contra los 1000 sincorazón, y las réplicas de la Organización XIII, en la sala final de la Gruta de la Evocación.',
  },
  {
    id: 'coliseo-del-olimpo', nombre: 'Coliseo del Olimpo', logros: ['ACH_124'],
    esencia: 'Zexión, en la Cámara Interior.',
    setas: [['VI', 'En el Atrio de las Cuevas del Inframundo, donde luchaste contra Demyx.']],
    mini: ['Entrenamiento de Fil', 'Infiernódromo: las cuatro copas', 'Combates Paradoja: las cuatro copas Paradoja'],
    mickey: ['Cerbero (primer combate)'],
  },
  {
    id: 'tierra-de-dragones', nombre: 'Tierra de Dragones', logros: ['ACH_122'],
    setas: [['IV', 'En la puerta del Palacio.']],
    mickey: ['Shan-Yu', 'Jinete de Tormentas'],
  },
  {
    id: 'castillo-de-bestia', nombre: 'Castillo de Bestia', logros: ['ACH_123'],
    esencia: 'Marluxia, en el Cuarto de Bestia.',
    setas: [['III', 'En el puente donde luchas contra Xaldin.']],
    mickey: ['Custodio y Usurpador', 'Sombra Acechante', 'Espinas de Sombra', 'Xaldin'],
  },
  {
    id: 'bosque-de-los-cien-acres', nombre: 'Bosque de los Cien Acres', logros: ['ACH_130'],
    mini: ['Un rescate tormentoso', 'Tobogán de miel', 'Brincos y globos', 'La exposición', 'El tarro de miel'],
  },
  {
    id: 'castillo-disney', nombre: 'Castillo Disney', logros: [],
    secretos: 'La Consciencia Latente, tras un portal en el Salón de la Piedra Angular, cuando completas todos los mundos y terminas el juego.',
  },
  {
    id: 'rio-eterno', nombre: 'Río Eterno', logros: ['ACH_121'],
    setas: [['XI', 'En el canal.']],
  },
  {
    id: 'atlantica', nombre: 'Atlántica', logros: ['ACH_131'],
    mini: ['Volver a interpretar todas las canciones'],
  },
  {
    id: 'port-royal', nombre: 'Port Royal', logros: ['ACH_125'],
    esencia: 'Larxene, en los Acantilados de la Isla de Muerta.',
    setas: [['X', 'Antes de la sala del tesoro de la Isla de Muerta.']],
    mini: ['Contrarreloj (con Will)'],
    mickey: ['Parca Pirata (primer combate)'],
  },
  {
    id: 'agrabah', nombre: 'Agrabah', logros: ['ACH_126'],
    esencia: 'Vexen, en la Tienda del mercader.',
    setas: [['V', 'En la sala del tesoro, al fondo de la Cueva de las Maravillas.']],
    mini: ['Abismo de los Desafíos (repetirlo)', 'Alfombra Mágica', 'Patín de arena'],
    mickey: ['Jefe Volcánico y Jefe Gélido'],
  },
  {
    id: 'ciudad-de-halloween', nombre: 'Ciudad de Halloween', logros: ['ACH_127'],
    setas: [['II', 'En la Plaza de los Arbolitos.']],
    mini: ['Envuelve regalos', 'Taller delirante (patinete)'],
  },
  { id: 'tierras-del-reino', nombre: 'Tierras del Reino', logros: ['ACH_128'] },
  {
    id: 'espacio-paranoico', nombre: 'Espacio Paranoico', logros: ['ACH_129'],
    mini: ['Moto de luz (desde el ordenador de la Celda)'],
  },
  {
    id: 'mundo-inexistente', nombre: 'El Mundo Inexistente', logros: [],
    setas: [['I', 'Frente al rascacielos.']],
    mickey: ['Xemnas (primer combate)'],
  },
];
export const FUENTES_MUNDOS_KH2FM = ['wikiEsKh2', 'khwikiTrofeos', 'guiaSteamKh2fm', 'guiaSteamKh2fmEn', 'wikiEsJefesKh2', 'wikiEsEsencia', 'wikiEsMicorg', 'wikiEsGruta', 'wikiEsConsciencia', 'wikiEsPiedraAngular'];
