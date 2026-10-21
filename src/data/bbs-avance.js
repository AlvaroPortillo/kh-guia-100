// Build para avanzar por la historia (no solo para los superjefes): qué llevar para limpiar grupos,
// para jefes y para curarse. Fuente: guías de GameSkinny de cada personaje («Ultimate Command Deck»),
// con los nombres oficiales en castellano (correspondencia validada en notas/investigacion-builds.md).
// Cómo se consigue cada comando sale de bbs-comandos.js (la ficha de cada uno en «Comandos»).

export const FUENTES_AVANCE = {
  gsTerra: { nombre: 'GameSkinny — Terra’s Ultimate Command Deck (en inglés)', url: 'https://www.gameskinny.com/tips/kingdom-hearts-birth-by-sleep-guide-terras-ultimate-command-deck/' },
  gsVentus: { nombre: 'GameSkinny — Ventus’s Ultimate Command Deck (en inglés)', url: 'https://www.gameskinny.com/k34rs/kingdom-hearts-birth-by-sleep-guide-ventuss-ultimate-command-deck' },
  gsAqua: { nombre: 'GameSkinny — Aqua’s Ultimate Command Deck (en inglés)', url: 'https://www.gameskinny.com/tips/kingdom-hearts-birth-by-sleep-aquas-ultimate-command-deck-guide/' },
};

// `combo`: la combinación que propone la guía. `grupos`: [título, explicación, [comandos]].
export const AVANCE = {
  terra: {
    estilo: 'Terra es un luchador físico: sus mejores comandos son casi todos de ataque.',
    combo: 'Para grupos, junta a los enemigos con Imán++ y remátalos con Catástrofe.',
    grupos: [
      ['Limpiar grupos', 'Comandos de mucho alcance que golpean a varios enemigos.', ['Imán++', 'Catástrofe', 'Sismo', 'Megafulgor', 'Espiroimán', 'Cortabrisas', 'Límite tormenta', 'Hipotermia', 'Cuadro de Minas']],
      ['Jefes', 'Comandos centrados en un solo objetivo. Ojo: los jefes ignoran casi todos los estados alterados.', ['Zantetsuken', 'Venganza', 'Único Arcano', 'Impacto Telúrico', 'Nigro Piro++', 'Electro++', 'Sacrificio']],
      ['Curación', 'La guía la considera imprescindible para terminar el juego.', ['Cura++']],
    ],
    f: ['gsTerra'],
  },
  ventus: {
    estilo: 'Ventus es el más rápido: mezcla ataques físicos y magia.',
    combo: 'Para grupos, junta a los enemigos con Imán++ y destrúyelos con Sanctus, Salvación o Tornado. Si te cuesta apuntar, Megafulgor no falla.',
    grupos: [
      ['Limpiar grupos', 'Comandos de mucho alcance o que atraen a los enemigos.', ['Imán++', 'Sanctus', 'Salvación', 'Tornado', 'Megafulgor', 'Trascendencia', 'Espiroimán', 'Cuadro de Minas']],
      ['Jefes', 'Para pegar de cerca y con fuerza a un solo enemigo.', ['Último Arcano', 'Estocada Veloz', 'Hilatiempo', 'Tiro Centella', 'Furia Ciclón']],
      ['Curación', 'La guía la considera imprescindible para terminar el juego. Salvación y Sanctus también curan un poco.', ['Cura++']],
    ],
    f: ['gsVentus'],
  },
  aqua: {
    estilo: 'Aqua es la maga del grupo: equilibrada y con la magia más fuerte.',
    combo: 'Para grupos, junta a los enemigos con Imán++ y lánzales Descarga Ígnea. Glaciar y Mina Astuta van bien cuando te rodean.',
    grupos: [
      ['Limpiar grupos', 'Atrae a los enemigos o usa magia de área.', ['Imán++', 'Descarga Ígnea', 'Glaciar', 'Mina Astuta', 'Asalto Gélido', 'Pira', 'Trascendencia', 'Megafulgor']],
      ['Jefes', 'Proyectiles con buena puntería. Megafulgor no siempre afecta a los jefes más duros y te deja expuesta mientras la pantalla está en blanco; en apuros, Arte Cósmica.', ['Triple Piro++', 'Tiro Electro++', 'Triple Hielo++', 'Arte Cósmica', 'Carga Robusta', 'Estocada Veloz', 'Hilatiempo', 'Espiroimán']],
      ['Curación', 'Atrae VT saca esferas de vida de los enemigos.', ['Atrae VT']],
    ],
    f: ['gsAqua'],
  },
};
