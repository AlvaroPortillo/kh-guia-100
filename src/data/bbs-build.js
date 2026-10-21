// Build recomendada de BBS Final Mix: qué equipar en cada combate difícil, qué es cada pieza
// y cómo se consigue. Regla: ningún dato sin fuente (claves de FUENTES_BUILD o de FUENTES).
// Datos contrastados el 21-10-2026; detalle en notas/investigacion-builds.md.

export const IMG_BUILD = 'assets/img/bbs/build/';

export const FUENTES_BUILD = {
  wikiEsCura: { nombre: 'Wiki ES — Cura', url: 'https://kingdomhearts.fandom.com/es/wiki/Cura' },
  wikiEsEsna: { nombre: 'Wiki ES — Esna', url: 'https://kingdomhearts.fandom.com/es/wiki/Esna' },
  wikiEsMegafulgor: { nombre: 'Wiki ES — Megafulgor', url: 'https://kingdomhearts.fandom.com/es/wiki/Megafulgor' },
  wikiEsLluviaPiro: { nombre: 'Wiki ES — Lluvia Piro++', url: 'https://kingdomhearts.fandom.com/es/wiki/Lluvia_Piro%2B%2B' },
  wikiEsTardoPiro: { nombre: 'Wiki ES — Tardo Piro++', url: 'https://kingdomhearts.fandom.com/es/wiki/Tardo_Piro%2B%2B' },
  wikiEsFreno: { nombre: 'Wiki ES — Freno', url: 'https://kingdomhearts.fandom.com/es/wiki/Freno' },
  wikiEsMagneto: { nombre: 'Wiki ES — Magneto (Imán)', url: 'https://kingdomhearts.fandom.com/es/wiki/Magneto' },
  wikiEsPiroembestida: { nombre: 'Wiki ES — Piroembestida', url: 'https://kingdomhearts.fandom.com/es/wiki/Piroembestida' },
  wikiEsEmbestida: { nombre: 'Wiki ES — Embestida', url: 'https://kingdomhearts.fandom.com/es/wiki/Embestida' },
  wikiEsBatacazo: { nombre: 'Wiki ES — Batacazo', url: 'https://kingdomhearts.fandom.com/es/wiki/Batacazo' },
  wikiEsRayo: { nombre: 'Wiki ES — Rayo Célere', url: 'https://kingdomhearts.fandom.com/es/wiki/Rayo_C%C3%A9lere' },
  wikiEsMultivortice: { nombre: 'Wiki ES — Multivórtice', url: 'https://kingdomhearts.fandom.com/es/wiki/Multiv%C3%B3rtice' },
  wikiEsChorro: { nombre: 'Wiki ES — Chorro Irisado', url: 'https://kingdomhearts.fandom.com/es/wiki/Chorro_Irisado' },
  wikiEsFogonazo: { nombre: 'Wiki ES — Fogonazo', url: 'https://kingdomhearts.fandom.com/es/wiki/Fogonazo' },
  wikiEsImpulso: { nombre: 'Wiki ES — Impulso Sónico', url: 'https://kingdomhearts.fandom.com/es/wiki/Impulso_S%C3%B3nico' },
  wikiEsVoltereta: { nombre: 'Wiki ES — Voltereta', url: 'https://kingdomhearts.fandom.com/es/wiki/Voltereta' },
  wikiEsRueda: { nombre: 'Wiki ES — Rueda Veloz', url: 'https://kingdomhearts.fandom.com/es/wiki/Rueda_Veloz' },
  wikiEsBloqueo: { nombre: 'Wiki ES — Bloqueo', url: 'https://kingdomhearts.fandom.com/es/wiki/Bloqueo' },
  wikiEsBloqueoCura: { nombre: 'Wiki ES — Bloqueo Cura', url: 'https://kingdomhearts.fandom.com/es/wiki/Bloqueo_Cura' },
  wikiEsCorazaCura: { nombre: 'Wiki ES — Coraza Cura', url: 'https://kingdomhearts.fandom.com/es/wiki/Coraza_Cura' },
  wikiEsBloqueoTino: { nombre: 'Wiki ES — Bloqueo Tino', url: 'https://kingdomhearts.fandom.com/es/wiki/Bloqueo_Tino' },
  wikiEsAtraccion: { nombre: 'Wiki ES — Atracción (habilidad)', url: 'https://kingdomhearts.fandom.com/es/wiki/Atracci%C3%B3n_(habilidad)' },
  wikiEsElectroSube: { nombre: 'Wiki ES — Extraelectro (Electro ↑)', url: 'https://kingdomhearts.fandom.com/es/wiki/Extraelectro' },
  wikiEsAtaqueVeloz: { nombre: 'Wiki ES — Ataque Veloz', url: 'https://kingdomhearts.fandom.com/es/wiki/Ataque_Veloz' },
  wikiEsPrisaMagica: { nombre: 'Wiki ES — Prisa Mágica', url: 'https://kingdomhearts.fandom.com/es/wiki/Prisa_M%C3%A1gica' },
  wikiEsUltimoEstertor: { nombre: 'Wiki ES — Último Estertor', url: 'https://kingdomhearts.fandom.com/es/wiki/%C3%9Altimo_Estertor' },
  wikiEsUnaVezMas: { nombre: 'Wiki ES — Una vez más', url: 'https://kingdomhearts.fandom.com/es/wiki/Una_vez_m%C3%A1s' },
  khwikiMeld: { nombre: 'KHWiki — Command Meld (síntesis de comandos)', url: 'https://www.khwiki.com/Command_Meld' },
  khwikiAbilities: { nombre: 'KHWiki — Abilities (KHBBS)', url: 'https://www.khwiki.com/Abilities_(KHBBS)' },
  khwikiThunderSurge: { nombre: 'KHWiki — Thunder Surge (Carga Eléctrica)', url: 'https://www.khwiki.com/Thunder_Surge' },
  khwikiThunder: { nombre: 'KHWiki — Thunder (Electro)', url: 'https://www.khwiki.com/Thunder' },
  khwikiFire: { nombre: 'KHWiki — Fire (Piro)', url: 'https://www.khwiki.com/Fire' },
  khwikiStop: { nombre: 'KHWiki — Stop (Paro)', url: 'https://www.khwiki.com/Stop' },
  khwikiCure: { nombre: 'KHWiki — Cure (Cura)', url: 'https://www.khwiki.com/Cure' },
  khwikiMagnet: { nombre: 'KHWiki — Magnet (Imán)', url: 'https://www.khwiki.com/Magnet' },
  khwikiLightningRay: { nombre: 'KHWiki — Lightning Ray (Rayo Célere)', url: 'https://www.khwiki.com/Lightning_Ray' },
  khwikiBlock: { nombre: 'KHWiki — Renewal Block / Focus Block', url: 'https://www.khwiki.com/Renewal_Block' },
  khwikiBarrier: { nombre: 'KHWiki — Barrier (Coraza)', url: 'https://www.khwiki.com/Barrier' },
  khwikiDeck: { nombre: 'KHWiki — Deck Command (KHBBS): ranuras, nivel, clase y elemento; vías de obtención en cada comando', url: 'https://www.khwiki.com/Deck_Command_(KHBBS)' },
  khwikiShotlock: { nombre: 'KHWiki — Shotlock (Tiros certeros)', url: 'https://www.khwiki.com/Shotlock' },
  wikiEsTableros: { nombre: 'Wiki ES — Tablero de Comandos (nombres de los tableros)', url: 'https://kingdomhearts.fandom.com/es/wiki/Tablero_de_Comandos' },
  khwikiNexos: { nombre: 'KHWiki — Dimension Link (lista de Nexos-D)', url: 'https://www.khwiki.com/Dimension_Link' },
  khwikiPegatinas: { nombre: 'KHWiki — Sticker Album (zona de cada pegatina)', url: 'https://www.khwiki.com/Sticker_Album' },
  khwikiTableros: { nombre: 'KHWiki — Command Board y página de cada tablero (casillas bonus; mapas de la guía oficial japonesa)', url: 'https://www.khwiki.com/Command_Board' },
  khwikiImagenes: { nombre: 'KHWiki — imágenes y capturas del juego (kh.wiki.gallery; versión original en inglés)', url: 'https://www.khwiki.com/Category:Kingdom_Hearts_Birth_by_Sleep_images' },
};

// Formas de conseguir algo. `v` decide el icono y la etiqueta.
export const VIAS = {
  inicial: 'Desde el principio',
  cofre: 'Cofre',
  tienda: 'Tienda Moguri',
  sintesis: 'Síntesis',
  tablero: 'Tablero de comandos',
  mision: 'Coso Virtual',
  minijuego: 'Minijuego',
  caida: 'Lo suelta',
};

// Cada pieza: qué es (`que`), por qué se lleva (`por`), cómo se consigue (`como`, con `pj` si solo
// vale para algunos), `solo` (personajes que pueden usarla), receta recomendada y de dónde sacar sus ingredientes. `img` sin extensión:
// las animadas tienen además `<img>-fijo.webp` para quien prefiere menos movimiento.
export const PIEZAS = {
  corona: {
    nombre: 'Corona Eterna', cat: 'Llave espada', img: (pj) => `corona-${pj}`, fija: true,
    que: 'Fuerza +8 y Magia +7. «La llave espada más poderosa. Llena la barra de comandos rápidamente.»',
    por: 'Lleva la llave espada con más daño que tengas.',
    como: [{ v: 'mision', t: 'Derrota a Noheart en «Oscuridad Manifiesta», en el Coso Virtual.' }],
    f: ['wikiEsCorona', 'guiaSteam'],
  },
  artema: {
    nombre: 'Arma Artema', cat: 'Llave espada', img: (pj) => `artema-${pj}`, fija: true,
    que: 'Fuerza +7 y Magia +6.',
    por: 'Si aún no tienes la Corona Eterna.',
    como: [{ v: 'mision', t: 'Completa la misión de nivel 30 «Vil Venganza» del Coso Virtual.' }],
    f: ['wikiEsArtema'],
  },
  cura: {
    nombre: 'Cura', cat: 'Magia',
    que: 'Magia básica de curación. Ocupa una ranura, sube hasta NV 3 y se recarga en 30 s.',
    por: 'Cura normal, no Cura++. Pon la primera de la baraja en acceso rápido.',
    como: [
      { v: 'cofre', t: 'Torre de los Misterios.', pj: ['terra'] },
      { v: 'cofre', t: 'Reino Encantado.', pj: ['ventus', 'aqua'] },
      { v: 'tablero', t: 'Casilla bonus del Tablero de la Llave Espada.' },
      { v: 'tienda', t: 'A la venta tras completar el primer mundo de cada personaje.' },
    ],
    f: ['wikiEsCura', 'guiaSteam'],
  },
  carga: {
    nombre: 'Carga Eléctrica', cat: 'Ataque', img: 'carga-electrica',
    que: 'Ataque avanzado: te envuelves en electricidad y embistes al enemigo, que puede quedar aturdido. Es de elemento rayo, sube hasta NV 4 y se recarga en 15 s.',
    por: 'Golpea al Desconocido cuando corra hacia ti y aléjate esquivando: «esquivar y cargar, esquivar y cargar».',
    como: [
      { v: 'sintesis', t: 'Receta de abajo.' },
      { v: 'tablero', t: 'Casilla bonus del Tablero Secreto.' },
      { v: 'tienda', t: '700 platines, una vez la hayas conseguido por otra vía.' },
    ],
    receta: { a: 'Piroembestida', b: 'Electro+', pct: 100 },
    ingredientes: [
      ['Piroembestida', 'Síntesis Embestida + Piro (100 %). También en la Tienda Moguri (450 platines, tras completar cinco mundos) o la suelta el Giraespinas (50 %).'],
      ['Electro+', 'Síntesis Electro + Electro (100 %), o Tienda Moguri por 600 platines tras completar seis mundos.'],
      ['Embestida', 'Terra y Ventus la tienen desde el principio. Tienda Moguri: 100 platines.'],
      ['Piro', 'Tienda Moguri: 100 platines tras completar tres mundos.'],
      ['Electro', 'Aqua lo tiene desde el principio. Tienda Moguri: 150 platines tras completar tres mundos.'],
    ],
    f: ['wikiEsCarga', 'khwikiThunderSurge', 'wikiEsPiroembestida', 'wikiEsEmbestida', 'khwikiThunder', 'khwikiFire', 'guiaSteam'],
  },
  megafulgor: {
    nombre: 'Megafulgor', cat: 'Magia', img: 'megafulgor',
    que: 'Magia de área enorme. Ocupa dos ranuras, sube hasta NV 6, se recarga en 50 s y llena un 55 % la barra de comandos.',
    por: 'Para barrer a los nescientes de las misiones del Coso (y las ánforas de Hércules).',
    como: [{ v: 'sintesis', t: 'Receta de abajo. Los dos ingredientes tienen que estar a NV 4.' }],
    receta: { a: 'Lluvia Piro++', b: 'Tardo Piro++', pct: 100 },
    ingredientes: [
      ['Lluvia Piro++', 'Cofre del Patio del Palacio, en el Bosque de los Enanitos (Terra y Aqua; hacen falta Salto de Altura e Impulso Aéreo). También en una casilla bonus del Tablero Secreto, o síntesis Aero++ + Piro++ (80 %).'],
      ['Tardo Piro++', 'Síntesis Freno + Piro++ (80 %). Después, Tienda Moguri por 1.800 platines.'],
      ['Freno', 'Cofre del Castillo de los Sueños (Terra y Aqua) o del Vergel Radiante (Ventus); casilla bonus del Tablero de la Llave Espada; lo suelta el Trabacronos (25 %).'],
      ['Piro++', 'Tienda Moguri: 1.200 platines tras completar ocho mundos. También en casillas bonus del Tablero Espacial y del Tablero Calavera.'],
    ],
    f: ['wikiEsMegafulgor', 'wikiEsLluviaPiro', 'wikiEsTardoPiro', 'wikiEsFreno', 'khwikiFire', 'guiaSteam'],
  },
  iman: {
    nombre: 'Imán++', cat: 'Magia', img: 'iman-2',
    que: 'Atrae a los enemigos y les hace daño continuo; muy eficaz para llenar la barra de comandos contra grupos. Sube hasta NV 3 y se recarga en 15 s.',
    por: 'La alternativa a Megafulgor para las hordas.',
    como: [
      { v: 'cofre', t: 'Torre de los Misterios.', pj: ['ventus', 'aqua'] },
      { v: 'sintesis', t: 'Receta de abajo.' },
      { v: 'tablero', t: 'Casillas bonus del Tablero Calavera y del Tablero Secreto.' },
      { v: 'tienda', t: '1.250 platines, una vez lo hayas conseguido por otra vía.' },
      { v: 'caida', t: 'Idolotrío (5 %).' },
    ],
    receta: { a: 'Imán', b: 'Imán+', pct: 100 },
    ingredientes: [
      ['Imán', 'Tienda Moguri: 120 platines tras completar tres mundos.'],
      ['Imán+', 'Premio por ganar a Chip y Chop en el Frutibol (Ciudad Disney). También Tienda Moguri (550 platines tras completar seis mundos) o lo suelta el Orbemedusa (25 %).'],
    ],
    f: ['wikiEsMagneto', 'khwikiMagnet', 'guiaSteam'],
  },
  hilatiempo: {
    nombre: 'Hilatiempo', cat: 'Ataque', img: 'hilatiempo', solo: ['ventus', 'aqua'],
    que: 'Exclusivo de Ventus y Aqua. Ocupa dos ranuras, sube hasta NV 6 y se recarga en 25 s. Pulsando △ saltas de enemigo en enemigo y, al acabar, todos reciben el daño.',
    por: 'En el foro KH13 lo llevan por triplicado en la build de Ventus.',
    como: [
      { v: 'cofre', t: 'País de Nunca Jamás.', pj: ['aqua'] },
      { v: 'sintesis', t: 'Receta de abajo.' },
    ],
    receta: { a: 'Batacazo', b: 'Paro++', pct: 100 },
    ingredientes: [
      ['Batacazo', 'Cofre de la Sala de Juegos de Pete, en Ciudad Disney; casilla del Tablero Calavera; Tienda Moguri por 1.500 platines tras completar ocho mundos.'],
      ['Paro++', 'Tienda Moguri: 1.200 platines tras completar ocho mundos.'],
    ],
    f: ['wikiEsHilatiempo', 'wikiEsBatacazo', 'khwikiStop', 'kh13'],
  },
  rayo: {
    nombre: 'Rayo Célere', cat: 'Tiro certero', img: 'rayo-celere',
    que: 'Tiro certero: embistes a la velocidad de la luz envuelto en rayos. Sube hasta NV 4 y fija hasta 18 objetivos; pulsa ✕ durante el ataque para arrasar más rápido.',
    por: 'Contra los jefes del Coso, ataca solo con Tiro certero. Para Terra, Rayo Célere.',
    como: [
      { v: 'tablero', t: 'Casilla bonus del Tablero Espacial (y del Tablero Secreto), jugando el tablero desde el menú.' },
      { v: 'sintesis', t: 'Receta de abajo.' },
    ],
    receta: { a: 'Electro', b: 'Electro+', pct: null },
    nota: 'La guía de Steam da un 10 % a todas las recetas de Rayo Célere; según la Wiki ES, estas recetas dan Rayo Célere y el 10 % es la probabilidad de que salga otro comando. El tablero es la vía segura.',
    ingredientes: [
      ['Electro', 'Aqua lo tiene desde el principio. Tienda Moguri: 150 platines tras completar tres mundos.'],
      ['Electro+', 'Síntesis Electro + Electro (100 %), o Tienda Moguri por 600 platines tras completar seis mundos.'],
    ],
    f: ['wikiEsRayo', 'khwikiLightningRay', 'khwikiThunder', 'guiaSteam'],
  },
  multivortice: {
    nombre: 'Multivórtice', cat: 'Tiro certero', img: 'multivortice', solo: ['ventus'],
    que: 'El último Tiro certero de Ventus: un remolino de viento gigante. Sube hasta NV 6 y fija hasta 30 objetivos; mueve el stick rápido en el momento justo para golpes extra.',
    por: 'Contra los jefes del Coso, ataca solo con Tiro certero. Para Ventus, Multivórtice.',
    como: [{ v: 'mision', t: 'Completa la misión «Custodios del Coso».' }],
    f: ['wikiEsMultivortice', 'guiaSteam'],
  },
  chorro: {
    nombre: 'Chorro Irisado', cat: 'Tiro certero', img: 'chorro-irisado', solo: ['aqua'],
    que: 'Tiro certero de Aqua. Sube hasta NV 5 y fija hasta 16 objetivos; pulsa ✕ en el momento justo para lanzar más proyectiles.',
    por: 'Contra los jefes del Coso, ataca solo con Tiro certero. Para Aqua, Chorro Irisado.',
    como: [{ v: 'cofre', t: 'Espacio Profundo.' }],
    f: ['wikiEsChorro', 'guiaSteam'],
  },
  fogonazo: {
    nombre: 'Fogonazo', cat: 'Tiro certero', img: 'fogonazo', solo: ['aqua'],
    que: 'El último Tiro certero de Aqua. Sube hasta NV 6 y fija hasta 20 objetivos; mueve el stick rápido en el momento justo para más proyectiles.',
    por: 'Otra opción de Tiro certero para Aqua.',
    como: [{ v: 'mision', t: 'Completa la misión «Custodios del Coso».' }],
    f: ['wikiEsFogonazo'],
  },
  impulso: {
    nombre: 'Impulso Sónico', cat: 'Movimiento', img: 'impulso-sonico', quitar: true, solo: ['terra'],
    que: 'Comando de movimiento exclusivo de Terra: tras usar Impulso, pulsa ▢ para arremeter contra el enemigo. Sube hasta NV 4.',
    por: 'Quítatelo: según la guía, «molesta más que ayuda».',
    como: [{ v: 'minijuego', t: 'Supera las diez primeras rondas de los juegos del Coliseo del Olimpo.' }],
    f: ['wikiEsImpulso', 'guiaSteam'],
  },
  voltereta: {
    nombre: 'Voltereta', cat: 'Movimiento', img: 'voltereta',
    que: 'Comando de movimiento de Ventus: ▢ + una dirección para rodar.',
    por: 'Da más invulnerabilidad al esquivar.',
    como: [{ v: 'inicial', t: 'Ventus la tiene en su baraja desde el principio.' }],
    f: ['wikiEsVoltereta', 'guiaSteam'],
  },
  rueda: {
    nombre: 'Rueda Veloz', cat: 'Movimiento', img: 'rueda-veloz', solo: ['aqua'],
    que: 'Comando de movimiento exclusivo de Aqua (la guía de Steam lo llama «Rueda»). Sube hasta NV 4; con cada nivel recorre más distancia.',
    por: 'Da más invulnerabilidad al esquivar.',
    como: [
      { v: 'inicial', t: 'Aqua la tiene desde el principio.' },
      { v: 'tienda', t: '200 platines.' },
    ],
    f: ['wikiEsRueda', 'guiaSteam'],
  },
  bloqueoCura: {
    nombre: 'Bloqueo Cura', cat: 'Defensa', img: 'bloqueo-cura', solo: ['terra', 'ventus'],
    que: 'Defensa de Terra y Ventus. Bloquea ataques de frente y, si lo consigues, recuperas tanta VT como el daño que te habría hecho el golpe. Sube hasta NV 3.',
    por: 'Contra el Desconocido, bloquear sus espadazos, su ataque en X o su carga te cura.',
    como: [{ v: 'sintesis', t: 'Receta de abajo. Para usar un comando de defensa como ingrediente necesitas dos copias.' }],
    receta: { a: 'Esna', b: 'Bloqueo', pct: 100, alt: 'Cura++ + Bloqueo' },
    ingredientes: [
      ['Esna', 'Tienda Moguri: 600 platines tras completar cinco mundos. Terra la encuentra además en un cofre del acueducto, en el Vergel Radiante.'],
      ['Bloqueo', 'Lo tienes desde el principio; la segunda copia, en la Tienda Moguri por 200 platines (tras completar un mundo).'],
      ['Cura++ (otra receta)', 'Síntesis Cura + Cura+ (100 %) o Tienda Moguri por 1.300 platines tras completar ocho mundos. Cura+ sale de Cura + Cura (100 %).'],
    ],
    f: ['wikiEsBloqueoCura', 'khwikiBlock', 'wikiEsEsna', 'wikiEsBloqueo', 'khwikiMeld', 'khwikiCure', 'guiaSteam'],
  },
  corazaCura: {
    nombre: 'Coraza Cura', cat: 'Defensa', img: 'coraza-cura', solo: ['aqua'],
    que: 'Defensa de Aqua. Bloquea ataques desde todas las direcciones y, si lo consigues, recuperas tanta VT como el daño que te habría hecho el golpe. Sube hasta NV 3.',
    por: 'Contra el Desconocido, bloquear sus espadazos, su ataque en X o su carga te cura.',
    como: [{ v: 'sintesis', t: 'Receta de abajo. Para usar un comando de defensa como ingrediente necesitas dos copias.' }],
    receta: { a: 'Esna', b: 'Coraza', pct: 100, alt: 'Cura++ + Coraza' },
    ingredientes: [
      ['Esna', 'Tienda Moguri: 600 platines tras completar cinco mundos.'],
      ['Coraza', 'Aqua la tiene desde el principio; la segunda copia, en la Tienda Moguri por 200 platines (tras completar un mundo).'],
      ['Cura++ (otra receta)', 'Síntesis Cura + Cura+ (100 %) o Tienda Moguri por 1.300 platines tras completar ocho mundos. Cura+ sale de Cura + Cura (100 %).'],
    ],
    f: ['wikiEsCorazaCura', 'khwikiBlock', 'wikiEsEsna', 'khwikiBarrier', 'khwikiMeld', 'khwikiCure', 'guiaSteam'],
  },
  bloqueoTino: {
    nombre: 'Bloqueo Tino', cat: 'Defensa', solo: ['terra', 'ventus'],
    que: 'Defensa de Terra y Ventus. Al bloquear un ataque recuperas parte de la barra Tino, la que gasta el Tiro certero. Sube hasta NV 3.',
    por: 'Atacarás solo con Tiro certero: bloquea para recargar la barra Tino.',
    como: [{ v: 'tablero', t: 'Casilla bonus del Tablero Real, jugando fuera del Coso Virtual.' }],
    f: ['wikiEsBloqueoTino', 'khwikiBlock', 'guiaSteam'],
  },
  corazaTino: {
    nombre: 'Coraza Tino', cat: 'Defensa', img: 'coraza-tino', solo: ['aqua'],
    que: 'Defensa de Aqua. Al bloquear un ataque recuperas parte de la barra Tino, la que gasta el Tiro certero.',
    por: 'Atacarás solo con Tiro certero: bloquea para recargar la barra Tino.',
    como: [{ v: 'tablero', t: 'Casilla bonus del Tablero Real, jugando fuera del Coso Virtual.' }],
    f: ['wikiEsBloqueoTino', 'guiaSteam'],
  },
};

const TIRO = { terra: 'rayo', ventus: 'multivortice', aqua: 'chorro' };
const MOVER = { terra: 'impulso', ventus: 'voltereta', aqua: 'rueda' };
const CURA = { terra: 'bloqueoCura', ventus: 'bloqueoCura', aqua: 'corazaCura' };
const TINO = { terra: 'bloqueoTino', ventus: 'bloqueoTino', aqua: 'corazaTino' };
const LLAVES = [{ p: 'corona' }, { p: 'artema', alt: true }];

// Equipación por combate. `ranuras` = qué poner en la baraja, en orden.
// `alt: true` marca una alternativa; `quitar: true`, algo que hay que quitar.
export const COMBATES = [
  {
    id: 'desconocido', nombre: 'El Desconocido', img: 'desconocido', logro: 'ACH_160',
    consejo: 'Por encima del nivel 50. Alterna Cura y Carga Eléctrica en la baraja (Cura, Carga, Cura, Carga…) y deja activadas solo las habilidades de la lista; según la guía, el jefe se vuelve más agresivo según las que lleves.',
    f: ['guiaSteam'],
    equipo: (pj) => ({
      llave: LLAVES,
      baraja: [{ p: 'cura' }, { p: 'carga' }, { p: 'cura' }, { p: 'carga' }],
      bucle: true,
      tiro: [],
      movimiento: [{ p: MOVER[pj], quitar: pj === 'terra' }],
      defensa: [{ p: CURA[pj] }],
      habilidades: true,
    }),
  },
  {
    id: 'coso', nombre: 'Misiones del Coso', img: 'coso', logro: 'ACH_196',
    consejo: 'Barre a los nescientes con Megafulgor o Imán++ y, contra los jefes, ataca solo con Tiro certero. Lleva un par de Curas y algunas Pociones.',
    f: ['guiaSteam'],
    equipo: (pj) => ({
      llave: LLAVES,
      baraja: [{ p: 'megafulgor' }, { p: 'iman', alt: true }, { p: 'cura' }, { p: 'cura' }, ...(pj === 'ventus' ? [{ p: 'hilatiempo', alt: true }] : [])],
      tiro: [{ p: TIRO[pj] }, ...(pj === 'aqua' ? [{ p: 'fogonazo', alt: true }] : [])],
      movimiento: [{ p: MOVER[pj], quitar: pj === 'terra' }],
      defensa: [],
    }),
  },
  {
    id: 'luz', nombre: 'Armadura de Eraqus y Noheart', img: 'eraqus', logro: 'ACH_162', logro2: 'ACH_161',
    consejo: '«Mentor de la Luz» y «Oscuridad Manifiesta»: solo Curas en la baraja y Bloqueo/Coraza Tino. Ataca solo con Tiro certero, sin obsesionarte con cargarlo al máximo, y bloquea para recuperar la barra Tino.',
    f: ['guiaSteam'],
    equipo: (pj) => ({
      llave: LLAVES,
      baraja: [{ p: 'cura' }, { p: 'cura' }, { p: 'cura' }, { p: 'cura' }],
      bucle: true,
      tiro: [{ p: TIRO[pj] }],
      movimiento: [],
      defensa: [{ p: TINO[pj] }],
    }),
  },
  {
    id: 'vanitas', nombre: 'Reminiscencia de Vanitas', img: 'vanitas', logro: 'ACH_159',
    consejo: 'Tiro certero y alguna Poción, pero ninguna Cura: si te curas, él también se cura. Al empezar, corre a la roca grande de la izquierda y mantén a Vanitas al otro lado mientras le disparas.',
    f: ['guiaSteam'],
    sinCura: true,
    equipo: (pj) => ({
      llave: LLAVES,
      baraja: [{ p: 'cura', quitar: true }],
      tiro: [{ p: TIRO[pj] }],
      movimiento: [],
      defensa: [],
    }),
  },
];

// Cristales: se consiguen en las batallas del Modo Coso del Coso Virtual.
export const CRISTALES = {
  Puro: { color: '#9FD8FF', enemigos: 'Cleptorrapaz, Orbemedusa, Salmarina, Picantón, Baularaña, Mostacete' },
  Temporal: { color: '#C9A6FF', enemigos: 'Trabacronos, Atisbota, Rastreador, Baularaña, Giraespinas' },
  'de Fuerza': { color: '#FF9E7A', enemigos: 'Bravucón, Bravucón Acorazado, Cubabum, Bravucón Silvestre' },
  'de Poder': { color: '#FFD36B', enemigos: 'Desgarrador, Idolotrío' },
  Vital: { color: '#8EF0B4', enemigos: 'Aluvión, Niscalino' },
  Voraz: { color: '#FF8FC8', enemigos: 'Bravucón, Bravucón Acorazado, Chiflanejo, Monogoneta, Vialéfico' },
  Hermanador: { color: '#B8C4E0', enemigos: 'Mandragora, Batehachas' },
};

// Habilidades para el Desconocido, con una receta comprobada en la tabla tipo × cristal
// de la guía de Steam (y en el ejemplo de la Wiki ES cuando lo hay).
export const HABILIDADES = [
  { nombre: 'Atracción', max: 5, efecto: 'Atrae hacia ti los premios y objetos que sueltan los enemigos.', a: 'Cura', b: 'Cura', sale: 'Cura+', cristal: 'Voraz', f: ['wikiEsAtraccion'] },
  { nombre: 'Electro ↑', max: 3, efecto: 'Aumenta el poder de los ataques de rayo, como Carga Eléctrica.', a: 'Electro', b: 'Electro', sale: 'Electro+', cristal: 'Puro', f: ['wikiEsElectroSube'] },
  { nombre: 'Ataque veloz', max: 5, efecto: 'Reduce el tiempo de recarga de los comandos de ataque.', a: 'Piroembestida', b: 'Electro+', sale: 'Carga Eléctrica', cristal: 'Temporal', f: ['wikiEsAtaqueVeloz'], extra: 'Así haces tu Carga Eléctrica y la habilidad a la vez.' },
  { nombre: 'Prisa mágica', max: 5, efecto: 'Reduce el tiempo de recarga de los comandos de magia.', a: 'Cura', b: 'Cura', sale: 'Cura+', cristal: 'Temporal', f: ['wikiEsPrisaMagica'] },
  { nombre: 'Último estertor', max: 1, efecto: 'Si un golpe fuerte te fuera a derrotar, te deja con 1 VT (no te salva si ya estabas a 1 VT).', a: 'Cura+', b: 'Cura+', sale: 'Cura++', cristal: 'de Fuerza', f: ['wikiEsUltimoEstertor'], extra: 'Ese Cura++ te sirve luego para Bloqueo/Coraza Cura.' },
  { nombre: 'Una vez más', max: 1, efecto: 'Lo mismo, pero ante un combo que te fuera a derrotar.', a: 'Lluvia Piro++', b: 'Tardo Piro++', sale: 'Megafulgor', cristal: 'de Poder', f: ['wikiEsUnaVezMas'], extra: 'Otra receta válida: Imán+ + Imán+ → Imán++.' },
];
