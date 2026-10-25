"""Genera src/data/kh3-sintesis.js: los 88 objetos de la Orfebrería de KH III y los 60 materiales.

Fuentes (se bajan al ejecutarlo):
- PowerPyx «Kingdom Hearts 3 Synthesis Items List»: objetos, requisito y receta.
- KHWiki, página de cada familia de materiales: enemigos que los sueltan (con %), rutas gumi y otras vías.
Las recetas se contrastaron con las plantillas SynthKHIII de KHWiki (25-10-2026): coinciden 83 de 88; las
diferencias van en NOTAS. Nombres en castellano: Wiki ES, emparejados por el nombre japonés con KHWiki.

Uso: python notas/herramientas/genera_kh3_sintesis.py
"""
import html
import json
import re
import sys
import urllib.parse
import urllib.request

sys.stdout.reconfigure(encoding='utf-8')
UA = {'User-Agent': 'kh-guia-personal/1.0'}
SALIDA = 'src/data/kh3-sintesis.js'

# --- Nombres en castellano (Wiki ES). None: sin fuente, se deja en inglés entre «». ---
FAMILIAS = [  # (inglés, id, nombre de la familia, [Guijarro, Roca, Gema, Cristal])
    ('Blazing', 'igneo', 'Ígneo', ['Guijarro Ígneo', 'Roca Ígnea', 'Gema Ígnea', 'Cristal Ígneo']),
    ('Frost', 'frio', 'Frío', ['Guijarro Frío', 'Roca Fría', 'Gema Fría', 'Cristal Frío']),
    ('Lightning', 'luminoso', 'Luminoso', ['Guijarro Luminoso', 'Roca Luminosa', 'Gema Luminosa', 'Cristal Luminoso']),
    ('Lucid', 'claro', 'Claro', ['Guijarro Claro', 'Roca Clara', 'Gema Clara', 'Cristal Claro']),
    ('Pulsing', 'fuerza', 'Fuerza', ['Guijarro de Fuerza', 'Roca de Fuerza', 'Gema de Fuerza', 'Cristal de Fuerza']),
    ('Wellspring', 'poder', 'Poder', ['Guijarro de Poder', 'Roca de Poder', 'Gema de Poder', 'Cristal de Poder']),
    ('Soothing', 'vital', 'Vital', ['Guijarro Vital', 'Roca Vital', 'Gema Vital', 'Cristal Vital']),
    ('Writhing', 'tortuoso', 'Tortuoso', ['Guijarro Tortuoso', 'Roca Tortuosa', 'Gema Tortuosa', 'Cristal Tortuoso']),
    ('Hungry', 'voraz', 'Voraz', ['Guijarro Voraz', 'Roca Voraz', 'Gema Voraz', 'Cristal Voraz']),
    ('Betwixt', 'neutro', 'Neutro', ['Guijarro Neutro', 'Roca Neutra', 'Gema Neutra', 'Cristal Neutro']),
    ('Sinister', 'siniestro', 'Siniestro', ['Guijarro Siniestro', 'Roca Siniestra', 'Gema Siniestra', 'Cristal Siniestro']),
    ('Twilight', 'crepuscular', 'Crepuscular', ['Guijarro Crepuscular', 'Roca Crepuscular', 'Gema Crepuscular', 'Cristal Crepuscular']),
    ('Mythril', 'mythril', '«Mythril»', [None] * 4),
]
TAMANOS = ['Shard', 'Stone', 'Gem', 'Crystal']
SUELTOS = [  # (inglés, página de KHWiki, castellano)
    ('Evanescent Crystal', 'Evanescent Crystal', 'Cristal Evanescente'),
    ('Illusory Crystal', 'Illusory Crystal', 'Cristal Ilusorio'),
    ('Fluorite', 'Fluorite', 'Fluorita'),
    ('Damascus', 'Damascus', 'Damasco'),
    ('Adamantite', 'Adamantite', 'Adamantita'),
    ('Electrum', 'Electrum', 'Electrum'),
    ('Orichalcum', 'Orichalcum', 'Orichalcum'),
    ('Orichalcum+', 'Orichalcum', 'Orichalcum+'),
]

OBJETOS = {  # inglés → (castellano o None, tipo)
    'Mega-Potion': ('Omnipoción', 'objeto'), 'Ether': ('Éter', 'objeto'), 'Hi-Ether': (None, 'objeto'),
    'Mega-Ether': ('Omniéter', 'objeto'), 'Refocuser': (None, 'objeto'), 'Hi-Refocuser': (None, 'objeto'),
    'Elixir': ('Elixir', 'objeto'), 'Megalixir': ('Omnielixir', 'objeto'), 'Strength Boost': ('Fuerza ↑', 'objeto'),
    'Magic Boost': ('Magia ↑', 'objeto'), 'Defense Boost': ('Defensa ↑', 'objeto'), 'AP Boost': ('Impulso Hábil', 'objeto'),
    'Ultima Weapon': ('Arma Artema', 'llave'), 'Warhammer+': ('Mazo de Batalla+', 'baston'), 'Astrolabe+': ('Astrolabio+', 'baston'),
    'Heartless Maul': (None, 'baston'), 'Heartless Maul+': (None, 'baston'), 'Save the Queen': (None, 'baston'),
    'Save the Queen+': (None, 'baston'), 'Clockwork Shield+': ('Escudo Mecánico+', 'escudo'), 'Aegis Shield+': ('Égida+', 'escudo'),
    'Nobody Guard': ('Coraza Incorpórea', 'escudo'), 'Nobody Guard+': ('Coraza Incorpórea+', 'escudo'),
    'Save the King': (None, 'escudo'), 'Save the King+': (None, 'escudo'),
    'Buster Band': ('Banda Inmune', 'proteccion'), 'Buster Band+': ('Banda Inmune+', 'proteccion'),
    'Fire Bangle': ('Brazal Piro', 'proteccion'), 'Fira Bangle': ('Brazal Piro+', 'proteccion'),
    'Firaga Bangle': ('Brazal Piro++', 'proteccion'), 'Firaza Bangle': ('Brazal Piro+++', 'proteccion'),
    'Fire Chain': ('Cadena Piro', 'proteccion'), 'Blizzard Choker': ('Gargantilla Hielo', 'proteccion'),
    'Blizzara Choker': ('Gargantilla Hielo+', 'proteccion'), 'Blizzaga Choker': ('Gargantilla Hielo++', 'proteccion'),
    'Blizzaza Choker': ('Gargantilla Hielo+++', 'proteccion'), 'Blizzard Chain': ('Cadena Hielo', 'proteccion'),
    'Thunder Trinket': ('Colgante Electro', 'proteccion'), 'Thundara Trinket': ('Colgante Electro+', 'proteccion'),
    'Thundaga Trinket': ('Colgante Electro++', 'proteccion'), 'Thundaza Trinket': ('Colgante Electro+++', 'proteccion'),
    'Thunder Chain': ('Cadena Electro', 'proteccion'), 'Shadow Anklet': ('Cadena de Sombra', 'proteccion'),
    'Dark Anklet': ('Cadena Oscura', 'proteccion'), 'Midnight Anklet': ('Cadena Nocturna', 'proteccion'),
    'Chaos Anklet': ('Cadena del Caos', 'proteccion'), 'Dark Chain': ('Cadena Tenebrosa', 'proteccion'),
    'Elven Bandanna': ('Pañuelo de Duende', 'proteccion'), 'Divine Bandanna': ('Pañuelo Divino', 'proteccion'),
    'Aqua Chaplet': ('Pulsera Cristalina', 'proteccion'), 'Wind Fan': ('Abanico de Brisa', 'proteccion'),
    'Storm Fan': ('Abanico de Tormenta', 'proteccion'), 'Aero Armlet': ('Pulsera Aero', 'proteccion'),
    'Acrisius': ('Acrisius', 'proteccion'), 'Acrisius+': ('Acrisius+', 'proteccion'), 'Cosmic Chain': ('Cadena Cósmica', 'proteccion'),
    'Petite Ribbon': ('Pequeña Insignia', 'proteccion'), 'Firefighter Rosette': ('Enseña de Bombero', 'proteccion'),
    'Umbrella Rosette': ('Enseña Lluviosa', 'proteccion'), 'Mask Rosette': ('Enseña Enmascarada', 'proteccion'),
    'Snowman Rosette': ('Enseña Nevada', 'proteccion'), 'Insulator Rosette': ('Enseña de Goma', 'proteccion'),
    'Ability Ring+': ('Anillo Diestro+', 'accesorio'), "Technician's Ring+": ('Anillo Técnico+', 'accesorio'),
    'Skill Ring+': ('Anillo Hábil+', 'accesorio'), 'Cosmic Ring': ('Anillo Cósmico', 'accesorio'),
    'Phantom Ring': ('Anillo Fantasma', 'accesorio'), 'Orichalcum Ring': ('Anillo Orichalcum', 'accesorio'),
    "Sorcerer's Ring": ('Anillo de Hechicero', 'accesorio'), 'Wisdom Ring': ('Anillo Sabio', 'accesorio'),
    "Soldier's Earring": ('Aro Guerrero', 'accesorio'), "Fencer's Earring": ('Aro Espadachín', 'accesorio'),
    "Mage's Earring": ('Aro de Mago', 'accesorio'), "Slayer's Earring": ('Aro Asesino', 'accesorio'),
    'Moon Amulet': ('Amuleto Lunar', 'accesorio'), 'Star Charm': ('Talismán Estelar', 'accesorio'),
    'Draw Ring': ('Anillo Magnético', 'accesorio'),
}
# Erratas de la lista de PowerPyx.
ERRATAS = {'Acrisis+': 'Acrisius+', 'Lighting Crystal': 'Lightning Crystal', 'Hungry Shield': 'Hungry Shard'}
NOTAS = {
    'Ether': 'Disponible desde el principio (PowerPyx dice «1 material»; KHWiki no le pone requisito).',
    'Mega-Ether': 'Receta solo de PowerPyx: KHWiki no la tiene.',
    'Buster Band+': 'PowerPyx y la tabla de KHWiki piden 50 materiales; la ficha del objeto en KHWiki dice 45.',
    'Blizzaga Choker': 'KHWiki pide 5 Guijarros Fríos en vez de 5 Rocas Frías.',
    'Blizzaza Choker': 'KHWiki pide 5 Guijarros Fríos en vez de 5 Rocas Frías y 1 Gema Voraz en vez de 1 Roca Voraz.',
}

ENEMIGOS = {  # Wiki ES (por nombre japonés)
    'Air Droids': 'Robots aéreos', 'Air Soldier': 'Soldado Volador', 'Anchor Raider': 'Ancla Pirata',
    'Beasts & Bugs': 'Bichos y monstruos', 'Berserker': 'Enloquecedor', 'Bizarre Archer': 'Arquero Estrambótico',
    'Bouncy Pets': 'Mascotas saltarinas', 'Chaos Carriage': 'Auriga Desbocado', 'Chief Puff': 'Pelusilla Jefe',
    'Demon Tower': 'Torre Maldita', 'Dusk': 'Umbrío', 'Earth Core': 'Geonúcleo', 'Flame Core': 'Pironúcleo',
    'Flood': 'Aluvión', 'Flowersnake': 'Florisierpe', 'Fluttering': 'Aleteador', 'Focus Popcat': 'Felino Atinado',
    'Frost Serpent': 'Serpiente Gélida', 'Gambler': 'Tahúr', 'Gigas: Gunner Class': 'Gigas Cañón',
    'Gigas: Power Class': 'Gigas Poderoso', 'Gigas: Speed Class': 'Gigas Veloz', 'Gold Beat': 'Bachata Dorada',
    'Helmed Body': 'Gran Yelmo', 'High Soldier': 'Gran Soldado', 'Large Body': 'Grandullón', 'Magic Popcat': 'Felino Mágico',
    'Malachite Bolero': 'Bolero Esmeralda', 'Marine Rumba': 'Rumba Marina', 'Marionette': 'Marioneta',
    'Mechanitaur': 'Mecanitauro', 'Munny Popcat': 'Felino Rico', 'Neoshadow': 'Neosombra', 'Ninja': 'Ninja',
    'Parasol Beauty': 'Dama del Parasol', 'Patchwork Animals': 'Peluches', 'Pogo Shovel': 'Pala Saltarina',
    'Pole Cannon': 'Cañón', 'Popcat': 'Felino', 'Powerwild': 'Primate Y', 'Puffball': 'Pelusilla', 'Reaper': 'Segador',
    'Satyr': 'Sátiro', 'Sea Sprite': 'Espíritu Marino', 'Sea Sprite (Rainbow)': 'Espíritu Marino (arcoíris)',
    'Shadow': 'Sombra', 'Sniper': 'Francotirador', 'Soldier': 'Soldado', 'Sorcerer': 'Hechicero', 'Spear Lizard': 'Lanzagarto',
    'Spiked Turtletoad': 'Tortuga Sapo Picuda', 'Supreme Smasher': 'Superaplastador', 'Tireblade': 'Filo Drenante',
    'Toy Trooper': 'Soldadito de Juguete', 'Turtletoad': 'Tortuga Sapo', 'Vaporfly': 'Mosvaporosa',
    'Vermilion Samba': 'Samba Bermellón', 'Vitality Popcat': 'Felino Vital', 'Water Core': 'Hidronúcleo',
    'Winterhorn': 'Cuerno Hibernal', 'Rock Troll': 'Troll de Roca', 'Metal Troll': 'Troll de Metal',
}
CALIFICADORES = {'Wings': 'alas', 'Tail': 'cola', 'Tower': 'en «Tower»', 'Red': 'rojo', 'Blue': 'azul',
                 'Yellow': 'amarillo', 'Rainbow': 'arcoíris'}
MUNDOS = {'Olympus': 'El Olimpo', 'Twilight Town': 'Villa Crepúsculo', 'Toy Box': 'Caja de juguetes',
          'Kingdom of Corona': 'Reino de Corona', 'Monstropolis': 'Monstruópolis', 'Arendelle': 'Arendelle',
          'The Caribbean': 'El Caribe', 'San Fransokyo': 'San Fransokyo'}
RUTAS_GUMI = {'Starlight Way': '«Starlight Way»', 'Misty Stream': '«Misty Stream»', 'The Eclipse': '«The Eclipse»'}
# Otras vías (KHWiki, «Rewards» y «Other methods»), resumidas a mano. La postal premiada se añade sola.
OTRAS = {
    'Lucid Stone': 'Al volver al Olimpo tras terminarlo, habla con el niño y la niña rescatados en «The Big Olive».',
    'Lucid Gem': 'Al volver al Olimpo tras terminarlo, habla con la mujer rescatada en el Mirador y con las madres rescatadas en «The Big Olive».',
    'Mythril Shard': 'Supera la «Treasure Sphere γ» de la nave gumi (×5).',
    'Mythril Stone': 'Supera la «Treasure Sphere γ» de la nave gumi (×5). Al volver al Olimpo, habla con el hombre rescatado en el Mirador.',
    'Mythril Gem': 'Supera la «Treasure Sphere δ» de la nave gumi (×5). Al volver al Olimpo, habla con el hombre rescatado en los jardines.',
    'Mythril Crystal': 'Supera la «Treasure Sphere ζ» de la nave gumi (×5).',
    'Fluorite': 'Supera las «Treasure Sphere» β (×3), ζ (×5) e ι (×5) de la nave gumi.',
    'Damascus': 'Supera las «Treasure Sphere» ε (×3) y η (×5) de la nave gumi.',
    'Adamantite': 'Supera la «Treasure Sphere η» de la nave gumi (×3).',
    'Electrum': 'Supera la «Treasure Sphere IX» de la nave gumi (×2). En Re Mind, un cofre de «Breezy Quarter».',
    'Hungry Shard': 'Objetivo de coleccionista: reunir 50 materiales en total.',
    'Hungry Stone': 'Objetivos de coleccionista: reunir 100 materiales en total, o tener todos los materiales de clase C.',
    'Hungry Gem': 'Objetivos de coleccionista: reunir 250 materiales en total, tener todos los de clase B, o tener todos los Ígneos, Fríos, Luminosos, Claros, Vitales o de Fuerza.',
    'Hungry Crystal': 'Objetivos de coleccionista: reunir 500 materiales en total, tener todos los de clase A, o tener todos los Tortuosos, Neutros o Crepusculares. En Re Mind, un cofre de «Breezy Quarter».',
    'Orichalcum': 'Objetivos de coleccionista: tener todos los tipos de material, reunir 1000 materiales en total o tener todos los de clase S. También al superar la «Treasure Sphere θ» de la nave gumi.',
    'Orichalcum+': 'Son los 7 que pide el Arma Artema: fotografiar 80 portafortuna, los Siete Flantásticos, los 10 tesoros del Deslizamiento alpino, vencer a Omega Machina, dos cofres y la postal premiada (una sola vez). Todos en la sección Arma Artema.',
    'Wellspring Shard': 'Rango D en Verum Rex: Beat of Lead, Danza solar, Deslizamiento alpino o Cazaluz.',
    'Wellspring Stone': 'Rango C en Verum Rex: Beat of Lead, Danza solar, Deslizamiento alpino o Cazaluz.',
    'Wellspring Gem': 'En Re Mind, un cofre de «Breezy Quarter».',
    'Wellspring Crystal': 'En Re Mind, un cofre de «Breezy Quarter».',
    'Evanescent Crystal': 'Al superar los Portales de Batalla 3 y 9.',
    'Illusory Crystal': 'Al superar los Portales de Batalla 6 y 8. La Torre Maldita solo lo suelta en el Portal de Batalla 8.',
}


def bajar(url):
    return urllib.request.urlopen(urllib.request.Request(url, headers=UA), timeout=60).read().decode('utf-8')


def wikitexto(titulos):
    u = 'https://www.khwiki.com/api.php?' + urllib.parse.urlencode(dict(
        action='query', prop='revisions', rvprop='content', rvslots='main', redirects=1, format='json', titles='|'.join(titulos)))
    j = json.loads(bajar(u))
    return {p['title']: p['revisions'][0]['slots']['main']['*'] for p in j['query']['pages'].values() if 'revisions' in p}


def lista_ppx():
    h = bajar('https://www.powerpyx.com/kingdom-hearts-3-synthesis-items-list/')
    h = h[h.find('entry-content'):h.find('</article>')]
    h = re.sub(r'<br\s*/?>|</p>|</li>|</h\d>', '\n', h)
    h = re.sub(r'<h(\d)[^>]*>', lambda m: '\n' + '#' * int(m.group(1)) + ' ', h)
    h = html.unescape(re.sub(r'<[^>]+>', '', h)).replace('\xa0', ' ')
    objetos, cat = [], None
    for l in (re.sub(r'\s+', ' ', x).strip() for x in h.split('\n')):
        if l.startswith('## '):
            cat = l[3:]
            continue
        if not cat or l.startswith('That'):
            continue
        m = re.match(r'^(\d+) ?x ?(.+)$', l)
        if m and objetos:
            objetos[-1]['mats'].append([ERRATAS.get(m[2].strip(), m[2].strip()), int(m[1])])
            continue
        m = re.match(r'^(.+?) [–-] (.+)$', l)
        if m:
            en = ERRATAS.get(m[1].strip(), m[1].strip()).replace('’', "'")
            req = m[2]
            n = re.search(r'Obtain (\d+)', req)
            f = re.search(r'Photo Mission #(\d+)', req)
            objetos.append({'en': en, 'req': 0 if en == 'Ether' else int(n[1]) if n else 0,
                            'foto': int(f[1]) if f else None, 'mats': []})
    return objetos


def slug(t):
    return re.sub(r'[^a-z0-9]+', '-', t.lower().replace('+', '-plus').replace("'", '')).strip('-')


def drops(seccion, en):
    """Enemigos, rutas gumi y mundos de la línea «Drops» de un material."""
    m = re.search(r"\*'''" + re.escape(en) + r"''':([^\n]*)", seccion)
    if not m:
        return [], [], []
    linea = re.sub(r'<ref.*?(</ref>|/>)', '', m[1])
    enem, gumi, mundos = [], [], []
    for parte in re.split(r',\s*(?=\[\[|Asteroids)', linea):
        parte = parte.strip().rstrip('.')
        n = re.search(r'\[\[([^\]|]+)', parte)
        if not n:
            continue
        nombre = n[1]
        pct = re.search(r'\(([\d.]+)%\)', parte)
        cal = re.search(r'\]\]\s*\((Wings|Tail|Tower|Red|Blue|Yellow|Rainbow)\)', parte)
        p = pct[1].replace('.', ',') + ' %' if pct else ''
        if nombre in RUTAS_GUMI:
            gumi.append({'r': RUTAS_GUMI[nombre], 'p': p})
        elif nombre in MUNDOS:
            mundos.append(MUNDOS[nombre])
        elif nombre in ENEMIGOS:
            es = ENEMIGOS[nombre] + (f' ({CALIFICADORES[cal[1]]})' if cal else '')
            enem.append({'e': es, 'en': nombre, 'p': p})
        else:
            print('Enemigo sin nombre en castellano:', nombre)
    return enem, gumi, mundos


def main():
    paginas = wikitexto([f[0] for f in FAMILIAS] + sorted({s[1] for s in SUELTOS}))
    secciones = {}
    for t, w in paginas.items():
        m = re.search(r"===\s*''Kingdom Hearts III''\s*===(.*?)(?=\n===\s*''|\n==[^=])", w, re.S)
        secciones[t] = m[1] if m else ''
    materiales, grupos = [], []

    def material(en, nombre, pagina, familia):
        sec = secciones.get(pagina, '')
        drops_sec = re.search(r'====Drops====(.*?)(?=====|$)', sec, re.S)
        enem, gumi, mundos = drops(drops_sec[1] if drops_sec else sec, en)
        otras = [OTRAS[en]] if en in OTRAS else []
        post = re.search(re.escape(en) + r' x(\d+) is one of the possible \[\[Prize Postcard', sec)
        if post:
            otras.append(f'Premio posible de la postal premiada («Prize Postcard»), ×{post[1]}.')
        materiales.append({'id': slug(en), 'en': en, 'nombre': nombre or f'«{en}»', 'familia': familia,
                           'enemigos': enem, 'gumi': gumi, 'mundos': mundos, 'otras': otras})

    for en_f, fid, fnom, nombres in FAMILIAS:
        ids = []
        for tam, nom in zip(TAMANOS, nombres):
            material(f'{en_f} {tam}', nom, en_f, fid)
            ids.append(materiales[-1]['id'])
        grupos.append({'id': fid, 'nombre': fnom, 'en': en_f, 'materiales': ids})
    ids = []
    for en, pag, nom in SUELTOS:
        material(en, nom, pag, 'otros')
        ids.append(materiales[-1]['id'])
    grupos.append({'id': 'otros', 'nombre': 'Minerales y cristales especiales', 'en': '', 'materiales': ids})

    por_en = {m['en']: m['id'] for m in materiales}
    objetos = []
    for o in lista_ppx():
        es, tipo = OBJETOS.get(o['en'], (None, 'material'))
        if o['en'] in por_en:  # material sintetizable: mismo nombre que en la lista de materiales
            es = next(m['nombre'] for m in materiales if m['en'] == o['en'])
        for mat, _ in o['mats']:
            if mat not in por_en:
                sys.exit(f'Material desconocido en la receta de {o["en"]}: {mat}')
        objetos.append({'id': slug(o['en']), 'en': o['en'], 'nombre': es or f'«{o["en"]}»', 'tipo': tipo,
                        'req': o['req'], 'foto': o['foto'], 'mats': [[por_en[m], q] for m, q in o['mats']],
                        **({'nota': NOTAS[o['en']]} if o['en'] in NOTAS else {})})
    if len(objetos) != 88 or len(materiales) != 60:
        sys.exit(f'Se esperaban 88 objetos y 60 materiales: {len(objetos)} y {len(materiales)}')

    cab = ('// GENERADO por notas/herramientas/genera_kh3_sintesis.py: no editar a mano.\n'
           '// Objetos de la Orfebrería (PowerPyx, contrastado con KHWiki) y materiales con sus enemigos (KHWiki).\n'
           '// Nombres: Wiki ES (emparejados por el nombre japonés); sin fuente, inglés entre «».\n')
    js = (cab + 'export const MATERIALES_KH3 = ' + json.dumps(materiales, ensure_ascii=False, indent=1) + ';\n'
          + 'export const FAMILIAS_KH3 = ' + json.dumps(grupos, ensure_ascii=False, indent=1) + ';\n'
          + 'export const SINTESIS_KH3 = ' + json.dumps(objetos, ensure_ascii=False, indent=1) + ';\n')
    open(SALIDA, 'w', encoding='utf-8').write(js)
    print('OK', len(objetos), 'objetos,', len(materiales), 'materiales')


if __name__ == '__main__':
    main()
