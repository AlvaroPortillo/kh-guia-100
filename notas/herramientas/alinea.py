"""Alinea la lista de la guía de Steam (castellano, orden del menú) con la tabla de KHWiki (inglés, mismo orden),
filtrando por personaje. Valida con las correspondencias conocidas de la Wiki ES."""
import sys, json, re
sys.stdout.reconfigure(encoding='utf-8')
w = open(sys.argv[1], encoding='utf-8').read()
listas = json.load(open(sys.argv[2], encoding='utf-8'))
conocidos = json.load(open(sys.argv[3], encoding='utf-8'))
SECC = {'ataque': 'Attack Commands', 'magia': 'Magic Commands', 'movimiento': 'Movement Commands',
        'defensa': 'Defense Commands', 'contraataque': 'Reprisal Commands', 'tiro': 'Shotlock}} Commands'}
def tabla(clave):
    i = w.find(SECC[clave]); j = w.find('\n==', i + 10)
    filas = []
    for fila in w[i:j].split('\n|-')[1:]:
        m = re.search(r"'''\[\[([^\]|]+)(?:\|([^\]]+))?\]\]'''", fila)
        if not m:
            continue
        nombre = (m.group(2) or m.group(1)).strip()
        pag = m.group(1).strip()
        celdas = [c.strip() for c in re.findall(r'^\|([^|\n][^\n]*)$', fila, re.M)]
        lineas = [l for l in fila.split('\n') if l.startswith('!')]
        cs = '||'.join(lineas)
        cs = re.sub(r'style="[^"]*"\|', '', cs).replace('!', '')
        celdas_pj = [c.strip() for c in cs.split('||')]
        pjs = [p for p, l in (('terra', 'T'), ('ventus', 'V'), ('aqua', 'A')) if l in celdas_pj]
        filas.append({'en': nombre, 'pag': pag, 'celdas': celdas, 'pjs': pjs})
    return filas
res = {}
problemas = []
for pj, cats in listas.items():
    for cat, lista in cats.items():
        grupos = {'accion': None}.get(cat, cat)
        subs = ['movimiento', 'defensa', 'contraataque'] if cat == 'accion' else [cat]
        for sub in subs:
            es = [c for c in lista if (c['sub'] == sub if cat == 'accion' else True)]
            en = [f for f in tabla(sub) if pj in f['pjs']]
            if len(es) != len(en):
                problemas.append(f'{pj}/{sub}: {len(es)} en la guía, {len(en)} en KHWiki')
            for a, b in zip(es, en):
                k = conocidos.get(a['n'])
                ok = (k is None) or (k.lower() == b['en'].lower()) or (k.lower() == b['pag'].lower())
                res.setdefault(a['n'], set()).add(b['pag'])
                if not ok:
                    problemas.append(f'{pj}/{sub}: «{a["n"]}» ↔ {b["en"]} (Wiki ES dice {k})')
print('\n'.join(problemas) or 'todo alineado')
json.dump({k: sorted(v) for k, v in res.items()}, open(sys.argv[4], 'w', encoding='utf-8'), ensure_ascii=False, indent=1)
print('ambiguos:', {k: v for k, v in res.items() if len(v) > 1})
