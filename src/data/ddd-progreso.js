// Progreso, minijuegos, Realidad Alterna, Portales Nexo y habilidades de KH Dream Drop Distance. A mano.
// Fuentes: guía de trofeos de Gamerbase (datos y consejos, con palabras propias) y KHWorld (portales). Wiki ES para el Naiperama.
// Nombres sin versión en castellano con fuente van en inglés entre «».

// ---------- Tránsitos: objetivo de la calificación A (Gamerbase) ----------
export const TRANSITOS_DDD = [
  { id: 'ciudad-de-paso', mundo: 'Ciudad de Paso', sora: ['750.000', '1\' 15"'], riku: ['420.000', '1\' 15"'] },
  { id: 'ciudad-de-las-campanas', mundo: 'La Ciudad de las Campanas', sora: ['1.200.000', '1\' 20"'], riku: ['140.000', '1\' 30"'] },
  { id: 'paraiso-del-bromista', mundo: 'El Paraíso del Bromista', sora: ['400.000', '1\' 15"'], riku: ['730.000', '1\' 20"'] },
  { id: 'la-red', mundo: 'La Red', sora: ['100.000', '1\' 25"'], riku: ['30.000', '0\' 50"'] },
  { id: 'pais-de-los-mosqueteros', mundo: 'El País de los Mosqueteros', sora: ['650.000', '1\' 15"'], riku: ['100.000', '3\' 20"'] },
  { id: 'sinfonia-del-brujo', mundo: 'Sinfonía del Brujo', sora: ['1.000.000', '1\' 15"'], riku: ['800.000', '1\' 25"'] },
  { id: 'mundo-inexistente', mundo: 'El Mundo Inexistente', sora: ['140.000', '2\' 00"'], riku: ['1.000.000', '1\' 05"'] },
];
export const NOTA_TRANSITOS = 'Cada celda es la puntuación mínima y el tiempo máximo para sacar la A. Gamerbase aconseja ir lo más rápido posible pulsando en cuanto puedas, evitar los golpes (te frenan) y coger solo los premios necesarios. Sora tiene además un tránsito adicional tras los créditos. Rango A en todos los tránsitos da la Llave Espada Inmersia.';

// ---------- Lo que cuenta para el 100 % (Perfección absoluta) ----------
// `marca`: id propio (ddd.cien.<id>) si no tiene otra casilla en la guía; `seccion`: dónde está su lista.
export const CIEN_DDD = [
  { id: 'fin-secreto', t: 'Completar la historia y ver el final secreto', marca: true, seccion: 'progreso' },
  { id: 'cofres-sora', t: 'Abrir todos los cofres (Tesoros) con Sora', marca: true, seccion: 'coleccion', nota: 'Informes > Tesoros del juego muestra cuáles faltan; los cofres están numerados y los mapas por mundo mantienen la numeración.' },
  { id: 'cofres-riku', t: 'Abrir todos los cofres (Tesoros) con Riku', marca: true, seccion: 'coleccion' },
  { id: 'formulas', t: 'Conseguir todas las fórmulas', seccion: 'lucientes' },
  { id: 'comandos', t: 'Conseguir todos los comandos', seccion: 'coleccion' },
  { id: 'juguetes', t: 'Conseguir todos los objetos para Lucientes (Globo, Tonel, Gologafas, tintes y galletas)', seccion: 'coleccion' },
  { id: 'oniritas', t: 'Conseguir todas las oniritas', seccion: 'coleccion' },
  { id: 'creados', t: 'Crear un Luciente de cada tipo', seccion: 'lucientes' },
  { id: 'julius-sora', t: 'Vencer a Julius con Sora', marca: true, seccion: 'historia' },
  { id: 'julius-riku', t: 'Vencer a Julius con Riku', marca: true, seccion: 'historia' },
  { id: 'portales', t: 'Completar los portales especiales y secretos con los dos personajes', seccion: 'portales' },
  { id: 'transitos', t: 'Rango A en todos los tránsitos con los dos personajes', seccion: 'progreso' },
  { id: 'naiperama', t: 'Llegar al nivel 20 del Naiperama (una estrella en cada copa)', seccion: 'minijuegos' },
  { id: 'llaves', t: 'Conseguir todas las Llaves Espada con los dos personajes', seccion: 'coleccion' },
  { id: 'nexos', t: 'Hacer al menos una vez cada Fusión Nexo y cada Nexo dual con Sora y con Riku', seccion: 'lucientes' },
  { id: 'realidad', t: 'Derrotar al menos un enemigo con cada tipo de Realidad Alterna', seccion: 'realidad' },
  { id: 'acrobata', t: 'Derrotar al menos un enemigo con cada comando acrobático', seccion: 'realidad' },
  { id: 'minijuegos', t: 'Jugar a todos los minijuegos (Globo, Tonel, Gologafas y la moto de luz con Riku)', seccion: 'minijuegos' },
];
export const NOTA_CIEN = 'Gamerbase (guía de trofeos, «Perfección absoluta»): para el 100 % de historia, de combate y de objetos hay que cumplir todo esto. El porcentaje de cada uno se ve en Informes, en el menú principal. Las guías no coinciden en cuál va con cuál: Laps4 y Guías Xamónicas atan «Luchador curtido» a cosas distintas (vencer a todos los Lucientes, el jefe secreto, los portales especiales, el nivel 20 del Naiperama).';

export const FINAL_SECRETO_DDD = {
  trofeos: [['Principiante', '13 trofeos del juego'], ['Normal', '7 trofeos del juego'], ['Experto', '5 trofeos del juego'], ['Maestro', 'Terminar el juego']],
  preguntas: ['Sí, he perdido algo importante', 'Un amigo importante', 'Para devolver aquello que es importante'],
  nota: 'No hace falta completar los trofeos internos del juego: solo el número indicado, que ves en Informes. Si los obtienes después del jefe final, o fallas el tránsito final de Sora tras los créditos, puedes ver el final secreto o repetir el tránsito desde Escenas > Créditos sin volver a pelear con el jefe final (siempre que contestaras bien las tres preguntas).',
};

// ---------- Naiperama y minijuegos ----------
export const NAIPERAMA_DDD = {
  texto: 'El Naiperama es el juego de cartas de DDD. Para el nivel 20 hay que sacar la calificación de estrella en todas las copas, lo que desbloquea objetos en la tienda de Medallas y la Llave Espada Dulcesueños (que se da al completar todas las copas, sin necesidad de estrella; para el segundo personaje basta repetir la ronda final de la última copa).',
  consejo: 'Para la estrella conviene ganar sin perder casi vida. Un truco de Gamerbase: un Luciente con la habilidad Megafulgor (Rextiriano o Draconte) daña a los tres Lucientes rivales a la vez. En la última copa llegó a llevar dos.',
};
export const MINIJUEGOS_DDD = [
  { id: 'globo', nombre: 'Globo', logro: 'ACH_43', donde: 'Menú Lucientes, con el juguete Globo', t: '200 puntos o más. Los globos se explotan rozando la pantalla táctil; si esperas a que el globo esté muy cerca (las flechas cambian de color y sale «Estupendo»), vale 3 puntos.' },
  { id: 'tonel', nombre: 'Tonel', logro: 'ACH_44', donde: 'Menú Lucientes, con el juguete Tonel', t: '400 puntos o más. Los Lucientes van en burbujas, como en un pinball: golpéalos hacia las flores amarillas, los cofres o las bolas rojas, y usa las corrientes de agua. Mantén al menos dos en juego y recoge las esferas rojas.' },
  { id: 'gologafas', nombre: 'Gologafas', logro: 'ACH_45', donde: 'Menú Lucientes, con el juguete Gologafas', t: '800 puntos o más. Lanza caramelos rosas o azules según lo que pida cada Luciente (10 a 30 puntos según su velocidad). Las cajas de caramelos satisfacen de golpe a los que están cerca.' },
  { id: 'moto', nombre: 'Moto de luz', logro: 'ACH_42', donde: 'La Red, zona Ciudad, con Riku (vehículo de transporte)', t: '1000 puntos o más. No sale durante la historia: vuelve con Riku. Elimina a todos los enemigos y cambia entre atacar de frente o por detrás.' },
];
export const NAIPERAMA_LOGROS_DDD = ['ACH_39', 'ACH_40', 'ACH_41'];

// ---------- Realidad Alterna ----------
// `mundo`: dónde se usa; `ganar`: lo que pide el logro; `id` para las marcas.
export const REALIDAD_DDD = [
  { id: 'tirachinas', nombre: 'Tirachinas', mundo: 'Ciudad de Paso', logro: 'ACH_54', t: 'Pulsa los dos botones indicados cuando veas el círculo rosa, sobre un barril o un enemigo. Hay un barril con 5 enemigos en la plaza del Naiperama, subiendo las escaleras de enfrente: acércate y actívalo deprisa.' },
  { id: 'lazo-sacro', nombre: 'Lazo sacro', mundo: 'La Ciudad de las Campanas', logro: 'ACH_55', t: 'Se activa sobre las esferas blancas del escenario. El mejor sitio es la plaza delante de la catedral, con muchos puntos para el lazo.' },
  { id: 'descifrado', nombre: 'Descifrado', mundo: 'La Red', logro: 'ACH_56', t: 'Se activa sobre un enemigo o elementos del escenario y aparece una pantalla donde activas un comando con cuatro botones. Hay que activar los siete de la lista de abajo.' },
  { id: 'explota-burbujas', nombre: 'Explota burbujas', mundo: 'El Paraíso del Bromista', logro: 'ACH_57', t: 'Apareces encima de una burbuja que puedes estallar, o que absorbe a más enemigos al pasar por encima. Las Entrañas de Monstruo son un buen sitio por la cantidad de enemigos.' },
  { id: 'historieta', nombre: 'Historieta', mundo: 'El País de los Mosqueteros', logro: 'ACH_58', t: 'Salen viñetas con flechas: mueve el joystick izquierdo en la dirección de la viñeta que quieras activar. Hay que activar las cuatro de la lista de abajo.' },
  { id: 'golpe-de-ritmo', nombre: 'Golpe de ritmo', mundo: 'Sinfonía del Brujo', logro: 'ACH_59', t: 'Hay que derrotar a 4 enemigos en un turno. La última zona antes de la Arboleda Dorada es buena: salen 5 enemigos débiles y la secuencia no es complicada; si fallas, ve a la Arboleda y vuelve.' },
  { id: 'fantasia-dual', nombre: 'Fantasía dual / Ilusión dual', mundo: 'El Mundo Inexistente', logro: 'ACH_60', t: 'Sobre un enemigo: corta todas las cadenas de un solo golpe, tres veces seguidas (hay que activarla tres veces y cortarlas cada vez). No hay tiempo límite: espera a que los eslabones más claros se alineen.' },
];
export const NOTA_REALIDAD = 'Varias Llaves Espada facilitan activar la Realidad Alterna si te cuesta con un enemigo. Para el 100 % de la guía hay que derrotar al menos un enemigo con cada tipo.';
export const DESCIFRADO_DDD = [
  { n: '«Moving Spark»', d: 'En enemigos.' }, { n: '«Switch Target»', d: 'En enemigos y torretas.' }, { n: '«Prize Box»', d: 'En enemigos.' },
  { n: '«Auto Destruct»', d: 'En torretas.' }, { n: '«Prize Shot»', d: 'En torretas.' }, { n: '«Transport»', d: 'En los vehículos de transporte.' },
  { n: '«Unlock»', d: 'En un panel de control.' },
];
export const HISTORIETA_DDD = [
  { n: 'Mickey con Sora / Riku', d: 'Ataque de dos golpes.' }, { n: 'Donald con Sora / Riku', d: 'Ataque que suelta Platines y gotas de Sopor.' },
  { n: 'Goofy con Sora / Riku', d: 'Ataque que suelta orbes de salud.' }, { n: 'Mickey, Donald y Goofy con Sora / Riku', d: 'Ataque fuerte.' },
];

// ---------- Portales Nexo: 7 objetivos de bonificación (ACH_68) ----------
export const NEXO_OBJETIVOS_DDD = [
  'Completa el portal en menos de 20 segundos.', 'Complétalo sin usar comandos.', 'Bloquea 3 ataques.', 'Realiza 3 contraataques.',
  'Realiza 10 ataques mientras estás en una Fusión Nexo.', 'Realiza 3 ataques acrobáticos.', 'No seas golpeado más de dos veces.',
];
export const NOTA_NEXO_OBJ = 'Cada vez que interactúas con un Portal Nexo sale un objetivo de bonificación. Para el logro hay que superar al menos uno de cada tipo.';

// ---------- Habilidades de «Habilidad máxima» (ACH_53) ----------
export const HABILIDADES_DDD = {
  apoyo: ['Combo + (×3)', 'Combo aéreo + (×3)', 'Maestro de combos', 'EXP ↑', 'EXP al andar', 'Aspirar daño', 'Último estertor', 'Una vez más', 'Libra', 'Hoja sana', 'Atracción (×5)'],
  lucientes: ['Nexo crítico', 'Apoyo ↑ (×3)', 'Último sueño'],
  nota: 'Hay que desbloquear y activar estas habilidades (las demás no hacen falta). En el menú Habilidades, al elegir una, el juego muestra qué Lucientes la tienen en su Nexario. Se pueden importar los Lucientes a una partida nueva en Experto o Maestro: empiezan a nivel 1.',
};

// ---------- Textos de las secciones ----------
export const INTRO_PORTALES_DDD = 'Cada mundo tiene 6 portales especiales por personaje (3 en El Mundo Inexistente) y un portal secreto que se abre al terminar el juego. Los logros de «Campeones…» piden completar todos los de un mundo con Sora y con Riku, y el 100 % del juego, también los secretos.';
export const COMO_PORTALES_DDD = [
  { t: 'Qué portal está abierto', d: 'En la pantalla de pronóstico (Forecast) del menú Start y del mapamundi aparece la silueta de un Luciente: es el del portal activo. Algunos mundos tienen dos portales con el mismo Luciente, así que a veces hay que mirar en más de un sitio. Al completarlo, la silueta muestra al Luciente con «¡Hecho!».' },
  { t: 'Cómo cambiarlo', d: 'Solo puedes completar un portal por mundo cada vez que caes en Sopor. Para que cambie, hay que cambiar de personaje (a mano o automáticamente). El portal 6 (y el 3 de El Mundo Inexistente) no aparece hasta completar los anteriores.' },
  { t: 'Qué hay que hacer', d: 'Basta con interactuar con el portal y eliminar a todos los Lucientes que salgan: el objetivo de bonificación no es obligatorio. Dan oniritas «Fantasía» y objetos. Completar todos los de un personaje da la Llave Espada Quitapenas.' },
];
export const NOTA_PORTALES_DDD = 'Los lugares y los Lucientes están en la guía de KHWorld en inglés. Los Lucientes se han emparejado con su nombre en castellano; los lugares sin nombre en castellano con fuente van en inglés entre «». Los objetivos de bonificación son orientativos: no hacen falta para los logros de portales.';

export const INTRO_LUCIENTES_DDD = 'Los Lucientes son los Oníridos aliados. Se crean con oniritas a partir de una fórmula, se entrenan con juguetes y se desarrollan en su Nexario. Los logros de esta sección piden formar un grupo, criar uno de clase ★, subir la afinidad, completar un Nexario y activar las habilidades de «Habilidad máxima».';
export const NOTA_LUCIENTES_DDD = 'Cada ficha dice cómo se consigue la fórmula (Gamerbase, anexo) y, si la guía de KHWorld la trae con nombres que se pueden emparejar con certeza, las recetas posibles. «Creado» sirve para el 100 %: hay que crear un Luciente de cada tipo. Los nombres en inglés entre «» son los de KHWiki.';

export const INTRO_COLECCION_DDD = 'Los coleccionables que piden «Coleccionista de objetos», «de comandos», «de fórmulas» (en la sección Lucientes) y «de oniritas», más las Llaves Espada, que también cuentan para el 100 %.';
export const NOTA_COMANDOS_DDD = 'Algunos comandos solo se consiguen como recompensa al entrar en Sopor. Muchos salen desarrollando el Nexario de un Luciente, en las tiendas Moguri, en la tienda de Medallas del Naiperama o en cofres de un mundo concreto.';
export const NOTA_LLAVES_DDD = 'Cada personaje tiene 13 Llaves Espada. Se anota por personaje: cuando dice «Sora/Riku», hay que conseguirla con los dos.';
export const NOTA_ONIRITAS_DDD = 'Hay 36 oniritas (17 tipos en tres clases: Ensueño, Ilusión y Fantasía; no todas las combinaciones existen). Se consiguen de cuatro maneras: las sueltan algunos Terrores al ser derrotados (el tipo depende de la especie y la clase es aleatoria), en cofres, en las tiendas Moguri (las rebajas traen oniritas exclusivas) y como premio en los Portales Nexo.';
export const HUECOS_DDD = [
  'Cofres (Tesoros): las guías en castellano solo traen los mapas por mundo como imágenes, sin lista. «Coleccionista de objetos» pide abrir todos los de Sora y Riku; en Informes > Tesoros del juego ves cuáles faltan y están numerados.',
  'Objetos generales (pociones, elixires…): no hay lista completa con fuente; se encuentran en cofres y tiendas.',
  'Recuerdos: no hay lista en las guías. Se ven en Mementos, en el menú principal, y basta con entrar a cada uno («Nostalgia»).',
  'Tiendas Moguri: no hay lista con ubicaciones. Hay que comprar algo en cada una, con cada personaje («Cliente fiel»).',
];
