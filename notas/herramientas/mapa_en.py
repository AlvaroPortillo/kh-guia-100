"""Nombre en inglés (KHWiki) de cada comando: enlace [[en:…]] de su página en la Wiki ES,
más correcciones manuales para familias (Piro/Piro+/Piro++…) y páginas equivocadas."""
import sys, json, os, re
sys.stdout.reconfigure(encoding='utf-8')
cache = sys.argv[1]
indice = json.load(open(os.path.join(cache, '_indice.json'), encoding='utf-8'))
FAMILIAS = {
    'Piro': 'Fire', 'Piro+': 'Fira', 'Piro++': 'Firaga', 'Hielo': 'Blizzard', 'Hielo+': 'Blizzara', 'Hielo++': 'Blizzaga',
    'Electro': 'Thunder', 'Electro+': 'Thundara', 'Electro++': 'Thundaga', 'Cura': 'Cure', 'Cura+': 'Cura', 'Cura++': 'Curaga',
    'Aero': 'Aero', 'Aero+': 'Aerora', 'Aero++': 'Aeroga', 'Gravedad': 'Gravity', 'Gravedad+': 'Gravira', 'Gravedad++': 'Graviga',
    'Paro': 'Stop', 'Paro+': 'Stopra', 'Paro++': 'Stopga', 'Imán': 'Magnet', 'Imán+': 'Magnera', 'Imán++': 'Magnega',
    'Coraza': 'Barrier', 'Cisco': 'Blitz', 'Embestida': 'Sliding Dash', 'Impulso Aéreo': 'Air Slide',
}
mapa = {}
for n, t in indice.items():
    if n in FAMILIAS:
        mapa[n] = FAMILIAS[n]; continue
    if not t:
        mapa[n] = None; continue
    w = json.load(open(os.path.join(cache, re.sub(r'[^\w]+', '_', n) + '.json'), encoding='utf-8'))['parse']['wikitext']['*']
    m = re.search(r'\[\[en:([^\]|]+)', w)
    mapa[n] = m.group(1).strip() if m else None
json.dump(mapa, open(os.path.join(cache, '_en.json'), 'w', encoding='utf-8'), ensure_ascii=False, indent=1)
print('sin nombre inglés:', [n for n, e in mapa.items() if not e])
