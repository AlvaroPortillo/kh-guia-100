// Re Mind (DLC de KH III): episodios, combates de datos, Yozora y méritos de los códigos. A mano.
// Fuente: KHWiki («Real Organization XIII's Recreated Data», «Premium Menu» con su estrategia, «Kingdom Hearts III Re
// Mind»). Nombres de jefes y personajes: Wiki ES por nombre japonés; sin fuente, inglés entre «». Códigos y retos:
// inglés entre «» (no hay nombre en castellano con fuente) con lo que piden en castellano.
// Ids: kh3.datos.<id> (combate de datos ganado), kh3.merito.<id> (reto PRINCIPIANTE), kh3.jefe-exp.<id> (jefe
// vencido con códigos EXPERTO).

export const PASOS_REMIND = [
  { t: 'Re Mind', logro: 'ACH_48', texto: 'Una historia extra que transcurre durante el clímax del juego. Al terminarla se abre el episodio Limitcut.' },
  { t: 'Episodio Limitcut', logro: 'ACH_49', texto: 'En el ordenador de la casa de Merlín, en Vergel Radiante, se eligen los trece combates contra los datos de la Organización XIII real. Al principio hay once: el Maestro Xehanort y Xion se abren al vencer a los demás. Son los combates más difíciles del juego. Vencer a uno da «Comenzar análisis» y a los trece, «Análisis completado».' },
  { t: 'Episodio secreto', logro: 'ACH_51', texto: 'Se abre al vencer a los trece datos: el combate contra Yozora. Al derrotarlo se abren los dos menús de códigos (PRINCIPIANTE y EXPERTO) en esa partida.' },
];

// Datos de la Organización XIII real: premio de cada combate (KHWiki). Los dos últimos se abren al vencer a los once.
export const DATOS_ORG = [
  { id: 'ansem', n: 'Ansem, el Buscador de la Oscuridad', premio: 'Defensa ↑' },
  { id: 'xemnas', n: 'Xemnas', premio: '«Power Weight»' },
  { id: 'xigbar', n: 'Xigbar', premio: 'Impulso Hábil' },
  { id: 'luxord', n: 'Luxord', premio: '«Magic Weight»' },
  { id: 'larxene', n: 'Larxene', premio: 'Magia ↑' },
  { id: 'marluxia', n: 'Marluxia', premio: '«Magic Weight»' },
  { id: 'saix', n: 'Saïx', premio: '«Power Weight»' },
  { id: 'terra-xehanort', n: 'Terra-Xehanort', premio: 'Fuerza ↑' },
  { id: 'dark-riku', n: '«Dark Riku»', premio: '«Power Weight»' },
  { id: 'vanitas', n: 'Vanitas', premio: 'Impulso Hábil' },
  { id: 'young-xehanort', n: '«Young Xehanort»', premio: '«Magic Weight»' },
  { id: 'xion', n: 'Xion', premio: '«Breakthrough»', tarde: true },
  { id: 'maestro-xehanort', n: 'Maestro Xehanort', premio: '«Master Belt»', tarde: true },
];

// Retos de los códigos PRINCIPIANTE (logro «Versátil»): qué piden y cómo (estrategia de KHWiki).
export const MERITOS_PRIN = [
  { id: 'aereo', en: 'Aerial Challenge', pide: 'Derrota a 13 enemigos en el aire sin tocar el suelo (no valen magia, vínculos, ataques de equipo ni atracciones).',
    como: 'Activa «Deadly Blow» y ve a un portal de batalla con muchos enemigos voladores, como el Portal de Batalla 1 del Reino de los Dioses (El Olimpo). Sube con «Airstep» a un Pironúcleo o Hidronúcleo y derriba todos los que puedas. Con el Arma Artema, usa Vuelo Doble y lanza su shotlock antes de tocar el suelo.' },
  { id: 'rage', en: 'Rage Form Challenge', pide: 'Derrota a 20 Sombras o Neosombras de una vez con la forma «Rage Form».',
    como: 'Activa el código EXPERTO «Zero Defense» y los PRINCIPIANTE «Deadly Blow» y «Overflow», pon a Donald y Goofy en «no intervenir» y entra en el Portal de Batalla 0 del laberinto de la Necrópolis. Deja que te golpeen, entra en «Rage Form» y acaba con todos los que puedas.' },
  { id: 'vinculo', en: 'Link Challenge', pide: 'Derrota a 77 enemigos de una vez con un vínculo.',
    como: 'En Monstruópolis, activa «Deadly Blow» y «Everlink». Desde el punto de guardado «Basement», cruza la puerta blanca y vuelve a la puerta marrón de la izquierda; al entrar, date la vuelta y empieza el minijuego del Flan de Plátano. Invoca a Simba y pasa por encima de los flanes pequeños, saltando para esquivar al grande.' },
  { id: 'hielo', en: 'Icebreaker Challenge', pide: 'Congela y rompe a 30 enemigos en un mismo combate.',
    como: 'Activa el código EXPERTO «Default Status» (para no hacer demasiado daño) y «MP Regen», pon a Donald y Goofy en «no intervenir», entra en el Portal de Batalla 0 y lanza Hielo++ una y otra vez. Si aún mata, usa Hielo normal desde los atajos.' },
  { id: 'gigas', en: 'Gigas Challenge', pide: 'Derrota a 5 Gigas de juguete de una vez con una atracción (Caja de juguetes).',
    como: 'Activa «Deadly Blow» y «Attraction Pass», pon a Buzz, Woody, Donald y Goofy en «no intervenir» y ve a la planta 1 de Galaxy Toys. Pelea hasta que salga el icono de atracción, sube con «Airstep» a ese enemigo para cogerla y úsala contra los Gigas cercanos.' },
  { id: 'cielo', en: 'Sky Walk Challenge', pide: 'Ve de la torre del bosque al Reino de Corona sin caminar por el suelo (Reino de Corona).',
    como: 'Equipa Planeador, Salto de Altura, Vuelo Doble y «Air Slide», más Rebote y «Superjump». Sube al tejado de la torre de Rapunzel (avisa de que empieza el reto) y planea hacia la salida de la cueva. Correr por paredes no cuenta como caminar. Cerca del campamento, planea contra las rocas de la derecha para ganar altura. Lo más difícil es el tramo de «Wetlands»: sube por la pared del fondo, posa con cuidado al inicio del camino de tablas, sube con Vuelo Doble a la plataforma del oeste, y de ahí al cartel morado con Rebote y «Superjump». Luego, Vuelo Doble y planeo hasta el puente. Truco: guarda la forma «Ultimate Form» en espera y actívala si vas a tocar el suelo; flotar no cuenta.' },
  { id: 'schwarz', en: 'Schwarzgeist Challenge', pide: 'Vence a Schwarzgeist (Misty Stream) con rango A.',
    como: 'Necesitas una nave de velocidad 200 (la «Endymion» o la «Golden Highwind»). Destruye primero los cañones de las patas. Cuando lance los láseres naranjas desde arriba no le ataques: céntrate en los escudos pequeños, que reaparecen sin fin y dan puntos; basta con alargar el combate hasta el millón de puntos. Usa el «Repair Kit» para curarte.' },
  { id: 'bolos', en: 'Bowling Challenge', pide: 'Derrota a 10 enemigos de una vez con el ataque de equipo de Mike («Scream Strike», Monstruópolis).',
    como: 'Equipa a Mike con un accesorio que le dé PH para la habilidad «Team Effort» (el ataque sale al empezar cada combate). Activa «Deadly Blow», pon a todos en «no intervenir» y entra en una sala con muchos enemigos en el suelo, como la de las cajas electrificadas de la fábrica. Lanza el ataque contra el grupo.' },
  { id: 'supervivencia', en: 'Survival Challenge', pide: 'Supera un portal de batalla de dificultad ★★ con solo el código «Survival» activado.',
    como: 'Activa únicamente «Survival» y entra en el portal de batalla de «Apex» del Olimpo, justo detrás de Zeus.' },
];

// Códigos EXPERTO y sus estrellas (cada estrella multiplica ×1,25 los puntos de mérito del jefe; con todos, ×50).
export const CODIGOS_EXP = [
  ['Default Status', 5, 'Las estadísticas del equipo vuelven a las iniciales, sea cual sea el nivel (lo ganado con objetos se mantiene).'],
  ['Zero Defense', 4, 'La defensa del equipo pasa a 0 (cuenta la del equipo).'],
  ['HP Slip', 3, 'En combate, la vida baja sola hasta quedar en peligro.'],
  ['MP Slip', 4, 'En combate, los PM bajan solos y la recarga dura el doble.'],
  ['No Shotlocks', 2, 'No se pueden usar shotlocks.'],
  ['No Cure', 5, 'Nadie puede usar Cura.'],
  ['No Battle Items', 3, 'No se pueden usar objetos en combate.'],
  ['No Links', 2, 'No se pueden usar vínculos.'],
  ['No Formchanges/Grand Magic', 4, 'Sin cambios de forma ni magia mejorada.'],
  ['No Attractions', 1, 'No salen atracciones (salvo en combates especiales).'],
  ['No Team Attacks', 1, 'No salen ataques de equipo (salvo en combates especiales).'],
  ['No Kupo Coins', 2, 'Las «Kupo Coins» no hacen efecto.'],
  ['Ability Limit', 4, 'Sora solo puede equipar 30 habilidades.'],
];

// Jefes que dan puntos de mérito (puntos base; con todos los códigos, ×50 = máximo).
export const JEFES_MERITO = [
  { id: 'titan-roca', mundo: 'El Olimpo', n: 'Titán de Roca', base: 100 },
  { id: 'titanes', mundo: 'El Olimpo', n: '«Ice Titan», Titán de Lava y Titán de Viento', base: 200 },
  { id: 'demon-tide-vc', mundo: 'Villa Crepúsculo', n: '«Demon Tide»', base: 100 },
  { id: 'amber', mundo: 'Caja de juguetes', n: 'Amber Angélica', base: 100 },
  { id: 'rey-juguetes', mundo: 'Caja de juguetes', n: 'Rey de los Juguetes', base: 200 },
  { id: 'auriga', mundo: 'Reino de Corona', n: 'Auriga Desbocado', base: 100 },
  { id: 'guardiana', mundo: 'Reino de Corona', n: 'Madre Enloquecida', base: 200 },
  { id: 'masa', mundo: 'Monstruópolis', n: 'Masa de Terror', base: 200 },
  { id: 'merengue', mundo: 'Arendelle', n: 'Merengue', base: 100 },
  { id: 'skoll', mundo: 'Arendelle', n: 'Sköll', base: 200 },
  { id: 'angler', mundo: 'El Caribe', n: 'Rape Eléctrico', base: 100 },
  { id: 'davy', mundo: 'El Caribe', n: 'Davy Jones', base: 200 },
  { id: 'cuboscuros', mundo: 'San Fransokyo', n: 'Cuboscuros', base: 100 },
  { id: 'baymax', mundo: 'San Fransokyo', n: 'Baymax Oscuro', base: 200 },
  { id: 'demon-tide-ne', mundo: 'Necrópolis de Llaves Espada', n: '«Demon Tide»', base: 200 },
  { id: 'trio', mundo: 'Necrópolis de Llaves Espada', n: '«Young Xehanort», Ansem y Xemnas', base: 200 },
  { id: 'infierno', mundo: 'Necrópolis de Llaves Espada', n: 'Infierno Oscuro', base: 400 },
  { id: 'xehanort-armadura', mundo: 'Scala ad Caelum', n: '«Armored Xehanort»', base: 200 },
  { id: 'maestro', mundo: 'Scala ad Caelum', n: 'Maestro Xehanort', base: 200 },
  { id: 'xehanort-armadura-rm', mundo: 'Re Mind', n: '«Armored Xehanort»', base: 200 },
  { id: 'datos', mundo: 'Episodio Limitcut', n: 'Cada uno de los 13 datos de la Organización', base: 500, por: 13 },
  { id: 'yozora', mundo: 'Episodio secreto', n: 'Yozora', base: 600 },
];
// Rangos de mérito (KHWiki); el A es el que pide «Temerario».
export const RANGOS_MERITO = [['M', 11250], ['L', 30000], ['K', 50000], ['J', 65000], ['I', 90000], ['H', 115000], ['G', 145000],
  ['F', 169000], ['E', 225000], ['D', 250000], ['C', 300000], ['B', 320000], ['A', 364125]];
export const NOTA_RANGO_B = 'KHWiki marca como dudosa la cifra del rango B.';

export const CONSEJOS_EXP = [
  'Si una partida tiene activado algún código de combate PRINCIPIANTE, no se ganan méritos EXPERTO.',
  'Lo más cómodo: una partida nueva+ en «Beginner» (más vida y PM), llevando el Arma Artema y la llave espada Gran Chef de la partida terminada, y vencer a todos los jefes del juego base y al «Armored Xehanort» de Re Mind con todos los códigos: son unos 175 000 puntos antes de los combates de datos.',
  'Los códigos solo tienen que estar activos contra los jefes que dan puntos; contra el resto puedes quitarlos y usar vínculos, cambios de forma y shotlocks.',
  'Sin Cura ni objetos, cúrate con «Wizard\'s Ruse» (la llevan Gran Chef, el Anillo Sabio y la Medalla Estrella: al lanzar magia puede devolverte vida) y con el Broche del Bosque («HP Walker»). La Chapa de Sonrisas de Monstruópolis ayuda a recargar PM.',
  'Usa los Fuerza ↑ y Defensa ↑ en cuanto los tengas: lo ganado con objetos se mantiene con «Default Status». Come siempre: la tienda Moguri vende comida que sube mucho las estadísticas.',
];
export const FUENTES_REMIND = ['khwRemind', 'khwDatos', 'khwPremium'];
