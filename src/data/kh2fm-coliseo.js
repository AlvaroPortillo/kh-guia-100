// Coliseo del Olimpo de KH II Final Mix: las 4 copas del Infiernódromo y las 4 copas Paradoja. A mano.
// Rondas, nivel recomendado, premios de Final Mix, reglas y desbloqueo: KHWiki (plantilla «Coliseum» de cada copa).
// Nombres de copas y consejos: guía de logros en castellano de Steam; premios y enemigos, Wiki ES (página de cada copa).
// Estrategias por ronda: KHWiki, con los nombres de enemigos de la Wiki ES.
// Sin ids nuevos: cada copa usa la marca de su logro y las de su entrada del diario (sección Minijuegos y misiones).
export const FUENTES_COLISEO_KH2FM = {
  khwikiCopasKh2: { nombre: 'KHWiki — Pain and Panic Cup, Cerberus Cup, Titan Cup, Goddess of Fate Cup y Hades Paradox Cup', url: 'https://www.khwiki.com/Hades_Paradox_Cup' },
  wikiEsCopasKh2: { nombre: 'Wiki ES — Infiernódromo (Copa Dolor y Pánico, Copa Cerbero, Copa Diosa del Destino)', url: 'https://kingdomhearts.fandom.com/es/wiki/Infiern%C3%B3dromo' },
};

export const IMG_COLISEO_KH2 = 'assets/img/kh2fm/coliseo/copa-';

export const INTRO_COLISEO_KH2FM = 'Las copas se abren conforme avanzas en la historia, subes las fusiones e invocaciones y ganas las anteriores. Las cuatro normales se juegan desde la entrada del Infiernódromo y las Paradoja, desde los aposentos de Hades. No dan experiencia. Cada copa da su logro y, además, cuenta dos veces en el diario: «Jugado» (Minijuegos) y la puntuación que pide (Misiones). Las tres marcas son las mismas que en la sección Minijuegos y misiones.';

// `mini`: id de su entrada en kh2fm-minijuegos.js. `nivel`: el recomendado en Final Mix. `rondas`: consejos por ronda (KHWiki).
export const COPAS_KH2FM = [
  {
    id: 'dolor-panico', nombre: 'Copa Dolor y Pánico', img: 'dolor-panico', logro: 'ACH_112', mini: 'inf-dolor-panico', combates: 10, nivel: 25,
    abre: 'Completa Castillo Disney (KHWiki); la Wiki ES dice al completar Río Eterno, que se visita desde él.',
    reglas: 'Con Donald y Goofy. No hay barra de fusión, pero los límites gastan menos PM.',
    premios: ['Cinto Protector', 'Roca serena'],
    rival: 'Leon y Yuffie (combate 10)',
    rondas: [
      ['4', 'Usa magia contra los Coches Locos para no ponerte a su alcance; si te embisten, bloquea y contraataca.'],
      ['8', 'Basta con aguantar 60 segundos, pero es la mejor ocasión para sumar puntos: Magneto y Electro sobre los Cohetes Repentinos.'],
      ['10', 'Aquí no se suman puntos. Ve primero a por Leon, que pega más fuerte, y luego a por Yuffie. Aprovecha que los límites salen baratos.'],
    ],
    nota: 'Premios de Final Mix según KHWiki: «Protect Belt» y Roca serena. La Wiki ES da solo el Cinto Protector (aunque su ficha enlaza con «Gaia Belt»).',
  },
  {
    id: 'cerbero', nombre: 'Copa Cerbero', img: 'cerbero', logro: 'ACH_113', mini: 'inf-cerbero', combates: 10, nivel: 30,
    abre: 'Completa por primera vez Agrabah, Ciudad de Halloween y Tierras del Reino.',
    reglas: 'Sora solo. La barra de fusión se llena más rápido y puede fusionarse sin aliados.',
    premios: ['Dragón Naciente', 'Cristal sereno'],
    rival: 'Cerbero (combate 10)',
    rondas: [
      ['1', 'Acaba primero con las Ilusiones Fantasmales; a los Piratas Voladores, con sus comandos de reacción.'],
      ['4', 'Fija a Huesos Vivientes y usa el comando de reacción de las Rocas Plateadas para tumbarlo rápido.'],
      ['5', 'Primero el Chamán. Los Cubos Helados son débiles a Piro y los Globos Fieros, a Hielo.'],
      ['7', 'El Soldado de Plomo aguanta mucho y ataca de lejos: rompe antes los cañones y vigila el tiempo. La Forma Sabia ayuda.'],
      ['8–10', 'Se juegan a oscuras. En el 9, primero los Blues Esmeralda (su tornado hace mucho daño).'],
      ['10', 'Ataca las cabezas de los lados entre mordisco y mordisco. Cuando ataque con las tres a la vez, salta en medio para encadenar comandos de reacción. Formas Sabia y Maestra.'],
    ],
  },
  {
    id: 'titan', nombre: 'Copa Titán', img: 'titan', logro: 'ACH_114', mini: 'inf-titan', combates: 10, nivel: 45,
    abre: 'Completa la segunda visita a los demás mundos tras la batalla de los 1000 sincorazón.',
    reglas: 'Sora solo. Puede invocar sin aliados.',
    premios: ['Escudo de Genji', '«Skillful Ring»'],
    rival: 'Hércules (combate 10)',
    rondas: [
      ['10', 'Ataca a Hércules sin parar hasta que eche el brazo atrás (puñetazo) o brille dorado (ataque fuerte): entonces aléjate.'],
    ],
    nota: '«Skillful Ring» no tiene nombre en castellano con fuente.',
  },
  {
    id: 'diosa', nombre: 'Copa Diosa del Destino', img: 'diosa', logro: 'ACH_115', mini: 'inf-diosa', combates: 10, nivel: 55,
    abre: 'Gana las tres primeras copas y vence a Xemnas por primera vez.',
    reglas: 'Cambian en cada combate.',
    premios: ['Emblema Fatal', 'Orichalcum+'],
    rival: 'Hades (combate 10)',
    rondas: [
      ['2', 'Un minuto para acabar con todos.'],
      ['3 y 7', 'Empiezas con 50 puntos que bajan al recibir golpes; si llegan a cero, pierdes la copa. En el 7, magia contra los Centauros Fatales.'],
      ['6', '30 segundos para vencer al Bandido Obeso y al Grandullón: mejor magia que golpes. Si no, Forma Final.'],
      ['8', 'Solo hay que aguantar hasta que acabe el tiempo.'],
      ['9', 'A oscuras.'],
      ['10', 'Olvídate de los Martillos Furiosos y ataca solo a Hades.'],
    ],
    nota: 'Su Orichalcum+ es uno de los 7 del Arma Artema (sección Orfebrería).',
  },
  {
    id: 'par-dolor-panico', nombre: 'Copa Paradoja de Dolor y Pánico', img: 'dolor-panico', logro: 'ACH_116', mini: 'par-dolor-panico', combates: 10, nivel: 60, paradoja: true,
    abre: 'Gana la Copa Diosa del Destino.',
    reglas: 'Las de la Copa Dolor y Pánico, con enemigos más fuertes.',
    rival: 'Leon y Yuffie (combate 10)',
  },
  {
    id: 'par-cerbero', nombre: 'Copa Paradoja de Cerbero', img: 'cerbero', logro: 'ACH_117', mini: 'par-cerbero', combates: 10, nivel: 70, paradoja: true,
    abre: 'Sube a nivel 5 todas las formas salvo la Forma Final y abre la Copa Paradoja de Dolor y Pánico.',
    reglas: 'Las de la Copa Cerbero, con enemigos más fuertes.',
    rival: 'Cerbero (combate 10)',
  },
  {
    id: 'par-titan', nombre: 'Copa Paradoja de Titán', img: 'titan', logro: 'ACH_118', mini: 'par-titan', combates: 10, nivel: 80, paradoja: true,
    abre: 'Sube las invocaciones a nivel 5 y abre la Copa Paradoja de Cerbero.',
    reglas: 'Las de la Copa Titán. Toda la copa se juega con 500 puntos de daño que no se recuperan: evita los golpes. Del combate 5 al 10 caen rocas del techo (hasta 12 puntos cada una).',
    rival: 'Hércules (combate 10)',
  },
  {
    id: 'par-hades', nombre: 'Copa Paradoja de Hades', img: 'hades', logro: 'ACH_119', mini: 'par-hades', combates: 50, nivel: 99, paradoja: true,
    abre: 'Sube todas las formas y las invocaciones a nivel 7 y completa la segunda visita a Espacio Paranoico.',
    reglas: 'Las reglas cambian cada diez combates.',
    premios: ['Trofeo de la Copa Hades'],
    rival: 'Hades (combate 50)',
    rondas: [
      ['1–10', 'Sin restricciones: formas, invocaciones y aliados. El 6, a oscuras. El límite de Peter Pan suma muchos puntos (no en los combates 5 y 10).'],
      ['11–20', 'Reglas de la Copa Titán: Sora solo, sin formas, con invocaciones y 500 puntos de daño.'],
      ['21–30', 'Reglas de la Copa Dolor y Pánico: sin barra de fusión, con aliados e invocaciones y límites baratos. Usa mucho el límite Trío. El 24 son tres Vendedores Corpulentos: respira antes de Cloud y Tifa.'],
      ['31–40', 'Reglas de la Copa Cerbero, con diez minutos de tiempo: la Forma Final ayuda. En el 35, Magneto y Electro contra los Cohetes Repentinos. En el 38, el Hechicero es inmune a la magia elemental.'],
      ['41–50', 'Sin invocaciones ni aliados (salvo Hércules en el último) y solo la Forma Suma: llave espada, magia y Trío. En el 44, Reflejo nada más empezar. El 45 repite la batalla de los 1000 sincorazón (un minuto). El 47 es el último que suma puntos.'],
    ],
  },
];
