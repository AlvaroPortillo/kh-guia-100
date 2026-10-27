// Combate de Kingdom Hearts 0.2 Birth by Sleep: comandos de situación y Tiro certero. A mano.
// Mecánica: KHWiki «Situation Command», «Spellweaver» y «Prism Rain». Consejos: Laps4. Redactado con palabras propias.
// Nombres: Laps4 (Hila encantos, Golpe de gracia, Piro +++, Hielo +++, Electro +++, Siempre Juntos, Tiro certero) y
// Chorro Irisado, el nombre en castellano de Prism Rain en Birth by Sleep (guía de Steam 3300421820).
// Ids de marca: bbs02.magia.<piro|hielo|electro> (logro «Un final mágico»).
export const FUENTES_COMBATE_BBS02 = ['khwikiSituacion', 'khwikiHila', 'khwikiChorro', 'laps4Bbs02', 'guiaSteam'];

export const INTRO_COMBATE_BBS02 = 'Los cinco logros de combate salen casi solos jugando. La clave son los comandos de situación: una barra se llena al golpear y, según cómo la llenes, aparece un comando u otro. Los tres de magia hay que usarlos al menos una vez cada uno.';

export const BARRA_BBS02 = 'Cada flecha que aparece sobre el menú de comandos es un cuarto de la barra. Al llenarla salen los comandos de situación con un contador: si no los usas a tiempo, desaparecen. Si pasas 20 segundos sin sumar, la barra empieza a bajar.';

// `marca`: comando que se marca para «Un final mágico». `logros` y `obj`: logros y objetivos del armario relacionados.
export const COMANDOS_BBS02 = [
  {
    id: 'hila', nombre: 'Hila encantos', como: 'Llena la barra con combos físicos.',
    t: 'Cambio de estilo: Aqua maneja la Llave Espada a distancia con combos de seis golpes, más rápidos. Su Golpe de gracia crea un cristal de hielo que estalla al final y quita vida a trozos.',
    pc: 'En PC (versiones de Epic y Steam) el Golpe de gracia aparece nada más activar Hila encantos. En PS4 había que llenar la barra otra vez, como explica Laps4.',
    logros: ['ACH_10'], obj: [19, 20, 21, 31, 36],
  },
  {
    id: 'piro', nombre: 'Piro +++', como: 'Llena la barra con Piro.', marca: true,
    t: 'Lanza un hechizo de fuego explosivo.', logros: ['ACH_12'],
  },
  {
    id: 'hielo', nombre: 'Hielo +++', como: 'Llena la barra con Hielo.', marca: true,
    t: 'Lanza un hechizo de hielo enorme.', logros: ['ACH_12'],
  },
  {
    id: 'electro', nombre: 'Electro +++', como: 'Llena la barra con Electro.', marca: true,
    t: 'Descarga una tormenta eléctrica sobre los enemigos. Sirve también para limpiar las Sombras del Lado Oscuro del orbe (objetivo 47).',
    logros: ['ACH_12'],
  },
  {
    id: 'juntos', nombre: 'Siempre Juntos', como: 'Solo con Mickey, desde las Profundidades de la oscuridad.',
    t: 'Ataque conjunto con el rey Mickey; cuenta como cambio de estilo y no se puede usar a la vez que Hila encantos (activar uno cancela el otro). Laps4 avisa de que no está claro qué lo hace salir: parece que atacar al mismo enemigo que Mickey o quedarse un rato sin atacar. Contra la Ola Infernal es un comando especial: la inmoviliza para que puedas golpearla.',
    obj: [19, 35, 50],
  },
];
export const NOTA_MAGIA_BBS02 = 'Si mezclas magias al llenar la barra, sale el comando de la primera con la que empezaste (Laps4). Para sacar los tres, llénala cada vez con una sola magia, combinada con golpes normales si quieres.';

export const TIRO_BBS02 = {
  nombre: 'Chorro Irisado', en: 'Prism Rain',
  t: 'Es el único Tiro certero de 0.2 y se consigue al poco de empezar. Mantén el botón, fija hasta 28 blancos y suelta. Después puedes disparar hasta tres ráfagas más pulsando en el momento justo: la calificación es «Excelente» si pulsas cuando el círculo que se cierra coincide con el fijo, y cuanto mejor la calificación, más proyectiles.',
  logros: ['ACH_13'], obj: [18],
};
