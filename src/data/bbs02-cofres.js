// Los 41 cofres de Kingdom Hearts 0.2 Birth by Sleep por zona, en el orden de Destiny Islands. A mano.
// Fuente: Destiny Islands «Treasure Chests» (contenido, orden y lugar; indicaciones redactadas con palabras propias). Recuento
// por zona y visita contrastado con Laps4 (1, 5+4, 8+5, 10+2, 5+1). Nombres de objetos: Wiki ES (Poción, Ultrapoción, Omnipoción,
// Éter, Omniéter, Elixir, Omnielixir: los de toda la serie). Las reliquias del Zodíaco no tienen nombre en castellano con fuente:
// traducción propia (`en`: nombre de KHWiki). Ids de marca: bbs02.cofre.<zona>.<n>.
export const FUENTES_COFRES_BBS02 = ['destinyCofresBbs02', 'laps4Bbs02', 'khwikiZodiaco', 'wikiEsPocion', 'videoCofresBbs02'];

export const INTRO_COFRES_BBS02 = 'Son 41 cofres. 29 están desde la primera visita; los otros 12 aparecen al cargar la partida terminada y cada uno guarda una reliquia de un signo del Zodíaco, que abren el camino al jefe secreto. Si te dejas alguno, vuelve con el teletransporte de los puntos de guardado.';

// Contenido en inglés (Destiny Islands) → [nombre visible, tipo].
const OBJ = {
  Potion: 'Poción', 'Hi-Potion': 'Ultrapoción', 'Mega-Potion': 'Omnipoción', Ether: 'Éter', 'Mega-Ether': 'Omniéter',
  Elixir: 'Elixir', Megalixir: 'Omnielixir',
};
const SIGNO = {
  Aries: 'Aries', Taurus: 'Tauro', Gemini: 'Géminis', Cancer: 'Cáncer', Leo: 'Leo', Virgo: 'Virgo', Libra: 'Libra',
  Scorpio: 'Escorpio', Sagittarius: 'Sagitario', Capricorn: 'Capricornio', Aquarius: 'Acuario', Pisces: 'Piscis',
};
export const TIPOS_COFRE_BBS02 = { objeto: 'Objeto', mapa: 'Mapa', reliquia: 'Reliquia del Zodíaco' };

// n, en (contenido de Destiny Islands), v (1: primera visita; 2: al cargar la partida terminada), d (dónde).
const c = (n, en, d, v = 1) => {
  const signo = en.match(/^(\w+) Relic$/)?.[1];
  if (signo) return { n, v: 2, tipo: 'reliquia', nombre: `Reliquia de ${SIGNO[signo]}`, en, d };
  if (en === 'Map') return { n, v, tipo: 'mapa', d };
  return { n, v, tipo: 'objeto', nombre: OBJ[en], d };
};

export const ZONAS_COFRES_BBS02 = [
  {
    id: 'carretera', nombre: 'Carretera principal',
    nota: 'Puede perderse: está delante al llegar a la Aldea fortificada y a esta zona no se vuelve.',
    cofres: [
      c(1, 'Potion', 'Justo delante, al acercarte a la entrada de la Aldea fortificada.'),
    ],
  },
  {
    id: 'aldea', nombre: 'Aldea fortificada', obj: 37,
    cofres: [
      c(1, 'Map', 'Tras la escena en que se hunde el puente, a la derecha del arco que vuelve al pueblo.'),
      c(2, 'Ether', 'Desde el punto de guardado de la fuente, ve pegado a la derecha y gira a la derecha entre las primeras casas; luego a la izquierda. Está detrás de la casa, junto a unos barriles.'),
      c(3, 'Potion', 'Desde la fuente, ve al toldo de más a la izquierda y gira a la izquierda: al fondo, junto a la pared del acantilado de cristal.'),
      c(4, 'Potion', 'Desde la fuente, sube la escalera del fondo y gira a la derecha. En la bifurcación toma el camino de la izquierda, que sube por plataformas: está delante tras unas pocas.'),
      c(5, 'Ether', 'En esa misma bifurcación, el camino de la derecha baja a un patio redondo: junto a la farola de enfrente del engranaje.'),
      c(6, 'Virgo Relic', 'Sube la escalera del fondo desde la fuente y gira enseguida a la izquierda: junto a la farola.'),
      c(7, 'Aries Relic', 'Desde la fuente, sube por las plataformas a la derecha de la escalera del fondo: delante, a la derecha, junto a cuatro cajas apiladas.'),
      c(8, 'Sagittarius Relic', 'Desde la reliquia de Virgo, toma el camino de la izquierda que sube por encima del pueblo y sigue las plataformas hacia la izquierda. Con el Vuelo Doble y el deslizamiento aéreo llegas a una gran casa flotante; sigue saltando hasta el final, el punto más alto del pueblo.'),
      c(9, 'Aquarius Relic', 'Vuelve al cofre del acantilado (n.º 3) y sube por las plataformas de su izquierda. Cuando cruces saltando por encima de las farolas, date la vuelta y déjate caer: está delante.'),
    ],
  },
  {
    id: 'mundo-interior', nombre: 'Mundo interior', obj: 39,
    cofres: [
      c(1, 'Map', 'Nada más entrar, a la derecha.'),
      c(2, 'Mega-Potion', 'Encima del arco del centro de la sala principal; se sube por las columnas de al lado.'),
      c(3, 'Mega-Ether', 'Primer espejo en sentido antihorario desde el punto de guardado, el de la sala llena de cofres abiertos. Dentro, abre el que estaba cerrado en el reflejo: el más cercano al espejo de salida, a la izquierda (objetivo 28).'),
      c(4, 'Potion', 'Espejo de la sala de pilares: golpea el primer pilar brillante y examínalo para invertir la gravedad. El cofre está a su derecha.'),
      c(5, 'Hi-Potion', 'En la misma sala, golpea el segundo y el tercer pilar. Al examinar el tercero y volver a invertir la gravedad, está junto al pilar de delante del espejo de salida.'),
      c(6, 'Hi-Potion', 'Espejo de la escalera: súbela y examina el espejo dos veces. Al volver al pie de la escalera, está en una sala nueva a la izquierda.'),
      c(7, 'Megalixir', 'Espejo de la mina: en la zona de la rampa giratoria, antes de la salida, hay una plataforma alta a la izquierda (mirando a la salida). Examina el espejo central cuando la rampa apunte hacia ella, sube y salta.'),
      c(8, 'Hi-Potion', 'Baja al espejo central, gira la rampa hacia la salida y súbela: a la izquierda del espejo de salida.'),
      c(9, 'Cancer Relic', 'Sala principal: detrás del altar del espejo de la escalera.'),
      c(10, 'Pisces Relic', 'Entra en el espejo de la escalera: justo a tu espalda.'),
      c(11, 'Gemini Relic', 'Sala de pilares: activa los dos primeros pilares y ve al altar del espejo de salida. Está dos pilares a la derecha del cofre n.º 5.'),
      c(12, 'Leo Relic', 'Espejo de la mina, por el camino principal, junto a uno de los espejos.'),
      c(13, 'Libra Relic', 'Desde la reliquia de Leo, sube a la gran zona abierta donde salen los sincorazón: en el borde de la plataforma.'),
    ],
  },
  {
    id: 'bosque', nombre: 'Bosque espinoso', obj: 44,
    cofres: [
      c(1, 'Map', 'Un poco después del primer punto de guardado, a la derecha.'),
      c(2, 'Mega-Potion', 'En la sala grande de los pilares: súbelos, recorre el raíl en espiral hasta una plataforma alta y salta a otra cercana.'),
      c(3, 'Ether', 'En el segundo punto de guardado, en la pared de la izquierda hay espinas rojas: rómpelas con Piro. Está en un hueco detrás.'),
      c(4, 'Potion', 'Sigue desde el segundo punto de guardado hasta el tramo con Lados Oscuros a los lados. Sube los escalones de la izquierda, rompe con Piro las espinas rojas de arriba, salta y cruza con el deslizamiento aéreo.'),
      c(5, 'Ether', 'Más adelante el camino se parte en dos escaleras. Sube la de la izquierda, rompe con Piro las espinas rojas del otro lado del hueco y salta.'),
      c(6, 'Hi-Potion', 'Sube la escalera de la derecha: se rompe y deja un saliente a la derecha. Salta a él y de ahí a otro más lejos.'),
      c(7, 'Hi-Potion', 'Desde el saliente del n.º 6, en vez de volver a la escalera, déjate caer y sigue el camino hacia abajo.'),
      c(8, 'Potion', 'Sube la escalera de la derecha hasta arriba y vuelve a bajar. En la bifurcación (espinas rojas hacia arriba, negras hacia abajo) toma la de abajo: al final.'),
      c(9, 'Potion', 'Vuelve a las espinas rojas, rómpelas y en la siguiente bifurcación toma la derecha: a pocos pasos hay una grieta en el suelo. Baja por ella.'),
      c(10, 'Mega-Potion', 'En la última escalera antes del Lado Oscuro, pégate a la pared derecha hasta un camino que baja: al final.'),
      c(11, 'Taurus Relic', 'Vuelve al mapa (n.º 1) y, en vez de cruzar por el raíl, déjate caer al valle.'),
      c(12, 'Scorpio Relic', 'Pasada la sala de los pilares (n.º 2), sigue el camino principal hasta que se divide y baja por el de la izquierda: al final.'),
    ],
  },
  {
    id: 'profundidades', nombre: 'Profundidades de la oscuridad', obj: 48,
    cofres: [
      c(1, 'Map', 'Por el camino principal, un poco más arriba del punto de guardado, a la derecha.'),
      c(2, 'Mega-Ether', 'Sigue hasta un tramo con una rampa en el centro. Al otro lado hay una cueva que baja por dentro de la rampa: en un claro a la izquierda.'),
      c(3, 'Hi-Potion', 'Vuelve al camino principal hasta la bajada hacia la luz del fondo: en un pequeño saliente a la derecha.'),
      c(4, 'Mega-Ether', 'Al pie de esa bajada, a la izquierda.'),
      c(5, 'Elixir', 'Última sala antes de salir: a la izquierda de la gran abertura del fondo.'),
      c(6, 'Capricorn Relic', 'En esa misma sala, encima del pilar a la derecha de la gran abertura.'),
    ],
  },
];
// Los mapas se llaman como su zona (formato de KH III: «Mapa: <zona>»).
ZONAS_COFRES_BBS02.forEach((z) => z.cofres.forEach((x) => { if (x.tipo === 'mapa') x.nombre = `Mapa: ${z.nombre}`; }));
