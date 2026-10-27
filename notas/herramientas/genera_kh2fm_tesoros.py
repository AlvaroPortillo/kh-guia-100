"""Genera src/data/kh2fm-tesoros.js: cofres, piezas de puzle y mapas de KH II Final Mix.

Uso: python genera_kh2fm_tesoros.py <raíz-del-proyecto>
Descarga de las wikis (API de MediaWiki):
  - Cofres: wiki inglesa de Fandom, «Kingdom Hearts II item locations» (contenido de Final Mix: el segundo objeto de cada
    celda «original <br> Final Mix»). Sin la Villa Crepúsculo simulada: los cofres de Roxas no cuentan para el diario.
  - Piezas de puzle y mapas: KHWiki, «Puzzle» y «Map».
Nombres en castellano: objetos en kh2_objetos (Megido, guía de Steam en castellano y Wiki ES), zonas en ZONAS (abajo) e
indicaciones traducidas en kh2fm_trad_cofres.py y kh2fm_trad_puzles.py.
"""
import sys, re, json, urllib.request, urllib.parse, datetime
from kh2_objetos import objeto, FIJOS
from kh2fm_trad_cofres import COMO
from kh2fm_trad_puzles import NOTA, MUNDO_PUZLE

sys.stdout.reconfigure(encoding='utf-8')  # type: ignore[attr-defined]
raiz = sys.argv[1]
UA = {'User-Agent': 'Mozilla/5.0'}

def wikitext(api, pagina):
    q = urllib.parse.urlencode({'action': 'parse', 'page': pagina, 'prop': 'wikitext', 'format': 'json', 'redirects': 1})
    return json.load(urllib.request.urlopen(urllib.request.Request(f'{api}?{q}', headers=UA)))['parse']['wikitext']['*']

lim = lambda s: re.sub(r"\{\{c\|([^|}]*)\|[^}]*\}\}", r'\1', re.sub(r'\[\[(?:[^|\]]*\|)?([^\]]*)\]\]', r'\1', s)).strip()

# Mundos: id (el de MUNDOS_KH2FM) y nombre.
MUNDOS = {
    'Twilight Town': ('villa-crepusculo', 'Villa Crepúsculo'), 'Hollow Bastion': ('vergel-radiante', 'Bastión Hueco'),
    'The Land of Dragons': ('tierra-de-dragones', 'Tierra de Dragones'), "Beast's Castle": ('castillo-de-bestia', 'Castillo de Bestia'),
    'Olympus Coliseum': ('coliseo-del-olimpo', 'Coliseo del Olimpo'), 'Disney Castle': ('castillo-disney', 'Castillo Disney'),
    'Timeless River': ('rio-eterno', 'Río Eterno'), '100 Acre Wood': ('bosque-de-los-cien-acres', 'Bosque de los Cien Acres'),
    'Port Royal': ('port-royal', 'Port Royal'), 'Agrabah': ('agrabah', 'Agrabah'), 'Halloween Town': ('ciudad-de-halloween', 'Ciudad de Halloween'),
    'Pride Lands': ('tierras-del-reino', 'Tierras del Reino'), 'Space Paranoids': ('espacio-paranoico', 'Espacio Paranoico'),
    'Atlantica': ('atlantica', 'Atlántica'), 'The World That Never Was': ('mundo-inexistente', 'El Mundo Inexistente'),
}

# Zonas: clave normalizada (ver norm) -> (castellano, fuente). Fuente None = traducida (la web enseña el nombre inglés).
# meg = guía de Megido (GameFAQs 82144); wes = Wiki ES; guia = guía de logros en castellano de Steam; elite = guía de KH II de
# EliteGuías; khworld = guía paso a paso de KHWorld; joako = guía de KH II del blog de Joakokh.
ZONAS = {
    'old mansion': ('Vieja mansión', 'meg'), 'woods': ('Bosque', 'meg'), 'tram common': ('Calle del Mercado - Plazoleta del Tranvía', 'meg'),
    'central station': ('Estación Central', 'meg'), 'tower': ('Torre', 'meg'), 'tower: entryway': ('Torre - Entrada', 'meg'),
    "tower: sorcerer's loft": ('Torre - Desván del hechicero', 'meg'), 'tower: wardrobe': ('Torre - Vestidor', 'meg'),
    'mansion: foyer': ('Vieja mansión - Recibidor', 'wes'), 'mansion: dining room': ('Vieja mansión - Comedor', 'wes'),
    'mansion: library': ('Vieja mansión - Biblioteca', 'wes'), 'mansion: basement corridor': ('Vieja mansión - Pasillo del Sótano', 'wes'),
    'mansion: computer room': ('Vieja mansión - Sala de Ordenadores', 'wes'), 'mansion: pod room': ('Vieja mansión - Cuarto de la Cápsula', 'wes'),
    'mansion: white room': ('Vieja mansión - Cuarto Blanco', 'wes'), 'sunset terrace': ('Terrazas del Atardecer', 'wes'),
    'tunnelway': ('Túneles', None), 'underground concourse': ('Galería subterránea', None), 'station heights': ('Calle del Mercado - Altos de la Estación', 'elite'),
    'station plaza': ('Plaza de la Estación', 'elite'), 'sunset hill': ('Colina del Atardecer', 'elite'),
    'borough': ('Zona residencial', 'meg'), 'postern': ('Postigo', 'meg'), 'corridors': ('Pasillos', 'meg'), "ansem's study": ('Estudio de Ansem', 'meg'),
    'crystal fissure': ('Quebrada de Cristal', 'meg'), 'restoration site': ('Obras de restauración', 'meg'), 'bailey': ('Patio interior', 'meg'),
    'marketplace': ('Mercado', 'meg'), "merlin's house": ('Casa de Merlín', 'meg'), 'heartless manufactory': ('Fábrica de Sincorazón', None),
    'cavern of remembrance: depths': ('Gruta de la Evocación - Entrañas', 'wes'), 'cavern of remembrance: mineshaft': ('Gruta de la Evocación - Galerías', 'wes'),
    'cavern of remembrance: mining area': ('Gruta de la Evocación - Minas', 'wes'), 'cavern of remembrance: engine chamber': ('Gruta de la Evocación - Sala de Máquinas', 'wes'),
    'cavern of remembrance: garden of assemblage': ('Edén de la Convergencia', 'wes'),
    'bamboo grove': ('Bosque de bambú', 'meg'), 'checkpoint': ('Puesto de control', 'meg'), 'mountain trail': ('Sendero de montaña', 'meg'),
    'village cave': ('Cueva', 'meg'), 'ridge': ('Cresta', 'meg'), 'throne room': ('Salón del Trono', 'wes'), 'encampment': ('Campamento', 'meg'),
    'village': ('Aldea', 'meg'),
    'courtyard@castillo-de-bestia': ('Patio', 'meg'), "belle's room": ('Cuarto de Bella', 'meg'), 'east wing': ('Ala este', 'meg'),
    'west hall': ('Corredor oeste', 'meg'), 'dungeon': ('Mazmorra', 'meg'), 'west wing': ('Ala oeste', 'meg'), "beast's room": ('Cuarto de Bestia', 'meg'),
    'secret passage': ('Pasadizo secreto', 'meg'), 'underground passage': ('Pasadizo secreto', 'meg'), 'undercroft': ('Sótano', 'meg'),
    'entrance hall': ('Vestíbulo', 'wes'), 'bridge': ('Puente', 'wes'),
    'underworld entrance': ('Entrada del Inframundo', 'meg'), 'cave of the dead: passage': ('Cueva de los Muertos - Túneles', 'meg'),
    'cave of the dead: inner chamber': ('Cueva de los Muertos - Cámara interior', 'meg'), 'cave of the dead: entrance': ('Cueva de los Muertos - Entrada', 'meg'),
    'underworld caverns: entrance': ('Cavernas del Inframundo - Entrada', 'meg'), 'underworld caverns: lost road': ('Cavernas del Inframundo - Senda de la Perdición', 'meg'),
    'underworld caverns: atrium': ('Cavernas del Inframundo - Atrio', 'meg'), 'lock': ('Sala del Sello', 'meg'),
    'courtyard@castillo-disney': ('Jardines', 'meg'), 'library': ('Biblioteca', 'meg'), 'colonnade': ('Pórtico', 'elite'), 'gummi hangar': ('Hangar gumi', 'wes'),
    'cornerstone hill': ('Colina de la Piedra Angular', 'meg'), 'pier': ('Muelle', 'meg'), 'waterway': ('Canal', 'meg'),
    'rampart': ('Baluarte', 'meg'), 'town': ('Ciudad', 'meg'), 'isla de muerta: cave mouth': ('Isla de Muerta - Boca de la gruta', 'meg'),
    'isla de muerta: powder store': ('Isla de Muerta - Polvorín', 'meg'), 'isla de muerta: moonlight nook': ('Isla de Muerta - Claro de luna', 'meg'),
    'harbor': ('Puerto', 'wes'), 'ship graveyard: seadrift row': ('Cementerio de Barcos - Quebrada del Náufrago', 'wes'),
    'ship graveyard: seadrift keep': ('Cementerio de Barcos - Fortín de Despojos', 'khworld'),
    "ship graveyard: interceptor's hold": ('Cementerio de Barcos - Bodega del Interceptor', 'elite'),
    'black pearl': ('Perla Negra', 'wes'), "black pearl: captain's stateroom": ('Perla Negra - Camarote del capitán', 'elite'),
    'agrabah': ('Agrabah', 'meg'), 'bazaar': ('Bazar', 'meg'), 'palace walls': ('Puertas del palacio', 'meg'),
    'cave of wonders: entrance': ('Cueva de las Maravillas - Entrada', 'meg'), 'cave of wonders: valley of stone': ('Cueva de las Maravillas - Valle de piedra', 'meg'),
    'cave of wonders: chasm of challenges': ('Cueva de las Maravillas - Abismo de los Desafíos', 'meg'),
    'cave of wonders: treasure room': ('Cueva de las Maravillas - Sala del tesoro', 'meg'), 'ruined chamber': ('Cámara en Ruinas', 'wes'),
    'sandswept ruins': ('Ruinas Enterradas', 'elite'),
    'graveyard': ('Cementerio', 'meg'), 'town square': ('Plaza de la Guillotina', 'meg'), "dr. finkelstein's lab": ('Laboratorio del Dr. Finkelstein', 'meg'),
    'hinterlands': ('Tierras Remotas', 'meg'), 'candy cane lane': ('Calle de los Dulces', 'meg'), "santa's house": ('Casa de Santa Claus', 'meg'),
    'yuletide hill': ('Colina de las Navidades', 'meg'), 'curly hill': ('Colina de la Espiral', 'joako'),
    'toy factory: shipping and receiving': ('Taller de juguetes - Sala de clasificación', 'elite'),
    'gorge': ('Garganta', 'meg'), 'elephant graveyard': ('Cementerio de los Elefantes', 'meg'), 'pride rock': ('Roca del Clan', 'meg'),
    'wildebeest valley': ('Valle del Ñu', 'meg'), 'wastelands': ('Tierras baldías', 'meg'), 'jungle': ('Jungla', 'meg'), 'oasis': ('Oasis', 'meg'),
    "king's den": ('Cubil del Rey', 'meg'),
    'pit cell': ('Celda', 'meg'), 'canyon': ('Cañón', 'meg'), 'i/o tower: hallway': ('Torre I/O - Corredor', 'meg'),
    'i/o tower: communications room': ('Torre I/O - Sala de comunicaciones', 'meg'), 'central computer mesa': ('Loma del Ordenador', 'wes'),
    'central computer core': ('Núcleo del Ordenador', 'elite'), 'solar sailer simulation': ('Simulación del navegador solar', 'elite'),
    "pooh bear's house": ('Casa de Winnie Pooh', 'meg'), "piglet's house": ('Casa de Piglet', 'meg'), "rabbit's house": ('Casa de Conejo', 'meg'),
    "kanga's house": ('Casa de Cangu', 'meg'), 'spooky cave': ('Cueva tenebrosa', 'meg'), 'starry hill': ('Colina de las Estrellas', 'wes'),
    'undersea courtyard': ('Patio submarino', None), "triton's throne": ('Trono de Tritón', None),
    'fragment crossing': ('Pasaje de la Otredad', 'elite'), "memory's skyscraper": ('Rascacielos de los Recuerdos', 'wes'),
    'brink of despair': ('Umbral de la Desesperanza', 'guia'), "nothing's call": ('Llamada de la Nada', 'wes'), "twilight's view": ('Vista Crepuscular', 'wes'),
    "naught's skyway": ('Senda del No Ser', 'wes'), "ruin and creation's passage": ('Pasaje de la Ruina y la Creación', 'wes'),
    'crooked ascension': ('Ascensión Maldita', 'wes'), 'proof of existence': ('Prueba de Existencia', 'wes'),
}
AMBIGUAS = {'courtyard'}

def norm(z):
    z = z.replace('’', "'").strip().lower()
    z = re.sub(r'^the ', '', z); z = re.sub(r': the ', ': ', z)
    z = z.replace('isle de muerta', 'isla de muerta').replace('underworld cavern:', 'underworld caverns:').replace('spookey', 'spooky')
    z = z.replace('mansion foyer', 'mansion: foyer').replace('market street: ', '').replace('halloween town square', 'town square')
    z = z.replace("nothing's cell", "nothing's call")  # errata de Fandom: la zona es Nothing's Call (KHWiki)
    return z

def zona(en, mundo_id):
    k = norm(en)
    if k in AMBIGUAS: k = f'{k}@{mundo_id}'
    es, fuente = ZONAS[k]
    return {'zona': es, **({} if fuente else {'zt': True, 'en': en.replace('’', "'")})}

VISITAS = {'First visit': 'Primera visita', 'Second visit': 'Segunda visita', 'Third visit': 'Tercera visita', 'Fourth visit': 'Cuarta visita'}

# --- Cofres ---
t = wikitext('https://kingdomhearts.fandom.com/api.php', 'Kingdom Hearts II item locations')
partes = re.split(r'\n==([^=].*?)==\n', t)
filas = []
for i in range(1, len(partes), 2):
    mundo, cuerpo = partes[i].strip(), partes[i + 1]
    if mundo == 'Simulated Twilight Town': continue
    visita = zona_en = None; quedan = 0
    for fila in cuerpo.split('\n|-')[1:]:
        fila = fila.strip('\n')
        m = re.match(r'!\s*colspan=\d+\s*\|\s*(.*)', fila)
        if m: visita = m.group(1).strip(); continue
        if not fila.startswith('|'): continue
        celdas = [c.strip() for c in re.split(r'\s*\|\|\s*', fila.lstrip('|').split('\n|}')[0])]
        if quedan == 0:
            mz = re.match(r'rowspan="?(\d+)"?\s*\|\s*(.*)', celdas[0])
            zona_en, quedan = (mz.group(2), int(mz.group(1))) if mz else (celdas[0], 1)
            celdas = celdas[1:]
        quedan -= 1
        filas.append((mundo, visita, zona_en, celdas[0]))
if len(filas) != len(COMO):
    sys.exit(f'La tabla de Fandom tiene {len(filas)} cofres y hay {len(COMO)} indicaciones traducidas: revisar.')

tesoros = {}
mapa_en_cofre = {}
for (mundo, visita, zona_en, item), como in zip(filas, COMO):
    mid, mnom = MUNDOS[mundo]
    w = tesoros.setdefault(mid, {'id': mid, 'nombre': mnom, 'cofres': []})
    en_item = lim(item.split('<br>')[-1])
    obj, trad = objeto(item)
    c = {'n': len(w['cofres']) + 1, **zona(zona_en, mid)}
    if obj is None:
        mapa_en_cofre[en_item] = f'{mid}.{c["n"]}'
        c['mapa'] = en_item
    else:
        c['obj'] = obj
        if trad: c['objt'] = en_item
    if visita in VISITAS: c['visita'] = VISITAS[visita]
    elif visita and 'Final Mix' in visita: c['fm'] = True
    c['como'] = como
    w['cofres'].append(c)

# --- Mapas ---
NOMBRE_MAPA = {  # (castellano, con fuente)
    'Tower Map': ('Mapa (Torre)', True), 'Twilight Town Map': ('Mapa (Villa Crepúsculo)', True), 'Mansion Map': ('Mapa (Vieja mansión)', True),
    'Castle Perimeter Map': ('Mapa (Cerca del castillo)', True), 'The Great Maw Map': ('Mapa (Gran Garganta)', True), 'Marketplace Map': ('Mapa (Mercado)', True),
    'Dark Remembrance Map': ('Mapa (Evocación oscura)', False), 'Depths of Remembrance Map': ('Mapa (Evocación profunda)', False),
    'Garden of Assemblage Map': ('Mapa (Edén de la Convergencia)', False), 'Palace Map': ('Mapa (Palacio)', True),
    'Encampment Area Map': ('Mapa (Campamento)', True), 'Village Area Map': ('Mapa (Aldea)', True), 'Castle Map': ('Mapa (Castillo de Bestia)', True),
    'Basement Map': ('Mapa (Sótano)', True), 'Castle Walls Map': ('Mapa (Murallas del castillo)', True), 'Underworld Map': ('Mapa (Inframundo)', True),
    'Caverns Map': ('Mapa (Cavernas)', True), 'Coliseum Map': ('Mapa (Coliseo)', True), 'Disney Castle Map': ('Mapa (Castillo Disney)', True),
    'Cornerstone Hill Map': ('Mapa (Colina)', True), 'Window of Time Map': ('Mapa (Ventana temporal)', True), 'Naval Map': ('Mapa (Mapa naval)', True),
    'Isla de Muerta Map': ('Mapa (Isla de Muerta)', True), 'Ship Graveyard Map': ('Mapa (Cementerio de barcos)', True),
    'Cave of Wonders Map': ('Mapa (Cueva de las Maravillas)', True), 'Ruins Map': ('Mapa (Ruinas Enterradas)', True), 'Agrabah Map': ('Mapa (Agrabah)', True),
    'Halloween Town Map': ('Mapa (Ciudad de Halloween)', True), 'Christmas Town Map': ('Mapa (Ciudad de la Navidad)', True),
    'Savannah Map': ('Mapa (Sabana)', True), 'Pride Rock Map': ('Mapa (Roca del Clan)', True), 'Oasis Map': ('Mapa (Oasis)', True),
    'Pit Cell Area Map': ('Mapa (Área de celdas)', True), 'I/O Tower Map': ('Mapa (Torre I/O)', True),
    'Central Computer Core Map': ('Mapa (Núcleo central)', True), '100 Acre Wood Map': ('Mapa (Bosque de los Cien Acres)', True),
    'Spooky Cave Map': ('Mapa (Cueva tenebrosa)', True), 'Undersea Kingdom Map': ('Mapa (Atlántica)', True),
    'Dark City Map': ('Mapa (Ciudad oscura)', True), 'Castle That Never Was Map': ('Mapa (Castillo del Mundo Inexistente)', True),
}
COMO_MAPA = {  # los que no salen de un cofre
    'Twilight Town Map': 'Te lo da Hayner en el callejón durante el 2.º día de Roxas.',
    'Mansion Map': 'Te lo da Naminé en el Cuarto Blanco de la mansión durante el 6.º día de Roxas.',
    'Marketplace Map': 'Te lo da Yuffie en la Zona residencial.', 'Encampment Area Map': 'Te lo da Li Shang en el Campamento.',
    'Village Area Map': 'Te lo da Mushu en la Aldea.', 'Castle Walls Map': 'Te lo da Bestia en el Cuarto de Bestia, en la segunda visita.',
    'Coliseum Map': 'Te lo da Hércules en el vestíbulo del Coliseo.', 'Disney Castle Map': 'Te lo da la reina Minnie en la Biblioteca.',
    'Window of Time Map': 'Te lo da Pete en la Colina de la Piedra Angular.',
    'Isla de Muerta Map': 'Tras luchar contra los piratas malditos en los Acantilados de la Isla de Muerta.',
    'Ship Graveyard Map': 'Tras vencer al Tahúr y conseguir el medallón maldito en el Cementerio de Barcos.',
    'Agrabah Map': 'Te lo da Iago en la Tienda del mercader.', 'Spooky Cave Map': 'Al completar el minijuego La exposición.',
    'Undersea Kingdom Map': 'Al completar la primera canción de Atlántica («Swim This Way»).', 'Castle That Never Was Map': 'Tras hablar con Kairi.',
}
m = wikitext('https://www.khwiki.com/api.php', 'Map')
m = m[m.find("===''Kingdom Hearts II''==="):m.find("===''Kingdom Hearts Birth by Sleep''===")]
mapas = []; mundo = None
for fila in m.split('\n|-')[1:]:
    mw = re.match(r'\|(?:rowspan="?\d+"?\|)?\[\[([^\]|]*)', fila.strip('\n'))
    nm = re.search(r'\{\{a\|([^}]*)\}\}', fila)
    if not nm: continue
    if mw and mw.group(1) in MUNDOS: mundo = mw.group(1)
    en = nm.group(1)
    if mundo is None: sys.exit(f'Mapa sin mundo en KHWiki: {en}')
    es, ok = NOMBRE_MAPA[en]
    mid = MUNDOS[mundo][0]
    x = {'mundo': mid, 'nombre': es, **({} if ok else {'nt': True}), 'en': en}
    cofre = mapa_en_cofre.get(en) or mapa_en_cofre.get(en.replace('Pit Cell Area Map', 'Pit Cell Map'))
    if cofre:
        mc, n = cofre.rsplit('.', 1)
        c = tesoros[mc]['cofres'][int(n) - 1]
        x['cofre'] = cofre; x['como'] = f'En un cofre de {c["zona"]} (también cuenta en Tesoros).'
        c['mapa'] = es
    else:
        x['como'] = COMO_MAPA[en]
    if 'FMII' in fila: x['fm'] = True
    mapas.append(x)
sin_mapa = [k for k in mapa_en_cofre if k not in {x['en'] for x in mapas} and k != 'Pit Cell Map']
if sin_mapa: sys.exit(f'Mapas de cofre sin entrada en KHWiki: {sin_mapa}')

# --- Puzles ---
PUZLES = [('Awakening', 'despertar', 'El despertar', 'Impulso hábil'), ('Heart', 'corazon', 'Corazón', 'Cristal sereno'),
          ('Duality', 'luces-y-sombras', 'Luces y sombras', 'Receta legajo vetusto'), ('Frontier', 'al-filo', 'Al filo', 'Ilusión materializada'),
          ('Daylight', 'aurora', 'La aurora', 'Anillo supremo'), ('Sunset', 'crepusculo', 'El crepúsculo', 'Insignia ilustre')]
p = wikitext('https://www.khwiki.com/api.php', 'Puzzle')
piezas = []
for bloque in re.split(r'\{\{tab\|(?!o\|)', p)[1:]:
    nombre = bloque.split('}}')[0]
    for mm in re.finditer(r'\n!#(\d+)\n\|([^\n]*)\n\|([^\n]*)', bloque):
        piezas.append((nombre, int(mm.group(1)), lim(mm.group(2))))
if len(piezas) != len(NOTA):
    sys.exit(f'KHWiki tiene {len(piezas)} piezas y hay {len(NOTA)} notas traducidas: revisar.')
puzles = []
for en, pid, es, premio in PUZLES:
    lista = []
    for (pn, n, z), nota in zip(piezas, NOTA):
        if pn != en: continue
        mid = MUNDOS[MUNDO_PUZLE[z]][0]
        lista.append({'n': n, 'mundo': mid, **zona(z, mid), **({'nota': nota} if nota else {})})
    puzles.append({'id': pid, 'nombre': es, 'premio': premio, 'piezas': lista})

hoy = datetime.date.today().strftime('%d/%m/%Y')
orden = [v[0] for v in MUNDOS.values()]
js = ('// Generado por notas/herramientas/genera_kh2fm_tesoros.py (no editar a mano). Consultado el ' + hoy + '.\n'
      '// Cofres: wiki inglesa de Fandom («Kingdom Hearts II item locations»), contenido de Final Mix. Piezas y mapas: KHWiki.\n'
      '// zt: zona traducida (sin nombre en castellano con fuente; `en` es el inglés). objt / nt: objeto o mapa traducido.\n'
      'export const TESOROS_KH2FM = ' + json.dumps([tesoros[k] for k in orden if k in tesoros], ensure_ascii=False, indent=1) + ';\n\n'
      'export const PUZLES_KH2FM = ' + json.dumps(puzles, ensure_ascii=False, indent=1) + ';\n\n'
      'export const MAPAS_KH2FM = ' + json.dumps(mapas, ensure_ascii=False, indent=1) + ';\n')
open(f'{raiz}/src/data/kh2fm-tesoros.js', 'w', encoding='utf-8', newline='\n').write(js)
print('OK', sum(len(w['cofres']) for w in tesoros.values()), 'cofres;', len(piezas), 'piezas;', len(mapas), 'mapas;',
      sum(1 for w in tesoros.values() for c in w['cofres'] if c.get('zt')), 'cofres con zona traducida')
