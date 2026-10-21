// Naves gumi de KH Final Mix: misiones y planos. Hecho a mano.
// Misiones: KHWiki «Gummi Missions» y Destiny Islands, que coinciden (KHWiki da algunos datos más, como los 140 obstáculos).
// Planos: Destiny Islands y KHWiki «Blueprint»; rutas de cada nave enemiga, de su ficha en KHWiki. Imágenes de KHWiki.
// Piezas gumi: nombre en castellano cuando la Wiki ES o la guía de Steam lo dan; si no, en inglés (no hay nombre oficial comprobado).
// Ids: `khfm.gumi.mision.<mundo>.<n>` y `khfm.gumi.plano.<id>`; los planos de misión usan el id de su misión III.

export const FUENTES_GUMI = {
  khwikiMisiones: { nombre: 'KHWiki — Gummi Missions (Kingdom Hearts Final Mix)', url: 'https://www.khwiki.com/Gummi_Missions' },
  diMisiones: { nombre: 'Destiny Islands — Gummi Missions (Kingdom Hearts Final Mix)', url: 'https://www.destinyislands.com/kh-fm/gummi-ship/missions/' },
  khwikiPlanos: { nombre: 'KHWiki — Blueprint (modelos de Kingdom Hearts y Final Mix, e imágenes)', url: 'https://www.khwiki.com/Blueprint' },
  diPlanos: { nombre: 'Destiny Islands — Blueprints (Kingdom Hearts Final Mix)', url: 'https://www.destinyislands.com/kh-fm/gummi-ship/blueprints/' },
  khwikiNaves: { nombre: 'KHWiki — fichas de las naves enemigas (rutas donde aparecen)', url: 'https://www.khwiki.com/Cindy' },
  guiaSteamKhfm100: { nombre: 'Ultimate Guide to Your First Time 100%ing Kingdom Hearts Final Mix (Steam, inglés)', url: 'https://steamcommunity.com/sharedfiles/filedetails/?id=3277287477' },
  wikiEsTrio: { nombre: 'Wiki ES — Trío (nombres de piezas gumi)', url: 'https://kingdomhearts.fandom.com/es/wiki/Tr%C3%ADo' },
};

export const IMG_GUMI = 'assets/img/khfm/gumi/gumi-';

// Misiones: `estrellas` es la dificultad que da KHWiki; `premio`, la pieza o el plano.
export const MISIONES_GUMI = [
  { mundo: 'ciudad-de-paso', nombre: 'Ciudad de Paso', m: [
    { e: 1, t: 'Consigue 80 puntos o más.', premio: '«Wheel-G»' },
    { e: 2, t: 'Sal del Coliseo del Olimpo y recoge 30 bloques de escudo o más.', premio: '«Fang-G»' },
    { e: 5, t: 'Sal de Bastión Hueco y llega con 0 puntos y sin recibir daño. Prohibidos «Shield-G» y «Shield2-G».', premio: 'Plano Moogle', plano: 'moogles' },
  ] },
  { mundo: 'pais-de-las-maravillas', nombre: 'País de las Maravillas', m: [
    { e: 1, t: 'Consigue 120 puntos o más.', premio: '«Wheel-G»' },
    { e: 2, t: 'Usa 5 veces o más «Haste-G» o «Haste2-G» y llega sin recibir daño.', premio: '«Fang-G»' },
    { e: 3, t: 'Sal de Ciudad de Paso y recoge 40 bloques gumi o más.', premio: 'Plano Valefor', plano: 'valefor' },
  ] },
  { mundo: 'coliseo-del-olimpo', nombre: 'Coliseo del Olimpo', m: [
    { e: 1, t: 'Consigue 180 puntos o más.', premio: '«Fang-G»' },
    { e: 3, t: 'Sal de Selva Profunda con Gumi Electro+ como única arma y destruye 70 naves enemigas o más.', premio: '«Horn-G»' },
    { e: 4, t: 'Sal de Ciudad de Paso y destruye los 140 obstáculos. Pista del juego: busca los obstáculos ocultos.', premio: 'Plano PuPu', plano: 'pupu' },
  ] },
  { mundo: 'selva-profunda', nombre: 'Selva Profunda', m: [
    { e: 1, t: 'Consigue 200 puntos o más.', premio: '«Wheel-G»' },
    { e: 2, t: 'Sal de Agrabah y recoge 10 bloques especiales o más. Pista del juego: mantén R1 para el fuego pesado.', premio: '«Fang-G»' },
    { e: 3, t: 'Sal del País de las Maravillas con Gumi Electro++ como única arma y destruye 55 naves enemigas o más.', premio: 'Plano Cerberus', plano: 'cerberus' },
  ] },
  { mundo: 'agrabah', nombre: 'Agrabah', m: [
    { e: 1, t: 'Consigue 330 puntos o más.', premio: '«Wheel-G»' },
    { e: 3, t: 'Sal del País de las Maravillas con Gumi Cometa como única arma y destruye 130 naves enemigas o más.', premio: '«Horn-G»' },
    { e: 4, t: 'Recoge 130 bloques gumi o más. Prohibidos «Drain-G» y «Osmose-G».', premio: 'Plano Tonberry', plano: 'tonberry' },
  ] },
  { mundo: 'atlantica', nombre: 'Atlántica', m: [
    { e: 2, t: 'Recoge 10 bloques de armadura o más (los verdes de vida, que sueltan las rocas azules pequeñas).', premio: '«Wheel-G»' },
    { e: 4, t: 'No rompas ningún obstáculo y consigue 240 puntos o más.', premio: '6 «Caterpillar-G»' },
    { e: 5, t: 'No recojas ningún objeto y consigue 260 puntos o más.', premio: 'Plano Pandaemonium', plano: 'pandaemonium' },
  ] },
  { mundo: 'ciudad-de-halloween', nombre: 'Ciudad de Halloween', m: [
    { e: 3, t: 'Recoge 20 bloques de energía o más (recargan el láser azul).', premio: '«Wheel-G»' },
    { e: 3, t: 'Destruye 220 naves enemigas o más sin usar el freno.', premio: '4 «Caterpillar-G»' },
    { e: 4, t: 'Sal del País de Nunca-Jamás con Gumi Meteoro como única arma y consigue 550 puntos o más.', premio: 'Plano Ixion', plano: 'ixion' },
  ] },
  { mundo: 'pais-de-nunca-jamas', nombre: 'País de Nunca-Jamás', m: [
    { e: 3, t: 'Sal de Atlántica con Gumi Electro como única arma y destruye 150 naves enemigas o más.', premio: '«Rock-G»' },
    { e: 4, t: 'Lleva 100 bloques gumi o más en la nave, sal del Coliseo del Olimpo y llega sin recibir daño.', premio: '«Drill-G»' },
    { e: 5, t: 'Lleva 10 bloques gumi o menos en la nave, sal del Coliseo del Olimpo y destruye 777 obstáculos o más.', premio: 'Plano Gilgamesh', plano: 'gilgamesh' },
  ] },
  { mundo: 'bastion-hueco', nombre: 'Bastión Hueco', m: [
    { e: 4, t: 'Sal del País de Nunca-Jamás con Gumi Artema como única arma y destruye 130 naves enemigas o más.', premio: '«Rock-G»' },
    { e: 4, t: 'Consigue 1.600 puntos o más. Pista del juego: recoge todos los objetos.', premio: '2 «Angel-G»' },
    { e: 5, t: 'Usa «Haste2-G» 10 veces o más sin recibir daño. Prohibidos «Shield-G» y «Shield2-G».', premio: 'Plano Phoenix', plano: 'phoenix' },
  ] },
  { mundo: 'fin-del-mundo', nombre: 'Fin del Mundo', m: [
    { e: 5, t: 'Lleva 2 bloques gumi o menos y llega sin recibir daño ni usar el freno.', premio: '2 «Shoes-G»' },
    { e: 5, t: 'Lleva 5 bloques gumi o menos y consigue 350 puntos o más. Pista del juego: derrota a Omega.', premio: '2 «Dark-G»' },
    { e: 5, t: 'Consigue 600 puntos o más. Pista del juego: destrúyelos a todos.', premio: 'Plano Eden', plano: 'eden' },
  ] },
];
export const MISIONES_INFO = [
  'Cada mundo tiene tres misiones, que se abren al completar su ruta una vez. Se eligen en el menú de misiones gumi.',
  'Al completar las 30 se consiguen el plano Bahamut y la pieza «Crown-G».',
  'Para «Piloto de pruebas», «Piloto veterano» y «Piloto de élite» vale la misión I, II y III de cualquier mundo.',
];

// Nave base que propone la guía de Steam de 100 % para las misiones (montada antes de Atlántica).
export const NAVE_BASE = [
  'Compra a Cid las mejoras COM. LV 2 y COM. LV 3 y todos los Gumi Electro que puedas.',
  'Pon delante una fila de 6 a 8 Gumi Disipar.',
  'Cambia el Gumi Cura por «Life-G» y equipa un «Osmose-G», un «Scan-G» y un «Shield2-G».',
  'Bajo la cabina, hasta 4 Gumi Electro, 2 Gumi Electro+, 2 Gumi Meteoro y 2 Gumi Artema.',
  'Para cada misión cambia las armas según lo que pida (por ejemplo, solo Gumi Meteoro).',
];

// Planos. `kairi`: en alguna de sus rutas solo sale tras rescatar a Kairi.
export const PLANOS_BASICOS = [
  { id: 'kingdom', nombre: 'Kingdom', como: 'La tienes desde el principio.' },
  { id: 'geppetto', nombre: 'Geppetto', como: 'Habla con Geppetto en Ciudad de Paso.' },
  { id: 'cid', nombre: 'Cid', como: 'Habla con Geppetto tras derrotar a 500 sincorazón.' },
  { id: 'cactuar', nombre: 'Cactuar', como: 'Habla con Geppetto tras derrotar a 1.000 sincorazón.' },
  { id: 'yuffie', nombre: 'Yuffie', como: 'Habla con Geppetto tras derrotar a 1.500 sincorazón.', nota: 'KHWiki y la guía de Steam dicen 1.500; Destiny Islands, 2.500.' },
  { id: 'aerith', nombre: 'Aerith', como: 'Habla con Geppetto tras derrotar a 3.000 sincorazón.' },
  { id: 'leon', nombre: 'Leon', como: 'Habla con Geppetto tras derrotar a 4.000 sincorazón.' },
  { id: 'hyperion', nombre: 'Hyperion', como: 'Habla con Geppetto tras derrotar a 5.000 sincorazón y tener todas las invocaciones.' },
  { id: 'chocobo', nombre: 'Chocobo', como: 'Habla con Pinocho cuando hayas entrado 30 veces en la casa de Geppetto.', nota: 'La guía de Steam en castellano dice «hablar con Pinocho 30 veces»; KHWiki y Destiny Islands, entrar 30 veces en la casa.' },
];
export const PLANOS_ENEMIGOS = [
  { id: 'adamant', nombre: 'Adamant', rutas: ['Agrabah – Ciudad de Halloween', 'Agrabah – Atlántica', 'País de Nunca-Jamás – Bastión Hueco'] },
  { id: 'ahriman', nombre: 'Ahriman', rutas: ['Ciudad de Paso – País de las Maravillas', 'Ciudad de Paso – Coliseo del Olimpo', 'Portal entre Ciudad de Paso y Bastión Hueco'] },
  { id: 'alexander', nombre: 'Alexander', rutas: ['Bastión Hueco – Fin del Mundo', 'Ciudad de Paso – País de las Maravillas', 'Ciudad de Paso – Coliseo del Olimpo'], kairi: true },
  { id: 'atomos', nombre: 'Atomos', rutas: ['Agrabah – Ciudad de Halloween', 'Ciudad de Halloween – Atlántica', 'Ciudad de Halloween – País de Nunca-Jamás', 'Ciudad de Paso – País de las Maravillas'], kairi: true },
  { id: 'bomb', nombre: 'Bomb', rutas: ['Agrabah – Ciudad de Halloween', 'Ciudad de Halloween – Atlántica', 'Ciudad de Halloween – País de Nunca-Jamás', 'Atlántica – País de Nunca-Jamás'] },
  { id: 'carbuncle', nombre: 'Carbuncle', rutas: ['Agrabah – Ciudad de Halloween', 'Agrabah – Atlántica'] },
  { id: 'catoblepas', nombre: 'Catoblepas', rutas: ['Ciudad de Halloween – País de Nunca-Jamás', 'Atlántica – País de Nunca-Jamás'] },
  { id: 'cindy', nombre: 'Cindy', rutas: ['País de las Maravillas – Selva Profunda', 'Coliseo del Olimpo – Selva Profunda', 'Portal entre Ciudad de Paso y Bastión Hueco', 'País de Nunca-Jamás – Bastión Hueco', 'Bastión Hueco – Fin del Mundo'] },
  { id: 'deathguise', nombre: 'Deathguise', rutas: ['Agrabah – Atlántica', 'Ciudad de Halloween – Atlántica', 'Atlántica – País de Nunca-Jamás', 'País de Nunca-Jamás – Bastión Hueco', 'Bastión Hueco – Fin del Mundo', 'Portal entre Ciudad de Paso y Agrabah'] },
  { id: 'diablos', nombre: 'Diablos', rutas: ['Ciudad de Halloween – País de Nunca-Jamás', 'Atlántica – País de Nunca-Jamás', 'Agrabah – Atlántica'], kairi: true },
  { id: 'goblin', nombre: 'Goblin', rutas: ['Ciudad de Paso – País de las Maravillas', 'Ciudad de Paso – Coliseo del Olimpo', 'País de las Maravillas – Selva Profunda', 'Coliseo del Olimpo – Selva Profunda'], kairi: true },
  { id: 'golem', nombre: 'Golem', rutas: ['Agrabah – Ciudad de Halloween', 'Ciudad de Halloween – Atlántica', 'Ciudad de Halloween – País de Nunca-Jamás', 'País de las Maravillas – Selva Profunda'], kairi: true },
  { id: 'ifrit', nombre: 'Ifrit', rutas: ['Portal entre Ciudad de Paso y Bastión Hueco'] },
  { id: 'imp', nombre: 'Imp', rutas: ['Portal entre Coliseo del Olimpo y Agrabah'] },
  { id: 'lamia', nombre: 'Lamia', rutas: ['Ciudad de Halloween – Atlántica', 'Atlántica – País de Nunca-Jamás'] },
  { id: 'leviathan', nombre: 'Leviathan', rutas: ['País de Nunca-Jamás – Bastión Hueco', 'Portal entre Ciudad de Paso y Agrabah'] },
  { id: 'mindy', nombre: 'Mindy', rutas: ['Agrabah – Ciudad de Halloween', 'Agrabah – Atlántica', 'Ciudad de Halloween – País de Nunca-Jamás', 'Atlántica – País de Nunca-Jamás'], kairi: true },
  { id: 'odin', nombre: 'Odin', rutas: ['Portal entre Ciudad de Paso y Bastión Hueco', 'País de las Maravillas – Selva Profunda', 'Coliseo del Olimpo – Selva Profunda'], kairi: true },
  { id: 'omega', nombre: 'Omega', rutas: ['Bastión Hueco – Fin del Mundo'] },
  { id: 'ramuh', nombre: 'Ramuh', rutas: ['Ciudad de Paso – Coliseo del Olimpo', 'Coliseo del Olimpo – Selva Profunda'], kairi: true },
  { id: 'remora', nombre: 'Remora', rutas: ['Portal entre Coliseo del Olimpo y Agrabah'] },
  { id: 'sandy', nombre: 'Sandy', rutas: ['Agrabah – Ciudad de Halloween', 'Ciudad de Halloween – Atlántica', 'Ciudad de Halloween – País de Nunca-Jamás'] },
  { id: 'serpent', nombre: 'Serpent', rutas: ['País de Nunca-Jamás – Bastión Hueco'] },
  { id: 'shiva', nombre: 'Shiva', rutas: ['Ciudad de Paso – Coliseo del Olimpo', 'Coliseo del Olimpo – Selva Profunda', 'Portal entre Ciudad de Paso y Bastión Hueco', 'País de Nunca-Jamás – Bastión Hueco', 'Bastión Hueco – Fin del Mundo'] },
  { id: 'siren', nombre: 'Siren', rutas: ['Portal entre Coliseo del Olimpo y Agrabah', 'Portal entre Ciudad de Paso y Bastión Hueco'] },
  { id: 'stingray', nombre: 'Stingray', rutas: ['Ciudad de Halloween – País de Nunca-Jamás', 'Atlántica – País de Nunca-Jamás', 'País de Nunca-Jamás – Bastión Hueco', 'Bastión Hueco – Fin del Mundo', 'Portal entre Ciudad de Paso y Agrabah'] },
  { id: 'sylph', nombre: 'Sylph', rutas: ['País de las Maravillas – Selva Profunda', 'Agrabah – Ciudad de Halloween', 'Agrabah – Atlántica', 'Ciudad de Paso – País de las Maravillas', 'Bastión Hueco – Fin del Mundo'] },
  { id: 'typhoon', nombre: 'Typhoon', rutas: ['Agrabah – Ciudad de Halloween'], kairi: true },
];
export const PLANO_BAHAMUT = { id: 'bahamut', nombre: 'Bahamut', como: 'Completa las 30 misiones gumi.' };
