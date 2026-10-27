// Minijuegos y misiones de KH II Final Mix: lo que piden los apartados «Minijuegos» y «Misiones» del diario de Pepito. A mano.
// Lista y requisitos: guía de Steam «KH2FM 100 %» (inglés, apartados Minigame Entries y Mission Entries).
// Nombres y consejos: guía de logros en castellano de Steam (apartado Misiones y Minijuegos); canciones de Atlántica, blog de Joakokh.
// Cada actividad: `juego` = entrada del apartado Minijuegos (se cumple al jugarlo una vez); `retos` = misiones del diario.
// Ids: kh2fm.minijuego.<id> y kh2fm.mision.<id>. Las setas usan kh2fm.seta.<n> para su puntuación (la que pide el logro), las
// Esencias intangibles kh2fm.esencia.<id> y las réplicas kh2fm.replica.<id>: así las comparte la sección Jefes.
export const FUENTES_MINI_KH2FM = {
  joakokhKh2: { nombre: 'Blog de Joakokh — Guía de Kingdom Hearts II (en castellano)', url: 'http://joakokh.blogspot.com/2011/02/guia-kingdom-hearts-ii.html' },
};

export const INTRO_MINI_KH2FM = 'Para «Fan de los minijuegos» basta con jugar a todos una vez. «Misión: Posible» es de los logros más difíciles: pide superar la puntuación de cada misión del diario. La guía en castellano recomienda tener el nivel, las fusiones, las invocaciones y la magia al máximo.';

const RIVALES = ['Xemnas', 'Xigbar', 'Xaldin', 'Vexen', 'Lexaeus', 'Zexión', 'Saïx', 'Axel', 'Demyx', 'Luxord', 'Marluxia', 'Larxene', 'Roxas'];

// Las setas: número, mundo y puntuación que pide el diario.
const seta = (n, reto) => ({ id: `seta-${n}`, nombre: `Micorganización XIII: N.º ${n}`, juego: true, seta: n, retos: [{ t: reto, seta: n }], consejo: 'Cómo vencerla, en la sección Jefes y en el logro «Micólogo experto».' });

export const MINIJUEGOS_KH2FM = [
  {
    mundo: 'villa-crepusculo', nombre: 'Villa Crepúsculo', items: [
      { id: 'esencia-lexaeus', nombre: 'Examina la Esencia intangible', retos: [{ t: 'Examinar la Esencia intangible (Lexaeus, en el Solar Deportivo)', esencia: 'lexaeus' }] },
      { id: 'cartero', nombre: 'Cartero', juego: true, retos: [{ t: 'Completarlo en menos de 14 segundos' }], consejo: 'Muy fácil.' },
      { id: 'cuesta-arriba', nombre: 'Cuesta arriba', juego: true, retos: [{ t: 'Completarlo en menos de 15 segundos' }], consejo: 'Desactiva Combo +1 y las habilidades de ataque, activa Combo Negativo y equipa Fenrir.' },
      { id: 'fanfarroneria', nombre: 'Fanfarronería', juego: true, retos: [{ t: 'Completarlo con 100 puntos o más' }], consejo: 'Al revés que Cuesta arriba: activa los ataques y Combo +1. Puedes equipar Emblema Fatal, aunque da igual el arma.' },
      { id: 'pegar-carteles', nombre: 'Pegar carteles', juego: true, retos: [{ t: 'Completarlo en menos de 30 segundos' }], consejo: 'Necesitas el Planeador de la Forma Final (al menos nivel 2). Nada más empezar, ve recto y empieza por los carteles de la derecha.' },
      { id: 'para-zumbidos', nombre: 'Para-zumbidos', juego: true, retos: [{ t: 'Completarlo en menos de 10 segundos' }], consejo: 'Usa Magneto++.' },
      { id: 'fuera-basura', nombre: '¡Fuera basura!', juego: true, retos: [{ t: 'Completarlo con menos de 6 puntos' }], consejo: 'Como Cuesta arriba: golpea la basura para que choque con otra o empújala para que queden juntas.' },
      { id: 'struggle-setzer', nombre: 'Struggle: Setzer', retos: [{ t: 'Jugarlo una vez' }, { t: 'Ganar con 150 puntos o más' }], consejo: 'Para luchar contra Setzer hay que ganar 10 veces a Hayner (muy fácil).' },
      { id: 'struggle-seifer', nombre: 'Struggle: Seifer', retos: [{ t: 'Jugarlo una vez' }, { t: 'Ganar con 200 puntos' }], consejo: 'Para luchar contra Seifer hay que ganar 10 veces a Setzer. El logro «Leyenda del Struggle» pide quitarle las 200 esferas.' },
      { id: 'delirio-callejero', nombre: 'Delirio callejero', juego: true, retos: [{ t: 'Terminar con 1000 puntos o más' }], consejo: 'Habla con la chica de la camisa blanca, cerca de la rampa del Cartero. Sube deslizándote por el costado de las escaleras y del puente; al final del puente, salta y haz giros de 360° hasta tocar el suelo. Repite.' },
      seta('VII', 'Completarlo en menos de 10 segundos'),
      seta('VIII', 'Completarlo con 85 puntos o más'),
      seta('XII', 'Completarlo con 40 puntos o más'),
    ],
  },
  {
    mundo: 'vergel-radiante', nombre: 'Bastión Hueco / Vergel Radiante', items: [
      { id: 'tres-chicas', nombre: 'Vuelve a ver a las tres chicas', retos: [{ t: 'Volver a ver a Yuna, Rikku y Paine' }], consejo: 'Seguramente lo consigas en la historia; están en el Postigo.' },
      { id: 'sefirot', nombre: 'Encuentra a Sefirot otra vez', retos: [{ t: 'Volver a encontrar a Sephiroth' }], consejo: 'Al fondo de donde luchaste contra los 1000 sincorazón.' },
      { id: 'estilo-libre', nombre: 'Estilo libre', juego: true, retos: [{ t: 'Terminar con 200 puntos o más' }], consejo: 'Habla con McPato. Deslízate, salta y haz giros de 360° en el aire.' },
      {
        id: 'gruta', nombre: 'Gruta de la Evocación', retos: [
          { t: 'Entrar en la Gruta de la Evocación' }, { t: 'Investigar lo más profundo de la gruta' },
          ...RIVALES.map((r) => ({ t: `Volver a luchar contra ${r}`, replica: r.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '') })),
        ],
        consejo: 'Entra por el agujero del Postigo. Hacen falta las formas al máximo para superar los obstáculos: usa la forma del color de cada esfera. En la sala final están las réplicas de la Organización XIII; si sigues avanzando, se abre un atajo de vuelta.',
      },
      seta('IX', 'Completarlo con 75 puntos o más'),
      { ...seta('XIII', 'Retarla a duelo (tras satisfacer a las otras doce)'), juego: false },  // no sale en el apartado Minijuegos
    ],
  },
  {
    mundo: 'castillo-de-bestia', nombre: 'Castillo de Bestia', items: [
      { id: 'esencia-marluxia', nombre: 'Examina la Esencia intangible', retos: [{ t: 'Examinar la Esencia intangible (Marluxia, en el Cuarto de Bestia)', esencia: 'marluxia' }] },
      seta('III', 'Completarlo con 450 puntos o más'),
    ],
  },
  {
    mundo: 'coliseo-del-olimpo', nombre: 'Coliseo del Olimpo', items: [
      { id: 'esencia-zexion', nombre: 'Examina la Esencia intangible', retos: [{ t: 'Examinar la Esencia intangible (Zexión, en la Cámara interior)', esencia: 'zexion' }] },
      { id: 'entrenamiento-fil', nombre: 'Entrenamiento de Fil', juego: true, retos: [{ t: 'Probar el modo maníaco' }, { t: 'Completarlo con 1000 puntos o más' }], consejo: 'Habla con Fil. Rompe urnas hasta que aparezca una grande; ponte detrás alineado con las pequeñas y golpéala con un remate: saldrá disparada y romperá las pequeñas, con puntos extra.' },
      { id: 'inf-dolor-panico', nombre: 'Infiernódromo: Dolor y Pánico', juego: true, retos: [{ t: 'Ganar con 2000 puntos o más' }], consejo: 'Basta con completar la copa.' },
      { id: 'inf-cerbero', nombre: 'Infiernódromo: Cerbero', juego: true, retos: [{ t: 'Ganar con 1000 puntos o más' }], consejo: 'Basta con completar la copa.' },
      { id: 'inf-titan', nombre: 'Infiernódromo: Titán', juego: true, retos: [{ t: 'Ganar con 5000 puntos o más' }], consejo: 'Llave espada Lámpara Mágica y el límite de Stitch para puntos extra.' },
      { id: 'inf-diosa', nombre: 'Infiernódromo: Diosa del Destino', juego: true, retos: [{ t: 'Ganar con 3000 puntos o más' }], consejo: 'Llave espada Lámpara Mágica y el límite de Stitch para puntos extra.' },
      { id: 'par-dolor-panico', nombre: 'Combates Paradoja: Dolor y Pánico', juego: true, retos: [{ t: 'Ganar con 2500 puntos o más' }], consejo: 'Usa límites para completarla más fácilmente.' },
      { id: 'par-cerbero', nombre: 'Combates Paradoja: Cerbero', juego: true, retos: [{ t: 'Ganar con 1300 puntos o más' }], consejo: 'Usa Electro++ con la Forma Final.' },
      { id: 'par-titan', nombre: 'Combates Paradoja: Titán', juego: true, retos: [{ t: 'Ganar con 10.000 puntos o más' }], consejo: 'Llave espada Lámpara Mágica y el límite de Stitch para puntos extra.' },
      { id: 'par-hades', nombre: 'Combates Paradoja: Hades', juego: true, retos: [{ t: 'Ganar con 15.000 puntos o más' }], consejo: 'Llave espada Lámpara Mágica y el límite de Stitch para puntos extra.' },
      seta('VI', 'Completarlo en menos de 45 segundos'),
    ],
  },
  {
    mundo: 'agrabah', nombre: 'Agrabah', items: [
      { id: 'abismo-desafios', nombre: 'Vuelve a Abismo de los Desafíos', retos: [{ t: 'Repetir el Abismo de los Desafíos de la Cueva de las Maravillas' }], consejo: 'Toca el letrero del fondo de la Cueva de las Maravillas.' },
      { id: 'esencia-vexen', nombre: 'Examina la Esencia intangible', retos: [{ t: 'Examinar la Esencia intangible (Vexen, en la Tienda del mercader)', esencia: 'vexen' }] },
      { id: 'alfombra', nombre: 'Alfombra Mágica', juego: true, retos: [{ t: 'Terminar con 65 puntos o más' }], consejo: 'Habla con la alfombra en las Puertas del palacio para ir a las Ruinas. Entra en la torre hasta el final y toca la pared. Fenrir y Combo Negativo acaban rápido con los enemigos.' },
      { id: 'patin-arena', nombre: 'Patín de arena', juego: true, retos: [{ t: 'Terminar con 10 puntos o más' }], consejo: 'Muy fácil: toca todas las luces lo más rápido posible.' },
      seta('V', 'Completarlo en menos de 10 segundos'),
    ],
  },
  {
    mundo: 'bosque-de-los-cien-acres', nombre: 'Bosque de los Cien Acres', items: [
      { id: 'rescate-tormentoso', nombre: 'Un rescate tormentoso', juego: true, retos: [{ t: 'Terminar con 18.000 puntos o más' }], consejo: 'Golpea todos los obstáculos sin que te den; coge el tornado para más puntos.' },
      { id: 'tobogan-miel', nombre: 'Tobogán de miel', juego: true, retos: [{ t: 'Terminar con 8000 puntos o más' }], consejo: 'Recoge todos los puntos que puedas sin chocar; el globo da un golpe extra.' },
      { id: 'brincos-globos', nombre: 'Brincos y globos', juego: true, retos: [{ t: 'Terminar con 2000 puntos o más' }], consejo: 'Salta globos hasta el grande de arriba del todo y luego todos los que puedas sin tocar el suelo.' },
      { id: 'exposicion', nombre: 'La exposición', juego: true, retos: [{ t: 'Terminarlo en menos de 90 segundos' }], consejo: 'Muy fácil cuando conoces el camino. Usa Magneto++ con los enemigos.' },
      { id: 'tarro-miel', nombre: 'El tarro de miel', juego: true, retos: [{ t: 'Terminar con 8000 puntos o más' }], consejo: 'Tocará intentarlo unas cuantas veces.' },
    ],
  },
  {
    mundo: 'atlantica', nombre: 'Atlántica', items: [
      { id: 'canciones', nombre: 'Volver a interpretar las canciones', retos: ['Diversión submarina', 'Parte de tu mundo', 'En el fondo del mar', 'La venganza de Úrsula', 'Amanecer de un nuevo día'].map((c) => ({ t: `«${c}»` })), consejo: 'Repite cada musical desde Sebastián. Los nombres de las canciones son los de la guía de Joakokh.' },
    ],
  },
  {
    mundo: 'ciudad-de-halloween', nombre: 'Ciudad de Halloween', items: [
      { id: 'envuelve-regalos', nombre: 'Envuelve regalos', juego: true, retos: [{ t: 'Terminar con 150 puntos o más' }], consejo: 'Habla con el elfo de la segunda planta del taller de Santa Claus. Dispara rápido a todas las cajas (primero las grandes) y recarga cuando te quede poca munición; si tienes cerca a un gamberro, dispárale para aturdirlo.' },
      { id: 'taller-delirante', nombre: 'Taller delirante', juego: true, retos: [{ t: 'Terminar con 1000 puntos o más' }], consejo: 'Habla con el elfo de rojo del taller de Santa Claus. Salta con el patinete y haz giros de 360° hasta tocar el suelo.' },
      seta('II', 'Completarlo con 80 puntos o más'),
    ],
  },
  {
    mundo: 'port-royal', nombre: 'Port Royal', items: [
      { id: 'esencia-larxene', nombre: 'Examina la Esencia intangible', retos: [{ t: 'Examinar la Esencia intangible (Larxene, en los Acantilados)', esencia: 'larxene' }] },
      { id: 'contrarreloj', nombre: 'Contrarreloj', juego: true, retos: [{ t: 'Terminarlo en menos de 40 segundos' }], consejo: 'Habla con Will. Toca las luces lo más rápido que puedas.' },
      seta('X', 'Completarlo en menos de 55 segundos'),
    ],
  },
  {
    mundo: 'espacio-paranoico', nombre: 'Espacio Paranoico', items: [
      { id: 'moto-luz', nombre: 'Moto de luz', juego: true, retos: [{ t: 'Terminar con 30 puntos o más' }], consejo: 'Desde el ordenador de la Celda. Destruye todas las motos y termina la carrera; si giras justo antes de chocar contra la pared, el enemigo se estrella y cuenta como punto.' },
    ],
  },
  { mundo: 'tierra-de-dragones', nombre: 'Tierra de Dragones', items: [seta('IV', 'Completarlo con 85 puntos o más')] },
  {
    mundo: 'castillo-disney', nombre: 'Castillo Disney', items: [
      { id: 'entrada-misteriosa', nombre: 'Examina la misteriosa entrada', retos: [{ t: 'Examinar la entrada misteriosa (Consciencia Latente)' }], consejo: 'Aparece al completar todos los mundos y vencer al jefe final.' },
    ],
  },
  { mundo: 'rio-eterno', nombre: 'Río Eterno', items: [seta('XI', 'Completarlo en menos de 19 segundos')] },
  {
    mundo: 'mundo-inexistente', nombre: 'El Mundo Inexistente', items: [
      { id: 'todos-mundos', nombre: 'Supera todos los mundos y derrota a Xemnas', retos: [{ t: 'Completar la historia de los mundos y vencer a Xemnas' }] },
      seta('I', 'Completarlo con 70 puntos o más'),
    ],
  },
];
export const NOTA_SETAS = 'En las setas, la casilla de la puntuación es la que pide el logro «Micólogo experto» («satisfacer» a la seta) y se comparte con la sección Jefes.';
