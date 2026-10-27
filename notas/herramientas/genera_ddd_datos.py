"""Genera src/data/ddd-datos.js (comandos, oniritas, juguetes, Lucientes, Nexos) y src/data/ddd-portales.js, y baja las
imágenes de los Lucientes a assets/img/ddd/lucientes/ (hace falta Pillow: usar un venv).

Uso: python genera_ddd_datos.py <carpeta-con-las-fuentes> <raiz-del-proyecto>

La carpeta de fuentes tiene las páginas en texto (no se guardan en el repositorio: Gamerbase prohíbe copiar sus textos; aquí
solo se extraen datos: nombres y cómo se consigue cada cosa). Se bajan así y se pasan a texto con el script `ddd_totext.py` (python ddd_totext.py gb-trofeos.html …):
  curl -sL --compressed -A "Mozilla/5.0" "https://gamerbase.net/guia-de-trofeos/kingdom-hearts-dream-drop-distance-93" -o gb-trofeos.html
  curl -sL --compressed -A "Mozilla/5.0" "https://gamerbase.net/guias/anexo-fusiones-nexo-nexos-duales-y-creacion-de-lucientes-kingdom-hearts-dream-drop-distance-94" -o gb-anexo.html
  curl -sL --compressed -A "Mozilla/5.0" "http://www.khworld.org/iceberg/?centro=spirits" -o kw-spirits.html
  curl -sL --compressed -A "Mozilla/5.0" "http://www.khworld.org/iceberg/?centro=portaleskh3d" -o kw-portales.html
Quitar etiquetas HTML, convertir <br>, </p>, </li>, </tr> en saltos de línea y <td>/<th> en « | », y guardar como .txt.
Nombres de Lucientes en inglés: Wiki ES (campo «ingles» de cada ficha) y KHWiki (página Dream Eater, imágenes).
"""
import sys, re, json, os, io, time, subprocess, urllib.request, urllib.parse

sys.stdout.reconfigure(encoding='utf-8')  # type: ignore[attr-defined]  # pyright: ignore
fuentes, raiz = sys.argv[1], sys.argv[2]
UA = {'User-Agent': 'Mozilla/5.0'}


def leer(n):
    return open(os.path.join(fuentes, n), encoding='utf-8').read()


def api(base, **q):
    q.update(format='json')
    r = urllib.request.Request(base + '?' + urllib.parse.urlencode(q), headers=UA)
    return json.load(urllib.request.urlopen(r, timeout=30))


def wikitext(base, pagina):
    d = api(base, action='parse', page=pagina, prop='wikitext', redirects=1)
    return d['parse']['wikitext']['*'] if 'parse' in d else ''


WES = 'https://kingdomhearts.fandom.com/es/api.php'
KHW = 'https://www.khwiki.com/api.php'

# ---------- Gamerbase: trofeos ----------
gb = leer('gb-trofeos.txt').split('\n')


def lineas_entre(ini, fin):
    i = next(k for k, l in enumerate(gb) if ini in l)
    j = next(k for k in range(i + 1, len(gb)) if fin in gb[k])
    return gb[i + 1:j]


# Comandos por categoría: «- Nombre: cómo se consigue»
i0 = next(k for k, l in enumerate(gb) if l.strip() == 'ATAQUE')
i1 = next(k for k in range(i0, len(gb)) if gb[k].strip() == 'Coleccionista de fórmulas')
cat = None
comandos = {}
for l in gb[i0:i1]:
    s = l.strip()
    if re.match(r'^[A-ZÁÉÍÓÚÑ ]{4,}$', s):
        cat = s.title()
        comandos[cat] = []
    elif s.startswith('- ') and ':' in s and cat:
        n, c = s[2:].split(':', 1)
        comandos[cat].append({'n': n.strip(), 'como': c.strip().rstrip('.') + '.'})
# La categoría pegada a «Coleccionista de comandos» puede salir con texto delante
COMANDOS = [{'cat': c, 'items': v} for c, v in comandos.items() if v]
print('comandos', {c['cat']: len(c['items']) for c in COMANDOS})

# Oniritas
i = next(k for k, l in enumerate(gb) if 'lista con todas las oniritas' in l)
ONIRITAS = []
for l in gb[i + 1:]:
    if l.strip().startswith('- ') and len(l.strip()) > 3 and l.strip() != '-':
        ONIRITAS.append(l.strip()[2:].strip())
    elif ONIRITAS:
        break
print('oniritas', len(ONIRITAS))

# Juguetes
i = next(k for k, l in enumerate(gb) if 'LISTA DE JUGUETES' in l)
JUGUETES = []
for l in gb[i + 1:]:
    if l.strip().startswith('- ') and len(l.strip()) > 3:
        JUGUETES.append(l.strip()[2:].strip())
    elif JUGUETES:
        break
print('juguetes', len(JUGUETES))

# Llaves Espada: «- Nombre (Sora/Riku) - cómo»
i = next(k for k, l in enumerate(gb) if 'LISTA DE LLAVES ESPADA' in l)
LLAVES = []
for l in gb[i + 2:]:
    m = re.match(r'^- (.+?) \((Sora|Riku|Sora/Riku)\) - (.+)$', l.strip())
    if m:
        LLAVES.append({'n': m.group(1), 'pj': m.group(2).split('/'), 'como': m.group(3).strip()})
    elif l.strip().startswith('MAPAS'):
        break
print('llaves', len(LLAVES))

# ---------- Gamerbase: anexo ----------
raw = leer('gb-anexo.txt').split('\n')
filas = []
i = 0
while i < len(raw):
    m = re.match(r'^\s*\|\s*(\d+)\s*$', raw[i])
    if m and i + 3 < len(raw):
        filas.append({'n': int(m.group(1)), 'es': raw[i + 2].strip(' |').strip(), 'como': re.sub(r'\s+', ' ', raw[i + 3].strip(' |').strip()).replace('Cudad', 'Ciudad')})  # errata de Gamerbase
        i += 4
    else:
        i += 1
assert len(filas) == 54, len(filas)


def lista_nexo(titulo, duales=False):
    k = next(j for j, l in enumerate(raw) if l.strip().startswith(titulo))
    res = []
    for l in raw[k + 1:]:
        s = l.strip()
        if not s.startswith('- '):
            break
        n, a = s[2:].split(':', 1)
        res.append({'n': n.strip(), 'lucientes': [x.strip() for x in a.split('+')]})
    return res


NEXOS = {
    'ataquesSora': lista_nexo('ATAQUES NEXOS (SORA)'),
    'dualesSora': lista_nexo('NEXOS DUALES (SORA)'),
    'fusionesRiku': lista_nexo('FUSIONES NEXOS (RIKU)'),
    'dualesRiku': lista_nexo('NEXOS DUALES (RIKU)'),
}
print('nexos', {k: len(v) for k, v in NEXOS.items()})

# ---------- Nombres en inglés (Wiki ES) ----------
EN_FIJO = {'Cabricorno': 'Yoggy Ram', 'Nekulebra': 'Sudo Neku', 'Circurso': 'Ursa Circus'}  # por posición y por el archivo de imagen de su ficha
for f in filas:
    if f['es'] in EN_FIJO:
        f['en'] = EN_FIJO[f['es']]
        continue
    t = wikitext(WES, f['es'])
    m = re.search(r'\|\s*(?:ingles|inglés|en)\s*=\s*([^\n|}\[]+)', t)
    f['en'] = m.group(1).strip() if m else None
    time.sleep(.15)
print('sin nombre en inglés:', [f['es'] for f in filas if not f['en']])
en_a_es = {f['en'].lower(): f['es'] for f in filas if f['en']}

# ---------- Imágenes (KHWiki, página Dream Eater) ----------
t = wikitext(KHW, 'Dream Eater')
gal = t[t.index('===Spirits==='):t.index('===Nightmares===')]
archivos = {n: a for a, n in re.findall(r'File:([^|]+)\|\[\[([^\]]+)\]\]', gal)}
try:
    from PIL import Image  # pyright: ignore[reportMissingImports]
except ImportError:
    Image = None
carpeta = os.path.join(raiz, 'assets', 'img', 'ddd', 'lucientes')
os.makedirs(carpeta, exist_ok=True)


def slug(s):
    import unicodedata
    s = unicodedata.normalize('NFD', s).encode('ascii', 'ignore').decode().lower()
    return re.sub(r'[^a-z0-9]+', '-', s).strip('-')


for f in filas:
    f['slug'] = slug(f['es'])
    f['img'] = None
    a = archivos.get(f['en'] or '')
    destino = os.path.join(carpeta, f['slug'] + '.webp')
    if os.path.exists(destino):
        f['img'] = f['slug']
    elif a and Image:
        d = api(KHW, action='query', titles='File:' + a, prop='imageinfo', iiprop='url', iiurlwidth=220)
        info = list(d['query']['pages'].values())[0].get('imageinfo')
        if info:
            b = subprocess.run(['curl', '-s', '-L', '-A', 'Mozilla/5.0', info[0].get('thumburl') or info[0]['url']], capture_output=True).stdout
            try:
                im = Image.open(io.BytesIO(b)).convert('RGBA')
                im.thumbnail((200, 200))
                im.save(destino, quality=82)
                f['img'] = f['slug']
            except Exception as e:
                print('imagen', f['es'], e)
print('imágenes', sum(1 for f in filas if f['img']), '/ 54')

# ---------- Recetas (KHWorld, nombres en inglés → oniritas en castellano) ----------
kw = leer('kw-spirits.txt')
cuerpo = kw[kw.index('Imágenes de KHWiki.net'):]
celdas = re.split(r'\n \| ', cuerpo)[1:]
celdas = celdas[4:] if 'Recetas' in celdas[1] else celdas
TIPO = {'Fleeting': ('veloz', 'veloz'), 'Lofty': ('alado', 'alada'), 'Rampant': ('brioso', 'briosa'), 'Dulcet': ('melodioso', 'melodiosa'),
        'Malleable': ('maleable', 'maleable'), 'Prickly': ('espinoso', 'espinosa'), 'Epic': ('épico', 'épica'), 'Charming': ('cautivador', 'cautivadora'),
        'Intrepid': ('feroz', 'feroz'), 'Savage': ('visceral', 'visceral'), 'Noble': ('noble', 'noble'), 'Grim': ('gélido', 'gélida'),
        'Vibrant': ('vivaz', 'vivaz'), 'Wild': ('salvaje', 'salvaje'), 'Brilliant': ('fulgurante', 'fulgurante'), 'Troubling': ('atribulado', 'atribulada'),
        'Wondrous': ('misterioso', 'misteriosa')}
CLASE = {'Fancy': ('Ensueño', 0), 'Figment': ('Ilusión', 1), 'Fantasy': ('Fantasía', 1)}
onis = {o.lower() for o in ONIRITAS}


# KHWorld abrevia con la inicial; la «W» es ambigua (Wild o Wondrous) y esas recetas se descartan.
INICIAL = {k[0]: k for k in TIPO if k[0] != 'W'}


def onirita(tok):
    tok = re.sub(r'\s+', ' ', tok).strip()
    m = re.match(r'^([A-Za-z]+)\.? ?(Fancy|Figment|Fantasy)$', tok)
    if not m:
        return None
    tipo = INICIAL.get(m.group(1)) if len(m.group(1)) == 1 else m.group(1)
    if tipo not in TIPO:
        return None
    cl, g = CLASE[m.group(2)]
    es = f'{cl} {TIPO[tipo][g]}'
    return es if es.lower() in onis else None


recetas = {}
for k in range(0, len(celdas) - 3, 4):
    en = celdas[k].strip().rstrip(':').strip()
    rs = []
    for r in re.split(r'\n?\s*•', celdas[k + 1]):
        r = r.strip()
        if not r:
            continue
        partes = [onirita(p) for p in r.split('+')]
        if len(partes) == 2 and all(partes):
            rs.append(partes)
    recetas[en] = rs
print('Spirits con recetas', sum(1 for v in recetas.values() if v), '/', len(recetas))

# ---------- Lucientes ----------
def sinprefijo(x):
    return x


LUCIENTES = []
for f in filas:
    ataque = [a['n'] for a in NEXOS['ataquesSora'] if f['es'] in a['lucientes']]
    LUCIENTES.append({'n': f['n'], 'id': f['slug'], 'nombre': f['es'], 'en': f['en'], 'img': f['img'], 'como': f['como'],
                      'recetas': recetas.get(f['en'] or '', []), 'ataqueNexo': ataque[0] if ataque else None})

# ---------- Portales (KHWorld) ----------
L = [l.strip() for l in leer('kw-portales.txt').split('\n')]
i = [k for k, l in enumerate(L) if l.startswith('Listado de Portales')][0] + 1
MUNDOS = {'CIUDAD DE PASO': 'ciudad-de-paso', 'LA CITÉ DES CLOCHES': 'ciudad-de-las-campanas', 'THE GRID': 'la-red',
          "PRANKSTER'S PARADISE": 'paraiso-del-bromista', 'COUNTRY OF THE MUSKETEERS': 'pais-de-los-mosqueteros',
          'SYMPHONY OF SORCERY': 'sinfonia-del-brujo', 'EL MUNDO INEXISTENTE': 'mundo-inexistente'}
LUGARES_ES = {'Fountain Plaza': 'Plaza de la Fuente', 'Second District': 'Segundo Distrito', 'Catacombs': 'Catacumbas',
              'Rectifier 1F': 'Rectificador 1F', 'Golden Wood': 'Arboleda Dorada', 'Monstro: Bowels': 'Entrañas de Monstruo'}
crudos = []
cur = None
mundo = pj = None
for l in L[i:]:
    if not l:
        continue
    m = re.match(r'^(.+?) ?- ?(SORA|RIKU)$', l, re.I)
    if m:
        mundo, pj = MUNDOS[m.group(1).strip().upper()], m.group(2).title()
        cur = None
        continue
    m = re.match(r'^-Portal Especial ?(\d*)-+$', l)
    if m:
        cur = {'mundo': mundo, 'pj': pj, 'n': m.group(1) or 'secreto', 'raw': []}
        crudos.append(cur)
        continue
    if cur is not None and len(cur['raw']) < 3 and not l.startswith('|'):
        cur['raw'].append(l)
PORTALES, SECRETOS = [], []
for c in crudos:
    r = c['raw']
    if c['n'] == 'secreto':
        SECRETOS.append({'mundo': c['mundo'], 'pj': c['pj'], 'lugar': r[0] if r else None})
        continue
    lugar_raw, enem, obj = r[0], r[1], r[2]
    est = re.search(r'(\d)\*', lugar_raw)
    lugar = re.sub(r'\s*/?\s*\d\*', '', lugar_raw).strip(' /')
    lugar = re.sub(r'\?$', '', lugar)
    especie = re.sub(r'^.*/\s*', '', enem) if '/' in enem else re.sub(r'\s*\(.*\)', '', enem)
    especie = especie.strip()
    PORTALES.append({'mundo': c['mundo'], 'pj': c['pj'], 'n': int(c['n']), 'lugar': LUGARES_ES.get(lugar, lugar), 'lugarEn': lugar not in LUGARES_ES,
                     'estrellas': int(est.group(1)) if est else None, 'luciente': en_a_es.get(especie.lower()), 'enemigoEn': especie,
                     'objetivo': obj})
print('portales', len(PORTALES), 'secretos', len(SECRETOS), 'sin traducir:', sorted({p['enemigoEn'] for p in PORTALES if not p['luciente']}))

# ---------- Salida ----------
cab = ('// Generado con notas/herramientas/genera_ddd_datos.py. No editar a mano.\n'
       '// Fuentes: Gamerbase (guía de trofeos y anexo) y KHWorld (Spirits y Portales Especiales); nombres en inglés de la Wiki ES.\n')
datos = cab + ''.join(f'export const {k} = {json.dumps(v, ensure_ascii=False, indent=1)};\n' for k, v in
                      [('COMANDOS_DDD', COMANDOS), ('ONIRITAS_DDD', ONIRITAS), ('JUGUETES_DDD', JUGUETES), ('LLAVES_DDD', LLAVES),
                       ('LUCIENTES_DDD', LUCIENTES), ('NEXOS_DDD', NEXOS)])
open(os.path.join(raiz, 'src', 'data', 'ddd-datos.js'), 'w', encoding='utf-8', newline='\n').write(datos)
por = cab + ''.join(f'export const {k} = {json.dumps(v, ensure_ascii=False, indent=1)};\n' for k, v in
                    [('PORTALES_DDD', PORTALES), ('SECRETOS_PORTALES_DDD', SECRETOS)])
open(os.path.join(raiz, 'src', 'data', 'ddd-portales.js'), 'w', encoding='utf-8', newline='\n').write(por)
print('OK')
