// Diario de Pepito de KH Final Mix: informes Ansem, 99 dálmatas, marcas Trío y récords. Hecho a mano.
// Nombres de mundos: los de los logros de Steam. Zonas: las de la Wiki ES.

export const FUENTES_DIARIO = {
  wikiEsDiario: { nombre: 'Wiki ES — Diario de Pepito', url: 'https://kingdomhearts.fandom.com/es/wiki/Diario_de_Pepito' },
  wikiEsAnsem: { nombre: 'Wiki ES — Informes Ansem', url: 'https://kingdomhearts.fandom.com/es/wiki/Informes_Ansem' },
  khwikiAnsem: { nombre: "KHWiki — Ansem's Report", url: 'https://www.khwiki.com/Ansem%27s_Report' },
  wikiEsDalmatas: { nombre: 'Wiki ES — 99 Dálmatas', url: 'https://kingdomhearts.fandom.com/es/wiki/99_D%C3%A1lmatas' },
  wikiEsTrio: { nombre: 'Wiki ES — Trío', url: 'https://kingdomhearts.fandom.com/es/wiki/Tr%C3%ADo' },
  khwikiTrinity: { nombre: 'KHWiki — Trinity Mark (cambios de Final Mix)', url: 'https://www.khwiki.com/Trinity_Mark' },
  wikiEsBosque: { nombre: 'Wiki ES — Bosque de los 100 Acres', url: 'https://kingdomhearts.fandom.com/es/wiki/Bosque_de_los_100_Acres' },
  wikiEsMinijuegos: { nombre: 'Wiki ES — Árbol de la Miel, Bloquea a Tigger y Columpio de Pooh', url: 'https://kingdomhearts.fandom.com/es/wiki/Bloquea_a_Tigger' },
  wikiEsTobogan: { nombre: 'Wiki ES — Tobogán Selvático', url: 'https://kingdomhearts.fandom.com/es/wiki/Tob%C3%B3gan_Selv%C3%A1tico' },
  guiaSteamKhfm: { nombre: 'Guía de logros de Kingdom Hearts HD 1.5 ReMIX (Steam, en castellano)', url: 'https://steamcommunity.com/sharedfiles/filedetails/?id=3293246581' },
  guiaSteamDalmatas: { nombre: '99 Dálmatas Kingdom Hearts (guía de Steam, en castellano)', url: 'https://steamcommunity.com/sharedfiles/filedetails/?id=3267866514' },
  diDalmatas: { nombre: 'Destiny Islands — Dalmatian Puppies (Kingdom Hearts Final Mix)', url: 'https://www.destinyislands.com/kh-fm/collectables/dalmatian-puppies/' },
  diTrinity: { nombre: 'Destiny Islands — Trinity Marks (Kingdom Hearts Final Mix)', url: 'https://www.destinyislands.com/kh-fm/collectables/trinity-marks/' },
  diMinijuegos: { nombre: 'Destiny Islands — Mini Games (Kingdom Hearts Final Mix)', url: 'https://www.destinyislands.com/kh-fm/mini-games/' },
  fandomEnPuppies: { nombre: 'Kingdom Hearts Wiki (inglés) — 99 puppies (columna Final Mix)', url: 'https://kingdomhearts.fandom.com/wiki/99_puppies' },
};

// Secciones del diario (nombres de los logros ACH_034…ACH_039) y qué recoge cada una (Wiki ES / KHWiki).
export const SECCIONES_DIARIO = [
  { logro: 'ACH_034', titulo: 'La historia', texto: 'La aventura de Sora mundo a mundo. Se completa al sellar todas las cerraduras y ganar la copa Hades.' },
  { logro: 'ACH_035', titulo: 'Informes Ansem', texto: 'Los 13 informes; abajo tienes cómo se consigue cada uno.' },
  { logro: 'ACH_036', titulo: 'Los personajes', texto: 'Fichas de personajes y sincorazón. Hay que terminar la historia y derrotar a todos los enemigos, incluidos los especiales y los jefes secretos.' },
  { logro: 'ACH_037', titulo: '101 dálmatas', texto: 'Los 99 cachorros que rescatas, de tres en tres.' },
  { logro: 'ACH_038', titulo: 'Las marcas Trío', texto: 'Las marcas Trío que activas (46 en total).' },
  { logro: 'ACH_039', titulo: 'Los récords', texto: 'Tus récords en los minijuegos. Basta con jugar los 9 de la lista de abajo; no pide ninguna puntuación.' },
];

// Informes Ansem: los 10 primeros como en el KH original; 11-13 son de Final Mix.
export const INFORMES_ANSEM = [
  { n: 1, como: 'Vence a Yafar en Agrabah.' },
  { n: 2, como: 'Habla con Aerith en la Biblioteca de Bastión Hueco después de sellar su cerradura.' },
  { n: 3, como: 'Vence a Úrsula en Atlántica.' },
  { n: 4, como: 'Habla con Aerith en la Biblioteca de Bastión Hueco después de sellar su cerradura.' },
  { n: 5, como: 'Vence a Maléfica en Bastión Hueco.' },
  { n: 6, como: 'Habla con Aerith en la Biblioteca de Bastión Hueco después de sellar su cerradura.' },
  { n: 7, como: 'Vence a Oogie Boogie en Ciudad de Halloween.' },
  { n: 8, como: 'Vence a Hades en la copa Hades.' },
  { n: 9, como: 'Vence al Capitán Garfio en el País de Nunca-Jamás.' },
  { n: 10, como: 'Habla con Aerith en la Biblioteca de Bastión Hueco después de sellar su cerradura.' },
  { n: 11, como: 'Vence a Kurt Zisa, que aparece en Agrabah después de sellar la cerradura de Bastión Hueco.', fm: true },
  { n: 12, como: 'Vence a Sefirot en el Combate de platino del Coliseo del Olimpo.', fm: true },
  { n: 13, como: 'Vence al hombre misterioso en Bastión Hueco, que aparece después de sellar la cerradura de ese mundo.', fm: true },
];

// 33 cofres de tres cachorros. `n`: primer cachorro del grupo. Ubicaciones de Final Mix: Destiny Islands y la wiki
// inglesa (filas «FM»), que coinciden; zonas en castellano de la Wiki ES y de la guía de Steam. «» = sin nombre oficial comprobado.
export const DALMATAS = [
  { n: 1, mundo: 'Ciudad de Paso', donde: 'Detrás de la Casa de Merlín, en la plataforma de piedra. Necesitas Planeador.' },
  { n: 4, mundo: 'Ciudad de Paso', donde: 'Callejón: activa la marca Trío Destructor (roja) de los tablones, a la izquierda de la Tienda de Accesorios del Distrito 1, y abre el cofre junto a las cajas.' },
  { n: 7, mundo: 'Ciudad de Paso', donde: 'Orfebrería (piso de arriba de la Tienda de Accesorios): el cofre de la izquierda en la mesa del fondo.' },
  { n: 10, mundo: 'Ciudad de Paso', donde: 'Canal Secreto (se entra desde el Callejón): en las escaleras que suben al Estudio del Mago.' },
  { n: 13, mundo: 'País de las Maravillas', donde: 'Tras el juicio de Alicia, empuja la roca al estanque del Bosque de Lotos, entra en la zona oculta del oeste y cruza el pasaje de la pared: caes sobre el seto de una esquina del Palacio Real.' },
  { n: 16, mundo: 'País de las Maravillas', donde: 'Bosque de Lotos: en una plataforma en el centro.' },
  { n: 19, mundo: 'País de las Maravillas', donde: 'Planea al pasaje alto de la esquina suroeste del Bosque de Lotos; en el Jardín del Té, date la vuelta: es el cofre del seto sur (el del este).' },
  { n: 58, mundo: 'País de las Maravillas', donde: 'Examina el cuadro de la Sala Bizarra (puesta de lado) y lanza Electro a las flores rosas en forma de arco de la pared de la zona secreta del Bosque de Lotos.' },
  { n: 22, mundo: 'Coliseo del Olimpo', donde: 'Puertas del Coliseo: marca Trío Brincador (azul) delante de la estatua del gladiador derecho.' },
  { n: 25, mundo: 'Selva Profunda', donde: 'Laguna de los Hipopótamos: al fondo, saltando sobre los hipopótamos.' },
  { n: 28, mundo: 'Selva Profunda', donde: 'Zona de las lianas: en una copa de árbol cerca de la entrada a la primera zona de lianas; llega columpiándote.' },
  { n: 31, mundo: 'Selva Profunda', donde: '«Waterfall Cavern» (la cueva de la cascada): en la repisa justo encima de la del Trozo de Mitrilo, enfrente del hueco del fondo al entrar.' },
  { n: 34, mundo: 'Selva Profunda', donde: 'Campamento: marca Trío Brincador (azul) cerca de la mesa del laboratorio.' },
  { n: 37, mundo: 'Agrabah', donde: 'Sala del Tesoro: en una plataforma sobre la entrada; sube por la chimenea a la montaña de oro del Trozo de Mitrilo y salta desde allí.' },
  { n: 46, mundo: 'Agrabah', donde: 'Sala Oculta: activa la marca Trío Forzudo (amarilla) del Vestíbulo de la Cueva, entra por la nueva plataforma de la cámara silenciosa, toca la gema que sostiene la estatua y abre el cofre izquierdo.' },
  { n: 49, mundo: 'Agrabah', donde: 'Cueva de las Maravillas (entrada): en la repisa alta al este de la entrada al Vestíbulo. Con Planeador, Salto de Altura o saltando desde un barril.' },
  { n: 52, mundo: 'Agrabah', donde: 'Puertas del Palacio: en la repisa más alta de la esquina suroeste. Necesitas Salto de Altura.' },
  { n: 40, mundo: 'Ciudad de Halloween', donde: 'Mansión de Oogie Boogie: tras vencer a Lock, Shock y Barrel, golpea la palanca de la sala de juegos y abre el cofre del hueco a media altura. Cuando la mansión se derrumba, el cofre pasa a un hueco escondido bajo ella.' },
  { n: 64, mundo: 'Ciudad de Halloween', donde: 'Cementerio (entra por la cripta con forma de árbol de la Colina de la Luna tras sellar la cerradura): el cofre verde de la esquina, delante de la lápida «RIP».' },
  { n: 67, mundo: 'Ciudad de Halloween', donde: 'Colina de la Luna: marca Trío Detector (blanca) a la izquierda de la entrada, junto al muro roto.' },
  { n: 70, mundo: 'Ciudad de Halloween', donde: 'Plaza de la Guillotina: planea hasta la boca del edificio con forma de calabaza gigante y abre el cofre de la derecha.' },
  { n: 55, mundo: 'Monstruo', donde: 'Vientre 3: en la plataforma azul sobre las entradas al Vientre 2 (también se llega antes subiendo a un barril).' },
  { n: 73, mundo: 'Monstruo', donde: 'Boca: en la plataforma de madera alta cerca del barco de Geppetto, junto al paso a la Garganta. Necesitas Salto de Altura.' },
  { n: 76, mundo: 'Monstruo', donde: 'Vientre 6: en el escalón más bajo, cerca de la entrada al Vientre 5.' },
  { n: 79, mundo: 'Monstruo', donde: 'Vientre 5: sobre un barril en la repisa más alta, entre los pasos a los Vientres 3 y 6.' },
  { n: 43, mundo: 'País de Nunca-Jamás', donde: 'Cubierta del barco: marca Trío Detector (blanca) junto al timón.' },
  { n: 82, mundo: 'País de Nunca-Jamás', donde: 'Bodega: en las vigas de arriba, junto a la pared este. Hay que volar.' },
  { n: 85, mundo: 'País de Nunca-Jamás', donde: 'Bodega: abre la puerta con la marca Trío Forzudo (amarilla) y abre el cofre verde de la derecha.' },
  { n: 88, mundo: 'País de Nunca-Jamás', donde: 'Camarote del Capitán: el cofre verde de la cabecera de la cama.' },
  { n: 61, mundo: 'Bastión Hueco', donde: 'Gran Salón: a la izquierda del portal, en una repisa sobre las escaleras (en la segunda visita).' },
  { n: 91, mundo: 'Bastión Hueco', donde: 'Aguas Trepadoras: congela con Hielo las burbujas que flotan y úsalas de plataforma para subir a una más alta, a un cuarto de la altura de las cascadas.' },
  { n: 94, mundo: 'Bastión Hueco', donde: 'Puertas del Castillo: activa el interruptor rojo de las plataformas móviles, sube a la de al lado y baja con Gravedad el cofre que flota encima.' },
  { n: 97, mundo: 'Bastión Hueco', donde: 'Tras resolver el puzle de los libros de la Biblioteca, sal por la salida oculta a la parada del teleférico y baja con Gravedad la plataforma flotante del cofre.' },
];
// Premios de Pongo y Perdita en Final Mix (Destiny Islands); nombres en castellano de la guía de Steam.
// Hay que volver a su casa tras cada umbral para recogerlo.
export const PREMIOS_DALMATAS = [
  ['12', 'Gumi Cura++'], ['21', 'Gumi Piro++'], ['30', 'Gumi Electro+'], ['42', 'Trozo de mitrilo'],
  ['51', 'Hoja arrancada y Mitrilo'], ['60', 'Omnielixir'], ['72', 'Orichalcum'], ['81', 'Gumi Artema'],
  ['90', 'Extraordinario (en el KH original era una Cinta)'], ['99', 'Mejora de Aero y todos los bloques gumi'],
];

// Marcas Trío (46). Ubicaciones: Wiki ES; cambios de Final Mix: KHWiki. `efecto` solo cuando abre un camino.
export const TIPOS_TRIO = [
  { id: 'brincador', nombre: 'Trío Brincador', color: '#4F8BFF', aprende: 'Tras vencer a la Armadura en Ciudad de Paso.' },
  { id: 'destructor', nombre: 'Trío Destructor', color: '#FF5E5E', aprende: 'Al sellar la cerradura de la Selva Profunda.' },
  { id: 'acrobatico', nombre: 'Trío Acrobático', color: '#4CD97B', aprende: 'Al completar Agrabah.' },
  { id: 'forzudo', nombre: 'Trío Forzudo', color: '#F3C93F', aprende: 'Al ganar las copas Fil, Pegaso y Hércules.' },
  { id: 'detector', nombre: 'Trío Detector', color: '#C9CED9', aprende: 'Tras vencer a Riku por primera vez en Bastión Hueco.' },
];
export const MARCAS_TRIO = [
  ['brincador', 'Ciudad de Paso', 'Distrito 1', 'Delante de las mesas del restaurante.', 'Te lleva a un balcón con una postal.'],
  ['brincador', 'Ciudad de Paso', 'Distrito 1', 'En la esquina izquierda, cerca de la salida del mundo.'],
  ['brincador', 'Ciudad de Paso', 'Distrito 3', 'En el callejón que pasa sobre la fuente de «La Dama y el Vagabundo».'],
  ['brincador', 'Ciudad de Paso', 'Estudio del Mago', 'En el suelo, cerca de la entrada principal.'],
  ['brincador', 'País de las Maravillas', 'Bosque de Lotos', 'En el suelo a la derecha, donde puedes darle una Poción a la flor.'],
  ['brincador', 'País de las Maravillas', 'Bosque de Lotos', 'Crece, empuja al agua la roca que sale de la flor, vuelve a encogerte y salta por los nenúfares hasta la zona oculta.'],
  ['brincador', 'Coliseo del Olimpo', 'Puertas del Coliseo', 'Debajo de la estatua derecha.', 'Cachorros 22-24.'],
  ['brincador', 'Coliseo del Olimpo', 'Puertas del Coliseo', 'Debajo de la estatua izquierda.'],
  ['brincador', 'Selva Profunda', 'Campamento', 'Cerca del laboratorio.', 'Cachorros 34-36.'],
  ['brincador', 'Selva Profunda', 'Copa de Árboles', 'En la plataforma más alta, cerca de la entrada a la casa del árbol.'],
  ['brincador', 'Agrabah', 'Bazar', 'En el centro del suelo.'],
  ['brincador', 'Agrabah', 'Cueva de las Maravillas', 'En la cámara silenciosa, justo delante de las escaleras.'],
  ['brincador', 'Monstruo', 'Boca', 'En la plataforma de lo alto de la roca grande, en el centro de la boca.'],
  ['brincador', 'Monstruo', 'Vientre 5', 'En el suelo, justo delante de la entrada inferior al Vientre 6.'],
  ['brincador', 'Monstruo', 'Garganta', 'En el centro de la sala.'],
  ['brincador', 'Bastión Hueco', 'Mazmorra', 'En el centro de la sala.'],
  ['brincador', 'Bastión Hueco', 'Muro del Emblema', 'En el balcón inferior, cerca de donde aterriza el elevador mágico grande.'],
  ['destructor', 'Ciudad de Paso', 'Distrito 1', 'Al final del callejón corto, detrás de la Tienda de Accesorios.', 'Abre el Callejón, el Hotel y la Casa de los Dálmatas.'],
  ['destructor', 'Ciudad de Paso', 'Callejón', 'En la rejilla del desagüe, al fondo del callejón.', 'Abre el Canal Secreto.'],
  ['destructor', 'Ciudad de Paso', 'Distrito 2', 'En la azotea de la Tienda Gizmo, junto a la pared del fondo.', 'Da acceso a la campana que revela la cerradura.'],
  ['destructor', 'Agrabah', 'Cueva de las Maravillas', 'En la Sala del Tesoro, delante de la estatua.'],
  ['destructor', 'Ciudad de Halloween', 'Mansión de Oogie Boogie', 'Bajo un arco junto a la mansión.', '', 'En Final Mix se movió aquí para que no se pierda al vencer a Oogie Boogie; en el original estaba dentro de la mansión.'],
  ['destructor', 'Bastión Hueco', 'Sala de Entrada', 'En el segundo piso, delante de la estatua de piedra con colmillos.', 'Rompe la estatua y aparece una pieza del emblema.'],
  ['acrobatico', 'Ciudad de Paso', 'Tienda de Accesorios', 'En el centro de la tienda.', 'Baja la escalera a la Tienda Moguri (síntesis).'],
  ['acrobatico', 'País de las Maravillas', 'Madriguera', 'Donde entráis al mundo la primera vez.'],
  ['acrobatico', 'País de las Maravillas', 'Sala Bizarra', 'En la chimenea.'],
  ['acrobatico', 'Coliseo del Olimpo', 'Puertas del Coliseo', 'A la izquierda de la entrada, delante de la clasificación de las copas.'],
  ['acrobatico', 'Selva Profunda', 'Nivel superior de la selva', 'Justo en el centro de la zona; cuesta verla por el follaje.'],
  ['acrobatico', 'Agrabah', 'Tienda', 'Delante de la estantería.'],
  ['acrobatico', 'Monstruo', 'Boca', 'En el techo del barco de Geppetto; necesitas Salto de Altura.'],
  ['acrobatico', 'País de Nunca-Jamás', 'Camarote', 'En el centro de la sala.', 'Abre el Camarote del Capitán.'],
  ['acrobatico', 'Bastión Hueco', 'Biblioteca', 'En el segundo piso, cerca de la mesa y del punto de guardado.'],
  ['forzudo', 'Ciudad de Paso', 'Casa de Merlín', 'Detrás de la casa, delante de la pila de cajas.'],
  ['forzudo', 'Coliseo del Olimpo', 'Portal', 'Junto a la piedra que Fil te reta a mover.', 'Revela la cerradura del Coliseo.'],
  ['forzudo', 'Agrabah', 'Cueva de las Maravillas', 'En la Sala Principal, delante del pilar.', 'Abre la Sala Oculta.'],
  ['forzudo', 'País de Nunca-Jamás', 'Bodega', 'En la puerta izquierda del nivel superior.', 'Abre una sala con, entre otras cosas, los cachorros 85-87.'],
  ['detector', 'Ciudad de Paso', 'Canal Secreto', 'En medio del pasaje, donde el túnel corto se une al principal.'],
  ['detector', 'País de las Maravillas', 'Bosque de Lotos', 'En la zona cerrada a la que se llega por el cuadro de la Sala Bizarra (enciende las lámparas junto al cuadro en blanco).'],
  ['detector', 'Coliseo del Olimpo', 'Puertas del Coliseo', 'En el centro de la zona.'],
  ['detector', 'Selva Profunda', 'Cueva del Corazón', 'Delante de la cerradura.'],
  ['detector', 'Agrabah', 'Cueva de las Maravillas (entrada)', 'En el centro del suelo.'],
  ['detector', 'Ciudad de Halloween', 'Colina de la Luna', 'A la izquierda de la entrada, junto a un trozo de muro roto.', 'Cachorros 67-69 (Final Mix).'],
  ['detector', 'Monstruo', 'Vientre 6', 'En la zona baja detrás del «escalón» más alto.'],
  ['detector', 'Atlántica', 'Palacio de Tritón', 'Debajo de la gran concha.'],
  ['detector', 'País de Nunca-Jamás', 'Barco pirata (cubierta)', 'En la popa del barco.', 'Cachorros 43-45 (Final Mix).'],
  ['detector', 'Bastión Hueco', 'Aguas Trepadoras', 'En el charco poco profundo donde Riku toma la llave espada.'],
];

// «Los récords» (guía de logros de Steam): basta con jugar estos minijuegos, sin puntuación mínima.
// `meta`: puntuación para el premio de Búho en el Bosque (Wiki ES y Destiny Islands), no hace falta para el logro.
export const RECORDS = [
  { id: 'arbol-miel', nombre: 'Árbol de la Miel', mundo: 'Bosque de los Cien Acres', meta: 'Premio de Búho: más de 100 puntos.', como: 'Protege a Pooh de las abejas mientras sube a los panales. Mejor sin Salto de Altura; si te caes, usa «Acudir».' },
  { id: 'bloquea-tigger', nombre: 'Bloquea a Tigger', mundo: 'Bosque de los Cien Acres', meta: 'Premio de Búho: más de 150 puntos.', como: 'Ponte debajo de Tigger para que rebote en ti y no chafe las zanahorias; «Acudir» te lleva a bloquearlo.' },
  { id: 'columpio-pooh', nombre: 'Columpio de Pooh', mundo: 'Bosque de los Cien Acres', meta: 'Premio de Búho: más de 40 (metros según la Wiki ES; yardas en la versión inglesa).', como: 'Empuja justo cuando Búho va a cerrar las alas.' },
  { id: 'tinaja-tigger', nombre: 'Tinaja de Tigger', mundo: 'Bosque de los Cien Acres', meta: 'Premio de Búho: terminar en menos de 30 segundos.' },
  { id: 'camino-lodoso', nombre: 'Camino Lodoso', mundo: 'Bosque de los Cien Acres', meta: 'Premio de Búho: terminar en menos de 5 minutos.' },
  { id: 'tobogan', nombre: 'Tobogán Selvático', mundo: 'Selva Profunda', como: 'Termina Selva Profunda y vuelve: se entra por el agujero del tronco hueco. Cinco recorridos; cada uno se abre al recoger toda la fruta del anterior.' },
  { id: 'lianas', nombre: 'Carrera de Lianas', mundo: 'Selva Profunda', como: 'Habla con la flor amarilla del suelo junto al punto de guardado, en la zona de las lianas.' },
  { id: 'coliseo-solo', nombre: 'Cualquier torneo en solitario', mundo: 'Coliseo del Olimpo', como: 'Juega una copa en el modo solo con Sora.' },
  { id: 'coliseo-crono', nombre: 'Cualquier torneo contrarreloj', mundo: 'Coliseo del Olimpo', como: 'Juega una copa en el modo contrarreloj.' },
];

// Páginas arrancadas del libro de Pooh (para abrir zonas del Bosque y su cerradura). Wiki ES y guía de Steam.
export const PAGINAS_POOH = [
  'Al entregar 51 cachorros a Pongo.',
  'En la sala oscura de la Cueva de las Maravillas (Agrabah).',
  'En el Vientre 6 de Monstruo.',
  'Examinando la estantería del laboratorio de Ciudad de Halloween.',
  'En la gruta de Ariel (Atlántica).',
];
