"""Mundo al que pertenece cada zona donde hay cofres (página de la zona en KHWiki)."""
import sys, json, os, re, time, urllib.request, urllib.parse
sys.stdout.reconfigure(encoding='utf-8')
D = sys.argv[1]
ob = json.load(open(f'{D}/obtencion_en.json', encoding='utf-8'))
zonas = set()
for vi in ob.values():
    for v in vi:
        if 'chest' not in v: continue
        m = re.search(r'chests? (?:at|in|on) (?:the )?(\[\[[^\]]+\]\]|\{\{c\|[^}]+\}\}|[A-Z][\w\' ]+)', v)
        if m: zonas.add(m.group(1))
os.makedirs(f'{D}/zonas', exist_ok=True)
UA = {'User-Agent': 'kh-guia-personal/1.0'}
res = {}
for z in sorted(zonas):
    if z.startswith('[['): pag = z[2:-2].split('|')[0]
    elif z.startswith('{{c|'):
        partes = z[4:-2].split('|'); pag = f'{partes[0]} ({partes[1]})' if len(partes) > 1 else partes[0]
    else: pag = z.strip()
    f = f'{D}/zonas/' + re.sub(r'[^\w]+', '_', pag) + '.json'
    if not os.path.exists(f):
        u = 'https://www.khwiki.com/api.php?action=parse&redirects=1&prop=wikitext&format=json&page=' + urllib.parse.quote(pag)
        try: d = json.load(urllib.request.urlopen(urllib.request.Request(u, headers=UA), timeout=30))
        except Exception as e: d = {'error': str(e)}
        json.dump(d, open(f, 'w', encoding='utf-8'), ensure_ascii=False); time.sleep(0.2)
    d = json.load(open(f, encoding='utf-8'))
    w = d['parse']['wikitext']['*'] if 'parse' in d else ''
    titulo = d['parse']['title'] if 'parse' in d else pag
    mundo = None
    m = re.search(r'\|\s*world\s*=\s*\[\[([^\]|]+)', w) or re.search(r'(?:location|area|room|region)[^.]{0,80}?(?:in|of) (?:the )?\[\[([^\]|]+)', w, re.I)
    if m: mundo = m.group(1).strip()
    res[z] = {'pag': titulo, 'mundo': mundo}
json.dump(res, open(f'{D}/zonas.json', 'w', encoding='utf-8'), ensure_ascii=False, indent=1)
for z, r in res.items(): print(f'{z[:45]:45} -> {r["pag"][:30]:30} | {r["mundo"]}')
