// Armas y síntesis de KH Final Mix. Hecho a mano.
// Nombres y descripciones: Wiki ES (texto del juego en castellano). Fuerza y PM: los de Final Mix según Destiny Islands y
// KHWiki, que coinciden; la Wiki ES da a veces los del KH original. Cómo se consigue: guía de Steam en castellano,
// Destiny Islands y Wiki ES. Materiales: nombres de la guía de Steam y de las recetas de la Wiki ES.
// Ids: `khfm.arma.<id>` y `khfm.sintesis.<id>`; las tres armas que se sintetizan usan solo su id de arma (una sola marca).

export const FUENTES_ARMAS = {
  diLlaves: { nombre: 'Destiny Islands — Keyblades (Kingdom Hearts Final Mix)', url: 'https://www.destinyislands.com/kh-fm/weapons/keyblades/' },
  diBastones: { nombre: 'Destiny Islands — Staves (Kingdom Hearts Final Mix)', url: 'https://www.destinyislands.com/kh-fm/weapons/staves/' },
  diEscudos: { nombre: 'Destiny Islands — Shields (Kingdom Hearts Final Mix)', url: 'https://www.destinyislands.com/kh-fm/weapons/shields/' },
  khwikiArmas: { nombre: 'KHWiki — fichas de cada arma (valores de KH y de Final Mix)', url: 'https://www.khwiki.com/Divine_Rose' },
  wikiEsLlaves: { nombre: 'Wiki ES — Llaves Espada de Kingdom Hearts', url: 'https://kingdomhearts.fandom.com/es/wiki/Categor%C3%ADa:Llaves_Espada_Kingdom_Hearts' },
  wikiEsBastones: { nombre: 'Wiki ES — Bastones', url: 'https://kingdomhearts.fandom.com/es/wiki/Categor%C3%ADa:Bastones' },
  wikiEsEscudos: { nombre: 'Wiki ES — Armas de Goofy', url: 'https://kingdomhearts.fandom.com/es/wiki/Categor%C3%ADa:Armas_de_Goofy' },
  diSintesis: { nombre: 'Destiny Islands — Synthesis Lists (Kingdom Hearts Final Mix)', url: 'https://www.destinyislands.com/kh-fm/synthesis/lists/' },
  khwikiSintesis: { nombre: 'KHWiki — Synthesis (listas de KH y de Final Mix)', url: 'https://www.khwiki.com/Synthesis' },
  fandomEnSintesis: { nombre: 'Kingdom Hearts Wiki (inglés) — Synthesis (Kingdom Hearts)', url: 'https://kingdomhearts.fandom.com/wiki/Synthesis_(Kingdom_Hearts)' },
  fandomEnAccesorios: { nombre: 'Kingdom Hearts Wiki (inglés) — Kingdom Hearts accessories', url: 'https://kingdomhearts.fandom.com/wiki/Kingdom_Hearts_accessories' },
  guiaSteamSintesis: { nombre: 'Kingdom Hearts 1 Final Mix Ultimate Material + Synthesis Guide (Steam, inglés)', url: 'https://steamcommunity.com/sharedfiles/filedetails/?id=3279160251' },
  wikiEsAccesorios: { nombre: 'Wiki ES — Accesorios de Kingdom Hearts Final Mix', url: 'https://kingdomhearts.fandom.com/es/wiki/Categor%C3%ADa:Accesorios_de_Kingdom_Hearts_Final_Mix' },
};

export const IMG_ARMAS = 'assets/img/khfm/armas/';
const TIENDA = 'Tienda de Juanito, Jaimito y Jorgito, en Ciudad de Paso';

// `fue` y `pm`: bonificación de Fuerza y de PM máximos. `desc`: texto del juego (Wiki ES). `fm`: arma nueva de Final Mix.
export const ARMAS = [
  {
    id: 'llaves', titulo: 'Llaves espada', quien: 'Sora', logro: 'ACH_053',
    items: [
      { id: 'cadena-del-reino', nombre: 'Cadena del Reino', fue: 3, pm: 0, desc: 'Llavero original de la llave espada. Cada llavero otorga a la llave espada su fuerza y sus características especiales.', como: 'La tienes desde el principio.' },
      { id: 'artesana', nombre: 'Artesana', fue: 5, pm: 0, desc: 'Tiene gran alcance, pero raramente produce golpes letales.', como: 'Al sellar la cerradura de Selva Profunda.' },
      { id: 'tres-deseos', nombre: 'Tres Deseos', fue: 6, pm: 0, desc: 'Posee un gran poder de ataque y es difícil rechazar sus golpes.', como: 'Al sellar la cerradura de Agrabah.' },
      { id: 'joya-del-mar', nombre: 'Joya del Mar', fue: 6, pm: 1, desc: 'Aumenta en 1 los PM máximos y sube el poder de las invocaciones y los hechizos de ataque. Buena también como arma.', como: 'Al sellar la cerradura de Atlántica.' },
      { id: 'calabaza-macabra', nombre: 'Calabaza Macabra', fue: 7, pm: 0, desc: 'Tiene gran alcance y produce unos golpes letales consecutivos.', como: 'Al sellar la cerradura de Ciudad de Halloween.' },
      { id: 'arpa-de-hada', nombre: 'Arpa de Hada', fue: 8, pm: 1, desc: 'Aumenta en 1 los PM máximos y sube el poder de las invocaciones y los hechizos de ataque. Produce un fuerte golpe letal.', como: 'Al sellar la cerradura del País de Nunca-Jamás.' },
      { id: 'estrella-fugaz', nombre: 'Estrella Fugaz', fue: 5, pm: 0, desc: 'Tiene poco alcance, pero al final de las combinaciones produce siempre un golpe letal.', como: 'Después de escapar de Monstruo, en el cofre de la casa de Geppetto, en Ciudad de Paso.' },
      { id: 'examinadora', nombre: 'Examinadora', fue: 4, pm: 2, desc: 'Aumenta en 2 los PM máximos e incrementa en gran medida el poder de las invocaciones y los hechizos de ataque.', como: 'Habla con Merlín, en Ciudad de Paso, cuando tengas las siete magias (basta con su primer nivel).' },
      { id: 'acero-chocobo', nombre: 'Acero Chocobo', fue: 9, pm: -1, desc: 'Tiene extraordinario poder y gran alcance, pero reduce en 1 los PM máximos y casi no produce golpes letales.', como: 'Vence a Cloud en la copa Hércules del Coliseo del Olimpo.' },
      { id: 'heroica', nombre: 'Heroica', fue: 10, pm: 0, desc: 'Tiene gran poder de ataque, produce fuertes golpes letales y es difícil rechazar sus estocadas.', como: 'Gana las copas Fil, Pegaso y Hércules: aparece en un cofre del vestíbulo del Coliseo del Olimpo.' },
      { id: 'lionheart', nombre: 'Lionheart', fue: 10, pm: 1, desc: 'Aumenta en 1 los PM máximos y mejora las invocaciones y los hechizos de ataque. Una arma formidable.', como: 'Vence a Cloud y a León en la copa Hades.' },
      { id: 'ultimo-recurso', nombre: 'Último Recurso', fue: 7, pm: 2, desc: 'Aumenta en 2 los PM máximos y mejora mucho las invocaciones y los hechizos de ataque. Útil también como arma.', como: 'Marca Trío Blanco del Bosque de Lotos, en el País de las Maravillas.' },
      { id: 'la-rosa', nombre: 'La Rosa', fue: 13, pm: 0, desc: 'Tiene gran alcance y produce unos golpes letales consecutivos.', como: 'Te la da Bella en la Biblioteca de Bastión Hueco, en tu segunda visita al mundo.', nota: 'Fuerza +13 en Final Mix según Destiny Islands y KHWiki; la Wiki ES da +7.' },
      { id: 'prometida', nombre: 'Prometida', fue: 9, pm: 1, desc: 'Aumenta en 1 los PM máximos, mejora las invocaciones y los hechizos de ataque y produce golpes letales consecutivos.', como: 'Tras rescatar a Kairi en Bastión Hueco, habla con ella en el Canal Secreto de Ciudad de Paso.' },
      { id: 'recuerdos-lejanos', nombre: 'Recuerdos Lejanos', fue: 11, pm: -1, desc: 'Encierra un gran poder de ataque, pero reduce en 1 los PM máximos.', como: 'Cofre en la sala de Bastión Hueco donde vences a Riku: en lo alto, en el lado contrario de la puerta con forma de corazón.' },
      { id: 'polvo-de-diamante', nombre: 'Polvo de Diamante', fue: 3, pm: 3, fm: true, como: 'Vence al Titán Hielo en el Combate de oro del Coliseo del Olimpo.' },
      { id: 'fulgor-serafico', nombre: 'Fulgor Seráfico', fue: 8, pm: -2, fm: true, como: 'Vence a Sefirot en el Combate de platino del Coliseo del Olimpo.' },
      { id: 'arma-artema', nombre: 'Arma Artema', fue: 14, pm: 2, desc: 'La llave espada en su máxima expresión. Aumenta en 2 los PM máximos y posee también un inigualable poder de ataque.', como: 'Síntesis, lista VI (se abre al sintetizar los 30 objetos de las listas I a V). Solo se puede fabricar una vez.', sintesis: true },
    ],
  },
  {
    id: 'bastones', titulo: 'Bastones', quien: 'Donald', logro: 'ACH_054',
    items: [
      { id: 'baston-de-mago', nombre: 'Bastón de Mago', fue: 1, pm: 0, desc: 'Bastón diseñado para aumentar el poder mágico.', como: 'Lo tiene Donald desde el principio.' },
      { id: 'lucero-del-alba', nombre: 'Lucero del Alba', fue: 2, pm: 0, desc: 'Bastón diseñado para aumentar el poder mágico. También sirve como arma contundente.', como: `${TIENDA}: 150 platines.` },
      { id: 'estrella-azul', nombre: 'Estrella Azul', fue: 4, pm: 0, desc: 'Bastón diseñado para aumentar el poder mágico. También tiene respetable fuerza como arma contundente.', como: `${TIENDA}: 750 platines.` },
      { id: 'baston-de-brujo', nombre: 'Bastón de Brujo', fue: 3, pm: 1, desc: 'Misterioso bastón que rebosa de poder mágico. Aumenta en 1 los PM máximos.', como: `${TIENDA}: 1.000 platines.` },
      { id: 'baston-de-sabio', nombre: 'Bastón de Sabio', fue: 5, pm: 1, desc: 'Misterioso bastón que rebosa de poder mágico. Posee también cierto poder de ataque.', como: `${TIENDA}: 4.000 platines.` },
      { id: 'mazo-de-batalla', nombre: 'Mazo de Batalla', fue: 4, pm: -1, desc: 'Mazo adaptado especialmente para la batalla. Tiene la desventaja de reducir en 1 los PM máximos.', como: `${TIENDA}: 250 platines.` },
      { id: 'mazo-de-poder', nombre: 'Mazo de Poder', fue: 7, pm: -1, desc: 'Poderoso mazo adaptado para la batalla. Reduce en 1 los PM máximos.', como: `${TIENDA}: 1.000 platines.` },
      { id: 'mazo-demoledor', nombre: 'Mazo Demoledor', fue: 9, pm: -1, desc: 'Mazo de extraordinario poder, adaptado especialmente para las batallas. Reduce en 1 los PM máximos.', como: `${TIENDA}: 4.000 platines.` },
      { id: 'buena-fortuna', nombre: 'Buena Fortuna', fue: 7, pm: 1, desc: 'Un bastón que incrementa el poder mágico y a la vez ofrece un gran poder de ataque. Aumenta en 1 los PM máximos.', como: 'Habla con el Hada Madrina, en la Casa de Merlín de Ciudad de Paso, cuando tengas todas las invocaciones.', nota: 'Fuerza +7 en Final Mix según Destiny Islands y KHWiki; la Wiki ES da +6.' },
      { id: 'mazo-letal', nombre: 'Mazo Letal', fue: 11, pm: -1, desc: 'Un mazo que en ocasiones produce ataques de fuerza inusitada. Sin embargo reduce en 1 los PM máximos.', como: 'Marca Trío Blanco del Coliseo del Olimpo.', nota: 'Fuerza +11 en Final Mix según Destiny Islands y KHWiki; la Wiki ES da +9.' },
      { id: 'cetro-de-brujo', nombre: 'Cetro de Brujo', fue: 8, pm: 2, desc: 'Lo dejan caer a veces los brujos. Encierra un gran poder mágico.', como: 'Lo suelta el sincorazón Brujo (0,2 %). Salen bastantes en el callejón de detrás del hotel de Ciudad de Paso.', nota: 'Fuerza +8 en Final Mix según Destiny Islands y KHWiki; la Wiki ES da +5.' },
      { id: 'baston-de-ensueno', nombre: 'Bastón de Ensueño', fue: 5, pm: 2, desc: 'Encierra una fuerza invisible. Aumenta en 2 los PM.', como: 'Habla con Merlín cuando tengas las siete magias en su nivel máximo (las versiones ++).' },
      { id: 'justicia-cosmica', nombre: 'Justicia Cósmica', fue: 13, pm: 0, desc: 'El bastón más poderoso. A veces produce golpes críticos.', como: 'Cofre en la Gran Grieta, en Fin del Mundo.' },
      { id: 'vara-de-fantasia', nombre: 'Vara de Fantasía', fue: 3, pm: 3, fm: true, como: 'Síntesis, lista VI (se abre al sintetizar los 30 objetos de las listas I a V).', sintesis: true },
      { id: 'viva-la-reina', nombre: 'Viva la Reina', fue: 10, pm: 2, como: 'Gana la copa Hades en solitario.', nota: 'Fuerza +10 en Final Mix según Destiny Islands y KHWiki; la Wiki ES da +9.' },
    ],
  },
  {
    id: 'escudos', titulo: 'Escudos', quien: 'Goofy', logro: 'ACH_055',
    items: [
      { id: 'escudo-leal', nombre: 'Escudo Leal', fue: 1, pm: 0, desc: 'Escudo principalmente defensivo, diseñado para permitir a quien lo usa cumplir su deber como caballero.', como: 'Lo tiene Goofy desde el principio.' },
      { id: 'escudo-solido', nombre: 'Escudo Sólido', fue: 1, pm: 0, desc: 'Escudo de gran tamaño, principalmente defensivo. Ofrece protección contra diversos ataques.', como: `${TIENDA}: 250 platines.` },
      { id: 'destructor', nombre: 'Destructor', fue: 3, pm: 0, desc: 'Escudo pequeño y liviano, diseñado exclusivamente para el ataque.', como: `${TIENDA}: 250 platines.` },
      { id: 'escudo-de-golem', nombre: 'Escudo de Golem', fue: 3, pm: 0, desc: 'Gran escudo, principalmente defensivo aunque también sirve para golpear. Protege contra diversos ataques.', como: `${TIENDA}: 1.000 platines.` },
      { id: 'escudo-de-mitrilo', nombre: 'Escudo de Mitrilo', fue: 4, pm: 0, desc: 'Un escudo bien equilibrado, apto tanto para el ataque como para la defensa.', como: `${TIENDA}: 750 platines.` },
      { id: 'adamantino', nombre: 'Adamantino', fue: 5, pm: 0, desc: 'Gran escudo, principalmente defensivo aunque sus golpes son contundentes. Protege contra diversos ataques.', como: `${TIENDA}: 4.000 platines.` },
      { id: 'escudo-de-platino', nombre: 'Escudo de Platino', fue: 6, pm: 0, desc: 'Un escudo bien equilibrado y fuerte, apto tanto para el ataque como para la defensa.', como: `${TIENDA}: 2.800 platines.` },
      { id: 'puno-de-gigas', nombre: 'Puño de Gigas', fue: 7, pm: 0, desc: 'Escudo pequeño, liviano y de gran poder, diseñado exclusivamente para el ataque.', como: `${TIENDA}: 1.000 platines.` },
      { id: 'escudo-hercules', nombre: 'Escudo Hércules', fue: 9, pm: 0, desc: 'Escudo de ataque que encierra un poder extraordinario.', como: 'Gana la copa Hércules del Coliseo del Olimpo.' },
      { id: 'escudo-de-genji', nombre: 'Escudo de Genji', fue: 10, pm: 0, desc: 'Poderoso escudo, excelente tanto para el ataque como para la defensa.', como: 'Vence a Yuffie en la copa Hades.', nota: 'Fuerza +10 en Final Mix según Destiny Islands y KHWiki; la Wiki ES da +8.' },
      { id: 'defensor', nombre: 'Defensor', fue: 13, pm: 1, desc: 'Lo dejan caer a veces los Defensores. Encierra un gran poder de ataque.', como: 'Lo suelta el sincorazón Defensor (0,2 %). Salen bastantes en el Distrito 3 de Ciudad de Paso.' },
      { id: 'escudo-de-ensueno', nombre: 'Escudo de Ensueño', fue: 6, pm: 1, como: 'Te lo da Merlín cuando le lleves los siete diplomas de magia. Los dan las Setas Blancas cuando les lanzas tres veces la magia que piden.', nota: 'PM +1 en Final Mix según KHWiki y la Wiki ES (+2 en el KH original); Destiny Islands da +2.' },
      { id: 'rodela-de-guardia', nombre: 'Rodela de Guardia', fue: 15, pm: 0, fm: true, como: 'Cofre en Fin del Mundo, en los Mundos Cautivos: en una de las salas del escenario de Nunca-Jamás, justo antes de la columna de luz verde.' },
      { id: 'siete-elementos', nombre: 'Siete Elementos', fue: 4, pm: 3, fm: true, como: 'Síntesis, lista VI (se abre al sintetizar los 30 objetos de las listas I a V).', sintesis: true },
      { id: 'viva-el-rey', nombre: 'Viva el Rey', fue: 11, pm: 2, como: 'Gana la copa Hades en modo contrarreloj.', nota: 'Fuerza +11 en Final Mix según Destiny Islands y KHWiki; la Wiki ES da +10.' },
    ],
  },
];
export const FUENTES_ARMAS_LISTA = ['diLlaves', 'diBastones', 'diEscudos', 'khwikiArmas', 'wikiEsLlaves', 'wikiEsBastones', 'wikiEsEscudos', 'guiaSteamKhfm'];

// Materiales (orden del inventario del juego). `de`: sincorazón que lo suelta; `donde`: dónde salen (guía de Steam en
// castellano). `fm`: material nuevo de Final Mix; casi todos los sueltan sincorazón especiales con un patrón propio.
export const MATERIALES = [
  { id: 'guijarro-claro', nombre: 'Guijarro Claro', de: 'Sombra, Gigasombra', donde: 'Cuarto Misterioso (País de las Maravillas), Cementerio (Ciudad de Halloween)' },
  { id: 'piedra-clara', nombre: 'Piedra Clara', de: 'Osado Caballero, Gárgola', donde: 'Ciudad de Halloween' },
  { id: 'cristal-claro', nombre: 'Cristal Claro', de: 'Bola Oscura, Gigasombra', donde: 'Bastión Hueco, Ciudad de Paso, Fin del Mundo; Cuarto Misterioso (País de las Maravillas)' },
  { id: 'guijarro-bravo', nombre: 'Guijarro Bravo', de: 'Soldado, Grandullón', donde: 'Monstruo, Bastión Hueco' },
  { id: 'piedra-brava', nombre: 'Piedra Brava', de: 'Soldado Volador', donde: 'País de Nunca-Jamás' },
  { id: 'roca-brava', nombre: 'Roca Brava', fm: true, de: 'Gigasombra', donde: 'Cuarto Misterioso (País de las Maravillas)' },
  { id: 'guijarro-fuerte', nombre: 'Guijarro Fuerte', de: 'Primate X, Primate Y', donde: 'Selva Profunda' },
  { id: 'piedra-fuerte', nombre: 'Piedra Fuerte', de: 'Pirata, Pirata Volador, Barco de Guerra', donde: 'País de Nunca-Jamás' },
  { id: 'roca-fuerte', nombre: 'Roca Fuerte', fm: true, de: 'Avizor Salvaje', donde: 'Distrito 2 (Ciudad de Paso)' },
  { id: 'cristal-denso', nombre: 'Cristal Denso', de: 'Wyvern', donde: 'Bastión Hueco, Ciudad de Paso' },
  { id: 'roca-de-poder', nombre: 'Roca de Poder', fm: true, de: 'Soldado Bribón', donde: 'Gran Salón (Bastión Hueco)' },
  { id: 'guijarro-vital', nombre: 'Guijarro Vital', de: 'Réquiem Verde', donde: 'Selva Profunda' },
  { id: 'piedra-vital', nombre: 'Piedra Vital', de: 'Fantasma Farol', donde: 'Monstruo' },
  { id: 'cristal-vital', nombre: 'Cristal Vital', de: 'Defensor', donde: 'Bastión Hueco, Ciudad de Paso' },
  { id: 'guijarro-igneo', nombre: 'Guijarro Ígneo', de: 'Nocturno Rojo', donde: 'Monstruo, Bastión Hueco, Ciudad de Paso…' },
  { id: 'piedra-ignea', nombre: 'Piedra Ígnea', de: 'Bandido, Bandido Obeso', donde: 'Agrabah' },
  { id: 'roca-ignea', nombre: 'Roca Ígnea', fm: true, de: 'Quimera', donde: 'Restos de la Mansión (Ciudad de Halloween)' },
  { id: 'guijarro-frio', nombre: 'Guijarro Frío', de: 'Rapsodia Azul', donde: 'Cuarto Misterioso (País de las Maravillas)' },
  { id: 'piedra-fria', nombre: 'Piedra Fría', de: 'Neón Marino, Neón Gigante', donde: 'Atlántica' },
  { id: 'roca-fria', nombre: 'Roca Fría', fm: true, de: 'Gran Fantasma', donde: 'Estómago (Monstruo)' },
  { id: 'guijarro-rayo', nombre: 'Guijarro Rayo', de: 'Ópera Amarilla', donde: 'Cuarto Misterioso (País de las Maravillas), Ciudad de Paso…' },
  { id: 'piedra-rayo', nombre: 'Piedra Rayo', de: 'Acuatanque, Helinauta', donde: 'Atlántica' },
  { id: 'roca-luminosa', nombre: 'Roca Luminosa', fm: true, de: 'Balada Negra', donde: 'Bosque de Bambú (Selva Profunda)' },
  { id: 'cristal-puro', nombre: 'Cristal Puro', de: 'Brujo', donde: 'Bastión Hueco' },
  { id: 'roca-brillante', nombre: 'Roca Brillante', fm: true, de: 'Globo de Combate', donde: 'Cubierta del barco (País de Nunca-Jamás)' },
  { id: 'trozo-de-mitrilo', nombre: 'Trozo de Mitrilo', de: 'Araña de Tinaja, Araña de Barril, invocación Bambi', donde: 'Agrabah, País de Nunca-Jamás, Bastión Hueco, Fin del Mundo' },
  { id: 'mitrilo', nombre: 'Mitrilo', de: 'Cofres; síntesis (lista III); invocación Bambi', donde: 'Bambi solo lo da en los Mundos Cautivos de Fin del Mundo', nota: 'La guía de Steam en castellano añade a la Estrella Angelical; según la wiki inglesa, en Final Mix ya no lo suelta.' },
  { id: 'roca-de-mitrilo', nombre: 'Roca de Mitrilo', fm: true, de: 'Alacrán de Tinaja', donde: 'Puertas de Palacio (Agrabah)' },
  { id: 'gota-pletorica', nombre: 'Gota Pletórica', de: 'Seta Blanca, Trufa Rara, Hongo Negro', donde: 'Campamento (Selva Profunda), Bosque de Lotos (País de las Maravillas)' },
  { id: 'cristal-sereno', nombre: 'Cristal Sereno', fm: true, de: 'Níscalo Rosa', donde: 'Casa del Árbol (Selva Profunda)' },
  { id: 'viento-recio', nombre: 'Viento Recio', de: 'Invisible, Estrella Angelical', donde: 'Fin del Mundo' },
  { id: 'roca-recia', nombre: 'Roca Recia', fm: true, de: 'Neosombra', donde: 'Cruce de los Mundos (Fin del Mundo)' },
  { id: 'orichalcum', nombre: 'Orichalcum', de: `Cofres; ${TIENDA} (5.000 platines)`, donde: 'Repartido por los mundos', nota: 'La guía de Steam en castellano dice que lo sueltan Invisible y Bégimo; según la wiki inglesa eso era en el KH original.' },
  { id: 'materia-oscura', nombre: 'Materia Oscura', fm: true, de: 'Cofres; síntesis (lista V)', donde: 'Repartida por los mundos' },
];

// Las 6 listas de Final Mix (33 objetos). Recetas: Destiny Islands, KHWiki y la guía de Steam de síntesis; donde no
// coinciden se usa la que dan dos de las tres y se avisa en `nota`. `efecto`: inventario del juego (wiki inglesa).
// `arma`: el objeto es un arma de ARMAS (usa su id).
const N = (mat, n) => [mat, n];
export const LISTAS_SINTESIS = [
  {
    n: 'I', abre: 'Disponible al abrir la Orfebrería.',
    items: [
      { id: 'omnipocion', nombre: 'Omnipoción', tipo: 'Objeto', efecto: 'Restaura 30 VT a cada miembro del grupo.', receta: [N('guijarro-bravo', 1), N('guijarro-fuerte', 1), N('trozo-de-mitrilo', 4)], nota: 'Destiny Islands no incluye los 4 Trozos de Mitrilo; KHWiki y la guía de Steam sí.' },
      { id: 'chale', nombre: 'Chalé', tipo: 'Objeto', efecto: 'Restaura por completo los VT y los PM del grupo.', receta: [N('guijarro-claro', 1), N('guijarro-vital', 1)] },
      { id: 'brazal-de-energia', nombre: 'Brazal de Energía', tipo: 'Accesorio', efecto: 'VT +3, Defensa +1.', receta: [N('guijarro-bravo', 2), N('guijarro-vital', 1)] },
      { id: 'cadena-de-fuerza', nombre: 'Cadena de Fuerza', tipo: 'Accesorio', efecto: 'Fuerza +1.', receta: [N('guijarro-fuerte', 2), N('guijarro-claro', 1)] },
      { id: 'pulsera-magica', nombre: 'Pulsera Mágica', tipo: 'Accesorio', efecto: 'PM +1; mejora la magia y las invocaciones.', receta: [N('guijarro-igneo', 3), N('guijarro-frio', 3), N('guijarro-rayo', 3)] },
      { id: 'arete-de-exp', nombre: 'Arete de EXP', tipo: 'Accesorio', fm: true, efecto: '20 % más de experiencia.', receta: [N('roca-brava', 1), N('roca-fuerte', 1), N('roca-de-mitrilo', 1), N('cristal-sereno', 1), N('materia-oscura', 3)] },
    ],
  },
  {
    n: 'II', abre: 'Sintetiza 3 objetos distintos de la lista I.',
    items: [
      { id: 'omnieter', nombre: 'Omniéter', tipo: 'Objeto', efecto: 'Restaura 3 PM a cada miembro del grupo.', receta: [N('guijarro-igneo', 1), N('guijarro-frio', 1), N('guijarro-rayo', 1), N('mitrilo', 2)] },
      { id: 'aro-ingenioso', nombre: 'Aro Ingenioso', tipo: 'Accesorio', efecto: 'PH +3, Defensa +1.', receta: [N('guijarro-vital', 3), N('guijarro-frio', 1), N('trozo-de-mitrilo', 3)], nota: 'La guía de Steam pide 1 Guijarro Vital; Destiny Islands y KHWiki, 3.' },
      { id: 'brazal-de-angel', nombre: 'Brazal de Ángel', tipo: 'Accesorio', efecto: 'VT +6, Defensa +2.', receta: [N('guijarro-rayo', 3), N('piedra-vital', 1)] },
      { id: 'cadena-de-guerra', nombre: 'Cadena de Guerra', tipo: 'Accesorio', efecto: 'Fuerza +3, Defensa +1.', receta: [N('guijarro-igneo', 3), N('piedra-brava', 1)] },
      { id: 'pulsera-runica', nombre: 'Pulsera Rúnica', tipo: 'Accesorio', efecto: 'PM +1, Defensa +2; mejora la magia y las invocaciones.', receta: [N('piedra-ignea', 3), N('piedra-fria', 3), N('piedra-rayo', 3)] },
      { id: 'blason-moguri', nombre: 'Blasón Moguri', tipo: 'Accesorio', fm: true, efecto: 'VT +6, PM +1, PH +2; mejora la magia y las invocaciones.', receta: [N('roca-ignea', 1), N('roca-fria', 1), N('roca-luminosa', 1), N('mitrilo', 5), N('orichalcum', 3)] },
    ],
  },
  {
    n: 'III', abre: 'Sintetiza 9 objetos distintos entre las listas I y II.',
    items: [
      { id: 'ph-1', nombre: 'PH +1', tipo: 'Objeto', efecto: 'Aumenta en 1 los PH máximos. Solo se usa desde el menú.', receta: [N('piedra-ignea', 2), N('piedra-fria', 2), N('piedra-rayo', 2), N('mitrilo', 4)] },
      { id: 'anillo-oscuro', nombre: 'Anillo Oscuro', tipo: 'Accesorio', efecto: 'Defensa +2; reduce un 20 % el daño de oscuridad.', receta: [N('piedra-clara', 2), N('piedra-vital', 2)] },
      { id: 'master-earring', nombre: 'Master Earring', tipo: 'Accesorio', efecto: 'PH +4, Defensa +2.', receta: [N('guijarro-bravo', 5), N('piedra-brava', 3), N('roca-brava', 1)], nota: 'Ninguna de las fuentes da su nombre en castellano.' },
      { id: 'brazal-de-gaia', nombre: 'Brazal de Gaia', tipo: 'Accesorio', efecto: 'VT +9, Defensa +3.', receta: [N('guijarro-claro', 5), N('piedra-clara', 3), N('roca-luminosa', 1)] },
      { id: 'cadena-de-heroe', nombre: 'Cadena de Héroe', tipo: 'Accesorio', efecto: 'Fuerza +4, Defensa +2.', receta: [N('guijarro-fuerte', 5), N('piedra-fuerte', 3), N('roca-fuerte', 1)] },
      { id: 'mitrilo', nombre: 'Mitrilo', tipo: 'Material', efecto: 'Material para otras recetas.', receta: [N('trozo-de-mitrilo', 5), N('roca-de-mitrilo', 1), N('gota-pletorica', 1)] },
    ],
  },
  {
    n: 'IV', abre: 'Sintetiza 15 objetos distintos entre las listas I a III. El Moguri te da la habilidad Más Encuentros.',
    items: [
      { id: 'elixir', nombre: 'Elixir', tipo: 'Objeto', efecto: 'Restaura por completo los VT y los PM de un personaje.', receta: [N('cristal-denso', 1), N('cristal-puro', 1), N('cristal-vital', 2), N('orichalcum', 3)], nota: 'Destiny Islands pide 1 Cristal Vital; KHWiki y la guía de Steam, 2.' },
      { id: 'defensa-1', nombre: 'Defensa +1', tipo: 'Objeto', efecto: 'Aumenta en 1 la Defensa. Solo se usa desde el menú.', receta: [N('guijarro-claro', 3), N('guijarro-vital', 3), N('piedra-vital', 2), N('cristal-denso', 1), N('orichalcum', 5)], nota: 'La guía de Steam pone Roca Fuerte en lugar de Piedra Vital y Cristal Denso; Destiny Islands, KHWiki y la Wiki ES dan esta receta.' },
      { id: 'salvacorazones', nombre: 'Salvacorazones', tipo: 'Accesorio', efecto: 'VT +3, Defensa +4; reduce un 20 % el daño de oscuridad.', receta: [N('piedra-clara', 3), N('cristal-claro', 1), N('cristal-vital', 1)] },
      { id: 'tres-estrellas', nombre: 'Tres Estrellas', tipo: 'Accesorio', efecto: 'Defensa +4; reduce un 20 % el daño de fuego, hielo y rayo.', receta: [N('piedra-fuerte', 5), N('gota-pletorica', 3), N('cristal-puro', 1)] },
      { id: 'pulsera-de-poder', nombre: 'Pulsera de Poder', tipo: 'Accesorio', efecto: 'PM +2, Defensa +2; mejora mucho la magia y las invocaciones.', receta: [N('guijarro-igneo', 5), N('guijarro-frio', 5), N('guijarro-rayo', 5), N('gota-pletorica', 1), N('materia-oscura', 3)] },
      { id: 'corona-de-cristal', nombre: 'Corona de Cristal', tipo: 'Accesorio', efecto: 'VT +6, PM +1, PH +3, Fuerza +2, Defensa +2; mejora la magia y las invocaciones.', receta: [N('cristal-claro', 5), N('cristal-denso', 1), N('cristal-puro', 1), N('roca-ignea', 3), N('roca-fria', 3)] },
    ],
  },
  {
    n: 'V', abre: 'Sintetiza 21 objetos distintos entre las listas I a IV.',
    items: [
      { id: 'materia-oscura', nombre: 'Materia Oscura', tipo: 'Material', fm: true, efecto: 'Material para otras recetas.', receta: [N('guijarro-claro', 9), N('viento-recio', 1), N('mitrilo', 2)] },
      { id: 'omnielixir', nombre: 'Omnielixir', tipo: 'Objeto', efecto: 'Restaura por completo los VT y los PM del grupo.', receta: [N('piedra-clara', 5), N('cristal-claro', 3), N('viento-recio', 2), N('materia-oscura', 1)] },
      { id: 'fuerza-1', nombre: 'Fuerza +1', tipo: 'Objeto', efecto: 'Aumenta en 1 la Fuerza. Solo se usa desde el menú.', receta: [N('guijarro-bravo', 5), N('piedra-brava', 3), N('guijarro-fuerte', 5), N('piedra-fuerte', 3), N('materia-oscura', 1)] },
      { id: 'arte-cosmica', nombre: 'Arte Cósmica', tipo: 'Accesorio', efecto: 'VT +9, PM +2, PH +2; mejora la magia y las invocaciones.', receta: [N('guijarro-vital', 5), N('piedra-vital', 3), N('cristal-vital', 1), N('roca-de-mitrilo', 3)] },
      { id: 'brazal-de-exp', nombre: 'Brazal de EXP', tipo: 'Accesorio', fm: true, efecto: '30 % más de experiencia, pero Fuerza −2 y Defensa −2.', receta: [N('roca-de-poder', 1), N('roca-brillante', 1), N('roca-recia', 1), N('orichalcum', 8), N('materia-oscura', 3)] },
      { id: 'cinta', nombre: 'Cinta', tipo: 'Accesorio', efecto: 'Defensa +3; reduce un 20 % el daño de todos los elementos.', receta: [N('piedra-ignea', 5), N('piedra-fria', 5), N('piedra-rayo', 5), N('viento-recio', 1), N('cristal-sereno', 3)], nota: 'Destiny Islands pide 3 de cada Piedra; KHWiki, la Wiki ES y la guía de Steam, 5.' },
    ],
  },
  {
    n: 'VI', abre: 'Sintetiza los 30 objetos de las listas I a V.',
    items: [
      { id: 'vara-de-fantasia', nombre: 'Vara de Fantasía', tipo: 'Bastón', arma: 'vara-de-fantasia', receta: [N('roca-brava', 3), N('roca-fuerte', 3), N('roca-de-mitrilo', 3), N('roca-de-poder', 5)] },
      { id: 'siete-elementos', nombre: 'Siete Elementos', tipo: 'Escudo', arma: 'siete-elementos', receta: [N('roca-ignea', 3), N('roca-fria', 3), N('roca-luminosa', 3), N('roca-brillante', 5)] },
      { id: 'arma-artema', nombre: 'Arma Artema', tipo: 'Llave espada', arma: 'arma-artema', receta: [N('piedra-rayo', 5), N('gota-pletorica', 5), N('cristal-sereno', 3), N('roca-recia', 3), N('materia-oscura', 3)] },
    ],
  },
];

// Pasos y consejos de la sección (con fuente).
export const PASOS_SINTESIS = [
  'Termina Agrabah para aprender el Trío Verde y actívalo en la Tienda de Accesorios del Distrito 1 de Ciudad de Paso: baja una escalera que lleva a la Orfebrería de los moguris.',
  'Fabricar es gratis: solo hacen falta los materiales. Cada objeto cuenta una vez para las listas; puedes repetirlo cuanto quieras, salvo el Arma Artema, que solo se hace una vez.',
  'Equipa Buena Suerte y Más Premios en los tres personajes para que caigan más materiales, y Más Encuentros para que salgan más sincorazón.',
  'Los materiales nuevos de Final Mix (marcados con FM) los sueltan sincorazón especiales con un patrón propio que no siempre aparecen: entra y sal de la zona hasta que salgan, o sal al mapa y vuelve. Conviene hacerlo con la historia terminada.',
  'Mitrilo y Materia Oscura también se fabrican aquí (listas III y V), y el Orichalcum se compra por 5.000 platines en la tienda de Juanito, Jaimito y Jorgito.',
];
export const FUENTES_SINTESIS_KHFM = ['diSintesis', 'khwikiSintesis', 'fandomEnSintesis', 'fandomEnAccesorios', 'guiaSteamSintesis', 'guiaSteamKhfm', 'wikiEsAccesorios'];
