"""Extrae de KHWiki las viñetas de obtención en BBS de cada comando (separando familias por ';Nombre')."""
import sys, json, os, re
sys.stdout.reconfigure(encoding='utf-8')
D = sys.argv[1]
M = json.load(open(f'{D}/mapa_final.json', encoding='utf-8'))['mapa']
def wiki(en):
    f = f'{D}/khc/' + re.sub(r'[^\w]+', '_', en) + '.json'
    d = json.load(open(f, encoding='utf-8'))
    return d['parse']['wikitext']['*'] if 'parse' in d else ''
def bbs_learning(w, en):
    m = re.search(r'^==\s*(Learning|Obtaining|Acquisition|Locations?)[^=\n]*==\s*$', w, re.M)
    if not m: return None
    resto = w[m.end():]
    fin = re.search(r'^==[^=]', resto, re.M)
    sec = resto[:fin.start()] if fin else resto
    b = re.search(r"^===\s*''\[?\[?Kingdom Hearts Birth by Sleep(?:\]\])?''\s*===\s*$", sec, re.M)
    if not b: return None
    sub = sec[b.end():]
    f2 = re.search(r'^===[^=]', sub, re.M)
    sub = sub[:f2.start()] if f2 else sub
    # Familias: bloques ';Nombre'
    if re.search(r'^;', sub, re.M):
        partes = re.split(r'^;\s*(.+)$', sub, flags=re.M)
        bloques = {partes[i].strip(): partes[i + 1] for i in range(1, len(partes), 2)}
        sub = bloques.get(en, '')
    return [l[1:].strip() for l in sub.splitlines() if l.startswith('*')]
out, sin = {}, []
for es, en in M.items():
    w = wiki(en)
    vi = bbs_learning(w, en)
    if vi is None: sin.append(f'{es}={en}')
    out[es] = vi or []
json.dump(out, open(f'{D}/obtencion_en.json', 'w', encoding='utf-8'), ensure_ascii=False, indent=1)
print('sin sección de obtención:', sin)
# Esqueletos de frase para ver qué patrones hay que traducir.
from collections import Counter
c = Counter()
for vi in out.values():
    for v in vi:
        s = re.sub(r'\[\[[^\]]*\]\]', 'L', v); s = re.sub(r'\{\{[^}]*\}\}', 'T', s); s = re.sub(r'\d[\d,]*', 'N', s)
        s = re.sub(r"(Terra|Ventus|Aqua)(, | and |,? and )?", 'P ', s)
        c[re.sub(r'\s+', ' ', s)[:90]] += 1
for k, v in c.most_common(70): print(v, k)
