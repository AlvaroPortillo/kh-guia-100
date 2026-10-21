"""Cofres de BBS Final Mix por personaje, mundo y zona → src/data/bbs-tesoros.js.

Uso: python -I genera_tesoros.py <carpeta con terra.csv, ventus.csv y aqua.csv> <mapa_final.json> <salida.js>
Los CSV son las pestañas «Treasures (…)» de la hoja de la guía de Steam 3292773479 (pub?output=csv&gid=…):
Terra 975596894, Ventus 365800669, Aqua 1064991529.
Nombres de comandos: mapa_final.json (castellano→inglés, ver investigacion-builds.md). Objetos y cristales: guía de
Steam en castellano 3300421820 (mismo orden que KHWiki). Recetas y algunas zonas: Wiki ES «Receta». El resto de zonas,
traducidas (ZONA_TRAD).
"""
import sys, csv, json, re, unicodedata

sys.stdout.reconfigure(encoding='utf-8')
D, MAPA, SALIDA = sys.argv[1:4]

MUNDOS = {'The Land of Departure': 'Tierra de Partida', 'Enchanted Dominion': 'Reino Encantado', 'Dwarf Woodlands': 'Bosque de los Enanitos',
          'Castle of Dreams': 'Castillo de los Sueños', 'The Mysterious Tower': 'Torre de los Misterios', 'Radiant Garden': 'Vergel Radiante',
          'Disney Town': 'Ciudad Disney', 'Olympus Coliseum': 'Coliseo del Olimpo', 'Deep Space': 'Espacio Profundo',
          'Never Land': 'País de Nunca Jamás', 'The Keyblade Graveyard': 'Necrópolis de Llaves Espada', 'Realm of Darkness': 'Reino de la Oscuridad'}
ZONA_ES = {"Pete's Rec Room": 'Sala de Juegos de Pete', 'Aqueduct': 'Acueducto', "Cinderella's Room": 'Habitación de Cenicienta',
           "Merlin's House": 'Casa de Merlín', 'Mysterious Tower': 'Torre de los Misterios',
           'Lower Zone': 'Zona Inferior', 'Middle Zone': 'Zona Media', 'Upper Zone': 'Zona Superior',  # Wiki ES — Reino de la Oscuridad
           'Tower Room': 'Desván de la Torre', 'Underground Waterway': 'Canales Subterráneos', 'Tower Entrance': 'Entrada a la Torre',
           'Gizmo Gallery': 'Salón de los Artilugios', 'Coliseum Gates': 'Puertas del Coliseo', "Peter's Hideout": 'Escondite de Peter',  # Wiki ES — Receta
           'Main Plaza': 'Plaza Mayor',  # guía de Steam en castellano
           ('Dwarf Woodlands', 'Courtyard'): 'Patio del Palacio'}  # Wiki ES — Cura (cofre de Lluvia Piro++)
# Sin nombre oficial comprobado: traducción propia (el usuario la pidió el 21-10-2026). Se marcan con `zt` y la web
# enseña el nombre inglés al pasar el ratón. «Montaña Prohibida» y «Roca Calavera», como en el doblaje de las películas.
ZONA_TRAD = {
    'Antechamber': 'Antecámara', 'Audience Chamber': 'Sala de Audiencias', "Aurora's Chamber": 'Alcoba de Aurora',
    'Ballroom': 'Salón de Baile', 'Castle Town': 'Villa del Castillo', 'Central Square': 'Plaza Central',
    'Cliff Path': 'Senda del Acantilado', 'Control Room': 'Sala de Control', 'Cottage Clearing': 'Claro de la Casita',
    'Courtyard': 'Patio', 'Cove': 'Cala', 'Deep Woods': 'Bosque Profundo', 'Dungeon': 'Mazmorra', 'Dungeon Cell': 'Celda',
    'Durgon Transporter': 'Transportador de Durgon', 'Flower Glade': 'Prado Florido', 'Forbidden Mountain': 'Montaña Prohibida',
    'Forest Clearing': 'Claro del Bosque', 'Fountain Court': 'Patio de la Fuente', 'Foyer': 'Recibidor',
    'Front Doors': 'Puertas Principales', 'Gardens': 'Jardines', 'Gates': 'Puertas del Castillo', 'Gully': 'Barranco',
    'Hall': 'Gran Salón', 'Hallway': 'Pasillo', 'Jungle Clearing': 'Claro de la Selva', 'Launch Deck': 'Plataforma de Lanzamiento',
    'Machinery Bay': 'Sala de Máquinas', 'Machinery Bay Access': 'Acceso a la Sala de Máquinas', "Maleficent's Throne": 'Trono de Maléfica',
    'Mermaid Lagoon': 'Laguna de las Sirenas', 'Mountain Path': 'Camino de la Montaña', 'Mountain Trail': 'Sendero de la Montaña',
    'Mousehole': 'Ratonera', 'Outer Gardens': 'Jardines Exteriores', 'Palace Courtyard': 'Patio del Palacio',
    'Purification Facility': 'Planta Depuradora', 'Raceway': 'Circuito', 'Rainbow Falls: Ascent': 'Cascadas del Arcoíris: Subida',
    'Rainbow Falls: Base': 'Cascadas del Arcoíris: Pie', 'Rainbow Falls: Crest': 'Cascadas del Arcoíris: Cima', 'Seacoast': 'Costa',
    'Seat of War': 'Sede de la Guerra', 'Ship Corridor': 'Pasillo de la Nave', 'Ship Hub': 'Centro de la Nave',
    'Skull Rock: Cavern': 'Roca Calavera: Caverna', 'Skull Rock: Entrance': 'Roca Calavera: Entrada', 'Summit': 'Cumbre',
    'The Chateau': 'El Palacete', 'The Cottage': 'La Casita', 'The Mine': 'La Mina', 'Turo Prison Block': 'Bloque Penitenciario de Turo',
    'Turo Transporter': 'Transportador de Turo', 'Twister Trench': 'Fosa de los Tornados', 'Vault': 'Cámara', 'Vestibule': 'Vestíbulo',
    'Wardrobe Room': 'Vestidor', 'Waterside': 'Ribera',
}
OBJETOS = {'Potion': 'Poción', 'Hi-Potion': 'Ultrapoción', 'Mega-Potion': 'Omnipoción', 'Ether': 'Éter', 'Mega-Ether': 'Omniéter',
           'Panacea': 'Panacea', 'Elixir': 'Elixir', 'Megalixir': 'Omnielixir', 'Balloon Letter': 'Globo Recadero'}
CRISTALES = {'Shimmering': 'Puro', 'Fleeting': 'Temporal', 'Pulsing': 'de Fuerza', 'Wellspring': 'de Poder', 'Soothing': 'Vital',
             'Hungry': 'Voraz', 'Abounding': 'Hermanador'}
RECETAS = {'Attack Recipe': 'Receta Ofensiva', 'Block Recipe': 'Receta de Bloqueo', 'Magic Recipe': 'Receta Mágica',
           'Action Recipe': 'Receta de Acción', 'Mega Attack Recipe': 'Receta Ofensiva+', 'Mega Magic Recipe': 'Receta Mágica+'}
ERRATAS = {'Bllizzard': 'Blizzard', 'Abounding Crytsal': 'Abounding Crystal', 'Fleeing Crystal': 'Fleeting Crystal',
           'Wellspring Crystsal': 'Wellspring Crystal'}
ROMANOS = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII', 'XIII']

mapa = json.load(open(MAPA, encoding='utf-8'))['mapa']
COMANDOS = {}
for es, v in mapa.items():
    en = v if isinstance(v, str) else v.get('en')
    if en: COMANDOS.setdefault(en, es)

slug = lambda s: re.sub(r'[^a-z0-9]+', '-', ''.join(c for c in unicodedata.normalize('NFD', s.lower()) if not unicodedata.combining(c))).strip('-')

def contenido(en):
    en = ERRATAS.get(en, en)
    if en in COMANDOS: return COMANDOS[en], 'comando'
    if en in OBJETOS: return OBJETOS[en], 'objeto'
    if en in RECETAS: return RECETAS[en], 'receta'
    if en == 'Map': return 'Mapa', 'mapa'
    m = re.fullmatch(r"Xehanort's Report (\d+)", en)
    if m: return f'Informe Xehanort {ROMANOS[int(m.group(1))]}', 'informe'
    m = re.fullmatch(r'(\w+) Crystal', en)
    if m and m.group(1) in CRISTALES: return f'Cristal {CRISTALES[m.group(1)]}', 'cristal'
    return f'«{en}»', 'cristal' if en.endswith('Crystal') else 'objeto'

res, sin = {}, set()
for pj in ('terra', 'ventus', 'aqua'):
    mundos, mundo, extra_mundo = [], None, False
    for r in csv.reader(open(f'{D}/{pj}.csv', encoding='utf-8')):
        if len(r) < 4: continue
        if r[0] in ('FALSE', 'TRUE'):
            nombre, tipo = contenido(r[1].strip())
            if nombre.startswith('«'): sin.add(r[1])
            zona_en = r[2].strip()
            es = ZONA_ES.get((en_mundo, zona_en)) or ZONA_ES.get(zona_en)
            t = {'c': nombre, 'tipo': tipo, 'zona': es or ZONA_TRAD.get(zona_en, f'«{zona_en}»'), 'zona_en': zona_en}
            if not es and zona_en in ZONA_TRAD: t['zt'] = True
            if extra_mundo or 'does not count' in r[3]: t['extra'] = True
            base = f'{slug(zona_en)}.{slug(nombre)}'
            n = sum(1 for x in mundo['tesoros'] if x['id'].startswith(base))
            t['id'] = base + (f'-{n + 1}' if n else '')
            mundo['tesoros'].append(t)
        elif r[0] == '' and r[1] and not r[2] and r[1] != 'Reward' and 'Treasure' not in r[1] and 'video' not in r[1]:
            en = en_mundo = r[1].split(' (')[0].strip()
            extra_mundo = '(' in r[1]
            mundo = {'id': slug(MUNDOS[en]), 'mundo': MUNDOS[en], 'tesoros': []}
            if extra_mundo: mundo['extra'] = True
            mundos.append(mundo)
    res[pj] = mundos
    total = sum(1 for m in mundos for t in m['tesoros'] if not t.get('extra'))
    print(pj, total, 'cuentan;', sum(len(m['tesoros']) for m in mundos), 'en total')

print('Sin nombre en castellano:', sorted(sin))
cab = ('// Cofres de BBS Final Mix por personaje y mundo. GENERADO (notas/herramientas/genera_tesoros.py); no editar a mano.\n'
       '// Fuente: hoja de la guía de Steam 3292773479 (cofres, zona y orden). Nombres: mapa de comandos, guía de Steam en\n'
       '// castellano 3300421820 y Wiki ES. `zt`: zona sin nombre oficial comprobado, traducida (`zona_en`: original).\n'
       '// `extra`: no cuenta para el 100 %.\n')
open(SALIDA, 'w', encoding='utf-8').write(cab + 'export const TESOROS = ' + json.dumps(res, ensure_ascii=False, indent=1) + ';\n')
