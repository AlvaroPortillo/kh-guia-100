// Jefes de KH II Final Mix: los de la historia y los secretos. A mano.
// Historia: nombre, lugar y bonificación de la tabla «Jefes de Kingdom Hearts II» de la Wiki ES (en su orden); estrategia
// resumida de la ficha de cada jefe en KHWiki; imágenes de KHWiki. Roxas no sale en la tabla de la Wiki ES: datos de KHWiki.
// Secretos (Sephiroth, Consciencia latente, Organización XIII y Micorganización XIII): guía de logros en castellano de Steam.
// Ids: `kh2fm.jefe.<id>`. Los secretos usan las marcas que ya existen: logros (ACH_108–111), Esencias intangibles
// (`kh2fm.esencia.<id>`), réplicas (`kh2fm.replica.<id>`) y setas (`kh2fm.seta.<n>`), compartidas con Minijuegos.
export const FUENTES_JEFES_KH2FM = {
  wikiEsJefesTabla: { nombre: 'Wiki ES — Jefes de Kingdom Hearts II (lugar y bonificación)', url: 'https://kingdomhearts.fandom.com/es/wiki/Jefes_de_Kingdom_Hearts_II' },
  khwikiJefesKh2: { nombre: 'KHWiki — ficha de cada jefe (estrategia e imágenes)', url: 'https://www.khwiki.com/Xemnas_(Boss)' },
};

export const IMG_JEFES_KH2 = 'assets/img/kh2fm/jefes/jefe-';

export const INTRO_JEFES_KH2FM = 'Los jefes de la historia en el orden de la Wiki ES, con la bonificación que da cada uno y cómo vencerlo. Debajo, los jefes secretos de Final Mix: Sephiroth, la Consciencia latente, la Organización XIII (Esencias intangibles y réplicas) y la Micorganización XIII. Según la guía en castellano, para los secretos conviene tener el nivel, las fusiones y las invocaciones al máximo, y las llaves espada Calabaza Decisiva y Fenrir (te la da Cloud tras vencer a Sephiroth).';

// `bonus`: bonificación de la Wiki ES (si son dos jefes seguidos, las dos). `img`: id de la imagen si no es el propio.
export const JEFES_HISTORIA_KH2FM = [
  { id: 'penumbra', nombre: 'Penumbra Espinosa', lugar: 'Descenso al Corazón (Estación del Despertar)', bonus: 'Bloqueo y VT+5',
    t: 'Solo su cabeza recibe daño. Al principio encadena puñetazos, lanzamientos y bolas de luz: responde con los comandos de reacción en el momento justo y remata con un combo cuando caiga. Cuando dispare espinas, usa el comando de reacción para acercarte; si no para de dispararlas, prioriza esquivar.' },
  { id: 'axel-1', nombre: 'Axel', lugar: 'Villa Crepúsculo (Solar Deportivo)', img: 'axel-1',
    t: 'Combate sencillo. Esquiva su combo de dos golpes y sus chakrams, lleva un par de pociones y ataca en el aire. Si bloqueas sus golpes se queda aturdido unos segundos: no te lances sin pensar.' },
  { id: 'axel-2', nombre: 'Axel', lugar: 'Villa Crepúsculo (Mansión)', bonus: 'VT+5', img: 'axel-1',
    t: 'Roxas ya lleva dos llaves espada. Axel cubre el suelo de fuego, que te quita vida poco a poco: remátalo con un golpe final para lanzarlo al aire y usa los comandos de reacción hasta estamparlo contra el suelo, que apaga el fuego y lo aturde. Lleva pociones.' },
  { id: 'shan-yu', nombre: 'Shan-Yu', lugar: 'Tierra de Dragones (Puertas de Palacio)', bonus: 'Helicóptero y VT+5',
    t: 'Es rápido pero pega poco. Ataca de entrada, mejor en Forma Valiente. Cuando salgan sincorazón a golpear la puerta, acaba antes con ellos y recoge sus esferas para mantener la defensa. Guarda el límite de Mulan para cuando tengas a Shan-Yu y a los sincorazón juntos. Cuidado cuando brilla con energía oscura.' },
  { id: 'custodio', nombre: 'Custodio y Usurpador', lugar: 'Castillo de Bestia (Mazmorra)', bonus: 'Corte superior (Usurpador)', img: 'custodio',
    t: 'Primero caen las oleadas de Gárgolas y Ganchos Vampiro. Esquiva los brazos y las esferas oscuras del Custodio; al bajarle la vida, un comando de reacción saca al Usurpador de la puerta. El Usurpador no ataca: golpéalo hasta que vuelva a la puerta y repite.' },
  { id: 'bestia', nombre: 'Bestia', lugar: 'Castillo de Bestia (Cuarto de Bestia)', bonus: 'Espacio para armadura +1',
    t: 'Ataca con zarpazos, mordiscos y un rugido. Casi todo el combate tienes un comando de reacción que lo aturde, aunque golpearlo sin más es más rápido. Al vaciarle la vida se arrodilla: pulsa rápido el comando de reacción para que entre en razón.' },
  { id: 'sombra-acechante', nombre: 'Sombra Acechante y Espinas de Sombra', lugar: 'Castillo de Bestia (Salón de Baile)', bonus: 'Contracorte y VT+5 (Espinas de Sombra)', img: 'sombra-acechante',
    t: 'La Sombra Acechante posee pilares, ventanas, suelo y lámpara: ponte en el centro si posee pilares, aléjate de las ventanas y salta cuando brille el suelo bajo tus pies. Al vaciar la vida del objeto, un comando de reacción la expulsa y suelta esferas de fusión y PM: aprovecha para golpearla. Luego se transforma en Espinas de Sombra.' },
  { id: 'cerbero', nombre: 'Cerbero', lugar: 'Coliseo del Olimpo (Cámara Interior)', bonus: 'Corte con finta',
    t: 'Solo Sora y Auron. Suele saltar delante de ti al empezar: recíbelo con un combo aéreo. Fija una cabeza y ataca; el límite de Auron va muy bien si alcanza a dos cabezas. Explorador Estelar ayuda con los combos aéreos. Cuando te rodee con las tres cabezas, usa el comando de reacción.' },
  { id: 'demyx-formas', nombre: 'Demyx (lucha contra formas)', lugar: 'Coliseo del Olimpo (Atrio)', img: 'demyx',
    t: 'Demyx no ataca: hay que destruir 100 formas de agua en 80 segundos. Golpea las que tienen forma de Demyx para que se vuelvan notas y usa su comando de reacción, que daña a muchas a la vez. Piro sin parar y éteres para recargar PM.' },
  { id: 'pete-coliseo', nombre: 'Pete', lugar: 'Coliseo del Olimpo (Pozo de los Condenados)', bonus: 'Trío',
    t: 'Primero protege a Meg de Pete y de los sincorazón (céntrate en ellos, que llegan antes a ella). Después hay que vencer a Pete en 90 segundos en Final Mix antes de que se hunda la cueva: cuando se proteja con su barrera, usa el comando de reacción para lanzarlo contra Hércules, que la rompe y lo deja aturdido.' },
  { id: 'hidra', nombre: 'Hidra', lugar: 'Coliseo del Olimpo (Puertas del Coliseo)', bonus: 'VT+5 y Rayo elemental',
    t: 'Te ayudan Fil, Meg (te da esferas de vida, PM y fusión si te acercas) y Pegaso. Ataca la cabeza principal y córtala con el comando de reacción. Luego salen tres cabezas del suelo: inmovilízalas con los comandos de reacción de Fil y córtalas antes de que despierten. En la fase final vuelve la cabeza principal.' },
  { id: 'pete-rio', nombre: 'Pete', lugar: 'Río Eterno', bonus: 'Golpe súbito (barco) · VT+5 y Reflejo elemental (segundo combate)', img: 'pete-coliseo',
    t: 'En el barco no hay que vencerlo, sino recuperar la Piedra Angular de Luz: devuélvele con comandos de reacción lo que lanza y, cuando el barco llegue a la orilla, agárrate al gancho y golpea la jaula. En el segundo combate, aléjate cuando grite «¡Quita de en medio!», que es un ataque de cerca muy fuerte.' },
  { id: 'barbossa', nombre: 'Capitán Barbossa', lugar: 'Port Royal', bonus: 'Indicador de fusión y Aerofinal' },
  { id: 'jefes-agrabah', nombre: 'Jefe Volcánico y Jefe Gélido', lugar: 'Agrabah', bonus: 'Explosión (cada uno)',
    t: 'Todo el combate es en el aire: equipa habilidades aéreas y Emblema de Héroe. Piro solo daña al Jefe Gélido e Hielo solo al Volcánico; Electro daña a los dos. Cuando preparen sus ataques grandes, usa el comando de reacción para lanzar uno contra el otro y aturdirlos a ambos.' },
  { id: 'carcelero', nombre: 'Carcelero', lugar: 'Ciudad de Halloween (Colina de la Luna)', bonus: 'VT+5',
    t: 'Lleva habilidades aéreas, Emblema de Héroe y Reflejo en los atajos. No le des respiro con combos aéreos y límites; cuando eche la cabeza atrás, el comando de reacción lo aturde. La Forma Valiente va bien. Sus ataques cambian según a quién de Lock, Shock y Barrel se haya tragado.' },
  { id: 'oogie', nombre: 'Oogie Boogie', lugar: 'Ciudad de Halloween', bonus: 'Espacio para objetos +1',
    t: 'Combate largo sobre tres cintas que te llevan a unos pinchos; cambia de cinta en los portales azules. Aléjate de sus dados explosivos, esquiva sus puñetazos con la carrera rápida y rodea los rayos.' },
  { id: 'scar', nombre: 'Scar', lugar: 'Tierras del Reino', bonus: 'PM+10',
    t: 'Es rápido y pega fuerte: ataca desde el principio y esquiva sus golpes. Aquí no hay formas. El límite de Simba hace mucho daño si Scar está cerca. Cuando grite «¡Inclínate ante mí!», dale espacio.' },
  { id: 'programa-hostil', nombre: 'Programa Hostil', lugar: 'Espacio Paranoico', bonus: 'Indicador de fusión y Corte horizontal',
    t: 'Golpéalo y recoge lo que suelta hasta llenar el indicador; entonces un comando de reacción lo congela un rato. Aprovecha con formas y el límite de Tron. Esquiva los láseres saltando y, cuando cargue por el escenario, corre al centro.' },
  { id: 'demyx', nombre: 'Demyx', lugar: 'Bastión Hueco (Puertas del Castillo)', bonus: 'Espacio para armadura +1 y Hielo elemental',
    t: 'Primero, 50 formas de agua en 40 segundos: su comando de reacción y los límites las barren. Luego ataca: frénalo con un remate antes de que salte, o devuelve los chorros de agua con Reflejo. Cuidado al atacarlo en el aire, que puede saltar igual.' },
  { id: 'mil', nombre: '1000 Sincorazón', lugar: 'Bastión Hueco (Gran Garganta)',
    t: 'Sora solo contra mil sincorazón, más débiles de lo normal. Usa los comandos de reacción: uno ataca a grupos enteros y los Robots Centinela se pueden agarrar para disparar a los demás.' },
  { id: 'riku', nombre: 'Hombre misterioso', lugar: 'Tierra de Dragones (Cumbre)',
    t: 'Sora va solo: sin invocaciones ni formas (salvo la Forma Suma en Final Mix) y con Trío como único límite. No se inmuta con los golpes; dañalo con el comando de reacción de los Cohetes Repentinos que lo rodean, con Trío o con los límites de la Forma Suma. Lleva éteres.' },
  { id: 'jinete', nombre: 'Jinete de Tormentas', lugar: 'Tierra de Dragones (Puertas de Palacio)', bonus: 'Rayo elemental',
    t: 'Ataca con rayos: lleva armadura que resista el rayo. Empiezas sobre su lomo, donde puedes atacar la cabeza o los cuernos de las alas. Sus volteretas y su bombardeo se ven venir: antes junta los platillos de las patas.' },
  { id: 'xaldin', nombre: 'Xaldin', lugar: 'Castillo de Bestia (Puente)', bonus: 'VT+5 y Reflejo',
    t: 'Se protege con viento y apenas recibe daño. Esquiva o bloquea sus lanzas y usa el comando «Aprender» para acumular saltos (hasta nueve): el salto atraviesa el viento y abre un combo aéreo. Tiene tres fases según su vida.' },
  { id: 'parca', nombre: 'Parca Pirata', lugar: 'Port Royal', bonus: 'Magneto elemental',
    t: 'Se lucha dos veces. En la primera, en la Perla Negra, apenas ataca: combo y forma. En la segunda, si al cofre le quedan 881 monedas o menos, absorbe el oro maldito y se vuelve invencible: devuelve las monedas al cofre. Piro, Hielo y Electro lo frenan un momento.' },
  { id: 'hades', nombre: 'Hades', lugar: 'Coliseo del Olimpo', bonus: 'PM+10 y Contrabloqueo',
    t: 'Te ayuda Hércules. Lo mejor es la magia: PM llenos, éteres, Donald en el grupo y Forma Sabia o Maestra. Ponte junto a Hércules cuando cargue su esfera de aura y fija a Hades para que vaya hacia él. Cuando diga «Se acabó», aléjate: se rodea de fuego y es invencible.' },
  { id: 'yafar', nombre: 'Yafar', lugar: 'Agrabah', bonus: 'Fuego elemental',
    t: 'Se lucha en el cielo, sobre la alfombra. Sus puñetazos, bolas de fuego, rayos y pilares se bloquean con Reflejo. Ataca su cabeza y su torso; al vaciar la vida del torso queda aturdido y un comando de reacción lo hace girar.' },
  { id: 'lsb', nombre: 'Lock, Shock y Barrel', lugar: 'Ciudad de Halloween (Taller de Juguetes)',
    t: 'No se les puede bajar la vida a cero: se aturden con 1 PV y hay que meter a los tres en una caja con el comando de reacción. Si se recuperan, vuelven a curarse: bájales la vida a todos y aturde a los tres seguidos. Los límites ayudan.' },
  { id: 'experimento', nombre: 'Experimento', lugar: 'Ciudad de Halloween (Plaza de los Arbolitos)', bonus: 'VT+5 y Salto letal',
    t: 'Como la Armadura de KH: acaba separándose en piezas. Las piezas sueltas apenas reciben daño; los comandos de reacción lo vuelven a juntar. Se tambalea con cada remate, así que van bien los combos cortos. Reflejo para sus láseres, que no se pueden bloquear.' },
  { id: 'hienas', nombre: 'Shenzi, Banzai y Ed', lugar: 'Tierras del Reino (Cementerio de los Elefantes)', bonus: 'Espacio para accesorios +1',
    t: 'Hay que proteger a Timón y Pumba: vigila el indicador de daño, no te quedes mucho con una sola hiena y no pierdas de vista a Pumba. Piro si te rodean. Un comando de reacción llama a Pumba y desconcierta a las hienas.' },
  { id: 'terremoto', nombre: 'Terremoto Salvaje', lugar: 'Tierras del Reino', bonus: 'VT+5 y Rayo elemental',
    t: 'Solo se pueden atacar los ojos y el sincorazón chamán de su lomo, que recibe el golpe final. Al empezar, encadena los comandos de reacción para esquivar sus pisotones y para uno pulsando rápido: caerá aturdido. Ataca los ojos con todo y luego sube a su lomo a por el chamán.' },
  { id: 'sark', nombre: 'Sark y el PCM', lugar: 'Espacio Paranoico', bonus: 'VT+5 y Reflejo',
    t: 'Primero Sark solo lanza su disco: devuélveselo con los comandos de reacción. Luego crece de tamaño: daña sus piernas para que se arrodille y puedas llegar a la cabeza.' },
  { id: 'xigbar', nombre: 'Xigbar', lugar: 'El Mundo Inexistente (Salón de las Melodías Huecas)', bonus: 'Magneto elemental',
    t: 'Pasa todo el combate en el aire: combos aéreos con Emblema de Héroe. Al empezar dispara desde una cornisa; desvía tres disparos seguidos con el comando de reacción y bajará. No se pueden usar invocaciones.' },
  { id: 'luxord', nombre: 'Luxord', lugar: 'El Mundo Inexistente (Frontera del Caos)', bonus: 'VT+5',
    t: 'No tiene vida, sino un indicador de tiempo, como Sora, que baja con los segundos y con los golpes; gana quien conserve más. Al empezar te convierte en dado: espera a que pase o salta hacia él para gastarlo antes. Rompe sus cartas golpeándolas o con el comando de reacción.' },
  { id: 'saix', nombre: 'Saïx', lugar: 'El Mundo Inexistente (Punto de Confusión)', bonus: 'Indicador de fusión',
    t: 'Un indicador «Berserk» marca su estado. Con él lleno ataca muy fuerte y es inmune a los golpes: aléjate y espera a que suelte su arma, cógela y atácale con ella. Cuando se vacía, se calma y puedes atacar con normalidad.' },
  { id: 'roxas', nombre: 'Roxas', lugar: 'El Mundo Inexistente', nota: 'Combate añadido en Final Mix; no sale en la tabla de la Wiki ES (datos de KHWiki).',
    t: 'Resiste mucho la magia: no gastes PM en ataques mágicos, solo en Reflejo para defenderte. Nada más empezar lanza un ataque giratorio enorme; bloquéalo, esquívalo o usa Reflejo. Se mueve muy rápido deslizándose por el escenario.' },
  { id: 'xemnas', nombre: 'Xemnas', lugar: 'El Mundo Inexistente (Altar del No Ser)', bonus: 'PM+10',
    t: 'Te atrapa en un campo de energía que te quita vida y sube a lo alto del rascacielos: usa el comando de reacción para romperlo y sube corriendo; cuando baje hacia ti, espera al comando «Finish». Luego se teletransporta y ataca con sus espadas de energía: bloquea o usa Reflejo.' },
  { id: 'xemnas-final', nombre: 'Xemnas (batalla final)', lugar: 'El Mundo Inexistente', img: 'xemnas',
    t: 'Varias fases seguidas. Esquiva los edificios con el comando de reacción y destruye los generadores y el núcleo de su nave. Después, Xemnas con armadura usa las armas de los miembros caídos. Luego, la nave dragón, con Sora y Riku en una moto: carga la energía para el comando de reacción del láser. Al final, Xemnas en su última forma: Reflejo nada más empezar evita que te lance al aire.' },
  { id: 'ursula', nombre: 'Úrsula', lugar: 'Atlántica (Canción 4)', bonus: 'Llave espada «Abismo misterioso»', opcional: true,
    t: 'Es un número musical: pulsa los círculos azules a tiempo y aporrea los morados para vaciarle la vida. Hay que bajarla al menos a 1/8 de la barra, aunque mejor vaciarla.' },
];

export const SEPHIROTH = {
  logro: 'ACH_109', img: 'sephiroth',
  abre: 'En Vergel Radiante: ve donde luchaste contra los 1000 sincorazón y avanza hasta el final.',
  t: 'El jefe secreto más sencillo. Equipa Calabaza Decisiva, Cura++ y Reflejo++, lleva Ultrapociones y al menos un Elixir. Su patrón es predecible: esquiva y bloquea a tiempo para contraatacar. Cuando flote mientras habla (minuto 1:55) carga un ataque que te quita toda la VT y los PM de un golpe: golpéalo para interrumpirlo. Si te alcanza, Elixir o Forma Final.',
  premio: 'Cloud te da la llave espada Fenrir.',
};

export const CONSCIENCIA = {
  logro: 'ACH_108',
  abre: 'Desbloquea todas las cerraduras de los mundos y vence al jefe final. Si lo venciste antes, termina los mundos que falten y vuelve a vencerlo. Está en el sótano del Castillo Disney.',
  t: 'Costará unos cuantos intentos. Desactiva las habilidades de acción de Donald y Goofy y usa el método Fenrir + Combo Negativo.',
};

export const METODO_FENRIR = [
  'Equipa la llave espada Fenrir y activa la habilidad Combo Negativo.',
  'Desactiva Salto de altura, todas las habilidades de acción que afecten al ataque (sobre todo Aerofinal y Obús Magneto), Maestro de Combos, Combo +1, Combo Aéreo +1 y Letal+.',
  'Solo salta y ataca: Sora golpeará siempre con el ataque final y aturdirá al jefe sin parar.',
];

// Organización XIII: réplicas en la sala final de la Gruta de la Evocación (logro ACH_110). `esencia`: dónde está su
// Esencia intangible, si tiene. `slug`: el de las marcas de Minijuegos.
export const REPLICAS_INTRO = 'Las réplicas están en la sala final de la Gruta de la Evocación (Bastión Hueco). Equipa al grupo con Ultrapociones, activa la Cura de Donald, lleva Cura++, Electro++ y Reflejo++ y usa los objetos que suben tus estadísticas. Atacan como los jefes normales y las Esencias intangibles; casi todas caen con el método Fenrir + Combo Negativo. Usa las formas para curarte. Al vencerlas a todas aparece el último cofre en la misma sala.';

export const ORGANIZACION_KH2FM = [
  { slug: 'xemnas', nombre: 'Xemnas', t: 'Equipa a Riku con Ultrapociones. Aquí no hace falta el método Fenrir. Primera fase: con paciencia; cuando le queden unas 3 barras te pone un aura que quita VT: ve delante del edificio a por el comando verde y vuelve a usarlo en la escena. Segunda fase: mantén alta la VT de Sora, que Xemnas lo agarra; con Riku, corre hacia Sora fijando al doble y lanzándole Aura oscura.' },
  { slug: 'xigbar', nombre: 'Xigbar', t: 'Bloquea sus disparos. La Forma Final hace más daño. Vigila VT y PM cuando transforme el escenario.' },
  { slug: 'xaldin', nombre: 'Xaldin', t: 'Complicado: aprende sus patrones. Usa «Aprender» para acumular «Salto».' },
  { slug: 'vexen', nombre: 'Vexen', esencia: 'Agrabah (Tienda del mercader)', t: 'Ataca al escudo y luego a él. Con los bloques de hielo, planea en círculos; cuando desaparezcan y la pantalla se ponga blanca, lanza Cura o esquiva con voltereta o te congelará. Al clon de Sora, Electro++.' },
  { slug: 'lexaeus', nombre: 'Lexaeus', esencia: 'Villa Crepúsculo (Solar Deportivo)', t: 'Puedes bloquear uno de sus ataques; hazlo 2 o 3 veces.' },
  { slug: 'zexion', nombre: 'Zexión', esencia: 'Coliseo del Olimpo (Cámara interior)', t: 'Cuando te convierta en libro, mira el menú de comandos y usa «Cancelar» o «Restituir»; salen al azar, así que usa «Pasar Página» hasta que aparezca uno.' },
  { slug: 'saix', nombre: 'Saïx', t: 'Atácale al empezar. Cuando se llene su barra «Berserker», aléjate planeando, coge su arma cuando aparezca y atácale con ella para bajarla.' },
  { slug: 'axel', nombre: 'Axel', t: 'El suelo te quita VT: atácale y usa el comando «Demoledor» cuando aparezca para apagar el fuego.' },
  { slug: 'demyx', nombre: 'Demyx', t: 'Cuando saque los dobles, Forma Final y Reflejo++. Luego sal de la forma y ataca.' },
  { slug: 'luxord', nombre: 'Luxord', t: 'Largo. Si ves un aura rosa delante de él, ponte detrás o salta. Con 1/4 de vida, superplanea. Cuando levante las murallas, saca O cuatro veces seguidas en el menú de comandos; si fallas, se cura entero.' },
  { slug: 'marluxia', nombre: 'Marluxia', esencia: 'Castillo de Bestia (Cuarto de Bestia)', t: 'Al empezar aparece un contador que baja con cada golpe suyo; si llega a 0, pierdes.' },
  { slug: 'larxene', nombre: 'Larxene', esencia: 'Port Royal (Acantilados)', t: 'Nada más empezar, esquiva su ataque y contraataca.' },
  { slug: 'roxas', nombre: 'Roxas', t: 'Busca el momento para atacar. Si flota en el centro de la sala, esquiva sus orbes con el superplaneo.' },
];

// Micorganización XIII (logro ACH_111): dónde está cada seta y cómo satisfacerla (guía en castellano).
export const SETAS_KH2FM = [
  { n: 'I', donde: 'El Mundo Inexistente, frente al rascacielos.', t: 'Fenrir, sin Combo +1, Letal+ ni habilidades de golpe final, y Forma Final antes de empezar. Usa Finta Alta (espera a que Finta cambie a ella) y golpéala. No actives Combo Negativo.' },
  { n: 'II', donde: 'Ciudad de Halloween, Plaza de los Arbolitos.', t: 'Invoca a Stitch y usa Reflejo++ cuando te ataque.' },
  { n: 'III', donde: 'Castillo de Bestia, el puente donde luchas contra Xaldin.', t: 'Equipa Sigue al Viento y recoge las bolitas que suelta con Superplaneador o Carrera Rápida. Sirve el Anillo magnético.' },
  { n: 'IV', donde: 'Tierra de Dragones, en la puerta del Palacio.', t: 'Carga de Locura y Forma Sabia para disparar a los enemigos sin que te toquen.' },
  { n: 'V', donde: 'Agrabah, sala del tesoro al fondo de la Cueva de las Maravillas.', t: 'Forma Final y Piro++ sin parar.' },
  { n: 'VI', donde: 'Coliseo del Olimpo, Cuevas del Inframundo, Atrio (donde luchaste contra Demyx).', t: 'Forma Final y Electro++. Lleva unos cuantos Éteres.' },
  { n: 'VII', donde: 'Villa Crepúsculo, alcantarillas (donde luchaste contra Vivi).', t: 'Forma Final y Reflejo++.' },
  { n: 'VIII', donde: 'Villa Crepúsculo, la Torre (coge el tren en la estación).', t: 'Complicada. Con Carga de Locura, Forma Maestra y Electro++; sin PM, salta y ataca sin parar. Otra opción: Forma Sabia disparando a media distancia y acercándote rápido cuando salga despedida.' },
  { n: 'IX', donde: 'Vergel Radiante, donde luchaste contra Demyx.', t: 'Carga de Locura y golpéala con Corte horizontal.' },
  { n: 'X', donde: 'Port Royal, antes de la sala del tesoro de la Isla de Muerta.', t: 'Forma Valiente y golpea a la verdadera.' },
  { n: 'XI', donde: 'Río Eterno, el canal.', t: 'Fenrir, Combo Negativo y Letal+. Forma Sabia y dispárale sin parar.' },
  { n: 'XII', donde: 'Villa Crepúsculo, delante de la mansión.', t: 'Carga de Locura y Forma Sabia. Dispara mientras te mueves para alcanzar a todos los enemigos posibles.' },
  { n: 'XIII', donde: 'Vergel Radiante, donde luchaste contra los 1000 sincorazón.', t: 'Tras satisfacer a las otras doce, acércate y habla con ellas.' },
];
