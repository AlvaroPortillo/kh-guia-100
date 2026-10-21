"""Saca de la guía de Steam (HTML) la lista de comandos de cada personaje.
Encabezados <u>…</u> = categoría; <li><b>…</b> = subcategoría (en Acción: Movimiento, Bloqueo, Contraataque)."""
import sys, re, json, html
sys.stdout.reconfigure(encoding='utf-8')
s = open(sys.argv[1], encoding='utf-8').read()
CATS = {'Comandos de Ataque': 'ataque', 'Comandos de Magia': 'magia', 'Comandos de Acción': 'accion', 'Tiro Certero': 'tiro'}
SUB = {'Movimiento': 'movimiento', 'Bloqueo': 'defensa', 'Contraataque': 'contraataque'}
limpio = lambda t: html.unescape(re.sub(r'<[^>]+>', '', t)).strip()
out = {}
for pj in ('Terra', 'Ventus', 'Aqua'):
    # Usa la última aparición (el índice de la guía también menciona los títulos).
    i = s.rfind(f'Lista de Comandos de {pj}')
    fin = min([x for x in (s.find('Lista de Comandos de', i + 30), s.find('subSectionTitle', i + 30)) if x > 0])
    bloque = s[i:fin]
    res = {}
    for m in re.finditer(r'<u>(.*?)</u>(.*?)(?=<u>|$)', bloque, re.S):
        cat = CATS.get(limpio(m.group(1)))
        if not cat:
            continue
        lista = []
        sub = None
        for li in re.findall(r'<li>(.*?)(?=<li>|</ul>)', m.group(2), re.S):
            b = re.match(r'\s*<b>(.*?)</b>', li)
            if b and limpio(b.group(1)) in SUB and cat == 'accion':
                sub = SUB[limpio(b.group(1))]; continue
            t = limpio(li)
            if not t:
                continue
            nombre, _, nota = t.partition(':')
            lista.append({'n': nombre.strip(), 'sub': sub if cat == 'accion' else None, 'nota': nota.strip()})
        res[cat] = lista
    out[pj.lower()] = res
json.dump(out, open(sys.argv[2], 'w', encoding='utf-8'), ensure_ascii=False, indent=1)
for p, cs in out.items():
    print(p, {c: len(v) for c, v in cs.items()})
print([(x['n'], x['sub']) for x in out['aqua']['accion']])
