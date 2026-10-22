// Coliseo del Olimpo y jefes secretos de KH Final Mix. Hecho a mano.
// Copas: rondas, tiempo y premios por modo de KHWiki (plantilla «Coliseum»: premio 1 = normal, 2 = en solitario,
// 3 = contrarreloj, con los cambios de Final Mix); nombres y desbloqueo, de la Wiki ES. Estrategias: guía de Steam en
// castellano. Jefes secretos: guía de Steam, Wiki ES y Destiny Islands. Imágenes de KHWiki.
// Ids: `khfm.coliseo.<copa>.<modo>` y `khfm.jefe.<id>` (los del Coliseo, como modo único de su combate).

export const FUENTES_COLISEO = {
  khwikiCopas: { nombre: 'KHWiki — Phil Cup, Pegasus Cup, Hercules Cup y Hades Cup (rondas y premios de Final Mix)', url: 'https://www.khwiki.com/Hades_Cup' },
  khwikiOroPlatino: { nombre: 'KHWiki — Gold Match y Platinum Match', url: 'https://www.khwiki.com/Gold_Match' },
  wikiEsCopas: { nombre: 'Wiki ES — Copa Fil, Copa Pegaso, Copa Hércules y Copa Hades', url: 'https://kingdomhearts.fandom.com/es/wiki/Copa_Fil' },
  wikiEsOroPlatino: { nombre: 'Wiki ES — Combate de Oro y Combate de Platino', url: 'https://kingdomhearts.fandom.com/es/wiki/Combate_de_Oro' },
  wikiEsHabilidades: { nombre: 'Wiki ES — Combo +1, Extraordinario y Golpe de Gravedad', url: 'https://kingdomhearts.fandom.com/es/wiki/Extraordinario' },
  diSecundarias: { nombre: 'Destiny Islands — Side Quests (Kingdom Hearts Final Mix)', url: 'https://www.destinyislands.com/kh-fm/side-quests/' },
  khwikiJefes: { nombre: 'KHWiki — Kurt Zisa, Phantom e Ice Titan (fichas e imágenes)', url: 'https://www.khwiki.com/Kurt_Zisa' },
  wikiEsColgante: { nombre: 'Wiki ES — Colgante de EXP', url: 'https://kingdomhearts.fandom.com/es/wiki/Colgante_de_EXP' },
};

export const IMG_COLISEO = 'assets/img/khfm/coliseo/col-';

// `modos`: premio de cada modo en Final Mix. `rivales`: combates clave (puesto, rival, imagen y estrategia).
export const COPAS = [
  {
    id: 'fil', nombre: 'Copa Fil', img: 'copa-fil', logro: 'ACH_010', rondas: 9,
    abre: 'Sella la cerradura de Ciudad de Paso (y supera el torneo preliminar del Coliseo).',
    modos: { normal: 'Elemento Gravedad', solo: 'Combo +1', contrarreloj: 'Extraordinario' },
    nota: 'KHWiki llama al premio normal «Power of stars»; la Wiki ES, Elemento Gravedad.',
  },
  {
    id: 'pegaso', nombre: 'Copa Pegaso', img: 'copa-pegaso', logro: 'ACH_011', rondas: 9,
    abre: 'Completa Monstruo.',
    modos: { normal: 'Tiro Mortífero', solo: 'Orichalcum', contrarreloj: 'Materia Oscura' },
    rivales: [
      { puesto: 1, rival: 'León y Yuffie', img: 'leon', t: 'Derrota primero a Yuffie, que tiene menos vida y puede curar a León, y luego céntrate en él. Bloquea sus estrellas arrojadizas para devolvérselas y aturdirla.' },
    ],
  },
  {
    id: 'hercules', nombre: 'Copa Hércules', img: 'copa-hercules', logro: 'ACH_012', rondas: 9,
    abre: 'Sella las cerraduras de Ciudad de Halloween y del País de Nunca-Jamás.',
    modos: { normal: 'Escudo Hércules y el Trío Amarillo', solo: '«Critical Plus»', contrarreloj: 'Golpe de Gravedad' },
    nota: 'Ganarla enseña el Trío Amarillo, que hace falta para la cerradura del Coliseo. Con las copas Fil, Pegaso y Hércules se abre el cofre del vestíbulo con la llave espada Heroica.',
    rivales: [
      { puesto: 4, rival: 'Cloud', img: 'cloud', t: 'Esquiva o bloquea sus ataques antes de contraatacar. Cuando empiece a volar y le oigas gritar, esquiva con una voltereta; ataca cuando vuelva al suelo.' },
      { puesto: 1, rival: 'Hércules', img: 'hercules', t: 'Empieza envuelto en un aura dorada que le hace inmune. Lánzale uno de los barriles para quitársela y golpéale; mientras tenga el aura, esquiva. Sin aura, bloquea y contraataca.' },
    ],
  },
  {
    id: 'hades', nombre: 'Copa Hades', img: 'copa-hades', logro: 'ACH_013', rondas: 49,
    abre: 'Gana las copas Fil, Pegaso y Hércules y sella la cerradura de Bastión Hueco.',
    modos: { normal: 'Trío Implacable, Electro++, Hielo++ y Gravedad++', solo: 'Viva la Reina', contrarreloj: 'Viva el Rey' },
    nota: 'Hay un jefe cada 10 puestos y, al vencerlo, puedes continuar desde ahí si pierdes. KHWiki y la Wiki ES cuentan 49 combates; la guía de Steam, 50. Al ganarla se abre el Combate de oro.',
    rivales: [
      { puesto: 44, rival: 'Yuffie', img: 'yuffie', t: 'Su premio es el Escudo de Genji.' },
      { puesto: 40, rival: 'Bégimo', img: 'behemoth' },
      { puesto: 30, rival: 'Cerbero', img: 'cerbero' },
      { puesto: 20, rival: 'Cloud y León', img: 'cloud', t: 'Su premio es la llave espada Lionheart.' },
      { puesto: 10, rival: 'Hades', img: 'hades', t: 'Cuidado cuando se ponga en el centro: se vuelve invulnerable y gira lanzando columnas de fuego con los brazos estirados. Bloquea sus bolas de fuego para devolvérselas y aturdirle. Vencerle da el Informe Ansem 8.' },
      { puesto: 1, rival: 'Titán Roca', img: 'titan-roca', t: 'Ataca sus pies para tirarlo, súbete a sus cabezas y quédate golpeándolas. Algunos de sus ataques quitan mucha VT.' },
    ],
  },
];

// Combates únicos del Coliseo (un solo modo, contra un jefe secreto). Se marcan con su id de jefe.
export const COMBATES_COLISEO = [
  {
    id: 'titan-hielo', nombre: 'Combate de oro', rival: 'Titán Hielo', img: 'titan-hielo', logro: 'ACH_014',
    abre: 'Gana la copa Hades.', premio: 'Polvo de Diamante',
    t: 'Siempre ataca a distancia y lanza más ataques cuanta menos vida le queda. Bloquea sus estacas de hielo para devolvérselas: cuando recibe bastante daño, hinca la rodilla y puedes golpearle la cabeza. Esquiva las estacas que salen del suelo, las bolas de hielo que caen y su aliento helado. Es buen sitio para subir de nivel: unos 10.000 de EXP por combate, más con Extraordinario equipado.',
  },
  {
    id: 'sefirot', nombre: 'Combate de platino', rival: 'Sefirot', img: 'sefirot', logro: 'ACH_015',
    abre: 'Gana las copas Fil, Pegaso y Hércules y sella la cerradura de Bastión Hueco.', premio: 'Fulgor Seráfico e Informe Ansem 12',
    t: 'De los jefes más difíciles: la guía recomienda ir a nivel 100 con Elixires. Lleva Ragnarok o Último Arcano, que te hacen invulnerable mientras duran, y Hoja Sana y Último Estertor. Cuidado cuando hable y aparezca un aura oscura sobre ti: evítalo con Último Arcano o Ragnarok, golpéale antes de que termine o usa un Elixir después.',
  },
];
export const NOTAS_COLISEO = [
  'Cada copa tiene tres modos: el normal, el desafío en solitario (solo Sora) y la contrarreloj, y cada uno da un premio distinto. Para «Batalla en solitario» y «Lucha contrarreloj» vale cualquier copa.',
  'En la contrarreloj de la copa Hércules, si llegas a Hércules con tiempo y reinicias el combate desde la pausa, luchas contra él con el reloj parado.',
];

// Jefes secretos fuera del Coliseo.
export const JEFES_SECRETOS = [
  {
    id: 'kurt-zisa', nombre: 'Kurt Zisa', mundo: 'Agrabah', img: 'kurt-zisa', logro: 'ACH_009',
    abre: 'Después de sellar la cerradura de Bastión Hueco, ve al desierto de Agrabah hablando con la Alfombra Mágica.',
    premio: 'Zantetsuken e Informe Ansem 11',
    t: 'Al empezar te sella la magia: destruye los dos orbes que sujeta para aturdirle y contraatacar. Luego se protege con un escudo de fuego que hay que romper con Hielo; si te quedas sin PM, golpea los orbes para que suelten esferas de PM. La mayoría de sus ataques se pueden esquivar.',
  },
  {
    id: 'espectro', nombre: 'Espectro', mundo: 'País de Nunca-Jamás', img: 'espectro', logro: 'ACH_008',
    abre: 'Lleva a Peter Pan en el grupo y entra en el Camarote del barco: Campanilla os lleva volando a la Torre del Reloj.',
    premio: 'Paro++',
    t: 'Lleva armas que suban los PM y muchos Éteres. Al empezar lanza Condena: sale un contador sobre un aliado y, al llegar a 0, desaparece. Para pararlo, lanza Paro a las agujas de la cara del reloj rodeada de fuego azul. Solo recibe daño según el color del orbe de su cuerpo: rojo, Piro; azul, Hielo; amarillo, Electro; blanco, ataque físico. Tras tres golpes el orbe desaparece y te ataca: guarda algo de distancia y usa Aero.',
  },
  {
    id: 'hombre-misterioso', nombre: 'Hombre misterioso', mundo: 'Bastión Hueco', img: 'hombre-misterioso', captura: true, logro: 'ACH_007',
    abre: 'Después de sellar la cerradura de Bastión Hueco: un portal oscuro en la Capilla, donde luchaste contra Maléfica.',
    premio: 'Colgante de EXP e Informe Ansem 13',
    t: 'Es el enemigo con más vida del juego y pega muy fuerte: ve bien equipado y con Elixires. Si te agarra, tus comandos se convierten en «Sacudida»; uno de ellos cambia a «Soltar»: elígelo para librarte. Usa Ragnarok o Último Arcano para no recibir daño durante su animación.',
  },
];
export const FUENTES_COLISEO_LISTA = ['khwikiCopas', 'khwikiOroPlatino', 'wikiEsCopas', 'wikiEsOroPlatino', 'wikiEsHabilidades', 'guiaSteamKhfm', 'wikiEsCopaHades', 'wikiEsSefirot'];
export const FUENTES_JEFES_LISTA = ['guiaSteamKhfm', 'wikiEsEspectro', 'wikiEsKurtZisa', 'wikiEsXemnas', 'wikiEsColgante', 'diSecundarias', 'khwikiJefes', 'khwikiKhfm'];
