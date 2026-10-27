// Zonas y jefes de Kingdom Hearts 0.2 Birth by Sleep, en el orden de la historia. A mano.
// Recorrido y jefes: KHWiki (fichas de cada jefe) y la guía de trofeos de Laps4; estrategias redactadas con palabras propias.
// Nombres: zonas, de los logros de Steam y de Laps4; jefes, de la Wiki ES (Proyección de Aqua, Torre Maldita, Ola Infernal,
// Lado Oscuro). Ids de marca: bbs02.jefe.<id>; cada zona se marca con su logro.
export const FUENTES_HISTORIA_BBS02 = ['khwikiBbs02', 'khwikiProyeccion', 'khwikiTorre', 'khwikiOla', 'khwikiLadoOscuro', 'laps4Bbs02', 'wikiEsProyeccion', 'wikiEsTorre', 'wikiEsLadoOscuro'];

export const INTRO_HISTORIA_BBS02 = 'Aqua recorre el Reino de la oscuridad por zonas, una detrás de otra. Cada zona tiene su logro de historia (menos las Profundidades de la oscuridad) y debajo están sus jefes con cómo vencerlos. Se puede volver a cualquier zona con el teletransporte de los puntos de guardado.';

// `obj`: objetivos del armario ligados a ese combate (se explican en la sección Objetivos).
export const ZONAS_BBS02 = [
  {
    id: 'carretera', nombre: 'Carretera principal', logro: 'ACH_01',
    nota: 'El comienzo, ya en el Reino de la oscuridad. Su único cofre está justo delante al llegar a la Aldea fortificada: ábrelo, porque luego no se vuelve.',
    jefes: [],
  },
  {
    id: 'aldea', nombre: 'Aldea fortificada', logro: 'ACH_02',
    nota: 'Los restos del Castillo de los Sueños. Hay que activar cinco engranajes para que el reloj rehaga el camino al castillo.',
    jefes: [
      { id: 'torre-aldea', nombre: 'Torre Maldita', obj: [36], t: 'Es un remolino de Sombras. Cuando a las Sombras les brillan los ojos en rojo va a atacar: o embiste (se para con Barrera) o se separa en Sombras sueltas, que entonces sí puedes golpear. El Tiro certero, los comandos de situación y la magia la tumban rápido.' },
    ],
  },
  {
    id: 'mundo-interior', nombre: 'Mundo interior', logro: 'ACH_03',
    nota: 'Los restos del Bosque de los Enanitos. Para salir hay que encontrar los tres espejos que reflejan un escenario distinto; cada uno acaba en un combate contra la Proyección de Aqua.',
    jefes: [
      { id: 'proyeccion-1', nombre: 'Proyección de Aqua (primer combate)', t: 'El más fácil. Desaparece y lanza seis cristales de hielo que te persiguen: bloquéalos o esquívalos, o córtalos de raíz con una magia en cuanto empiece (Electro es instantánea). Sus combos con teletransporte se bloquean. Cuando se queda quieta, combos con la llave espada mezclados con magia.' },
      { id: 'proyeccion-2', nombre: 'Proyección de Aqua (segundo combate)', t: 'Casi igual que el primero, pero ataca más a menudo. Sirve la misma táctica.' },
      { id: 'proyeccion-3', nombre: 'Proyección de Aqua (tercer combate)', obj: [31, 41], t: 'Tiene tres barras de vida y usa Hila encantos. Al activarlo suelta una onda: apártate. Luego pasea con copias; la de verdad es la que tiene varias barras de vida y se teletransporta cuando te acercas (Electro ayuda a encontrarla). Su ataque final con tres copias que te rodean no se puede esquivar saltando: usa Barrera y golpéala justo después, cuando queda al descubierto. Deja este espejo para el último y guarda antes de entrar: aquí se hacen los objetivos 31 y 41.' },
    ],
  },
  {
    id: 'bosque', nombre: 'Bosque espinoso', logro: 'ACH_04',
    nota: 'Los restos del Reino Encantado. Por el Camino escabroso hay tres Lados Oscuros pequeños que solo disparan bolas (se devuelven bloqueando): vencerlos es el objetivo 32.',
    jefes: [
      { id: 'lado-oscuro-1', nombre: 'Lado Oscuro (primer combate)', t: 'Pelea como en otros KH, pero el puñetazo que invoca Sombras suelta una onda más grande: sal de su radio, salta o bloquéala. Aqua no puede trepar por él; usa el Vuelo Doble para llegar a la cabeza.' },
      { id: 'lado-oscuro-orbe', nombre: 'Lado Oscuro que protege el orbe', obj: [47], t: 'El jefe final del bosque; el orbe refuerza sus ataques. Hace caer bolas con pinchos que se quedan como trampas: no pises el rastro negro que dejan. Se arrodilla y lanza tres oleadas de bolas que puedes devolver bloqueando. En su ataque más fuerte se agacha y suelta rayos en círculo: aléjate y esquívalos con Voltereta. Entre ataque y ataque, Tiro certero, combos y Electro o Piro.' },
    ],
  },
  {
    id: 'profundidades', nombre: 'Profundidades de la oscuridad', logro: null,
    nota: 'Aqua se reencuentra con el rey Mickey, que la acompaña desde aquí. Con él aparece el comando de situación Siempre Juntos.',
    jefes: [
      { id: 'torre-profundidades', nombre: 'Torre Maldita (con Mickey)', obj: [50], t: 'Igual que la de la Aldea fortificada, con más vida y con Mickey de tu parte. En Partida +, remátala con el golpe final de Siempre Juntos para el objetivo 50.' },
    ],
  },
  {
    id: 'islas', nombre: 'Islas del Destino', logro: 'ACH_05',
    nota: 'Los restos de las Islas del Destino y el final del juego.',
    jefes: [
      { id: 'ola-infernal', nombre: 'Ola Infernal', obj: [51], t: 'El jefe final; lleva muchos objetos equipados. Primera fase: un vuelo en picado, una trampa de Sombras y un ataque desde el suelo, que se paran con Barrera y se castigan con Onda postrera; los ojos rojos de las Sombras avisan del ataque. Cuando Mickey se sube encima aparece Siempre Juntos y la Ola no puede atacar: pégale con magia y combos hasta que el comando casi se acabe, actívalo y sigue con magia y Tiro certero hasta el golpe final (no muere antes de la segunda fase). Segunda fase: proyectiles que se esquivan con Voltereta y un tornado rojo que te embiste; ataca cuando el tornado está azul o morado. Al final esconde el núcleo y salen bolas de Sombras del suelo: muévete con Voltereta y, si te lanzan al aire, usa el deslizamiento aéreo. Remata con combos aéreos dentro del tornado.' },
    ],
  },
];

// Combate secreto tras terminar el juego.
export const JEFE_SECRETO_BBS02 = {
  id: 'zodiaco', nombre: 'Proyección de Aqua (jefe secreto)', obj: [42],
  donde: 'El espejo que aparece en el centro del Mundo interior al reunir las 12 reliquias del Zodíaco (en los 12 cofres que salen al cargar una partida terminada).',
  rondas: 'Antes del combate final hay varias rondas: KHWiki habla de cinco en total (la primera, un Lado Oscuro; también hay una Torre Maldita) y Laps4, de tres combates fáciles antes del último.',
  t: 'Es el jefe más difícil del juego: casi cualquier golpe te deja al límite, así que lleva Último estertor y Una vez más y ve a nivel 80 (Laps4). Muchos de sus ataques llevan un aura roja y no se pueden bloquear: esquívalos con Voltereta en el momento justo. Cuando parece quieta es un cebo; si la golpeas, contraataca. Bloquea sus combos normales y, en vez de Onda postrera, salta y encadena dos combos. Para el remolino de golpes con teletransporte, Barrera; para el remate, Onda postrera. En la segunda fase invoca ocho cristales de hielo (se cortan con magia) o activa Hila encantos con bolas que no se pueden bloquear; sus ataques siguen siempre el mismo orden, así que cada intento se hace más fácil.',
};
