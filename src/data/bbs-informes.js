// Contenido del menú «Informes» de BBS (lo que cuenta para el 100 % del juego).
// Regla: ningún dato sin fuente. `fuentes` apunta a las claves de FUENTES en bbs.js.

// Informes Xehanort: 13 documentos (carta + I–XII). Wiki ES y guía de Steam coinciden.
export const INFORMES_XEHANORT = [
  { id: 'carta', nombre: 'Carta de Xehanort', pj: 'ventus', donde: 'Tras salir de la Tierra de Partida.' },
  { id: 'i', nombre: 'Informe Xehanort I', pj: 'ventus', donde: 'En un cofre de Espacio Profundo.' },
  { id: 'ii', nombre: 'Informe Xehanort II', pj: 'terra', donde: 'Tras derrotar a Braig en Vergel Radiante.' },
  { id: 'iii', nombre: 'Informe Xehanort III', pj: 'aqua', donde: 'En un cofre de la Casa de Merlín, en Vergel Radiante.' },
  { id: 'iv', nombre: 'Informe Xehanort IV', pj: 'aqua', donde: 'Tras hablar con Yen Sid en la Torre de los Misterios.' },
  { id: 'v', nombre: 'Informe Xehanort V', pj: 'terra', donde: 'Tras completar «Carcelero Implacable» en el Coso Virtual.' },
  { id: 'vi', nombre: 'Informe Xehanort VI', pj: 'aqua', donde: 'Tras derrotar a Maléfica en el Reino Encantado.' },
  { id: 'vii', nombre: 'Informe Xehanort VII', pj: 'aqua', donde: 'Tras derrotar a Ventus-Vanitas en la Necrópolis de Llaves Espada.' },
  { id: 'viii', nombre: 'Informe Xehanort VIII', pj: 'terra', donde: 'Tras derrotar al Maestro Eraqus en la Tierra de Partida.' },
  { id: 'ix', nombre: 'Informe Xehanort IX', pj: 'ventus', donde: 'Tras abandonar las Islas del Destino.' },
  { id: 'x', nombre: 'Informe Xehanort X', pj: 'ventus', donde: 'Tras derrotar a Vanitas en la Necrópolis de Llaves Espada.' },
  { id: 'xi', nombre: 'Informe Xehanort XI', pj: 'terra', donde: 'Tras derrotar a Terra-Xehanort en la Necrópolis de Llaves Espada.' },
  { id: 'xii', nombre: 'Informe Xehanort XII', pj: 'ventus', donde: 'En un cofre de la Necrópolis de Llaves Espada.' },
];

// Minijuegos (guía de Steam en castellano).
export const MINIJUEGOS = [
  {
    id: 'tableros',
    titulo: 'Tableros de comandos',
    intro: 'Para el logro hay que ganar 7 veces; vale con hacerlo en el Coso Virtual. Para el menú Informes, gana al menos una vez en cada tablero.',
    items: [
      { id: 'llave-espada', nombre: 'Tablero Llave Espada', desc: 'El más fácil y rápido. Usa las cartas de magia para lanzar 3 dados a la vez.' },
      { id: 'real', nombre: 'Tablero Real', desc: 'Se desbloquea al completar la historia del Castillo de los Sueños.' },
      { id: 'espacial', nombre: 'Tablero Espacial', desc: 'Se desbloquea al completar la historia de Espacio Profundo.' },
      { id: 'animado', nombre: 'Tablero Animado', desc: 'Se desbloquea al completar la historia de Ciudad Disney.' },
      { id: 'calavera', nombre: 'Tablero Calavera', desc: 'Se desbloquea al completar la historia del País de Nunca Jamás.' },
      { id: 'miel', nombre: 'Tablero de Miel', desc: 'Investiga el libro del Bosque de los 100 Acres en la Casa de Merlín (Vergel Radiante).' },
      { id: 'secreto', nombre: 'Tablero Secreto', desc: 'Se desbloquea al completar los tableros anteriores.' },
    ],
  },
  {
    id: 'ritmo',
    titulo: 'Ritmo helado',
    intro: 'Para desbloquear canciones hay que sacar al menos «Genial» (salvo la última en Experto). Para el logro, «Fantástico» en todas: puntuación mínima Principiante / Experto. Basta con un personaje. Guarda tras cada canción: el juego puede bloquearse al elegir una.',
    items: [
      { id: 'mundo-pequeno', nombre: 'Un mundo pequeño es', desc: 'Fantástico: 1300 (Principiante) / 2600 (Experto).' },
      { id: 'algarabia', nombre: '¡Algarabía! - Nave gumi II -', desc: 'Fantástico: 1200 (Principiante) / 3500 (Experto).' },
      { id: 'paraiso', nombre: 'Paraíso de sabores', desc: 'Fantástico: 1400 (Principiante) / 2600 (Experto). En Experto desbloquea el estilo Dicha Helada.' },
      { id: 'islas', nombre: 'Islas del Destino', desc: 'Fantástico: 2200 (Principiante) / 3159 (Experto).' },
      { id: 'manos', nombre: 'Juntas las manos', desc: 'Fantástico: 1000 (Principiante) / 3400 (Experto). La de Experto es la más difícil.' },
    ],
  },
  {
    id: 'retumbodromo',
    titulo: 'Retumbódromo',
    intro: 'Corre los circuitos desde el Coso Virtual. Para desbloquearlos allí, gana antes las carreras en Ciudad Disney.',
    items: [
      { id: 'marcha', nombre: 'Marcha Campestre', desc: 'Disponible desde el principio.' },
      { id: 'formula', nombre: 'Fórmula Disney', desc: 'Disponible desde el principio.' },
      { id: 'jarana', nombre: 'GP Jarana', desc: 'Gana «Fórmula Disney» en Ciudad Disney.' },
      { id: 'frenetico', nombre: 'Castillo Frenético', desc: 'Gana «GP Jarana» en Ciudad Disney.' },
    ],
  },
  {
    id: 'frutibol',
    titulo: 'Frutibol',
    intro: 'En Ciudad Disney, en la zona junto a la Plaza Mayor: habla con Horacio.',
    items: [
      { id: 'atisbota', nombre: 'Atisbota', desc: 'Solo con Aqua. Desbloquea la historia; sin recompensa.' },
      { id: 'bravucon', nombre: 'Bravucón', desc: 'Recompensa: Globo Recadero.' },
      { id: 'chip-chop', nombre: 'Chip y Chop', desc: 'Recompensa: Imán+.' },
      { id: 'capitan', nombre: 'Capitán Justicia / Capitán Oscuro', desc: 'Recompensa: Súbito Caos (Tiro certero).' },
    ],
  },
  {
    id: 'anforas',
    titulo: 'Rompe ánforas',
    intro: 'Habla con Hércules en el Coliseo del Olimpo.',
    items: [
      { id: 'anforas', nombre: 'Rompe ánforas', desc: 'Usa Imán++ o Megafulgor para destruir las ánforas.' },
    ],
  },
];

// Retos de los nescientes: objetivo para el rango 3 (guía de Steam).
// Algunos dan comandos Ilusión (guía de Steam, lista de comandos de Terra).
export const RETOS = [
  { id: 'reino-encantado', mundo: 'Reino Encantado', rival: 'Arconflagrador', meta: '30 puntos' },
  { id: 'castillo-suenos', mundo: 'Castillo de los Sueños', rival: 'Escarpín febril', meta: '30 puntos', premio: 'Ilusión E' },
  { id: 'bosque-enanitos', mundo: 'Bosque de los Enanitos', rival: 'Supervivialente', meta: 'Sobrevivir 2 minutos', premio: 'Ilusión S' },
  { id: 'vergel-radiante', mundo: 'Vergel Radiante', rival: 'Barricambiante', meta: 'Derrotarlo en menos de 1 minuto', premio: 'Ilusión B' },
  { id: 'ciudad-disney', mundo: 'Ciudad Disney', rival: 'Retintineador', meta: '40 puntos', premio: 'Ilusión R' },
  { id: 'coliseo', mundo: 'Coliseo del Olimpo', rival: 'Niscalino', meta: 'Derrotarlos en menos de 30 segundos' },
  { id: 'espacio-profundo', mundo: 'Espacio Profundo', rival: 'Aquamaligna', meta: '90 puntos' },
  { id: 'nunca-jamas', mundo: 'País de Nunca Jamás', rival: 'Elementrío', meta: '40 puntos' },
  { id: 'necropolis', mundo: 'Necrópolis de Llaves Espada', rival: 'Tilandsia', meta: '350 puntos', premio: 'Ilusión T' },
];

// Helados (Wiki ES — Helado). Al prepararlos todos se recibe la llave espada Dulce Sorpresa.
export const HELADOS = [
  { id: 'volcanopia', nombre: 'Volcanopía', ing: 'Pimientón ×5, Dibujitabasco ×3', estilo: 'Lluvia Pírica', pjs: 'Terra, Ventus, Aqua' },
  { id: 'nivosito', nombre: 'Nivosito', ing: 'Ábrete Sésamo ×3, Leche de Soja ×5', estilo: 'Polvo de Diamante', pjs: 'Terra, Ventus, Aqua' },
  { id: 'chispalimon', nombre: 'Chispalimón', ing: 'Golocentellina ×4, Sodacohete ×2, Danzalimón ×3', estilo: 'Pulso Galvánico', pjs: 'Terra, Ventus, Aqua' },
  { id: 'baya-real', nombre: 'Baya Real', ing: 'Zarzacreta ×7, Ambrosía Nebular ×10, Tarta de Cumpleaños ×8, Miel de Rosas ×7', estilo: 'Aura de Aceros', pjs: 'Terra, Aqua' },
  { id: 'via-lactea', nombre: 'Vía Láctea', ing: 'Esponja Montada ×10, Sirope Arcoíris ×8, Algodón de Azúcar ×14', estilo: 'Trepacielos', pjs: 'Ventus, Aqua' },
  { id: 'alhajainilla', nombre: 'Alhajainilla', ing: 'Confitura Dorada ×1, Habaratija ×1, Cristal de Azúcar ×3', estilo: 'Impacto Crítico', pjs: 'Terra' },
  { id: 'crujinueces', nombre: 'Crujinueces', ing: 'Galactimelo ×15, Nuecencia ×12', estilo: 'Quiebrarrocas', pjs: 'Terra' },
  { id: 'maloso-pete', nombre: 'Maloso Pete', ing: 'Rarichuela ×20, Sueño Batido ×20', estilo: 'Impulso Umbrío', pjs: 'Terra' },
  { id: 'mieliebrina', nombre: 'Mieliebrina', ing: 'Mielamores ×3, Pastel de Manzana ×2', estilo: 'Exacerbación', pjs: 'Ventus' },
  { id: 'copa-goofy', nombre: 'Copa Goofy', ing: 'Mogurichino ×7, Ingeltalmendra ×6, Bombón Tórtolo ×5, Bozcochuelo ×10', estilo: 'Ciclón', pjs: 'Ventus' },
  { id: 'doble-crujido', nombre: 'Doble Crujido', ing: 'Bayabuesa ×9, Siemprefresca ×5, Pastel de Boda ×14, Almíbar Fugaz ×15', estilo: 'Acero Alado', pjs: 'Ventus' },
  { id: 'fabracadabra', nombre: 'Fabracadabra', ing: 'Globomelón ×2, Naranjadalid ×2, Melocotopía ×1', estilo: 'Hila Encantos', pjs: 'Aqua' },
  { id: 'sorbete-donald', nombre: 'Sorbete Donald', ing: 'Cristalfresco ×8, Sal de Sirena ×13, Picasoda ×15, Gelacielotina ×8', estilo: 'Marcha Etérea', pjs: 'Aqua' },
  { id: 'granizado-daisy', nombre: 'Granizado Daisy', ing: 'Cosmomelo ×8, Nubelujosa ×15, Divertimenta ×10, Pomelódico ×12', estilo: 'Trance Armónico', pjs: 'Terra, Ventus, Aqua' },
];

// Álbum de pegatinas (Final Mix): recompensas por puntos. Wiki ES — Álbum de Pegatinas.
export const PEGATINAS = {
  terra: [[20, 'Cristal de Fuerza'], [40, 'Pirotecnia'], [70, 'Límite Tormenta'], [110, 'Estocada Veloz'], [140, 'Trance Armónico']],
  ventus: [[20, 'Cristal de Poder'], [40, 'Pirotecnia'], [70, 'Magnetochoque'], [110, 'Salvación'], [140, 'Trance Armónico']],
  aqua: [[20, 'Ignición'], [40, 'Cristal Puro'], [70, 'Coraza Paro'], [110, 'Hipotermia'], [140, 'Trance Armónico']],
};
