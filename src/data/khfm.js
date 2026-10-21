// Datos de Kingdom Hearts Final Mix (versión HD 1.5+2.5 ReMIX, Steam).
// Regla: ningún dato sin fuente. Cada bloque indica de dónde sale.
// Nombres de lugares: los de los logros de Steam en español; si no salen allí, los de la Wiki ES.
import { LOGROS_KHFM } from './khfm-logros.js';

export const FUENTES_KHFM = {
  steamKhfm: { nombre: 'Steam — logros oficiales (español)', url: 'https://steamcommunity.com/stats/2552430/achievements/?l=spanish' },
  wikiEsKhfm: { nombre: 'Wiki ES — Kingdom Hearts Final Mix', url: 'https://kingdomhearts.fandom.com/es/wiki/Kingdom_Hearts_Final_Mix' },
  wikiEsKh: { nombre: 'Wiki ES — Kingdom Hearts', url: 'https://kingdomhearts.fandom.com/es/wiki/Kingdom_Hearts_(Juego)' },
  wikiEsCerradura: { nombre: 'Wiki ES — Cerradura', url: 'https://kingdomhearts.fandom.com/es/wiki/Cerradura' },
  wikiEsMonstruo: { nombre: 'Wiki ES — Monstruo (mundo)', url: 'https://kingdomhearts.fandom.com/es/wiki/Monstruo_(Mundo)' },
  wikiEsEspectro: { nombre: 'Wiki ES — Espectro', url: 'https://kingdomhearts.fandom.com/es/wiki/Espectro' },
  wikiEsKurtZisa: { nombre: 'Wiki ES — Kurt Zisa', url: 'https://kingdomhearts.fandom.com/es/wiki/Kurt_Zisa' },
  wikiEsSefirot: { nombre: 'Wiki ES — Sephiroth (jefe)', url: 'https://kingdomhearts.fandom.com/es/wiki/Gu%C3%ADa_de_Kingdom_Hearts/Sephiroth_(Boss)' },
  wikiEsXemnas: { nombre: 'Wiki ES — Xemnas', url: 'https://kingdomhearts.fandom.com/es/wiki/Xemnas' },
  wikiEsCopaHades: { nombre: 'Wiki ES — Copa Hades', url: 'https://kingdomhearts.fandom.com/es/wiki/Copa_Hades' },
  wikiEsPrometida: { nombre: 'Wiki ES — Prometida', url: 'https://kingdomhearts.fandom.com/es/wiki/Prometida' },
  khwikiKhfm: { nombre: 'KHWiki — Kingdom Hearts Final Mix (novedades)', url: 'https://www.khwiki.com/Kingdom_Hearts_Final_Mix' },
  khwikiKeyhole: { nombre: 'KHWiki — Keyhole', url: 'https://www.khwiki.com/Keyhole' },
  guiaSteamKhfm: { nombre: 'Guía de logros de Kingdom Hearts HD 1.5 ReMIX (Steam, en castellano)', url: 'https://steamcommunity.com/sharedfiles/filedetails/?id=3293246581' },
};

export const KHFM = {
  id: 'khfm',
  nombre: 'Kingdom Hearts Final Mix',
  logo: 'assets/img/logos/khfm.png',
  logros: LOGROS_KHFM,
};

// Agrupación de los 55 logros. Orden dentro de cada grupo: de más fácil a más difícil.
export const GRUPOS_LOGROS_KHFM = [
  { id: 'historia', titulo: 'Historia y dificultad', ids: ['ACH_003', 'ACH_002', 'ACH_001', 'ACH_004', 'ACH_005', 'ACH_006'] },
  { id: 'mundos', titulo: 'Cerraduras de los mundos', ids: ['ACH_022', 'ACH_023', 'ACH_024', 'ACH_025', 'ACH_026', 'ACH_027', 'ACH_028', 'ACH_029', 'ACH_030', 'ACH_031', 'ACH_032'] },
  { id: 'coliseo', titulo: 'Coliseo del Olimpo', ids: ['ACH_010', 'ACH_011', 'ACH_012', 'ACH_013', 'ACH_016', 'ACH_017'] },
  { id: 'jefes', titulo: 'Jefes secretos', ids: ['ACH_008', 'ACH_009', 'ACH_014', 'ACH_015', 'ACH_007'] },
  { id: 'diario', titulo: 'Diario de Pepito', ids: ['ACH_034', 'ACH_037', 'ACH_038', 'ACH_035', 'ACH_036', 'ACH_039', 'ACH_033'] },
  { id: 'sintesis', titulo: 'Síntesis', ids: ['ACH_041', 'ACH_042', 'ACH_043', 'ACH_044', 'ACH_040'] },
  { id: 'gumi', titulo: 'Naves gumi', ids: ['ACH_047', 'ACH_049', 'ACH_048', 'ACH_050', 'ACH_051', 'ACH_046', 'ACH_045'] },
  { id: 'armas', titulo: 'Armas', ids: ['ACH_052', 'ACH_053', 'ACH_054', 'ACH_055'] },
  { id: 'contadores', titulo: 'Contadores', ids: ['ACH_021', 'ACH_019', 'ACH_020', 'ACH_018'] },
];

// Ruta al 100 %: solo hechos con fuente. `logros` enlaza con los logros a los que ayuda.
export const RUTA_KHFM = [
  {
    id: 'r-perdibles',
    titulo: 'Los tres perdibles, mejor en una partida aparte en Principiante',
    texto: 'Sin tocar la opción Equipamiento del menú (los objetos como Fuerza+ sí se pueden usar), sin elegir nunca «Continuar» al morir (vuelve al título y carga) y venciendo al jefe final en menos de 15 horas. Las escenas no cuentan para el tiempo, pero la pausa sí. Puedes saltarte Atlántica, el Bosque de los Cien Acres y la cerradura del Coliseo.',
    logros: ['ACH_004', 'ACH_005', 'ACH_006'],
    fuentes: ['guiaSteamKhfm'],
  },
  {
    id: 'r-dificultad',
    titulo: 'Juega en Experto si quieres ahorrar partidas',
    texto: '«El Maestro» pide Normal o superior y «El Principiante», Principiante o superior, así que terminar en Experto da los tres. En Experto los enemigos hacen el doble de daño que en Normal y la nave gumi hace la mitad (KHWiki). La Wiki ES lo compara con el juego original: el cuádruple de daño a Sora.',
    logros: ['ACH_001', 'ACH_002', 'ACH_003'],
    fuentes: ['steamKhfm', 'khwikiKhfm', 'wikiEsKhfm'],
  },
  {
    id: 'r-principiante',
    titulo: 'Principiante te da ventaja, pero tiene un precio',
    texto: 'En Principiante empiezas con una Cinta, un Colgante de EXP, 8 de Ataque, 8 de Defensa y 4 PH, y el Taladro gumi hace 9.999 de daño. A cambio no se puede ver el vídeo secreto.',
    logros: ['ACH_003'],
    fuentes: ['wikiEsKhfm', 'khwikiKhfm'],
  },
  {
    id: 'r-final-secreto',
    titulo: 'El final secreto depende de la dificultad',
    texto: 'En Normal: «Another Side, Another Story...» al sellar todas las cerraduras, encontrar los 99 cachorros y ganar la copa Hades; «[Deep Dive]» al completar el diario de Pepito. En Experto: el primero solo con terminar el juego; «[Deep Dive]» al sellar todas las cerraduras y ganar la copa Hades. En Principiante no hay vídeo secreto.',
    logros: ['ACH_033', 'ACH_013'],
    fuentes: ['khwikiKhfm', 'wikiEsKhfm'],
  },
  {
    id: 'r-coliseo',
    titulo: 'La copa Hades llega al final',
    texto: 'Se desbloquea al ganar todas las copas anteriores y completar Bastión Hueco. Tiene 49 combates, con un jefe cada 10 y guardado automático en cada jefe. Al ganarla se abre el Combate de oro contra el Titán Hielo; tras ella, el Combate de platino contra Sefirot.',
    logros: ['ACH_013', 'ACH_014', 'ACH_015'],
    fuentes: ['wikiEsCopaHades', 'wikiEsSefirot'],
  },
];

// Consejos por logro (solo con fuente).
export const CONSEJOS_KHFM = {
  ACH_004: 'No toques la opción Equipamiento del menú en toda la partida. Los objetos que suben atributos (Fuerza+, PH+…) sí se pueden usar.',
  ACH_005: 'Si te derrotan, no elijas «Continuar»: vuelve a la pantalla de título y carga la partida. Guarda a menudo.',
  ACH_006: 'Las escenas no cuentan para el tiempo, pero la pausa sí. En Principiante, evita los combates opcionales; en las preguntas del principio, elige siempre la primera opción para subir antes de nivel. Puedes saltarte Atlántica, el Bosque de los Cien Acres y la cerradura del Coliseo.',
  ACH_018: 'Lo más rápido es el Titán Hielo del Coliseo (unos 10.000 de EXP por combate) con Extraordinario equipado, que da EXP extra al bloquear. También los sincorazón de Ciudad de Paso tras Bastión Hueco o el Titán Roca.',
  ACH_019: 'Suele salir solo avanzando en la historia.',
  ACH_020: 'Sale solo mientras subes a nivel 100.',
  ACH_021: 'Sale avanzando en la historia o subiendo a nivel 100.',
  ACH_032: 'Hacen falta todas las páginas arrancadas y terminar la historia del Bosque. Las páginas: premio de Pongo por 51 cachorros, cofre de la sala oscura de la Cueva de las Maravillas, cofre del Vientre 6 de Monstruo, estantería del laboratorio de Ciudad de Halloween y cofre de la gruta de Ariel.',
  ACH_045: 'Hay tres vías: al abatir naves enemigas (10 % de que suelten su plano), Geppetto en Ciudad de Paso según los sincorazón que derrotes (el último, hablando 30 veces con Pinocho), y al completar las misiones III gumi. Las misiones gumi son lo más eficiente.',
  ACH_046: 'Sale mientras consigues planos o haces misiones gumi.',
  ACH_048: 'Recorre todas las rutas posibles atravesando todos los portales.',
  ACH_049: 'Vale la misión I de cualquier mundo.',
  ACH_001: 'Al terminarlo también consigues «El Maestro» y «El Principiante», que piden ese modo o uno superior.',
  ACH_002: 'También lo da terminar en Experto.',
  ACH_003: 'También lo da terminar en Normal o en Experto.',
  ACH_008: 'Lleva a Peter Pan en el grupo, entra en el Camarote del barco y Campanilla os llevará volando a la Torre del Reloj. Para frenar su cuenta atrás hay que lanzar Paro a las agujas de la cara del reloj rodeada de fuego azul.',
  ACH_009: 'Aparece en Agrabah. Para luchar contra él hay que hablar con la Alfombra Mágica.',
  ACH_013: 'Se desbloquea al ganar las copas anteriores y completar Bastión Hueco. Cada 10 combates hay un jefe y se guarda automáticamente; Hades es el del puesto 10 y el Titán Roca, el último. La Wiki ES cuenta 49 combates y la guía de Steam, 50.',
  ACH_014: 'El Combate de oro se abre al ganar la copa Hades. En Final Mix, vencer al Titán Hielo da la llave espada Polvo de Diamante.',
  ACH_015: 'El Combate de platino se abre tras superar la copa Hades.',
  ACH_007: 'Es el jefe exclusivo de Final Mix, en Bastión Hueco: el hombre encapuchado (Xemnas, aunque en este juego no se dice su nombre). Es el enemigo con más vida del juego.',
  ACH_027: 'Monstruo no tiene cerradura: el logro llega al terminar el mundo y salir de la ballena.',
  ACH_052: 'Tras rescatar a Kairi en Bastión Hueco, ella te da su amuleto (el llavero de Prometida) en el Canal Secreto de Ciudad de Paso.',
  ACH_041: 'La Orfebrería se abre tras terminar Agrabah, con el Trío Verde de la Tienda de Accesorios de Ciudad de Paso. Lo más barato es el Chalé: 1 Guijarro Claro y 1 Guijarro Vital.',
  ACH_042: 'Tres objetos distintos de la lista I; al hacerlos se abre la lista II.',
  ACH_043: 'Con 15 objetos distintos se abre la lista IV y el moguri te da la habilidad Más Encuentros.',
  ACH_044: 'Treinta objetos distintos: todas las listas I a V. Al hacerlo se abre la lista VI.',
  ACH_040: 'Son 33 objetos. Los tres de la lista VI son armas: Vara de Fantasía, Siete Elementos y Arma Artema. Recetas y materiales en «Informes · 100 %», sección Síntesis.',
  ACH_053: 'Son 18 llaves espada, contando la Cadena del Reino. La última, el Arma Artema, se fabrica en la lista VI de la síntesis. Dónde sale cada una: «Informes · 100 %», sección Armas.',
  ACH_054: 'Son 15 bastones. Vara de Fantasía se fabrica en la lista VI de la síntesis y el Cetro de Brujo solo lo suelta el sincorazón Brujo (0,2 %).',
  ACH_055: 'Son 15 escudos. Siete Elementos se fabrica en la lista VI de la síntesis y el Defensor solo lo suelta el sincorazón Defensor (0,2 %).',
};
export const FUENTES_CONSEJOS_KHFM = ['khwikiSintesis', 'diLlaves', 'diBastones', 'diEscudos','steamKhfm', 'guiaSteamKhfm', 'wikiEsEspectro', 'wikiEsKurtZisa', 'wikiEsCopaHades', 'khwikiKhfm', 'wikiEsSefirot', 'wikiEsXemnas', 'wikiEsMonstruo', 'wikiEsPrometida'];

// Mundos en el orden de sus logros de Steam (ACH_022…ACH_032). `cerradura`: dónde está y cómo se sella.
export const MUNDOS_KHFM = [
  { id: 'ciudad-de-paso', nombre: 'Ciudad de Paso', logro: 'ACH_022', cerradura: 'En la fuente del Distrito 2. Aparece al tirar tres veces de la cuerda de la campana del distrito, que hace girar la fuente.' },
  { id: 'pais-de-las-maravillas', nombre: 'País de las Maravillas', logro: 'ACH_023', cerradura: 'Escondida en la boca de Picaporte.' },
  { id: 'coliseo-del-olimpo', nombre: 'Coliseo del Olimpo', logro: 'ACH_024', cerradura: 'Bajo un bloque de piedra del Portal. Sora, Donald y Goofy lo apartan con el Trío Amarillo.' },
  { id: 'selva-profunda', nombre: 'Selva Profunda', logro: 'ACH_025', cerradura: 'En lo alto de la cascada de la Cueva del Corazón, detrás de una bandada de mariposas. Kerchak os muestra el camino.' },
  { id: 'agrabah', nombre: 'Agrabah', logro: 'ACH_026', cerradura: 'En la Cámara de la Lámpara, la última sala de la Cueva de las Maravillas. Yafar la revela con su primer deseo.' },
  { id: 'monstruo', nombre: 'Monstruo', logro: 'ACH_027', cerradura: 'No tiene cerradura: aquí el logro es escapar del interior de la ballena.' },
  { id: 'atlantica', nombre: 'Atlántica', logro: 'ACH_028', cerradura: 'En la Gruta de Ariel. Tras derrotar a Úrsula, el Rey Tritón la revela con su tridente.' },
  { id: 'ciudad-de-halloween', nombre: 'Ciudad de Halloween', logro: 'ACH_029', cerradura: 'Bajo la Mansión de Oogie: al derrumbarse, la luna señala dónde está.' },
  { id: 'pais-de-nunca-jamas', nombre: 'País de Nunca-Jamás', logro: 'ACH_030', cerradura: 'En una de las caras del reloj del Big Ben. Aparece cuando el minutero sube hasta las doce.' },
  { id: 'bastion-hueco', nombre: 'Bastión Hueco', logro: 'ACH_031', cerradura: 'La Cerradura Final, en lo alto del castillo, la que Maléfica abre con los corazones de las Princesas del Corazón.' },
  { id: 'bosque-de-los-cien-acres', nombre: 'Bosque de los Cien Acres', logro: 'ACH_032', cerradura: 'Es el broche que cierra el libro.' },
];
export const FUENTES_MUNDOS_KHFM = ['wikiEsCerradura', 'khwikiKeyhole', 'wikiEsMonstruo', 'steamKhfm'];
