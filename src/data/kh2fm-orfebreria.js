// Generado por notas/herramientas/genera_kh2fm_orfebreria.py (no editar a mano). Consultado el 26/10/2026.
// Objetos: KHWiki (plantilla SynthKHII de cada objeto; cantidades de Final Mix). Materiales y enemigos: Fandom (inglés).
// libre: grupo de Libre desarrollo; receta/donde: receta que lo abre; mejora: objeto que sale en Creaciones con `con`.
export const GRUPOS_LIBRE_KH2FM = [{"id": "cinco", "titulo": "Libre desarrollo · 5 tipos de materiales", "texto": "Se abre al entregar 5 tipos de materiales distintos."}, {"id": "veinte", "titulo": "Libre desarrollo · 20 tipos de materiales", "texto": "Se abre al entregar 20 tipos de materiales distintos."}, {"id": "nivel8", "titulo": "Libre desarrollo · moguri nivel 8", "texto": "Se abre al llegar al nivel 8 de moguri (Moguri superior)."}];

export const SINTESIS_KH2FM = [
 {
  "id": "ap-boost",
  "nombre": "Impulso hábil",
  "en": "AP Boost",
  "img": "ap-boost",
  "rango": "S",
  "exp": 49,
  "mats": [
   {
    "m": "Piedra de mitrilo",
    "n": 1
   },
   {
    "m": "Cristal fuerte",
    "n": 3
   },
   {
    "m": "Cristal oscuro",
    "n": 3
   },
   {
    "m": "Cristal frío",
    "n": 3
   }
  ],
  "receta": "Receta hábil",
  "donde": "Cofre del Estudio de Ansem (Bastión Hueco).",
  "mejora": {
   "id": "magic-boost",
   "nombre": "Impulso mágico",
   "en": "Magic Boost",
   "img": "magic-boost",
   "con": "Cristal sereno"
  }
 },
 {
  "id": "acrisius",
  "nombre": "Acrisius",
  "en": "Acrisius",
  "img": "acrisius",
  "rango": "B",
  "exp": 24,
  "mats": [
   {
    "m": "Roca de mitrilo",
    "n": 5
   },
   {
    "m": "Roca ígnea",
    "n": 1
   },
   {
    "m": "Roca fría",
    "n": 1
   },
   {
    "m": "Roca luminosa",
    "n": 1
   }
  ],
  "libre": "veinte",
  "mejora": {
   "id": "acrisius-plus",
   "nombre": "Acrisius+",
   "en": "Acrisius+",
   "img": "acrisius-plus",
   "con": "Roca serena"
  }
 },
 {
  "id": "blizzaga-armlet",
  "nombre": "Pulsera Hielo++",
  "en": "Blizzaga Armlet",
  "img": "blizzaga-armlet",
  "rango": "C",
  "exp": 15,
  "mats": [
   {
    "m": "Trozo de mitrilo",
    "n": 5
   },
   {
    "m": "Roca fría",
    "n": 1
   },
   {
    "m": "Guijarro frío",
    "n": 1
   }
  ],
  "libre": "cinco",
  "mejora": {
   "id": "blizzagun-armlet",
   "nombre": "Pulsera Hielo+++",
   "en": "Blizzagun Armlet",
   "img": "blizzagun-armlet",
   "con": "Guijarro sereno"
  }
 },
 {
  "id": "centurion",
  "nombre": "Centurión",
  "en": "Centurion",
  "img": "centurion",
  "rango": "S",
  "exp": 51,
  "mats": [
   {
    "m": "Ilusión extraviada",
    "n": 1
   },
   {
    "m": "Cristal evocador",
    "n": 1
   },
   {
    "m": "Piedra evocadora",
    "n": 3
   },
   {
    "m": "Roca evocadora",
    "n": 5
   },
   {
    "m": "Guijarro evocador",
    "n": 7
   }
  ],
  "receta": "Receta trascendental",
  "donde": "Al vencer a la Esencia intangible de Lexaeus (Villa Crepúsculo).",
  "mejora": {
   "id": "centurion-plus",
   "nombre": "Centurión+",
   "en": "Centurion+",
   "img": "centurion-plus",
   "con": "Cristal sereno"
  }
 },
 {
  "id": "defense-boost",
  "nombre": "Impulso defensivo",
  "en": "Defense Boost",
  "img": "defense-boost",
  "rango": "S",
  "exp": 50,
  "mats": [
   {
    "m": "Cristal de mitrilo",
    "n": 1
   },
   {
    "m": "Cristal ígneo",
    "n": 3
   },
   {
    "m": "Cristal luminoso",
    "n": 3
   },
   {
    "m": "Cristal claro",
    "n": 3
   }
  ],
  "receta": "Receta de bloqueo",
  "donde": "Cofre de la Cueva tenebrosa (Bosque de los Cien Acres).",
  "mejora": {
   "id": "power-boost",
   "nombre": "Impulso de vigor",
   "en": "Power Boost",
   "img": "power-boost",
   "con": "Cristal sereno"
  }
 },
 {
  "id": "draw-ring",
  "nombre": "Anillo magnético",
  "en": "Draw Ring",
  "img": "draw-ring",
  "rango": "S",
  "exp": 55,
  "mats": [
   {
    "m": "Ilusión materializada",
    "n": 1
   },
   {
    "m": "Guijarro evocador",
    "n": 3
   },
   {
    "m": "Piedra vital",
    "n": 3
   },
   {
    "m": "Roca vital",
    "n": 5
   },
   {
    "m": "Guijarro vital",
    "n": 9
   }
  ],
  "receta": "Receta legajo vetusto",
  "donde": "Al resolver el puzle Luces y sombras.",
  "mejora": {
   "id": "lucky-ring",
   "nombre": "Anillo afortunado",
   "en": "Lucky Ring",
   "img": "lucky-ring",
   "con": "Cristal sereno"
  }
 },
 {
  "id": "drive-recovery",
  "nombre": "Recarga de Fusión",
  "en": "Drive Recovery",
  "img": "drive-recovery",
  "rango": "C",
  "exp": 16,
  "mats": [
   {
    "m": "Trozo de mitrilo",
    "n": 3
   },
   {
    "m": "Guijarro oscuro",
    "n": 3
   },
   {
    "m": "Guijarro frío",
    "n": 1
   },
   {
    "m": "Guijarro luminoso",
    "n": 1
   }
  ],
  "receta": "Receta de recarga",
  "donde": "Cofre del Sendero de montaña (Tierra de Dragones).",
  "mejora": {
   "id": "high-drive-recovery",
   "nombre": "Recarga de Fusión+",
   "en": "High Drive Recovery",
   "img": "high-drive-recovery",
   "con": "Guijarro sereno"
  }
 },
 {
  "id": "elixir",
  "nombre": "Elixir",
  "en": "Elixir",
  "img": "elixir",
  "rango": "A",
  "exp": 15,
  "mats": [
   {
    "m": "Roca de mitrilo",
    "n": 3
   },
   {
    "m": "Roca fuerte",
    "n": 1
   },
   {
    "m": "Roca oscura",
    "n": 1
   }
  ],
  "receta": "Receta estelar",
  "donde": "Cofre de los Jardines (Castillo Disney).",
  "mejora": {
   "id": "megalixir",
   "nombre": "Omnielixir",
   "en": "Megalixir",
   "img": "megalixir",
   "con": "Piedra serena"
  }
 },
 {
  "id": "experts-ring",
  "nombre": "Anillo de experto",
  "en": "Expert's Ring",
  "img": "experts-ring",
  "rango": "A",
  "exp": 29,
  "mats": [
   {
    "m": "Cristal de mitrilo",
    "n": 3
   },
   {
    "m": "Cristal oscuro",
    "n": 1
   },
   {
    "m": "Piedra oscura",
    "n": 1
   },
   {
    "m": "Roca oscura",
    "n": 1
   },
   {
    "m": "Guijarro oscuro",
    "n": 1
   }
  ],
  "libre": "veinte",
  "mejora": {
   "id": "masters-ring",
   "nombre": "Anillo maestro",
   "en": "Master's Ring",
   "img": "masters-ring",
   "con": "Piedra serena"
  }
 },
 {
  "id": "firaga-bangle",
  "nombre": "Brazal Piro++",
  "en": "Firaga Bangle",
  "img": "firaga-bangle",
  "rango": "C",
  "exp": 15,
  "mats": [
   {
    "m": "Trozo de mitrilo",
    "n": 5
   },
   {
    "m": "Roca ígnea",
    "n": 1
   },
   {
    "m": "Guijarro ígneo",
    "n": 1
   }
  ],
  "libre": "cinco",
  "mejora": {
   "id": "firagun-bangle",
   "nombre": "Brazal Piro+++",
   "en": "Firagun Bangle",
   "img": "firagun-bangle",
   "con": "Guijarro sereno"
  }
 },
 {
  "id": "frozen-pride",
  "nombre": "Orgullo helado",
  "en": "Frozen Pride",
  "img": "frozen-pride",
  "rango": "S",
  "exp": 51,
  "mats": [
   {
    "m": "Ilusión extraviada",
    "n": 1
   },
   {
    "m": "Cristal sosegado",
    "n": 1
   },
   {
    "m": "Piedra sosegada",
    "n": 3
   },
   {
    "m": "Roca sosegada",
    "n": 5
   },
   {
    "m": "Guijarro sosegado",
    "n": 7
   }
  ],
  "receta": "Receta experimental",
  "donde": "Al vencer a la Esencia intangible de Vexen (Agrabah).",
  "mejora": {
   "id": "frozen-pride-plus",
   "nombre": "Orgullo helado+",
   "en": "Frozen Pride+",
   "img": "frozen-pride-plus",
   "con": "Cristal sereno"
  }
 },
 {
  "id": "full-bloom",
  "nombre": "Plenaflor",
  "en": "Full Bloom",
  "img": "full-bloom",
  "rango": "S",
  "exp": 26,
  "mats": [
   {
    "m": "Ilusión extraviada",
    "n": 1
   },
   {
    "m": "Ilusión materializada",
    "n": 1
   },
   {
    "m": "Cristal sosegado",
    "n": 1
   },
   {
    "m": "Piedra serena",
    "n": 3
   }
  ],
  "receta": "Receta imperecedera",
  "donde": "Al vencer a la Esencia intangible de Marluxia (Castillo de Bestia).",
  "mejora": {
   "id": "full-bloom-plus",
   "nombre": "Plenaflor+",
   "en": "Full Bloom+",
   "img": "full-bloom-plus",
   "con": "Cristal sereno"
  }
 },
 {
  "id": "garnet-ring",
  "nombre": "Anillo granate",
  "en": "Garnet Ring",
  "img": "garnet-ring",
  "rango": "C",
  "exp": 16,
  "mats": [
   {
    "m": "Roca de mitrilo",
    "n": 3
   },
   {
    "m": "Roca fuerte",
    "n": 1
   },
   {
    "m": "Guijarro fuerte",
    "n": 1
   },
   {
    "m": "Guijarro oscuro",
    "n": 1
   }
  ],
  "libre": "cinco",
  "mejora": {
   "id": "diamond-ring",
   "nombre": "Anillo de diamante",
   "en": "Diamond Ring",
   "img": "diamond-ring",
   "con": "Guijarro sereno"
  }
 },
 {
  "id": "mage-earring",
  "nombre": "Aro de mago",
  "en": "Mage Earring",
  "img": "mage-earring",
  "rango": "B",
  "exp": 24,
  "mats": [
   {
    "m": "Piedra de mitrilo",
    "n": 3
   },
   {
    "m": "Piedra fuerte",
    "n": 1
   },
   {
    "m": "Piedra ígnea",
    "n": 1
   },
   {
    "m": "Piedra luminosa",
    "n": 1
   }
  ],
  "libre": "veinte",
  "mejora": {
   "id": "slayer-earring",
   "nombre": "Aro asesino",
   "en": "Slayer Earring",
   "img": "slayer-earring",
   "con": "Roca serena"
  }
 },
 {
  "id": "mega-potion",
  "nombre": "Omnipoción",
  "en": "Mega-Potion",
  "img": "mega-potion",
  "rango": "B",
  "exp": 12,
  "mats": [
   {
    "m": "Trozo de mitrilo",
    "n": 3
   },
   {
    "m": "Guijarro fuerte",
    "n": 1
   },
   {
    "m": "Guijarro ígneo",
    "n": 1
   },
   {
    "m": "Guijarro claro",
    "n": 1
   }
  ],
  "receta": "Omnireceta",
  "donde": "Cofre del Cuarto de Bella (Castillo de Bestia).",
  "mejora": {
   "id": "mega-ether",
   "nombre": "Omniéter",
   "en": "Mega-Ether",
   "img": "mega-ether",
   "con": "Roca serena"
  }
 },
 {
  "id": "midnight-anklet",
  "nombre": "Cadena nocturna",
  "en": "Midnight Anklet",
  "img": "midnight-anklet",
  "rango": "C",
  "exp": 15,
  "mats": [
   {
    "m": "Trozo de mitrilo",
    "n": 5
   },
   {
    "m": "Roca clara",
    "n": 1
   },
   {
    "m": "Guijarro claro",
    "n": 1
   }
  ],
  "libre": "cinco",
  "mejora": {
   "id": "chaos-anklet",
   "nombre": "Cadena del caos",
   "en": "Chaos Anklet",
   "img": "chaos-anklet",
   "con": "Guijarro sereno"
  }
 },
 {
  "id": "moon-amulet",
  "nombre": "Amuleto lunar",
  "en": "Moon Amulet",
  "img": "moon-amulet",
  "rango": "A",
  "exp": 22,
  "mats": [
   {
    "m": "Orichalcum",
    "n": 3
   },
   {
    "m": "Cristal de mitrilo",
    "n": 1
   },
   {
    "m": "Roca crepuscular",
    "n": 1
   },
   {
    "m": "Guijarro del ocaso",
    "n": 1
   }
  ],
  "receta": "Receta lunar",
  "donde": "Cofre de las Obras de restauración (Bastión Hueco).",
  "rangos": [
   "A",
   "S"
  ],
  "mejora": {
   "id": "star-charm",
   "nombre": "Talismán estelar",
   "en": "Star Charm",
   "img": "star-charm",
   "con": "Cristal sereno"
  }
 },
 {
  "id": "mythril-gem",
  "nombre": "Piedra de mitrilo",
  "en": "Mythril Gem",
  "img": "mythril-gem",
  "rango": "B",
  "exp": 34,
  "mats": [
   {
    "m": "Cristal denso",
    "n": 1
   },
   {
    "m": "Piedra densa",
    "n": 3
   },
   {
    "m": "Cristal crepuscular",
    "n": 1
   },
   {
    "m": "Piedra crepuscular",
    "n": 3
   }
  ],
  "libre": "nivel8",
  "mejora": {
   "id": "mythril-crystal",
   "nombre": "Cristal de mitrilo",
   "en": "Mythril Crystal",
   "img": "mythril-crystal",
   "con": "Piedra serena"
  }
 },
 {
  "id": "mythril-ring",
  "nombre": "Anillo de mitrilo",
  "en": "Mythril Ring",
  "img": "mythril-ring",
  "rango": "C",
  "exp": 17,
  "mats": [
   {
    "m": "Roca de mitrilo",
    "n": 3
   },
   {
    "m": "Roca fuerte",
    "n": 1
   },
   {
    "m": "Roca oscura",
    "n": 1
   },
   {
    "m": "Guijarro oscuro",
    "n": 1
   }
  ],
  "libre": "cinco",
  "mejora": {
   "id": "orichalcum-ring",
   "nombre": "Anillo orichalcum",
   "en": "Orichalcum Ring",
   "img": "orichalcum-ring",
   "con": "Guijarro sereno"
  }
 },
 {
  "id": "mythril-shard",
  "nombre": "Trozo de mitrilo",
  "en": "Mythril Shard",
  "img": "mythril-shard",
  "rango": "C",
  "exp": 18,
  "mats": [
   {
    "m": "Roca densa",
    "n": 1
   },
   {
    "m": "Guijarro denso",
    "n": 3
   },
   {
    "m": "Roca crepuscular",
    "n": 1
   },
   {
    "m": "Guijarro del ocaso",
    "n": 3
   }
  ],
  "libre": "veinte",
  "mejora": {
   "id": "mythril-stone",
   "nombre": "Roca de mitrilo",
   "en": "Mythril Stone",
   "img": "mythril-stone",
   "con": "Guijarro sereno"
  }
 },
 {
  "id": "petite-ribbon",
  "nombre": "Pequeña insignia",
  "en": "Petite Ribbon",
  "img": "petite-ribbon",
  "rango": "A",
  "exp": 24,
  "mats": [
   {
    "m": "Cristal de mitrilo",
    "n": 2
   },
   {
    "m": "Orichalcum",
    "n": 1
   },
   {
    "m": "Roca densa",
    "n": 1
   },
   {
    "m": "Guijarro denso",
    "n": 1
   }
  ],
  "receta": "Receta de estilo",
  "donde": "Cofre de la Colina de las Estrellas (Bosque de los Cien Acres).",
  "mejora": {
   "id": "ribbon",
   "nombre": "Insignia",
   "en": "Ribbon",
   "img": "ribbon",
   "con": "Piedra serena"
  }
 },
 {
  "id": "power-band",
  "nombre": "Banda de poder",
  "en": "Power Band",
  "img": "power-band",
  "rango": "B",
  "exp": 24,
  "mats": [
   {
    "m": "Roca de mitrilo",
    "n": 5
   },
   {
    "m": "Roca fuerte",
    "n": 1
   },
   {
    "m": "Roca oscura",
    "n": 1
   },
   {
    "m": "Roca clara",
    "n": 1
   }
  ],
  "libre": "veinte",
  "mejora": {
   "id": "buster-band",
   "nombre": "Banda inmune",
   "en": "Buster Band",
   "img": "buster-band",
   "con": "Roca serena"
  }
 },
 {
  "id": "save-the-king",
  "nombre": "Viva el Rey",
  "en": "Save the King",
  "img": "save-the-king",
  "rango": "S",
  "exp": 78,
  "mats": [
   {
    "m": "Orichalcum",
    "n": 1
   },
   {
    "m": "Cristal crepuscular",
    "n": 3
   },
   {
    "m": "Piedra crepuscular",
    "n": 5
   },
   {
    "m": "Roca crepuscular",
    "n": 7
   },
   {
    "m": "Guijarro del ocaso",
    "n": 9
   }
  ],
  "receta": "Receta del rey",
  "donde": "Cofre del Cementerio de Barcos - Quebrada del Náufrago (Port Royal).",
  "mejora": {
   "id": "save-the-king-plus",
   "nombre": "Viva el Rey+",
   "en": "Save the King+",
   "img": "save-the-king-plus",
   "con": "Cristal sereno"
  }
 },
 {
  "id": "save-the-queen",
  "nombre": "Viva la Reina",
  "en": "Save the Queen",
  "img": "save-the-queen",
  "rango": "S",
  "exp": 78,
  "mats": [
   {
    "m": "Orichalcum",
    "n": 1
   },
   {
    "m": "Cristal denso",
    "n": 3
   },
   {
    "m": "Piedra densa",
    "n": 5
   },
   {
    "m": "Roca densa",
    "n": 7
   },
   {
    "m": "Guijarro denso",
    "n": 9
   }
  ],
  "receta": "Receta de la reina",
  "donde": "Cofre del Salón del Trono (Tierra de Dragones).",
  "mejora": {
   "id": "save-the-queen-plus",
   "nombre": "Viva la Reina+",
   "en": "Save the Queen+",
   "img": "save-the-queen-plus",
   "con": "Cristal sereno"
  }
 },
 {
  "id": "serenity-crystal",
  "nombre": "Cristal sereno",
  "en": "Serenity Crystal",
  "img": "serenity-crystal",
  "rango": "A",
  "exp": 55,
  "mats": [
   {
    "m": "Cristal sosegado",
    "n": 1
   },
   {
    "m": "Cristal evocador",
    "n": 1
   },
   {
    "m": "Cristal vital",
    "n": 9
   }
  ],
  "libre": "nivel8",
  "mejora": {
   "id": "manifest-illusion",
   "nombre": "Ilusión materializada",
   "en": "Manifest Illusion",
   "img": "manifest-illusion",
   "con": "Piedra serena"
  }
 },
 {
  "id": "shadow-archive",
  "nombre": "Códice tenebroso",
  "en": "Shadow Archive",
  "img": "shadow-archive",
  "rango": "S",
  "exp": 26,
  "mats": [
   {
    "m": "Ilusión extraviada",
    "n": 1
   },
   {
    "m": "Ilusión materializada",
    "n": 1
   },
   {
    "m": "Cristal evocador",
    "n": 1
   },
   {
    "m": "Piedra serena",
    "n": 3
   }
  ],
  "receta": "Receta de tinieblas",
  "donde": "Al vencer a la Esencia intangible de Zexión (Coliseo del Olimpo).",
  "mejora": {
   "id": "shadow-archive-plus",
   "nombre": "Códice tenebroso+",
   "en": "Shadow Archive+",
   "img": "shadow-archive-plus",
   "con": "Cristal sereno"
  }
 },
 {
  "id": "shock-charm",
  "nombre": "Dije galvánico",
  "en": "Shock Charm",
  "img": "shock-charm",
  "rango": "S",
  "exp": 31,
  "mats": [
   {
    "m": "Ilusión extraviada",
    "n": 1
   },
   {
    "m": "Piedra evocadora",
    "n": 1
   },
   {
    "m": "Roca evocadora",
    "n": 3
   },
   {
    "m": "Piedra sosegada",
    "n": 1
   },
   {
    "m": "Roca sosegada",
    "n": 3
   }
  ],
  "receta": "Receta iónica",
  "donde": "Al vencer a la Esencia intangible de Larxene (Port Royal).",
  "mejora": {
   "id": "shock-charm-plus",
   "nombre": "Dije galvánico+",
   "en": "Shock Charm+",
   "img": "shock-charm-plus",
   "con": "Cristal sereno"
  }
 },
 {
  "id": "soldier-earring",
  "nombre": "Aro guerrero",
  "en": "Soldier Earring",
  "img": "soldier-earring",
  "rango": "B",
  "exp": 24,
  "mats": [
   {
    "m": "Piedra de mitrilo",
    "n": 3
   },
   {
    "m": "Piedra oscura",
    "n": 1
   },
   {
    "m": "Piedra fría",
    "n": 1
   },
   {
    "m": "Piedra clara",
    "n": 1
   }
  ],
  "libre": "veinte",
  "mejora": {
   "id": "fencer-earring",
   "nombre": "Aro espadachín",
   "en": "Fencer Earring",
   "img": "fencer-earring",
   "con": "Roca serena"
  }
 },
 {
  "id": "thundaga-trinket",
  "nombre": "Colgante Electro++",
  "en": "Thundaga Trinket",
  "img": "thundaga-trinket",
  "rango": "C",
  "exp": 15,
  "mats": [
   {
    "m": "Trozo de mitrilo",
    "n": 5
   },
   {
    "m": "Roca luminosa",
    "n": 1
   },
   {
    "m": "Guijarro luminoso",
    "n": 1
   }
  ],
  "libre": "cinco",
  "mejora": {
   "id": "thundagun-trinket",
   "nombre": "Colgante Electro+++",
   "en": "Thundagun Trinket",
   "img": "thundagun-trinket",
   "con": "Guijarro sereno"
  }
 },
 {
  "id": "ultima-weapon",
  "nombre": "Arma Artema",
  "en": "Ultima Weapon",
  "img": "ultima-weapon",
  "rango": "S",
  "exp": 99,
  "mats": [
   {
    "m": "Orichalcum+",
    "n": 13
   },
   {
    "m": "Orichalcum",
    "n": 1
   },
   {
    "m": "Cristal de mitrilo",
    "n": 1
   },
   {
    "m": "Cristal denso",
    "n": 1
   },
   {
    "m": "Cristal crepuscular",
    "n": 1
   }
  ],
  "receta": "Receta definitiva",
  "donde": "Cofre de la Vieja mansión - Pasillo del Sótano (Villa Crepúsculo, tercera visita).",
  "nivel": 2
 }
];

export const MATERIALES_KH2FM = [
 {
  "id": "blazing-shard",
  "nombre": "Guijarro ígneo",
  "en": "Blazing Shard",
  "img": "blazing-shard",
  "rango": "C",
  "fam": "Blazing",
  "enem": [
   {
    "e": "Martillo Furioso",
    "p": "10 %"
   },
   {
    "e": "Minuto Explosivo",
    "p": "6 %"
   }
  ]
 },
 {
  "id": "blazing-stone",
  "nombre": "Roca ígnea",
  "en": "Blazing Stone",
  "img": "blazing-stone",
  "rango": "B",
  "fam": "Blazing",
  "enem": [
   {
    "e": "Cañón",
    "p": "6 %"
   },
   {
    "e": "Tornado Golpeador",
    "p": "8 %"
   }
  ]
 },
 {
  "id": "blazing-gem",
  "nombre": "Piedra ígnea",
  "en": "Blazing Gem",
  "img": "blazing-gem",
  "rango": "A",
  "fam": "Blazing",
  "enem": [
   {
    "e": "Bandido Obeso",
    "p": "12 %"
   },
   {
    "e": "Globo Fiero",
    "p": "4 %"
   }
  ]
 },
 {
  "id": "blazing-crystal",
  "nombre": "Cristal ígneo",
  "en": "Blazing Crystal",
  "img": "blazing-crystal",
  "rango": "S",
  "fam": "Blazing",
  "enem": [
   {
    "e": "Claxon Sanador",
    "p": "6 %"
   },
   {
    "e": "Jazz Carmesí",
    "p": "12 %"
   }
  ]
 },
 {
  "id": "frost-shard",
  "nombre": "Guijarro frío",
  "en": "Frost Shard",
  "img": "frost-shard",
  "rango": "C",
  "fam": "Frost",
  "enem": [
   {
    "e": "Gancho Vampiro",
    "p": "6 %"
   },
   {
    "e": "Lancero",
    "p": "10 %"
   }
  ]
 },
 {
  "id": "frost-stone",
  "nombre": "Roca fría",
  "en": "Frost Stone",
  "img": "frost-stone",
  "rango": "B",
  "fam": "Frost",
  "enem": [
   {
    "e": "Aviador Maligno",
    "p": "8 %"
   },
   {
    "e": "Coche Loco",
    "p": "12 %"
   }
  ]
 },
 {
  "id": "frost-gem",
  "nombre": "Piedra fría",
  "en": "Frost Gem",
  "img": "frost-gem",
  "rango": "A",
  "fam": "Frost",
  "enem": [
   {
    "e": "Pitonisa",
    "p": "8 %"
   },
   {
    "e": "Cubo Helado",
    "p": "4 %"
   }
  ]
 },
 {
  "id": "frost-crystal",
  "nombre": "Cristal frío",
  "en": "Frost Crystal",
  "img": "frost-crystal",
  "rango": "S",
  "fam": "Frost",
  "enem": [
   {
    "e": "Huesos Vivientes",
    "p": "12 %"
   }
  ]
 },
 {
  "id": "lightning-shard",
  "nombre": "Guijarro luminoso",
  "en": "Lightning Shard",
  "img": "lightning-shard",
  "rango": "C",
  "fam": "Lightning",
  "enem": [
   {
    "e": "Torre de Tensión",
    "p": "10 %"
   },
   {
    "e": "Cohete Repentino",
    "p": "4 %"
   }
  ]
 },
 {
  "id": "lightning-stone",
  "nombre": "Roca luminosa",
  "en": "Lightning Stone",
  "img": "lightning-stone",
  "rango": "B",
  "fam": "Lightning",
  "enem": [
   {
    "e": "Gran Taladro",
    "p": "6 %"
   },
   {
    "e": "Blues Esmeralda",
    "p": "10 %"
   }
  ]
 },
 {
  "id": "lightning-gem",
  "nombre": "Piedra luminosa",
  "en": "Lightning Gem",
  "img": "lightning-gem",
  "rango": "A",
  "fam": "Lightning",
  "enem": [
   {
    "e": "Armadura Sombría",
    "p": "12 %"
   },
   {
    "e": "Robot Centinela",
    "p": "8 %"
   }
  ]
 },
 {
  "id": "lightning-crystal",
  "nombre": "Cristal luminoso",
  "en": "Lightning Crystal",
  "img": "lightning-crystal",
  "rango": "S",
  "fam": "Lightning",
  "enem": [
   {
    "e": "Devastador",
    "p": "4 %"
   },
   {
    "e": "Bombardero Láser",
    "p": "6 %"
   }
  ]
 },
 {
  "id": "lucid-shard",
  "nombre": "Guijarro claro",
  "en": "Lucid Shard",
  "img": "lucid-shard",
  "rango": "C",
  "fam": "Lucid",
  "enem": [
   {
    "e": "Perro Rabioso",
    "p": "6 %"
   },
   {
    "e": "Ilusión Fantasmal",
    "p": "10 %"
   }
  ]
 },
 {
  "id": "lucid-stone",
  "nombre": "Roca clara",
  "en": "Lucid Stone",
  "img": "lucid-stone",
  "rango": "B",
  "fam": "Lucid",
  "enem": [
   {
    "e": "Sepulturero",
    "p": "12 %"
   },
   {
    "e": "Soldado de Plomo",
    "p": "12 %"
   },
   {
    "e": "Osado Caballero",
    "p": "8 %"
   }
  ]
 },
 {
  "id": "lucid-gem",
  "nombre": "Piedra clara",
  "en": "Lucid Gem",
  "img": "lucid-gem",
  "rango": "A",
  "fam": "Lucid",
  "enem": [
   {
    "e": "Bibliotecario",
    "p": "10 %"
   },
   {
    "e": "Cargador Magno",
    "p": "8 %"
   }
  ]
 },
 {
  "id": "lucid-crystal",
  "nombre": "Cristal claro",
  "en": "Lucid Crystal",
  "img": "lucid-crystal",
  "rango": "S",
  "fam": "Lucid",
  "enem": [
   {
    "e": "Neosombra",
    "p": "8 %"
   }
  ]
 },
 {
  "id": "power-shard",
  "nombre": "Guijarro fuerte",
  "en": "Power Shard",
  "img": "power-shard",
  "rango": "C",
  "fam": "Power",
  "enem": [
   {
    "e": "Enredadera",
    "p": "8 %"
   },
   {
    "e": "Grandullón",
    "p": "12 %"
   }
  ]
 },
 {
  "id": "power-stone",
  "nombre": "Roca fuerte",
  "en": "Power Stone",
  "img": "power-stone",
  "rango": "B",
  "fam": "Power",
  "enem": [
   {
    "e": "Bandido Lunar",
    "p": "8 %"
   },
   {
    "e": "Roca Plateada",
    "p": "6 %"
   }
  ]
 },
 {
  "id": "power-gem",
  "nombre": "Piedra fuerte",
  "en": "Power Gem",
  "img": "power-gem",
  "rango": "A",
  "fam": "Power",
  "enem": [
   {
    "e": "Boxeador Aéreo",
    "p": "8 %"
   },
   {
    "e": "Chamán",
    "p": "10 %"
   }
  ]
 },
 {
  "id": "power-crystal",
  "nombre": "Cristal fuerte",
  "en": "Power Crystal",
  "img": "power-crystal",
  "rango": "S",
  "fam": "Power",
  "enem": [
   {
    "e": "Lucero del Alba",
    "p": "12 %"
   }
  ]
 },
 {
  "id": "dark-shard",
  "nombre": "Guijarro oscuro",
  "en": "Dark Shard",
  "img": "dark-shard",
  "rango": "C",
  "fam": "Dark",
  "enem": [
   {
    "e": "Sombra",
    "p": "4 %"
   },
   {
    "e": "Soldado",
    "p": "8 %"
   }
  ]
 },
 {
  "id": "dark-stone",
  "nombre": "Roca oscura",
  "en": "Dark Stone",
  "img": "dark-stone",
  "rango": "B",
  "fam": "Dark",
  "enem": [
   {
    "e": "Centauro Fatal",
    "p": "12 %"
   },
   {
    "e": "Noctámbulo",
    "p": "10 %"
   }
  ]
 },
 {
  "id": "dark-gem",
  "nombre": "Piedra oscura",
  "en": "Dark Gem",
  "img": "dark-gem",
  "rango": "A",
  "fam": "Dark",
  "enem": [
   {
    "e": "Gárgola Pétrea",
    "p": "10 %"
   },
   {
    "e": "Gárgola Guerrera",
    "p": "10 %"
   }
  ]
 },
 {
  "id": "dark-crystal",
  "nombre": "Cristal oscuro",
  "en": "Dark Crystal",
  "img": "dark-crystal",
  "rango": "S",
  "fam": "Dark",
  "enem": [
   {
    "e": "Pirata Volador",
    "p": "8 %"
   }
  ]
 },
 {
  "id": "dense-shard",
  "nombre": "Guijarro denso",
  "en": "Dense Shard",
  "img": "dense-shard",
  "rango": "C",
  "fam": "Dense",
  "enem": [
   {
    "e": "Trepador",
    "p": "8 %"
   },
   {
    "e": "Dragón",
    "p": "12 %"
   }
  ]
 },
 {
  "id": "dense-stone",
  "nombre": "Roca densa",
  "en": "Dense Stone",
  "img": "dense-stone",
  "rango": "B",
  "fam": "Dense",
  "enem": [
   {
    "e": "Francotirador",
    "p": "12 %"
   }
  ]
 },
 {
  "id": "dense-gem",
  "nombre": "Piedra densa",
  "en": "Dense Gem",
  "img": "dense-gem",
  "rango": "A",
  "fam": "Dense",
  "enem": [
   {
    "e": "Samurái",
    "p": "12 %"
   }
  ]
 },
 {
  "id": "dense-crystal",
  "nombre": "Cristal denso",
  "en": "Dense Crystal",
  "img": "dense-crystal",
  "rango": "S",
  "fam": "Dense",
  "enem": [
   {
    "e": "Enloquecedor",
    "p": "12 %"
   }
  ]
 },
 {
  "id": "twilight-shard",
  "nombre": "Guijarro del ocaso",
  "en": "Twilight Shard",
  "img": "twilight-shard",
  "rango": "C",
  "fam": "Twilight",
  "enem": [
   {
    "e": "Umbrío",
    "p": "10 %"
   },
   {
    "e": "Tahúr",
    "p": "12 %"
   }
  ]
 },
 {
  "id": "twilight-stone",
  "nombre": "Roca crepuscular",
  "en": "Twilight Stone",
  "img": "twilight-stone",
  "rango": "B",
  "fam": "Twilight",
  "enem": [
   {
    "e": "Bailarina",
    "p": "12 %"
   }
  ]
 },
 {
  "id": "twilight-gem",
  "nombre": "Piedra crepuscular",
  "en": "Twilight Gem",
  "img": "twilight-gem",
  "rango": "A",
  "fam": "Twilight",
  "enem": [
   {
    "e": "Asesino",
    "p": "12 %"
   }
  ]
 },
 {
  "id": "twilight-crystal",
  "nombre": "Cristal crepuscular",
  "en": "Twilight Crystal",
  "img": "twilight-crystal",
  "rango": "S",
  "fam": "Twilight",
  "enem": [
   {
    "e": "Hechicero",
    "p": "12 %"
   }
  ]
 },
 {
  "id": "mythril-shard",
  "nombre": "Trozo de mitrilo",
  "en": "Mythril Shard",
  "img": "mythril-shard",
  "rango": "C",
  "fam": "Mythril",
  "enem": [],
  "otra": "Solo en cofres y fabricándolo."
 },
 {
  "id": "mythril-stone",
  "nombre": "Roca de mitrilo",
  "en": "Mythril Stone",
  "img": "mythril-stone",
  "rango": "B",
  "fam": "Mythril",
  "enem": [],
  "otra": "Solo en cofres y fabricándolo."
 },
 {
  "id": "mythril-gem",
  "nombre": "Piedra de mitrilo",
  "en": "Mythril Gem",
  "img": "mythril-gem",
  "rango": "A",
  "fam": "Mythril",
  "enem": [],
  "otra": "Solo en cofres y fabricándolo."
 },
 {
  "id": "mythril-crystal",
  "nombre": "Cristal de mitrilo",
  "en": "Mythril Crystal",
  "img": "mythril-crystal",
  "rango": "S",
  "fam": "Mythril",
  "enem": [],
  "otra": "Solo en cofres y fabricándolo."
 },
 {
  "id": "bright-shard",
  "nombre": "Guijarro vital",
  "en": "Bright Shard",
  "img": "bright-shard",
  "rango": "C",
  "fam": "Bright",
  "enem": [
   {
    "e": "Vendedor Corpulento",
    "p": "cápsula 100 %"
   },
   {
    "e": "Enredadera",
    "p": "4 %"
   },
   {
    "e": "Gancho Vampiro",
    "p": "3 %"
   },
   {
    "e": "Minuto Explosivo",
    "p": "3 %"
   },
   {
    "e": "Perro Rabioso",
    "p": "3 %"
   },
   {
    "e": "Soldado",
    "p": "4 %"
   }
  ]
 },
 {
  "id": "bright-stone",
  "nombre": "Roca vital",
  "en": "Bright Stone",
  "img": "bright-stone",
  "rango": "B",
  "fam": "Bright",
  "enem": [
   {
    "e": "Vendedor Corpulento",
    "p": "cápsula rara 100 %"
   },
   {
    "e": "Aviador Maligno",
    "p": "4 %"
   },
   {
    "e": "Cañón",
    "p": "3 %"
   },
   {
    "e": "Gran Taladro",
    "p": "4 %"
   },
   {
    "e": "Bandido Lunar",
    "p": "4 %"
   },
   {
    "e": "Roca Plateada",
    "p": "3 %"
   },
   {
    "e": "Tornado Golpeador",
    "p": "4 %"
   },
   {
    "e": "Osado Caballero",
    "p": "4 %"
   }
  ]
 },
 {
  "id": "bright-gem",
  "nombre": "Piedra vital",
  "en": "Bright Gem",
  "img": "bright-gem",
  "rango": "A",
  "fam": "Bright",
  "enem": [
   {
    "e": "Vendedor Corpulento",
    "p": "cápsula limitada 100 %"
   },
   {
    "e": "Boxeador Aéreo",
    "p": "4 %"
   },
   {
    "e": "Cargador Magno",
    "p": "4 %"
   },
   {
    "e": "Robot Centinela",
    "p": "3 %"
   }
  ]
 },
 {
  "id": "bright-crystal",
  "nombre": "Cristal vital",
  "en": "Bright Crystal",
  "img": "bright-crystal",
  "rango": "S",
  "fam": "Bright",
  "enem": [
   {
    "e": "Vendedor Corpulento",
    "p": "cápsula de primera 100 %"
   },
   {
    "e": "Pirata Volador",
    "p": "4 %"
   },
   {
    "e": "Claxon Sanador",
    "p": "3 %"
   },
   {
    "e": "Neosombra",
    "p": "4 %"
   },
   {
    "e": "Bombardero Láser",
    "p": "4 %"
   }
  ]
 },
 {
  "id": "energy-shard",
  "nombre": "Guijarro de poder",
  "en": "Energy Shard",
  "img": "energy-shard",
  "rango": "C",
  "fam": "Energy",
  "enem": [
   {
    "e": "Torre de Tensión",
    "p": "4 %"
   },
   {
    "e": "Gárgola Pétrea",
    "p": "4 %"
   },
   {
    "e": "Gárgola Guerrera",
    "p": "4 %"
   },
   {
    "e": "Noctámbulo",
    "p": "4 %"
   }
  ]
 },
 {
  "id": "energy-stone",
  "nombre": "Roca de poder",
  "en": "Energy Stone",
  "img": "energy-stone",
  "rango": "B",
  "fam": "Energy",
  "enem": [
   {
    "e": "Martillo Furioso",
    "p": "4 %"
   },
   {
    "e": "Lancero",
    "p": "4 %"
   },
   {
    "e": "Ilusión Fantasmal",
    "p": "4 %"
   }
  ]
 },
 {
  "id": "energy-gem",
  "nombre": "Piedra de poder",
  "en": "Energy Gem",
  "img": "energy-gem",
  "rango": "A",
  "fam": "Energy",
  "enem": [
   {
    "e": "Blues Esmeralda",
    "p": "4 %"
   },
   {
    "e": "Pitonisa",
    "p": "4 %"
   }
  ]
 },
 {
  "id": "energy-crystal",
  "nombre": "Cristal de poder",
  "en": "Energy Crystal",
  "img": "energy-crystal",
  "rango": "S",
  "fam": "Energy",
  "enem": [
   {
    "e": "Bibliotecario",
    "p": "4 %"
   },
   {
    "e": "Chamán",
    "p": "4 %"
   }
  ]
 },
 {
  "id": "serenity-shard",
  "nombre": "Guijarro sereno",
  "en": "Serenity Shard",
  "img": "serenity-shard",
  "rango": "C",
  "fam": "Serenity",
  "enem": [
   {
    "e": "Centauro Fatal",
    "p": "4 %"
   },
   {
    "e": "Trepador",
    "p": "2 %"
   },
   {
    "e": "Bandido Obeso",
    "p": "4 %"
   },
   {
    "e": "Sepulturero",
    "p": "4 %"
   },
   {
    "e": "Coche Loco",
    "p": "4 %"
   },
   {
    "e": "Grandullón",
    "p": "4 %"
   },
   {
    "e": "Soldado de Plomo",
    "p": "4 %"
   }
  ]
 },
 {
  "id": "serenity-stone",
  "nombre": "Roca serena",
  "en": "Serenity Stone",
  "img": "serenity-stone",
  "rango": "B",
  "fam": "Serenity",
  "enem": [
   {
    "e": "Jazz Carmesí",
    "p": "4 %"
   },
   {
    "e": "Devastador",
    "p": "4 %"
   },
   {
    "e": "Umbrío",
    "p": "2 %"
   },
   {
    "e": "Huesos Vivientes",
    "p": "4 %"
   },
   {
    "e": "Lucero del Alba",
    "p": "4 %"
   }
  ]
 },
 {
  "id": "serenity-gem",
  "nombre": "Piedra serena",
  "en": "Serenity Gem",
  "img": "serenity-gem",
  "rango": "A",
  "fam": "Serenity",
  "enem": [
   {
    "e": "Bailarina",
    "p": "4 %"
   },
   {
    "e": "Dragón",
    "p": "4 %"
   },
   {
    "e": "Tahúr",
    "p": "4 %"
   },
   {
    "e": "Francotirador",
    "p": "4 %"
   }
  ]
 },
 {
  "id": "serenity-crystal",
  "nombre": "Cristal sereno",
  "en": "Serenity Crystal",
  "img": "serenity-crystal",
  "rango": "S",
  "fam": "Serenity",
  "enem": [
   {
    "e": "Asesino",
    "p": "4 %"
   },
   {
    "e": "Enloquecedor",
    "p": "4 %"
   },
   {
    "e": "Samurái",
    "p": "4 %"
   },
   {
    "e": "Hechicero",
    "p": "4 %"
   },
   {
    "e": "Vendedor Corpulento",
    "p": "cápsula de primera 100 %"
   }
  ],
  "otra": "Fabricándolo (Final Mix)."
 },
 {
  "id": "orichalcum",
  "nombre": "Orichalcum",
  "en": "Orichalcum",
  "img": "orichalcum",
  "rango": "A",
  "enem": [
   {
    "e": "Vendedor Corpulento",
    "p": "cápsula 10 % / cápsula rara 12 % / cápsula limitada 16 % / cápsula de primera 18 %"
   }
  ]
 },
 {
  "id": "orichalcum-plus",
  "nombre": "Orichalcum+",
  "en": "Orichalcum+",
  "img": "orichalcum-plus",
  "rango": "S",
  "enem": [],
  "otra": "Solo en cofres y eventos (ver Arma Artema)."
 },
 {
  "id": "remembrance-shard",
  "nombre": "Guijarro evocador",
  "en": "Remembrance Shard",
  "img": "remembrance-shard",
  "rango": "C",
  "fam": "Remembrance",
  "enem": [
   {
    "e": "Anzuelo",
    "p": "6 %"
   },
   {
    "e": "Maza Férrica",
    "p": "10 %"
   },
   {
    "e": "Lanzador Silente",
    "p": "6 %"
   }
  ]
 },
 {
  "id": "remembrance-stone",
  "nombre": "Roca evocadora",
  "en": "Remembrance Stone",
  "img": "remembrance-stone",
  "rango": "B",
  "fam": "Remembrance",
  "enem": [
   {
    "e": "Vikingo Volador",
    "p": "6 %"
   },
   {
    "e": "Espectro Mágico",
    "p": "10 %"
   },
   {
    "e": "Lancero Audaz",
    "p": "10 %"
   },
   {
    "e": "Necromante",
    "p": "10 %"
   }
  ]
 },
 {
  "id": "remembrance-gem",
  "nombre": "Piedra evocadora",
  "en": "Remembrance Gem",
  "img": "remembrance-gem",
  "rango": "A",
  "fam": "Remembrance",
  "enem": [
   {
    "e": "Metal Cian",
    "p": "10 %"
   },
   {
    "e": "Arcanista",
    "p": "10 %"
   },
   {
    "e": "Chocador Chiflado",
    "p": "12 %"
   }
  ]
 },
 {
  "id": "remembrance-crystal",
  "nombre": "Cristal evocador",
  "en": "Remembrance Crystal",
  "img": "remembrance-crystal",
  "rango": "S",
  "fam": "Remembrance",
  "enem": [
   {
    "e": "Temerario",
    "p": "12 %"
   }
  ],
  "otra": "Cofre de la Gruta de la Evocación - Sala de Máquinas."
 },
 {
  "id": "tranquil-shard",
  "nombre": "Guijarro sosegado",
  "en": "Tranquil Shard",
  "img": "tranquility-shard",
  "rango": "C",
  "fam": "Tranquility",
  "enem": [
   {
    "e": "Micorganización XIII"
   }
  ]
 },
 {
  "id": "tranquil-stone",
  "nombre": "Roca sosegada",
  "en": "Tranquil Stone",
  "img": "tranquility-stone",
  "rango": "B",
  "fam": "Tranquility",
  "enem": [
   {
    "e": "Micorganización XIII"
   }
  ]
 },
 {
  "id": "tranquil-gem",
  "nombre": "Piedra sosegada",
  "en": "Tranquil Gem",
  "img": "tranquility-gem",
  "rango": "A",
  "fam": "Tranquility",
  "enem": [
   {
    "e": "Micorganización XIII"
   }
  ]
 },
 {
  "id": "tranquil-crystal",
  "nombre": "Cristal sosegado",
  "en": "Tranquil Crystal",
  "img": "tranquility-crystal",
  "rango": "S",
  "fam": "Tranquility",
  "enem": [
   {
    "e": "Micorganización XIII"
   }
  ],
  "otra": "Con puntuación alta en su reto (guía en castellano)."
 },
 {
  "id": "manifest-illusion",
  "nombre": "Ilusión materializada",
  "en": "Manifest Illusion",
  "img": "manifest-illusion",
  "rango": "A",
  "enem": [
   {
    "e": "Consciencia Latente"
   }
  ],
  "otra": "Premio del puzle Al filo. Fabricándolo (Final Mix). Cofres de la Gruta de la Evocación."
 },
 {
  "id": "lost-illusion",
  "nombre": "Ilusión extraviada",
  "en": "Lost Illusion",
  "img": "lost-illusion",
  "rango": "S",
  "enem": [],
  "otra": "Esencias intangibles. Réplicas de la Organización XIII."
 }
];
