"""Genera src/data/kh2fm-orfebreria.js: objetos de la Orfebrería Moguri de KH II Final Mix y materiales con sus enemigos.

Uso: python genera_kh2fm_orfebreria.py <raíz-del-proyecto>
- Recetas: KHWiki, plantilla {{SynthKHII}} de cada página de objeto (requisito, rango, EXP, materiales, mejora y material
  de mejora). Si un objeto sale en varias páginas, manda la suya propia. Se descartan las de KH III (sin rango).
- Materiales: wiki inglesa de Fandom, «List of Synthesis Materials» (rango y enemigos con % de caída).
Nombres en castellano: objetos en kh2_objetos y OBJETOS (Megido, Wiki ES: páginas Receta, Armadura y Accesorio), enemigos en
ENEMIGOS (fichas de la Wiki ES con su nombre inglés, ver kh2fm-diario.js).
"""
import sys, re, json, urllib.request, urllib.parse, datetime
from kh2_objetos import objeto, FAM

sys.stdout.reconfigure(encoding='utf-8')  # type: ignore[attr-defined]
raiz = sys.argv[1]
UA = {'User-Agent': 'Mozilla/5.0'}

def api(base, **k):
    k['format'] = 'json'
    return json.load(urllib.request.urlopen(urllib.request.Request(f'{base}?{urllib.parse.urlencode(k)}', headers=UA)))

lim = lambda s: re.sub(r'\[\[(?:[^|\]]*\|)?([^\]]*)\]\]', r'\1', s or '').strip()
slug = lambda s: re.sub(r'[^a-z0-9]+', '-', s.lower().replace("'", '').replace('+', '-plus')).strip('-')

OBJETOS = {  # objetos fabricables que no son materiales ni salen en kh2_objetos
    'Firaga Bangle': 'Brazal Piro++', 'Firagun Bangle': 'Brazal Piro+++', 'Blizzaga Armlet': 'Pulsera Hielo++', 'Blizzagun Armlet': 'Pulsera Hielo+++',
    'Thundaga Trinket': 'Colgante Electro++', 'Thundagun Trinket': 'Colgante Electro+++', 'Midnight Anklet': 'Cadena nocturna', 'Chaos Anklet': 'Cadena del caos',
    'Garnet Ring': 'Anillo granate', 'Diamond Ring': 'Anillo de diamante', 'Mythril Ring': 'Anillo de mitrilo', 'Orichalcum Ring': 'Anillo orichalcum',
    'Acrisius': 'Acrisius', 'Acrisius+': 'Acrisius+', 'Power Band': 'Banda de poder', 'Buster Band': 'Banda inmune',
    'Soldier Earring': 'Aro guerrero', 'Fencer Earring': 'Aro espadachín', 'Mage Earring': 'Aro de mago', 'Slayer Earring': 'Aro asesino',
    "Expert's Ring": 'Anillo de experto', "Master's Ring": 'Anillo maestro', 'Moon Amulet': 'Amuleto lunar', 'Star Charm': 'Talismán estelar',
    'Save the Queen': 'Viva la Reina', 'Save the Queen+': 'Viva la Reina+', 'Save the King': 'Viva el Rey', 'Save the King+': 'Viva el Rey+',
    'Petite Ribbon': 'Pequeña insignia', 'Ribbon': 'Insignia', 'Ultima Weapon': 'Arma Artema', 'Shadow Archive': 'Códice tenebroso',
    'Shadow Archive+': 'Códice tenebroso+', 'Shock Charm': 'Dije galvánico', 'Shock Charm+': 'Dije galvánico+', 'Full Bloom': 'Plenaflor',
    'Full Bloom+': 'Plenaflor+', 'Frozen Pride': 'Orgullo helado', 'Frozen Pride+': 'Orgullo helado+', 'Centurion': 'Centurión', 'Centurion+': 'Centurión+',
    'Lucky Ring': 'Anillo afortunado', 'Megalixir': 'Omnielixir', 'Mega-Ether': 'Omniéter',
}
def nombre(en):
    en = en.replace('Tranquil ', 'Tranquility ')
    if en in OBJETOS: return OBJETOS[en]
    return objeto(en)[0]

# Recetas: (inglés de KHWiki) -> castellano y dónde se consigue (Wiki ES «Receta», cofres de la sección Tesoros, Esencias intangibles).
RECETAS = {
    'Guard Recipe': ('Receta de bloqueo', 'Cofre de la Cueva tenebrosa (Bosque de los Cien Acres).'),
    'King Recipe': ('Receta del rey', 'Cofre del Cementerio de Barcos - Quebrada del Náufrago (Port Royal).'),
    'Mega Recipe': ('Omnireceta', 'Cofre del Cuarto de Bella (Castillo de Bestia).'),
    'Moon Recipe': ('Receta lunar', 'Cofre de las Obras de restauración (Bastión Hueco).'),
    'Queen Recipe': ('Receta de la reina', 'Cofre del Salón del Trono (Tierra de Dragones).'),
    'Recovery Recipe': ('Receta de recarga', 'Cofre del Sendero de montaña (Tierra de Dragones).'),
    'Skill Recipe': ('Receta hábil', 'Cofre del Estudio de Ansem (Bastión Hueco).'),
    'Star Recipe': ('Receta estelar', 'Cofre de los Jardines (Castillo Disney).'),
    'Style Recipe': ('Receta de estilo', 'Cofre de la Colina de las Estrellas (Bosque de los Cien Acres).'),
    'Ultimate Recipe': ('Receta definitiva', 'Cofre de la Vieja mansión - Pasillo del Sótano (Villa Crepúsculo, tercera visita).'),
    'Book of Shadows': ('Receta de tinieblas', 'Al vencer a la Esencia intangible de Zexión (Coliseo del Olimpo).'),
    'Cloaked Thunder': ('Receta iónica', 'Al vencer a la Esencia intangible de Larxene (Port Royal).'),
    'Eternal Blossom': ('Receta imperecedera', 'Al vencer a la Esencia intangible de Marluxia (Castillo de Bestia).'),
    'Rare Document': ('Receta legajo vetusto', 'Al resolver el puzle Luces y sombras.'),
    'Road to Discovery': ('Receta experimental', 'Al vencer a la Esencia intangible de Vexen (Agrabah).'),
    'Strength Beyond Strength': ('Receta trascendental', 'Al vencer a la Esencia intangible de Lexaeus (Villa Crepúsculo).'),
}
LIBRE = {'Obtain five types of materials': 'cinco', 'Obtain 5 types of materials': 'cinco', 'Obtain 20 types of materials': 'veinte',
         'Amateur Moogle (LV1)<br>Obtain 20 different synthesis materials.': 'veinte', 'Superior Moogle (LV8)': 'nivel8',
         'Superior Moogle (LV8)<br>Free Development': 'nivel8'}
GRUPOS = [('cinco', 'Libre desarrollo · 5 tipos de materiales', 'Se abre al entregar 5 tipos de materiales distintos.'),
          ('veinte', 'Libre desarrollo · 20 tipos de materiales', 'Se abre al entregar 20 tipos de materiales distintos.'),
          ('nivel8', 'Libre desarrollo · moguri nivel 8', 'Se abre al llegar al nivel 8 de moguri (Moguri superior).')]

# Enemigos (inglés de Fandom -> castellano). Fichas de la Wiki ES; Mushroom XIII y Lingering Sentiment, de sus páginas.
ENEMIGOS = {
    'Hammer Frame': 'Martillo Furioso', 'Minute Bomb': 'Minuto Explosivo', 'Cannon Gun': 'Cañón', 'Tornado Step': 'Tornado Golpeador',
    'Fat Bandit': 'Bandido Obeso', 'Fiery Globe': 'Globo Fiero', 'Crescendo': 'Claxon Sanador', 'Crimson Jazz': 'Jazz Carmesí',
    'Hook Bat': 'Gancho Vampiro', 'Lance Soldier': 'Lancero', 'Aeroplane': 'Aviador Maligno', 'Hot Rod': 'Coche Loco', 'Fortuneteller': 'Pitonisa',
    'Icy Cube': 'Cubo Helado', 'Living Bone': 'Huesos Vivientes', 'Bolt Tower': 'Torre de Tensión', 'Rapid Thruster': 'Cohete Repentino',
    'Driller Mole': 'Gran Taladro', 'Emerald Blues': 'Blues Esmeralda', 'Armored Knight': 'Armadura Sombría', 'Surveillance Robot': 'Robot Centinela',
    'Devastator': 'Devastador', 'Strafer': 'Bombardero Láser', 'Rabid Dog': 'Perro Rabioso', 'Trick Ghost': 'Ilusión Fantasmal',
    'Graveyard': 'Sepulturero', 'Toy Soldier': 'Soldado de Plomo', 'Wight Knight': 'Osado Caballero', 'Bookmaster': 'Bibliotecario',
    'Magnum Loader': 'Cargador Magno', 'Neoshadow': 'Neosombra', 'Creeper Plant': 'Enredadera', 'Large Body': 'Grandullón',
    'Luna Bandit': 'Bandido Lunar', 'Silver Rock': 'Roca Plateada', 'Aerial Knocker': 'Boxeador Aéreo', 'Shaman': 'Chamán',
    'Morning Star': 'Lucero del Alba', 'Shadow': 'Sombra', 'Soldier': 'Soldado', 'Assault Rider': 'Centauro Fatal', 'Nightwalker': 'Noctámbulo',
    'Gargoyle Knight': 'Gárgola Pétrea', 'Gargoyle Warrior': 'Gárgola Guerrera', 'Air Pirate': 'Pirata Volador', 'Creeper': 'Trepador',
    'Dragoon': 'Dragón', 'Sniper': 'Francotirador', 'Samurai': 'Samurái', 'Berserker': 'Enloquecedor', 'Dusk': 'Umbrío', 'Gambler': 'Tahúr',
    'Dancer': 'Bailarina', 'Assassin': 'Asesino', 'Sorcerer': 'Hechicero', 'Bulky Vendor': 'Vendedor Corpulento', 'Perplex': 'Anzuelo',
    'Iron Hammer': 'Maza Férrica', 'Silent Launcher': 'Lanzador Silente', 'Air Viking': 'Vikingo Volador', 'Magic Phantom': 'Espectro Mágico',
    'Lance Warrior': 'Lancero Audaz', 'Necromancer': 'Necromante', 'Spring Metal': 'Metal Cian', 'Runemaster': 'Arcanista',
    'Mad Bumper': 'Chocador Chiflado', 'Reckless': 'Temerario', 'Mushroom XIII': 'Micorganización XIII', 'Lingering Sentiment': 'Consciencia Latente',
}
CAPSULA = {'Capsule Prize': 'cápsula', 'Rare Capsule': 'cápsula rara', 'Limited Capsule': 'cápsula limitada', 'Prime Capsule': 'cápsula de primera'}
OTRAS_FUENTES = {  # celdas sin enemigos (traducidas)
    'Only obtained through [[item synthesis]] and chests': 'Solo en cofres y fabricándolo.',
    'Only found through chests and events.': 'Solo en cofres y eventos (ver Arma Artema).',
}

def enemigos(celda):
    celda = celda.strip()
    for k, v in OTRAS_FUENTES.items():
        if celda.startswith(k): return [], v
    res, extra = [], []
    for parte in re.split(r',\s*|\n|\)\s+(?=\[\[)', celda):
        parte = parte.strip()
        m = re.match(r"\[\[(?:[^|\]]*\|)?([^\]]*)\]\]\s*(?:\(([^)]*)\)?)?", parte)
        if not m:
            if 'Engine Chamber' in parte: extra.append('Cofre de la Gruta de la Evocación - Sala de Máquinas.')
            elif 'Depths' in parte: extra.append('Cofres de la Gruta de la Evocación.')
            elif 'Absent silhouette' in parte: extra.append('Esencias intangibles.')
            elif 'Replica' in parte: extra.append('Réplicas de la Organización XIII.')
            elif "''Frontier''" in parte: extra.append('Premio del puzle Al filo.')
            continue
        en, info = m.group(1), (m.group(2) or '').strip()
        if en in ('Item synthesis', 'item synthesis'): extra.append('Fabricándolo (Final Mix).'); continue
        if en == 'Puzzle': continue
        if en not in ENEMIGOS: sys.exit(f'Enemigo sin nombre en castellano: {en}')
        if en == 'Bulky Vendor':
            caps = re.findall(r'(Capsule Prize|Rare Capsule|Limited Capsule|Prime Capsule)[^/\d]*?(\d+)%', info)
            info = ' / '.join(f'{CAPSULA[c]} {p} %' for c, p in caps) if caps else ''
        else:
            info = info.replace('%', ' %')
        res.append({'e': ENEMIGOS[en], **({'p': info} if info else {})})
    return res, ' '.join(dict.fromkeys(extra))

# --- Recetas (KHWiki) ---
paginas, cont = [], {}
while True:
    d = api('https://www.khwiki.com/api.php', action='query', list='embeddedin', eititle='Template:SynthKHII', eilimit=500, **cont)
    paginas += [p['title'] for p in d['query']['embeddedin']]
    if 'continue' not in d: break
    cont = {'eicontinue': d['continue']['eicontinue']}
plant = {}
rangos = {}  # rango que da cada página de KHWiki (a veces no coinciden)
for i in range(0, len(paginas), 40):
    d = api('https://www.khwiki.com/api.php', action='query', prop='revisions', rvprop='content', rvslots='main', titles='|'.join(paginas[i:i + 40]))
    for p in d['query']['pages'].values():
        t = p['revisions'][0]['slots']['main']['*']
        for m in re.finditer(r'\{\{SynthKHII(.*?)\n\}\}', t, re.S):
            f = dict(re.findall(r'\|(\w+)=([^\n]*)', m.group(1)))
            if not f.get('rank'): continue  # KH III
            n = f['name']
            rangos.setdefault(n, set()).add(f['rank'])
            if n not in plant or p['title'] == n: plant[n] = f
# KHWiki no pone la mejora en la plantilla del Brazal Piro++, pero sí en su lista de Libre desarrollo (y Megido la confirma).
if plant['Firaga Bangle'].get('upgrade') in (None, '', 'None'):
    plant['Firaga Bangle'].update(upgrade='Firagun Bangle', modifier='Serenity Shard')

def mats(f):
    res = []
    for i in range(1, 6):
        en = f.get(f'mat{i}')
        if not en: continue
        q = f.get(f'qty{i}', '1')
        q = re.sub(r'\{\{FMII\}\}', '', re.sub(r'^\d+\{\{KHII\}\}/', '', q)).strip()  # cantidad de Final Mix
        res.append({'m': nombre(en), 'n': int(q)})
    return res

objetos = []
for en, f in sorted(plant.items(), key=lambda kv: kv[0]):
    req = f.get('requires', '')
    rec = re.search(r'\[\[([^\]|]*)\]\]', req)
    o = {'id': slug(en), 'nombre': nombre(en), 'en': en, 'img': slug(en), 'rango': f['rank'],
         'exp': int(re.sub(r'\{\{KHII\}\}.*', '', re.sub(r'.*/\s*(\d+)\{\{FMII\}\}.*', r'\1', f.get('EXP', '0'))).strip() or 0),
         'mats': mats(f)}
    if rec and rec.group(1) in RECETAS:
        o['receta'], o['donde'] = RECETAS[rec.group(1)]
    elif req in LIBRE:
        o['libre'] = LIBRE[req]
    else:
        sys.exit(f'Requisito desconocido: {en}: {req}')
    if 'Novice Moogle (LV2)' in req: o['nivel'] = 2
    if len(rangos[en]) > 1: o['rangos'] = sorted(rangos[en], key='CBAS'.index)  # las páginas de KHWiki no coinciden
    up = f.get('upgrade')
    if up and up != 'None':
        o['mejora'] = {'id': slug(up), 'nombre': nombre(up), 'en': up, 'img': slug(up), 'con': nombre(f['modifier'])}
    objetos.append(o)
n_obj = len(objetos) + sum(1 for o in objetos if 'mejora' in o)

# --- Materiales (Fandom) ---
t = api('https://kingdomhearts.fandom.com/api.php', action='parse', page='List of Synthesis Materials', prop='wikitext')['parse']['wikitext']['*']
t = t[t.index("==''Kingdom Hearts II''=="):t.index("== ''[[Kingdom Hearts Birth by Sleep]]'' ==")]
materiales = []
for fila in t.split('\n|-')[1:]:
    c = [x.lstrip('|').strip() for x in fila.strip('\n').split('\n|') if x.strip()]
    if len(c) < 3 or c[1] not in ('C', 'B', 'A', 'S'): continue
    en = c[0]
    enem, otra = enemigos(c[2].split('\n|}')[0])
    fam = en.replace('Tranquil ', 'Tranquility ').split(' ')[0]
    if en == 'Tranquil Crystal': otra = 'Con puntuación alta en su reto (guía en castellano).'
    materiales.append({'id': slug(en), 'nombre': nombre(en), 'en': en, 'img': slug(en.replace('Tranquil ', 'Tranquility ')), 'rango': c[1],
                       **({'fam': fam} if fam in FAM else {}), 'enem': enem, **({'otra': otra} if otra else {})})

hoy = datetime.date.today().strftime('%d/%m/%Y')
js = ('// Generado por notas/herramientas/genera_kh2fm_orfebreria.py (no editar a mano). Consultado el ' + hoy + '.\n'
      '// Objetos: KHWiki (plantilla SynthKHII de cada objeto; cantidades de Final Mix). Materiales y enemigos: Fandom (inglés).\n'
      '// libre: grupo de Libre desarrollo; receta/donde: receta que lo abre; mejora: objeto que sale en Creaciones con `con`.\n'
      'export const GRUPOS_LIBRE_KH2FM = ' + json.dumps([{'id': g, 'titulo': t2, 'texto': x} for g, t2, x in GRUPOS], ensure_ascii=False) + ';\n\n'
      'export const SINTESIS_KH2FM = ' + json.dumps(objetos, ensure_ascii=False, indent=1) + ';\n\n'
      'export const MATERIALES_KH2FM = ' + json.dumps(materiales, ensure_ascii=False, indent=1) + ';\n')
open(f'{raiz}/src/data/kh2fm-orfebreria.js', 'w', encoding='utf-8', newline='\n').write(js)
print('OK', len(objetos), 'objetos base,', n_obj, 'con las mejoras;', len(materiales), 'materiales')
