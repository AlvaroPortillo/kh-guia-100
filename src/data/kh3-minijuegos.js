// Siete Flantásticos, minijuegos, Reino clásico y récords del gumífono de KH III. A mano.
// Fuentes: KHWiki («Flantastic Seven», cada minijuego, «Classic Kingdom»), PowerPyx (dónde están los flanes, cómo
// se juegan y la lista de récords del gumífono) y Wiki ES (nombres de flanes, frutas, habilidades, atracciones,
// vínculos y llaves espada). Sin nombre en castellano con fuente: inglés entre «».
// Ids: kh3.flan.<id> (superado), kh3.flan.<id>.alta (puntuación alta), kh3.mini.<id> (rango A),
// kh3.clasico.<n> (récord batido), kh3.record.<grupo>.<n>. Los flanes reutilizan los ids de FLANES (kh3-artema.js).

// Premios por puntuación (KHWiki; frutas y habilidades con nombre de la Wiki ES) y cómo se juega (PowerPyx/KHWiki).
export const FLANES_INFO = {
  cereza: { premios: [['10 000', '1 Cereza Agria'], ['20 000', '3 Cerezas Agrias y Transformación Extra']],
    donde: 'Desde el punto de guardado del Mirador, sube las escaleras hasta el final sin salida.',
    como: 'Vas sobre el escudo de Goofy y hay que arrollar todos los flanes posibles. Cada choque con una pared te frena (y demasiados acaban la partida); las flechas del suelo te dan velocidad. Intenta llegar a la última zona: allí hay muchos flanes.' },
  fresa: { premios: [['8500', '1 Fresa'], ['17 000', '3 Fresas y Atracciones Duraderas']],
    donde: 'Junto al punto de guardado «Rest Area».',
    como: 'Con una taza de las Tazas Locas, choca con los flanes para apilarlos. Si chocas contra una fresa u otro objeto pierdes flanes de la pila. Cuando la pila llegue al techo, ve al centro, donde el techo es más alto. Acelera para alejarte de los flanes hostiles.' },
  naranja: { premios: [['10 000', '1 Naranja sanguina'], ['23 000', '3 Naranjas sanguinas y Atracción']],
    donde: 'Donde empiezas el mundo la primera vez.',
    como: 'Solo tienes siete fotos y no hay límite de tiempo. Apunta a un flan unos segundos y dispara cuando pose: así la foto es «Excelente». Varios flanes en una foto puntúan más: empieza por los grupos grandes.' },
  platano: { premios: [['10 000', '1 Plátano'], ['20 000', '3 Plátanos y «Grand Magic Extender»']],
    donde: 'Cruza la puertecita blanca apoyada en la pared frente al punto de guardado «Basement». Gira a la derecha: en la pared de puertas, entra por la amarilla con luz roja (fila de abajo, al final). Al cruzarla, date la vuelta: el flan está a lo lejos. Si has bajado por algún raíl, te has pasado.',
    como: 'Uno de los más difíciles: hay que acabar con muchos flanes pequeños mientras el grande intenta golpearte. No lo pierdas de vista y esquiva mucho. Las magias de área como Electro+ limpian grupos enteros.' },
  uva: { premios: [['10 000', '1 Uva'], ['20 000', '3 Uvas y «Unison Blizzard»']],
    donde: 'Baja la ladera a la izquierda del punto de guardado «Mountain Ridge» (el del palacio de hielo).',
    como: 'Derrota a todos los flanes que puedas antes de que acabe el tiempo. Bloquear sus magias se las devuelve, y congelarlos con Hielo tiene el mismo efecto. Ir con mucho nivel ayuda: mueren antes.' },
  melon: { premios: [['7500', '1 Melón'], ['15 000', '3 Melones y Atracciones Duraderas']],
    donde: 'Solo de noche: aparece en el punto de guardado «South District (Night)», date la vuelta, sube corriendo por el edificio y planea recto hasta las azoteas cercanas.',
    como: 'Rebota sobre los flanes sin tocar el suelo. Tras pisar uno, abre la boca: no caigas en un flan con la boca abierta. Los que brillan te lanzan a otra zona.' },
  sandia: { premios: [['14 000', '1 Sandía'], ['28 000', '3 Sandías y «Focus Syphon»']],
    donde: 'En el centro del fuerte.',
    como: 'Dispara a los flanes con los cañones. La campana del centro dispara todos a la vez: úsala cuando brille naranja y haya grupos grandes. A veces sale un flan de sandía grande a lo lejos: si le das, desaparecen todos los demás.' },
};
export const INTRO_FLANES = 'Los convocas con el comando «Boinnng!» y solo aparecen después de terminar su mundo. Para el logro «Maestro flantástico» y para los récords basta con jugar cada uno una vez, con cualquier puntuación. Las frutas hacen falta para la cocina, y la puntuación alta en los siete da un Orichalcum+ del Arma Artema.';

// Minijuegos de los mundos (KHWiki: dónde repetirlos, rangos y premios; PowerPyx y la guía: consejos).
export const MINIJUEGOS_KH3 = [
  { id: 'verum', nombre: 'Verum Rex: Beat of Lead', logro: 'ACH_30', mundo: 'Caja de juguetes',
    donde: 'En la tienda de videojuegos de la planta 3 de Galaxy Toys: examina el mando.',
    meta: 'Rango A: 10 000 000 puntos. Logro: 12 000 000.',
    premio: 'Rango A: «Focus Syphon», Fuerza ↑ y Medalla Maestra.',
    como: 'Pilota Gigas y derrota Gigas enemigos encadenándolos para subir el multiplicador; las trampas (tanques explosivos, suelo eléctrico y grúa) multiplican los puntos. Al final hay bonificaciones grandes: usar las tres trampas, vencer con un solo Gigas, montar los seis tipos o vencer al Gigas final sin recibir daño (3 000 000). Usa el Gigas morado y no pierdas el multiplicador.' },
  { id: 'danza', nombre: 'Danza solar', logro: 'ACH_31', mundo: 'Reino de Corona',
    donde: 'Habla con Rapunzel en la plaza del mercado («Thoroughfare») después de terminar el mundo.',
    meta: 'Rango A: 50 000 puntos en 60 segundos. Logro: 70 000.',
    premio: 'Rango A: Magia ↑, «Unison Thunder» y Medalla Maestra.',
    como: 'Pulsa el botón del color de cada anillo (girar, paso o palmada). Tres aciertos seguidos con la misma pareja suman tres segundos. Encadena parejas sin pararte en los barriles y usa el giro final cuando se llene el indicador.' },
  { id: 'deslizamiento', nombre: 'Deslizamiento alpino', logro: 'ACH_32', mundo: 'Arendelle',
    donde: 'Habla con Elsa o con Goofy en el palacio de hielo («Mountain Ridge») después de terminar el mundo.',
    meta: 'Rango A: 500 000 puntos. Logro: 600 000.',
    premio: 'Rango A: Defensa ↑, «Fusion Rocket» y Medalla Estrella. Con los 10 tesoros del recorrido: un Orichalcum+ e Imán Maestro.',
    como: 'Recoge premios de puntos sin chocar: el multiplicador sube hasta ×8 mientras no te golpees. Llegar sin recibir daño da 50 000 extra y terminar en menos de 1:25 da 200 000.' },
  { id: 'cazaluz-a', nombre: 'Cazaluz: circuito A', logro: 'ACH_33', mundo: 'San Fransokyo',
    donde: 'Habla con Fred después de terminar el mundo. Según PowerPyx, uno de los dos circuitos está en la gran puerta del «South District» y el otro en el edificio más alto con neones azules del «North District».',
    meta: 'Rango A: 60 000 puntos.',
    premio: 'Rango A: Atracciones Extra, Fuerza ↑ y Medalla Estrella.',
    como: 'Pasa por los anillos de colores y derrota a los sincorazón holográficos camino de la estrella final.' },
  { id: 'cazaluz-b', nombre: 'Cazaluz: circuito B', logro: 'ACH_33', mundo: 'San Fransokyo',
    donde: 'Habla con Go Go Tomago después de terminar el mundo.',
    meta: 'Rango A: 75 000 puntos. Es el más difícil.',
    premio: 'Rango A: «Grand Magic Extender», Magia ↑ y Medalla Estrella.',
    como: 'Además de anillos y sincorazón hay dianas de colores a las que disparar. Hay que acabar rápido con muchos enemigos, así que depende mucho del nivel y del equipo: si se te resiste, déjalo para el nivel 99.' },
];

// Los 23 del Reino clásico, en el orden de KHWiki. `cofre`: [mundo, n.º] en la sección Tesoros.
export const CLASICO_KH3 = [
  { n: 1, en: 'Giantland', obj: 'Llega hasta Mickey y escapa de la sala del gigante.', origen: 'Al terminar Villa Crepúsculo.' },
  { n: 2, en: 'Mickey, the Mail Pilot', obj: 'Pilota el avión y recoge el correo que cae.', origen: 'Examina el cartel de cine de la Plazoleta del tranvía (Villa Crepúsculo).' },
  { n: 3, en: 'The Musical Farmer', obj: 'Gira las tuberías para que los huevos lleguen a las cajas.', origen: 'Examina el cartel de cine de la Plazoleta del tranvía (Villa Crepúsculo).' },
  { n: 4, en: 'Building a Building', obj: 'Guía a Mickey y recoge todas las cestas de pícnic.', origen: 'Cartel de cine de la Plazoleta del tranvía, después de terminar el Bosque de los Cien Acres.' },
  { n: 5, en: 'The Mad Doctor', obj: 'Rescata a Mickey del castillo del doctor loco.', origen: 'Cartel de cine de la Plazoleta del tranvía, después de terminar el Bosque de los Cien Acres.' },
  { n: 6, en: 'Mickey Cuts Up', obj: 'Corta el césped esquivando obstáculos.', cofre: ['juguetes', 29] },
  { n: 7, en: 'Taxi Troubles', obj: 'Recoge pasajeros con el taxi y llévalos a la meta.', cofre: ['juguetes', 13] },
  { n: 8, en: 'The Barnyard Battle', obj: 'Ayuda a Mickey a frenar a los enemigos que avanzan.', cofre: ['juguetes', 24] },
  { n: 9, en: 'The Wayward Canary', obj: 'Atrapa a todos los canarios que vuelan por la sala.', cofre: ['corona', 22] },
  { n: 10, en: 'Camping Out', obj: 'Acaba con todos los mosquitos.', cofre: ['corona', 9] },
  { n: 11, en: 'The Karnival Kid', obj: 'Prepara los perritos calientes que pide cada cliente.', cofre: ['corona', 24] },
  { n: 12, en: 'How to Play Golf', obj: 'Golpea y emboca en varios recorridos.', cofre: ['monstruopolis', 10] },
  { n: 13, en: "Mickey's Circus", obj: 'Súbete al monociclo y pásale la pelota a la foca.', cofre: ['monstruopolis', 19] },
  { n: 14, en: 'Barnyard Sports', obj: 'Reta a Mickey en tres pruebas de atletismo.', cofre: ['arendelle', 14] },
  { n: 15, en: 'The Klondike Kid', obj: 'Cruza el bosque en trineo y demuéstrale a Pete quién manda.', cofre: ['arendelle', 8] },
  { n: 16, en: "Mickey's Kitten Catch", obj: 'Atrapa a los gatos traviesos y devuélvelos a la cesta de Mickey.', cofre: ['arendelle', 7] },
  { n: 17, en: "Fishin' Frenzy", obj: 'Esquiva los peces grandes y pesca todos los que puedas.', cofre: ['caribe', 4] },
  { n: 18, en: 'Beach Party', obj: 'Protege a Mickey y sus amigos del pulpo gigante.', cofre: ['caribe', 13] },
  { n: 19, en: "Mickey's Prison Escape", obj: 'Saca a Mickey de la cárcel sin que te vean los guardias.', cofre: ['caribe', 47] },
  { n: 20, en: 'Cast Out to Sea', obj: 'Recoge todos los plátanos que caen.', cofre: ['caribe', 10] },
  { n: 21, en: 'How to Play Baseball', obj: 'Reta al equipo de Pete a un partido de béisbol.', cofre: ['sanfransokyo', 35] },
  { n: 22, en: "Mickey's Mechanical Man", obj: 'Controla al hombre mecánico y noquea al gorila.', cofre: ['sanfransokyo', 34] },
  { n: 23, en: 'Mickey Steps Out', obj: 'Salta los charcos y llega hasta Minnie sin mojarte.', cofre: ['sanfransokyo', 36] },
];
export const INTRO_CLASICO = 'Son juegos de pantalla de cristal líquido que se juegan en el gumífono. Para «Memoria muscular» basta con superar el récord de uno; para «Formación clásica», el de los 23 (cada uno se marca con un icono de Mickey). Superarlos todos da la llave espada Tono Clásico.';

// Récords del gumífono (lista de PowerPyx). Para el logro «Constancia de sus logros» todos llevan su icono de Mickey.
// Llaves espada: Wiki ES. Shotlocks: inglés (sin fuente en castellano).
export const RECORDS_KH3 = [
  { id: 'shotlock', titulo: 'Shotlocks', intro: 'Usa cada uno una vez y golpea a un enemigo. Cada llave espada tiene los suyos: cambia de forma (combo de 3 barras) para usar el segundo o el tercero.', items: [
    'Cadena del Reino: «King of Hearts»', 'Cadena del Reino: «Ragnarok»', 'El Origen del Héroe: «Drain Shock»', 'El Origen del Héroe: «Atomic Deluge»',
    'Estrella Fugaz: «Meteor Shower»', 'Estrella Fugaz: «Diving Barrage»', 'Estrella Fugaz: «Cluster Cannonade»',
    'Ayudante del Sheriff: «Ghost Horde»', 'Ayudante del Sheriff: «Drill Dive»', 'Para Siempre: «Shimmering Drops»', 'Para Siempre: «Spectral Rays»',
    'La Clave de la risa: «Snakebite»', 'La Clave de la risa: «Warp Trick»', 'Nieve Cristalina: «Diamond Dust»', 'Nieve Cristalina: «Frozen Crescents»',
    'Timón del Destino: «Blade Storm»', 'Timón del Destino: «Flag Rampage»', 'Nanoarma: «Cubic Stream»', 'Nanoarma: «Zone Connector»',
    'Dulce Miel: «Hunny Burst»', 'Dulce Miel: «Hunny Drizzle»', 'Dulce Miel: «Sweet Surprise»', 'Gran Chef: «Steam Spiral»', 'Gran Chef: «Fruit Crusher»',
    'Tono Clásico: «Phantom Rush»', 'Tono Clásico: «Noise Flux»', 'Luz Estelar: «Blades of the Round»', 'Luz Estelar: «Union Ragnarok»',
    'Arma Artema: «Infinity Circle»',
  ] },
  { id: 'atraccion', titulo: 'Atracciones', intro: 'Usa cada una una vez contra enemigos. Salen solas según el enemigo y el mundo.', items: [
    'Barco Pirata', 'Tazas Locas', 'Nave Láser', 'Tiovivo Mágico', 'Aguas Bravas',
  ] },
  { id: 'vinculo', titulo: 'Vínculos', intro: 'Usa cada uno una vez contra enemigos.', items: [
    'Marramaguau: en Villa Crepúsculo, tras el primer jefe.', 'Rompe Ralph: en la Caja de juguetes, al superar Verum Rex en la tienda de videojuegos.',
    'Simba: en Monstruópolis, tras el jefe de mitad del mundo.', 'Stitch: en San Fransokyo, tras superar un circuito de Cazaluz.',
    'Ariel: en El Caribe, en el cofre que protege el Rape Eléctrico (cofre n.º 15). Hay que abrirlo; si se te pasó, puedes volver.',
  ] },
  { id: 'cien-acres', titulo: 'Minijuegos del Bosque de los Cien Acres', intro: 'Forman parte de la historia del mundo y no se pueden perder.', items: [
    "«Tigger's Vegetable Spree»", "«Lumpy's Fruit Parade»", "«Pooh's Hunny Harvest»",
  ] },
];
export const INTRO_RECORDS = 'Los récords del gumífono piden también jugar una vez cada flan y cada minijuego de arriba (con cualquier puntuación). Aquí está el resto.';
export const FUENTES_MINI = ['khwFlanes', 'ppxFlanes', 'wesFlanes', 'khwMinijuegos', 'khwClasico', 'ppxRecords', 'wesAtracciones'];
