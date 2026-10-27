"""Genera src/data/kh2fm-armas.js: las 64 armas de Sora, Donald y Goofy en KH II Final Mix.

Uso: python genera_kh2fm_armas.py <raíz-del-proyecto>
- Datos (fuerza, magia, habilidad y cómo se consigue, con los cambios de Final Mix): wiki inglesa de Fandom,
  «Kingdom Hearts II weapons». Cuando una celda tiene dos filas, la segunda es la de Final Mix.
- Nombres en castellano (NOMBRES): Wiki ES, emparejados por el enlace [[en:...]] de cada página o, si no lo tiene, por el nombre
  japonés (kana) de su ficha frente al de KHWiki. Las «+» y las de receta, de la página «Receta» de la Wiki ES.
  Habilidades (HABILIDADES): Wiki ES por el mismo método; Extraforma, de la guía de Megido.
- Imágenes: KHWiki, en assets/img/kh2fm/armas/ (las convierte a WebP un script aparte).
"""
import sys, re, json, urllib.request, urllib.parse, datetime

sys.stdout.reconfigure(encoding='utf-8')  # type: ignore[attr-defined]
raiz = sys.argv[1]
slug = lambda s: re.sub(r'[^a-z0-9]+', '-', s.lower().replace("'", '').replace('+', '-plus')).strip('-')
lim = lambda s: re.sub(r"\{\{(?:linkable|c)\|([^|}]*)(?:\|[^}]*)?\}\}", r'\1', re.sub(r'\[\[(?:[^|\]]*\|)?([^\]]*)\]\]', r'\1', s or '')).strip()

NOMBRES = {
    'Kingdom Key': 'Cadena del Reino', 'Star Seeker': 'Explorador Estelar', 'Hidden Dragon': 'Dragón Oculto', "Hero's Crest": 'Emblema de Héroe',
    'Monochrome': 'Monocromo', 'Follow the Wind': 'Sigue al Viento', 'Circle of Life': 'Círculo de Vida', 'Oathkeeper': 'Prometida',
    'Gull Wing': 'Ala de Gaviota', 'Photon Debugger': 'Depurador Fotónico', 'Rumbling Rose': 'Rosa del Estruendo', 'Mysterious Abyss': 'Abismo Misterioso',
    'Guardian Soul': 'Guardián del Alma', 'Wishing Lamp': 'Lámpara Mágica', 'Sweet Memories': 'Dulces Recuerdos', 'Decisive Pumpkin': 'Calabaza Decisiva',
    'Sleeping Lion': 'León Durmiente', 'Bond of Flame': 'Lazo de Llamas', 'Two Become One': 'Dos Serán Uno', 'Oblivion': 'Recuerdos Lejanos',
    'Fatal Crest': 'Emblema Fatal', 'Fenrir': 'Fenrir', 'Ultima Weapon': 'Arma Artema', "Winner's Proof": 'Prueba Triunfal',
    "Mage's Staff": 'Bastón de Mago', 'Hammer Staff': 'Mazo Mágico', 'Comet Staff': 'Bastón Cometa', 'Victory Bell': 'Campana Victoriosa',
    "Lord's Broom": 'Escoba Real', 'Wisdom Wand': 'Bastón Sabio', 'Rising Dragon': 'Dragón Naciente', 'Meteor Staff': 'Bastón Meteórico',
    'Nobody Lance': 'Lanza de Nadie', 'Centurion': 'Centurión', 'Centurion+': 'Centurión+', 'Save the Queen': 'Viva la Reina',
    'Save the Queen+': 'Viva la Reina+', 'Plain Mushroom': 'Seta Benévola', 'Plain Mushroom+': 'Seta Benévola+', 'Precious Mushroom': 'Seta Ventajosa',
    'Precious Mushroom+': 'Seta Ventajosa+', 'Premium Mushroom': 'Seta Suprema',
    "Shaman's Relic": 'Cetro Conjurador', "Shaman's Relic+": 'Cetro Conjurador+',
    "Knight's Shield": 'Escudo Leal', 'Adamant Shield': 'Adamantino', 'Falling Star': 'Estrella Fugaz', 'Chain Gear': 'Escudo de Cadenas',
    'Dreamcloud': 'Nube de Ensueño', 'Knight Defender': 'Custodio', 'Ogre Shield': 'Escudo de Ogro', 'Genji Shield': 'Escudo de Genji',
    'Akashic Record': 'Disco Akáshico', 'Akashic Record+': 'Disco Akáshico+', 'Nobody Guard': 'Coraza Incorpórea', 'Frozen Pride': 'Orgullo Helado',
    'Frozen Pride+': 'Orgullo Helado+', 'Save the King': 'Viva el Rey', 'Save the King+': 'Viva el Rey+', 'Joyous Mushroom': 'Seta Dichosa',
    'Joyous Mushroom+': 'Seta Dichosa+', 'Majestic Mushroom': 'Seta Señorial', 'Majestic Mushroom+': 'Seta Señorial+', 'Ultimate Mushroom': 'Seta Excepcional',
}
# Sin nombre en castellano en ninguna fuente: traducidos (la web lo marca). El Cetro Conjurador («Spell's Relic» en Final Mix)
# sale de la página «Cetro de Chamán, o Cetro Conjurador» de la Wiki ES.
TRADUCIDOS: dict[str, tuple[str, str]] = {}
HABILIDADES = {
    'Damage Control': 'Control de Daños', 'Defender': 'Defensor', 'Air Combo Plus': 'Combo Aéreo +1', 'MP Rage': 'Aspirar Daño',
    'Air Combo Boost': 'Extracombo Aéreo', 'Item Boost': 'Extraobjetos', 'Draw': 'Atracción', 'MP Haste': 'Prisa PM', 'MP Hastera': 'Prisa PM+',
    'MP Hastega': 'Prisa PM++', 'Form Boost': 'Extraforma', 'Experience Boost': 'Extraexperiencia', 'Thunder Boost': 'Extraelectro',
    'Finishing Plus': 'Letal +', 'Blizzard Boost': 'Extrahielo', 'Reaction Boost': 'Extrarreacción', 'Jackpot': 'Más Premios', 'Lucky Lucky': 'Buena Suerte',
    'Drive Converter': 'Fusionizador', 'Combo Boost': 'Extracombo', 'Combo Plus': 'Combo +1', 'Fire Boost': 'Extrapiro', 'Light and Dark': 'Luz y Oscuridad',
    'Drive Boost': 'Extrafusión', 'Berserk Charge': 'Carga de Locura', 'Negative Combo': 'Combo Negativo', 'No Experience': 'Experiencia 0',
    'Hyper Healing': 'Salud de Hierro', 'Protect': 'Coraza', 'Protectra': 'Coraza+', 'Protectga': 'Coraza++',
}
TIENDAS = {'weapon shop in Twilight Town': 'la tienda de armas de Villa Crepúsculo', 'Moogle Shop in Underworld': 'la tienda moguri del Inframundo',
           'Moogle Shop in Port Royal': 'la tienda moguri de Port Royal', 'Moogle Shop in Pride Lands': 'la tienda moguri de las Tierras del Reino',
           'Moogle Shop in World That Never Was': 'la tienda moguri de El Mundo Inexistente'}
ENEMIGOS = {'Shaman': 'el Chamán', 'Necromancer': 'el Necromante', 'Dragoon': 'el Dragón', 'Bookmaster': 'el Bibliotecario', 'Runemaster': 'el Arcanista', 'Gambler': 'el Tahúr'}
RECETAS = {'Ultimate Recipe': 'Receta definitiva', 'Strength Beyond Strength recipe': 'Receta trascendental', 'Queen Recipe': 'Receta de la reina',
           'Road to Discovery recipe': 'Receta experimental', 'King Recipe': 'Receta del rey'}
COMO = {  # el resto, frase a frase
    'Default.': 'Desde el principio.', 'Default weapon.': 'Desde el principio.',
    'Speak to Flora, Fauna, and Merryweather in Mysterious Tower.': 'Al hablar con las tres hadas en la Torre de los Misterios.',
    'Open the Gate in Land of Dragons.': 'Al terminar la primera visita a Tierra de Dragones.',
    'Open the Gate in Olympus Coliseum.': 'Al terminar la primera visita al Coliseo del Olimpo.',
    'Open the Gate in Disney Castle.': 'Al terminar el Castillo Disney (Río Eterno).',
    'Open the Gate in Port Royal.': 'Al terminar la primera visita a Port Royal.',
    'After Simba talks to Mufasa in Pride Lands.': 'Cuando Simba habla con Mufasa, en las Tierras del Reino.',
    'Open the Gate in Twilight Town.': 'Al terminar la segunda visita a Villa Crepúsculo.',
    'Speak to Yuna in Hollow Bastion after Battle of the 1000 Heartless.': 'Habla con Yuna en el Postigo de Bastión Hueco tras la Batalla de los 1000 Sincorazón (es un cofre de la sección Tesoros).',
    'Defeat Hostile Program and exit Space Paranoids.': 'Al vencer al Programa Hostil y salir de Espacio Paranoico.',
    "Reunite with Beast in Beast's Castle (second visit).": 'Al reencontrarte con Bestia en la segunda visita al Castillo de Bestia.',
    "Complete Ursula's Revenge in Atlantica.": 'Al completar la canción «Ursula\'s Revenge» en Atlántica.',
    'Complete Olympus Coliseum (second visit).': 'Al terminar la segunda visita al Coliseo del Olimpo.',
    'Defeat Genie Jafar in Agrabah.': 'Al vencer a Yafar convertido en genio, en Agrabah.',
    'Complete The Expotition in 100 Acre Wood.': 'Al completar La exposición en el Bosque de los Cien Acres.',
    'Defeat The Experiment in Halloween Town (second visit).': 'Al vencer al Experimento en la segunda visita a Ciudad de Halloween.',
    'Talk to Leon before returning to Space Paranoids.': 'Al hablar con Leon antes de volver a Espacio Paranoico.',
    'Defeat all Nobodies in Betwixt and Between.': 'Al vencer a todos los incorpóreos de Ni aquí ni allí (Villa Crepúsculo).',
    'Defeat Roxas in The World That Never Was (FM only).': 'Al vencer a Roxas en El Mundo Inexistente.',
    'Defeat Xigbar in The World That Never Was': 'Al vencer a Xigbar en El Mundo Inexistente.',
    'Complete the Goddess of Fate Cup in Underdrome.': 'Al ganar la Copa Diosa del Destino en el Infiernódromo.',
    'Return to Sephiroth after defeating him and talking to Cloud.': 'Vuelve adonde estaba Sephiroth tras vencerlo y hablar con Cloud.',
    "Received from Mushroom XIII's No. 13 if all others have been satisfied (FM only).": 'Te la da la seta N.º XIII de la Micorganización XIII cuando has satisfecho a las otras doce.',
    'Complete Cerberus Cup in Underdrome.': 'Al ganar la Copa Cerbero en el Infiernódromo.',
    'Complete Titan Cup in Underdrome.': 'Al ganar la Copa Titán en el Infiernódromo.',
    'Treasure chest at Seadrift Keep in Ship Graveyard.': 'Cofre del Cementerio de Barcos - Fortín del Náufrago, en Port Royal (sección Tesoros).',
    'Treasure chest at Throne Room in Land of Dragons.': 'Cofre del Salón del Trono de Tierra de Dragones (sección Tesoros).',
}

def como(en):
    en = en.strip()
    if en in COMO: return COMO[en]
    m = re.match(r'Costs ([\d,]+) Munny at the (.*)\.$', en)
    if m: return f'Se compra por {m.group(1).replace(",", ".")} platines en {TIENDAS[m.group(2)]}.'
    m = re.match(r'Dropped by (\w+) \((\d+)% chance\)( \(FM only\))?\.$', en)
    if m: return f'Lo suelta {ENEMIGOS[m.group(1)]} ({m.group(2)} %).'
    m = re.match(r'Dropped by Mushroom XIII \((\d+)% at rank (\w), or (\d+)% at rank (\w)\)\.$', en)
    if m: return f'Lo suelta la Micorganización XIII: {m.group(1)} % con rango {m.group(2)} o {m.group(3)} % con rango {m.group(4)} en su reto.'
    m = re.match(r'Synthesis, requires the (.*?)( \(FM only\))?\.$', en)
    if m: return f'Fabricándolo con la {RECETAS[m.group(1)]} (sección Orfebrería).'
    m = re.match(r'Synthesis, requires (.*)\.$', en)
    if m: return f'Mejorando {NOMBRES[m.group(1)]} en la Orfebrería (sección Orfebrería).'
    sys.exit(f'Sin traducción: {en!r}')

def num(v):
    v = (v or '').strip()
    return 0 if v in ('', '—', '-', 'None') else int(v)

q = urllib.parse.urlencode({'action': 'parse', 'page': 'Kingdom Hearts II weapons', 'prop': 'wikitext', 'format': 'json'})
t = json.load(urllib.request.urlopen(urllib.request.Request(f'https://kingdomhearts.fandom.com/api.php?{q}', headers={'User-Agent': 'Mozilla/5.0'})))['parse']['wikitext']['*']
COLS = {'Sora': ['fue', 'mag', 'hab', 'desc', 'como'], 'Donald': ['fue', 'mag', 'hab', 'desc', 'como'], 'Goofy': ['fue', 'hab', 'desc', 'como']}
GRUPOS = {'Sora': ('sora', 'Llaves espada de Sora'), 'Donald': ('donald', 'Bastones de Donald'), 'Goofy': ('goofy', 'Escudos de Goofy')}
grupos = []
for sec, cols in COLS.items():
    i = t.index(f"=={sec}'s weapons=="); j = t.index('\n==', i + 5)
    armas = []
    for f in [f.strip('\n').split('\n|}')[0] for f in t[i:j].split('\n|-')[1:]]:
        celdas = [c for c in re.split(r'\n\|\s*', '\n' + f) if c.strip()]
        if re.search(r'\[\[File:', celdas[0]):
            vals: dict[str, str] = {'en': lim(celdas[0].split('<br>')[-1])}
            span: set[str] = set()
            for c, v in zip(cols, celdas[1:]):
                m = re.match(r'rowspan="?2"?\s*\|\s*(.*)', v, re.S)
                if m: span.add(c); v = m.group(1)
                vals[c] = lim(v)
            armas.append((vals, span))
        else:  # fila de Final Mix: rellena, en orden, las columnas que no ocupan las dos filas
            a, span = armas[-1]
            for c, v in zip([c for c in cols if c not in span], celdas): a[c] = lim(v)
    lista = []
    for a, _ in armas:
        en = a['en']
        x = {'id': slug(en), 'en': en, 'img': slug(en)}
        if en in TRADUCIDOS: x['nombre'], x['enFM'] = TRADUCIDOS[en]; x['nt'] = True
        else: x['nombre'] = NOMBRES[en]
        x['fue'] = num(a.get('fue'))
        if 'mag' in cols: x['mag'] = num(a.get('mag'))
        h = a.get('hab', '—').strip()
        if h not in ('—', '-', ''): x['hab'] = HABILIDADES[h]
        x['como'] = como(a['como'])
        if '(FM only)' in a['como']: x['fm'] = True
        lista.append(x)
    gid, titulo = GRUPOS[sec]
    grupos.append({'id': gid, 'titulo': titulo, 'armas': lista})

hoy = datetime.date.today().strftime('%d/%m/%Y')
js = ('// Generado por notas/herramientas/genera_kh2fm_armas.py (no editar a mano). Consultado el ' + hoy + '.\n'
      '// Datos: Fandom (inglés), «Kingdom Hearts II weapons», con los valores de Final Mix. Nombres: Wiki ES. Imágenes: KHWiki.\n'
      '// nt: nombre traducido (sin fuente en castellano; enFM es el nombre inglés de Final Mix). fm: nueva en Final Mix.\n'
      'export const ARMAS_KH2FM = ' + json.dumps(grupos, ensure_ascii=False, indent=1) + ';\n')
open(f'{raiz}/src/data/kh2fm-armas.js', 'w', encoding='utf-8', newline='\n').write(js)
print('OK', sum(len(g['armas']) for g in grupos), 'armas')
