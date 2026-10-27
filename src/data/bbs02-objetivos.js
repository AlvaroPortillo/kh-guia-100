// Objetivos del Armario de Kingdom Hearts 0.2 Birth by Sleep (51) y recuerdos persistentes. A mano.
// Texto de cada objetivo: el del juego, tal como lo recoge la guía de trofeos de Laps4 (erratas corregidas).
// Cómo hacerlo y en qué partida: Laps4, redactado con palabras propias (Laps4 prohíbe copiar sus guías).
// Premio y ranura: KHWiki «Wardrobe (KH0.2)». Las prendas no tienen nombre en castellano en ninguna fuente (ni la Wiki ES ni guías
// en castellano; el menú del juego no los enseña hasta tenerlas): `p` guarda el nombre inglés y PRENDAS_ES, la traducción pedida
// por el usuario (27-10-2026), con la terminología de Disney y de KH en España.
// Ids de marca: bbs02.objetivo.<n>. Los recuerdos persistentes usan la marca de su objetivo.
export const FUENTES_OBJETIVOS_BBS02 = ['laps4Bbs02', 'khwikiArmario', 'khwikiRecuerdos'];

export const INTRO_OBJETIVOS_BBS02 = 'El Armario tiene 51 objetivos y cada uno da una prenda para Aqua. Muchos salen solos jugando; otros se hacen en un combate concreto (guarda antes) y cinco solo se pueden hacer en una Partida + en Maestro. Lo completado pasa de una partida terminada a la nueva, así que si se escapa alguno se puede empezar otra.';

// Cuándo conviene hacer cada objetivo (estrategia de dos partidas de Laps4).
export const CUANDO_BBS02 = {
  primera: { t: '1.ª partida', d: 'Durante la historia. Los acumulativos, si no salen, se terminan después cargando la partida terminada.' },
  final: { t: 'Partida terminada', d: 'Tras ver el final: carga la partida terminada. Ahí salen los 12 cofres nuevos y los recuerdos persistentes.' },
  plus: { t: 'Partida + · Maestro', d: 'Solo en una partida nueva empezada con los objetivos traspasados. Laps4 aconseja hacerla en Maestro, que además pide el 51. Maestro no sale al empezar la primera partida: aparece al terminar una en Principiante, Normal o Experto.' },
};

export const RANURAS_BBS02 = { cabeza: 'Cabeza', brazos: 'Brazos', espalda: 'Espalda', diseno: 'Diseño' };

export const ZONAS_OBJ_BBS02 = [
  { id: 'todas', nombre: 'En cualquier zona' },
  { id: 'aldea', nombre: 'Aldea fortificada' },
  { id: 'mundo-interior', nombre: 'Mundo interior' },
  { id: 'bosque', nombre: 'Bosque espinoso' },
  { id: 'profundidades', nombre: 'Profundidades de la oscuridad' },
  { id: 'islas', nombre: 'Islas del Destino' },
];

// n, t (texto del juego), z (zona), c (cuándo), guarda (se hace en un combate concreto: guarda antes), como, nota, p ([ranura, prenda]).
export const OBJETIVOS_BBS02 = [
  { n: 1, z: 'todas', c: 'primera', t: 'Derrota a 30 sombras.', como: 'Las Sombras salen por casi todo el Reino de la oscuridad. Lo que llevas de cada tipo se ve en la lista de objetivos.', p: ['cabeza', 'Figaro'] },
  { n: 2, z: 'todas', c: 'primera', t: 'Derrota a 45 aleteadores.', como: 'Salen en casi todas las zonas; el contador está en la lista de objetivos.', p: ['diseno', 'Coil (Pink)'] },
  { n: 3, z: 'todas', c: 'primera', t: 'Derrota a 40 pironúcleos.', como: 'Salen en casi todas las zonas; el contador está en la lista de objetivos.', p: ['cabeza', 'Cyber Antennae'] },
  { n: 4, z: 'todas', c: 'primera', t: 'Derrota a 30 neosombras.', como: 'Salen en casi todas las zonas; el contador está en la lista de objetivos.', p: ['cabeza', 'Antennae'] },
  { n: 5, z: 'todas', c: 'primera', t: 'Derrota a 20 hidronúcleos.', como: 'Salen en casi todas las zonas; el contador está en la lista de objetivos.', p: ['diseno', 'Mecha (Blue)'] },
  { n: 6, z: 'todas', c: 'primera', t: 'Derrota a 20 geonúcleos.', como: 'Son los únicos que solo aparecen en las Profundidades de la oscuridad. Si te faltan, vuelve allí con el teletransporte de un punto de guardado.', p: ['diseno', 'Classy (Yellow)'] },
  { n: 7, z: 'todas', c: 'final', t: 'Alcanzar nivel 60.', como: 'Lo normal es subir en la partida terminada, antes del jefe secreto. Recorre el Bosque espinoso entero acabando con todo y, desde el punto de guardado del final, teletranspórtate al principio: son unos dos niveles por vuelta.', p: ['brazos', 'Royal Pauldron'] },
  { n: 8, z: 'todas', c: 'final', t: 'Alcanzar nivel 70.', como: 'Igual que el 60: vueltas al Bosque espinoso en la partida terminada.', p: ['espalda', 'Astral Ornament'] },
  { n: 9, z: 'todas', c: 'final', t: 'Alcanzar nivel 80.', como: 'Es el nivel que Laps4 aconseja para el jefe secreto. Vueltas al Bosque espinoso en la partida terminada.', p: ['cabeza', "Venus's Tiara"] },
  { n: 10, z: 'todas', c: 'primera', t: 'Derrota a 5 sincorazón con la Onda postrera.', como: 'Bloquea un ataque y contraataca justo después con la Onda postrera. Hay que rematar así a cinco.', p: ['espalda', 'Flawless Wings'] },
  { n: 11, z: 'todas', c: 'primera', t: 'Derrota a 30 sincorazón con magia de fuego.', como: 'Remátalos con Piro. El contador está en la lista de objetivos.', p: ['espalda', 'Cyber Blades'] },
  { n: 12, z: 'todas', c: 'primera', t: 'Derrota a 30 sincorazón con magia de hielo.', como: 'Remátalos con Hielo. El contador está en la lista de objetivos.', p: ['espalda', 'Blades'] },
  { n: 13, z: 'todas', c: 'primera', t: 'Derrota a 50 sincorazón con magia de rayo.', como: 'Remátalos con Electro. El contador está en la lista de objetivos.', nota: 'Laps4 dice 50 sincorazón y KHWiki, 30.', p: ['brazos', 'Mystic Pauldron'] },
  { n: 14, z: 'todas', c: 'primera', t: 'Crea una pista con magia de hielo y recorre una larga distancia.', como: 'Lanza Hielo y deslízate por el raíl que deja. Hace falta suelo llano y largo; el mejor sitio es el camino al castillo, en la Aldea fortificada.', p: ['brazos', 'Flawless Arm Guards'] },
  { n: 15, z: 'todas', c: 'primera', t: 'Congela y aniquila al menos a 5 sincorazón.', como: 'Congela sincorazón con Hielo y acaba con ellos mientras siguen congelados. Puede salir sin buscarlo; si no, en el Mundo interior (al volver) hay un espejo con dos grupos de Sombras: Hielo y después Electro.', p: ['diseno', 'Grace (Purple)'] },
  { n: 16, z: 'todas', c: 'primera', t: 'Inflige daño a un sincorazón usando una magia a la que es vulnerable.', como: 'Lo más rápido: Hielo contra un Pironúcleo, de los primeros enemigos del juego.', p: ['brazos', 'Voltaic Arm Plate'] },
  { n: 17, z: 'todas', c: 'primera', t: 'Derrota a 5 sincorazón mientras estás en el aire.', como: 'Salta y remátalos en el aire. Los Aleteadores, que vuelan, son los más cómodos.', p: ['espalda', 'Radiant Ornament'] },
  { n: 18, z: 'todas', c: 'primera', t: 'Obtén la calificación Excelente 6 veces con Tiro certero.', como: 'Pulsa justo cuando el círculo que se cierra coincide con el fijo; es lo mismo que pide el logro Maestro del Tiro certero, pero seis veces.', nota: 'KHWiki dice que han de ser seis seguidas.', p: ['diseno', 'Diamond (White)'] },
  { n: 19, z: 'todas', c: 'primera', t: 'Derrota a 50 sincorazón usando un cambio de estilo.', como: 'Hila encantos y Siempre Juntos (este, solo con Mickey) cambian el estilo de Aqua. Cuentan los que derrotas mientras dura el cambio.', p: ['diseno', 'Diamond (Green)'] },
  { n: 20, z: 'todas', c: 'primera', t: 'Activa el comando Golpe de gracia de Hila encantos.', como: 'Llena la barra de situación con combos físicos y activa Hila encantos. En PC el Golpe de gracia aparece al momento; en PS4 había que llenar la barra otra vez.', p: ['diseno', 'Classy (Blue)'] },
  { n: 21, z: 'todas', c: 'primera', t: 'Equipa una prenda en cada ranura del armario y activa el comando Golpe de gracia de Hila encantos.', como: 'Primero pon una prenda en cada ranura (menú de pausa, Armario); después, el Golpe de gracia de Hila encantos como en el objetivo 20.', p: ['diseno', 'Ribbons'] },
  { n: 22, z: 'todas', c: 'primera', t: 'Equipa una prenda en una ranura del armario.', como: 'En el menú de pausa, Armario, equipa cualquier prenda. Sale en cuanto completes el primer objetivo.', p: ['diseno', 'Mecha (Pink)'] },
  { n: 23, z: 'aldea', c: 'primera', t: 'Golpea 20 farolas en Aldea fortificada.', como: 'Hay más de 20. Si no llegas en la primera visita, vuelve con el teletransporte: el contador sigue sumando.', p: ['diseno', 'Grace (Blue)'] },
  { n: 24, z: 'aldea', c: 'primera', t: 'Sube al punto más alto en Aldea fortificada.', como: 'Busca el punto más alto de la Aldea fortificada y sube hasta él.', p: ['espalda', 'Wings'] },
  { n: 25, z: 'aldea', c: 'primera', t: 'Encuentra una lluvia de estrellas en Aldea fortificada.', como: 'Está en la Aldea fortificada; Laps4 lo enseña solo en vídeo, sin describir el sitio.', p: ['brazos', 'Arm Guards'] },
  { n: 26, z: 'mundo-interior', c: 'primera', t: 'Derrota a todos los sincorazón de la sala en El Mundo interior.', como: 'Al llegar, entra en el primer espejo de la derecha y acaba con todos los enemigos.', p: ['diseno', 'Mecha (Yellow)'] },
  { n: 27, z: 'mundo-interior', c: 'primera', t: 'Resuelve el misterio del Mundo interior y gana el combate.', como: 'Primer espejo de la izquierda: golpea los cuatro candelabros hasta apagarlos y gana el combate que empieza.', p: ['diseno', 'Stitching'] },
  { n: 28, z: 'mundo-interior', c: 'primera', t: 'Resuelve el misterio del Mundo interior y obtén el objeto especial.', como: 'Segundo espejo de la derecha. Antes de entrar, fíjate en el reflejo: todos los cofres están abiertos menos uno. Dentro están todos cerrados; abre el que viste cerrado.', p: ['brazos', 'Arm Plate'] },
  { n: 29, z: 'mundo-interior', c: 'primera', t: 'Consigue las 7 gemas blancas de la mina donde trabajan los siete enanitos en El Mundo interior.', como: 'Entra en el espejo que refleja la mina de los enanitos y busca dentro las siete gemas blancas.', p: ['cabeza', 'Marie'] },
  { n: 30, z: 'mundo-interior', c: 'primera', t: 'Descubre el secreto del espejo ligado a las rocas misteriosas en El Mundo interior.', como: 'En el espejo de la mina hay que alinear tres rocas con el espejo para seguir. Llevan un dibujo: si lo alineas en el momento justo, sale el objetivo.', p: ['diseno', 'Lace (Crystal)'] },
  { n: 31, z: 'mundo-interior', c: 'primera', guarda: true, t: 'Ejecuta el golpe de gracia del comando Hila encantos contra la proyección de Aqua.', como: 'Contra la tercera Proyección de Aqua: deja para el final el espejo de la sala de pilares y guarda antes. En PC basta con llenar la barra durante el combate, activar Hila encantos y usar enseguida el Golpe de gracia. En PS4 había que llenarla dos veces, y Laps4 da un truco para entrar ya con Hila encantos: activa dos pilares, golpea el tercero sin activarlo, llena la barra con los enemigos de la sala sin usar el comando, cúrate, activa el pilar, recupera PM frente al espejo y activa Hila encantos justo antes de entrar. Si acaba el combate sin conseguirlo, carga y repite.', p: ['cabeza', 'Royal Tiara'] },
  { n: 32, z: 'bosque', c: 'primera', t: 'Derrota a los 3 Lados Oscuros en Bosque espinoso.', como: 'Son los tres pequeños del Camino escabroso. El tercero está escondido en una esquina del mapa donde vences al segundo. Si se te escapa, vuelve allí con el teletransporte.', p: ['diseno', 'Diamond (Blue)'] },
  { n: 33, z: 'bosque', c: 'primera', t: 'Destruye 50 ramas de hiedra en Bosque espinoso.', como: 'Las ramas cortan el paso y se rompen al avanzar; algunas solo con magia. Si no llegas, sal a otra zona y vuelve: el contador sigue.', p: ['diseno', 'Coil (White)'] },
  { n: 34, z: 'bosque', c: 'primera', t: 'Encuentra flores que representan a Flora, Fauna y Primavera en Bosque espinoso.', como: 'Son tres plantas, una roja, una verde y una azul. No están muy escondidas.', p: ['cabeza', 'Minnie Ears (Blue Bow)'] },
  { n: 35, z: 'profundidades', c: 'primera', t: 'Establece un nexo con el rey Mickey 5 veces.', como: 'Activa cinco veces el comando de situación Siempre Juntos, que solo sale con Mickey. Según Laps4 no está claro qué lo hace aparecer; parece que atacar al mismo enemigo que él o quedarse un rato sin atacar.', p: ['cabeza', 'Minnie Ears (Red Bow)'] },
  { n: 36, z: 'aldea', c: 'plus', guarda: true, t: 'Derrota a la Torre maldita con el comando golpe de gracia de Hila encantos en Aldea fortificada.', como: 'Tras los cinco engranajes, en el camino al castillo hay un punto de guardado: guarda ahí. Remata a la Torre Maldita con el Golpe de gracia de Hila encantos (en PC aparece nada más activarlo, así que guárdalo para cuando le quede poca vida). Si no lo consigues, carga y repite.', nota: 'KHWiki dice que el objetivo aparece al volver a la Aldea tras terminar el juego; Laps4, que solo se puede completar en Partida +.', p: ['cabeza', 'Cheshire Cat'] },
  { n: 37, z: 'aldea', c: 'final', t: 'Abre todos los cofres de Aldea fortificada.', como: 'Son 9: 5 en la primera visita y 4 que aparecen al cargar la partida terminada.', p: ['diseno', 'Coil (Yellow)'] },
  { n: 38, z: 'aldea', c: 'final', t: 'Encuentra recuerdos persistentes en Aldea fortificada.', como: 'Aparece al cargar la partida terminada, en los tejados (ver «Recuerdos persistentes», abajo).', p: ['espalda', 'Pulse Blades'] },
  { n: 39, z: 'mundo-interior', c: 'final', t: 'Abre todos los cofres de El Mundo interior.', como: 'Son 13: 8 en la primera visita y 5 que aparecen al cargar la partida terminada.', p: ['cabeza', 'Minnie Ears (White Bow)'] },
  { n: 40, z: 'mundo-interior', c: 'final', t: 'Encuentra recuerdos persistentes en El Mundo interior.', como: 'Aparece al cargar la partida terminada, sobre un pilar en el centro de los espejos.', p: ['brazos', "Warrior's Arm Plate"] },
  { n: 41, z: 'mundo-interior', c: 'plus', guarda: true, t: 'Derrota a la tercera proyección de Aqua sin recibir daño.', como: 'Si te dan una vez, déjate vencer y pulsa «Otra vez». Dos formas: entrar con Hila encantos activado (el truco del objetivo 31) y, tras cada ataque bloqueado, saltar y meter dos combos; o bloquear, contraatacar con Onda postrera y meter un solo combo (con dos, responde con bolas de hielo casi imposibles de parar). Cuando se multiplica, la de verdad es la que tiene varias barras de vida (Electro ayuda a encontrarla).', p: ['espalda', 'Lustrous Wings'] },
  { n: 42, z: 'mundo-interior', c: 'final', t: 'Atraviesa el espejo que aparece en el centro de los doce signos del Zodíaco en El Mundo interior y gana todos los combates.', como: 'Es el jefe secreto: estrategia en «Historia y jefes». Laps4 aconseja ir a nivel 80.', p: ['cabeza', 'Tiara'] },
  { n: 43, z: 'mundo-interior', c: 'final', t: 'Encuentra y restablece la luz de los doce signos del Zodíaco.', como: 'Abre los 12 cofres que aparecen al cargar la partida terminada y vuelve al Mundo interior: los signos del centro se iluminan y aparece el espejo del objetivo 42.', p: ['brazos', 'Pauldron'] },
  { n: 44, z: 'bosque', c: 'final', t: 'Abre todos los cofres de Bosque espinoso.', como: 'Son 12: 10 en la primera visita y 2 que aparecen al cargar la partida terminada.', p: ['diseno', 'Classy (White)'] },
  { n: 45, z: 'bosque', c: 'final', t: 'Encuentra recuerdos persistentes en Bosque espinoso.', como: 'Aparece al cargar la partida terminada, en una sala apartada tras el combate contra el Lado Oscuro.', p: ['cabeza', 'Pulse Antennae'] },
  { n: 46, z: 'bosque', c: 'final', t: 'Usa Enfilada para evitar recibir daño de los Lados Oscuros en Bosque espinoso.', como: 'En el tramo de raíles, salta para esquivar los primeros ataques de los Lados Oscuros. Donde lanzan dos casi seguidos, salta y bloquea en el aire para quedarte suspendida y evitar el segundo.', p: ['brazos', 'Lustrous Arm Guards'] },
  { n: 47, z: 'bosque', c: 'plus', guarda: true, t: 'Derrota al Lado Oscuro que protege el orbe en Bosque espinoso sin recibir ningún daño.', como: 'Si te dan, déjate vencer y pulsa «Otra vez». Llega hasta él sin que te toque ninguna bola. Sal del radio del puñetazo (o salta o bloquea) y usa Electro para sacar Electro +++ y limpiar las Sombras; devuelve las tres oleadas de bolas bloqueando; sigue el rastro negro cuando llueven bolas, porque dos no caen en el mismo sitio. En la segunda fase (apunta a la cabeza) añade los rayos: aléjate en cuanto se agache y esquívalos con Voltereta.', nota: 'Laps4 avisa de que la descripción del juego está mal; este es el texto corregido.', p: ['diseno', 'Lace (Floral)'] },
  { n: 48, z: 'profundidades', c: 'final', t: 'Abre todos los cofres de Profundidades de la oscuridad.', como: 'Son 6: 5 en la primera visita y 1 que aparece al cargar la partida terminada.', p: ['diseno', 'Grace (Pink)'] },
  { n: 49, z: 'profundidades', c: 'final', t: 'Encuentra recuerdos persistentes en Profundidades de la oscuridad.', como: 'Aparece al cargar la partida terminada, en la pared, al fondo de la zona inferior escondida.', p: ['espalda', 'Iron Ornament'] },
  { n: 50, z: 'profundidades', c: 'plus', guarda: true, t: 'Establece un nexo con el rey Mickey para derrotar a la Torre maldita en Profundidades de la oscuridad.', como: 'En el primer combate con Mickey, remata a la Torre Maldita con el golpe final de Siempre Juntos. Guarda antes y, si falla, carga y repite.', p: ['diseno', 'Polka Dots'] },
  { n: 51, z: 'islas', c: 'plus', t: 'Derrota a la Ola infernal en dificultad Maestro en Islas del Destino.', como: 'Sale al vencer al jefe final en Maestro (estrategia en «Historia y jefes»). Maestro se desbloquea al terminar una partida en otra dificultad.', p: ['diseno', 'Crisscross'] },
];

// Recuerdos persistentes: forma y lugar, de KHWiki; que salen al cargar la partida terminada, de Laps4.
export const RECUERDOS_BBS02 = [
  { obj: 38, zona: 'Aldea fortificada', forma: 'Un zapatito de cristal de neón', donde: 'En los tejados.' },
  { obj: 40, zona: 'Mundo interior', forma: 'Una manzana roja', donde: 'Sobre un pilar, en el centro de los espejos.' },
  { obj: 45, zona: 'Bosque espinoso', forma: 'Una rueca naranja', donde: 'En una sala apartada, después de vencer al Lado Oscuro.' },
  { obj: 49, zona: 'Profundidades de la oscuridad', forma: 'Un corazón rosa', donde: 'En la pared, al fondo de la zona inferior escondida.' },
];
export const INTRO_RECUERDOS_BBS02 = 'Son cuatro símbolos dibujados por el escenario, uno por zona, y solo aparecen al cargar la partida terminada. Cada uno completa un objetivo, así que se marcan con él.';

export const INTRO_ARMARIO_BBS02 = 'Las prendas se equipan en el menú de pausa, Armario, en cuatro ranuras: cabeza, brazos, espalda y diseño (además del color del traje). Con una en cada ranura salta el logro «A la moda» y se puede hacer el objetivo 21. El diseño Liso («Plain») viene de serie. Marca las que ya tengas: cada prenda comparte casilla con el objetivo que la da.';

// Traducción propia de las prendas (sin fuente en castellano). Clave: nombre de KHWiki.
export const PRENDAS_ES = {
  Tiara: 'Tiara', 'Royal Tiara': 'Tiara real', "Venus's Tiara": 'Tiara de Venus',
  Antennae: 'Antenas', 'Pulse Antennae': 'Antenas de pulso', 'Cyber Antennae': 'Antenas cíber',
  Marie: 'Marie', Figaro: 'Fígaro', 'Cheshire Cat': 'Gato de Cheshire',
  'Minnie Ears (Red Bow)': 'Orejas de Minnie (lazo rojo)', 'Minnie Ears (Blue Bow)': 'Orejas de Minnie (lazo azul)', 'Minnie Ears (White Bow)': 'Orejas de Minnie (lazo blanco)',
  Pauldron: 'Hombrera', 'Mystic Pauldron': 'Hombrera mística', 'Royal Pauldron': 'Hombrera real',
  'Arm Plate': 'Brazal', "Warrior's Arm Plate": 'Brazal de guerrero', 'Voltaic Arm Plate': 'Brazal voltaico',
  'Arm Guards': 'Guardabrazos', 'Lustrous Arm Guards': 'Guardabrazos relucientes', 'Flawless Arm Guards': 'Guardabrazos impecables',
  'Iron Ornament': 'Ornamento de hierro', 'Radiant Ornament': 'Ornamento radiante', 'Astral Ornament': 'Ornamento astral',
  Blades: 'Cuchillas', 'Pulse Blades': 'Cuchillas de pulso', 'Cyber Blades': 'Cuchillas cíber',
  Wings: 'Alas', 'Lustrous Wings': 'Alas relucientes', 'Flawless Wings': 'Alas impecables',
  'Classy (Yellow)': 'Elegante (amarillo)', 'Classy (Blue)': 'Elegante (azul)', 'Classy (White)': 'Elegante (blanco)',
  'Mecha (Pink)': 'Mecha (rosa)', 'Mecha (Yellow)': 'Mecha (amarillo)', 'Mecha (Blue)': 'Mecha (azul)',
  'Grace (Blue)': 'Gracia (azul)', 'Grace (Purple)': 'Gracia (morado)', 'Grace (Pink)': 'Gracia (rosa)',
  'Diamond (White)': 'Rombos (blanco)', 'Diamond (Blue)': 'Rombos (azul)', 'Diamond (Green)': 'Rombos (verde)',
  'Coil (White)': 'Espiral (blanco)', 'Coil (Yellow)': 'Espiral (amarillo)', 'Coil (Pink)': 'Espiral (rosa)',
  Stitching: 'Costuras', Crisscross: 'Entrecruzado', 'Lace (Crystal)': 'Encaje (cristal)', 'Lace (Floral)': 'Encaje (floral)',
  'Polka Dots': 'Lunares', Ribbons: 'Lazos',
};

