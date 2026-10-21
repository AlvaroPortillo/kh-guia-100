"""Correspondencia final castellano→inglés, descarga de páginas de KHWiki y validación con recetas."""
import sys, json, os, re, time, unicodedata, urllib.request, urllib.parse
sys.stdout.reconfigure(encoding='utf-8')
D = sys.argv[1]  # carpeta dl
listas = json.load(open(f'{D}/listas.json', encoding='utf-8'))
en_es = json.load(open(f'{D}/com/_en.json', encoding='utf-8'))
alin = json.load(open(f'{D}/alineado.json', encoding='utf-8'))
tablas = json.load(open(f'{D}/tablas.json', encoding='utf-8'))

ERRATAS = {'Hija Afortunada': 'Hoja Afortunada', 'Hipotermina': 'Hipotermia', 'Salto de altura': 'Salto de Altura',
           'Escudo de minas': 'Escudo de Minas', 'Cuadro de minas': 'Cuadro de Minas'}
MANUAL = {
    'Gravedad': 'Zero Gravity', 'Gravedad+': 'Zero Gravira', 'Gravedad++': 'Zero Graviga', 'Hipotermia': 'Deep Freeze',
    'Sismo': 'Quake', 'Meteo': 'Meteor', 'Trascendencia': 'Transcendence', 'Minimalia': 'Mini', 'Apagón': 'Blackout',
    'Ignición': 'Ignite', 'Confu': 'Confuse', 'Enlace': 'Bind', 'Toxis': 'Poison', 'Freno': 'Slow', 'Morfeo': 'Sleep',
    'Megafulgor': 'Mega Flare', 'Glaciar': 'Glacier', 'Asalto Gélido': 'Ice Barrage', 'Descarga Ígnea': 'Firaga Burst',
    'Pira': 'Raging Storm', 'Bloqueo Toxis': 'Poison Block', 'Coraza Confu': 'Confuse Barrier', 'Coraza Paro': 'Stop Barrier',
    'Lluvia Meteórica': 'Meteor Shower', 'Salva Ígnea': 'Flame Salvo', 'Súbito Caos': 'Chaos Snake', 'Volea Umbría': 'Dark Volley',
    'Ragnarok': 'Ragnarok', 'Tronada': 'Thunderstorm', 'Biodescarga': 'Bio Barrage', 'Carga Fotónica': 'Photon Charge',
    'Cero Absoluto': 'Absolute Zero', 'Rayo Célere': 'Lightning Ray', 'Sombra Sónica': 'Sonic Shadow', 'Cañón Artema': 'Ultima Cannon',
    'Multivórtice': 'Multivortex', 'Chorro Irisado': 'Prism Rain', 'Fogonazo': 'Lightbloom', 'Tiro Burbuja': 'Bubble Blaster', 'Tornado': 'Tornado', 'Bomba de Pulso': 'Pulse Bomb',
}
norm = lambda s: ''.join(c for c in unicodedata.normalize('NFD', s.lower()) if unicodedata.category(c) != 'Mn').strip()

mapa = {}
for pj, cats in listas.items():
    for cat, l in cats.items():
        for c in l:
            n = ERRATAS.get(c['n'], c['n'])
            if n in mapa: continue
            if n in MANUAL: mapa[n] = MANUAL[n]
            elif en_es.get(c['n']): mapa[n] = en_es[c['n']].replace(' (Command)', '').replace(' (command)', '')
            elif len(alin.get(c['n'], [])) == 1: mapa[n] = alin[c['n']][0]
            else: mapa[n] = None
print('sin correspondencia:', [n for n, e in mapa.items() if not e])

# Recetas de la guía de Steam por nombre normalizado.
recetas = {}
for sec, filas in tablas.items():
    if 'Habilidades' in sec: continue
    for r in filas[1:]:
        if len(r) < 6: continue
        nombre = norm(r[0][0].rstrip('¹²'))
        g = lambda col, i: col[i] if i < len(col) else col[-1]
        for i in range(len(r[1])):
            recetas.setdefault(nombre, []).append({'a': g(r[1], i), 'b': g(r[2], i), 'excl': g(r[3], i), 'tipo': g(r[4], i), 'pct': g(r[5], i)})

# Descarga de KHWiki (caché).
os.makedirs(f'{D}/khc', exist_ok=True)
UA = {'User-Agent': 'kh-guia-personal/1.0'}
def pagina(en):
    f = f'{D}/khc/' + re.sub(r'[^\w]+', '_', en) + '.json'
    if not os.path.exists(f):
        u = 'https://www.khwiki.com/api.php?action=parse&redirects=1&prop=wikitext&format=json&page=' + urllib.parse.quote(en)
        try: d = json.load(urllib.request.urlopen(urllib.request.Request(u, headers=UA), timeout=30))
        except Exception as e: d = {'error': str(e)}
        json.dump(d, open(f, 'w', encoding='utf-8'), ensure_ascii=False); time.sleep(0.2)
    d = json.load(open(f, encoding='utf-8'))
    return d['parse']['wikitext']['*'] if 'parse' in d else None
inv = {v: k for k, v in mapa.items() if v}
mapa_n = {norm(k): v for k, v in mapa.items() if v}
FAM = {'Fire','Fira','Firaga','Blizzard','Blizzara','Blizzaga','Thunder','Thundara','Thundaga','Cure','Cura','Curaga','Aero','Aerora','Aeroga','Zero Gravity','Zero Gravira','Zero Graviga','Magnet','Magnera','Magnega','Stop','Stopra','Stopga'}
sin_validar = []
fallos, validados = [], 0
for n, en in mapa.items():
    if not en: continue
    w = pagina(en)
    if w is None: fallos.append(f'{n} → {en}: sin página en KHWiki'); continue
    i = w.find('{{CommandMeld')
    kh = set()
    if i >= 0:
        bloque = w[i:w.find('}}', i)]
        for a, b in re.findall(r'\|c(\d+)a=([^|\n]+)', bloque): pass
        pares = {}
        for k, v in re.findall(r'\|c(\d+[ab])=([^|\n]+)', bloque): pares.setdefault(k[:-1], []).append(v.strip())
        kh = {frozenset(p) for p in pares.values()}
    st = {frozenset(filter(None, [mapa_n.get(norm(ERRATAS.get(x['a'], x['a']))) or x['a'], mapa_n.get(norm(ERRATAS.get(x['b'], x['b']))) or x['b']])) for x in recetas.get(norm(n), [])}
    if en in FAM: continue
    if not (kh and st): sin_validar.append(f'{n}={en}')
    if kh and st:
        comun = kh & st
        if comun: validados += 1
        else: fallos.append(f'{n} → {en}: recetas no coinciden (Steam {sorted(map(sorted, st))[:2]} / KHWiki {sorted(map(sorted, kh))[:2]})')
json.dump({'mapa': mapa, 'recetas': recetas, 'erratas': ERRATAS}, open(f'{D}/mapa_final.json', 'w', encoding='utf-8'), ensure_ascii=False, indent=1)
print('validados por receta:', validados)
print('\n'.join(fallos))
print('sin validar por receta:', ', '.join(sin_validar))
