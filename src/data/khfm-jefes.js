// Jefes de la historia de KH Final Mix, en el orden en que aparecen. Hecho a mano.
// Nombres: Wiki ES («Jefes de Kingdom Hearts» y la página de cada jefe o recompensa, enlazada con la inglesa).
// Mundo, recompensa de Final Mix y estrategia: ficha de cada jefe en KHWiki (estrategia resumida en castellano); magias
// e informes Ansem, de las secciones de magias y del diario de esta guía. Imágenes de KHWiki.
// Ids: `khfm.jefe.<id>` (los mismos que los jefes secretos).

export const FUENTES_JEFES_HISTORIA = {
  wikiEsJefes: { nombre: 'Wiki ES — Jefes de Kingdom Hearts', url: 'https://kingdomhearts.fandom.com/es/wiki/Jefes_de_Kingdom_Hearts' },
  khwikiJefesKh: { nombre: 'KHWiki — ficha de cada jefe (recompensas de Final Mix y estrategia)', url: 'https://www.khwiki.com/Guard_Armor' },
  wikiEsAccesoriosKh: { nombre: 'Wiki ES — Accesorios de Kingdom Hearts (Bravo Guerrero, Colmillo Salvaje, Cáliz Omega…)', url: 'https://kingdomhearts.fandom.com/es/wiki/Categor%C3%ADa:Accesorios_de_Kingdom_Hearts' },
};

export const JEFES_HISTORIA = [
  { id: 'lado-oscuro', nombre: 'Lado Oscuro', mundo: 'Islas del Destino', img: 'lado-oscuro',
    t: 'Se lucha tres veces (en el Despertar, en las Islas del Destino y en Fin del Mundo) y siempre igual: golpea su cabeza y sus manos. Al golpear el suelo crea un charco de oscuridad del que salen Sombras, y dispara ráfagas oscuras desde el pecho.' },
  { id: 'leon', nombre: 'León', mundo: 'Ciudad de Paso', img: 'leon',
    t: 'Conviene llegar al menos a nivel 9. Bloquea sus bolas de fuego para que baje la guardia y ataca, pero no le bloquees los cortes: contraataca enseguida. Todo el Distrito 1 es el campo de batalla: si te queda poca vida, aléjate y cúrate.' },
  { id: 'armadura', nombre: 'Armadura', mundo: 'Ciudad de Paso', img: 'armadura', premio: 'Bravo Guerrero',
    t: 'Fija el blanco en el torso y ataca con combos, aunque destruye antes las extremidades: así sueltan esferas de vida. Cuando salta y cae junto a ti quita media vida: apártate de un salto.' },
  { id: 'prestidigitador', nombre: 'Prestidigitador', mundo: 'País de las Maravillas', img: 'prestidigitador', premio: 'Cuerno de Ifrit',
    t: 'Sus piernas no reciben daño: atácale saltando (un golpe por salto) o subiéndote a la mesa por la silla. Si ya tienes Electro, lo aturde. Enciende sus mazas en el fogón de la izquierda; con ellas encendidas hace mucho más daño.' },
  { id: 'sabor', nombre: 'Sabor', mundo: 'Selva Profunda', img: 'sabor', premio: 'Colmillo Salvaje (en el último combate)',
    t: 'Es muy rápido: usa el combo básico de tres golpes justo después de que embista y esquiva rodando sus contraataques. Bloquear sus ataques da puntos de técnica. En el último combate salta y reaparece en otra parte del bambú.' },
  { id: 'clayton', nombre: 'Clayton y Acechador', mundo: 'Selva Profunda', img: 'acechador', premio: 'Cura',
    t: 'Primero, olvida a los Primates y ve a por Clayton hasta dejarle a media vida (se cura con pociones). Luego monta al Acechador, invisible: céntrate en el sincorazón, que es el peligro, y golpéale hasta tirar a Clayton. Cuando la mira de fijar baja de golpe, va a embestir: esquiva rodando. Piro le hace mucho daño.' },
  { id: 'cerbero', nombre: 'Cerbero', mundo: 'Coliseo del Olimpo', img: 'cerbero', premio: 'Pulsera Infernal',
    t: 'Sus tres cabezas comparten la vida. Súbete a su lomo para evitar su miasma oscuro y sus bolas de fuego, o esquívalos rodando (meterse debajo no sirve). Fija una cabeza de un lado y quédate pegado a él. Bloquea las bolas de fuego y cúrate a menudo desde su lomo o en las escaleras.' },
  { id: 'ciempies', nombre: 'Ciempiés', mundo: 'Agrabah', img: 'ciempies', premio: 'Rayo de Luz',
    t: 'Acaba primero con las Arañas de Tinaja que forman su cuerpo; salen más hasta que se agotan. Después la cabeza y la cola corren por las calles y el cuerpo se vuelve a formar: destruye esas también y recoge sus esferas de vida. Cuidado con los latigazos de la cola y las antenas eléctricas.' },
  { id: 'yafar', nombre: 'Yafar', mundo: 'Agrabah', img: 'yafar', premio: 'Hielo+',
    t: 'Se lucha en la Cámara de la Lámpara junto al Genio, que apenas hace daño. Yafar lanza un rayo eléctrico con su bastón, golpea con él envuelto en fuego y crea una tormenta de hielo en el centro: si te pilla dentro, esquiva el granizo. Se aleja flotando cuando te acercas.' },
  { id: 'yafar-genio', nombre: 'Yafar Genio', mundo: 'Agrabah', img: 'yafar-genio', premio: 'Piro+ e Informe Ansem 1',
    t: 'Puedes golpearle a él o, más seguro, a la lámpara que lleva Yago: fíjala y atácala sin parar. Esquiva rodando sus bolas de lava o bloquéalas, y lanza Aero a Donald y Goofy. Si golpeas su mano cuando se inclina hacia ti, se aturde unos segundos.' },
  { id: 'jaula-parasita', nombre: 'Jaula Parásita', mundo: 'Monstruo', img: 'jaula-parasita', premio: 'PM Invocación ↑ para Goofy (1.ª vez) y Paro (2.ª vez)',
    t: 'Primer combate: quédate en la plataforma, fija su cabeza y lánzale Piro+ o Gravedad. Si te quedas sin PM, usa un Éter o golpea la cabeza con la llave espada. Riku te ayuda, salvo que hayas terminado antes el País de Nunca-Jamás. El segundo combate es muy parecido.' },
  { id: 'armadura-inversa', nombre: 'Armadura Inversa', mundo: 'Ciudad de Paso', img: 'armadura-inversa', premio: 'Aero',
    t: 'Empieza como la Armadura, con sus mismos ataques; a cierta vida se desmonta y se recompone en una versión más dura que flota y dispara como un cañón. Puedes salir del Distrito 2, pero si sales tras romperle piezas, al volver estará con la vida llena.' },
  { id: 'ursula', nombre: 'Úrsula y Úrsula Gigante', mundo: 'Atlántica', img: 'ursula', premio: 'Estilo Sirena; Electro+ e Informe Ansem 3 tras Úrsula Gigante',
    t: 'Primer combate, en su guarida: ataca con manos y tentáculos y, de vez en cuando, gira por la sala; deja todo y nada arriba y abajo para esquivarla. Ignora a Flotsam y Jetsam: si los derrotas a los dos, Úrsula los cura.' },
  { id: 'oogie-boogie', nombre: 'Oogie Boogie y su mansión', mundo: 'Ciudad de Halloween', img: 'oogie-boogie', premio: 'Orbe Sagrado e Informe Ansem 7; Gravedad al vencer a la Mansión de Oogie Boogie',
    t: 'Te tira al foso con dados explosivos y Gárgolas. Los dados sin llamas puedes devolvérselos de un golpe. Cuando gira la rueda saca trampas: cuchillas, un disco cortante y tragaperras que disparan. Cuando se encienda el círculo de interruptores del centro, Oogie corre por arriba: pulsa el que tenga delante en el momento justo.' },
  { id: 'anti-sora', nombre: 'Anti-Sora', mundo: 'País de Nunca-Jamás', img: 'anti-sora', premio: 'Uña de Cuervo',
    t: 'Pon Aero, Cura y Electro o Paro en los atajos. Copia el combo básico de Sora y se esconde en el suelo como una Sombra para salir con un gancho que quita mucho: muévete sin parar o esquiva rodando. Con la vida en amarillo crea dos copias que tienen 1 de vida; con la habilidad «Scan» ves cuál es el de verdad.' },
  { id: 'capitan-garfio', nombre: 'Capitán Garfio', mundo: 'País de Nunca-Jamás', img: 'capitan-garfio', premio: 'Último Arcano e Informe Ansem 9',
    t: 'Baja a la cubierta: Garfio está en el piso de arriba. Fíjalo, ignora los Barcos de Guerra (salen otros) y mantén Aero puesto. Esquiva o bloquea su estoque. Con Piro se le prenden los pantalones y corre por la cubierta: vuela para que no te arrolle.' },
  { id: 'malefica', nombre: 'Maléfica', mundo: 'Bastión Hueco', img: 'malefica', premio: 'PM Invocación ↑ para Donald e Informe Ansem 5',
    t: 'Ataca desde una plataforma flotante y llama a Defensores y Bolas Oscuras. Lanza Aero+ y golpea la plataforma (o lánzale Gravedad) hasta que caiga: entonces Maléfica queda a tiro. Cuando grite lo de los meteoritos, corre al borde curvo de la Capilla. Sus rayos se esquivan saltando; Campanilla ayuda a curarte.' },
  { id: 'malefica-dragon', nombre: 'Maléfica Dragón', mundo: 'Bastión Hueco', img: 'malefica-dragon', premio: 'La gema de Mushu (invocación)',
    t: 'Cambia a Goofy por Bestia, llena los objetos de Omnielixires, Éteres y Omnipociones y lleva Aero+ y Cura+ en los atajos. Salta para esquivar su aliento de fuego y atácala con tu magia más fuerte; sin PM, golpea su cabeza. Si cae Donald, revívelo enseguida.' },
  { id: 'begimo', nombre: 'Bégimo', mundo: 'Bastión Hueco', img: 'begimo', premio: 'Cáliz Omega',
    t: 'Su único punto débil es el cuerno de la cabeza. Súbete por el muslo de una pata trasera a su lomo y colócate detrás del cuerno para no caerte; desde ahí ataca, mejor con Último Arcano. Cuidado con sus pisadas si estás cerca de sus patas.' },
  { id: 'chernabog', nombre: 'Chernabog', mundo: 'Fin del Mundo', img: 'chernabog', premio: 'Superplaneador',
    t: 'Se lucha volando. Su ataque más fuerte llega cuando parece encogido de dolor y se yergue: el volcán entra en erupción. También escupe fuego de lado a lado. Con poca vida usa Aero para alejarte y lanza rayos de luz: vuela lejos y llama a Donald y Goofy para que te sigan.' },
  { id: 'ansem', nombre: 'Ansem, el Buscador de la Oscuridad', mundo: 'Fin del Mundo', img: 'ansem', premio: '',
    t: 'La figura oscura que le acompaña te golpea y lanza cortes que se bloquean. A veces la pone delante para defenderse: con buena sincronía puedes ponerte a su espalda, y Ragnarok la atraviesa. Cuando grita «¡Sométete!», la sombra embiste con un pequeño retraso: esquiva rodando en el momento justo.' },
  { id: 'mundo-caotico', nombre: 'Mundo Caótico', mundo: 'Fin del Mundo', img: 'mundo-caotico', premio: '', logro: 'ACH_006',
    t: 'Primero estás solo: lanza Aero++, fija a Ansem y atácale desde distintos ángulos, alejándote volando de su láser oscuro. Luego destruye los núcleos de las salas, la cara y el núcleo principal. Al final Ansem rompe su sello y gana un ataque nuevo más potente: sigue la misma estrategia, ya con Donald y Goofy.' },
];
