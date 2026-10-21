// Detalle de cada combate del Coso Virtual: rondas, reto extra de la versión HD, emblema y estrategia.
// Rondas y retos: KHWiki (página de cada combate), con los nombres de la Wiki ES (enlaces entre idiomas).
// Los jefes llevan 0 como número. Generado el 21-10-2026; ver notas/investigacion-builds.md.

// Página de KHWiki de cada combate (para enlazar la fuente).
export const COSO_EN = {
  'dia-del-juicio': 'Day_of_Reckoning', 'perdicion-rodada': 'Wheels_of_Misfortune', 'traicionera-avaricia': 'Risky_Riches',
  'rueca-loca': 'Weaver_Fever', 'carcelero-implacable': 'Sinister_Sentinel', 'el-conjurador': 'Dead_Ringer',
  'amenaza-conjunta': 'Combined_Threat', 'tesoro-peleon': 'Treasure_Tussle', 'castigo-inexorable': 'Harsh_Punishment',
  'halito-gelido': 'A_Time_to_Chill', 'maestro-de-ilusiones': 'Copycat_Crisis', 'custodios-del-coso': 'Keepers_of_the_Arena',
  'engendro-marino': 'Monster_of_the_Sea', 'vil-venganza': "Villains'_Vendetta", 'mentor-de-la-luz': "Light's_Lessons",
  'oscuridad-manifiesta': 'Peering_into_Darkness',
};

export const COSO_RONDAS = {
  'amenaza-conjunta': { reto: "Supera el combate en menos de 5:30.", rondas: [[["Picantón", 6], ["Desgarrador", 6], ["Rastreador", 3], ["Cubabum", 5]], [["Bravucón", 9], ["Trabacronos", 1], ["Rastreador", 3], ["Vialéfico", 9]], [["Salmarina", 6], ["Trabacronos", 3], ["Aluvión", 11], ["Cubabum", 4]], [["Bravucón", 6], ["Mandrágora", 6], ["Rastreador", 4], ["Atisbota", 11]], [["Trabacronos", 3], ["Monogoneta", 4], ["Cubabum", 8], ["Mostacete", 7]], [["Triarmadura", 0]]] },
  'carcelero-implacable': { reto: "Bloquea con éxito al menos 20 ataques.", rondas: [[["Bravucón", 7], ["Aluvión", 5], ["Picantón", 10], ["Desgarrador", 5]], [["Bravucón", 5], ["Aluvión", 11], ["Picantón", 6], ["Desgarrador", 6]], [["Picantón", 6], ["Cubabum", 8], ["Giraespinas", 4], ["Salmarina", 5]], [["Chiflanejo", 11], ["Desgarrador", 8], ["Cubabum", 8], ["Cleptorrapaz", 4]], [["Ferrocustodio II", 0]]] },
  'castigo-inexorable': { reto: "Cúrate 3 veces como mucho.", rondas: [[["Bravucón", 9], ["Monogoneta", 9], ["Desgarrador", 9], ["Atisbota", 9]], [["Batehachas", 12], ["Salmarina", 6], ["Bravucón Acorazado", 5], ["Desgarrador", 8]], [["Salmarina", 6], ["Rastreador", 4], ["Cubabum", 8], ["Vialéfico", 5]], [["Bravucón Acorazado", 7], ["Trabacronos", 3], ["Cubabum", 8], ["Vialéfico", 14]], [["Cleptorrapaz", 9], ["Salmarina", 9], ["Bravucón", 9], ["Cubabum", 9]], [["Ferrocustodio III", 0]]] },
  'custodios-del-coso': { reto: "Cúrate 15 veces como mucho.", rondas: [[["Batehachas", 9], ["Aluvión", 6], ["Bravucón Acorazado", 6], ["Mandrágora", 9]], [["Monogoneta", 14], ["Cleptorrapaz", 7], ["Salmarina", 6]], [["Trabacronos", 4], ["Cubabum", 13], ["Mandrágora", 6], ["Bravucón Acorazado", 7]], [["Ferrocustodio III", 0]], [["Idolotrío", 6], ["Bravucón", 10], ["Desgarrador", 10], ["Salmarina", 6]], [["Giraespinas", 6], ["Cubabum", 8], ["Batehachas", 7], ["Mostacete", 9]], [["Idolotrío", 8], ["Mandrágora", 8], ["Bravucón Acorazado", 7], ["Desgarrador", 7]], [["Rastreador", 6], ["Mostacete", 7], ["Mandrágora", 12], ["Bravucón Silvestre", 7]], [["Ferrocustodio IV", 0]]] },
  'dia-del-juicio': { reto: "Cúrate 5 veces como mucho.", rondas: [[["Bravucón", 5], ["Aluvión", 7], ["Picantón", 6], ["Desgarrador", 6]], [["Picantón", 8], ["Bravucón", 6], ["Giraespinas", 3], ["Desgarrador", 6]], [["Chiflanejo", 6], ["Bravucón", 10], ["Monogoneta", 3], ["Cleptorrapaz", 4]], [["Ferrocustodio I", 0]]] },
  'el-conjurador': { reto: "Cúrate 3 veces como mucho.", rondas: [[["Bravucón", 5], ["Aluvión", 6], ["Picantón", 11], ["Atisbota", 5]], [["Aluvión", 10], ["Rastreador", 4], ["Cubabum", 3], ["Giraespinas", 8]], [["Aluvión", 6], ["Chiflanejo", 5], ["Rastreador", 8], ["Vialéfico", 11]], [["Monogoneta", 6], ["Desgarrador", 7], ["Rastreador", 9], ["Cubabum", 6]], [["Maestro Imitador", 0]]] },
  'engendro-marino': { reto: "Supera el combate en menos de 7:30.", rondas: [[["Batehachas", 8], ["Salmarina", 4], ["Bravucón", 7], ["Desgarrador", 4]], [["Monstruo", 0]], [["Batehachas", 4], ["Atisbota", 8], ["Giraespinas", 7], ["Idolotrío", 3]], [["Monstruo", 0]], [["Batehachas", 4], ["Salmarina", 6], ["Bravucón", 8], ["Idolotrío", 5]], [["Monstruo", 0]], [["Batehachas", 4], ["Salmarina", 6], ["Bravucón", 8], ["Idolotrío", 5]], [["Monstruo", 0]]] },
  'halito-gelido': { reto: "Bloquea con éxito al menos 50 ataques.", rondas: [[["Baularaña", 8], ["Cleptorrapaz", 3], ["Mandrágora", 4], ["Bravucón Acorazado", 4]], [["Salmarina", 7], ["Chiflanejo", 4], ["Rastreador", 5], ["Cubabum", 4]], [["Giraespinas", 7], ["Bravucón Silvestre", 7], ["Trabacronos", 2], ["Mandrágora", 7]], [["Hades", 0], ["Zack", 0]], [["Mostacete", 8], ["Bravucón", 7], ["Idolotrío", 4], ["Vialéfico", 3]], [["Vialéfico", 11], ["Rastreador", 3], ["Bravucón Acorazado", 6]], [["Picantón", 14], ["Monogoneta", 2], ["Bravucón Silvestre", 4], ["Cubabum", 6]], [["Coloso de Hielo", 0]]] },
  'maestro-de-ilusiones': { reto: "Suma al menos 15 cambios de estilo y Tiros certeros.", rondas: [[["Bravucón", 4], ["Chiflanejo", 6], ["Idolotrío", 10], ["Mostacete", 7]], [["Cleptorrapaz", 5], ["Monogoneta", 7], ["Baularaña", 7], ["Cubabum", 8]], [["Salmarina", 10], ["Bravucón Acorazado", 9], ["Mandrágora", 8], ["Giraespinas", 4]], [["Niscalino", 200]], [["Batehachas", 5], ["Bravucón", 4], ["Giraespinas", 7], ["Vialéfico", 8]], [["Salmarina", 6], ["Chiflanejo", 4], ["Idolotrío", 9], ["Bravucón Silvestre", 6]], [["Cleptorrapaz", 5], ["Bravucón Acorazado", 4], ["Trabacronos", 5], ["Mandrágora", 8]], [["Maestro Imitador", 0]]] },
  'mentor-de-la-luz': { reto: "Bloquea con éxito al menos 100 ataques.", rondas: [[["Armadura de Eraqus", 0]]] },
  'oscuridad-manifiesta': { reto: "Supera el combate en menos de 25:00.", rondas: [[["Noheart", 0]]] },
  'perdicion-rodada': { reto: "Supera el combate en menos de 6:00.", rondas: [[["Atisbota", 9], ["Giraespinas", 4], ["Chiflanejo", 4], ["Picantón", 5]], [["Cleptorrapaz", 3], ["Monogoneta", 10], ["Baularaña", 6], ["Salmarina", 7]], [["Picantón", 7], ["Bravucón", 4], ["Vialéfico", 5], ["Batehachas", 6]], [["Carroza Poseída", 0]]] },
  'rueca-loca': { reto: "Suma al menos 8 cambios de estilo y Tiros certeros.", rondas: [[["Bravucón", 7], ["Aluvión", 3], ["Salmarina", 4], ["Vialéfico", 4]], [["Desgarrador", 7], ["Giraespinas", 8], ["Salmarina", 5], ["Bravucón", 3]], [["Bravucón", 4], ["Picantón", 9], ["Salmarina", 7], ["Giraespinas", 4]], [["Rueca Fatal", 0]]] },
  'tesoro-peleon': { reto: "Consigue al menos 1.750 platines.", rondas: [[["Baularaña", 16], ["Cubabum", 2], ["Picantón", 4], ["Salmarina", 4]], [["Trabacronos", 3], ["Chiflanejo", 7], ["Baularaña", 14], ["Cleptorrapaz", 9]], [["Baularaña", 21], ["Avituallador", 6]]] },
  'traicionera-avaricia': { reto: "Consigue al menos 1.400 platines.", rondas: [[["Baularaña", 8], ["Aluvión", 3], ["Desgarrador", 3]], [["Baularaña", 12], ["Cleptorrapaz", 3], ["Trabacronos", 1], ["Bravucón", 3]], [["Baularaña", 18], ["Bravucón", 4], ["Chiflanejo", 4], ["Avituallador", 4]]] },
  'vil-venganza': { reto: "Suma al menos 25 cambios de estilo y Tiros certeros.", rondas: [[["Ferrocustodio I", 0]], [["Carroza Poseída", 0]], [["Rueca Fatal", 0]], [["Ferrocustodio II", 0]], [["Coloso de Hielo", 0]], [["Ferrocustodio III", 0]], [["Triarmadura", 0]], [["Ferrocustodio IV", 0]]] },
};

// Estrategia por combate. `f`: claves de FUENTES; 'khwiki' = la página de KHWiki de ese combate.
// `piezas`: fichas de la build que se pueden abrir ([pieza, personaje con el que se abre]).
// `build`: combate de la build recomendada al que lleva el enlace.
// Los comandos sin nombre oficial en castellano comprobado se dejan en inglés y se marcan.
export const COSO_GENERAL = {
  texto: 'Haz las misiones después de terminar las tres historias y con todas las habilidades. Barre a los nescientes con Megafulgor o Imán++ y, contra los jefes, ataca solo con Tiro certero. Lleva un par de Curas y algunas Pociones.',
  piezas: [['megafulgor', 'terra'], ['iman', 'ventus'], ['rayo', 'terra'], ['multivortice', 'ventus'], ['chorro', 'aqua']],
  build: 'coso',
  f: ['guiaSteam'],
};

export const COSO_ESTRATEGIA = {
  'traicionera-avaricia': {
    texto: 'Cada ronda empieza con una oleada de Baularañas, y en la última aparecen Avitualladores, que sueltan los ingredientes de los helados. Se puede hacer a cualquier nivel. Para los Avitualladores, KHWiki recomienda un Tiro certero de proyectiles con muchos objetivos; la guía de Steam, lanzar Imán++ y otro nada más acabar hasta derrotar al grupo.',
    piezas: [['iman', 'ventus']],
    f: ['khwiki', 'guiaSteam'],
  },
  'el-conjurador': {
    texto: 'Tras las rondas de nescientes llega el Maestro Imitador: golpea con su libro, se rodea de páginas, recorre la arena envuelto en fuego, dispara rayos de luz y oscuridad y, lo más molesto, crea copias de tu personaje. No es un jefe difícil: deja muchos huecos y sus ataques son flojos. Empieza con un Tiro certero y sigue con magia fuerte o ataques rápidos de largo alcance como Estocada Veloz. Cuando cree docenas de copias, usa Tiro certero y evita que te cieguen. Lleva Cura++ y magia avanzada.',
    piezas: [],
    f: ['khwiki'],
  },
  'maestro-de-ilusiones': {
    texto: 'Las hordas son más duras que en «El Conjurador»: lleva uno o dos comandos de área como Megafulgor (KHWiki cita también Meteor y Glacier, nombres en inglés), pero no llenes la baraja solo con eso: añade uno o dos Cura++, Estocada Veloz y Piro++ (o Triple Piro++ con Aqua). Contra el Maestro Imitador, empieza con un Tiro certero a nivel máximo; se le puede dañar mientras recorre la arena envuelto en fuego. Contra sus rayos de luz y oscuridad, mantente en el aire (a Aqua le ayuda Vuelo Doble); esquivar los rayos oscuros no te hace invulnerable y te ciegan. Puede crear copias varias veces: con Ventus, Superplaneador evita que te absorba, y Bloqueo Cura o Coraza Cura son muy útiles.',
    piezas: [['megafulgor', 'terra'], ['bloqueoCura', 'ventus'], ['corazaCura', 'aqua']],
    f: ['khwiki'],
  },
  'custodios-del-coso': {
    texto: 'Nueve rondas con dos Ferrocustodios. Para las hordas, comandos de área: Megafulgor o Imán++ (KHWiki cita también Quake y Faith, nombres en inglés). Aquí se gana el Tiro certero definitivo de cada personaje.',
    piezas: [['megafulgor', 'terra'], ['iman', 'ventus']],
    f: ['khwiki', 'guiaSteam'],
  },
  'engendro-marino': {
    texto: 'El combate acaba en cuanto derrotas a Monstruo. Es el mejor sitio para farmear medallas: lanza Megafulgor a los nescientes y, contra Monstruo, golpea dos barriles hacia él para aturdirlo, usa Cuadros de minas en su boca y remata con Trance armónico (se desbloquea con 140 puntos del álbum de pegatinas). En menos de un minuto ganas 675 medallas.',
    piezas: [['megafulgor', 'terra']],
    f: ['khwiki', 'guiaSteam'],
  },
  'vil-venganza': {
    texto: 'Una serie con los jefes del Coso, mucho más agresivos que antes. No merece la pena llevar Megafulgor ni ataques de grupo: lleva ataques que persigan al enemigo (Piro++ o Triple Piro++), un Tiro certero con muchos objetivos y Cura++ a nivel alto. KHWiki recomienda dos Estocada Veloz con cinco Ataque Veloz para dejar aturdidos a los cuatro Ferrocustodios, Bloqueo Cura o Coraza Cura y, con Aqua, dos Mina Astuta; su Rueda Veloz a NV 4 la deja invulnerable mientras esquiva.',
    piezas: [['bloqueoCura', 'terra'], ['corazaCura', 'aqua'], ['rueda', 'aqua']],
    f: ['khwiki'],
  },
  'mentor-de-la-luz': {
    texto: 'Solo Curas en la baraja y Bloqueo Tino o Coraza Tino. Ataca únicamente con Tiro certero, sin obsesionarte con cargarlo al máximo, y bloquea los ataques para recuperar la barra Tino.',
    piezas: [['bloqueoTino', 'terra'], ['corazaTino', 'aqua']],
    build: 'luz',
    f: ['guiaSteam'],
  },
  'oscuridad-manifiesta': {
    texto: 'Lo mismo que en «Mentor de la Luz»: solo Curas, Bloqueo Tino o Coraza Tino y ataques con Tiro certero. Empiezas contra Innómita, la llave espada, y cuando la inutilizas pasas a Noheart. Al ganar consigues la Corona Eterna.',
    piezas: [['bloqueoTino', 'terra'], ['corazaTino', 'aqua']],
    build: 'luz',
    f: ['guiaSteam', 'khwiki'],
  },
};

// Una fuente por combate: `khwikiCoso:<id>`.
export const FUENTES_COSO = Object.fromEntries(Object.entries(COSO_EN).map(([id, en]) => [
  `khwikiCoso:${id}`, { nombre: `KHWiki — ${en.replace(/_/g, ' ')}`, url: `https://www.khwiki.com/${encodeURIComponent(en)}` },
]));
