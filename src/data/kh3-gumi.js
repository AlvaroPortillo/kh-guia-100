// Nave gumi de KH III: constelaciones, tesoros de los combates y Schwarzgeist. A mano.
// Fuentes: KHWiki (páginas de cada ruta: constelaciones, tabla «Treasures», combates; «Schwarzgeist») y PowerPyx
// (cómo encontrar cada constelación). Nombres de rutas, combates, naves y piezas: inglés entre «» (sin fuente en
// castellano); las constelaciones son monstruos de Final Fantasy y también van en inglés.
// Ids: kh3.constelacion.<id>, kh3.gumi.tesoro.<ruta>.<n>.

// tesoros: [nombre, combate, rango] (rango '' = al ganarlo; 'A'/'C' = con ese rango o mejor). Pieza «/G» = decorativa.
export const RUTAS_GUMI = [
  {
    id: 'starlight', nombre: '«Starlight Way»', mundos: 'El Olimpo, Villa Crepúsculo, Caja de juguetes y Reino de Corona',
    constelaciones: [
      { id: 'moogle', en: 'Moogle', donde: 'Arriba a la izquierda, entre Villa Crepúsculo y la Caja de juguetes: mirando a la Caja de juguetes, a su derecha.' },
      { id: 'bomb', en: 'Bomb', donde: 'Junto al Olimpo: mirándolo, a su derecha.' },
      { id: 'cactuar', en: 'Cactuar', donde: 'Abajo a la derecha, cerca del Reino de Corona: mirándolo, a su derecha.' },
    ],
    tesoros: [
      ['Flat Helm/G', 'Clash with the Astrowarrior', ''], ['Mini-Helm/G', 'Clash with the Astrowarrior o Clash with the Flower Guardian', 'C'],
      ['Darkness/G', 'Clash with the Comet Crawlers', 'A'], ['Ghostabocky', 'Countdown 1', 'A'], ['Supercar', 'Countdown 2', 'A'],
      ['Craft Airplane', 'Countdown 3', 'A'], ['Plush Sora', 'Countdown 4', 'A'], ['Rhino Beetle', 'Speed Skirmish 1', 'A'],
      ['Red Nocturne', 'Speed Skirmish 2', 'A'], ['Question Mark', 'Speed Skirmish 3', 'A'],
    ],
    nota: '«Clash with the Comet Crawlers» pide una nave con velocidad 100 o más.',
  },
  {
    id: 'misty', nombre: '«Misty Stream»', mundos: 'Monstruópolis, Arendelle, El Caribe y San Fransokyo',
    constelaciones: [
      { id: 'imp', en: 'Imp', donde: 'Arriba a la izquierda, cerca de Monstruópolis. PowerPyx: aparece en el punto «MST-01» y vuela hacia la derecha.' },
      { id: 'tonberry', en: 'Tonberry', donde: 'Arriba a la derecha, cerca de Arendelle. PowerPyx: aparece en «MST-01», gira 180° y vuela en esa dirección.' },
      { id: 'endymion', en: 'Endymion', donde: 'Abajo en el centro, entre San Fransokyo y El Caribe: mirando a El Caribe, a su derecha. Fotografiarla da la nave «Endymion», que llega a velocidad 200.' },
    ],
    tesoros: [
      ['Solid Helm/G', 'Clash with the Dreadshark', ''], ['Beetle Horn/G', 'Clash with the Dreadshark (C) o Clash with the Space Worm (A)', 'C'],
      ['Long Helm/G', 'Clash with the Glacial Fortress', 'C'], ['Angel/G', 'Clash with the Glacial Fortress', 'A'],
      ['Airship', 'Clash with the Space Worm', ''], ['Schwarzgeist', 'Clash with the Schwarzgeist', 'C'], ['Golden Highwind', 'Clash with the Schwarzgeist', ''],
      ['Wubber Ducky', 'Countdown 5', 'A'], ['Dino Soarer', 'Countdown 6', 'A'], ['Gigas', 'Countdown 7', 'A'], ['Galleon', 'Countdown 8', 'A'],
      ['Necho Cat', 'Countdown 9', 'A'], ['Locomotive', 'Countdown 10', 'A'], ['Kooma Panda', 'Speed Skirmish 4', 'A'],
      ['Submarine', 'Speed Skirmish 5', 'A'], ['Cardboard Warrior', 'Speed Skirmish 6', 'A'], ['Home Sweet Home', 'Speed Skirmish 7', 'A'],
      ['Hot Rod', 'Speed Skirmish 8', 'A'], ['Pavilion', 'Speed Skirmish 9', 'A'], ['Palanquin', 'Speed Skirmish 10', 'A'],
    ],
    nota: '«Clash with the Schwarzgeist» pide una nave con velocidad 200 o más.',
  },
  {
    id: 'eclipse', nombre: '«The Eclipse»', mundos: 'Necrópolis de Llaves Espada y El Mundo Final',
    constelaciones: [
      { id: 'ultros', en: 'Ultros', donde: 'Arriba en el centro: encima de la entrada de la Necrópolis de Llaves Espada. Las tres de esta ruta están fuera de la estación espacial del principio: sigue las puertas verdes hasta la gran nave jefe y, al vencerla, sales al exterior.' },
      { id: 'bismarck', en: 'Bismarck', donde: 'Abajo a la izquierda: en el mapa, a la izquierda del punto «ECL-03».' },
      { id: 'omega', en: 'Omega', donde: 'Abajo a la derecha: en el mapa, a la derecha del punto «ECL-03».' },
    ],
    tesoros: [
      ['Sphere Helm/G', 'Clash with the Colossus Pyramid', ''], ['Bridge/G', 'Clash with the Scarlet Shark', 'C'], ['Mast/G', 'Clash with the Scarlet Shark', 'A'],
      ['Big Bridge/G', 'Clash with the Omega Machina', 'A'], ['Stationery Squadron', 'Countdown 11', 'A'], ['Sweet Wheels', 'Speed Skirmish 11', 'A'],
    ],
    nota: '«Clash with the Omega Machina» se abre al ganar los otros cinco combates de la ruta. Vencer a Omega Machina da un Orichalcum+ (sección Arma Artema).',
  },
];

export const INTRO_CONST = 'Son 9, tres en cada ruta, y no se pueden perder. Parecen puntos azul verdoso muy juntos y están dentro de la zona por la que vuelas. Saca la cámara y busca el ángulo y la distancia buenos: si es la buena, aparece un recuadro amarillo; si sale rojo o no sale, muévete. Cada una cuenta como misión gumi en el menú de pausa (Información › Misiones gumi).';
export const INTRO_TES_GUMI = 'El logro pide 20 tesoros distintos y hay 36. Salen de los combates de cada ruta: la mayoría con rango A, algunos con rango C o solo con ganar. Con la «Golden Highwind», que da Schwarzgeist, el rango A es mucho más fácil.';
export const SCHWARZGEIST = {
  donde: 'En el centro del ciclón verde de «Misty Stream». Para entrar hace falta una nave con velocidad 200 o más: la «Endymion» (fotografiando su constelación) sirve.',
  como: 'Tiene 100 000 PV, tres lanzamisiles de 30 000 y hasta cuatro escudos; al derrotarlo sale el «Monitor», una segunda fase más pequeña y rápida. Destruye primero los cañones de las patas y lleva el «Repair Kit» para curarte. Los lanzamisiles, los escudos y el «Monitor» son débiles a las armas de golpe («strike», ×1,5).',
  premios: 'Al ganarlo, la nave «Golden Highwind». Con rango C, el plano «Schwarzgeist»; con B, el «Tracking Laser»; con A (1 000 000 puntos), la pieza «Ultima/G».',
};
export const FUENTES_GUMI = ['khwRutasGumi', 'ppxConst', 'khwSchwarz', 'steamKh3'];
