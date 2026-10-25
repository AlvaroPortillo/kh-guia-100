// Orfebrería de KH III: misiones fotográficas de los moguris y textos de la sección. A mano.
// Fuentes: KHWiki «Synthesis» (qué hay que fotografiar, cuándo se abre y qué receta da) y PowerPyx
// «Moogle Photo Mission Locations» (dónde hacer la foto, resumido en castellano).
// Ids: kh3.foto.<n> (misiones), kh3.sintesis.<id> (objetos; el Arma Artema usa kh3.logro.ACH_44),
// kh3.material.<id> (materiales registrados). Objetos y materiales: kh3-sintesis.js (generado).
export const IMG_SINT = 'assets/img/kh3/sintesis/';

// n: número de la misión en el menú. objeto: id en SINTESIS_KH3 de la receta que da.
export const FOTOS_KH3 = [
  { n: 1, que: 'Un Pironúcleo', abre: 'Al empezar Villa Crepúsculo.', objeto: 'firefighter-rosette',
    donde: 'El Olimpo, Tebas: Mirador. Baja por las escaleras de la izquierda: aparece un grupo de Pironúcleos.' },
  { n: 2, que: 'Un Hidronúcleo', abre: 'Al empezar Villa Crepúsculo.', objeto: 'umbrella-rosette',
    donde: 'Reino de Corona, «Wildflower Clearing». Ve al oeste por el barranco hasta «Wetlands» y baja a la zona inferior: sale un grupo de Hidronúcleos.' },
  { n: 3, que: 'Una Pelusilla Jefe', abre: 'Al terminar Villa Crepúsculo.', objeto: 'mask-rosette',
    donde: 'Reino de Corona, «The Hills». Sigue el camino desde el inicio y ve al norte: sale un grupo con varias Pelusillas Jefe.' },
  { n: 4, que: 'La estatua de Hércules', abre: 'Al terminar Villa Crepúsculo.', objeto: 'cosmic-ring',
    donde: 'El Olimpo, Tebas: Ágora. Justo delante al llegar, rodeada de andamios.' },
  { n: 5, que: 'El gran expositor de «Beasts & Bugs»', abre: 'Al empezar la Caja de juguetes.', objeto: 'soldiers-earring',
    donde: 'Caja de juguetes, Galaxy Toys. En la tienda «Action+», esquina noreste: el robot rojo gigante que rompe la pared.' },
  { n: 6, que: 'La torre de Rapunzel', abre: 'Al empezar el Reino de Corona.', objeto: 'mages-earring',
    donde: 'Reino de Corona, «Tower». Baja la colina desde el punto de guardado y fotografía la torre.' },
  { n: 7, que: 'El festival', abre: 'A mitad del Reino de Corona.', objeto: 'moon-amulet',
    donde: 'Reino de Corona, «Thoroughfare». Desde el punto de guardado, fotografía las guirnaldas entre los edificios.' },
  { n: 8, que: 'El fuego de la forja', abre: 'Al empezar Monstruópolis.', objeto: 'fire-chain',
    donde: 'El Olimpo, Reino de los Dioses. Desde «Corridors», toma el raíl que gira a la derecha, gira otra vez a la derecha al final y salta por la cascada a la forja. Fotografía el fuego del horno.' },
  { n: 9, que: 'Zeus', abre: 'Al empezar Monstruópolis.', objeto: 'thunder-chain',
    donde: 'El Olimpo, Reino de los Dioses, «Apex». Subiendo las escaleras, delante de las grandes puertas.' },
  { n: 10, que: 'El tranvía de Villa Crepúsculo', abre: 'Al empezar Monstruópolis.', objeto: 'draw-ring',
    donde: 'Villa Crepúsculo, Plazoleta del tranvía. Ponte delante del tranvía, que da vueltas por la zona, y sácalo entero.' },
  { n: 11, que: 'Un agente de la CDA', abre: 'Al terminar Monstruópolis.', objeto: 'insulator-rosette',
    donde: 'Monstruópolis, «Tank Yard». Al otro lado de la sala del punto de guardado: el monstruo con traje amarillo.' },
  { n: 12, que: 'El palacio de hielo', abre: 'Al empezar Arendelle.', objeto: 'blizzard-chain',
    donde: 'Arendelle, Montaña del norte: Cordillera. Mira hacia arriba desde el punto de guardado.' },
  { n: 13, que: 'Olaf', abre: 'Al terminar Arendelle.', objeto: 'snowman-rosette',
    donde: 'Arendelle, «Valley of Ice». Al volver al mundo hay que reunir otra vez las piezas de Olaf (en los mismos sitios). También está en el palacio de hielo con los demás.' },
  { n: 14, que: 'El gran «cactuar» verde', abre: 'Al empezar El Caribe.', objeto: 'fencers-earring',
    donde: 'Caja de juguetes, Galaxy Toys, «Main Floor: 3F». Cruza «Play Place» hasta la zona de los bloques: es el «cactuar» que montaste en la historia.' },
  { n: 15, que: 'El espantapájaros del huerto de Conejo', abre: 'Al terminar el Bosque de los Cien Acres.', objeto: 'slayers-earring',
    donde: 'Bosque de los Cien Acres (por el libro del bistró de Villa Crepúsculo). A la izquierda de la calabaza gigante del huerto.' },
  { n: 16, que: 'El lucero de la tarde', abre: 'En San Fransokyo, tras el entrenamiento de realidad aumentada.', objeto: 'star-charm',
    donde: 'San Fransokyo, de noche (distrito norte o sur). Sube a un edificio alto y mira al oeste: es un puntito amarillento en el cielo.' },
  { n: 17, que: 'Las mangas de viento con forma de pez, de día', abre: 'En San Fransokyo, tras el entrenamiento de realidad aumentada.', objeto: 'aero-armlet',
    donde: 'San Fransokyo, «North District», de día. Están justo encima del punto de guardado; sube a un edificio para fotografiar una.' },
  { n: 18, que: 'La cascada de Port Royal', abre: 'Cerca del final de El Caribe.', objeto: 'aqua-chaplet',
    donde: 'El Caribe, Port Royal: Fuerte. Sal por el camino del sur hasta un puente sobre un río: fotografía la cascada desde el puente.' },
  { n: 19, que: 'Una Torre Maldita', abre: 'Al terminar San Fransokyo.', objeto: 'dark-chain',
    donde: 'Monstruópolis, «Tank Yard», cuando ya se pueden hacer los Portales de Batalla (tras la historia). Sal al exterior, deslízate por el raíl de la izquierda: el portal azul del centro de la sala redonda saca una Torre Maldita.' },
  { n: 20, que: 'Cada compañero de equipo (12)', abre: 'Al terminar San Fransokyo.', objeto: 'petite-ribbon',
    donde: 'Donald y Goofy (en cualquier sitio), Hércules (El Olimpo), Woody y Buzz Lightyear (Caja de juguetes), Flynn Rider y Rapunzel (Reino de Corona), Mike Wazowski y Sulley (Monstruópolis), Merengue (Arendelle), Jack Sparrow (El Caribe) y Baymax (San Fransokyo). Mejor fuera de combate: apunta, espera a que posen y dispara.' },
];

export const INTRO_ORF = 'Para el logro «Orfebre» hay que fabricar una vez cada uno de los 88 objetos de la Orfebrería (taller de cualquier tienda Moguri). Las recetas se desbloquean de dos formas: registrando materiales distintos (objetivos de coleccionista, de 2 a 58) y con las 20 misiones fotográficas de los moguris. Nada es perdible.';
export const FUENTES_ORF = ['ppxSintesis', 'khwSintesis', 'ppxFotos', 'khwMateriales', 'wesMateriales'];
