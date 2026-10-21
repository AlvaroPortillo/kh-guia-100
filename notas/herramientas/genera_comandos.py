"""Genera src/data/bbs-comandos.js: lista oficial (guía de Steam), recetas (guía de Steam), ficha y vías de obtención
(KHWiki, traducidas por patrones fijos; lo que no encaja se cuenta y la ficha enlaza a KHWiki)."""
import sys, json, re, unicodedata
sys.stdout.reconfigure(encoding='utf-8')
D, SALIDA = sys.argv[1], sys.argv[2]
listas = json.load(open(f'{D}/listas.json', encoding='utf-8'))
MF = json.load(open(f'{D}/mapa_final.json', encoding='utf-8'))
mapa, recetas, ERR = MF['mapa'], MF['recetas'], MF['erratas']
obt = json.load(open(f'{D}/obtencion_en.json', encoding='utf-8'))
zonas = json.load(open(f'{D}/zonas.json', encoding='utf-8'))
deck = open(f'{D}/khw/Deck_Command_KHBBS_.txt', encoding='utf-8').read()
shot = open(f'{D}/khw/Shotlock.txt', encoding='utf-8').read()
norm = lambda s: ''.join(c for c in unicodedata.normalize('NFD', s.lower()) if unicodedata.category(c) != 'Mn').strip()

MUNDOS = {'Olympus Coliseum': 'Coliseo del Olimpo', 'Castle of Dreams': 'Castillo de los Sueños', 'Disney Town': 'Ciudad Disney',
          'Enchanted Dominion': 'Reino Encantado', 'Radiant Garden': 'Vergel Radiante', 'Neverland': 'País de Nunca Jamás',
          'Never Land': 'País de Nunca Jamás', 'Dwarf Woodlands': 'Bosque de los Enanitos', 'Deep Space': 'Espacio Profundo',
          'Realm of Darkness': 'Reino de la Oscuridad', 'Land of Departure': 'Tierra de Partida',
          'Keyblade Graveyard': 'Necrópolis de Llaves Espada', 'Mysterious Tower': 'Torre de los Misterios',
          'Destiny Islands': 'Islas del Destino', 'Mirage Arena': 'Coso Virtual'}
ABREV = {'CoD': 'Castle of Dreams', 'ED': 'Enchanted Dominion', 'dw': 'Dwarf Woodlands', 'RG': 'Radiant Garden',
         'mt': 'Mysterious Tower', 'OC': 'Olympus Coliseum', 'DT': 'Disney Town', 'LoD': 'Land of Departure', 'West': 'Olympus Coliseum', 'ed': 'Enchanted Dominion', 'cod': 'Castle of Dreams', 'rg': 'Radiant Garden'}
ZONA_ES = {"Pete's Rec Room": 'Sala de Juegos de Pete', 'Aqueduct': 'acueducto', "Cinderella's Room": 'habitación de Cenicienta'}
ZONA_MUNDO_MANUAL = {'Mine': 'Dwarf Woodlands', 'Cottage': 'Dwarf Woodlands'}
TABLEROS = {'Keyblade Board': 'Tablero de la Llave Espada', 'Royal Board': 'Tablero Real', 'Hunny Pot Board': 'Tablero de Miel',
            'Spaceship Board': 'Tablero Espacial', 'Toon Board': 'Tablero Animado', 'Skull Board': 'Tablero Calavera', 'Secret Board': 'Tablero Secreto'}
PERS = {'Cinderella': 'Cenicienta', 'Minnie': 'Minnie', 'Experiment 626': 'Experimento 626', 'Pooh': 'Winnie the Pooh', 'Tigger': 'Tigger',
        'Captain Hook': 'Capitán Garfio', 'Peter Pan': 'Peter Pan', 'Gantu': 'Gantu', 'Captain Justice': 'Capitán Justicia',
        'Captain Dark': 'Capitán Oscuro', 'Terra': 'Terra', 'Ventus': 'Ventus', 'Aqua': 'Aqua', 'Maleficent': 'Maléfica',
        'Snow White': 'Blancanieves', 'Hercules': 'Hércules', 'Zack': 'Zack', 'Donald': 'Donald', 'Goofy': 'Goofy', 'Mickey': 'Mickey',
        'Stitch': 'Experimento 626', 'Rabbit': 'Conejo'}
ENEMIGOS = {k: v[0] for k, v in json.load(open(f'{D}/coso.json', encoding='utf-8'))['es'].items() if v}
ENEMIGOS.update({'Blobmob': 'Orbemedusa', 'Sonic Blaster': 'Rastreador', 'Glidewinder': 'Maleador'})
NUM = {'one': 1, 'two': 2, 'three': 3, 'four': 4, 'five': 5, 'six': 6, 'seven': 7, 'eight': 8, 'nine': 9, 'ten': 10}
CLASE = {'Basic': 'Básico', 'Advanced': 'Avanzado', 'Ultimate': 'Primera clase'}
ELEM = {'Physical': 'Físico', 'Fire': 'Fuego', 'Blizzard': 'Hielo', 'Thunder': 'Rayo', 'Dark': 'Oscuridad', 'Neutral': 'Neutro'}
# Vías que KHWiki no recoge, con su fuente (Wiki ES — Rueda Veloz).
MANUAL_VIAS = {'Rueda Veloz': [{'v': 'inicial', 't': 'Lo tiene desde el principio.', 'pj': ['aqua']},
                               {'v': 'tienda', 't': '200 platines.', 'pj': ['aqua']}]}
CANCIONES = {'Hand in Hand': 'Juntas las manos', 'Blast Away!-Gummi Ship II-': '¡Algarabía! - Nave gumi II -'}
HISTORIA = [
    (r'defeating Vanitas for the first time at the Keyblade Graveyard', 'Tras derrotar a Vanitas por primera vez en la Necrópolis de Llaves Espada.'),
    (r"defeating Maleficent's Goons with Prince Phil+ip", 'Tras derrotar a los siervos de Maléfica con el príncipe Felipe en el Reino Encantado.'),
    (r'defeating the Unversed swarm in the Flower Glade', 'Tras derrotar al enjambre de nescientes en «Flower Glade».'),
    (r'defeating the Jellyshades with Hercules', 'Tras derrotar a los Niscalinos con Hércules en «Town Near Thebes».'),
    (r'defeating the Glidewinders at the Ship Exterior', 'Tras derrotar a los Maleadores en «Ship Exterior».'),
    (r'escorting Cinderella to the ball', 'Tras escoltar a Cenicienta al baile en el Castillo de los Sueños.'),
    (r'defeating Braig in Radiant Garden', 'Tras derrotar a Braig en el Vergel Radiante.'),
    (r'rescuing Ienzo', 'Tras rescatar a Ienzo de una horda de nescientes en el Vergel Radiante.'),
    (r'meeting Peter Pan and Tinker Bell at Mermaid Lagoon', 'Tras conocer a Peter Pan y Campanilla en «Mermaid Lagoon».'),
    (r'encountering Captain Hook in the Gully', 'Tras encontrarse con el Capitán Garfio en «Gully».'),
    (r'totem pole at the Indian Camp', 'Golpeando la punta del tótem de «Indian Camp».'),
]

def miles(x):
    n = int(str(x).replace(',', '').replace('.', ''))
    return f'{n:,}'.replace(',', '.')

def enlace(t):
    m = re.match(r'\[\[(?:[^|\]]*\|)?([^\]]+)\]\]', t)
    return m.group(1) if m else t
def limpia(t):
    t = re.sub(r'\{\{c\|([^|}]+)\|[^}]*\}\}', r'\1', t)
    t = re.sub(r'\[\[(?:[^|\]]*\|)?([^\]]+)\]\]', r'\1', t)
    return re.sub(r'<[^>]+>|\{\{[^}]*\}\}', '', t).strip()
def pjs_de(t):
    sujeto = re.split(r'\b(?:can|has|have|obtains?|learns?|each|purchases?|is|are|receive)\b', t)[0]
    ps = [p for p in ('Terra', 'Ventus', 'Aqua') if p in sujeto]
    return [p.lower() for p in ps] or None
def zona(raw):
    if raw.startswith('{{c|'):
        partes = raw[4:-2].split('|'); nombre = partes[0]
        mundo = ABREV.get(partes[1]) if len(partes) > 1 else None
        if nombre == 'Mysterious Tower': return 'Torre de los Misterios'
    else:
        nombre = enlace(raw).strip()
        info = zonas.get(raw) or zonas.get(f'[[{raw}]]') or {}
        mundo = info.get('pag') if info.get('pag') in MUNDOS else ZONA_MUNDO_MANUAL.get(nombre)
    if nombre in MUNDOS: return MUNDOS[nombre]
    es = ZONA_ES.get(nombre)
    zona_txt = es if es else f'«{nombre}»'
    return f'{MUNDOS[mundo]} ({zona_txt})' if mundo in MUNDOS else (es or f'«{nombre}»')

def traduce(v, en=None):
    """(vía, texto); None si no aporta (Nexo-D, síntesis, versión PSP…); ('?', original) si no encaja."""
    t = v
    tl = limpia(v)
    if re.search(r'D-Link|Command Meld|melding|start the game with|as an? enemy drop|while riding', tl, re.I): return None
    m = re.match(r"'''(.+?)'''\s*:?\s*(.*)", t)
    if m:
        if en and m.group(1).strip().rstrip(':') != en: return None
        caidas = [f'{ENEMIGOS.get(e.strip(), "«" + e.strip() + "»")} ({p.replace(".", ",")} %)'
                  for e, p in re.findall(r'([A-Z][\w ]+?)\s*:?\s*\(([\d.]+)%', m.group(2))]
        return ('caida', ', '.join(dict.fromkeys(caidas)) + '.') if caidas else None
    for pat, txt in HISTORIA:
        if re.search(pat, tl): return ('historia', txt)
    m = re.search(r'top 3 finish on (?:the )?(Disney Drive|Grand Spree)', tl)
    if m: return ('minijuego', f'Quedando entre los tres primeros en {"Fórmula Disney" if m.group(1) == "Disney Drive" else "GP Jarana"} (Retumbódromo).')
    m = re.search(r'clearing "(.+?)" on Ice Cream Beat on Beginner', tl)
    if m: return ('minijuego', f'Superando «{CANCIONES.get(m.group(1), m.group(1))}» en Ritmo Helado (Principiante).')
    m = re.search(r'"Fantastic" score for "(.+?)" on Master Mode in Ice Cream', tl)
    if m: return ('minijuego', f'Sacando «Fantástico» en «{CANCIONES.get(m.group(1), m.group(1))}» en Ritmo Helado (Experto).')
    if 'Break the urns' in tl: return ('minijuego', 'Primer premio por ganar a Hércules en Rompe ánforas (Coliseo del Olimpo).')
    if 'Chip and Dale in Fruitball' in tl: return ('minijuego', 'Ganando por primera vez a Chip y Chop en el Frutibol (Ciudad Disney).')
    if 'final round of Fruitball' in tl: return ('minijuego', 'Ganando al Capitán Justicia o al Capitán Oscuro en la ronda final del Frutibol (Ciudad Disney).')
    if 'first ten rounds of the Games' in tl: return ('minijuego', 'Superando las diez primeras rondas de los juegos del Coliseo del Olimpo.')
    if 'Monster of the Sea' in tl: return ('mision', 'Completando «Engendro Marino» por primera vez en el Coso Virtual.')
    if 'Keepers of the Arena' in tl: return ('mision', 'Completando «Custodios del Coso» en el Coso Virtual.')
    m = re.search(r'Mirage Arena for ([\d,]+) medals at Arena Level (\d+)', tl)
    if m: return ('tienda', f'Tienda de medallas del Coso Virtual: {miles(m.group(1))} medallas, desde el nivel {m.group(2)} del Coso.')
    if 'Gluttonous Goo' in tl: return ('minijuego', 'Reto nesciente de Espacio Profundo (Aquamaligna) con rango 3.')
    t = t.replace('a bonus on the', 'a bonus panel on the')
    m = re.search(r'bonus panel on the (\[\[[^\]]+\]\]|[A-Z][\w ]+Board)', t)
    if m: return ('tablero', f'Casilla bonus del {TABLEROS.get(enlace(m.group(1)), enlace(m.group(1)))}.')
    m = re.search(r"by purchasing (\[\[[^\]]+\]\]|[A-Z][\w ]+?)\s?'s [^.]*? panel on the (\[\[[^\]]+\]\]|[A-Z][\w ]+Board)", t)
    if m:
        quien = enlace(m.group(1)).strip(); tab = enlace(m.group(2))
        return ('tablero', f'Comprando la casilla de {PERS.get(quien, quien)} en el {TABLEROS.get(tab, tab)}.')
    m = re.search(r'chests? (?:found )?(?:at|in|on) (?:the )?(\[\[[^\]]+\]\]|\{\{c\|[^}]+\}\}|[A-Z][\w\']+(?: [A-Z][\w\':]+)*)', t)
    if m:
        dos = ' (dos cofres)' if 'two chests' in t else ''
        return ('cofre', f'{zona(m.group(1))}{dos}.')
    m = re.search(r'(?:purchase|buy|bought)[^.]*?(?:Command Shop|Moogle Shop)[^.]*? for ([\d,]+) (?:\[\[)?munny', t, re.I)
    if m:
        precio = miles(m.group(1))
        k = re.search(r'(?:once|after) (\w+) worlds? (?:have|has|are|is)? ?(?:been )?(?:cleared|completed)', t)
        otra = 'obtained' in t
        if k:
            n = NUM.get(k.group(1).lower(), k.group(1))
            return ('tienda', f'{precio} platines tras completar {n} {"mundo" if n == 1 else "mundos"}' + (', o una vez conseguido por otra vía.' if otra else '.'))
        return ('tienda', f'{precio} platines, una vez conseguido por otra vía.')
    m = re.search(r'purchase [^.]*? for ([\d,]+) munny', t)
    if m: return ('tienda', f'{miles(m.group(1))} platines.')
    if 'Medal Shop' in t: return ('tienda', 'Tienda de medallas del Coso Virtual.')
    if re.search(r'(initial|starting) command|initial Command Deck|default', t, re.I): return ('inicial', 'Lo tiene desde el principio.')
    m = re.search(r'earning ([\d,]+) points in the (?:\[\[)?Sticker Album', t)
    if m: return ('minijuego', f'Consiguiendo {miles(m.group(1))} puntos en el álbum de pegatinas.')
    return ('?', limpia(t))

def tabla_deck():
    res = {}
    for sec in re.split(r'\n===', deck):
        for fila in sec.split('\n|-')[1:]:
            m = re.search(r"'''\[\[([^\]|]+)(?:\|([^\]]+))?\]\]'''", fila)
            if not m: continue
            celdas = [c.strip() for c in re.findall(r'^\|([^|\n][^\n]*)$', fila, re.M) if "'''[[" not in c]
            if len(celdas) >= 4:
                res[m.group(1).strip()] = {'ranuras': celdas[0], 'nv': celdas[1], 'clase': CLASE.get(celdas[2]), 'elem': ELEM.get(celdas[3])}
    return res
def tabla_shot():
    res = {}
    i = shot.find('==List of Shotlocks=='); j = shot.find('\n===', shot.find('Birth by Sleep', i) + 40)
    for fila in shot[i:j].split('\n|-')[1:]:
        m = re.search(r"'''(?:\[\[|\{\{c\|)([^\]|}]+)", fila)
        if not m: continue
        c = [x.strip() for x in fila.split('||')]
        res[m.group(1)] = {'objetivos': c[1], 'nv': c[2], 'elem': ELEM.get(c[3]), 'obtenido': c[-1]}
    return res
DECK, SHOT = tabla_deck(), tabla_shot()

def vias_tiro(obtenido):
    """Columna 'Obtained' de la tabla de Tiros certeros: '''Terra''': …<br>'''Ventus''': …"""
    res = []
    for quien, texto in re.findall(r"'''([\w/]+)'''\s*:\s*(.*?)(?=<br\s*/?>'''|$)", obtenido, re.S):
        ps = [p.lower() for p in quien.split('/') if p in ('Terra', 'Ventus', 'Aqua')]
        for trozo in re.split(r',\s*(?=[A-Z])', texto):
            trozo = trozo.strip().rstrip('.')
            if not trozo or 'Command Meld' in trozo: continue
            if trozo == 'Initial': r = ('inicial', 'Lo tiene desde el principio.')
            else:
                r = traduce(trozo.replace('Chest at', 'chest at').replace('Chest in', 'chest in').replace('Rare bonus on', 'bonus panel on')
                            .replace('Bonus on', 'bonus panel on').replace('Purchase at the Medal Shop', 'Medal Shop'))
            if r and r[0] != '?': res.append({'v': r[0], 't': r[1], 'pj': ps})
    return res

canon = {}
for pj, cats in listas.items():
    for l in cats.values():
        for c in l:
            n = ERR.get(c['n'], c['n']); canon.setdefault(norm(n), n)
INFO, LISTAS, sin_traducir, ejemplos_sin = {}, {}, 0, []
for pj, cats in listas.items():
    LISTAS[pj] = {}
    for cat, l in cats.items():
        for c in l:
            n = ERR.get(c['n'], c['n'])
            clave = c['sub'] if cat == 'accion' else cat
            LISTAS[pj].setdefault(clave, [])
            if n not in LISTAS[pj][clave]: LISTAS[pj][clave].append(n)
            if n in INFO: continue
            en = mapa.get(n)
            ficha = DECK.get(en, {}) if cat != 'tiro' else {k: v for k, v in SHOT.get(en, {}).items() if k != 'obtenido'}
            vias, vistos = [], set()
            def mete(x):
                if (x['v'], x['t'], tuple(x['pj'] or ())) not in vistos:
                    vistos.add((x['v'], x['t'], tuple(x['pj'] or ()))); vias.append(x)
            for v in obt.get(n, []):
                r = traduce(v, en)
                if not r: continue
                if r[0] == '?': sin_traducir += 1; ejemplos_sin.append(f'{n}: {r[1][:110]}'); continue
                mete({'v': r[0], 't': r[1], 'pj': pjs_de(v)})
            if cat == 'tiro' and en in SHOT:
                for x in vias_tiro(SHOT[en]['obtenido']): mete(x)
            if c['nota'] and not vias: mete({'v': 'tablero', 't': c['nota'], 'pj': None})
            for x in MANUAL_VIAS.get(n, []): mete(x)
            rs = [{'a': canon.get(norm(ERR.get(x['a'], x['a'])), x['a']), 'b': canon.get(norm(ERR.get(x['b'], x['b'])), x['b']),
                   # «Terrra»: errata de la guía de Steam (Bloqueo Shock).
                   'excl': x['excl'].replace('Terrra', 'Terra') if x['excl'] not in ('--', '') else None, 'tipo': x['tipo'] if x['tipo'] not in ('--', '') else None,
                   'pct': x['pct']} for x in recetas.get(norm(n), [])]
            INFO[n] = {'en': en, **{k: v for k, v in ficha.items() if v}, 'vias': vias, 'recetas': rs}
js = ['// Comandos de BBS Final Mix por personaje. GENERADO por un script (ver notas/investigacion-builds.md); no editar a mano.',
      '// Lista y nombres: guía de logros de Steam en castellano (orden del menú del juego). Recetas: tablas de síntesis de esa guía.',
      '// Ficha (ranuras, nivel, clase, elemento, objetivos) y vías de obtención: KHWiki, traducidas por patrones fijos.',
      '// `pj: null` = vale para los tres; si no, solo para esos personajes. Las zonas sin nombre oficial en castellano van entre «».',
      '', 'export const LISTAS_COMANDOS = ' + json.dumps(LISTAS, ensure_ascii=False) + ';', '',
      'export const COMANDOS = ' + json.dumps(INFO, ensure_ascii=False, indent=1) + ';', '']
open(SALIDA, 'w', encoding='utf-8').write('\n'.join(js))
print(len(INFO), 'comandos;', sin_traducir, 'viñetas sin traducir')
print('\n'.join(ejemplos_sin))
print('sin vías ni recetas:', [n for n, i in INFO.items() if not i['vias'] and not i['recetas']])
print(json.dumps({k: INFO[k] for k in ('Carga Eléctrica', 'Megafulgor', 'Rayo Célere')}, ensure_ascii=False)[:1500])
