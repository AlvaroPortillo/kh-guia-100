// Jefes de la historia de KH III y combates de datos de Re Mind. A mano.
// Fuente: ficha de cada jefe en KHWiki (premios y apartado «Strategy» de KH III y de Re Mind), resumida en castellano.
// Si KHWiki no trae estrategia, solo van el mundo y el premio. Nombres: Wiki ES por nombre japonés; sin fuente,
// inglés entre «». Magias con la notación de la saga en castellano (Piro, Piro+, Piro++…).
// Ids: kh3.jefe.<id>; los combates de datos usan los de la sección Re Mind (kh3.datos.<id>). Imágenes: KHWiki.

export const IMG_JEFES_KH3 = 'assets/img/kh3/jefes/jefe-';

export const JEFES_KH3 = [
  { mundo: 'Despertar', jefes: [
    { id: 'lado-oscuro', n: 'Lado Oscuro', premio: 'Piro y «Water»',
      t: 'Es el primer jefe y sirve de tutorial. Sus manos son el punto débil y, al rato, también la cabeza. Cuando golpea el suelo para sacar Sombras, bloquea la onda expansiva. Las esferas oscuras del pecho se pueden bloquear y devolver; las de las manos solo se esquivan. En Re Mind vuelve en Scala ad Caelum, mucho más fuerte, pero con más herramientas: Salto de Altura y Vuelo Doble te dejan llegar a la cabeza.' },
  ] },
  { mundo: 'El Olimpo', jefes: [
    { id: 'titan-roca', n: 'Titán de Roca', premio: 'PM máx. +5',
      t: 'Primero sube el acantilado esquivando sus rocas. Luego golpea sus dos pies (cada uno tiene su barra de vida) y apártate del pie que va a pisar; el rastro azul avisa de las rocas que salen del suelo. Al caer contra la montaña, sube por su cuerpo y ataca las cabezas. Con la atracción Tren Mágico, dispara al puño con el que va a golpear y a las cabezas. Si se acaba la atracción y le queda vida, sus pies recuperan la mitad.' },
    { id: 'titan-lava-hielo', n: 'Titán de Lava y «Ice Titan»', img: 'titan-lava',
      t: 'Se luchan juntos mientras el Titán de Viento os empuja hasta las puertas del dominio de Zeus. Al empezar lanzan sus alientos en línea recta, primero el de lava y luego el de hielo: bloquea los dos y trepa por la prisión de Zeus hasta sus cabezas, su único punto débil. Usa la magia del elemento contrario y la acción de Hércules «Heroic Swing», que golpea las dos cabezas a la vez. Huye de los pinchos de hielo que salen del suelo. Deja al de lava para el final: el de hielo apunta mejor.' },
    { id: 'titan-viento', n: 'Titán de Viento', premio: 'Vida máx. +10' },
  ] },
  { mundo: 'Villa Crepúsculo', jefes: [
    { id: 'demon-tide-vc', n: '«Demon Tide»', img: 'demon-tide', premio: 'Cura y «MP Safety»',
      t: 'Solo es vulnerable un par de segundos antes de su ataque, que no se puede interrumpir: lanza Sombras (esquívalas rodando a su alrededor), embiste tres veces (bloquea y contraataca, salvo la tercera) o se sumerge y sale bajo tus pies (rueda justo antes). Tras esquivar las tres embestidas queda expuesto unos combos. En este primer combate basta con quitarle unas tres barras de vida.' },
  ] },
  { mundo: 'Caja de juguetes', jefes: [
    { id: 'amber', n: 'Amber Angélica', premio: 'Salto de Altura y PM máx. +5' },
    { id: 'rey-juguetes', n: 'Rey de los Juguetes', premio: 'Vida máx. +10 y «Falling Slash»' },
  ] },
  { mundo: 'Reino de Corona', jefes: [
    { id: 'auriga', n: 'Auriga Desbocado' },
    { id: 'madre', n: 'Madre Enloquecida', premio: 'Vida máx. +10 (y un hueco de accesorio para Goofy)' },
  ] },
  { mundo: 'Monstruópolis', jefes: [
    { id: 'masa', n: 'Masa de Terror', premio: 'Cura+ y Vida máx. +10' },
  ] },
  { mundo: 'Arendelle', jefes: [
    { id: 'merengue', n: 'Merengue', premio: 'Hielo+',
      t: 'Bloquea su doble manotazo y su palmada y contraataca; el salto con onda expansiva y el segundo manotazo activan la esquiva de riesgo. Bloquea también su aliento helado, que congela. El fuego lo aturde. Cuando Goofy lo pida, usa los árboles doblados para golpearlo (son tres). Al final se cubre de pinchos y se vuelve más agresivo: bloquea toda la serie de golpes y contraataca en cada pausa hasta romper la armadura. Ayudan las llaves espada que bloquean en sus formas, como Ayudante del Sheriff.' },
    { id: 'skoll', n: 'Sköll', premio: 'Superdeslizamiento y PM máx. +5',
      t: 'Puede ser difícil: lleva un plato de cocina activo y Éteres. Empieza embistiendo: bloquea y contraataca. Sale muy rápido de los aturdimientos, así que sé prudente: espera a que use sus zarpazos, bloquéalos, contraataca y haz un combo corto. El Origen del Héroe (con su contraataque de escudo), Cadena del Reino, Para Siempre y La Clave de la risa funcionan bien.' },
  ] },
  { mundo: 'El Caribe', jefes: [
    { id: 'buitre', n: 'Buitre enfurecido', premio: '«Air Slide»' },
    { id: 'rape', n: 'Rape Eléctrico', premio: 'Electro++' },
    { id: 'barco-luxord', n: '«Luxord\'s Ship»', premio: '«Magic Flash»' },
    { id: 'davy-jones', n: 'Davy Jones', premio: 'Vida máx. +10 y «Payback Strike»',
      t: 'Se teletransporta por el barco y pega muy fuerte, pero todos sus ataques se esquivan o bloquean; cuando brilla en azul prepara un tajo de contraataque. Ayudan las formas con ataques que persiguen o muy rápidos, sobre todo las de hielo: solo bloquea los ataques físicos. Al bajar al 66 % sube a la cofa y saca seis tentáculos del Kraken: elimina tres (son débiles a Electro) y vuelve a bajar. Más tarde los saca otra vez y ya no se retira.' },
    { id: 'kraken', n: 'Kraken', premio: '«Aero Boost» para Donald y Vida máx. +10 para Goofy' },
  ] },
  { mundo: 'San Fransokyo', jefes: [
    { id: 'catastrocoro', n: 'Catastrocoro', premio: 'Piro++' },
    { id: 'cuboscuros', n: 'Cuboscuros', premio: 'Un hueco de protección (y «Withstand Combo» para Goofy)' },
    { id: 'baymax', n: 'Baymax Oscuro', premio: 'Aero+ y Vida máx. +10' },
  ] },
  { mundo: 'El Mundo Final', jefes: [
    { id: 'lich', n: 'Lich', premio: 'PM máx. +5 y Aero++',
      t: 'Hay que vencerlo siete veces, cada una en un mundo y con más magias. La primera, en el Olimpo: persíguelo por los pasillos hasta «Apex». Usa una estela de imágenes (si lo tienes fijado, sigues fijando a la imagen; «Air Slide» va bien para esquivar la explosión), seis bolas de fuego y Aero+, que se bloquean. Luego, en el Despertar, eliges el orden de los otros cinco: cada uno añade un ataque nuevo (discos eléctricos en la Caja de juguetes, nubes en Corona, bolas de fuego y Grandullones en Monstruópolis…).' },
  ] },
  { mundo: 'Reino de la Oscuridad', jefes: [
    { id: 'anti-aqua', n: 'Anti-Aqua', premio: 'Hielo++',
      t: 'Pelea en el estilo «Spellweaver» con copias de sí misma: lanza esferas que persiguen y ataques giratorios, y todo se puede bloquear. Se teletransporta a menudo y, si la golpeas mucho, responde con una embestida que no se bloquea. Cuando pasea con varias copias, Electro descubre a la verdadera. Resiste el hielo; el fuego le baja la resistencia a los contraataques.' },
  ] },
  { mundo: 'Necrópolis de Llaves Espada', jefes: [
    { id: 'demon-tide-ne', n: '«Demon Tide»', img: 'demon-tide', premio: 'Cura++ y la llave espada Luz Estelar',
      t: 'Como en Villa Crepúsculo, pero al 50 % se convierte en un tornado con el núcleo en el centro. Cuando el tornado brilla en rojo va a atacar: bloquea sus embestidas y aléjate rodando de la lluvia de meteoros; tras ese ataque, el tornado desaparece 25 segundos y el núcleo queda expuesto.' },
    { id: 'vanitas-terra', n: 'Vanitas y Terra-Xehanort', img: 'terra-xehanort', premio: 'PM máx. +5 (cada uno)',
      t: 'Te acompañan Aqua y Ventus. Conviene derrotar antes a Vanitas, cuyo ataque final es el más fácil de evitar, pero no pierdas de vista a ninguno: se turnan para pillarte por la espalda. Cuando Terra-Xehanort vaya a por ti, deja a Vanitas y defiéndete. Terra-Xehanort embiste, usa «Ars Solum», dispara ráfagas oscuras y saca a su guardián para golpear o levantar pinchos.' },
    { id: 'xigbar-riku', n: 'Xigbar y «Dark Riku»', img: 'xigbar', premio: 'PM máx. +5 (cada uno)',
      t: 'Riku te acompaña y Ansem se marcha al poco. Derrota antes a Xigbar: sus disparos desde lejos complican el combate. Flota boca abajo fuera de alcance y dispara flechas que persiguen y abanicos de flechas; las que fallan quedan en el suelo como minas. Todas se pueden devolver bloqueando. Tras varias ráfagas se para a recargar: es tu momento. «Dark Riku» ataca con combos, ondas oscuras, minas y una gran caída de siete golpes.' },
    { id: 'luxord-larxene-marluxia', n: 'Luxord, Larxene y Marluxia', img: 'marluxia', premio: 'PM máx. +5 (Larxene y Marluxia)',
      t: 'Con el rey Mickey. A los 30 segundos Luxord convierte a Mickey en carta y te reta solo: busca la carta en la que se esconde entre 15 (mira el dorso o espera a que diga «Over here!» y se mueva). Al darle queda vulnerable unos segundos. Después, Larxene y Marluxia empiezan con sus ataques finales; para su golpe combinado al suelo, planea. Derrota antes a Larxene. Marluxia se pasea a veces por la arena: acércate con «Airstep» y combéalo.' },
    { id: 'saix-xion', n: 'Saïx y Xion', img: 'saix', premio: 'Vida máx. +10 (Saïx)',
      t: 'Primero, con Lea y Kairi, contra los dos: Saïx alterna sus modos de furia y Xion cambia de arma a media pelea. Cuando Saïx llena su furia azul, una escena cambia el combate: Xion y Roxas se unen a ti. En la segunda parte Roxas es invencible y pega fuerte: puedes centrarte en esquivar mientras deja a Saïx con 1 de vida y rematarlo tú.' },
    { id: 'trio', n: '«Young Xehanort», Ansem y Xemnas', img: 'young-xehanort', premio: 'Vida máx. +10 (cada uno)',
      t: 'Con Riku y el rey Mickey. Derrota primero a «Young Xehanort», el más fácil de combear, y deja a Xemnas para el final: es el más rápido. Cuando uno desaparece envuelto en un aura oscura, los tres atacan solo a Sora en un orden fijo: salta y bloquea, y destruye las minas oscuras de Ansem con Electro. Bloquea el tercer golpe del látigo de «Young Xehanort» para la esquiva de riesgo y ten cuidado con su círculo que para el tiempo.' },
    { id: 'infierno', n: 'Infierno Oscuro', premio: 'Un hueco de objeto más', nota: 'En un portal de batalla de la Necrópolis, después de la historia.' },
    { id: 'torre', n: 'Torre Maldita', premio: 'Cristal Ilusorio (10 %)', nota: 'En un portal de batalla de Monstruópolis, después de la historia.' },
  ] },
  { mundo: 'Scala ad Caelum', jefes: [
    { id: 'replicas', n: 'Réplicas de Xehanort',
      t: 'Comparten la vida: céntrate en una. Hacen combos y giros; una de ellas te lanza al aire para que las demás te remachen. Al 75 % se juntan en un círculo mágico que lanza rayos: se esquivan con facilidad, y «Trinity Guard» ayuda contra sus embestidas. Cuando reciben mucho daño se teletransportan y hay que buscarlas por la ciudad.' },
    { id: 'maestro', n: 'Maestro Xehanort', img: 'maestro',
      t: 'Lleva varios Elixires y Cura++ en los atajos; una «Kupo Coin» también ayuda, aunque es cara. La mejor llave espada es el Arma Artema. Primero lucha con armadura en una sala cerrada: es muy rápido, así que usa ataques que persigan o veloces y «Airstep» para seguirlo. Al 75 % usa «Heavenly Pillar», que destroza la arena: esquiva los pilares de fuego y refúgiate detrás de las casas de abajo. Sus llamaradas no son de fuego: son de daño neutro.' },
  ] },
];

// Estrategia de cada combate de datos (Re Mind). Ids de DATOS_ORG en kh3-remind.js.
export const DATOS_ESTRATEGIA = {
  ansem: 'Empieza con orbes láser alrededor de Sora, una fila de emblemas oscuros y cuatro tandas de proyectiles. Bloquea los láseres cuando brillen los orbes, lanza Electro++ para aturdirlo y acércate con «Airstep» para atacar antes de los proyectiles. Cuando le queda poca vida dispara sin darte tiempo a aturdirlo. Su círculo de láseres al perseguirte se bloquea seguido.',
  xemnas: 'Conserva sus combos de espadas etéreas, el ataque en hélice y las patadas, y gana patadas nuevas (una con salto que puede ir cargada de energía) y su barrera de antes, que se rompe de un golpe.',
  xigbar: 'Convierte la arena en un anillo con una grieta en el centro que no se puede cruzar con «Airstep»: rodéala para acercarte. Muchos ataques los hace de pie o boca abajo sin que cambie nada: fíjate en sus pistolas y disparos. Sus ataques van en cuatro tandas.',
  luxord: 'Vuelve el reloj de KH II: los dos tenéis un indicador de tiempo. El tuyo baja solo y al recibir daño; sube al golpearle y baja si fallas un minijuego. Bloquea sus combos de cartas (los anuncia barajando). Cuando se eleva lanza dos tandas de tres cartas que persiguen: bloquea las dos.',
  larxene: 'Desactiva la esquiva aérea («Aerial Dodge»): «Air Slide» funciona mejor. Lleva Cura++ y Aero++ en los atajos. Su combo de cuchillos ahora es de dos tajos, un salto atrás y cuatro más, y termina con chispas que rompen la guardia: bloquea, usa la esquiva de riesgo para ponerte detrás y ataca cuando se teletransporte.',
  marluxia: 'Equipa «Counter Impact» (es rápido y abarca mucho). Si se teletransporta cerca, hace su combo de cinco golpes: bloquea los cuatro primeros y esquiva el quinto, que brilla en rosa y no se bloquea; después queda abierto. Si lanza la guadaña girando, son tres golpes seguidos.',
  saix: 'Varios ataques aturden: equipa protección contra aturdimiento (la lleva la llave espada Nanoarma). Tiene dos furias, amarilla y azul. Antes de la última fase eliges jugar con Roxas o con Sora.',
  'terra-xehanort': 'Encadena un ataque tras otro si no lo interrumpes. En la primera fase usa «Ars Solum»: se teletransporta delante de Sora y hace tres series de tajos; los golpes con la llave en rojo no se bloquean.',
  'dark-riku': 'Rápido y agresivo: más minas oscuras, tajos rojos que no se bloquean y su barrera casi todo el combate, con contraataque si le golpeas. Solo la quita en ciertos ataques: al rematar un combo, al caer lanzando cuatro grietas, en sus combos aéreos o al usar su tajo vertical sin ser contraataque. Aprovecha esos momentos.',
  vanitas: 'Varios ataques congelan: equipa protección contra congelación (Enseña Nevada o Nieve Cristalina). Algunos huecos solo se aprovechan lanzando Aero a tiempo, así que ahorra PM; Aero+ y Aero++ abarcan más. Ayudan el Anillo Rúnico y el Broche Flantástico.',
  'young-xehanort': 'Se teletransporta, crea ilusiones y amaga golpes. Su disparo helado congela: equipa protección contra congelación. Solo uno de sus ataques no se bloquea, así que ante la duda, bloquea. Si se teletransporta tres veces de lado a lado, viene el combo de látigo en tres partes.',
  xion: 'Sus rayos azules se bloquean, pero si te alcanzan reducen tu vida máxima hasta dejarte en 1: lo arreglan una Panacea, un Elixir o un cambio de forma. Los dorados no reducen la vida pero no se bloquean. Si lanza la llave espada tres veces seguidas, la tercera rompe la guardia: usa la esquiva de riesgo.',
  'maestro-xehanort': 'Sus estadísticas son como las del «Armored Xehanort» de Scala ad Caelum, pero mueve doce espadas «No Name» más que alargan y refuerzan sus golpes, y lanza pilares de fuego bajo tus pies.',
};
export const YOZORA = {
  premio: '«Crystal Regalia+»',
  t: 'Es un combate muy difícil que pide paciencia: lleva Planeador y Salto de Altura, mucho nivel, mucha defensa y llaves espada al máximo. Sus ataques rojos se bloquean y los azules no. Cuando corre hacia ti intenta robarte la llave espada (y puede robarte objetos y la «Kupo Coin»). A veces empieza directamente con su ataque final y pasa todo el combate en la segunda fase: si no te ves cómodo, deja que te derrote y reinténtalo. Si tardas mucho tras su ataque final, lo repite.',
};
export const FUENTES_JEFES_KH3 = ['khwJefes', 'khwDatos'];
