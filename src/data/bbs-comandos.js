// Comandos de BBS Final Mix por personaje. GENERADO por un script (ver notas/investigacion-builds.md); no editar a mano.
// Lista y nombres: guía de logros de Steam en castellano (orden del menú del juego). Recetas: tablas de síntesis de esa guía.
// Ficha (ranuras, nivel, clase, elemento, objetivos) y vías de obtención: KHWiki, traducidas por patrones fijos.
// `pj: null` = vale para los tres; si no, solo para esos personajes. Las zonas sin nombre oficial en castellano van entre «».

export const LISTAS_COMANDOS = {"terra": {"ataque": ["Cisco Volátil", "Cisco", "Catástrofe", "Embestida", "Piroembestida", "Nigrobruma", "Estocada Veloz", "Venganza", "Zantetsuken", "Tiro Mortífero", "Tiro Gélido", "Carga Pírica", "Carga Eléctrica", "Batacazo", "Único Arcano", "Hoja Tóxica", "Hoja Gélida", "Hoja Aturdidora", "Hoja Afortunada", "Furia Pírica", "Furia Confusión", "Furia Ligadora", "Poder Desatado", "Espiroimán", "Cortabrisas", "Límite tormenta", "Magnetochoque", "Impacto Telúrico", "Sacrificio", "Cuartelillo"], "magia": ["Piro", "Piro+", "Piro++", "Nigro Piro++", "Lluvia Piro++", "Tardo Piro++", "Hielo", "Hielo+", "Hielo++", "Electro", "Electro+", "Electro++", "Cura", "Cura+", "Cura++", "Esna", "Escudo de Minas", "Cuadro de Minas", "Gravedad", "Gravedad+", "Gravedad++", "Imán", "Imán+", "Imán++", "Aero", "Aero+", "Aero++", "Exilio", "Hipotermia", "Megafulgor", "Sismo", "Meteo", "Trascendencia", "Minimalia", "Apagón", "Ignición", "Confu", "Enlace", "Toxis", "Freno", "Paro", "Paro+", "Paro++", "Morfeo"], "movimiento": ["Salto", "Salto de Altura", "Impulso Aéreo", "Impulso Gélido", "Impulso Sónico", "Impulso"], "defensa": ["Bloqueo", "Bloqueo Cura", "Bloqueo Tino", "Bloqueo Shock", "Bloqueo Toxis"], "contraataque": ["Maza Postrera", "Carga Ulterior", "Recobro Aéreo"], "tiro": ["Lluvia Meteórica", "Salva Ígnea", "Súbito Caos", "Volea Umbría", "Ragnarok", "Tronada", "Biodescarga", "Carga Fotónica", "Cero Absoluto", "Rayo Célere", "Sombra Sónica", "Cañón Artema"]}, "ventus": {"ataque": ["Cisco Volátil", "Cisco", "Embestida", "Piroembestida", "Estocada Veloz", "Tiro Mortífero", "Tiro Gélido", "Tiro Premiado", "Tiro Centella", "Tiro Eólico", "Carga Pírica", "Carga Eléctrica", "Batacazo", "Último Arcano", "Hilatiempo", "Hoja Tóxica", "Hoja Gélida", "Hoja Aturdidora", "Hoja Afortunada", "Furia Pírica", "Furia Confusión", "Furia Ligadora", "Furia Ciclón", "Espiroimán", "Salvación", "Magnetochoque", "Cuartelillo"], "magia": ["Piro", "Piro+", "Piro++", "Lluvia Piro++", "Tardo Piro++", "Hielo", "Hielo+", "Hielo++", "Electro", "Electro+", "Electro++", "Cura", "Cura+", "Cura++", "Esna", "Escudo de Minas", "Cuadro de Minas", "Gravedad", "Gravedad+", "Gravedad++", "Imán", "Imán+", "Imán++", "Aero", "Aero+", "Aero++", "Sanctus", "Hipotermia", "Megafulgor", "Tornado", "Trascendencia", "Minimalia", "Apagón", "Ignición", "Confu", "Enlace", "Toxis", "Freno", "Paro", "Paro+", "Paro++", "Morfeo"], "movimiento": ["Salto", "Salto de Altura", "Voltereta", "Rueda Eléctrica", "Impulso Aéreo", "Impulso Gélido", "Finta", "Planeador", "Superplaneador", "Piroplaneador", "Buscador"], "defensa": ["Bloqueo", "Bloqueo Cura", "Bloqueo Tino", "Bloqueo Shock", "Bloqueo Toxis"], "contraataque": ["Carga Postrera", "Tajo Zaguero", "Lance Ulterior", "Recobro Aéreo"], "tiro": ["Lluvia Meteórica", "Salva Ígnea", "Súbito Caos", "Ragnarok", "Tronada", "Biodescarga", "Bomba de Pulso", "Carga Fotónica", "Cero Absoluto", "Rayo Célere", "Multivórtice"]}, "aqua": {"ataque": ["Cisco Volátil", "Cisco", "Arte Cósmica", "Embestida", "Piroembestida", "Estocada Veloz", "Tiro Mortífero", "Tiro Gélido", "Carga Pírica", "Carga Robusta", "Carga Eléctrica", "Batacazo", "Hilatiempo", "Hoja Tóxica", "Hoja del Deseo", "Hoja Gélida", "Hoja Aturdidora", "Hoja Afortunada", "Furia Pírica", "Furia Confusión", "Furia Ligadora", "Espiroimán", "Magnetochoque", "Cuartelillo"], "magia": ["Piro", "Piro+", "Piro++", "Lluvia Piro++", "Triple Piro++", "Tardo Piro++", "Hielo", "Hielo+", "Hielo++", "Triple Hielo++", "Electro", "Electro+", "Electro++", "Tiro Electro++", "Cura", "Cura+", "Cura++", "Esna", "Escudo de Minas", "Cuadro de Minas", "Mina Astuta", "Gravedad", "Gravedad+", "Gravedad++", "Imán", "Imán+", "Imán++", "Atraerriquezas", "Atrae VT", "Atrae Nexo-D", "Aero", "Aero+", "Aero++", "Hipotermia", "Glaciar", "Asalto Gélido", "Descarga Ígnea", "Pira", "Megafulgor", "Trascendencia", "Minimalia", "Apagón", "Ignición", "Confu", "Enlace", "Toxis", "Freno", "Paro", "Paro+", "Paro++", "Morfeo"], "movimiento": ["Salto", "Salto de Altura", "Rueda Veloz", "Rueda Ígnea", "Impulso Aéreo", "Impulso Gélido", "Buscador", "Teleportador", "Vuelo Doble"], "defensa": ["Coraza", "Coraza Cura", "Coraza Tino", "Coraza Confu", "Coraza Paro"], "contraataque": ["Onda Postrera", "Pulso Ulterior", "Recobro Aéreo"], "tiro": ["Lluvia Meteórica", "Salva Ígnea", "Súbito Caos", "Tiro Burbuja", "Ragnarok", "Tronada", "Biodescarga", "Chorro Irisado", "Carga Fotónica", "Cero Absoluto", "Rayo Célere", "Fogonazo"]}};

export const COMANDOS = {
 "Cisco Volátil": {
  "en": "Quick Blitz",
  "ranuras": "1",
  "nv": "3",
  "clase": "Básico",
  "elem": "Físico",
  "vias": [
   {
    "v": "inicial",
    "t": "Lo tiene desde el principio.",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   },
   {
    "v": "tienda",
    "t": "100 platines, una vez conseguido por otra vía.",
    "pj": null
   },
   {
    "v": "tablero",
    "t": "Comprando la casilla de Ventus en el Tablero de la Llave Espada.",
    "pj": [
     "terra",
     "aqua"
    ]
   },
   {
    "v": "tablero",
    "t": "Comprando la casilla de Aqua en el Tablero de la Llave Espada.",
    "pj": [
     "terra",
     "ventus"
    ]
   },
   {
    "v": "tablero",
    "t": "Comprando la casilla de Terra en el Tablero de la Llave Espada.",
    "pj": [
     "ventus",
     "aqua"
    ]
   },
   {
    "v": "tablero",
    "t": "Comprando la casilla de Tigger en el Tablero de Miel.",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   },
   {
    "v": "tablero",
    "t": "Comprando la casilla de Experimento 626 en el Tablero Espacial.",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   },
   {
    "v": "tablero",
    "t": "Casilla bonus del Tablero Calavera.",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   },
   {
    "v": "tablero",
    "t": "Comprando la casilla de Peter Pan en el Tablero Calavera.",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   },
   {
    "v": "tablero",
    "t": "Comprando la casilla de Aqua en el Tablero Secreto.",
    "pj": [
     "terra",
     "ventus"
    ]
   }
  ],
  "recetas": []
 },
 "Cisco": {
  "en": "Blitz",
  "ranuras": "1",
  "nv": "4",
  "clase": "Básico",
  "elem": "Físico",
  "vias": [
   {
    "v": "cofre",
    "t": "País de Nunca Jamás («Mermaid Lagoon»).",
    "pj": [
     "ventus"
    ]
   },
   {
    "v": "cofre",
    "t": "Espacio Profundo («Turo Prison Block»).",
    "pj": [
     "aqua"
    ]
   },
   {
    "v": "tienda",
    "t": "1.200 platines tras completar 8 mundos, o una vez conseguido por otra vía.",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   },
   {
    "v": "tablero",
    "t": "Comprando la casilla de Experimento 626 en el Tablero Espacial.",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   },
   {
    "v": "tablero",
    "t": "Casilla bonus del Tablero Calavera.",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   },
   {
    "v": "tablero",
    "t": "Comprando la casilla de Peter Pan en el Tablero Calavera.",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   },
   {
    "v": "tablero",
    "t": "Casilla bonus del Tablero Secreto.",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   },
   {
    "v": "tablero",
    "t": "Comprando la casilla de Ventus en el Tablero Secreto.",
    "pj": [
     "terra",
     "aqua"
    ]
   },
   {
    "v": "tablero",
    "t": "Comprando la casilla de Terra en el Tablero Secreto.",
    "pj": [
     "ventus",
     "aqua"
    ]
   }
  ],
  "recetas": [
   {
    "a": "Cisco Volátil",
    "b": "Hoja Afortunada",
    "excl": null,
    "tipo": "15",
    "pct": "90"
   },
   {
    "a": "Carga Robusta",
    "b": "Hoja del Deseo",
    "excl": null,
    "tipo": "16",
    "pct": "90"
   },
   {
    "a": "Hoja Aturdidora",
    "b": "Hoja Afortunada",
    "excl": null,
    "tipo": "11",
    "pct": "90"
   }
  ]
 },
 "Catástrofe": {
  "en": "Meteor Crash",
  "ranuras": "2",
  "nv": "5",
  "clase": "Primera clase",
  "elem": "Físico",
  "vias": [
   {
    "v": "tienda",
    "t": "2.500 platines, una vez conseguido por otra vía.",
    "pj": [
     "terra"
    ]
   }
  ],
  "recetas": [
   {
    "a": "Cisco",
    "b": "Sismo",
    "excl": "Terra",
    "tipo": "14",
    "pct": "100"
   },
   {
    "a": "Furia Pírica",
    "b": "Poder Desatado",
    "excl": "Terra",
    "tipo": "4",
    "pct": "100"
   }
  ]
 },
 "Embestida": {
  "en": "Sliding Dash",
  "ranuras": "1",
  "nv": "3",
  "clase": "Básico",
  "elem": "Físico",
  "vias": [
   {
    "v": "inicial",
    "t": "Lo tiene desde el principio.",
    "pj": [
     "terra"
    ]
   },
   {
    "v": "cofre",
    "t": "Tierra de Partida («Mountain Path»).",
    "pj": [
     "ventus"
    ]
   },
   {
    "v": "tienda",
    "t": "100 platines tras completar 1 mundo, o una vez conseguido por otra vía.",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   },
   {
    "v": "tablero",
    "t": "Comprando la casilla de Ventus en el Tablero de la Llave Espada.",
    "pj": [
     "terra",
     "aqua"
    ]
   },
   {
    "v": "tablero",
    "t": "Comprando la casilla de Aqua en el Tablero de la Llave Espada.",
    "pj": [
     "terra",
     "ventus"
    ]
   },
   {
    "v": "tablero",
    "t": "Comprando la casilla de Terra en el Tablero de la Llave Espada.",
    "pj": [
     "ventus",
     "aqua"
    ]
   },
   {
    "v": "tablero",
    "t": "Comprando la casilla de Gantu en el Tablero Espacial.",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   },
   {
    "v": "tablero",
    "t": "Comprando la casilla de Peter Pan en el Tablero Calavera.",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   },
   {
    "v": "tablero",
    "t": "Comprando la casilla de Ventus en el Tablero Secreto.",
    "pj": [
     "terra",
     "aqua"
    ]
   }
  ],
  "recetas": []
 },
 "Piroembestida": {
  "en": "Fire Dash",
  "ranuras": "1",
  "nv": "4",
  "clase": "Avanzado",
  "elem": "Fuego",
  "vias": [
   {
    "v": "minijuego",
    "t": "Quedando entre los tres primeros en Fórmula Disney (Retumbódromo).",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   },
   {
    "v": "tienda",
    "t": "450 platines tras completar 5 mundos, o una vez conseguido por otra vía.",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   },
   {
    "v": "tablero",
    "t": "Comprando la casilla de Ventus en el Tablero de la Llave Espada.",
    "pj": [
     "terra",
     "aqua"
    ]
   },
   {
    "v": "tablero",
    "t": "Casilla bonus del Tablero Real.",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   },
   {
    "v": "tablero",
    "t": "Comprando la casilla de Gantu en el Tablero Espacial.",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   },
   {
    "v": "tablero",
    "t": "Comprando la casilla de Peter Pan en el Tablero Calavera.",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   },
   {
    "v": "tablero",
    "t": "Casilla bonus del Tablero Secreto.",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   },
   {
    "v": "tablero",
    "t": "Comprando la casilla de Ventus en el Tablero Secreto.",
    "pj": [
     "terra",
     "aqua"
    ]
   },
   {
    "v": "tablero",
    "t": "Comprando la casilla de Aqua en el Tablero Secreto.",
    "pj": [
     "terra",
     "ventus"
    ]
   },
   {
    "v": "tablero",
    "t": "Comprando la casilla de Terra en el Tablero Secreto.",
    "pj": [
     "ventus",
     "aqua"
    ]
   }
  ],
  "recetas": [
   {
    "a": "Embestida",
    "b": "Piro",
    "excl": null,
    "tipo": "4",
    "pct": "100"
   },
   {
    "a": "Embestida",
    "b": "Piro+",
    "excl": null,
    "tipo": "3",
    "pct": "100"
   },
   {
    "a": "Furia Confusión",
    "b": "Piro",
    "excl": null,
    "tipo": "4",
    "pct": "100"
   }
  ]
 },
 "Nigrobruma": {
  "en": "Dark Haze",
  "ranuras": "1",
  "nv": "4",
  "clase": "Avanzado",
  "elem": "Oscuridad",
  "vias": [
   {
    "v": "cofre",
    "t": "País de Nunca Jamás («Mermaid Lagoon»).",
    "pj": [
     "terra"
    ]
   },
   {
    "v": "tienda",
    "t": "1.100 platines tras completar 8 mundos, o una vez conseguido por otra vía.",
    "pj": [
     "terra"
    ]
   }
  ],
  "recetas": [
   {
    "a": "Piroembestida",
    "b": "Gravedad+",
    "excl": "Terra",
    "tipo": "4",
    "pct": "100"
   },
   {
    "a": "Piroembestida",
    "b": "Apagón",
    "excl": "Terra",
    "tipo": "1",
    "pct": "100"
   },
   {
    "a": "Carga Pírica",
    "b": "Gravedad",
    "excl": "Terra",
    "tipo": "3",
    "pct": "100"
   }
  ]
 },
 "Estocada Veloz": {
  "en": "Sonic Blade",
  "ranuras": "1",
  "nv": "5",
  "clase": "Primera clase",
  "elem": "Físico",
  "vias": [
   {
    "v": "tienda",
    "t": "2.000 platines, una vez conseguido por otra vía.",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   },
   {
    "v": "minijuego",
    "t": "Primer premio por ganar a Hércules en Rompe ánforas (Coliseo del Olimpo).",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   },
   {
    "v": "tablero",
    "t": "Casilla bonus del Tablero Espacial.",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   },
   {
    "v": "tablero",
    "t": "Comprando la casilla de Gantu en el Tablero Espacial.",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   },
   {
    "v": "tablero",
    "t": "Casilla bonus del Tablero Secreto.",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   },
   {
    "v": "tablero",
    "t": "Comprando la casilla de Terra en el Tablero Secreto.",
    "pj": [
     "ventus",
     "aqua"
    ]
   }
  ],
  "recetas": [
   {
    "a": "Cisco",
    "b": "Nigrobruma",
    "excl": null,
    "tipo": "4",
    "pct": "90"
   },
   {
    "a": "Cisco",
    "b": "Deslizamiento aéreo",
    "excl": null,
    "tipo": "14",
    "pct": "90"
   },
   {
    "a": "Piroembestida",
    "b": "Carga Eléctrica",
    "excl": null,
    "tipo": "11",
    "pct": "90"
   }
  ]
 },
 "Venganza": {
  "en": "Chaos Blade",
  "ranuras": "2",
  "nv": "6",
  "clase": "Primera clase",
  "elem": "Oscuridad",
  "vias": [
   {
    "v": "tienda",
    "t": "2.500 platines, una vez conseguido por otra vía.",
    "pj": [
     "terra"
    ]
   }
  ],
  "recetas": [
   {
    "a": "Nigrobruma",
    "b": "Estocada Veloz",
    "excl": "Terra",
    "tipo": "2",
    "pct": "90"
   }
  ]
 },
 "Zantetsuken": {
  "en": "Zantetsuken",
  "ranuras": "1",
  "nv": "5",
  "clase": "Primera clase",
  "elem": "Físico",
  "vias": [
   {
    "v": "tienda",
    "t": "1.700 platines tras completar 5 mundos, o una vez conseguido por otra vía.",
    "pj": [
     "terra"
    ]
   },
   {
    "v": "tienda",
    "t": "Tienda de medallas del Coso Virtual.",
    "pj": [
     "terra"
    ]
   }
  ],
  "recetas": [
   {
    "a": "Nigrobruma",
    "b": "Paro++",
    "excl": "Terra",
    "tipo": "2",
    "pct": "80"
   },
   {
    "a": "Estocada Veloz",
    "b": "Paro++",
    "excl": "Terra",
    "tipo": "6",
    "pct": "80"
   }
  ]
 },
 "Tiro Mortífero": {
  "en": "Strike Raid",
  "ranuras": "1",
  "nv": "3",
  "clase": "Básico",
  "elem": "Físico",
  "vias": [
   {
    "v": "inicial",
    "t": "Lo tiene desde el principio.",
    "pj": [
     "ventus"
    ]
   },
   {
    "v": "cofre",
    "t": "Castillo de los Sueños («Foyer»).",
    "pj": [
     "terra"
    ]
   },
   {
    "v": "cofre",
    "t": "Vergel Radiante («Gardens»).",
    "pj": [
     "aqua"
    ]
   },
   {
    "v": "tienda",
    "t": "100 platines tras completar 5 mundos, o una vez conseguido por otra vía.",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   },
   {
    "v": "tablero",
    "t": "Casilla bonus del Tablero de la Llave Espada.",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   },
   {
    "v": "tablero",
    "t": "Comprando la casilla de Ventus en el Tablero de la Llave Espada.",
    "pj": [
     "terra",
     "aqua"
    ]
   },
   {
    "v": "tablero",
    "t": "Comprando la casilla de Ventus en el Tablero Secreto.",
    "pj": [
     "terra",
     "aqua"
    ]
   }
  ],
  "recetas": [
   {
    "a": "Cisco Volátil",
    "b": "Embestida",
    "excl": null,
    "tipo": "15",
    "pct": "100"
   }
  ]
 },
 "Tiro Gélido": {
  "en": "Freeze Raid",
  "ranuras": "1",
  "nv": "4",
  "clase": "Avanzado",
  "elem": "Hielo",
  "vias": [
   {
    "v": "tienda",
    "t": "200 platines tras completar 6 mundos, o una vez conseguido por otra vía.",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   },
   {
    "v": "minijuego",
    "t": "Superando «Juntas las manos» en Ritmo Helado (Principiante).",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   },
   {
    "v": "tablero",
    "t": "Casilla bonus del Tablero Animado.",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   },
   {
    "v": "tablero",
    "t": "Comprando la casilla de Capitán Justicia en el Tablero Animado.",
    "pj": [
     "ventus",
     "aqua"
    ]
   },
   {
    "v": "tablero",
    "t": "Comprando la casilla de Capitán Oscuro en el Tablero Animado.",
    "pj": [
     "terra"
    ]
   }
  ],
  "recetas": [
   {
    "a": "Tiro Mortífero",
    "b": "Hielo+",
    "excl": null,
    "tipo": "9",
    "pct": "100"
   },
   {
    "a": "Hoja Gélida",
    "b": "Furia Ligadora",
    "excl": null,
    "tipo": "11",
    "pct": "100"
   }
  ]
 },
 "Carga Pírica": {
  "en": "Fire Surge",
  "ranuras": "1",
  "nv": "3",
  "clase": "Básico",
  "elem": "Fuego",
  "vias": [
   {
    "v": "cofre",
    "t": "Espacio Profundo («Launch Deck»).",
    "pj": [
     "ventus"
    ]
   },
   {
    "v": "cofre",
    "t": "Espacio Profundo («Ship Hub»).",
    "pj": [
     "aqua"
    ]
   },
   {
    "v": "tienda",
    "t": "650 platines tras completar 6 mundos, o una vez conseguido por otra vía.",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   },
   {
    "v": "tablero",
    "t": "Casilla bonus del Tablero de Miel.",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   },
   {
    "v": "tablero",
    "t": "Comprando la casilla de Winnie the Pooh en el Tablero de Miel.",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   },
   {
    "v": "tablero",
    "t": "Casilla bonus del Tablero Secreto.",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   }
  ],
  "recetas": [
   {
    "a": "Piroembestida",
    "b": "Ignición",
    "excl": null,
    "tipo": "4",
    "pct": "100"
   },
   {
    "a": "Furia Pírica",
    "b": "Piro+",
    "excl": null,
    "tipo": "1",
    "pct": "100"
   },
   {
    "a": "Furia Confusión",
    "b": "Piro+",
    "excl": null,
    "tipo": "15",
    "pct": "100"
   },
   {
    "a": "Furia Ligadora",
    "b": "Piro+",
    "excl": null,
    "tipo": "11",
    "pct": "100"
   }
  ]
 },
 "Carga Eléctrica": {
  "en": "Thunder Surge",
  "ranuras": "1",
  "nv": "4",
  "clase": "Avanzado",
  "elem": "Rayo",
  "vias": [
   {
    "v": "cofre",
    "t": "Vergel Radiante («Fountain Court»).",
    "pj": [
     "terra"
    ]
   },
   {
    "v": "tienda",
    "t": "700 platines, una vez conseguido por otra vía.",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   },
   {
    "v": "tablero",
    "t": "Casilla bonus del Tablero Secreto.",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   }
  ],
  "recetas": [
   {
    "a": "Piroembestida",
    "b": "Electro+",
    "excl": null,
    "tipo": "4",
    "pct": "100"
   },
   {
    "a": "Tiro Gélido",
    "b": "Electro+",
    "excl": null,
    "tipo": "7",
    "pct": "100"
   },
   {
    "a": "Hoja Aturdidora",
    "b": "Electro+",
    "excl": null,
    "tipo": "9",
    "pct": "100"
   },
   {
    "a": "Furia Confusión",
    "b": "Electro+",
    "excl": null,
    "tipo": "9",
    "pct": "95"
   }
  ]
 },
 "Batacazo": {
  "en": "Aerial Slam",
  "ranuras": "1",
  "nv": "4",
  "clase": "Avanzado",
  "elem": "Físico",
  "vias": [
   {
    "v": "cofre",
    "t": "Ciudad Disney (Sala de Juegos de Pete).",
    "pj": [
     "terra"
    ]
   },
   {
    "v": "cofre",
    "t": "Ciudad Disney (Sala de Juegos de Pete).",
    "pj": [
     "ventus"
    ]
   },
   {
    "v": "cofre",
    "t": "Ciudad Disney (Sala de Juegos de Pete).",
    "pj": [
     "aqua"
    ]
   },
   {
    "v": "tienda",
    "t": "1.500 platines tras completar 8 mundos, o una vez conseguido por otra vía.",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   },
   {
    "v": "tablero",
    "t": "Casilla bonus del Tablero Calavera.",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   },
   {
    "v": "tablero",
    "t": "Comprando la casilla de Peter Pan en el Tablero Calavera.",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   },
   {
    "v": "tablero",
    "t": "Casilla bonus del Tablero Secreto.",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   },
   {
    "v": "tablero",
    "t": "Comprando la casilla de Ventus en el Tablero Secreto.",
    "pj": [
     "terra",
     "aqua"
    ]
   },
   {
    "v": "tablero",
    "t": "Comprando la casilla de Terra en el Tablero Secreto.",
    "pj": [
     "ventus",
     "aqua"
    ]
   }
  ],
  "recetas": [
   {
    "a": "Piroembestida",
    "b": "Salto de Altura",
    "excl": null,
    "tipo": "1",
    "pct": "100"
   },
   {
    "a": "Carga Pírica",
    "b": "Aero",
    "excl": null,
    "tipo": "4",
    "pct": "100"
   },
   {
    "a": "Furia Pírica",
    "b": "Aero+",
    "excl": null,
    "tipo": "3",
    "pct": "90"
   }
  ]
 },
 "Único Arcano": {
  "en": "Ars Solum",
  "ranuras": "2",
  "nv": "6",
  "clase": "Primera clase",
  "elem": "Físico",
  "vias": [
   {
    "v": "cofre",
    "t": "País de Nunca Jamás («Skull Rock: Cavern»).",
    "pj": [
     "terra"
    ]
   }
  ],
  "recetas": [
   {
    "a": "Nigrobruma",
    "b": "Estocada Veloz",
    "excl": "Terra",
    "tipo": "2",
    "pct": "20"
   },
   {
    "a": "Nigrobruma",
    "b": "Paro++",
    "excl": "Terra",
    "tipo": "2",
    "pct": "20"
   },
   {
    "a": "Estocada Veloz",
    "b": "Paro++",
    "excl": "Terra",
    "tipo": "6",
    "pct": "20"
   },
   {
    "a": "Embestida",
    "b": "Electro",
    "excl": "Terra",
    "tipo": "11",
    "pct": "5"
   },
   {
    "a": "Tiro Mortífero",
    "b": "Electro",
    "excl": "Terra",
    "tipo": "12",
    "pct": "5"
   },
   {
    "a": "Tiro Mortífero",
    "b": "Electro+",
    "excl": "Terra",
    "tipo": "11",
    "pct": "5"
   },
   {
    "a": "Furia Confusión",
    "b": "Electro+",
    "excl": "Terra",
    "tipo": "9",
    "pct": "5"
   }
  ]
 },
 "Hoja Tóxica": {
  "en": "Poison Edge",
  "ranuras": "1",
  "nv": "3",
  "clase": "Básico",
  "elem": "Físico",
  "vias": [
   {
    "v": "cofre",
    "t": "Bosque de los Enanitos («Underground Waterway»).",
    "pj": [
     "terra"
    ]
   },
   {
    "v": "tienda",
    "t": "150 platines tras completar 4 mundos, o una vez conseguido por otra vía.",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   },
   {
    "v": "tablero",
    "t": "Casilla bonus del Tablero de la Llave Espada.",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   },
   {
    "v": "tablero",
    "t": "Comprando la casilla de Terra en el Tablero de la Llave Espada.",
    "pj": [
     "ventus",
     "aqua"
    ]
   },
   {
    "v": "tablero",
    "t": "Casilla bonus del Tablero Calavera.",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   },
   {
    "v": "tablero",
    "t": "Comprando la casilla de Capitán Garfio en el Tablero Calavera.",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   },
   {
    "v": "tablero",
    "t": "Comprando la casilla de Terra en el Tablero Secreto.",
    "pj": [
     "ventus",
     "aqua"
    ]
   }
  ],
  "recetas": [
   {
    "a": "Cisco Volátil",
    "b": "Toxis",
    "excl": null,
    "tipo": "15",
    "pct": "95"
   },
   {
    "a": "Embestida",
    "b": "Toxis",
    "excl": null,
    "tipo": "11",
    "pct": "95"
   },
   {
    "a": "Tiro Mortífero",
    "b": "Toxis",
    "excl": null,
    "tipo": "4",
    "pct": "95"
   }
  ]
 },
 "Hoja Gélida": {
  "en": "Blizzard Edge",
  "ranuras": "1",
  "nv": "3",
  "clase": "Básico",
  "elem": "Hielo",
  "vias": [
   {
    "v": "tienda",
    "t": "200 platines tras completar 4 mundos, o una vez conseguido por otra vía.",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   },
   {
    "v": "tablero",
    "t": "Casilla bonus del Tablero Animado.",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   },
   {
    "v": "tablero",
    "t": "Comprando la casilla de Capitán Justicia en el Tablero Animado.",
    "pj": [
     "ventus",
     "aqua"
    ]
   },
   {
    "v": "tablero",
    "t": "Comprando la casilla de Capitán Oscuro en el Tablero Animado.",
    "pj": [
     "terra"
    ]
   }
  ],
  "recetas": [
   {
    "a": "Cisco Volátil",
    "b": "Hielo",
    "excl": null,
    "tipo": "7",
    "pct": "95"
   },
   {
    "a": "Cisco Volátil",
    "b": "Hielo+",
    "excl": null,
    "tipo": "8",
    "pct": "95"
   },
   {
    "a": "Embestida",
    "b": "Hielo",
    "excl": null,
    "tipo": "5",
    "pct": "95"
   },
   {
    "a": "Embestida",
    "b": "Hielo+",
    "excl": null,
    "tipo": "7",
    "pct": "95"
   }
  ]
 },
 "Hoja Aturdidora": {
  "en": "Stun Edge",
  "ranuras": "1",
  "nv": "3",
  "clase": "Básico",
  "elem": "Físico",
  "vias": [
   {
    "v": "inicial",
    "t": "Lo tiene desde el principio.",
    "pj": [
     "terra"
    ]
   },
   {
    "v": "cofre",
    "t": "Castillo de los Sueños (habitación de Cenicienta).",
    "pj": [
     "ventus"
    ]
   },
   {
    "v": "tienda",
    "t": "150 platines tras completar 4 mundos, o una vez conseguido por otra vía.",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   },
   {
    "v": "tablero",
    "t": "Comprando la casilla de Terra en el Tablero de la Llave Espada.",
    "pj": [
     "ventus",
     "aqua"
    ]
   },
   {
    "v": "tablero",
    "t": "Casilla bonus del Tablero Real.",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   },
   {
    "v": "tablero",
    "t": "Comprando la casilla de Cenicienta en el Tablero Real.",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   },
   {
    "v": "tablero",
    "t": "Comprando la casilla de Gantu en el Tablero Espacial.",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   },
   {
    "v": "tablero",
    "t": "Comprando la casilla de Terra en el Tablero Secreto.",
    "pj": [
     "ventus",
     "aqua"
    ]
   }
  ],
  "recetas": [
   {
    "a": "Embestida",
    "b": "Electro",
    "excl": null,
    "tipo": "11",
    "pct": "95"
   },
   {
    "a": "Tiro Mortífero",
    "b": "Electro",
    "excl": null,
    "tipo": "12",
    "pct": "95"
   },
   {
    "a": "Tiro Mortífero",
    "b": "Electro+",
    "excl": null,
    "tipo": "11",
    "pct": "95"
   }
  ]
 },
 "Hoja Afortunada": {
  "en": "Slot Edge",
  "ranuras": "1",
  "nv": "3",
  "clase": "Básico",
  "elem": "Físico",
  "vias": [
   {
    "v": "cofre",
    "t": "Ciudad Disney («Raceway»).",
    "pj": [
     "terra"
    ]
   },
   {
    "v": "cofre",
    "t": "Ciudad Disney («Raceway»).",
    "pj": [
     "ventus"
    ]
   },
   {
    "v": "cofre",
    "t": "Ciudad Disney («Raceway»).",
    "pj": [
     "aqua"
    ]
   },
   {
    "v": "tienda",
    "t": "700 platines, una vez conseguido por otra vía.",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   },
   {
    "v": "tablero",
    "t": "Comprando la casilla de Capitán Justicia en el Tablero Animado.",
    "pj": [
     "ventus",
     "aqua"
    ]
   }
  ],
  "recetas": [
   {
    "a": "Hoja del Deseo",
    "b": "Cura",
    "excl": null,
    "tipo": "15",
    "pct": "100"
   },
   {
    "a": "Hoja Tóxica",
    "b": "Cura+",
    "excl": null,
    "tipo": "16",
    "pct": "95"
   },
   {
    "a": "Hoja Gélida",
    "b": "Cura+",
    "excl": null,
    "tipo": "7",
    "pct": "95"
   },
   {
    "a": "Cura++",
    "b": "Bloqueo concentrado",
    "excl": null,
    "tipo": "16",
    "pct": "90"
   },
   {
    "a": "Cura++",
    "b": "Bloqueo Cura",
    "excl": null,
    "tipo": "14",
    "pct": "90"
   },
   {
    "a": "Cura++",
    "b": "Coraza concentrada",
    "excl": null,
    "tipo": "16",
    "pct": "90"
   },
   {
    "a": "Cura++",
    "b": "Coraza Cura",
    "excl": null,
    "tipo": "14",
    "pct": "90"
   }
  ]
 },
 "Furia Pírica": {
  "en": "Fire Strike",
  "ranuras": "1",
  "nv": "3",
  "clase": "Básico",
  "elem": "Fuego",
  "vias": [
   {
    "v": "cofre",
    "t": "Coliseo del Olimpo («Coliseum Gates»).",
    "pj": [
     "terra"
    ]
   },
   {
    "v": "cofre",
    "t": "Coliseo del Olimpo («Coliseum Gates»).",
    "pj": [
     "ventus"
    ]
   },
   {
    "v": "cofre",
    "t": "Coliseo del Olimpo («Coliseum Gates»).",
    "pj": [
     "aqua"
    ]
   },
   {
    "v": "tienda",
    "t": "450 platines tras completar 5 mundos, o una vez conseguido por otra vía.",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   },
   {
    "v": "tablero",
    "t": "Comprando la casilla de Tigger en el Tablero de Miel.",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   },
   {
    "v": "tablero",
    "t": "Comprando la casilla de Capitán Justicia en el Tablero Animado.",
    "pj": [
     "ventus",
     "aqua"
    ]
   },
   {
    "v": "tablero",
    "t": "Comprando la casilla de Capitán Oscuro en el Tablero Animado.",
    "pj": [
     "terra"
    ]
   }
  ],
  "recetas": [
   {
    "a": "Hoja Tóxica",
    "b": "Piro+",
    "excl": null,
    "tipo": "4",
    "pct": "100"
   },
   {
    "a": "Hoja del Deseo",
    "b": "Ignición",
    "excl": null,
    "tipo": "1",
    "pct": "100"
   },
   {
    "a": "Hoja Aturdidora",
    "b": "Piro",
    "excl": null,
    "tipo": "11",
    "pct": "100"
   }
  ]
 },
 "Furia Confusión": {
  "en": "Confusion Strike",
  "ranuras": "1",
  "nv": "3",
  "clase": "Básico",
  "elem": "Físico",
  "vias": [
   {
    "v": "cofre",
    "t": "Reino Encantado («Maleficent's Throne»).",
    "pj": [
     "aqua"
    ]
   },
   {
    "v": "tienda",
    "t": "450 platines, una vez conseguido por otra vía.",
    "pj": null
   },
   {
    "v": "tablero",
    "t": "Comprando la casilla de Cenicienta en el Tablero Real.",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   },
   {
    "v": "tablero",
    "t": "Casilla bonus del Tablero de Miel.",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   },
   {
    "v": "tablero",
    "t": "Comprando la casilla de Winnie the Pooh en el Tablero de Miel.",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   },
   {
    "v": "tablero",
    "t": "Casilla bonus del Tablero Animado.",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   },
   {
    "v": "tablero",
    "t": "Casilla bonus del Tablero Secreto.",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   }
  ],
  "recetas": [
   {
    "a": "Cisco Volátil",
    "b": "Confu",
    "excl": null,
    "tipo": "15",
    "pct": "100"
   },
   {
    "a": "Embestida",
    "b": "Gravedad",
    "excl": null,
    "tipo": "11",
    "pct": "100"
   },
   {
    "a": "Tiro Mortífero",
    "b": "Confu",
    "excl": null,
    "tipo": "7",
    "pct": "100"
   }
  ]
 },
 "Furia Ligadora": {
  "en": "Binding Strike",
  "ranuras": "1",
  "nv": "3",
  "clase": "Básico",
  "elem": "Físico",
  "vias": [
   {
    "v": "cofre",
    "t": "Vergel Radiante («Gardens»).",
    "pj": [
     "ventus"
    ]
   },
   {
    "v": "tienda",
    "t": "400 platines tras completar 4 mundos, o una vez conseguido por otra vía.",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   },
   {
    "v": "tablero",
    "t": "Comprando la casilla de Terra en el Tablero de la Llave Espada.",
    "pj": [
     "ventus",
     "aqua"
    ]
   },
   {
    "v": "tablero",
    "t": "Comprando la casilla de Tigger en el Tablero de Miel.",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   },
   {
    "v": "tablero",
    "t": "Casilla bonus del Tablero Animado.",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   },
   {
    "v": "tablero",
    "t": "Comprando la casilla de Capitán Justicia en el Tablero Animado.",
    "pj": [
     "ventus",
     "aqua"
    ]
   },
   {
    "v": "tablero",
    "t": "Comprando la casilla de Capitán Oscuro en el Tablero Animado.",
    "pj": [
     "terra"
    ]
   },
   {
    "v": "tablero",
    "t": "Casilla bonus del Tablero Calavera.",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   },
   {
    "v": "tablero",
    "t": "Comprando la casilla de Capitán Garfio en el Tablero Calavera.",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   },
   {
    "v": "tablero",
    "t": "Comprando la casilla de Terra en el Tablero Secreto.",
    "pj": [
     "ventus",
     "aqua"
    ]
   }
  ],
  "recetas": [
   {
    "a": "Cisco Volátil",
    "b": "Enlace",
    "excl": null,
    "tipo": "11",
    "pct": "100"
   },
   {
    "a": "Tiro Mortífero",
    "b": "Enlace",
    "excl": null,
    "tipo": "15",
    "pct": "100"
   },
   {
    "a": "Hoja Aturdidora",
    "b": "Gravedad",
    "excl": null,
    "tipo": "9",
    "pct": "100"
   }
  ]
 },
 "Poder Desatado": {
  "en": "Brutal Blast",
  "ranuras": "1",
  "nv": "4",
  "clase": "Avanzado",
  "elem": "Físico",
  "vias": [
   {
    "v": "cofre",
    "t": "Espacio Profundo («Turo Prison Block»).",
    "pj": [
     "terra"
    ]
   },
   {
    "v": "tienda",
    "t": "1.800 platines, una vez conseguido por otra vía.",
    "pj": [
     "terra"
    ]
   }
  ],
  "recetas": [
   {
    "a": "Hoja Aturdidora",
    "b": "Escudo de Minas",
    "excl": "Terra",
    "tipo": "15",
    "pct": "70"
   },
   {
    "a": "Furia Ligadora",
    "b": "Cuadro de Minas",
    "excl": "Terra",
    "tipo": "12",
    "pct": "70"
   }
  ]
 },
 "Espiroimán": {
  "en": "Magnet Spiral",
  "ranuras": "1",
  "nv": "5",
  "clase": "Primera clase",
  "elem": "Físico",
  "vias": [
   {
    "v": "tienda",
    "t": "2.300 platines, una vez conseguido por otra vía.",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   }
  ],
  "recetas": [
   {
    "a": "Furia Ligadora",
    "b": "Magnetochoque",
    "excl": null,
    "tipo": "11",
    "pct": "100"
   },
   {
    "a": "Furia Ligadora",
    "b": "Imán++",
    "excl": null,
    "tipo": "10",
    "pct": "100"
   },
   {
    "a": "Cisco Volátil",
    "b": "Imán+",
    "excl": null,
    "tipo": "11",
    "pct": "20"
   },
   {
    "a": "Hoja Aturdidora",
    "b": "Imán+",
    "excl": null,
    "tipo": "12",
    "pct": "20"
   },
   {
    "a": "Gravedad+",
    "b": "Imán",
    "excl": null,
    "tipo": "9",
    "pct": "20"
   }
  ]
 },
 "Cortabrisas": {
  "en": "Windcutter",
  "ranuras": "1",
  "nv": "5",
  "clase": "Primera clase",
  "elem": "Físico",
  "vias": [
   {
    "v": "cofre",
    "t": "Necrópolis de Llaves Espada («Twister Trench»).",
    "pj": [
     "terra"
    ]
   },
   {
    "v": "tienda",
    "t": "1.500 platines, una vez conseguido por otra vía.",
    "pj": [
     "terra"
    ]
   }
  ],
  "recetas": [
   {
    "a": "Furia Ligadora",
    "b": "Aero++",
    "excl": "Terra",
    "tipo": "6",
    "pct": "100"
   },
   {
    "a": "Furia Confusión",
    "b": "Aero++",
    "excl": "Terra",
    "tipo": "7",
    "pct": "100"
   }
  ]
 },
 "Límite tormenta": {
  "en": "Limit Storm",
  "ranuras": "1",
  "nv": "5",
  "clase": "Primera clase",
  "elem": "Físico",
  "vias": [
   {
    "v": "minijuego",
    "t": "Consiguiendo 60 puntos en el álbum de pegatinas.",
    "pj": [
     "terra"
    ]
   },
   {
    "v": "minijuego",
    "t": "Consiguiendo 70 puntos en el álbum de pegatinas.",
    "pj": [
     "terra"
    ]
   },
   {
    "v": "tienda",
    "t": "1.500 platines, una vez conseguido por otra vía.",
    "pj": [
     "terra"
    ]
   },
   {
    "v": "tablero",
    "t": "Casilla bonus del Tablero Espacial.",
    "pj": [
     "terra"
    ]
   },
   {
    "v": "tablero",
    "t": "Comprando la casilla de Gantu en el Tablero Espacial.",
    "pj": [
     "terra"
    ]
   }
  ],
  "recetas": [
   {
    "a": "Poder Desatado",
    "b": "Furia Confusión",
    "excl": "Terra",
    "tipo": "7",
    "pct": "100"
   },
   {
    "a": "Poder Desatado",
    "b": "Furia Ligadora",
    "excl": "Terra",
    "tipo": "4",
    "pct": "100"
   }
  ]
 },
 "Magnetochoque": {
  "en": "Collision Magnet",
  "ranuras": "1",
  "nv": "4",
  "clase": "Avanzado",
  "elem": "Físico",
  "vias": [
   {
    "v": "minijuego",
    "t": "Consiguiendo 80 puntos en el álbum de pegatinas.",
    "pj": [
     "ventus"
    ]
   },
   {
    "v": "minijuego",
    "t": "Consiguiendo 70 puntos en el álbum de pegatinas.",
    "pj": [
     "ventus"
    ]
   },
   {
    "v": "tienda",
    "t": "1.300 platines, una vez conseguido por otra vía.",
    "pj": null
   },
   {
    "v": "tablero",
    "t": "Casilla bonus del Tablero Espacial.",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   },
   {
    "v": "tablero",
    "t": "Comprando la casilla de Experimento 626 en el Tablero Espacial.",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   }
  ],
  "recetas": [
   {
    "a": "Cisco Volátil",
    "b": "Imán+",
    "excl": null,
    "tipo": "11",
    "pct": "80"
   },
   {
    "a": "Hoja Aturdidora",
    "b": "Imán+",
    "excl": null,
    "tipo": "12",
    "pct": "80"
   },
   {
    "a": "Gravedad+",
    "b": "Imán+",
    "excl": null,
    "tipo": "9",
    "pct": "80"
   }
  ]
 },
 "Impacto Telúrico": {
  "en": "Geo Impact",
  "ranuras": "2",
  "nv": "5",
  "clase": "Primera clase",
  "elem": "Físico",
  "vias": [
   {
    "v": "cofre",
    "t": "País de Nunca Jamás («Mermaid Lagoon»).",
    "pj": [
     "terra"
    ]
   },
   {
    "v": "tienda",
    "t": "2.100 platines, una vez conseguido por otra vía.",
    "pj": [
     "terra"
    ]
   }
  ],
  "recetas": [
   {
    "a": "Poder Desatado",
    "b": "Poder Desatado",
    "excl": "Terra",
    "tipo": "14",
    "pct": "70"
   }
  ]
 },
 "Sacrificio": {
  "en": "Sacrifice",
  "ranuras": "1",
  "nv": "5",
  "clase": "Primera clase",
  "elem": "Físico",
  "vias": [
   {
    "v": "tienda",
    "t": "1.500 platines, una vez conseguido por otra vía.",
    "pj": [
     "terra"
    ]
   },
   {
    "v": "tablero",
    "t": "Casilla bonus del Tablero de Miel.",
    "pj": [
     "terra"
    ]
   },
   {
    "v": "tablero",
    "t": "Comprando la casilla de Tigger en el Tablero de Miel.",
    "pj": [
     "terra"
    ]
   }
  ],
  "recetas": [
   {
    "a": "Nigrobruma",
    "b": "Exilio",
    "excl": "Terra",
    "tipo": "2",
    "pct": "100"
   },
   {
    "a": "Hoja Tóxica",
    "b": "Exilio",
    "excl": "Terra",
    "tipo": "4",
    "pct": "100"
   }
  ]
 },
 "Cuartelillo": {
  "en": "Break Time",
  "ranuras": "1",
  "nv": "4",
  "clase": "Avanzado",
  "vias": [
   {
    "v": "cofre",
    "t": "Ciudad Disney (Sala de Juegos de Pete).",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   }
  ],
  "recetas": [
   {
    "a": "Cura++",
    "b": "Bloqueo Cura",
    "excl": null,
    "tipo": "14",
    "pct": "10"
   },
   {
    "a": "Cura++",
    "b": "Coraza Cura",
    "excl": null,
    "tipo": "14",
    "pct": "10"
   }
  ]
 },
 "Piro": {
  "en": "Fire",
  "ranuras": "1",
  "nv": "3",
  "clase": "Básico",
  "elem": "Fuego",
  "vias": [
   {
    "v": "cofre",
    "t": "Bosque de los Enanitos («Underground Waterway»).",
    "pj": [
     "terra",
     "aqua"
    ]
   },
   {
    "v": "cofre",
    "t": "Bosque de los Enanitos («Cottage Clearing»).",
    "pj": [
     "ventus"
    ]
   },
   {
    "v": "tienda",
    "t": "100 platines tras completar 3 mundos, o una vez conseguido por otra vía.",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   },
   {
    "v": "tablero",
    "t": "Comprando la casilla de Aqua en el Tablero de la Llave Espada.",
    "pj": [
     "terra",
     "ventus"
    ]
   },
   {
    "v": "tablero",
    "t": "Casilla bonus del Tablero Real.",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   },
   {
    "v": "tablero",
    "t": "Comprando la casilla de Capitán Garfio en el Tablero Calavera.",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   }
  ],
  "recetas": []
 },
 "Piro+": {
  "en": "Fira",
  "ranuras": "1",
  "nv": "3",
  "clase": "Básico",
  "elem": "Fuego",
  "vias": [
   {
    "v": "cofre",
    "t": "Vergel Radiante («Outer Gardens»).",
    "pj": [
     "terra"
    ]
   },
   {
    "v": "cofre",
    "t": "Vergel Radiante (acueducto).",
    "pj": [
     "ventus"
    ]
   },
   {
    "v": "cofre",
    "t": "Ciudad Disney («Raceway»).",
    "pj": [
     "aqua"
    ]
   },
   {
    "v": "tienda",
    "t": "500 platines tras completar 5 mundos, o una vez conseguido por otra vía.",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   },
   {
    "v": "tablero",
    "t": "Casilla bonus del Tablero de Miel.",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   },
   {
    "v": "tablero",
    "t": "Comprando la casilla de Winnie the Pooh en el Tablero de Miel.",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   },
   {
    "v": "tablero",
    "t": "Comprando la casilla de Capitán Justicia en el Tablero Animado.",
    "pj": [
     "ventus",
     "aqua"
    ]
   },
   {
    "v": "tablero",
    "t": "Comprando la casilla de Gantu en el Tablero Espacial.",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   },
   {
    "v": "tablero",
    "t": "Comprando la casilla de Aqua en el Tablero Secreto.",
    "pj": [
     "terra",
     "ventus"
    ]
   }
  ],
  "recetas": [
   {
    "a": "Piroembestida",
    "b": "Piro",
    "excl": null,
    "tipo": "4",
    "pct": "100"
   },
   {
    "a": "Furia Pírica",
    "b": "Piro",
    "excl": null,
    "tipo": "4",
    "pct": "100"
   },
   {
    "a": "Piro",
    "b": "Piro",
    "excl": null,
    "tipo": "1",
    "pct": "100"
   },
   {
    "a": "Piro",
    "b": "Ignición",
    "excl": null,
    "tipo": "3",
    "pct": "100"
   }
  ]
 },
 "Piro++": {
  "en": "Firaga",
  "ranuras": "1",
  "nv": "4",
  "clase": "Avanzado",
  "elem": "Fuego",
  "vias": [
   {
    "v": "cofre",
    "t": "País de Nunca Jamás («Cliff Path»).",
    "pj": [
     "terra",
     "ventus"
    ]
   },
   {
    "v": "cofre",
    "t": "País de Nunca Jamás («Rainbow Falls: Ascent»).",
    "pj": [
     "aqua"
    ]
   },
   {
    "v": "tienda",
    "t": "1.200 platines tras completar 8 mundos, o una vez conseguido por otra vía.",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   },
   {
    "v": "tablero",
    "t": "Casilla bonus del Tablero Espacial.",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   },
   {
    "v": "tablero",
    "t": "Comprando la casilla de Gantu en el Tablero Espacial.",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   },
   {
    "v": "tablero",
    "t": "Casilla bonus del Tablero Calavera.",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   },
   {
    "v": "tablero",
    "t": "Comprando la casilla de Capitán Garfio en el Tablero Calavera.",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   },
   {
    "v": "caida",
    "t": "Picantón (0,6 %).",
    "pj": null
   }
  ],
  "recetas": [
   {
    "a": "Piroembestida",
    "b": "Piro+",
    "excl": null,
    "tipo": "4",
    "pct": "90"
   },
   {
    "a": "Piro",
    "b": "Piro+",
    "excl": null,
    "tipo": "1",
    "pct": "90"
   },
   {
    "a": "Piro+",
    "b": "Piro+",
    "excl": null,
    "tipo": "2",
    "pct": "90"
   }
  ]
 },
 "Nigro Piro++": {
  "en": "Dark Firaga",
  "ranuras": "1",
  "nv": "5",
  "clase": "Primera clase",
  "elem": "Oscuridad",
  "vias": [
   {
    "v": "tienda",
    "t": "2.000 platines, una vez conseguido por otra vía.",
    "pj": [
     "terra"
    ]
   }
  ],
  "recetas": [
   {
    "a": "Nigrobruma",
    "b": "Piro++",
    "excl": "Terra",
    "tipo": "4",
    "pct": "100"
   },
   {
    "a": "Piro++",
    "b": "Apagón",
    "excl": "Terra",
    "tipo": "2",
    "pct": "100"
   }
  ]
 },
 "Lluvia Piro++": {
  "en": "Fission Firaga",
  "ranuras": "1",
  "nv": "4",
  "clase": "Avanzado",
  "elem": "Fuego",
  "vias": [
   {
    "v": "cofre",
    "t": "Bosque de los Enanitos («Courtyard»).",
    "pj": [
     "terra"
    ]
   },
   {
    "v": "cofre",
    "t": "«Courtyard».",
    "pj": [
     "aqua"
    ]
   },
   {
    "v": "tienda",
    "t": "1.500 platines, una vez conseguido por otra vía.",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   },
   {
    "v": "tablero",
    "t": "Casilla bonus del Tablero Secreto.",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   },
   {
    "v": "tablero",
    "t": "Comprando la casilla de Aqua en el Tablero Secreto.",
    "pj": [
     "terra",
     "ventus"
    ]
   }
  ],
  "recetas": [
   {
    "a": "Piro+",
    "b": "Aero++",
    "excl": null,
    "tipo": "1",
    "pct": "80"
   },
   {
    "a": "Piro++",
    "b": "Aero+",
    "excl": null,
    "tipo": "1",
    "pct": "80"
   },
   {
    "a": "Piro++",
    "b": "Aero++",
    "excl": null,
    "tipo": "2",
    "pct": "80"
   }
  ]
 },
 "Tardo Piro++": {
  "en": "Crawling Fire",
  "ranuras": "1",
  "nv": "4",
  "clase": "Avanzado",
  "elem": "Fuego",
  "vias": [
   {
    "v": "tienda",
    "t": "1.800 platines, una vez conseguido por otra vía.",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   }
  ],
  "recetas": [
   {
    "a": "Piro++",
    "b": "Freno",
    "excl": null,
    "tipo": "1",
    "pct": "80"
   },
   {
    "a": "Piro++",
    "b": "Paro+",
    "excl": null,
    "tipo": "4",
    "pct": "80"
   },
   {
    "a": "Piro++",
    "b": "Paro++",
    "excl": null,
    "tipo": "2",
    "pct": "80"
   }
  ]
 },
 "Hielo": {
  "en": "Blizzard",
  "ranuras": "1",
  "nv": "3",
  "clase": "Básico",
  "elem": "Hielo",
  "vias": [
   {
    "v": "inicial",
    "t": "Lo tiene desde el principio.",
    "pj": [
     "aqua"
    ]
   },
   {
    "v": "cofre",
    "t": "Reino Encantado («Forest Clearing»).",
    "pj": [
     "terra"
    ]
   },
   {
    "v": "cofre",
    "t": "Castillo de los Sueños («Wardrobe Room»).",
    "pj": [
     "ventus"
    ]
   },
   {
    "v": "tienda",
    "t": "100 platines tras completar 1 mundo, o una vez conseguido por otra vía.",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   },
   {
    "v": "tablero",
    "t": "Casilla bonus del Tablero de la Llave Espada.",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   },
   {
    "v": "tablero",
    "t": "Comprando la casilla de Aqua en el Tablero de la Llave Espada.",
    "pj": [
     "terra",
     "ventus"
    ]
   },
   {
    "v": "tablero",
    "t": "Comprando la casilla de Cenicienta en el Tablero Real.",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   },
   {
    "v": "tablero",
    "t": "Casilla bonus del Tablero Animado.",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   }
  ],
  "recetas": []
 },
 "Hielo+": {
  "en": "Blizzara",
  "ranuras": "1",
  "nv": "3",
  "clase": "Básico",
  "elem": "Hielo",
  "vias": [
   {
    "v": "minijuego",
    "t": "Sacando «Fantástico» en «¡Algarabía! - Nave gumi II -» en Ritmo Helado (Experto).",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   },
   {
    "v": "tienda",
    "t": "500 platines tras completar 6 mundos, o una vez conseguido por otra vía.",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   },
   {
    "v": "tablero",
    "t": "Casilla bonus del Tablero Animado.",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   },
   {
    "v": "tablero",
    "t": "Comprando la casilla de Minnie en el Tablero Animado.",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   },
   {
    "v": "tablero",
    "t": "Comprando la casilla de Aqua en el Tablero Secreto.",
    "pj": [
     "terra",
     "ventus"
    ]
   }
  ],
  "recetas": [
   {
    "a": "Tiro Mortífero",
    "b": "Hielo",
    "excl": null,
    "tipo": "7",
    "pct": "100"
   },
   {
    "a": "Hoja Gélida",
    "b": "Hielo",
    "excl": null,
    "tipo": "7",
    "pct": "100"
   },
   {
    "a": "Hielo",
    "b": "Hielo",
    "excl": null,
    "tipo": "5",
    "pct": "100"
   },
   {
    "a": "Hielo",
    "b": "Aero",
    "excl": null,
    "tipo": "8",
    "pct": "100"
   }
  ]
 },
 "Hielo++": {
  "en": "Blizzaga",
  "ranuras": "1",
  "nv": "3",
  "clase": "Avanzado",
  "elem": "Hielo",
  "vias": [
   {
    "v": "minijuego",
    "t": "Sacando «Fantástico» en «Juntas las manos» en Ritmo Helado (Experto).",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   },
   {
    "v": "tienda",
    "t": "1.200 platines tras completar 8 mundos, o una vez conseguido por otra vía.",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   },
   {
    "v": "tablero",
    "t": "Comprando la casilla de Minnie en el Tablero Animado.",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   },
   {
    "v": "caida",
    "t": "Salmarina (0,6 %).",
    "pj": null
   }
  ],
  "recetas": [
   {
    "a": "Hoja Gélida",
    "b": "Hielo+",
    "excl": null,
    "tipo": "7",
    "pct": "100"
   },
   {
    "a": "Hielo",
    "b": "Hielo+",
    "excl": null,
    "tipo": "5",
    "pct": "100"
   },
   {
    "a": "Hielo+",
    "b": "Hielo+",
    "excl": null,
    "tipo": "6",
    "pct": "100"
   }
  ]
 },
 "Electro": {
  "en": "Thunder",
  "ranuras": "1",
  "nv": "3",
  "clase": "Básico",
  "elem": "Rayo",
  "vias": [
   {
    "v": "inicial",
    "t": "Lo tiene desde el principio.",
    "pj": [
     "aqua"
    ]
   },
   {
    "v": "cofre",
    "t": "Castillo de los Sueños («Antechamber»).",
    "pj": [
     "terra"
    ]
   },
   {
    "v": "cofre",
    "t": "Reino Encantado («Audience Chamber»).",
    "pj": [
     "ventus"
    ]
   },
   {
    "v": "cofre",
    "t": "Ciudad Disney («Gizmo Gallery») (dos cofres).",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   },
   {
    "v": "tienda",
    "t": "150 platines tras completar 3 mundos, o una vez conseguido por otra vía.",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   },
   {
    "v": "tablero",
    "t": "Comprando la casilla de Aqua en el Tablero de la Llave Espada.",
    "pj": [
     "terra",
     "ventus"
    ]
   },
   {
    "v": "tablero",
    "t": "Casilla bonus del Tablero Real.",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   },
   {
    "v": "tablero",
    "t": "Comprando la casilla de Cenicienta en el Tablero Real.",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   },
   {
    "v": "tablero",
    "t": "Comprando la casilla de Experimento 626 en el Tablero Espacial.",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   }
  ],
  "recetas": []
 },
 "Electro+": {
  "en": "Thundara",
  "ranuras": "1",
  "nv": "3",
  "clase": "Básico",
  "elem": "Rayo",
  "vias": [
   {
    "v": "cofre",
    "t": "Espacio Profundo («Launch Deck»).",
    "pj": [
     "terra"
    ]
   },
   {
    "v": "cofre",
    "t": "Espacio Profundo («Ship Hub»).",
    "pj": [
     "ventus"
    ]
   },
   {
    "v": "cofre",
    "t": "Vergel Radiante (acueducto).",
    "pj": [
     "aqua"
    ]
   },
   {
    "v": "tienda",
    "t": "600 platines tras completar 6 mundos, o una vez conseguido por otra vía.",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   },
   {
    "v": "tablero",
    "t": "Casilla bonus del Tablero de Miel.",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   },
   {
    "v": "tablero",
    "t": "Comprando la casilla de Winnie the Pooh en el Tablero de Miel.",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   },
   {
    "v": "tablero",
    "t": "Comprando la casilla de Capitán Justicia en el Tablero Animado.",
    "pj": [
     "ventus",
     "aqua"
    ]
   },
   {
    "v": "tablero",
    "t": "Comprando la casilla de Capitán Oscuro en el Tablero Animado.",
    "pj": [
     "terra"
    ]
   },
   {
    "v": "tablero",
    "t": "Casilla bonus del Tablero Espacial.",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   },
   {
    "v": "tablero",
    "t": "Comprando la casilla de Experimento 626 en el Tablero Espacial.",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   },
   {
    "v": "tablero",
    "t": "Casilla bonus del Tablero Secreto.",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   },
   {
    "v": "tablero",
    "t": "Comprando la casilla de Aqua en el Tablero Secreto.",
    "pj": [
     "terra",
     "ventus"
    ]
   },
   {
    "v": "tablero",
    "t": "Comprando la casilla de Terra en el Tablero Secreto.",
    "pj": [
     "ventus",
     "aqua"
    ]
   }
  ],
  "recetas": [
   {
    "a": "Hoja Aturdidora",
    "b": "Electro",
    "excl": null,
    "tipo": "11",
    "pct": "100"
   },
   {
    "a": "Electro",
    "b": "Electro",
    "excl": null,
    "tipo": "9",
    "pct": "100"
   },
   {
    "a": "Gravedad",
    "b": "Imán",
    "excl": null,
    "tipo": "12",
    "pct": "100"
   }
  ]
 },
 "Electro++": {
  "en": "Thundaga",
  "ranuras": "1",
  "nv": "4",
  "clase": "Avanzado",
  "elem": "Rayo",
  "vias": [
   {
    "v": "cofre",
    "t": "País de Nunca Jamás («Rainbow Falls: Ascent»).",
    "pj": [
     "aqua"
    ]
   },
   {
    "v": "historia",
    "t": "Golpeando la punta del tótem de «Indian Camp».",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   },
   {
    "v": "tienda",
    "t": "1.300 platines tras completar 8 mundos, o una vez conseguido por otra vía.",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   },
   {
    "v": "tablero",
    "t": "Comprando la casilla de Winnie the Pooh en el Tablero de Miel.",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   },
   {
    "v": "tablero",
    "t": "Comprando la casilla de Tigger en el Tablero de Miel.",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   },
   {
    "v": "tablero",
    "t": "Casilla bonus del Tablero Espacial.",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   },
   {
    "v": "tablero",
    "t": "Casilla bonus del Tablero Secreto.",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   },
   {
    "v": "caida",
    "t": "Mostacete (0,6 %).",
    "pj": null
   }
  ],
  "recetas": [
   {
    "a": "Furia Ligadora",
    "b": "Electro+",
    "excl": null,
    "tipo": "11",
    "pct": "90"
   },
   {
    "a": "Electro",
    "b": "Electro+",
    "excl": null,
    "tipo": "9",
    "pct": "90"
   },
   {
    "a": "Electro+",
    "b": "Electro+",
    "excl": null,
    "tipo": "10",
    "pct": "90"
   }
  ]
 },
 "Cura": {
  "en": "Cure",
  "ranuras": "1",
  "nv": "3",
  "clase": "Básico",
  "vias": [
   {
    "v": "cofre",
    "t": "Torre de los Misterios.",
    "pj": [
     "terra"
    ]
   },
   {
    "v": "cofre",
    "t": "Reino Encantado («Gates»).",
    "pj": [
     "ventus",
     "aqua"
    ]
   },
   {
    "v": "tienda",
    "t": "150 platines tras completar 2 mundos, o una vez conseguido por otra vía.",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   },
   {
    "v": "tablero",
    "t": "Casilla bonus del Tablero de la Llave Espada.",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   },
   {
    "v": "tablero",
    "t": "Comprando la casilla de Ventus en el Tablero de la Llave Espada.",
    "pj": [
     "terra",
     "aqua"
    ]
   },
   {
    "v": "tablero",
    "t": "Comprando la casilla de Aqua en el Tablero de la Llave Espada.",
    "pj": [
     "terra",
     "ventus"
    ]
   },
   {
    "v": "tablero",
    "t": "Casilla bonus del Tablero Animado.",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   },
   {
    "v": "tablero",
    "t": "Comprando la casilla de Minnie en el Tablero Animado.",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   },
   {
    "v": "tablero",
    "t": "Comprando la casilla de Ventus en el Tablero Secreto.",
    "pj": [
     "terra",
     "aqua"
    ]
   },
   {
    "v": "tablero",
    "t": "Comprando la casilla de Aqua en el Tablero Secreto.",
    "pj": [
     "terra",
     "ventus"
    ]
   }
  ],
  "recetas": []
 },
 "Cura+": {
  "en": "Cura",
  "ranuras": "1",
  "nv": "3",
  "clase": "Básico",
  "vias": [
   {
    "v": "cofre",
    "t": "Coliseo del Olimpo («Coliseum Gates»).",
    "pj": [
     "ventus",
     "aqua"
    ]
   },
   {
    "v": "tienda",
    "t": "600 platines tras completar 6 mundos, o una vez conseguido por otra vía.",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   },
   {
    "v": "tablero",
    "t": "Comprando la casilla de Tigger en el Tablero de Miel.",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   },
   {
    "v": "tablero",
    "t": "Comprando la casilla de Minnie en el Tablero Animado.",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   },
   {
    "v": "tablero",
    "t": "Comprando la casilla de Peter Pan en el Tablero Calavera.",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   },
   {
    "v": "tablero",
    "t": "Casilla bonus del Tablero Secreto.",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   }
  ],
  "recetas": [
   {
    "a": "Electro",
    "b": "Cura",
    "excl": null,
    "tipo": "9",
    "pct": "100"
   },
   {
    "a": "Cura",
    "b": "Cura",
    "excl": null,
    "tipo": "13",
    "pct": "100"
   },
   {
    "a": "Cura",
    "b": "Aero",
    "excl": null,
    "tipo": "15",
    "pct": "100"
   }
  ]
 },
 "Cura++": {
  "en": "Curaga",
  "ranuras": "1",
  "nv": "4",
  "clase": "Avanzado",
  "vias": [
   {
    "v": "tienda",
    "t": "1.300 platines tras completar 8 mundos, o una vez conseguido por otra vía.",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   }
  ],
  "recetas": [
   {
    "a": "Cura",
    "b": "Cura+",
    "excl": null,
    "tipo": "13",
    "pct": "100"
   },
   {
    "a": "Cura+",
    "b": "Cura+",
    "excl": null,
    "tipo": "14",
    "pct": "100"
   }
  ]
 },
 "Esna": {
  "en": "Esuna",
  "ranuras": "1",
  "nv": "1",
  "clase": "Avanzado",
  "vias": [
   {
    "v": "cofre",
    "t": "Vergel Radiante (acueducto).",
    "pj": [
     "terra"
    ]
   },
   {
    "v": "tienda",
    "t": "600 platines tras completar 5 mundos, o una vez conseguido por otra vía.",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   }
  ],
  "recetas": []
 },
 "Escudo de Minas": {
  "en": "Mine Shield",
  "ranuras": "1",
  "nv": "4",
  "clase": "Avanzado",
  "elem": "Neutro",
  "vias": [
   {
    "v": "cofre",
    "t": "Espacio Profundo («Machinery Bay»).",
    "pj": [
     "ventus"
    ]
   },
   {
    "v": "cofre",
    "t": "País de Nunca Jamás («Peter's Hideout»).",
    "pj": [
     "aqua"
    ]
   },
   {
    "v": "tienda",
    "t": "1.000 platines tras completar 7 mundos, o una vez conseguido por otra vía.",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   },
   {
    "v": "tablero",
    "t": "Comprando la casilla de Experimento 626 en el Tablero Espacial.",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   }
  ],
  "recetas": [
   {
    "a": "Piro+",
    "b": "Gravedad",
    "excl": null,
    "tipo": "1",
    "pct": "100"
   },
   {
    "a": "Piro+",
    "b": "Bloqueo",
    "excl": null,
    "tipo": "3",
    "pct": "100"
   },
   {
    "a": "Ignición",
    "b": "Paro",
    "excl": null,
    "tipo": "4",
    "pct": "100"
   },
   {
    "a": "Paro+",
    "b": "Bloqueo",
    "excl": null,
    "tipo": "13",
    "pct": "100"
   }
  ]
 },
 "Cuadro de Minas": {
  "en": "Mine Square",
  "ranuras": "1",
  "nv": "4",
  "clase": "Avanzado",
  "elem": "Neutro",
  "vias": [
   {
    "v": "cofre",
    "t": "Espacio Profundo («Machinery Bay Access»).",
    "pj": [
     "terra"
    ]
   },
   {
    "v": "cofre",
    "t": "Vergel Radiante («Front Doors»).",
    "pj": [
     "aqua"
    ]
   },
   {
    "v": "tienda",
    "t": "1.000 platines tras completar 7 mundos, o una vez conseguido por otra vía.",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   },
   {
    "v": "tablero",
    "t": "Casilla bonus del Tablero de Miel.",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   },
   {
    "v": "tablero",
    "t": "Comprando la casilla de Winnie the Pooh en el Tablero de Miel.",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   },
   {
    "v": "tablero",
    "t": "Casilla bonus del Tablero Calavera.",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   },
   {
    "v": "tablero",
    "t": "Comprando la casilla de Capitán Garfio en el Tablero Calavera.",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   }
  ],
  "recetas": [
   {
    "a": "Piro+",
    "b": "Paro",
    "excl": null,
    "tipo": "1",
    "pct": "100"
   },
   {
    "a": "Piro+",
    "b": "Coraza",
    "excl": null,
    "tipo": "3",
    "pct": "100"
   },
   {
    "a": "Aero+",
    "b": "Ignición",
    "excl": null,
    "tipo": "4",
    "pct": "100"
   },
   {
    "a": "Paro+",
    "b": "Coraza",
    "excl": null,
    "tipo": "13",
    "pct": "100"
   }
  ]
 },
 "Gravedad": {
  "en": "Zero Gravity",
  "ranuras": "1",
  "nv": "3",
  "clase": "Básico",
  "elem": "Neutro",
  "vias": [
   {
    "v": "cofre",
    "t": "Reino Encantado («Audience Chamber»).",
    "pj": [
     "terra"
    ]
   },
   {
    "v": "cofre",
    "t": "Castillo de los Sueños («Wardrobe Room»).",
    "pj": [
     "ventus"
    ]
   },
   {
    "v": "cofre",
    "t": "Vergel Radiante («Gardens»).",
    "pj": [
     "aqua"
    ]
   },
   {
    "v": "tienda",
    "t": "150 platines tras completar 3 mundos, o una vez conseguido por otra vía.",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   },
   {
    "v": "tablero",
    "t": "Casilla bonus del Tablero de la Llave Espada.",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   },
   {
    "v": "tablero",
    "t": "Comprando la casilla de Aqua en el Tablero de la Llave Espada.",
    "pj": [
     "terra",
     "ventus"
    ]
   },
   {
    "v": "tablero",
    "t": "Comprando la casilla de Terra en el Tablero de la Llave Espada.",
    "pj": [
     "ventus",
     "aqua"
    ]
   },
   {
    "v": "tablero",
    "t": "Comprando la casilla de Cenicienta en el Tablero Real.",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   }
  ],
  "recetas": []
 },
 "Gravedad+": {
  "en": "Zero Gravira",
  "ranuras": "1",
  "nv": "3",
  "clase": "Básico",
  "elem": "Neutro",
  "vias": [
   {
    "v": "cofre",
    "t": "Ciudad Disney (Sala de Juegos de Pete).",
    "pj": [
     "terra"
    ]
   },
   {
    "v": "cofre",
    "t": "Espacio Profundo («Ship Hub»).",
    "pj": [
     "ventus"
    ]
   },
   {
    "v": "cofre",
    "t": "Espacio Profundo («Launch Deck»).",
    "pj": [
     "aqua"
    ]
   },
   {
    "v": "tienda",
    "t": "600 platines tras completar 6 mundos, o una vez conseguido por otra vía.",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   },
   {
    "v": "tablero",
    "t": "Casilla bonus del Tablero de Miel.",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   },
   {
    "v": "tablero",
    "t": "Comprando la casilla de Capitán Justicia en el Tablero Animado.",
    "pj": [
     "ventus",
     "aqua"
    ]
   },
   {
    "v": "tablero",
    "t": "Comprando la casilla de Capitán Oscuro en el Tablero Animado.",
    "pj": [
     "terra"
    ]
   },
   {
    "v": "tablero",
    "t": "Casilla bonus del Tablero Calavera.",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   },
   {
    "v": "tablero",
    "t": "Comprando la casilla de Peter Pan en el Tablero Calavera.",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   },
   {
    "v": "tablero",
    "t": "Comprando la casilla de Aqua en el Tablero Secreto.",
    "pj": [
     "terra",
     "ventus"
    ]
   },
   {
    "v": "tablero",
    "t": "Comprando la casilla de Terra en el Tablero Secreto.",
    "pj": [
     "ventus",
     "aqua"
    ]
   }
  ],
  "recetas": [
   {
    "a": "Electro",
    "b": "Gravedad",
    "excl": null,
    "tipo": "9",
    "pct": "90"
   },
   {
    "a": "Gravedad",
    "b": "Gravedad",
    "excl": null,
    "tipo": "13",
    "pct": "90"
   },
   {
    "a": "Imán",
    "b": "Aero",
    "excl": null,
    "tipo": "16",
    "pct": "90"
   }
  ]
 },
 "Gravedad++": {
  "en": "Zero Graviga",
  "ranuras": "1",
  "nv": "4",
  "clase": "Avanzado",
  "elem": "Neutro",
  "vias": [
   {
    "v": "cofre",
    "t": "País de Nunca Jamás («Rainbow Falls: Base»).",
    "pj": [
     "terra"
    ]
   },
   {
    "v": "cofre",
    "t": "Reino de la Oscuridad («Middle Zone»).",
    "pj": [
     "aqua"
    ]
   },
   {
    "v": "tienda",
    "t": "1.300 platines, una vez conseguido por otra vía.",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   },
   {
    "v": "tablero",
    "t": "Casilla bonus del Tablero Animado.",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   },
   {
    "v": "tablero",
    "t": "Casilla bonus del Tablero Espacial.",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   },
   {
    "v": "tablero",
    "t": "Comprando la casilla de Experimento 626 en el Tablero Espacial.",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   },
   {
    "v": "tablero",
    "t": "Casilla bonus del Tablero Secreto.",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   }
  ],
  "recetas": [
   {
    "a": "Electro+",
    "b": "Gravedad+",
    "excl": null,
    "tipo": "9",
    "pct": "80"
   },
   {
    "a": "Gravedad",
    "b": "Gravedad+",
    "excl": null,
    "tipo": "13",
    "pct": "80"
   },
   {
    "a": "Gravedad+",
    "b": "Gravedad+",
    "excl": null,
    "tipo": "14",
    "pct": "80"
   }
  ]
 },
 "Imán": {
  "en": "Magnet",
  "ranuras": "1",
  "nv": "3",
  "clase": "Básico",
  "elem": "Neutro",
  "vias": [
   {
    "v": "cofre",
    "t": "Reino Encantado («Hall»).",
    "pj": [
     "ventus"
    ]
   },
   {
    "v": "cofre",
    "t": "Bosque de los Enanitos («Vault»).",
    "pj": [
     "aqua"
    ]
   },
   {
    "v": "tienda",
    "t": "120 platines tras completar 3 mundos, o una vez conseguido por otra vía.",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   },
   {
    "v": "tablero",
    "t": "Casilla bonus del Tablero de la Llave Espada.",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   },
   {
    "v": "tablero",
    "t": "Comprando la casilla de Ventus en el Tablero de la Llave Espada.",
    "pj": [
     "terra",
     "aqua"
    ]
   },
   {
    "v": "tablero",
    "t": "Comprando la casilla de Aqua en el Tablero de la Llave Espada.",
    "pj": [
     "terra",
     "ventus"
    ]
   },
   {
    "v": "tablero",
    "t": "Comprando la casilla de Cenicienta en el Tablero Real.",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   },
   {
    "v": "tablero",
    "t": "Comprando la casilla de Minnie en el Tablero Animado.",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   },
   {
    "v": "tablero",
    "t": "Comprando la casilla de Experimento 626 en el Tablero Espacial.",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   }
  ],
  "recetas": []
 },
 "Imán+": {
  "en": "Magnera",
  "ranuras": "1",
  "nv": "3",
  "clase": "Básico",
  "elem": "Neutro",
  "vias": [
   {
    "v": "tienda",
    "t": "550 platines tras completar 6 mundos, o una vez conseguido por otra vía.",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   },
   {
    "v": "minijuego",
    "t": "Ganando por primera vez a Chip y Chop en el Frutibol (Ciudad Disney).",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   },
   {
    "v": "tablero",
    "t": "Casilla bonus del Tablero Secreto.",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   },
   {
    "v": "tablero",
    "t": "Comprando la casilla de Ventus en el Tablero Secreto.",
    "pj": [
     "terra",
     "aqua"
    ]
   },
   {
    "v": "tablero",
    "t": "Comprando la casilla de Aqua en el Tablero Secreto.",
    "pj": [
     "terra",
     "ventus"
    ]
   }
  ],
  "recetas": [
   {
    "a": "Hoja Aturdidora",
    "b": "Imán",
    "excl": null,
    "tipo": "11",
    "pct": "100"
   },
   {
    "a": "Electro",
    "b": "Imán",
    "excl": null,
    "tipo": "9",
    "pct": "100"
   },
   {
    "a": "Imán",
    "b": "Imán",
    "excl": null,
    "tipo": "13",
    "pct": "100"
   }
  ]
 },
 "Imán++": {
  "en": "Magnega",
  "ranuras": "1",
  "nv": "4",
  "clase": "Avanzado",
  "elem": "Neutro",
  "vias": [
   {
    "v": "cofre",
    "t": "Torre de los Misterios.",
    "pj": [
     "ventus"
    ]
   },
   {
    "v": "cofre",
    "t": "Torre de los Misterios.",
    "pj": [
     "aqua"
    ]
   },
   {
    "v": "tienda",
    "t": "1.250 platines, una vez conseguido por otra vía.",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   },
   {
    "v": "tablero",
    "t": "Casilla bonus del Tablero Calavera.",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   },
   {
    "v": "tablero",
    "t": "Casilla bonus del Tablero Secreto.",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   }
  ],
  "recetas": [
   {
    "a": "Imán",
    "b": "Imán+",
    "excl": null,
    "tipo": "9",
    "pct": "100"
   },
   {
    "a": "Imán+",
    "b": "Imán+",
    "excl": null,
    "tipo": "10",
    "pct": "100"
   }
  ]
 },
 "Aero": {
  "en": "Aero",
  "ranuras": "1",
  "nv": "3",
  "clase": "Básico",
  "elem": "Neutro",
  "vias": [
   {
    "v": "inicial",
    "t": "Lo tiene desde el principio.",
    "pj": [
     "ventus"
    ]
   },
   {
    "v": "tienda",
    "t": "150 platines tras completar 3 mundos, o una vez conseguido por otra vía.",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   },
   {
    "v": "tablero",
    "t": "Casilla bonus del Tablero de la Llave Espada.",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   },
   {
    "v": "tablero",
    "t": "Comprando la casilla de Ventus en el Tablero de la Llave Espada.",
    "pj": [
     "terra",
     "aqua"
    ]
   },
   {
    "v": "tablero",
    "t": "Comprando la casilla de Cenicienta en el Tablero Real.",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   },
   {
    "v": "tablero",
    "t": "Comprando la casilla de Winnie the Pooh en el Tablero de Miel.",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   },
   {
    "v": "tablero",
    "t": "Casilla bonus del Tablero Calavera.",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   },
   {
    "v": "tablero",
    "t": "Comprando la casilla de Peter Pan en el Tablero Calavera.",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   }
  ],
  "recetas": []
 },
 "Aero+": {
  "en": "Aerora",
  "ranuras": "1",
  "nv": "3",
  "clase": "Básico",
  "elem": "Neutro",
  "vias": [
   {
    "v": "minijuego",
    "t": "Quedando entre los tres primeros en GP Jarana (Retumbódromo).",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   },
   {
    "v": "tienda",
    "t": "600 platines tras completar 6 mundos, o una vez conseguido por otra vía.",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   },
   {
    "v": "tablero",
    "t": "Comprando la casilla de Tigger en el Tablero de Miel.",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   },
   {
    "v": "tablero",
    "t": "Casilla bonus del Tablero Animado.",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   },
   {
    "v": "tablero",
    "t": "Casilla bonus del Tablero Espacial.",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   },
   {
    "v": "tablero",
    "t": "Comprando la casilla de Experimento 626 en el Tablero Espacial.",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   },
   {
    "v": "tablero",
    "t": "Casilla bonus del Tablero Calavera.",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   },
   {
    "v": "tablero",
    "t": "Comprando la casilla de Peter Pan en el Tablero Calavera.",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   },
   {
    "v": "tablero",
    "t": "Casilla bonus del Tablero Secreto.",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   },
   {
    "v": "tablero",
    "t": "Comprando la casilla de Ventus en el Tablero Secreto.",
    "pj": [
     "terra",
     "aqua"
    ]
   }
  ],
  "recetas": [
   {
    "a": "Cisco Volátil",
    "b": "Aero",
    "excl": null,
    "tipo": "7",
    "pct": "95"
   },
   {
    "a": "Electro",
    "b": "Aero",
    "excl": null,
    "tipo": "9",
    "pct": "95"
   },
   {
    "a": "Aero",
    "b": "Aero",
    "excl": null,
    "tipo": "5",
    "pct": "95"
   }
  ]
 },
 "Aero++": {
  "en": "Aeroga",
  "ranuras": "1",
  "nv": "4",
  "clase": "Avanzado",
  "elem": "Neutro",
  "vias": [
   {
    "v": "cofre",
    "t": "País de Nunca Jamás («Mermaid Lagoon»).",
    "pj": [
     "ventus"
    ]
   },
   {
    "v": "cofre",
    "t": "Necrópolis de Llaves Espada («Twister Trench»).",
    "pj": [
     "aqua"
    ]
   },
   {
    "v": "tienda",
    "t": "1.300 platines, una vez conseguido por otra vía.",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   },
   {
    "v": "tablero",
    "t": "Casilla bonus del Tablero Secreto.",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   }
  ],
  "recetas": [
   {
    "a": "Cisco Volátil",
    "b": "Aero+",
    "excl": null,
    "tipo": "15",
    "pct": "90"
   },
   {
    "a": "Aero",
    "b": "Aero+",
    "excl": null,
    "tipo": "13",
    "pct": "90"
   },
   {
    "a": "Aero+",
    "b": "Aero+",
    "excl": null,
    "tipo": "14",
    "pct": "90"
   }
  ]
 },
 "Exilio": {
  "en": "Warp",
  "ranuras": "1",
  "nv": "5",
  "clase": "Avanzado",
  "elem": "Neutro",
  "vias": [
   {
    "v": "cofre",
    "t": "Espacio Profundo («Ship Corridor»).",
    "pj": [
     "terra"
    ]
   },
   {
    "v": "tienda",
    "t": "1.500 platines, una vez conseguido por otra vía.",
    "pj": [
     "terra"
    ]
   }
  ],
  "recetas": [
   {
    "a": "Electro+",
    "b": "Gravedad+",
    "excl": "Terra",
    "tipo": "9",
    "pct": "20"
   },
   {
    "a": "Gravedad",
    "b": "Gravedad+",
    "excl": "Terra",
    "tipo": "13",
    "pct": "20"
   },
   {
    "a": "Gravedad+",
    "b": "Gravedad+",
    "excl": "Terra",
    "tipo": "14",
    "pct": "20"
   },
   {
    "a": "Electro",
    "b": "Gravedad",
    "excl": "Terra",
    "tipo": "9",
    "pct": "10"
   },
   {
    "a": "Imán",
    "b": "Aero",
    "excl": "Terra",
    "tipo": "16",
    "pct": "10"
   },
   {
    "a": "Gravedad",
    "b": "Gravedad",
    "excl": "Terra",
    "tipo": "14",
    "pct": "10"
   }
  ]
 },
 "Hipotermia": {
  "en": "Deep Freeze",
  "vias": [],
  "recetas": [
   {
    "a": "Tiro Gélido",
    "b": "Hielo++",
    "excl": null,
    "tipo": "7",
    "pct": "100"
   },
   {
    "a": "Furia Ligadora",
    "b": "Hielo++",
    "excl": null,
    "tipo": "8",
    "pct": "100"
   },
   {
    "a": "Hielo++",
    "b": "Triple Hielo++",
    "excl": null,
    "tipo": "6",
    "pct": "100"
   }
  ]
 },
 "Megafulgor": {
  "en": "Mega Flare",
  "ranuras": "2",
  "nv": "6",
  "clase": "Primera clase",
  "elem": "Fuego",
  "vias": [],
  "recetas": [
   {
    "a": "Lluvia Piro++",
    "b": "Tardo Piro++",
    "excl": null,
    "tipo": "2",
    "pct": "100"
   }
  ]
 },
 "Sismo": {
  "en": "Quake",
  "ranuras": "2",
  "nv": "5",
  "clase": "Primera clase",
  "elem": "Neutro",
  "vias": [
   {
    "v": "tienda",
    "t": "2.500 platines, una vez conseguido por otra vía.",
    "pj": [
     "terra"
    ]
   }
  ],
  "recetas": [
   {
    "a": "Poder Desatado",
    "b": "Gravedad++",
    "excl": "Terra",
    "tipo": "2",
    "pct": "90"
   },
   {
    "a": "Poder Desatado",
    "b": "Imán++",
    "excl": "Terra",
    "tipo": "3",
    "pct": "90"
   },
   {
    "a": "Hoja Aturdidora",
    "b": "Escudo de Minas",
    "excl": "Terra",
    "tipo": "15",
    "pct": "30"
   },
   {
    "a": "Furia Ligadora",
    "b": "Cuadro de Minas",
    "excl": "Terra",
    "tipo": "12",
    "pct": "30"
   },
   {
    "a": "Poder Desatado",
    "b": "Poder Desatado",
    "excl": "Terra",
    "tipo": "14",
    "pct": "30"
   }
  ]
 },
 "Meteo": {
  "en": "Meteor",
  "ranuras": "2",
  "nv": "6",
  "clase": "Primera clase",
  "elem": "Neutro",
  "vias": [],
  "recetas": [
   {
    "a": "Impacto Telúrico",
    "b": "Sismo",
    "excl": "Terra",
    "tipo": "2",
    "pct": "100"
   },
   {
    "a": "Poder Desatado",
    "b": "Gravedad++",
    "excl": "Terra",
    "tipo": "2",
    "pct": "10"
   },
   {
    "a": "Poder Desatado",
    "b": "Imán++",
    "excl": "Terra",
    "tipo": "3",
    "pct": "10"
   }
  ]
 },
 "Trascendencia": {
  "en": "Transcendence",
  "ranuras": "2",
  "nv": "6",
  "clase": "Primera clase",
  "elem": "Neutro",
  "vias": [
   {
    "v": "cofre",
    "t": "Reino de la Oscuridad («Lower Zone»).",
    "pj": [
     "aqua"
    ]
   }
  ],
  "recetas": [
   {
    "a": "Espiroimán",
    "b": "Gravedad++",
    "excl": null,
    "tipo": "10",
    "pct": "100"
   }
  ]
 },
 "Minimalia": {
  "en": "Mini",
  "ranuras": "1",
  "nv": "4",
  "clase": "Primera clase",
  "elem": "Neutro",
  "vias": [
   {
    "v": "cofre",
    "t": "Bosque de los Enanitos («Mine»).",
    "pj": [
     "ventus"
    ]
   },
   {
    "v": "mision",
    "t": "Completando «Engendro Marino» por primera vez en el Coso Virtual.",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   },
   {
    "v": "tienda",
    "t": "1.500 platines, una vez conseguido por otra vía.",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   },
   {
    "v": "tablero",
    "t": "Comprando la casilla de Minnie en el Tablero Animado.",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   },
   {
    "v": "tablero",
    "t": "Casilla bonus del Tablero Espacial.",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   }
  ],
  "recetas": [
   {
    "a": "Imán+",
    "b": "Exilio",
    "excl": null,
    "tipo": "14",
    "pct": "100"
   },
   {
    "a": "Imán++",
    "b": "Imán++",
    "excl": null,
    "tipo": "10",
    "pct": "100"
   },
   {
    "a": "Imán++",
    "b": "Enlace",
    "excl": null,
    "tipo": "9",
    "pct": "100"
   }
  ]
 },
 "Apagón": {
  "en": "Blackout",
  "ranuras": "1",
  "nv": "3",
  "clase": "Avanzado",
  "elem": "Neutro",
  "vias": [
   {
    "v": "cofre",
    "t": "Vergel Radiante (acueducto).",
    "pj": [
     "terra"
    ]
   },
   {
    "v": "cofre",
    "t": "Reino de la Oscuridad («Lower Zone»).",
    "pj": [
     "aqua"
    ]
   },
   {
    "v": "tienda",
    "t": "600 platines tras completar 5 mundos, o una vez conseguido por otra vía.",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   },
   {
    "v": "tablero",
    "t": "Casilla bonus del Tablero Real.",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   },
   {
    "v": "tablero",
    "t": "Casilla bonus del Tablero Animado.",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   },
   {
    "v": "tablero",
    "t": "Comprando la casilla de Capitán Oscuro en el Tablero Animado.",
    "pj": [
     "terra"
    ]
   },
   {
    "v": "tablero",
    "t": "Casilla bonus del Tablero Espacial.",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   },
   {
    "v": "tablero",
    "t": "Comprando la casilla de Gantu en el Tablero Espacial.",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   },
   {
    "v": "tablero",
    "t": "Comprando la casilla de Capitán Garfio en el Tablero Calavera.",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   }
  ],
  "recetas": [
   {
    "a": "Gravedad",
    "b": "Confu",
    "excl": null,
    "tipo": "13",
    "pct": "100"
   },
   {
    "a": "Gravedad+",
    "b": "Confu",
    "excl": null,
    "tipo": "14",
    "pct": "100"
   },
   {
    "a": "Gravedad+",
    "b": "Toxis",
    "excl": null,
    "tipo": "16",
    "pct": "100"
   }
  ]
 },
 "Ignición": {
  "en": "Ignite",
  "ranuras": "1",
  "nv": "4",
  "clase": "Avanzado",
  "elem": "Fuego",
  "vias": [
   {
    "v": "tienda",
    "t": "600 platines tras completar 4 mundos, o una vez conseguido por otra vía.",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   },
   {
    "v": "minijuego",
    "t": "Consiguiendo 20 puntos en el álbum de pegatinas.",
    "pj": [
     "aqua"
    ]
   },
   {
    "v": "tablero",
    "t": "Casilla bonus del Tablero Espacial.",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   },
   {
    "v": "tablero",
    "t": "Comprando la casilla de Gantu en el Tablero Espacial.",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   },
   {
    "v": "tablero",
    "t": "Comprando la casilla de Capitán Garfio en el Tablero Calavera.",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   }
  ],
  "recetas": [
   {
    "a": "Piro",
    "b": "Enlace",
    "excl": null,
    "tipo": "1",
    "pct": "100"
   },
   {
    "a": "Piro+",
    "b": "Enlace",
    "excl": null,
    "tipo": "3",
    "pct": "100"
   }
  ]
 },
 "Confu": {
  "en": "Confuse",
  "ranuras": "1",
  "nv": "3",
  "clase": "Básico",
  "elem": "Neutro",
  "vias": [
   {
    "v": "tienda",
    "t": "100 platines tras completar 1 mundo, o una vez conseguido por otra vía.",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   },
   {
    "v": "tablero",
    "t": "Casilla bonus del Tablero de la Llave Espada.",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   },
   {
    "v": "tablero",
    "t": "Comprando la casilla de Ventus en el Tablero de la Llave Espada.",
    "pj": [
     "terra",
     "aqua"
    ]
   },
   {
    "v": "tablero",
    "t": "Comprando la casilla de Peter Pan en el Tablero Calavera.",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   },
   {
    "v": "tablero",
    "t": "Comprando la casilla de Ventus en el Tablero Secreto.",
    "pj": [
     "terra",
     "aqua"
    ]
   }
  ],
  "recetas": []
 },
 "Enlace": {
  "en": "Bind",
  "ranuras": "1",
  "nv": "3",
  "clase": "Básico",
  "elem": "Neutro",
  "vias": [
   {
    "v": "cofre",
    "t": "Tierra de Partida («Mountain Path»).",
    "pj": [
     "aqua"
    ]
   },
   {
    "v": "tienda",
    "t": "150 platines tras completar 2 mundos, o una vez conseguido por otra vía.",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   },
   {
    "v": "tablero",
    "t": "Comprando la casilla de Aqua en el Tablero de la Llave Espada.",
    "pj": [
     "terra",
     "ventus"
    ]
   },
   {
    "v": "tablero",
    "t": "Comprando la casilla de Terra en el Tablero de la Llave Espada.",
    "pj": [
     "ventus",
     "aqua"
    ]
   },
   {
    "v": "tablero",
    "t": "Casilla bonus del Tablero Real.",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   },
   {
    "v": "tablero",
    "t": "Comprando la casilla de Cenicienta en el Tablero Real.",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   },
   {
    "v": "tablero",
    "t": "Casilla bonus del Tablero Animado.",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   },
   {
    "v": "tablero",
    "t": "Comprando la casilla de Minnie en el Tablero Animado.",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   },
   {
    "v": "tablero",
    "t": "Comprando la casilla de Peter Pan en el Tablero Calavera.",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   },
   {
    "v": "tablero",
    "t": "Comprando la casilla de Aqua en el Tablero Secreto.",
    "pj": [
     "terra",
     "ventus"
    ]
   }
  ],
  "recetas": []
 },
 "Toxis": {
  "en": "Poison",
  "ranuras": "1",
  "nv": "4",
  "clase": "Básico",
  "elem": "Neutro",
  "vias": [
   {
    "v": "cofre",
    "t": "Bosque de los Enanitos («Cottage Clearing»).",
    "pj": [
     "ventus"
    ]
   },
   {
    "v": "cofre",
    "t": "Bosque de los Enanitos («Cottage»).",
    "pj": [
     "aqua"
    ]
   },
   {
    "v": "tienda",
    "t": "100 platines tras completar 1 mundo, o una vez conseguido por otra vía.",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   },
   {
    "v": "tablero",
    "t": "Comprando la casilla de Terra en el Tablero de la Llave Espada.",
    "pj": [
     "ventus",
     "aqua"
    ]
   },
   {
    "v": "tablero",
    "t": "Comprando la casilla de Terra en el Tablero Secreto.",
    "pj": [
     "ventus",
     "aqua"
    ]
   }
  ],
  "recetas": []
 },
 "Freno": {
  "en": "Slow",
  "ranuras": "1",
  "nv": "3",
  "clase": "Básico",
  "elem": "Neutro",
  "vias": [
   {
    "v": "cofre",
    "t": "Castillo de los Sueños («Palace Courtyard»).",
    "pj": [
     "terra"
    ]
   },
   {
    "v": "cofre",
    "t": "Vergel Radiante («Gardens»).",
    "pj": [
     "ventus"
    ]
   },
   {
    "v": "cofre",
    "t": "Castillo de los Sueños («Palace Courtyard»).",
    "pj": [
     "aqua"
    ]
   },
   {
    "v": "tienda",
    "t": "150 platines tras completar 3 mundos, o una vez conseguido por otra vía.",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   },
   {
    "v": "tablero",
    "t": "Casilla bonus del Tablero de la Llave Espada.",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   },
   {
    "v": "tablero",
    "t": "Comprando la casilla de Ventus en el Tablero de la Llave Espada.",
    "pj": [
     "terra",
     "aqua"
    ]
   },
   {
    "v": "tablero",
    "t": "Comprando la casilla de Winnie the Pooh en el Tablero de Miel.",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   },
   {
    "v": "tablero",
    "t": "Comprando la casilla de Capitán Garfio en el Tablero Calavera.",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   },
   {
    "v": "tablero",
    "t": "Comprando la casilla de Ventus en el Tablero Secreto.",
    "pj": [
     "terra",
     "aqua"
    ]
   }
  ],
  "recetas": []
 },
 "Paro": {
  "en": "Stop",
  "ranuras": "1",
  "nv": "3",
  "clase": "Básico",
  "elem": "Neutro",
  "vias": [
   {
    "v": "cofre",
    "t": "Tierra de Partida («Mountain Path»).",
    "pj": [
     "terra"
    ]
   },
   {
    "v": "cofre",
    "t": "Ciudad Disney («Raceway»).",
    "pj": [
     "ventus"
    ]
   },
   {
    "v": "tienda",
    "t": "100 platines tras completar 3 mundos, o una vez conseguido por otra vía.",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   },
   {
    "v": "tablero",
    "t": "Casilla bonus del Tablero Real.",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   },
   {
    "v": "tablero",
    "t": "Comprando la casilla de Cenicienta en el Tablero Real.",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   }
  ],
  "recetas": []
 },
 "Paro+": {
  "en": "Stopra",
  "ranuras": "1",
  "nv": "3",
  "clase": "Básico",
  "elem": "Neutro",
  "vias": [
   {
    "v": "tienda",
    "t": "500 platines tras completar 5 mundos, o una vez conseguido por otra vía.",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   },
   {
    "v": "tablero",
    "t": "Comprando la casilla de Tigger en el Tablero de Miel.",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   },
   {
    "v": "tablero",
    "t": "Casilla bonus del Tablero Animado.",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   },
   {
    "v": "tablero",
    "t": "Comprando la casilla de Minnie en el Tablero Animado.",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   },
   {
    "v": "tablero",
    "t": "Comprando la casilla de Capitán Justicia en el Tablero Animado.",
    "pj": [
     "ventus",
     "aqua"
    ]
   },
   {
    "v": "tablero",
    "t": "Comprando la casilla de Capitán Oscuro en el Tablero Animado.",
    "pj": [
     "terra"
    ]
   }
  ],
  "recetas": [
   {
    "a": "Freno",
    "b": "Freno",
    "excl": null,
    "tipo": "12",
    "pct": "100"
   },
   {
    "a": "Freno",
    "b": "Paro",
    "excl": null,
    "tipo": "11",
    "pct": "100"
   },
   {
    "a": "Paro",
    "b": "Paro",
    "excl": null,
    "tipo": "9",
    "pct": "100"
   }
  ]
 },
 "Paro++": {
  "en": "Stopga",
  "ranuras": "1",
  "nv": "4",
  "clase": "Avanzado",
  "elem": "Neutro",
  "vias": [
   {
    "v": "tienda",
    "t": "1.200 platines tras completar 8 mundos, o una vez conseguido por otra vía.",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   }
  ],
  "recetas": [
   {
    "a": "Paro",
    "b": "Paro+",
    "excl": null,
    "tipo": "9",
    "pct": "100"
   },
   {
    "a": "Paro+",
    "b": "Paro+",
    "excl": null,
    "tipo": "10",
    "pct": "100"
   }
  ]
 },
 "Morfeo": {
  "en": "Sleep",
  "ranuras": "1",
  "nv": "3",
  "clase": "Básico",
  "elem": "Neutro",
  "vias": [
   {
    "v": "cofre",
    "t": "Reino Encantado («Tower Room»).",
    "pj": [
     "terra"
    ]
   },
   {
    "v": "cofre",
    "t": "Reino Encantado («Tower Room»).",
    "pj": [
     "ventus"
    ]
   },
   {
    "v": "cofre",
    "t": "Reino Encantado («Gates»).",
    "pj": [
     "aqua"
    ]
   },
   {
    "v": "tienda",
    "t": "100 platines tras completar 1 mundo, o una vez conseguido por otra vía.",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   },
   {
    "v": "tablero",
    "t": "Comprando la casilla de Terra en el Tablero de la Llave Espada.",
    "pj": [
     "ventus",
     "aqua"
    ]
   },
   {
    "v": "tablero",
    "t": "Comprando la casilla de Winnie the Pooh en el Tablero de Miel.",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   }
  ],
  "recetas": []
 },
 "Salto": {
  "en": "Jump",
  "vias": [],
  "recetas": []
 },
 "Salto de Altura": {
  "en": "High Jump",
  "vias": [
   {
    "v": "cofre",
    "t": "Espacio Profundo («Turo Prison Block»).",
    "pj": [
     "terra"
    ]
   },
   {
    "v": "historia",
    "t": "Tras derrotar a Vanitas por primera vez en la Necrópolis de Llaves Espada.",
    "pj": [
     "ventus"
    ]
   },
   {
    "v": "historia",
    "t": "Tras derrotar a los siervos de Maléfica con el príncipe Felipe en el Reino Encantado.",
    "pj": [
     "aqua"
    ]
   },
   {
    "v": "tienda",
    "t": "500 platines, una vez conseguido por otra vía.",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   },
   {
    "v": "tablero",
    "t": "Comprando la casilla de Tigger en el Tablero de Miel.",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   },
   {
    "v": "tablero",
    "t": "Casilla bonus del Tablero Espacial.",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   }
  ],
  "recetas": []
 },
 "Impulso Aéreo": {
  "en": "Air Slide",
  "vias": [
   {
    "v": "historia",
    "t": "Tras derrotar al enjambre de nescientes en «Flower Glade».",
    "pj": [
     "terra"
    ]
   },
   {
    "v": "historia",
    "t": "Tras derrotar a los Niscalinos con Hércules en «Town Near Thebes».",
    "pj": [
     "ventus"
    ]
   },
   {
    "v": "historia",
    "t": "Tras derrotar a los Maleadores en «Ship Exterior».",
    "pj": [
     "aqua"
    ]
   },
   {
    "v": "tienda",
    "t": "800 platines, una vez conseguido por otra vía.",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   }
  ],
  "recetas": []
 },
 "Impulso Gélido": {
  "en": "Ice Slide",
  "vias": [
   {
    "v": "tienda",
    "t": "2.000 platines, una vez conseguido por otra vía.",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   }
  ],
  "recetas": [
   {
    "a": "Hoja Gélida",
    "b": "Impulso Aéreo",
    "excl": null,
    "tipo": "6",
    "pct": "100"
   },
   {
    "a": "Hielo++",
    "b": "Impulso Aéreo",
    "excl": null,
    "tipo": "8",
    "pct": "100"
   }
  ]
 },
 "Impulso Sónico": {
  "en": "Sonic Impact",
  "vias": [
   {
    "v": "minijuego",
    "t": "Superando las diez primeras rondas de los juegos del Coliseo del Olimpo.",
    "pj": [
     "terra"
    ]
   }
  ],
  "recetas": []
 },
 "Impulso": {
  "en": "Slide",
  "vias": [
   {
    "v": "inicial",
    "t": "Lo tiene desde el principio.",
    "pj": [
     "terra"
    ]
   }
  ],
  "recetas": []
 },
 "Bloqueo": {
  "en": "Block",
  "vias": [
   {
    "v": "inicial",
    "t": "Lo tiene desde el principio.",
    "pj": [
     "terra",
     "ventus"
    ]
   },
   {
    "v": "tienda",
    "t": "200 platines tras completar 1 mundo, o una vez conseguido por otra vía.",
    "pj": [
     "terra",
     "ventus"
    ]
   }
  ],
  "recetas": []
 },
 "Bloqueo Cura": {
  "en": "Renewal Block",
  "vias": [],
  "recetas": [
   {
    "a": "Cura++",
    "b": "Bloqueo",
    "excl": "Ventus/Terra",
    "tipo": "16",
    "pct": "100"
   },
   {
    "a": "Esna",
    "b": "Bloqueo",
    "excl": "Ventus/Terra",
    "tipo": "3",
    "pct": "100"
   }
  ]
 },
 "Bloqueo Tino": {
  "en": "Focus Block",
  "vias": [
   {
    "v": "tablero",
    "t": "Casilla bonus del Tablero Real.",
    "pj": [
     "terra",
     "ventus"
    ]
   },
   {
    "v": "tablero",
    "t": "Comprando la casilla de Cenicienta en el Tablero Real.",
    "pj": [
     "terra",
     "ventus"
    ]
   }
  ],
  "recetas": []
 },
 "Bloqueo Shock": {
  "en": "Stun Block",
  "vias": [
   {
    "v": "minijuego",
    "t": "Reto nesciente de Espacio Profundo (Aquamaligna) con rango 3.",
    "pj": [
     "terra",
     "ventus"
    ]
   },
   {
    "v": "tienda",
    "t": "600 platines tras completar 6 mundos, o una vez conseguido por otra vía.",
    "pj": [
     "terra",
     "ventus"
    ]
   }
  ],
  "recetas": [
   {
    "a": "Hoja Aturdidora",
    "b": "Bloqueo",
    "excl": "Ventus/Terra",
    "tipo": "12",
    "pct": "100"
   },
   {
    "a": "Electro++",
    "b": "Bloqueo",
    "excl": "Ventus/Terra",
    "tipo": "9",
    "pct": "100"
   }
  ]
 },
 "Bloqueo Toxis": {
  "en": "Poison Block",
  "vias": [],
  "recetas": [
   {
    "a": "Hoja Tóxica",
    "b": "Bloqueo",
    "excl": "Ventus/Terra",
    "tipo": "8",
    "pct": "80"
   },
   {
    "a": "Toxis",
    "b": "Bloqueo",
    "excl": "Ventus/Terra",
    "tipo": "16",
    "pct": "80"
   }
  ]
 },
 "Maza Postrera": {
  "en": "Counter Hammer",
  "vias": [
   {
    "v": "historia",
    "t": "Tras escoltar a Cenicienta al baile en el Castillo de los Sueños.",
    "pj": [
     "terra"
    ]
   },
   {
    "v": "tienda",
    "t": "1.200 platines tras completar 5 mundos, o una vez conseguido por otra vía.",
    "pj": [
     "terra"
    ]
   }
  ],
  "recetas": []
 },
 "Carga Ulterior": {
  "en": "Payback Fang",
  "vias": [
   {
    "v": "cofre",
    "t": "Ciudad Disney («Raceway»).",
    "pj": [
     "terra"
    ]
   },
   {
    "v": "tienda",
    "t": "1.400 platines tras completar 7 mundos, o una vez conseguido por otra vía.",
    "pj": [
     "terra"
    ]
   }
  ],
  "recetas": [
   {
    "a": "Embestida",
    "b": "Maza Postrera",
    "excl": "Terra",
    "tipo": "16",
    "pct": "100"
   }
  ]
 },
 "Recobro Aéreo": {
  "en": "Aerial Recovery",
  "ranuras": "—",
  "nv": "—",
  "vias": [],
  "recetas": []
 },
 "Lluvia Meteórica": {
  "en": "Meteor Shower",
  "objetivos": "30",
  "nv": "4",
  "elem": "Neutro",
  "vias": [
   {
    "v": "tablero",
    "t": "Casilla bonus del Tablero Real.",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   }
  ],
  "recetas": [
   {
    "a": "Tiro Mortífero",
    "b": "Electro++",
    "excl": "Aqua",
    "tipo": null,
    "pct": "15"
   },
   {
    "a": "Tiro Gélido",
    "b": "Electro++",
    "excl": "Aqua",
    "tipo": null,
    "pct": "15"
   },
   {
    "a": "Piro++",
    "b": "Electro++",
    "excl": "Aqua",
    "tipo": null,
    "pct": "15"
   },
   {
    "a": "Cisco",
    "b": "Gravedad++",
    "excl": "Aqua",
    "tipo": null,
    "pct": "10"
   }
  ]
 },
 "Salva Ígnea": {
  "en": "Flame Salvo",
  "objetivos": "15",
  "nv": "4",
  "elem": "Fuego",
  "vias": [
   {
    "v": "cofre",
    "t": "Bosque de los Enanitos («Vault»).",
    "pj": [
     "terra"
    ]
   },
   {
    "v": "inicial",
    "t": "Lo tiene desde el principio.",
    "pj": [
     "ventus"
    ]
   },
   {
    "v": "tienda",
    "t": "Tienda de medallas del Coso Virtual.",
    "pj": [
     "aqua"
    ]
   }
  ],
  "recetas": []
 },
 "Súbito Caos": {
  "en": "Chaos Snake",
  "objetivos": "20",
  "nv": "4",
  "elem": "Neutro",
  "vias": [
   {
    "v": "minijuego",
    "t": "Ganando al Capitán Justicia o al Capitán Oscuro en la ronda final del Frutibol (Ciudad Disney).",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   }
  ],
  "recetas": []
 },
 "Volea Umbría": {
  "en": "Dark Volley",
  "objetivos": "18",
  "nv": "5",
  "elem": "Oscuridad",
  "vias": [
   {
    "v": "historia",
    "t": "Tras derrotar a Braig en el Vergel Radiante.",
    "pj": [
     "terra"
    ]
   }
  ],
  "recetas": []
 },
 "Ragnarok": {
  "en": "Ragnarok",
  "objetivos": "16",
  "nv": "4",
  "elem": "Neutro",
  "vias": [
   {
    "v": "tablero",
    "t": "Casilla bonus del Tablero de la Llave Espada.",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   },
   {
    "v": "tablero",
    "t": "Casilla bonus del Tablero Secreto.",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   }
  ],
  "recetas": []
 },
 "Tronada": {
  "en": "Thunderstorm",
  "objetivos": "5",
  "nv": "4",
  "elem": "Rayo",
  "vias": [
   {
    "v": "cofre",
    "t": "Castillo de los Sueños («The Chateau»).",
    "pj": [
     "terra"
    ]
   },
   {
    "v": "cofre",
    "t": "Castillo de los Sueños («Mousehole»).",
    "pj": [
     "ventus"
    ]
   },
   {
    "v": "cofre",
    "t": "Castillo de los Sueños («Foyer»).",
    "pj": [
     "aqua"
    ]
   }
  ],
  "recetas": []
 },
 "Biodescarga": {
  "en": "Bio Barrage",
  "objetivos": "8",
  "nv": "4",
  "elem": "Neutro",
  "vias": [
   {
    "v": "tienda",
    "t": "Tienda de medallas del Coso Virtual: 2.500 medallas, desde el nivel 15 del Coso.",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   },
   {
    "v": "tienda",
    "t": "Tienda de medallas del Coso Virtual.",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   }
  ],
  "recetas": [
   {
    "a": "Hoja Tóxica",
    "b": "Bloqueo",
    "excl": null,
    "tipo": null,
    "pct": "20"
   },
   {
    "a": "Toxis",
    "b": "Bloqueo",
    "excl": null,
    "tipo": null,
    "pct": "20"
   },
   {
    "a": "Cisco Volátil",
    "b": "Toxis",
    "excl": null,
    "tipo": null,
    "pct": "20"
   },
   {
    "a": "Embestida",
    "b": "Toxis",
    "excl": null,
    "tipo": null,
    "pct": "5"
   },
   {
    "a": "Tiro Mortífero",
    "b": "Toxis",
    "excl": null,
    "tipo": null,
    "pct": "5"
   }
  ]
 },
 "Carga Fotónica": {
  "en": "Photon Charge",
  "objetivos": "15",
  "nv": "4",
  "elem": "Neutro",
  "vias": [
   {
    "v": "tienda",
    "t": "Tienda de medallas del Coso Virtual.",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   },
   {
    "v": "tablero",
    "t": "Casilla bonus del Tablero Calavera.",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   }
  ],
  "recetas": []
 },
 "Cero Absoluto": {
  "en": "Absolute Zero",
  "objetivos": "12",
  "nv": "4",
  "elem": "Hielo",
  "vias": [
   {
    "v": "cofre",
    "t": "Ciudad Disney («Gizmo Gallery»).",
    "pj": [
     "terra"
    ]
   },
   {
    "v": "cofre",
    "t": "Reino Encantado («Gates»).",
    "pj": [
     "ventus",
     "aqua"
    ]
   }
  ],
  "recetas": []
 },
 "Rayo Célere": {
  "en": "Lightning Ray",
  "objetivos": "18",
  "nv": "4",
  "elem": "Neutro",
  "vias": [
   {
    "v": "tablero",
    "t": "Casilla bonus del Tablero Espacial.",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   },
   {
    "v": "tablero",
    "t": "Casilla bonus del Tablero Secreto.",
    "pj": [
     "terra",
     "ventus",
     "aqua"
    ]
   }
  ],
  "recetas": [
   {
    "a": "Cisco",
    "b": "Nigrobruma",
    "excl": null,
    "tipo": null,
    "pct": "10"
   },
   {
    "a": "Cisco",
    "b": "Impulso Aéreo",
    "excl": null,
    "tipo": null,
    "pct": "10"
   },
   {
    "a": "Piroembestida",
    "b": "Carga Eléctrica",
    "excl": null,
    "tipo": null,
    "pct": "10"
   },
   {
    "a": "Furia Ligadora",
    "b": "Electro+",
    "excl": null,
    "tipo": null,
    "pct": "10"
   },
   {
    "a": "Electro",
    "b": "Electro+",
    "excl": null,
    "tipo": null,
    "pct": "10"
   },
   {
    "a": "Electro+",
    "b": "Electro+",
    "excl": null,
    "tipo": null,
    "pct": "10"
   },
   {
    "a": "Aero++",
    "b": "Carga Robusta",
    "excl": null,
    "tipo": null,
    "pct": "10"
   }
  ]
 },
 "Sombra Sónica": {
  "en": "Sonic Shadow",
  "objetivos": "10",
  "nv": "5",
  "elem": "Neutro",
  "vias": [
   {
    "v": "inicial",
    "t": "Lo tiene desde el principio.",
    "pj": [
     "terra"
    ]
   }
  ],
  "recetas": []
 },
 "Cañón Artema": {
  "en": "Ultima Cannon",
  "objetivos": "16",
  "nv": "6",
  "elem": "Neutro",
  "vias": [
   {
    "v": "mision",
    "t": "Completando «Custodios del Coso» en el Coso Virtual.",
    "pj": [
     "terra"
    ]
   }
  ],
  "recetas": []
 },
 "Tiro Premiado": {
  "en": "Treasure Raid",
  "ranuras": "1",
  "nv": "4",
  "clase": "Avanzado",
  "elem": "Físico",
  "vias": [
   {
    "v": "cofre",
    "t": "País de Nunca Jamás («Cliff Path»).",
    "pj": [
     "ventus"
    ]
   }
  ],
  "recetas": [
   {
    "a": "Tiro Mortífero",
    "b": "Hoja Afortunada",
    "excl": "Terra/Ventus",
    "tipo": "15",
    "pct": "100"
   },
   {
    "a": "Hoja Afortunada",
    "b": "Imán",
    "excl": "Terra/Ventus",
    "tipo": "4",
    "pct": "100"
   },
   {
    "a": "Hoja Afortunada",
    "b": "Imán+",
    "excl": "Terra/Ventus",
    "tipo": "11",
    "pct": "100"
   }
  ]
 },
 "Tiro Centella": {
  "en": "Spark Raid",
  "ranuras": "1",
  "nv": "5",
  "clase": "Primera clase",
  "elem": "Físico",
  "vias": [
   {
    "v": "tienda",
    "t": "1.300 platines, una vez conseguido por otra vía.",
    "pj": [
     "ventus"
    ]
   }
  ],
  "recetas": [
   {
    "a": "Tiro Gélido",
    "b": "Imán++",
    "excl": "Ventus",
    "tipo": "10",
    "pct": "100"
   },
   {
    "a": "Tiro Premiado",
    "b": "Imán++",
    "excl": "Ventus",
    "tipo": "14",
    "pct": "100"
   },
   {
    "a": "Carga Eléctrica",
    "b": "Voltereta",
    "excl": "Ventus",
    "tipo": "16",
    "pct": "20"
   },
   {
    "a": "Electro++",
    "b": "Voltereta",
    "excl": "Ventus",
    "tipo": "12",
    "pct": "20"
   },
   {
    "a": "Voltereta",
    "b": "Bloqueo aturdidor",
    "excl": "Ventus",
    "tipo": "12",
    "pct": "20"
   }
  ]
 },
 "Tiro Eólico": {
  "en": "Wind Raid",
  "ranuras": "1",
  "nv": "5",
  "clase": "Primera clase",
  "elem": "Físico",
  "vias": [
   {
    "v": "cofre",
    "t": "Necrópolis de Llaves Espada («Twister Trench»).",
    "pj": [
     "ventus"
    ]
   },
   {
    "v": "tienda",
    "t": "1.500 platines, una vez conseguido por otra vía.",
    "pj": [
     "ventus"
    ]
   }
  ],
  "recetas": [
   {
    "a": "Tiro Gélido",
    "b": "Aero++",
    "excl": "Ventus",
    "tipo": "2",
    "pct": "100"
   },
   {
    "a": "Tiro Premiado",
    "b": "Aero++",
    "excl": "Ventus",
    "tipo": "6",
    "pct": "100"
   }
  ]
 },
 "Último Arcano": {
  "en": "Ars Arcanum",
  "ranuras": "2",
  "nv": "6",
  "clase": "Primera clase",
  "elem": "Físico",
  "vias": [],
  "recetas": [
   {
    "a": "Cisco",
    "b": "Batacazo",
    "excl": "Ventus",
    "tipo": "6",
    "pct": "100"
   },
   {
    "a": "Cisco Volátil",
    "b": "Hoja Afortunada",
    "excl": "Ventus",
    "tipo": "15",
    "pct": "10"
   },
   {
    "a": "Furia Pírica",
    "b": "Aero+",
    "excl": "Ventus",
    "tipo": "3",
    "pct": "10"
   },
   {
    "a": "Cisco Volátil",
    "b": "Hielo",
    "excl": "Ventus",
    "tipo": "7",
    "pct": "5"
   },
   {
    "a": "Cisco Volátil",
    "b": "Hielo+",
    "excl": "Ventus",
    "tipo": "8",
    "pct": "5"
   },
   {
    "a": "Embestida",
    "b": "Hielo",
    "excl": "Ventus",
    "tipo": "5",
    "pct": "5"
   },
   {
    "a": "Embestida",
    "b": "Hielo+",
    "excl": "Ventus",
    "tipo": "7",
    "pct": "5"
   },
   {
    "a": "Hoja Tóxica",
    "b": "Cura",
    "excl": "Ventus",
    "tipo": "16",
    "pct": "5"
   },
   {
    "a": "Hoja Gélida",
    "b": "Cura",
    "excl": "Ventus",
    "tipo": "7",
    "pct": "5"
   }
  ]
 },
 "Hilatiempo": {
  "en": "Time Splicer",
  "ranuras": "2",
  "nv": "6",
  "clase": "Primera clase",
  "elem": "Físico",
  "vias": [
   {
    "v": "cofre",
    "t": "País de Nunca Jamás («Rainbow Falls: Ascent»).",
    "pj": [
     "aqua"
    ]
   }
  ],
  "recetas": [
   {
    "a": "Batacazo",
    "b": "Paro++",
    "excl": "Aqua/Ventus",
    "tipo": "6",
    "pct": "100"
   },
   {
    "a": "Paro++",
    "b": "Coraza",
    "excl": "Aqua/Ventus",
    "tipo": "3",
    "pct": "20"
   },
   {
    "a": "Carga Robusta",
    "b": "Hoja del Deseo",
    "excl": "Aqua/Ventus",
    "tipo": "16",
    "pct": "10"
   },
   {
    "a": "Hoja Aturdidora",
    "b": "Hoja Afortunada",
    "excl": "Aqua/Ventus",
    "tipo": "11",
    "pct": "10"
   }
  ]
 },
 "Furia Ciclón": {
  "en": "Tornado Strike",
  "ranuras": "2",
  "nv": "4",
  "clase": "Primera clase",
  "elem": "Físico",
  "vias": [
   {
    "v": "cofre",
    "t": "Reino Encantado («Dungeon»).",
    "pj": [
     "ventus"
    ]
   }
  ],
  "recetas": [
   {
    "a": "Furia Confusión",
    "b": "Aero++",
    "excl": "Ventus",
    "tipo": "7",
    "pct": "100"
   },
   {
    "a": "Furia Ligadora",
    "b": "Aero++",
    "excl": "Ventus",
    "tipo": "6",
    "pct": "100"
   }
  ]
 },
 "Salvación": {
  "en": "Salvation",
  "ranuras": "2",
  "nv": "6",
  "clase": "Primera clase",
  "elem": "Físico",
  "vias": [
   {
    "v": "minijuego",
    "t": "Consiguiendo 100 puntos en el álbum de pegatinas.",
    "pj": [
     "ventus"
    ]
   },
   {
    "v": "minijuego",
    "t": "Consiguiendo 110 puntos en el álbum de pegatinas.",
    "pj": [
     "ventus"
    ]
   }
  ],
  "recetas": [
   {
    "a": "Tiro Eólico",
    "b": "Cura++",
    "excl": "Ventus",
    "tipo": "14",
    "pct": "100"
   }
  ]
 },
 "Sanctus": {
  "en": "Faith",
  "ranuras": "2",
  "nv": "6",
  "clase": "Primera clase",
  "elem": "Neutro",
  "vias": [],
  "recetas": [
   {
    "a": "Tiro Eólico",
    "b": "Cuartelillo",
    "excl": "Ventus",
    "tipo": "14",
    "pct": "100"
   }
  ]
 },
 "Tornado": {
  "en": "Tornado",
  "ranuras": "2",
  "nv": "6",
  "clase": "Primera clase",
  "elem": "Neutro",
  "vias": [],
  "recetas": [
   {
    "a": "Imán++",
    "b": "Aero++",
    "excl": "Ventus",
    "tipo": "14",
    "pct": "100"
   },
   {
    "a": "Cisco Volátil",
    "b": "Aero+",
    "excl": "Ventus",
    "tipo": "15",
    "pct": "10"
   },
   {
    "a": "Aero",
    "b": "Aero+",
    "excl": "Ventus",
    "tipo": "13",
    "pct": "10"
   },
   {
    "a": "Aero+",
    "b": "Aero+",
    "excl": "Ventus",
    "tipo": "14",
    "pct": "10"
   },
   {
    "a": "Cisco Volátil",
    "b": "Aero",
    "excl": "Ventus",
    "tipo": "7",
    "pct": "5"
   },
   {
    "a": "Electro",
    "b": "Aero",
    "excl": "Ventus",
    "tipo": "9",
    "pct": "5"
   },
   {
    "a": "Aero",
    "b": "Aero",
    "excl": "Ventus",
    "tipo": "5",
    "pct": "5"
   }
  ]
 },
 "Voltereta": {
  "en": "Dodge Roll",
  "vias": [
   {
    "v": "inicial",
    "t": "Lo tiene desde el principio.",
    "pj": [
     "ventus"
    ]
   },
   {
    "v": "tienda",
    "t": "200 platines.",
    "pj": [
     "ventus"
    ]
   }
  ],
  "recetas": []
 },
 "Rueda Eléctrica": {
  "en": "Thunder Roll",
  "vias": [
   {
    "v": "tablero",
    "t": "Casilla bonus del Tablero de Miel.",
    "pj": [
     "ventus"
    ]
   }
  ],
  "recetas": [
   {
    "a": "Carga Eléctrica",
    "b": "Voltereta",
    "excl": "Ventus",
    "tipo": "16",
    "pct": "80"
   },
   {
    "a": "Electro++",
    "b": "Voltereta",
    "excl": "Ventus",
    "tipo": "12",
    "pct": "80"
   },
   {
    "a": "Bloqueo Shock",
    "b": "Voltereta",
    "excl": "Ventus",
    "tipo": "12",
    "pct": "80"
   }
  ]
 },
 "Finta": {
  "en": "Reversal",
  "vias": [
   {
    "v": "historia",
    "t": "Tras rescatar a Ienzo de una horda de nescientes en el Vergel Radiante.",
    "pj": [
     "ventus"
    ]
   },
   {
    "v": "tienda",
    "t": "600 platines, una vez conseguido por otra vía.",
    "pj": [
     "ventus"
    ]
   }
  ],
  "recetas": []
 },
 "Planeador": {
  "en": "Glide",
  "vias": [
   {
    "v": "historia",
    "t": "Tras conocer a Peter Pan y Campanilla en «Mermaid Lagoon».",
    "pj": [
     "ventus"
    ]
   },
   {
    "v": "tienda",
    "t": "2.000 platines, una vez conseguido por otra vía.",
    "pj": [
     "ventus"
    ]
   }
  ],
  "recetas": []
 },
 "Superplaneador": {
  "en": "Superglide",
  "vias": [
   {
    "v": "cofre",
    "t": "Ciudad Disney («Raceway»).",
    "pj": [
     "ventus"
    ]
   }
  ],
  "recetas": []
 },
 "Piroplaneador": {
  "en": "Fire Glide",
  "vias": [],
  "recetas": [
   {
    "a": "Carga Pírica",
    "b": "Planeador",
    "excl": "Ventus",
    "tipo": "3",
    "pct": "100"
   },
   {
    "a": "Piro++",
    "b": "Planeador",
    "excl": "Ventus",
    "tipo": "2",
    "pct": "100"
   }
  ]
 },
 "Buscador": {
  "en": "Homing Slide",
  "vias": [],
  "recetas": [
   {
    "a": "Embestida",
    "b": "Imán+",
    "excl": "Ventus/Aqua",
    "tipo": "16",
    "pct": "100"
   },
   {
    "a": "Embestida",
    "b": "Impulso Aéreo",
    "excl": "Ventus/Aqua",
    "tipo": "3",
    "pct": "100"
   },
   {
    "a": "Imán",
    "b": "Impulso Aéreo",
    "excl": "Ventus/Aqua",
    "tipo": "12",
    "pct": "100"
   }
  ]
 },
 "Carga Postrera": {
  "en": "Counter Rush",
  "vias": [
   {
    "v": "cofre",
    "t": "Vergel Radiante («Fountain Court»).",
    "pj": [
     "ventus"
    ]
   },
   {
    "v": "tienda",
    "t": "1.200 platines tras completar 6 mundos, o una vez conseguido por otra vía.",
    "pj": [
     "ventus"
    ]
   }
  ],
  "recetas": []
 },
 "Tajo Zaguero": {
  "en": "Reversal Slash",
  "vias": [
   {
    "v": "cofre",
    "t": "Ciudad Disney («Raceway»).",
    "pj": [
     "ventus"
    ]
   },
   {
    "v": "tienda",
    "t": "800 platines tras completar 7 mundos, o una vez conseguido por otra vía.",
    "pj": [
     "ventus"
    ]
   }
  ],
  "recetas": []
 },
 "Lance Ulterior": {
  "en": "Payback Raid",
  "vias": [
   {
    "v": "cofre",
    "t": "Bosque de los Enanitos («Mine»).",
    "pj": [
     "ventus"
    ]
   },
   {
    "v": "tienda",
    "t": "1.400 platines tras completar 3 mundos, o una vez conseguido por otra vía.",
    "pj": [
     "ventus"
    ]
   }
  ],
  "recetas": [
   {
    "a": "Embestida",
    "b": "Tiro Mortífero",
    "excl": "Ventus",
    "tipo": "16",
    "pct": "100"
   }
  ]
 },
 "Bomba de Pulso": {
  "en": "Pulse Bomb",
  "objetivos": "20",
  "nv": "5",
  "elem": "Neutro",
  "vias": [
   {
    "v": "cofre",
    "t": "Espacio Profundo («Ship Hub»).",
    "pj": [
     "ventus"
    ]
   }
  ],
  "recetas": []
 },
 "Multivórtice": {
  "en": "Multivortex",
  "objetivos": "30",
  "nv": "6",
  "elem": "Neutro",
  "vias": [
   {
    "v": "mision",
    "t": "Completando «Custodios del Coso» en el Coso Virtual.",
    "pj": [
     "ventus"
    ]
   }
  ],
  "recetas": []
 },
 "Arte Cósmica": {
  "en": "Magic Hour",
  "ranuras": "2",
  "nv": "5",
  "clase": "Primera clase",
  "elem": "Físico",
  "vias": [],
  "recetas": [
   {
    "a": "Cisco",
    "b": "Gravedad++",
    "excl": "Aqua",
    "tipo": "15",
    "pct": "90"
   },
   {
    "a": "Carga Robusta",
    "b": "Aero++",
    "excl": "Aqua",
    "tipo": "14",
    "pct": "90"
   }
  ]
 },
 "Carga Robusta": {
  "en": "Barrier Surge",
  "ranuras": "1",
  "nv": "3",
  "clase": "Avanzado",
  "elem": "Físico",
  "vias": [
   {
    "v": "cofre",
    "t": "Castillo de los Sueños («Foyer»).",
    "pj": [
     "aqua"
    ]
   },
   {
    "v": "tienda",
    "t": "500 platines tras completar 5 mundos, o una vez conseguido por otra vía.",
    "pj": [
     "aqua"
    ]
   },
   {
    "v": "tablero",
    "t": "Comprando la casilla de Cenicienta en el Tablero Real.",
    "pj": [
     "aqua"
    ]
   }
  ],
  "recetas": [
   {
    "a": "Piroembestida",
    "b": "Coraza",
    "excl": "Aqua",
    "tipo": "4",
    "pct": "100"
   },
   {
    "a": "Hoja Aturdidora",
    "b": "Coraza",
    "excl": "Aqua",
    "tipo": "11",
    "pct": "100"
   }
  ]
 },
 "Hoja del Deseo": {
  "en": "Wishing Edge",
  "ranuras": "1",
  "nv": "3",
  "clase": "Básico",
  "elem": "Físico",
  "vias": [
   {
    "v": "tienda",
    "t": "500 platines, una vez conseguido por otra vía.",
    "pj": [
     "aqua"
    ]
   },
   {
    "v": "tablero",
    "t": "Casilla bonus del Tablero Real.",
    "pj": [
     "aqua"
    ]
   },
   {
    "v": "tablero",
    "t": "Comprando la casilla de Cenicienta en el Tablero Real.",
    "pj": [
     "aqua"
    ]
   }
  ],
  "recetas": [
   {
    "a": "Tiro Mortífero",
    "b": "Carga Robusta",
    "excl": "Aqua",
    "tipo": "16",
    "pct": "100"
   },
   {
    "a": "Carga Robusta",
    "b": "Hoja Aturdidora",
    "excl": "Aqua",
    "tipo": "11",
    "pct": "100"
   },
   {
    "a": "Hoja Aturdidora",
    "b": "Furia Ligadora",
    "excl": "Aqua",
    "tipo": "10",
    "pct": "100"
   }
  ]
 },
 "Triple Piro++": {
  "en": "Triple Firaga",
  "ranuras": "1",
  "nv": "4",
  "clase": "Avanzado",
  "elem": "Fuego",
  "vias": [
   {
    "v": "tienda",
    "t": "1.800 platines, una vez conseguido por otra vía.",
    "pj": [
     "aqua"
    ]
   },
   {
    "v": "cofre",
    "t": "Reino de la Oscuridad («Upper Zone»).",
    "pj": [
     "aqua"
    ]
   }
  ],
  "recetas": [
   {
    "a": "Piro+",
    "b": "Piro++",
    "excl": "Aqua",
    "tipo": "1",
    "pct": "95"
   },
   {
    "a": "Cisco",
    "b": "Piro++",
    "excl": "Aqua",
    "tipo": "4",
    "pct": "90"
   },
   {
    "a": "Piro++",
    "b": "Piro++",
    "excl": "Aqua",
    "tipo": "2",
    "pct": "90"
   }
  ]
 },
 "Triple Hielo++": {
  "en": "Triple Blizzaga",
  "ranuras": "1",
  "nv": "4",
  "clase": "Avanzado",
  "elem": "Hielo",
  "vias": [
   {
    "v": "tienda",
    "t": "1.800 platines, una vez conseguido por otra vía.",
    "pj": [
     "aqua"
    ]
   }
  ],
  "recetas": [
   {
    "a": "Cisco",
    "b": "Hielo++",
    "excl": "Aqua",
    "tipo": "7",
    "pct": "100"
   },
   {
    "a": "Hielo+",
    "b": "Hielo++",
    "excl": "Aqua",
    "tipo": "5",
    "pct": "100"
   },
   {
    "a": "Hielo++",
    "b": "Hielo++",
    "excl": "Aqua",
    "tipo": "6",
    "pct": "100"
   }
  ]
 },
 "Tiro Electro++": {
  "en": "Thundaga Shot",
  "ranuras": "1",
  "nv": "4",
  "clase": "Avanzado",
  "elem": "Rayo",
  "vias": [
   {
    "v": "tienda",
    "t": "1.500 platines, una vez conseguido por otra vía.",
    "pj": [
     "aqua"
    ]
   }
  ],
  "recetas": [
   {
    "a": "Tiro Mortífero",
    "b": "Electro++",
    "excl": "Aqua",
    "tipo": "11",
    "pct": "100"
   },
   {
    "a": "Tiro Gélido",
    "b": "Electro++",
    "excl": "Aqua",
    "tipo": "9",
    "pct": "100"
   },
   {
    "a": "Piro++",
    "b": "Electro++",
    "excl": "Aqua",
    "tipo": "10",
    "pct": "100"
   }
  ]
 },
 "Mina Astuta": {
  "en": "Seeker Mine",
  "ranuras": "1",
  "nv": "4",
  "clase": "Primera clase",
  "elem": "Neutro",
  "vias": [
   {
    "v": "tienda",
    "t": "2.300 platines, una vez conseguido por otra vía.",
    "pj": [
     "aqua"
    ]
   }
  ],
  "recetas": [
   {
    "a": "Escudo de Minas",
    "b": "Cuadro de Minas",
    "excl": "Aqua",
    "tipo": "2",
    "pct": "100"
   },
   {
    "a": "Escudo de Minas",
    "b": "Imán++",
    "excl": "Aqua",
    "tipo": "3",
    "pct": "100"
   },
   {
    "a": "Cuadro de Minas",
    "b": "Imán++",
    "excl": "Aqua",
    "tipo": "4",
    "pct": "100"
   }
  ]
 },
 "Atraerriquezas": {
  "en": "Munny Magnet",
  "ranuras": "1",
  "nv": "4",
  "clase": "Avanzado",
  "elem": "Neutro",
  "vias": [
   {
    "v": "tienda",
    "t": "800 platines, una vez conseguido por otra vía.",
    "pj": [
     "aqua"
    ]
   },
   {
    "v": "tablero",
    "t": "Casilla bonus del Tablero Calavera.",
    "pj": [
     "aqua"
    ]
   }
  ],
  "recetas": [
   {
    "a": "Hoja del Deseo",
    "b": "Imán+",
    "excl": "Aqua",
    "tipo": "11",
    "pct": "100"
   },
   {
    "a": "Electro+",
    "b": "Imán+",
    "excl": "Aqua",
    "tipo": "9",
    "pct": "100"
   }
  ]
 },
 "Atrae VT": {
  "en": "Energy Magnet",
  "ranuras": "1",
  "nv": "4",
  "clase": "Avanzado",
  "elem": "Neutro",
  "vias": [
   {
    "v": "tienda",
    "t": "800 platines, una vez conseguido por otra vía.",
    "pj": [
     "aqua"
    ]
   }
  ],
  "recetas": [
   {
    "a": "Cura",
    "b": "Imán+",
    "excl": "Aqua",
    "tipo": "13",
    "pct": "100"
   },
   {
    "a": "Cura+",
    "b": "Imán+",
    "excl": "Aqua",
    "tipo": "14",
    "pct": "100"
   }
  ]
 },
 "Atrae Nexo-D": {
  "en": "D-Link Magnet",
  "ranuras": "1",
  "nv": "4",
  "clase": "Avanzado",
  "elem": "Neutro",
  "vias": [],
  "recetas": [
   {
    "a": "Gravedad+",
    "b": "Imán+",
    "excl": "Aqua",
    "tipo": "12",
    "pct": "100"
   },
   {
    "a": "Imán+",
    "b": "Paro+",
    "excl": "Aqua",
    "tipo": "9",
    "pct": "100"
   }
  ]
 },
 "Glaciar": {
  "en": "Glacier",
  "vias": [],
  "recetas": [
   {
    "a": "Hielo++",
    "b": "Hipotermia",
    "excl": "Aqua",
    "tipo": "5",
    "pct": "100"
   },
   {
    "a": "Triple Hielo++",
    "b": "Hipotermia",
    "excl": "Aqua",
    "tipo": "6",
    "pct": "100"
   }
  ]
 },
 "Asalto Gélido": {
  "en": "Ice Barrage",
  "ranuras": "2",
  "nv": "5",
  "clase": "Primera clase",
  "elem": "Hielo",
  "vias": [
   {
    "v": "cofre",
    "t": "Reino Encantado («Dungeon»).",
    "pj": [
     "aqua"
    ]
   },
   {
    "v": "tienda",
    "t": "1.800 platines, una vez conseguido por otra vía.",
    "pj": [
     "aqua"
    ]
   }
  ],
  "recetas": [
   {
    "a": "Hielo++",
    "b": "Escudo de Minas",
    "excl": "Aqua",
    "tipo": "6",
    "pct": "100"
   },
   {
    "a": "Hielo++",
    "b": "Cuadro de Minas",
    "excl": "Aqua",
    "tipo": "8",
    "pct": "100"
   }
  ]
 },
 "Descarga Ígnea": {
  "en": "Firaga Burst",
  "ranuras": "2",
  "nv": "5",
  "clase": "Primera clase",
  "elem": "Fuego",
  "vias": [
   {
    "v": "cofre",
    "t": "País de Nunca Jamás («Mermaid Lagoon»).",
    "pj": [
     "aqua"
    ]
   },
   {
    "v": "tienda",
    "t": "2.500 platines, una vez conseguido por otra vía.",
    "pj": [
     "aqua"
    ]
   }
  ],
  "recetas": [
   {
    "a": "Piro+",
    "b": "Aero++",
    "excl": "Aqua",
    "tipo": "1",
    "pct": "20"
   },
   {
    "a": "Piro++",
    "b": "Aero+",
    "excl": "Aqua",
    "tipo": "1",
    "pct": "20"
   },
   {
    "a": "Piro++",
    "b": "Aero++",
    "excl": "Aqua",
    "tipo": "2",
    "pct": "20"
   },
   {
    "a": "Piro++",
    "b": "Freno",
    "excl": "Aqua",
    "tipo": "1",
    "pct": "20"
   },
   {
    "a": "Piro++",
    "b": "Paro+",
    "excl": "Aqua",
    "tipo": "4",
    "pct": "20"
   },
   {
    "a": "Piro++",
    "b": "Paro++",
    "excl": "Aqua",
    "tipo": "2",
    "pct": "20"
   }
  ]
 },
 "Pira": {
  "en": "Raging Storm",
  "ranuras": "2",
  "nv": "6",
  "clase": "Primera clase",
  "elem": "Fuego",
  "vias": [],
  "recetas": [
   {
    "a": "Lluvia Piro++",
    "b": "Descarga Ígnea",
    "excl": "Aqua",
    "tipo": "2",
    "pct": "100"
   },
   {
    "a": "Cisco",
    "b": "Piro++",
    "excl": "Aqua",
    "tipo": "4",
    "pct": "10"
   },
   {
    "a": "Piroembestida",
    "b": "Piro+",
    "excl": "Aqua",
    "tipo": "4",
    "pct": "10"
   },
   {
    "a": "Carga Pírica",
    "b": "Rueda Veloz",
    "excl": "Aqua",
    "tipo": "3",
    "pct": "10"
   },
   {
    "a": "Piro",
    "b": "Piro+",
    "excl": "Aqua",
    "tipo": "1",
    "pct": "10"
   },
   {
    "a": "Piro+",
    "b": "Piro+",
    "excl": "Aqua",
    "tipo": "2",
    "pct": "10"
   },
   {
    "a": "Piro+",
    "b": "Piro++",
    "excl": "Aqua",
    "tipo": "1",
    "pct": "10"
   },
   {
    "a": "Piro++",
    "b": "Piro++",
    "excl": "Aqua",
    "tipo": "2",
    "pct": "10"
   }
  ]
 },
 "Rueda Veloz": {
  "en": "Cartwheel",
  "vias": [
   {
    "v": "inicial",
    "t": "Lo tiene desde el principio.",
    "pj": [
     "aqua"
    ]
   },
   {
    "v": "tienda",
    "t": "200 platines.",
    "pj": [
     "aqua"
    ]
   }
  ],
  "recetas": []
 },
 "Rueda Ígnea": {
  "en": "Firewheel",
  "vias": [
   {
    "v": "tienda",
    "t": "2.000 platines, una vez conseguido por otra vía.",
    "pj": [
     "aqua"
    ]
   }
  ],
  "recetas": [
   {
    "a": "Piro++",
    "b": "Rueda",
    "excl": "Aqua",
    "tipo": "2",
    "pct": "100"
   },
   {
    "a": "Lluvia Piro++",
    "b": "Rueda",
    "excl": "Aqua",
    "tipo": "2",
    "pct": "100"
   },
   {
    "a": "Carga Pírica",
    "b": "Rueda",
    "excl": "Aqua",
    "tipo": "3",
    "pct": "90"
   }
  ]
 },
 "Teleportador": {
  "en": "Teleport",
  "vias": [
   {
    "v": "cofre",
    "t": "Espacio Profundo («Turo Prison Block»).",
    "pj": [
     "aqua"
    ]
   }
  ],
  "recetas": []
 },
 "Vuelo Doble": {
  "en": "Doubleflight",
  "ranuras": "1",
  "nv": "—",
  "vias": [
   {
    "v": "historia",
    "t": "Tras encontrarse con el Capitán Garfio en «Gully».",
    "pj": [
     "aqua"
    ]
   }
  ],
  "recetas": []
 },
 "Coraza": {
  "en": "Barrier",
  "vias": [
   {
    "v": "inicial",
    "t": "Lo tiene desde el principio.",
    "pj": [
     "aqua"
    ]
   },
   {
    "v": "tienda",
    "t": "200 platines tras completar 1 mundo, o una vez conseguido por otra vía.",
    "pj": [
     "aqua"
    ]
   }
  ],
  "recetas": []
 },
 "Coraza Cura": {
  "en": "Renewal Barrier",
  "vias": [],
  "recetas": [
   {
    "a": "Cura++",
    "b": "Coraza",
    "excl": "Aqua",
    "tipo": "16",
    "pct": "100"
   },
   {
    "a": "Esna",
    "b": "Coraza",
    "excl": "Aqua",
    "tipo": "13",
    "pct": "100"
   }
  ]
 },
 "Coraza Tino": {
  "en": "Focus Barrier",
  "vias": [
   {
    "v": "tablero",
    "t": "Casilla bonus del Tablero Real.",
    "pj": [
     "aqua"
    ]
   },
   {
    "v": "tablero",
    "t": "Comprando la casilla de Cenicienta en el Tablero Real.",
    "pj": [
     "aqua"
    ]
   }
  ],
  "recetas": []
 },
 "Coraza Confu": {
  "en": "Confuse Barrier",
  "vias": [
   {
    "v": "minijuego",
    "t": "Reto nesciente de Espacio Profundo (Aquamaligna) con rango 3.",
    "pj": [
     "aqua"
    ]
   },
   {
    "v": "tienda",
    "t": "600 platines tras completar 6 mundos, o una vez conseguido por otra vía.",
    "pj": [
     "aqua"
    ]
   }
  ],
  "recetas": [
   {
    "a": "Furia Confusión",
    "b": "Coraza",
    "excl": "Aqua",
    "tipo": "3",
    "pct": "100"
   },
   {
    "a": "Confu",
    "b": "Coraza",
    "excl": "Aqua",
    "tipo": "12",
    "pct": "100"
   }
  ]
 },
 "Coraza Paro": {
  "en": "Stop Barrier",
  "ranuras": "3",
  "nv": "[[Counter Blast]]",
  "vias": [
   {
    "v": "minijuego",
    "t": "Consiguiendo 60 puntos en el álbum de pegatinas.",
    "pj": [
     "aqua"
    ]
   },
   {
    "v": "minijuego",
    "t": "Consiguiendo 70 puntos en el álbum de pegatinas.",
    "pj": [
     "aqua"
    ]
   }
  ],
  "recetas": [
   {
    "a": "Paro++",
    "b": "Coraza",
    "excl": "Aqua",
    "tipo": "3",
    "pct": "80"
   }
  ]
 },
 "Onda Postrera": {
  "en": "Counter Blast",
  "vias": [
   {
    "v": "cofre",
    "t": "Vergel Radiante («Fountain Court»).",
    "pj": [
     "aqua"
    ]
   },
   {
    "v": "tienda",
    "t": "1.200 platines tras completar 6 mundos, o una vez conseguido por otra vía.",
    "pj": [
     "aqua"
    ]
   }
  ],
  "recetas": []
 },
 "Pulso Ulterior": {
  "en": "Payback Surge",
  "vias": [
   {
    "v": "cofre",
    "t": "Bosque de los Enanitos («Cottage Clearing»).",
    "pj": [
     "aqua"
    ]
   },
   {
    "v": "tienda",
    "t": "1.400 platines tras completar 4 mundos, o una vez conseguido por otra vía.",
    "pj": [
     "aqua"
    ]
   }
  ],
  "recetas": [
   {
    "a": "Embestida",
    "b": "Carga Pírica",
    "excl": "Aqua",
    "tipo": "3",
    "pct": "100"
   },
   {
    "a": "Embestida",
    "b": "Carga Eléctrica",
    "excl": "Aqua",
    "tipo": "12",
    "pct": "100"
   }
  ]
 },
 "Tiro Burbuja": {
  "en": "Bubble Blaster",
  "objetivos": "15",
  "nv": "5",
  "elem": "Neutro",
  "vias": [
   {
    "v": "inicial",
    "t": "Lo tiene desde el principio.",
    "pj": [
     "aqua"
    ]
   }
  ],
  "recetas": []
 },
 "Chorro Irisado": {
  "en": "Prism Rain",
  "objetivos": "16",
  "nv": "5",
  "elem": "Neutro",
  "vias": [
   {
    "v": "cofre",
    "t": "Espacio Profundo («Ship Hub»).",
    "pj": [
     "aqua"
    ]
   }
  ],
  "recetas": []
 },
 "Fogonazo": {
  "en": "Lightbloom",
  "objetivos": "20",
  "nv": "6",
  "elem": "Neutro",
  "vias": [
   {
    "v": "mision",
    "t": "Completando «Custodios del Coso» en el Coso Virtual.",
    "pj": [
     "aqua"
    ]
   }
  ],
  "recetas": []
 }
};
