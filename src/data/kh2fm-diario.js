// Diario de Pepito de KH II Final Mix: Informes Ansem, sincorazón, incorpóreos, límites, personajes y relaciones.
// A mano. Nombres: guía de logros en castellano de Steam; si no salen allí, Wiki ES (comprobados con el campo «inglés»
// de su ficha). Ids: kh2fm.ansem.<n>, kh2fm.sincorazon.<slug>, kh2fm.incorporeo.<slug>, kh2fm.limite.<slug>.
const WES = 'https://kingdomhearts.fandom.com/es/wiki/';
export const FUENTES_DIARIO_KH2FM = {
  khwikiAnsem: { nombre: "KHWiki — Ansem's Reports (Secret Ansem Report)", url: "https://www.khwiki.com/Ansem's_Reports" },
  khwikiDiario: { nombre: "KHWiki — Jiminy's Journal", url: "https://www.khwiki.com/Jiminy's_Journal" },
  khwikiLimites: { nombre: 'KHWiki — Limit', url: 'https://www.khwiki.com/Limit' },
  khwikiPerplex: { nombre: 'KHWiki — Beffudler (Perplex)', url: 'https://www.khwiki.com/Perplex' },
  wikiEsSincorazon: { nombre: 'Wiki ES — Sincorazón', url: `${WES}Sincoraz%C3%B3n` },
  wikiEsIluminador: { nombre: 'Wiki ES — Iluminador', url: `${WES}Iluminador` },
  wikiEsIncorporeos: { nombre: 'Wiki ES — Umbrío, Trepador, Enloquecedor y Penumbra Espinosa', url: `${WES}Umbr%C3%ADo` },
};

export const INTRO_DIARIO_KH2FM = 'Al completar un apartado, entra en él desde el diario para que salte su logro. Los enemigos y personajes que Roxas ve en la Villa Crepúsculo simulada no se registran hasta que Sora se los encuentra.';

// Cuándo sale cada informe en Final Mix (el orden de los informes 8, 9 y 12 cambia respecto a la versión japonesa).
export const INFORMES_ANSEM_KH2FM = [
  { n: 1, como: 'Tras la Batalla de los 1000 Sincorazón, en Bastión Hueco.' },
  { n: 2, como: 'Al encontrarte con el rey Mickey en la primera visita de Sora a Villa Crepúsculo.' },
  { n: 3, como: 'Tras vencer a Xigbar, en El Mundo Inexistente.' },
  { n: 4, como: 'Tras vencer a Xaldin, en la segunda visita al Castillo de Bestia.' },
  { n: 5, como: 'Tras vencer a Demyx por primera vez, en la primera visita al Coliseo del Olimpo.' },
  { n: 6, como: 'Tras vencer a la Parca Pirata por segunda vez, en la segunda visita a Port Royal.' },
  { n: 7, como: 'Tras vencer a los incorpóreos que atacan la puerta de Bastión Hueco, en la primera visita.' },
  { n: 8, como: 'Tras vencer a Roxas, en El Mundo Inexistente (combate nuevo de Final Mix).' },
  { n: 9, como: 'Tras vencer a Luxord, en El Mundo Inexistente.' },
  { n: 10, como: 'Al entrar en la Villa Crepúsculo Alternativa, en la última visita a Villa Crepúsculo.' },
  { n: 11, como: 'Cuando Riku recupera su aspecto, en El Mundo Inexistente.' },
  { n: 12, como: 'Tras vencer a Saïx, en El Mundo Inexistente.' },
  { n: 13, como: 'Tras vencer a Xemnas por primera vez, en El Mundo Inexistente.' },
];

// Sincorazón: [nombre, dónde]. Grupos: los de los mundos (guía en castellano), los jefes sincorazón que también registra
// el diario (guía inglesa; lugar de la Wiki ES), los de la Gruta de la Evocación y la Micorganización XIII.
export const SINCORAZON_KH2FM = [
  {
    id: 'mundos', titulo: 'En los mundos', intro: 'La mayoría salen solos durante la historia.', items: [
      ['Sombra', 'Villa Crepúsculo, Bastión Hueco, Tierra de Dragones, Castillo de Bestia, Coliseo del Olimpo, Castillo Disney, Río Eterno, Port Royal, Agrabah, Ciudad de Halloween, Tierras del Reino, Espacio Paranoico y El Mundo Inexistente'],
      ['Soldado', 'Villa Crepúsculo, Tierra de Dragones, Castillo de Bestia, Coliseo del Olimpo, Castillo Disney, Río Eterno, Port Royal, Agrabah, Ciudad de Halloween, Tierras del Reino y Espacio Paranoico'],
      ['Grandullón', 'Castillo de Bestia, Coliseo del Olimpo y Río Eterno'],
      ['Roca Plateada', 'Agrabah y Tierras del Reino'],
      ['Blues Esmeralda', 'Ciudad de Halloween, Espacio Paranoico, Tierra de Dragones y Agrabah'],
      ['Jazz Carmesí', 'Bastión Hueco, Castillo de Bestia, Coliseo del Olimpo y Agrabah'],
      ['Pirata Volador', 'Port Royal y Tierra de Dragones'],
      ['Ilusión Fantasmal', 'Coliseo del Olimpo y Ciudad de Halloween'],
      ['Perro Rabioso', 'Coliseo del Olimpo y Port Royal'],
      ['Gancho Vampiro', 'Castillo de Bestia, Coliseo del Olimpo, Tierra de Dragones y Agrabah'],
      ['Bibliotecario', 'Bastión Hueco y Espacio Paranoico'],
      ['Minuto Explosivo', 'Castillo Disney, Río Eterno y Coliseo del Olimpo'],
      ['Martillo Furioso', 'Río Eterno, Port Royal y Castillo de Bestia'],
      ['Vendedor Corpulento', 'Tierra de Dragones, Castillo de Bestia, Coliseo del Olimpo, Agrabah y Ciudad de Halloween. Es especial: aparece al azar en zonas concretas.'],
      ['Pitonisa', 'Agrabah'],
      ['Cañón', 'Port Royal, Tierra de Dragones y Espacio Paranoico'],
      ['Cohete Repentino', 'Tierra de Dragones, Río Eterno, Port Royal, Agrabah y Tierras del Reino'],
      ['Gran Taladro', 'Ciudad de Halloween y Coliseo del Olimpo'],
      ['Lancero', 'Castillo de Bestia, Coliseo del Olimpo y Port Royal'],
      ['Lucero del Alba', 'Bastión Hueco, Castillo de Bestia, Port Royal y Coliseo del Olimpo'],
      ['Globo Fiero', 'Agrabah'],
      ['Cubo Helado', 'Agrabah'],
      ['Bandido Obeso', 'Agrabah'],
      ['Bandido Lunar', 'Agrabah'],
      ['Gárgola Pétrea', 'Castillo de Bestia'],
      ['Gárgola Guerrera', 'Castillo de Bestia'],
      ['Osado Caballero', 'Ciudad de Halloween'],
      ['Sepulturero', 'Ciudad de Halloween'],
      ['Soldado de Plomo', 'Ciudad de Halloween'],
      ['Aviador Maligno', 'Río Eterno'],
      ['Coche Loco', 'Río Eterno'],
      ['Centauro Fatal', 'Tierra de Dragones'],
      ['Noctámbulo', 'Tierra de Dragones'],
      ['Torre de Tensión', 'Tierra de Dragones, Castillo Disney y Tierras del Reino'],
      ['Cargador Magno', 'Espacio Paranoico y Bastión Hueco'],
      ['Bombardero Láser', 'Espacio Paranoico y Bastión Hueco'],
      ['Devastador', 'Espacio Paranoico y Bastión Hueco'],
      ['Huesos Vivientes', 'Tierras del Reino'],
      ['Chamán', 'Tierras del Reino'],
      ['Boxeador Aéreo', 'Tierras del Reino'],
      ['Tornado Golpeador', 'Port Royal y Coliseo del Olimpo'],
      ['Claxon Sanador', 'Coliseo del Olimpo'],
      ['Enredadera', 'Coliseo del Olimpo y Ciudad de Halloween'],
      ['Armadura Sombría', 'Bastión Hueco, Castillo de Bestia, Port Royal, Ciudad de Halloween y Tierras del Reino'],
      ['Robot Centinela', 'Bastión Hueco, Port Royal y Espacio Paranoico'],
      ['Neosombra', 'Bastión Hueco, Tierra de Dragones, Castillo de Bestia, Port Royal, Coliseo del Olimpo, Agrabah, Ciudad de Halloween, Tierras del Reino y El Mundo Inexistente'],
    ],
  },
  {
    id: 'jefes', titulo: 'Jefes sincorazón', intro: 'Se registran al vencerlos en la historia.', items: [
      ['Custodio', 'Castillo de Bestia (Mazmorra)'],
      ['Usurpador', 'Castillo de Bestia (Mazmorra)'],
      ['Sombra Acechante', 'Castillo de Bestia (Salón de Baile)'],
      ['Espinas de Sombra', 'Castillo de Bestia (Salón de Baile)'],
      ['Jefe Volcánico', 'Agrabah'],
      ['Jefe Gélido', 'Agrabah'],
      ['Carcelero', 'Ciudad de Halloween (Colina de la Luna)'],
      ['Parca Pirata', 'Port Royal'],
      ['Iluminador', 'Port Royal'],
      ['Jinete de Tormentas', 'Tierra de Dragones (Puertas de Palacio)'],
      ['Terremoto Salvaje', 'Tierras del Reino'],
    ],
  },
  {
    id: 'gruta', titulo: 'Gruta de la Evocación', intro: 'Exclusivos de Final Mix. Se entra por el agujero del Postigo de Vergel Radiante; hacen falta todas las fusiones para superar sus obstáculos.', items: [
      ['Metal Cian', ''], ['Vikingo Volador', ''], ['Espectro Mágico', ''], ['Anzuelo', ''], ['Arcanista', ''], ['Maza Férrica', ''],
      ['Chocador Chiflado', ''], ['Lanzador Silente', ''], ['Temerario', ''], ['Lancero Audaz', ''], ['Necromante', ''], ['Campeón Aéreo', ''],
    ],
  },
  {
    id: 'setas', titulo: 'Micorganización XIII', intro: 'Los últimos de la lista. Dónde está cada una, en la sección Mundos.', items:
      ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII', 'XIII'].map((n) => [`N.º ${n}`, '']),
  },
];
export const NOTA_SINCORAZON = 'La guía en castellano lista 71 (sin los jefes) y la inglesa, 81: añade los 11 jefes, pero le falta el Temerario. «Anzuelo» es el «Beffudler» de la guía inglesa.';

// Incorpóreos que registra el diario (guía inglesa; nombres de la Wiki ES y de la guía en castellano).
export const INCORPOREOS_KH2FM = ['Umbrío', 'Enloquecedor', 'Trepador', 'Penumbra Espinosa', 'Asesino', 'Dragón', 'Samurái', 'Bailarina', 'Francotirador', 'Tahúr', 'Hechicero'];

// Límites: nombres de la guía en castellano; cómo se consigue cada uno, de KHWiki (los de aliado se usan con la habilidad
// equipada en ese aliado; los de invocación no la necesitan y gastan barra de invocación).
export const LIMITES_KH2FM = [
  {
    id: 'aliados', titulo: 'Aliados', items: [
      { n: 'Fantasía', quien: 'Donald', como: 'Al liberar la Piedra Angular de Luz (Castillo Disney).' },
      { n: 'Fulgor Cegador', quien: 'Donald', como: 'Al vencer a la Parca Pirata en Port Royal.' },
      { n: 'Tornado Fusión', quien: 'Goofy', como: 'Al vencer al Jinete de Tormentas.' },
      { n: 'Unidad', quien: 'Goofy', como: 'Al vencer al Capitán Barbossa.' },
      { n: 'Luna Aullante', quien: 'Bestia', como: 'Desde que se une.' },
      { n: 'A Tope', quien: 'Auron', como: 'Desde que se une.' },
      { n: 'Dragón de Fuego', quien: 'Mulán', como: 'Cuando Mulán deja de ir disfrazada.' },
      { n: 'Truco Fantástico', quien: 'Aladdin', como: 'Desde que se une.' },
      { n: 'Ovación', quien: 'Jack', como: 'Desde que se une.' },
      { n: 'Isla del Tesoro', quien: 'Jack Sparrow', como: 'Desde que se une.' },
      { n: 'Orgullo del Rey', quien: 'Simba', como: 'Desde que se une.' },
      { n: 'Compilación Completa', quien: 'Tron', como: 'Al acceder al DTD (Espacio Paranoico).' },
      { n: 'Sesión Eterna', quien: 'Riku', como: 'Desde que se une.' },
      { n: 'Trío', quien: 'Sora', como: 'Al vencer a Pete en el Pozo de los Condenados (Coliseo del Olimpo).' },
    ],
  },
  {
    id: 'invocaciones', titulo: 'Invocaciones', items: [
      { n: 'Primera persona', quien: 'Chicken Little' },
      { n: 'País de Nunca Jamás', quien: 'Peter Pan' },
      { n: '¡Ohana!', quien: 'Stitch' },
      { n: 'Estocada Sónica', quien: 'Genio Valiente' },
      { n: 'Tiro Divino', quien: 'Genio Sabio' },
      { n: 'Arcano', quien: 'Genio Maestro' },
      { n: 'Infinidad', quien: 'Genio Final' },
    ],
  },
];

// Apartados sin lista con fuente: solo su logro (misma marca) y lo que pide.
export const APARTADOS_SIN_LISTA = [
  { logro: 'ACH_135', titulo: 'Personajes', texto: 'Se completa al vencer a los jefes secretos y ganar a todos los rivales del Struggle de Villa Crepúsculo. En Final Mix, cada miembro de la Organización caído en el Castillo del Olvido se añade al diario al luchar contra su Esencia intangible.' },
  { logro: 'ACH_145', titulo: 'Relaciones', texto: 'Se completa al vencer a los jefes secretos. En Final Mix, la Consciencia Latente también aparece en el esquema principal de relaciones.' },
];
