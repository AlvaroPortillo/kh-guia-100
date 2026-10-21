import sys, os, re, json, urllib.request, urllib.parse
sys.stdout.reconfigure(encoding='utf-8')
d = sys.argv[1]
partidos = {}
enemigos = set()
for f in sorted(os.listdir(d)):
    w = open(os.path.join(d, f), encoding='utf-8').read()
    m = re.search(r'\{\{Arena(.*?)\n\}\}', w, re.S)
    if not m:
        continue
    campos = dict(re.findall(r'\|(\w+)=(.*)', m.group(1)))
    rondas = []
    for k in sorted([k for k in campos if k.startswith('enem')], key=lambda k: int(k[4:])):
        lista = []
        for parte in re.split(r'<br\s*/?>', campos[k]):
            mm = re.match(r'\s*\[\[([^\]|]+)(?:\|[^\]]*)?\]\]\s*(?:x\s*(\d+))?', parte)
            if mm:
                lista.append([mm.group(1).strip(), int(mm.group(2)) if mm.group(2) else 1])
                enemigos.add(mm.group(1).strip())
        rondas.append(lista)
    img = re.search(r'File:([^|\]]+)', campos.get('image', ''))
    partidos[campos['name']] = {
        'img': img.group(1).strip() if img else None,
        'reto': campos.get('challengedesc', '').strip(),
        'rondas': rondas,
        'estrategia': bool(re.search(r'^==Strategy==', w, re.M)),
    }
# Nombre en castellano: página de la Wiki ES que enlaza a la inglesa (langbacklinks).
es = {}
for e in sorted(enemigos):
    u = ('https://kingdomhearts.fandom.com/es/api.php?action=query&list=langbacklinks&lbllang=en&format=json&lbltitle='
         + urllib.parse.quote(e))
    try:
        r = json.load(urllib.request.urlopen(urllib.request.Request(u, headers={'User-Agent': 'kh-guia-personal/1.0'})))
        t = [x['title'] for x in r['query']['langbacklinks'] if x['ns'] == 0]
    except Exception as ex:
        t = ['ERR ' + str(ex)]
    es[e] = t
json.dump({'partidos': partidos, 'es': es}, open(sys.argv[2], 'w', encoding='utf-8'), ensure_ascii=False, indent=1)
for e, t in es.items():
    print(e, '->', t)
