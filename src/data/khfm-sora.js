// Sora en KH Final Mix: elección inicial, ritmo de experiencia, magias e invocaciones. Hecho a mano.
// Magias e invocaciones: Destiny Islands (Final Mix); nombres de nivel (Piro, Piro+, Piro++) como en la Wiki ES.
// Elección y respuestas: guía de Steam en castellano, Destiny Islands (estadísticas a nivel 1) y la wiki inglesa (ritmos).
// Ids: `khfm.magia.<id>.<n>` (n = 1, 2, 3) y `khfm.invoc.<id>`.

export const FUENTES_SORA = {
  diMagia: { nombre: 'Destiny Islands — Magic (Kingdom Hearts Final Mix)', url: 'https://www.destinyislands.com/kh-fm/magic/' },
  diInvoc: { nombre: 'Destiny Islands — Summons (Kingdom Hearts Final Mix)', url: 'https://www.destinyislands.com/kh-fm/summons/' },
  diStats: { nombre: 'Destiny Islands — Character Stats (Kingdom Hearts Final Mix)', url: 'https://www.destinyislands.com/kh-fm/character-stats/' },
  fandomEnExp: { nombre: 'Kingdom Hearts Wiki (inglés) — Kingdom Hearts statistics (ritmo de experiencia)', url: 'https://kingdomhearts.fandom.com/wiki/Kingdom_Hearts_statistics' },
};

// Estadísticas a nivel 1 según lo que eliges (te quedas / desechas). VT, PM, PH, Fuerza, Defensa (Destiny Islands).
export const ELECCION = [
  { quedas: 'Espada', dejas: 'Bastón', vt: 18, pm: 2, ph: 1, fue: 6, def: 2 },
  { quedas: 'Espada', dejas: 'Escudo', vt: 18, pm: 2, ph: 3, fue: 6, def: 1 },
  { quedas: 'Bastón', dejas: 'Espada', vt: 18, pm: 3, ph: 3, fue: 3, def: 3, rec: true },
  { quedas: 'Bastón', dejas: 'Escudo', vt: 18, pm: 3, ph: 3, fue: 5, def: 1 },
  { quedas: 'Escudo', dejas: 'Espada', vt: 18, pm: 2, ph: 3, fue: 4, def: 4, rec: true },
  { quedas: 'Escudo', dejas: 'Bastón', vt: 18, pm: 2, ph: 1, fue: 5, def: 4 },
];
export const ELECCION_CONSEJO = [
  'Bastón y desechar la espada: más PM, y la magia es clave tanto para atacar como para defenderte. También facilita que caigan materiales.',
  'Escudo y desechar la espada: más objetos equipables, más VT y defensa, y antes las habilidades defensivas, muy útiles en Experto.',
];

// Preguntas de Tidus, Wakka y Selphie (guía de Steam en castellano). Lo que cuenta es la posición de la respuesta.
export const PREGUNTAS = [
  { quien: 'Tidus', p: '¿Qué te asusta más?', r: ['Envejecer', 'Ser diferente', 'Ser indeciso'] },
  { quien: 'Wakka', p: '¿Qué quieres en la vida?', r: ['Ver lo que nadie ha visto', 'Saber cómo es el mundo', 'Ser fuerte'] },
  { quien: 'Selphie', p: '¿Qué es más importante para ti?', r: ['Ser el número uno', 'La amistad', 'Mis posesiones valiosas'] },
];
export const RITMOS = [
  { nombre: 'Dotado', como: 'Dos o más respuestas que sean la primera opción.', t: 'Sube rápido al principio y más despacio después. Es lo que conviene para «A toda prisa» (menos de 15 horas).' },
  { nombre: 'Normal', como: 'Cualquier otra combinación.', t: 'Ritmo equilibrado durante todo el juego.' },
  { nombre: 'Rezagado', como: 'Dos o más respuestas que sean la última opción.', t: 'Empieza lento y acelera después. Es el que menos experiencia total pide para llegar a nivel 100 («Máximo nivel»).' },
];
export const NOTA_RITMOS = 'La guía de Steam pone el cambio de ritmo en el nivel 50; la wiki inglesa, en el 40. Según la wiki inglesa, con Dotado hacen falta unos 100.000 puntos de experiencia más que con Rezagado para llegar a nivel 100.';

// Siete magias; cada una tiene tres niveles y cada fila dice cómo se consigue ese nivel.
export const MAGIAS = [
  { id: 'piro', nombre: 'Piro', coste: '½ barra', niveles: [
    'Ciudad de Paso: habla con Donald tras vencer a la Armadura en la primera visita.',
    'Agrabah: vence a Yafar Genio.',
    'Bastión Hueco: habla con las Princesas del Corazón tras vencer al Bégimo en la segunda visita.',
  ] },
  { id: 'hielo', nombre: 'Hielo', coste: '1 barra', niveles: [
    'País de las Maravillas: reúne todas las pruebas.',
    'Agrabah: vence a Yafar.',
    'Coliseo del Olimpo: vence al Bégimo en el puesto 40 de la copa Hades.',
  ] },
  { id: 'electro', nombre: 'Electro', coste: '1 barra', niveles: [
    'Coliseo del Olimpo: supera las pruebas de entrenamiento en la primera visita.',
    'Atlántica: habla con el Rey Tritón tras vencer a Úrsula Gigante.',
    'Coliseo del Olimpo: vence a Cerbero en el puesto 30 de la copa Hades.',
  ] },
  { id: 'cura', nombre: 'Cura', coste: '1 barra', niveles: [
    'Selva Profunda: vence a Clayton y al Acechador.',
    'País de Nunca-Jamás: vence a los sincorazón.',
    'Bastión Hueco: habla con Aerith en la Biblioteca tras vencer al Bégimo en la segunda visita.',
  ] },
  { id: 'gravedad', nombre: 'Gravedad', coste: '1 barra', niveles: [
    'Ciudad de Halloween: vence a la Mansión de Oogie Boogie.',
    'Coliseo del Olimpo: gana la copa Fil.',
    'Coliseo del Olimpo: vence a Hades en el puesto 10 de la copa Hades.',
  ] },
  { id: 'paro', nombre: 'Paro', coste: '2 barras', niveles: [
    'Monstruo: vence a la Jaula Parásita por segunda vez.',
    'Bosque de los Cien Acres: completa la tercera hoja arrancada.',
    'País de Nunca-Jamás: vence al Espectro.',
  ] },
  { id: 'aero', nombre: 'Aero', coste: '2 barras', niveles: [
    'Ciudad de Paso: vence a la Armadura Inversa en la segunda visita.',
    'País de Nunca-Jamás: marca Trío Amarillo de la bodega del barco.',
    'Rescata a los 99 cachorros.',
  ] },
];
export const NOTA_MAGIAS = 'Las siete en su primer nivel dan la llave espada Examinadora, y las siete en su nivel máximo, el Bastón de Ensueño (las dos se piden a Merlín). Las de la copa Hades se ganan durante la copa, al vencer a cada jefe.';

// Invocaciones: las gemas se llevan al Hada Madrina, en la Casa de Merlín de Ciudad de Paso. Hacen falta los tres
// personajes del grupo conscientes y los PM indicados.
export const INVOCACIONES = [
  { id: 'simba', nombre: 'Simba', pm: 2, como: 'Ciudad de Paso: habla con León en el Canal Secreto durante la segunda visita.', efecto: 'Ataca con rugidos; mantén pulsado el comando para cargar más fuerza.' },
  { id: 'genio', nombre: 'Genio', pm: 2, como: 'Agrabah: al sellar la cerradura.', efecto: 'Ataca al azar hasta a 10 enemigos con Electro, Gravedad y Paro.' },
  { id: 'dumbo', nombre: 'Dumbo', pm: 3, como: 'Monstruo: cofre de la boca de la ballena.', efecto: 'Vuela rociando a los enemigos con agua helada.' },
  { id: 'bambi', nombre: 'Bambi', pm: 1, como: 'Bosque de los Cien Acres: completa la primera hoja arrancada.', efecto: 'Brinca soltando objetos y premios, que cambian según el mundo.' },
  { id: 'campanilla', nombre: 'Campanilla', pm: 3, como: 'País de Nunca-Jamás: al sellar la cerradura.', efecto: 'Recupera VT y PM poco a poco y puede revivir a Sora una vez. Dura hasta que sales de la zona o acaba el combate.' },
  { id: 'mushu', nombre: 'Mushu', pm: 2, como: 'Bastión Hueco: vence al dragón en la primera visita.', efecto: 'Escupe bolas de fuego a los enemigos que apuntas.' },
];
export const NOTA_INVOC = 'Con las seis, el Hada Madrina te da el bastón Buena Fortuna, y Geppetto el plano Hyperion (tras 5.000 sincorazón).';

// Subir a nivel 100 y los contadores (consejos de la guía de Steam y de otras secciones de esta guía).
export const NIVEL_100 = [
  'Lo más rápido: el Titán Hielo del Combate de oro, unos 10.000 de EXP por combate; equipa Extraordinario, que da puntos extra al bloquear sus estacas de hielo.',
  'También sirven los sincorazón de Ciudad de Paso tras Bastión Hueco y el Titán Roca de la copa Hades.',
  'Accesorios de EXP: Colgante de EXP (hombre misterioso), Arete de EXP y Brazal de EXP (síntesis).',
  'Si aún no has empezado, el ritmo Rezagado es el que menos experiencia total pide.',
  'Mientras subes caen solos «Tío Platinito» (10.000 platines) y «Cazador de sincorazón» (2.000 sincorazón).',
];

// Dificultad y logros que no caben en una sola partida.
export const PARTIDAS = [
  { t: 'Una partida en Principiante para los tres perdibles', d: 'Sin tocar Equipamiento, sin elegir nunca «Continuar» y terminando en menos de 15 horas («Como empecé», «Imbatible» y «A toda prisa»). Prioriza esos tres y haz el resto en la otra partida.' },
  { t: 'Otra en Experto para «El Experto»', d: 'Terminarla da también «El Maestro» y «El Principiante». En Experto, el escudo y sus habilidades defensivas ayudan mucho.' },
];
