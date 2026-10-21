"""Pegatinas por personaje: zona de cada una (KHWiki — Sticker Album) y mundo de cada zona (página de la zona en KHWiki)."""
import sys, json, os, re, time, urllib.request, urllib.parse
sys.stdout.reconfigure(encoding='utf-8')
D = sys.argv[1]
w = open(f'{D}/khw/Sticker_Album.txt', encoding='utf-8').read()
i = w.find('==List of stickers==')
w = w[i:w.find('\n==', i + 20)]
partes = re.split(r'\{\{tab\|(Terra|Ventus|Aqua)\}\}', w)
res = {}
for k in range(1, len(partes), 2):
    pj = partes[k].lower(); filas = []
    for fila in partes[k + 1].split('\n|-')[1:]:
        nombre = re.search(r'^!([^\[\n][^\n]*)$', fila, re.M)
        celdas = re.findall(r'^\|([^\n]*)$', fila, re.M)
        if not nombre or not celdas: continue
        filas.append({'en': nombre.group(1).strip(), 'zona': celdas[0].strip(), 'nota': celdas[1].strip() if len(celdas) > 1 else ''})
    res[pj] = filas
os.makedirs(f'{D}/zonas', exist_ok=True)
UA = {'User-Agent': 'kh-guia-personal/1.0'}
ABREV = {'CoD': 'Castle of Dreams', 'ED': 'Enchanted Dominion', 'dw': 'Dwarf Woodlands', 'RG': 'Radiant Garden', 'mt': 'Mysterious Tower',
         'OC': 'Olympus Coliseum', 'DT': 'Disney Town', 'LoD': 'Land of Departure', 'ed': 'Enchanted Dominion', 'cod': 'Castle of Dreams',
         'rg': 'Radiant Garden', 'West': 'Olympus Coliseum', 'KG': 'Keyblade Graveyard', 'DS': 'Deep Space', 'NL': 'Neverland', 'di': 'Destiny Islands', 'DW': 'Dwarf Woodlands'}
MUNDOS = {'Olympus Coliseum', 'Castle of Dreams', 'Disney Town', 'Enchanted Dominion', 'Radiant Garden', 'Neverland', 'Never Land',
          'Dwarf Woodlands', 'Deep Space', 'Realm of Darkness', 'Land of Departure', 'Keyblade Graveyard', 'Mysterious Tower', 'The Mysterious Tower', 'Destiny Islands'}
def mundo(z):
    m = re.match(r'\{\{c\|([^|}]+)\|([^}]+)\}\}', z)
    if m: return m.group(1), ABREV.get(m.group(2))
    nombre = re.sub(r'\[\[(?:[^|\]]*\|)?([^\]]+)\]\]', r'\1', z).strip()
    pag = re.match(r'\[\[([^|\]#]+)', z)
    pag = pag.group(1) if pag else nombre
    if pag in MUNDOS: return nombre, pag
    f = f'{D}/zonas/' + re.sub(r'[^\w]+', '_', pag) + '.json'
    if not os.path.exists(f):
        u = 'https://www.khwiki.com/api.php?action=parse&redirects=1&prop=wikitext&format=json&page=' + urllib.parse.quote(pag)
        try: d = json.load(urllib.request.urlopen(urllib.request.Request(u, headers=UA), timeout=30))
        except Exception as e: d = {'error': str(e)}
        json.dump(d, open(f, 'w', encoding='utf-8'), ensure_ascii=False); time.sleep(0.4)
    d = json.load(open(f, encoding='utf-8'))
    t = d['parse']['title'] if 'parse' in d else None
    return nombre, (t if t in MUNDOS else None)
for pj, filas in res.items():
    for x in filas:
        x['zona_nombre'], x['mundo'] = mundo(x['zona'])
json.dump(res, open(f'{D}/pegatinas.json', 'w', encoding='utf-8'), ensure_ascii=False, indent=1)
for pj, filas in res.items():
    print(pj, len(filas), 'pegatinas; sin mundo:', [x['zona'] for x in filas if not x['mundo']])
