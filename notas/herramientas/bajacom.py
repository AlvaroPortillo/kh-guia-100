"""Descarga (con caché) la página de la Wiki ES de cada comando de las listas."""
import sys, json, os, re, time, urllib.request, urllib.parse
sys.stdout.reconfigure(encoding='utf-8')
listas = json.load(open(sys.argv[1], encoding='utf-8'))
cache = sys.argv[2]
os.makedirs(cache, exist_ok=True)
nombres = sorted({c['n'] for cs in listas.values() for l in cs.values() for c in l})
indice = {}
for n in nombres:
    f = os.path.join(cache, re.sub(r'[^\w]+', '_', n) + '.json')
    if not os.path.exists(f):
        u = ('https://kingdomhearts.fandom.com/es/api.php?action=parse&redirects=1&prop=wikitext&format=json&page='
             + urllib.parse.quote(n))
        try:
            d = json.load(urllib.request.urlopen(urllib.request.Request(u, headers={'User-Agent': 'kh-guia-personal/1.0'}), timeout=30))
        except Exception as e:
            d = {'error': str(e)}
        json.dump(d, open(f, 'w', encoding='utf-8'), ensure_ascii=False)
        time.sleep(0.25)
    d = json.load(open(f, encoding='utf-8'))
    indice[n] = d['parse']['title'] if 'parse' in d else None
json.dump(indice, open(os.path.join(cache, '_indice.json'), 'w', encoding='utf-8'), ensure_ascii=False, indent=1)
falta = [n for n, t in indice.items() if not t]
print(len(nombres), 'comandos;', len(falta), 'sin página:', falta)
print('redirigidos:', {n: t for n, t in indice.items() if t and t != n})
