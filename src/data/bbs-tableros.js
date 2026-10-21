// Casillas bonus de los Tableros de comandos de BBS Final Mix. GENERADO (notas/herramientas/tableros.py); no editar a mano.
// Fuente: KHWiki, tabla «Layout» de cada tablero. «limitada»: recompensa que sale mientras no tengas ese comando;
// al tenerlo, la casilla da la «normal». «coso»: lo que da en el Coso Virtual (casi siempre nada). `solo`: personajes.

export const TABLEROS = [
 {
  "id": "llave-espada",
  "nombre": "Tablero de la Llave Espada",
  "kh": "Keyblade_Board",
  "casillas": [
   {
    "num": 1,
    "normal": [
     {
      "n": "Gravedad",
      "en": "Zero Gravity",
      "pct": null,
      "solo": null
     }
    ],
    "limitada": [
     {
      "n": "Ragnarok",
      "en": "Ragnarok",
      "pct": null,
      "solo": null
     }
    ],
    "coso": [
     {
      "n": "Gravedad",
      "en": "Zero Gravity",
      "pct": null,
      "solo": null
     }
    ]
   },
   {
    "num": 2,
    "normal": [
     {
      "n": "Imán",
      "en": "Magnet",
      "pct": "80",
      "solo": null
     },
     {
      "n": "Cura",
      "en": "Cure",
      "pct": "20",
      "solo": null
     }
    ],
    "limitada": [],
    "coso": []
   },
   {
    "num": 3,
    "normal": [
     {
      "n": "Tiro Mortífero",
      "en": "Strike Raid",
      "pct": "50",
      "solo": null
     },
     {
      "n": "Hoja Tóxica",
      "en": "Poison Edge",
      "pct": "50",
      "solo": null
     }
    ],
    "limitada": [],
    "coso": []
   },
   {
    "num": 4,
    "normal": [
     {
      "n": "Hielo",
      "en": "Blizzard",
      "pct": "50",
      "solo": null
     },
     {
      "n": "Aero",
      "en": "Aero",
      "pct": "50",
      "solo": null
     }
    ],
    "limitada": [],
    "coso": []
   },
   {
    "num": 5,
    "normal": [
     {
      "n": "Confu",
      "en": "Confuse",
      "pct": "50",
      "solo": null
     },
     {
      "n": "Freno",
      "en": "Slow",
      "pct": "50",
      "solo": null
     }
    ],
    "limitada": [],
    "coso": []
   }
  ]
 },
 {
  "id": "real",
  "nombre": "Tablero Real",
  "kh": "Royal_Board",
  "casillas": [
   {
    "num": 1,
    "normal": [
     {
      "n": "Hoja Aturdidora",
      "en": "Stun Edge",
      "pct": null,
      "solo": null
     }
    ],
    "limitada": [
     {
      "n": "Hoja del Deseo",
      "en": "Wishing Edge",
      "pct": null,
      "solo": [
       "aqua"
      ]
     }
    ],
    "coso": []
   },
   {
    "num": 2,
    "normal": [
     {
      "n": "Coraza Tino",
      "en": "Focus Barrier",
      "pct": null,
      "solo": [
       "aqua"
      ]
     }
    ],
    "limitada": [
     {
      "n": "Bloqueo Tino",
      "en": "Focus Block",
      "pct": null,
      "solo": [
       "terra",
       "ventus"
      ]
     }
    ],
    "coso": []
   },
   {
    "num": 3,
    "normal": [
     {
      "n": "Piroembestida",
      "en": "Fire Dash",
      "pct": null,
      "solo": null
     }
    ],
    "limitada": [
     {
      "n": "Lluvia Meteórica",
      "en": "Meteor Shower",
      "pct": null,
      "solo": null
     }
    ],
    "coso": []
   },
   {
    "num": 4,
    "normal": [
     {
      "n": "Piro",
      "en": "Fire",
      "pct": "60",
      "solo": null
     },
     {
      "n": "Electro",
      "en": "Thunder",
      "pct": "40",
      "solo": null
     }
    ],
    "limitada": [],
    "coso": []
   },
   {
    "num": 5,
    "normal": [
     {
      "n": "Enlace",
      "en": "Bind",
      "pct": "40",
      "solo": null
     },
     {
      "n": "Paro",
      "en": "Stop",
      "pct": "40",
      "solo": null
     },
     {
      "n": "Apagón",
      "en": "Blackout",
      "pct": "20",
      "solo": null
     }
    ],
    "limitada": [],
    "coso": []
   }
  ]
 },
 {
  "id": "espacial",
  "nombre": "Tablero Espacial",
  "kh": "Spaceship_Board",
  "casillas": [
   {
    "num": 1,
    "normal": [
     {
      "n": "Piro++",
      "en": "Firaga",
      "pct": null,
      "solo": null
     }
    ],
    "limitada": [
     {
      "n": "Salto de Altura",
      "en": "High Jump",
      "pct": null,
      "solo": null
     }
    ],
    "coso": []
   },
   {
    "num": 2,
    "normal": [
     {
      "n": "Gravedad++",
      "en": "Zero Graviga",
      "pct": null,
      "solo": null
     }
    ],
    "limitada": [
     {
      "n": "Rayo Célere",
      "en": "Lightning Ray",
      "pct": null,
      "solo": null
     }
    ],
    "coso": [
     {
      "n": "Gravedad++",
      "en": "Zero Graviga",
      "pct": null,
      "solo": null
     }
    ]
   },
   {
    "num": 3,
    "normal": [
     {
      "n": "Estocada Veloz",
      "en": "Sonic Blade",
      "pct": "50",
      "solo": null
     },
     {
      "n": "Electro++",
      "en": "Thundaga",
      "pct": "50",
      "solo": null
     }
    ],
    "limitada": [],
    "coso": []
   },
   {
    "num": 4,
    "normal": [
     {
      "n": "Electro+",
      "en": "Thundara",
      "pct": "50",
      "solo": null
     },
     {
      "n": "Aero+",
      "en": "Aerora",
      "pct": "50",
      "solo": null
     }
    ],
    "limitada": [],
    "coso": []
   },
   {
    "num": 5,
    "normal": [
     {
      "n": "Apagón",
      "en": "Blackout",
      "pct": "50",
      "solo": null
     },
     {
      "n": "Ignición",
      "en": "Ignite",
      "pct": "50",
      "solo": null
     }
    ],
    "limitada": [],
    "coso": []
   },
   {
    "num": 6,
    "normal": [],
    "limitada": [
     {
      "n": "Magnetochoque",
      "en": "Collision Magnet",
      "pct": null,
      "solo": null
     }
    ],
    "coso": []
   },
   {
    "num": 7,
    "normal": [
     {
      "n": "Minimalia",
      "en": "Mini",
      "pct": null,
      "solo": null
     }
    ],
    "limitada": [
     {
      "n": "Límite tormenta",
      "en": "Limit Storm",
      "pct": null,
      "solo": [
       "terra"
      ]
     }
    ],
    "coso": []
   }
  ]
 },
 {
  "id": "animado",
  "nombre": "Tablero Animado",
  "kh": "Toon_Board",
  "casillas": [
   {
    "num": 1,
    "normal": [
     {
      "n": "Furia Confusión",
      "en": "Confusion Strike",
      "pct": null,
      "solo": null
     }
    ],
    "limitada": [
     {
      "n": "Furia Ligadora",
      "en": "Binding Strike",
      "pct": null,
      "solo": null
     }
    ],
    "coso": []
   },
   {
    "num": 2,
    "normal": [
     {
      "n": "Hielo",
      "en": "Blizzard",
      "pct": null,
      "solo": null
     }
    ],
    "limitada": [
     {
      "n": "Hielo+",
      "en": "Blizzara",
      "pct": null,
      "solo": null
     }
    ],
    "coso": [
     {
      "n": "Gravedad++",
      "en": "Zero Graviga",
      "pct": null,
      "solo": null
     }
    ]
   },
   {
    "num": 3,
    "normal": [
     {
      "n": "Electro+",
      "en": "Thundara",
      "pct": "50",
      "solo": null
     },
     {
      "n": "Aero+",
      "en": "Aerora",
      "pct": "50",
      "solo": null
     }
    ],
    "limitada": [],
    "coso": []
   },
   {
    "num": 4,
    "normal": [
     {
      "n": "Tiro Gélido",
      "en": "Freeze Raid",
      "pct": null,
      "solo": null
     }
    ],
    "limitada": [
     {
      "n": "Hipotermia",
      "en": "Deep Freeze",
      "pct": null,
      "solo": null
     }
    ],
    "coso": [
     {
      "n": "Tiro Gélido",
      "en": "Freeze Raid",
      "pct": null,
      "solo": null
     }
    ]
   },
   {
    "num": 5,
    "normal": [],
    "limitada": [
     {
      "n": "Hoja Gélida",
      "en": "Blizzard Edge",
      "pct": null,
      "solo": null
     }
    ],
    "coso": []
   },
   {
    "num": 6,
    "normal": [
     {
      "n": "Cura",
      "en": "Cure",
      "pct": "50",
      "solo": null
     },
     {
      "n": "Gravedad++",
      "en": "Zero Graviga",
      "pct": "50",
      "solo": null
     }
    ],
    "limitada": [],
    "coso": []
   },
   {
    "num": 7,
    "normal": [
     {
      "n": "Paro+",
      "en": "Stopra",
      "pct": "50",
      "solo": null
     },
     {
      "n": "Apagón",
      "en": "Blackout",
      "pct": "25",
      "solo": null
     },
     {
      "n": "Enlace",
      "en": "Bind",
      "pct": "25",
      "solo": null
     }
    ],
    "limitada": [],
    "coso": []
   }
  ]
 },
 {
  "id": "calavera",
  "nombre": "Tablero Calavera",
  "kh": "Skull_Board",
  "casillas": [
   {
    "num": 1,
    "normal": [
     {
      "n": "Cisco Volátil",
      "en": "Quick Blitz",
      "pct": "50",
      "solo": null
     },
     {
      "n": "Aero",
      "en": "Aero",
      "pct": "50",
      "solo": null
     }
    ],
    "limitada": [],
    "coso": []
   },
   {
    "num": 2,
    "normal": [
     {
      "n": "Imán++",
      "en": "Magnega",
      "pct": null,
      "solo": null
     }
    ],
    "limitada": [
     {
      "n": "Carga Fotónica",
      "en": "Photon Charge",
      "pct": null,
      "solo": null
     }
    ],
    "coso": [
     {
      "n": "Imán++",
      "en": "Magnega",
      "pct": null,
      "solo": null
     }
    ]
   },
   {
    "num": 3,
    "normal": [
     {
      "n": "Cisco",
      "en": "Blitz",
      "pct": "50",
      "solo": null
     },
     {
      "n": "Batacazo",
      "en": "Aerial Slam",
      "pct": "50",
      "solo": null
     }
    ],
    "limitada": [],
    "coso": []
   },
   {
    "num": 4,
    "normal": [
     {
      "n": "Piro++",
      "en": "Firaga",
      "pct": "50",
      "solo": null
     },
     {
      "n": "Cuadro de Minas",
      "en": "Mine Square",
      "pct": "50",
      "solo": null
     }
    ],
    "limitada": [],
    "coso": []
   },
   {
    "num": 5,
    "normal": [
     {
      "n": "Hoja Tóxica",
      "en": "Poison Edge",
      "pct": null,
      "solo": null
     }
    ],
    "limitada": [
     {
      "n": "Atraerriquezas",
      "en": "Munny Magnet",
      "pct": null,
      "solo": [
       "aqua"
      ]
     }
    ],
    "coso": []
   },
   {
    "num": 6,
    "normal": [
     {
      "n": "Furia Ligadora",
      "en": "Binding Strike",
      "pct": null,
      "solo": null
     }
    ],
    "limitada": [],
    "coso": []
   },
   {
    "num": 7,
    "normal": [
     {
      "n": "Gravedad+",
      "en": "Zero Gravira",
      "pct": "50",
      "solo": null
     },
     {
      "n": "Aero+",
      "en": "Aerora",
      "pct": "50",
      "solo": null
     }
    ],
    "limitada": [],
    "coso": []
   }
  ]
 },
 {
  "id": "miel",
  "nombre": "Tablero de Miel",
  "kh": "Hunny_Pot_Board",
  "casillas": [
   {
    "num": 1,
    "normal": [
     {
      "n": "Piro+",
      "en": "Fira",
      "pct": "30",
      "solo": null
     },
     {
      "n": "Carga Pírica",
      "en": "Fire Surge",
      "pct": "70",
      "solo": null
     }
    ],
    "limitada": [],
    "coso": []
   },
   {
    "num": 2,
    "normal": [
     {
      "n": "Furia Confusión",
      "en": "Confusion Strike",
      "pct": null,
      "solo": null
     }
    ],
    "limitada": [
     {
      "n": "Sacrificio",
      "en": "Sacrifice",
      "pct": null,
      "solo": [
       "terra"
      ]
     }
    ],
    "coso": []
   },
   {
    "num": 3,
    "normal": [
     {
      "n": "Electro+",
      "en": "Thundara",
      "pct": null,
      "solo": null
     }
    ],
    "limitada": [
     {
      "n": "Rueda Eléctrica",
      "en": "Thunder Roll",
      "pct": null,
      "solo": [
       "ventus"
      ]
     }
    ],
    "coso": [
     {
      "n": "Electro+",
      "en": "Thundara",
      "pct": null,
      "solo": null
     }
    ]
   },
   {
    "num": 4,
    "normal": [
     {
      "n": "Cuadro de Minas",
      "en": "Mine Square",
      "pct": "50",
      "solo": null
     },
     {
      "n": "Gravedad+",
      "en": "Zero Gravira",
      "pct": "50",
      "solo": null
     }
    ],
    "limitada": [],
    "coso": []
   }
  ]
 },
 {
  "id": "secreto",
  "nombre": "Tablero Secreto",
  "kh": "Secret_Board",
  "casillas": [
   {
    "num": 1,
    "normal": [
     {
      "n": "Imán++",
      "en": "Magnega",
      "pct": null,
      "solo": null
     }
    ],
    "limitada": [
     {
      "n": "Batacazo",
      "en": "Aerial Slam",
      "pct": null,
      "solo": null
     }
    ],
    "coso": [
     {
      "n": "Electro+",
      "en": "Thundara",
      "pct": null,
      "solo": null
     }
    ]
   },
   {
    "num": 2,
    "normal": [
     {
      "n": "Carga Eléctrica",
      "en": "Thunder Surge",
      "pct": null,
      "solo": null
     }
    ],
    "limitada": [
     {
      "n": "Rayo Célere",
      "en": "Lightning Ray",
      "pct": null,
      "solo": null
     }
    ],
    "coso": [
     {
      "n": "Batacazo",
      "en": "Aerial Slam",
      "pct": null,
      "solo": null
     }
    ]
   },
   {
    "num": 3,
    "normal": [],
    "limitada": [
     {
      "n": "Estocada Veloz",
      "en": "Sonic Blade",
      "pct": null,
      "solo": null
     }
    ],
    "coso": [
     {
      "n": "Cisco",
      "en": "Blitz",
      "pct": null,
      "solo": null
     }
    ]
   },
   {
    "num": 4,
    "normal": [],
    "limitada": [
     {
      "n": "Lluvia Piro++",
      "en": "Fission Firaga",
      "pct": null,
      "solo": null
     }
    ],
    "coso": [
     {
      "n": "Carga Pírica",
      "en": "Fire Surge",
      "pct": null,
      "solo": null
     }
    ]
   },
   {
    "num": 5,
    "normal": [
     {
      "n": "Gravedad++",
      "en": "Zero Graviga",
      "pct": "50",
      "solo": null
     },
     {
      "n": "Imán++",
      "en": "Magnega",
      "pct": "50",
      "solo": null
     }
    ],
    "limitada": [],
    "coso": [
     {
      "n": "Imán+",
      "en": "Magnera",
      "pct": null,
      "solo": null
     }
    ]
   },
   {
    "num": 6,
    "normal": [],
    "limitada": [
     {
      "n": "Cura+",
      "en": "Cura",
      "pct": null,
      "solo": null
     }
    ],
    "coso": [
     {
      "n": "Cura+",
      "en": "Cura",
      "pct": null,
      "solo": null
     }
    ]
   },
   {
    "num": 7,
    "normal": [
     {
      "n": "Electro++",
      "en": "Thundaga",
      "pct": null,
      "solo": null
     }
    ],
    "limitada": [
     {
      "n": "Ragnarok",
      "en": "Ragnarok",
      "pct": null,
      "solo": null
     }
    ],
    "coso": [
     {
      "n": "Electro+",
      "en": "Thundara",
      "pct": null,
      "solo": null
     }
    ]
   },
   {
    "num": 8,
    "normal": [],
    "limitada": [
     {
      "n": "Aero++",
      "en": "Aeroga",
      "pct": null,
      "solo": null
     }
    ],
    "coso": [
     {
      "n": "Aero+",
      "en": "Aerora",
      "pct": null,
      "solo": null
     }
    ]
   },
   {
    "num": 9,
    "normal": [
     {
      "n": "Piroembestida",
      "en": "Fire Dash",
      "pct": null,
      "solo": null
     }
    ],
    "limitada": [
     {
      "n": "Carga Pírica",
      "en": "Fire Surge",
      "pct": null,
      "solo": null
     }
    ],
    "coso": [
     {
      "n": "Piroembestida",
      "en": "Fire Dash",
      "pct": null,
      "solo": null
     }
    ]
   },
   {
    "num": 10,
    "normal": [],
    "limitada": [
     {
      "n": "Cisco",
      "en": "Blitz",
      "pct": null,
      "solo": null
     }
    ],
    "coso": [
     {
      "n": "Furia Confusión",
      "en": "Confusion Strike",
      "pct": null,
      "solo": null
     }
    ]
   }
  ]
 }
];
