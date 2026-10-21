// Nexos-D de BBS Final Mix: cómo se consigue cada uno y qué personajes pueden usarlo.
// Fuente: KHWiki — Dimension Link (tabla «List of D-Links»); Nexo-D de Pete: guía de logros de Steam.
// Se omiten los Nexos del Coso Virtual con otros jugadores (solo existían en las versiones de PSP).

export const NEXOS = [
  { id: 'terra', nombre: 'Terra', pjs: ['ventus', 'aqua'], como: 'Al completar la Tierra de Partida.' },
  { id: 'ventus', nombre: 'Ventus', pjs: ['terra', 'aqua'], como: 'Al completar la Tierra de Partida.' },
  { id: 'aqua', nombre: 'Aqua', pjs: ['terra', 'ventus'], como: 'Al completar la Tierra de Partida.' },
  { id: 'mickey', nombre: 'Mickey', pjs: ['ventus', 'aqua'],
    como: { ventus: 'Tras derrotar a Vanitas en la Necrópolis de Llaves Espada.', aqua: 'Tras derrotar a los nescientes en el Vergel Radiante («Front Doors»).' } },
  { id: 'donald', nombre: 'Donald', pjs: ['ventus', 'aqua'], como: 'Al completar la Torre de los Misterios.' },
  { id: 'goofy', nombre: 'Goofy', pjs: ['ventus', 'aqua'], como: 'Al completar la Torre de los Misterios.' },
  { id: 'blancanieves', nombre: 'Blancanieves', pjs: ['ventus', 'aqua'], como: 'Al completar el Bosque de los Enanitos.' },
  { id: 'cenicienta', nombre: 'Cenicienta', pjs: ['terra', 'ventus', 'aqua'], como: 'Al completar el Castillo de los Sueños.' },
  { id: 'malefica', nombre: 'Maléfica', pjs: ['terra'], como: 'Al llegar a «Aurora\'s Chamber», en el Reino Encantado.' },
  { id: 'zack', nombre: 'Zack', pjs: ['terra', 'ventus', 'aqua'], como: 'Al completar el Coliseo del Olimpo.' },
  { id: '626', nombre: 'Experimento 626', pjs: ['terra', 'ventus', 'aqua'], como: 'Al completar Espacio Profundo.' },
  { id: 'peter-pan', nombre: 'Peter Pan', pjs: ['terra', 'ventus', 'aqua'], como: 'Al completar el País de Nunca Jamás.' },
  { id: 'pete', nombre: 'Pete', pjs: ['terra', 'ventus', 'aqua'],
    como: 'Tras completar la historia de Ciudad Disney, juega al Tablero de comandos fuera del Coso Virtual, consigue que el Capitán Oscuro o el Capitán Justicia te acompañe (cae en la casilla azul con estrellas) y termina la partida.' },
  { id: 'vanitas', nombre: 'Vanitas', pjs: ['ventus'], como: 'Solo durante el combate final contra Vanitas, cuando le queda 1 VT.' },
];
