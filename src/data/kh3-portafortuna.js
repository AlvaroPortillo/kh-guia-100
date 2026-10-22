// Los 90 portafortuna de KH III, en el orden y numeración de KHWiki («Lucky Emblem»), con su captura.
// Zonas: en castellano solo las que nombra la Wiki ES (página «Portafortunas» y «Los Siete Flantásticos»);
// el resto, en inglés entre «». `en` es el nombre inglés de la zona (se ve al pasar el ratón).
// Ids: kh3.portafortuna.<mundo>.<n>. Imágenes: assets/img/kh3/portafortuna/pf-<mundo>-<n>.webp (KHWiki).
export const IMG_PF = 'assets/img/kh3/portafortuna/';

const Z = {
  'Overlook': 'Tebas: Mirador',
  'The Big Olive': 'Tebas: La gran aceituna',
  'Agora': 'Tebas: Ágora',
  'Corridors': 'Reino de los Dioses: Pasillos',
  'Secluded Forge': 'Reino de los Dioses: Forja',
  'Tram Common': 'Plazoleta del tranvía',
  'The Woods': 'El bosque',
  'The Old Mansion': 'La vieja mansión',
  'Upper Level': 'Almacén de puertas: Nivel superior',
  'Middle Tier': 'Laberinto de hielo: Zona media',
  'Lower Tier': 'Laberinto de hielo: Zona baja',
  'Mountain Ridge': 'Montaña del norte: Cordillera',
  'Snowfield': 'Montaña del norte: Campo de nieve',
  'Docks': 'Port Royal: Muelles',
  'Fort': 'Port Royal: Fuerte',
  'Isla Verdemontaña': 'Isla Verdemontaña',
  "Hiro's Garage": 'Garaje de Hiro',
  'South District': 'Distrito Sur',
};
const p = (en, t) => ({ zona: Z[en] ?? `«${en}»`, en, t });

export const MUNDOS_PF = [
  {
    id: 'olimpo', nombre: 'El Olimpo',
    aviso: 'Solo se pueden fotografiar al volver al Olimpo después de luchar contra la Ola Infernal en Villa Crepúsculo.',
    pf: [
      p('Overlook', 'Grabado en una pared.'),
      p('The Big Olive', 'Grabado en una pared.'),
      p('Agora', 'Grabado en las escaleras.'),
      p('Overlook', 'Grabado en una pared.'),
      p('Cliff Ascent', 'Grabado en una columna.'),
      p('Cliff Ascent', 'Grabado en la pared, junto a la cascada.'),
      p('Cliff Ascent', 'Formación de rocas.'),
      p('Mountainside', 'Hecho con enredaderas.'),
      p('Corridors', 'Grabado en una pared.'),
      p('Corridors', 'Grabado en una pared.'),
      p('Secluded Forge', 'Grabado en el yunque.'),
      p('Cloud Ridge', 'Formación de nubes.'),
    ],
  },
  {
    id: 'villa', nombre: 'Villa Crepúsculo',
    pf: [
      p('Tram Common', 'Grabado en la pared junto a la tienda gumi.'),
      p('Tram Common', 'Grabado en el techo del tranvía.'),
      p('Tram Common', 'Grabado en una chimenea.'),
      p('Tram Common', 'En la pantalla del cine: hay que esperar a que acabe el corto para poder fotografiarlo.'),
      p('Tram Common', 'Hecho con platos, en una terraza de una azotea.'),
      p('The Woods', 'Grabado en la puerta de un sótano.'),
      p('The Woods', 'Grabado en una pared cerca de «Underground Conduit».'),
      p('The Woods', 'Luz que se cuela entre los árboles, en una colina.'),
      p('The Old Mansion', 'Grabado en una pared.'),
    ],
  },
  {
    id: 'juguetes', nombre: 'Caja de juguetes',
    pf: [
      p("Andy's House", 'Grabado en una caja.'),
      p("Andy's House", 'Grabado en el tejado.'),
      p("Andy's House", 'Hecho con hojas.'),
      p("Andy's House", 'Grabado en un coche.'),
      p('Main Floor: 1F', 'Hecho con cinta adhesiva.'),
      p('Main Floor: 1F', 'Grabado en un pedestal. Hace falta un Gigas para destruir el modelo que lo tapa.'),
      p('Lower Vents', 'Grabado en una pared.'),
      p('Main Floor: 2F', 'Grabado en un ovni.'),
      p('Babies & Toddlers: Dolls', 'Hecho con bolas de discoteca: hay que fotografiarlo desde un ángulo concreto.'),
      p('Main Floor: 3F', 'Grabado en un expositor.'),
      p('Main Floor: 1F', 'Hecho con una caja y pegatinas, justo a la salida de la tienda.'),
    ],
  },
  {
    id: 'corona', nombre: 'Reino de Corona',
    pf: [
      p('Tower', 'Formación de rocas: hay que fotografiarlo desde el tejado de la torre de Rapunzel.'),
      p('Marsh', 'Grabado en una pared.'),
      p('Wetlands', 'Grabado en un barril dentro de una cueva.'),
      p('Shore', 'Grabado en un puente.'),
      p('Thoroughfare', 'Grabado en un arco.'),
      p('Thoroughfare', 'Grabado en una puerta.'),
      p('Wharf', 'Grabado en el marco de una puerta.'),
      p('Wharf', 'Hecho con cajas y barriles.'),
      p('Wharf', 'Grabado en un pedestal de una torre.'),
    ],
  },
  {
    id: 'monstruopolis', nombre: 'Monstruópolis',
    pf: [
      p('Laugh Floor', 'Dibujo en una tablilla.'),
      p('Laugh Floor', 'Grabado en el suelo, debajo del payaso.'),
      p('Upper Level', 'Grabado en una pared.'),
      p('Upper Level', 'Hecho con puertas.'),
      p('Ground Floor', 'Grabado en una pared.'),
      p('Ground Floor', 'Pintura derramada en el suelo.'),
      p('Second Floor', 'Grabado en una pared.'),
      p('Accessway', 'Grabado en un archivador, cerca del punto de guardado.'),
      p('Accessway', 'Grabado en el marco de una puerta.'),
      p('Tank Yard', 'Hecho con tuberías: hay que fotografiarlo desde un ángulo concreto.'),
      p('Door Vault Passage', 'Grabado en el suelo. Solo se puede fotografiar después de terminar el mundo.'),
    ],
  },
  {
    id: 'bosque', nombre: 'Bosque de los Cien Acres',
    pf: [
      p("Rabbit's House", 'Formación de árboles a lo lejos.'),
      p("Rabbit's House", 'Grabado en una calabaza.'),
      p("Rabbit's House", 'Grabado en el fondo del cubo.'),
    ],
  },
  {
    id: 'arendelle', nombre: 'Arendelle',
    pf: [
      p('Treescape', 'Grabado en un árbol.'),
      p('Middle Tier', 'Grabado en una pared.'),
      p('Lower Tier', 'Grabado en una pared.'),
      p('Middle Tier', 'Grabado en una pared.'),
      p('Upper Tier', 'Formación de rocas.'),
      p('Mountain Ridge', 'Grabado en una pared.'),
      p('Frozen Wall', 'Nieve en la pared.'),
      p('Frozen Wall', 'Grabado en la nieve.'),
      p('Snowfield', 'Grabado en la nieve.'),
      p('Snowfield', 'Hecho con troncos.'),
      p('Foothills', 'Grabado en una roca grande.'),
    ],
  },
  {
    id: 'caribe', nombre: 'El Caribe',
    pf: [
      p('Docks', 'Grabado en una barca.'),
      p('Docks', 'Grabado en una columna.'),
      p('Seaport', 'Luz que entra por la cabaña: hay que fotografiarlo desde un ángulo concreto.'),
      p('Seaport', 'Grabado en un cartel.'),
      p('Fort', 'Hecho con cuerda.'),
      p('Fort', 'Grabado en un grillete.'),
      p('Isla Verdemontaña', 'Formación de rocas.'),
      p('Isle of Luck', 'Formación de rocas.'),
      p('Horseshoe Isle', 'Formación de rocas.'),
      p('Port Royal Waters', 'Barriles rotos, en una isla pequeña y redonda al oeste de la isla de los mástiles.'),
      p("Ship's End", 'Grabado en la cubierta de un barco.'),
      p('Sandbar Isle', 'Grabado en una pared.'),
      p('Sandbar Isle', 'Grabado en una roca, enfrente y por debajo del anterior.'),
    ],
  },
  {
    id: 'sanfransokyo', nombre: 'San Fransokyo',
    pf: [
      p("Hiro's Garage", 'Hecho con cables.'),
      p('South District', 'Formación de arbustos rojos, justo al este del punto de guardado del Distrito Sur.'),
      p('South District', 'Luz sobre el cartel de Tsukiji, en lo alto del edificio justo al norte del punto de guardado del Distrito Sur. Solo de noche.'),
      p('South District', 'Grabado en el abanico de una de las estatuas del edificio al noroeste del punto de guardado del Distrito Sur.'),
      p('Central District', 'Grabado en la cúpula de cristal de la azotea de un edificio en la esquina suroeste del distrito.'),
      p('Central District', 'Grabado en el tejado del edificio de luces azules a rayas, al suroeste del punto de guardado del «North District».'),
      p('Central District', 'Grabado en el globo azul con forma de carpa koi, justo al suroeste del punto de guardado del «North District».'),
      p('North District', 'Grabado en la escalera noreste del edificio del norte del distrito.'),
      p('North District', 'Luz en el túnel del edificio del norte del distrito: hay que fotografiarlo desde un ángulo concreto, mirando al este.'),
      p('North District', 'Grabado en el coche amarillo del callejón al noroeste de las vías, antes del túnel.'),
      p('North District', 'Grabado en la punta de la antena del edificio de la esquina norte del distrito.'),
    ],
  },
];

// Premios por número de portafortuna fotografiados (nombres de la Wiki ES).
export const PREMIOS_PF = [
  [1, 'Impulso Hábil'], [3, 'Omnipoción'], [5, 'Anillo de Experto'], [10, 'Colgante Electro+'], [15, 'Amuleto Lunar'],
  [20, 'Magia ↑'], [25, 'Talismán Estelar'], [30, 'Insignia'], [35, 'Banda Inmune+'], [40, 'Fuerza ↑'], [45, 'Collar del Maestro'],
  [50, 'Anillo Sabio'], [55, 'Defensa ↑'], [60, 'Anillo de Orichalcum'], [65, 'Cinto Cósmico'], [70, 'Insignia Real'],
  [80, 'Orichalcum+'], [90, 'Broche de Mickey'],
];

export const INTRO_PF = 'Se fotografían con el gumífono. Al fotografiar los 90 en una partida terminada te dan «Proof of Promises». Para ver el final secreto hacen falta los 90 en «Beginner», 60 en «Standard», 30 en «Proud» y ninguno en «Critical».';
export const FUENTES_PF = ['khwPortafortuna', 'wesPortafortuna', 'wesFlanes'];
