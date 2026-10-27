# Diccionario de objetos de KH II (inglés de Fandom/KHWiki -> castellano). Fuentes: guía de Megido (GameFAQs 82144),
# guía de logros en castellano (Steam 3298321979) y Wiki ES (fichas de material y páginas Receta, Armadura, Accesorio).
import re
FAM = {  # familia: (masculino, femenino)
    'Blazing': ('ígneo', 'ígnea'), 'Frost': ('frío', 'fría'), 'Lightning': ('luminoso', 'luminosa'), 'Lucid': ('claro', 'clara'),
    'Power': ('fuerte', 'fuerte'), 'Dark': ('oscuro', 'oscura'), 'Dense': ('denso', 'densa'), 'Remembrance': ('evocador', 'evocadora'),
    'Tranquility': ('sosegado', 'sosegada'), 'Bright': ('vital', 'vital'), 'Energy': ('de poder', 'de poder'), 'Serenity': ('sereno', 'serena'),
    'Twilight': ('crepuscular', 'crepuscular'), 'Mythril': ('de mitrilo', 'de mitrilo'),
}
FIJOS = {
    'Potion': 'Poción', 'Hi-Potion': 'Ultrapoción', 'Mega-Potion': 'Omnipoción', 'Ether': 'Éter', 'Mega-Ether': 'Omniéter', 'Elixir': 'Elixir',
    'Megalixir': 'Omnielixir', 'Tent': 'Tienda', 'Drive Recovery': 'Recarga de Fusión', 'High Drive Recovery': 'Recarga de Fusión+',
    'AP Boost': 'Impulso hábil', 'Power Boost': 'Impulso de vigor', 'Magic Boost': 'Impulso mágico', 'Defense Boost': 'Impulso defensivo',
    'Orichalcum': 'Orichalcum', 'Orichalcum+': 'Orichalcum+', 'Skill Recipe': 'Receta hábil', 'Mega-Recipe': 'Omnireceta',
    'Recovery Recipe': 'Receta de recarga', 'Star Recipe': 'Receta estelar', 'Guard Recipe': 'Receta de bloqueo', 'King Recipe': 'Receta del rey',
    'Queen Recipe': 'Receta de la reina', 'Moon Recipe': 'Receta lunar', 'Style Recipe': 'Receta de estilo', 'Ultimate Recipe': 'Receta definitiva',
    'Rare Document': 'Receta legajo vetusto', 'Ukulele Charm': 'Amuleto ukelele', 'Torn Pages': 'Páginas arrancadas', 'Draw Ring': 'Anillo magnético',
    'Skill Ring': 'Anillo hábil', 'Gaia Belt': 'Cinto de Gaia', 'Cosmic Arts': 'Arte cósmica', 'Cosmic Belt': 'Cinto cósmico',
    'Cosmic Chain': 'Cadena cósmica', 'Cosmic Ring': 'Anillo cósmico', 'Manifest Illusion': 'Ilusión materializada', 'Lost Illusion': 'Ilusión extraviada',
    'Gull Wing': 'Ala de Gaviota', 'Proof of Nonexistence': 'Marca del Incorpóreo', 'Meteor Staff': 'Bastón meteórico', 'Ogre Shield': 'Escudo de ogro',
    'Grand Ribbon': 'Insignia ilustre', "Executive's Ring": 'Anillo supremo', 'Serenity Crystal': 'Cristal sereno',
    'Feather Charm': 'Amuleto de Plumas',
}
TRAD: dict[str, str] = {}  # sin fuente en castellano: traducido (se marca en la web)
def objeto(en):
    en = re.sub(r'\[\[(?:[^|\]]*\|)?([^\]]*)\]\]', r'\1', en.split('<br>')[-1]).strip()
    if en in FIJOS: return FIJOS[en], False
    if en in TRAD: return TRAD[en], True
    m = re.match(r'^(\w+) (Shard|Stone|Gem|Crystal)$', en)
    if m and m.group(1) in FAM:
        f, t = m.groups(); mas, fem = FAM[f]
        if t == 'Shard': return ('Trozo de mitrilo' if f == 'Mythril' else 'Guijarro del ocaso' if f == 'Twilight' else f'Guijarro {mas}'), False
        if t == 'Stone': return f'Roca {fem}', False
        if t == 'Gem': return f'Piedra {fem}', False
        return f'Cristal {mas}', False
    m = re.match(r'^(.*) Map$', en)
    if m: return None, None  # los mapas se nombran aparte
    raise KeyError(en)
