// Arma Artema de KH III: requisito, receta, los 7 Orichalcum+, dónde caen los cristales y mejoras.
// Nombres de materiales: Wiki ES (se identifican por sus caídas, que coinciden con KHWiki). Entre paréntesis, el inglés.
export const IMG_ARTEMA = 'assets/img/kh3/artema/';

export const REQUISITO_ARTEMA = 'La receta se abre al registrar 58 materiales de síntesis distintos (con ella se abren también «Save the Queen+», de Donald, y Viva el Rey+, de Goofy). Se fabrica una sola vez, en la tienda Moguri.';

export const RECETA_ARTEMA = [
  { id: 'oricalco-plus', nombre: 'Orichalcum+', en: 'Orichalcum+', n: 7 },
  { id: 'poder-cristal', nombre: 'Cristal de Poder', en: 'Wellspring Crystal', n: 2 },
  { id: 'claro-cristal', nombre: 'Cristal Claro', en: 'Lucid Crystal', n: 2 },
  { id: 'fuerza-cristal', nombre: 'Cristal de Fuerza', en: 'Pulsing Crystal', n: 2 },
];
export const NOTA_RECETA = 'La página del Arma Artema de la Wiki ES llama «Cristal puro» al Cristal Claro (Lucid Crystal); la del material y sus caídas lo llaman Cristal Claro.';

// Ids: kh3.oricalco.<id>. `cuando`: a partir de qué momento se puede conseguir, si la fuente lo dice.
export const ORICALCOS = [
  { id: 'portafortuna', titulo: 'Fotografiar 80 portafortuna', donde: 'Gumífono, en cualquier mundo',
    como: 'Es el premio por fotografiar 80 portafortuna (hay 90). Los del Olimpo solo se pueden fotografiar al volver tras la Ola Infernal de Villa Crepúsculo.',
    fuentes: ['khwOricalco', 'khwPortafortuna'] },
  { id: 'flanes', titulo: 'Los Siete Flantásticos', donde: 'Siete mundos', flanes: true,
    como: 'Llega la puntuación pedida en los minijuegos de los siete flanes (los convocas con el comando «Boinnng!»). Al lograrlo en los siete te dan el Orichalcum+.',
    fuentes: ['khwOricalco', 'khwFlanes', 'wesFlanes'] },
  { id: 'deslizamiento', titulo: 'Los 10 tesoros del Deslizamiento alpino', donde: 'Arendelle',
    como: 'Al repetir el minijuego (hablando con Elsa o con Goofy), recoge los 10 tesoros del recorrido. Te dan el Orichalcum+ y la habilidad Imán Maestro.',
    fuentes: ['khwDeslizamiento', 'wesIman'] },
  { id: 'omega', titulo: 'Vencer a Omega Machina', donde: 'Nave gumi, zona «The Eclipse»', img: 'omega-machina',
    como: 'Es el combate F de la zona («Clash with the Omega Machina»), que se abre al superar los combates A a E. El Orichalcum+ es el premio de la primera victoria.',
    fuentes: ['khwEclipse'] },
  { id: 'exile', titulo: 'Cofre de «Exile Island»', donde: 'El Caribe',
    como: 'En un cofre de «Exile Island», una isla pequeña y redonda de las aguas del sur. Se llega navegando con el Leviatán.',
    fuentes: ['khwOricalco', 'khwCaribe'] },
  { id: 'mundo-final', titulo: 'Cofre de El Mundo Final', donde: 'El Mundo Final',
    como: 'En un cofre de El Mundo Final.',
    fuentes: ['khwOricalco'] },
  { id: 'postal', titulo: 'Postal premiada («Prize Postcard»)', donde: 'Villa Crepúsculo, tienda Moguri',
    como: 'Cada vez que compras algo en la tienda Moguri hay una probabilidad de recibir una postal premiada (no depende de lo que gastes). Se cambian por un objeto al azar en el buzón junto a la tienda Moguri de Villa Crepúsculo; el Orichalcum+ solo puede salir una vez. Es el más lento: compra a menudo cosas baratas y canjea las postales.',
    fuentes: ['khwPostal', 'khwOricalco'] },
];

// Puntuación del minijuego de cada flan para el Orichalcum+ (la alta). Zonas: Wiki ES.
export const FLANES = [
  { id: 'cereza', nombre: 'Flan de Cereza', mundo: 'El Olimpo', zona: 'Tebas: Mirador', pts: '20 000' },
  { id: 'fresa', nombre: 'Flan de Fresa', mundo: 'Caja de juguetes', zona: 'Galaxy Toys, zona de descanso', pts: '17 000' },
  { id: 'naranja', nombre: 'Flan de Naranja', mundo: 'Reino de Corona', zona: 'El bosque: Colinas', pts: '23 000' },
  { id: 'platano', nombre: 'Flan de Plátano', mundo: 'Monstruópolis', zona: 'Almacén de puertas: Nivel superior', pts: '20 000' },
  { id: 'uva', nombre: 'Flan de Uva', mundo: 'Arendelle', zona: 'Montaña del norte: Cordillera', pts: '20 000' },
  { id: 'melon', nombre: 'Flan de Melón', mundo: 'San Fransokyo', zona: 'Distrito Sur (de noche)', pts: '15 000' },
  { id: 'sandia', nombre: 'Flan de Sandía', mundo: 'El Caribe', zona: 'Port Royal: Fuerte', pts: '28 000', nota: 'KHWiki pide más de 28 000 y la Wiki ES, más de 29 000.' },
];

// Cristales: quién los suelta (KHWiki; nombres de enemigos de la Wiki ES) y receta alternativa.
export const CRISTALES_ARTEMA = [
  {
    id: 'poder-cristal', nombre: 'Cristal de Poder', en: 'Wellspring Crystal', falta: 2,
    caidas: [
      { enemigo: 'Gran Soldado', img: 'gran-soldado', pct: 12, donde: 'San Fransokyo; muchos juntos en la «Battlegate 12», el mejor sitio para farmear' },
      { enemigo: 'Ancla Pirata', img: 'ancla-pirata', pct: 8, donde: 'El Caribe («Battlegate 10»)' },
      { enemigo: 'Gran Yelmo', img: 'gran-yelmo', pct: 4, donde: 'Arendelle, San Fransokyo («Battlegate 11») y Scala ad Caelum' },
    ],
    extra: 'Hay un cofre con uno en el «Breezy Quarter» de Scala ad Caelum (Re Mind). No tiene receta: haz farmeo de sobra, porque cada Cristal Claro o de Fuerza que fabriques gasta uno.',
  },
  {
    id: 'claro-cristal', nombre: 'Cristal Claro', en: 'Lucid Crystal', falta: 2,
    caidas: [{ enemigo: 'Ancla Pirata', img: 'ancla-pirata', pct: 8, donde: 'El Caribe («Battlegate 10»)' }],
    receta: { abre: 'Se abre al registrar 32 materiales distintos.', mats: '1 Cristal de Poder, 2 Gemas Claras, 3 Rocas Claras y 5 Guijarros Claros' },
  },
  {
    id: 'fuerza-cristal', nombre: 'Cristal de Fuerza', en: 'Pulsing Crystal', falta: 2,
    caidas: [{ enemigo: 'Gran Yelmo', img: 'gran-yelmo', pct: 4, donde: 'Arendelle, San Fransokyo («Battlegate 11») y Scala ad Caelum' }],
    receta: { abre: 'Se abre al registrar 30 materiales distintos.', mats: '1 Cristal de Poder, 2 Gemas de Fuerza, 3 Rocas de Fuerza y 5 Guijarros de Fuerza' },
  },
];

// Mejoras del nivel 1 al 10 en la tienda Moguri (KHWiki). «Voraz» = Hungry, «Poder» = Wellspring.
export const MEJORAS_ARTEMA = [
  { nv: 1, fue: 9, mag: 4, mats: 'Fluorita ×1 · Guijarro de Poder ×3' },
  { nv: 2, fue: 9, mag: 5, mats: 'Fluorita ×1 · Guijarro de Poder ×4' },
  { nv: 3, fue: 10, mag: 6, mats: 'Fluorita ×1 · Roca de Poder ×1' },
  { nv: 4, fue: 10, mag: 7, mats: 'Damasco ×1 · Roca de Poder ×2 · Roca Voraz ×1' },
  { nv: 5, fue: 11, mag: 8, mats: 'Damasco ×1 · Roca de Poder ×3 · Roca Voraz ×2' },
  { nv: 6, fue: 11, mag: 9, mats: 'Damasco ×1 · Gema de Poder ×1' },
  { nv: 7, fue: 12, mag: 10, mats: 'Adamantita ×1 · Gema de Poder ×2 · Gema Voraz ×1' },
  { nv: 8, fue: 12, mag: 11, mats: 'Adamantita ×1 · Gema de Poder ×3 · Gema Voraz ×2' },
  { nv: 9, fue: 13, mag: 12, mats: 'Adamantita ×1 · Cristal de Poder ×1' },
  { nv: 10, fue: 13, mag: 13, mats: 'Electrum ×1 · Cristal de Poder ×2 · Cristal Voraz ×1' },
];
export const NOTA_MEJORAS = 'Fluorita, Damasco, Adamantita y Electrum salen en cofres y al romper meteoritos azules con la nave gumi: Fluorita 2,5 % en «Starlight Way»; Damasco 2 % en «Misty Stream»; Adamantita 1,5 % y Electrum 1 % en «The Eclipse». Los materiales Voraces (Hungry) son los nombres de la Wiki ES sin confirmar en el juego.';

export const FICHA_ARTEMA = {
  base: 'Nivel 0: Fuerza +8, Magia +3. Nivel 10: Fuerza +13, Magia +13. Longitud 165.',
  habilidades: 'Extracombo, Extracombo Aéreo y Extrasituación',
  forma: 'Forma Suprema: solo con el Arma Artema. Sora se teletransporta y ataca con varias espadas de gran alcance; incluye «Second Chance» y «Withstand Combo» y no se le puede aturdir. Su tiro certero es «Infinity Circle», que también activa la Forma Suprema.',
};
export const FUENTES_ARTEMA = ['khwArtema', 'wesArtema', 'khwSintesis', 'khwOricalco', 'khwPoder', 'khwClaro', 'khwFuerza', 'wesPoder', 'wesClaro', 'wesFuerza',
  'khwGranSoldado', 'khwGranYelmo', 'khwAncla', 'khwPremium', 'wesFluorita', 'wesFormaSuprema', 'khwInfinity'];
