"""Genera src/data/bbs-tableros.js: casillas bonus de cada tablero (KHWiki, tabla «Layout» de cada tablero),
con los comandos en su nombre oficial en castellano (correspondencia de mapa_final.json)."""
import sys, json, re
sys.stdout.reconfigure(encoding='utf-8')
D, SALIDA = sys.argv[1], sys.argv[2]
mapa = json.load(open(f'{D}/mapa_final.json', encoding='utf-8'))['mapa']
inv = {en: es for es, en in mapa.items() if en}
inv.update({'Wishing Edge': 'Hoja del Deseo', 'Focus Block': 'Bloqueo Tino', 'Focus Barrier': 'Coraza Tino'})
TABLEROS = [('llave-espada', 'Tablero de la Llave Espada', 'Keyblade_Board'), ('real', 'Tablero Real', 'Royal_Board'),
            ('espacial', 'Tablero Espacial', 'Spaceship_Board'), ('animado', 'Tablero Animado', 'Toon_Board'),
            ('calavera', 'Tablero Calavera', 'Skull_Board'), ('miel', 'Tablero de Miel', 'Hunny_Pot_Board'),
            ('secreto', 'Tablero Secreto', 'Secret_Board')]
PJ = {'Terra': 'terra', 'Ventus': 'ventus', 'Aqua': 'aqua'}
sin = set()
def celda(t):
    """'[[Fire]] (60%) / [[Thunder]] (40%)' → [{n, pct, solo}]"""
    t = t.strip()
    if t in ('—', '-', ''): return []
    res = []
    for trozo in t.split('/'):
        m = re.search(r'\[\[([^\]|]+)(?:\|[^\]]*)?\]\]', trozo) or re.search(r'\{\{c\|([^|}]+)', trozo)
        if not m: continue
        en = m.group(1).strip()
        es = inv.get(en) or inv.get(en.replace(' (ability)', '')) or None
        if not es: sin.add(en)
        pct = re.search(r'\((\d+)%\)', trozo)
        solo = re.search(r'\(([A-Za-z, and]+) only\)', trozo)
        quien = [PJ[p] for p in re.findall(r'Terra|Ventus|Aqua', solo.group(1))] if solo else None
        res.append({'n': es or en, 'en': en, 'pct': pct.group(1) if pct else None, 'solo': quien})
    return res
out = []
for id_, nombre, pag in TABLEROS:
    w = open(f'{D}/khw/{pag}.txt', encoding='utf-8').read()
    i = w.find('==Layout=='); j = w.find('\n==', i + 10)
    casillas = []
    for fila in w[i:j].split('\n|-')[2:]:
        c = [x.strip() for x in re.findall(r'^\|([^\n]*)$', fila, re.M)]
        if len(c) < 3 or not c[0].isdigit(): continue
        casillas.append({'num': int(c[0]), 'normal': celda(c[1]), 'limitada': celda(c[2]), 'coso': celda(c[3]) if len(c) > 3 else []})
    out.append({'id': id_, 'nombre': nombre, 'kh': pag, 'casillas': casillas})
js = ['// Casillas bonus de los Tableros de comandos de BBS Final Mix. GENERADO (notas/herramientas/tableros.py); no editar a mano.',
      '// Fuente: KHWiki, tabla «Layout» de cada tablero. «limitada»: recompensa que sale mientras no tengas ese comando;',
      '// al tenerlo, la casilla da la «normal». «coso»: lo que da en el Coso Virtual (casi siempre nada). `solo`: personajes.',
      '', 'export const TABLEROS = ' + json.dumps(out, ensure_ascii=False, indent=1) + ';', '']
open(SALIDA, 'w', encoding='utf-8').write('\n'.join(js))
print('sin nombre en castellano:', sin)
for t in out: print(t['nombre'], len(t['casillas']), 'casillas bonus')
