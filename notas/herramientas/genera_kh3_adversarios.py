"""Genera src/data/kh3-adversarios.js: los 81 adversarios de la sección del gumífono de KH III.

Fuente: PowerPyx «Kingdom Hearts 3 Adversaries Locations List» (orden del gumífono y mundos donde salen).
Nombres: Wiki ES, emparejados por el nombre japonés con KHWiki; sin fuente, inglés entre «».
Con --imagenes, baja además el render de cada enemigo de KHWiki («<nombre> KHIII.png») a la carpeta indicada
(se pasan a WebP aparte, con Pillow).

Uso: python notas/herramientas/genera_kh3_adversarios.py [--imagenes <carpeta>]
"""
import html
import json
import re
import sys
import time
import urllib.parse
import urllib.request

sys.stdout.reconfigure(encoding='utf-8')
UA = {'User-Agent': 'kh-guia-personal/1.0'}
SALIDA = 'src/data/kh3-adversarios.js'

NOMBRES = {
    'Shadow': 'Sombra', 'Neoshadow': 'Neosombra', 'Fluttering': 'Aleteador', 'Flame Core': 'Pironúcleo', 'Water Core': 'Hidronúcleo',
    'Earth Core': 'Geonúcleo', 'Dark Inferno': 'Infierno Oscuro', 'Soldier': 'Soldado', 'High Soldier': 'Gran Soldado',
    'Air Soldier': 'Soldado Volador', 'Large Body': 'Grandullón', 'Helmed Body': 'Gran Yelmo', 'Vermilion Samba': 'Samba Bermellón',
    'Marine Rumba': 'Rumba Marina', 'Gold Beat': 'Bachata Dorada', 'Malachite Bolero': 'Bolero Esmeralda', 'Popcat': 'Felino',
    'Vitality Popcat': 'Felino Vital', 'Magic Popcat': 'Felino Mágico', 'Focus Popcat': 'Felino Atinado', 'Munny Popcat': 'Felino Rico',
    'Bizarre Archer': 'Arquero Estrambótico', 'Rock Troll': 'Troll de Roca', 'Metal Troll': 'Troll de Metal', 'Satyr': 'Sátiro',
    'Mechanitaur': 'Mecanitauro', 'Toy Trooper': 'Soldadito de Juguete', 'Pole Cannon': 'Cañón', 'Marionette': 'Marioneta',
    'Powerwild': 'Primate Y', 'Pogo Shovel': 'Pala Saltarina', 'Parasol Beauty': 'Dama del Parasol', 'Chief Puff': 'Pelusilla Jefe',
    'Puffball': 'Pelusilla', 'Chaos Carriage': 'Auriga Desbocado', 'Winterhorn': 'Cuerno Hibernal', 'Frost Serpent': 'Serpiente Gélida',
    'Vaporfly': 'Mosvaporosa', 'Sea Sprite': 'Espíritu Marino', 'Spear Lizard': 'Lanzagarto', 'Anchor Raider': 'Ancla Pirata',
    'Tireblade': 'Filo Drenante', 'Darkside': 'Lado Oscuro', 'Demon Tower': 'Torre Maldita', 'King of Toys': 'Rey de los Juguetes',
    'Grim Guardianess': 'Madre Enloquecida', 'Sköll': 'Sköll', 'Raging Vulture': 'Buitre enfurecido', 'Lightning Angler': 'Rape Eléctrico',
    'Darkubes': 'Cuboscuros', 'Lich': 'Lich', 'Catastrochorus': 'Catastrocoro', 'Cherry Flan': 'Flan de Cereza',
    'Strawberry Flan': 'Flan de Fresa', 'Orange Flan': 'Flan de Naranja', 'Banana Flan': 'Flan de Plátano', 'Grape Flan': 'Flan de Uva',
    'Honeydew Flan': 'Flan de Melón', 'Watermelon Flan': 'Flan de Sandía', 'Dusk': 'Umbrío', 'Sniper': 'Francotirador',
    'Reaper': 'Segador', 'Ninja': 'Ninja', 'Gambler': 'Tahúr', 'Berserker': 'Enloquecedor', 'Sorcerer': 'Hechicero',
    'Flood': 'Aluvión', 'Flowersnake': 'Florisierpe', 'Spiked Turtletoad': 'Tortuga Sapo Picuda', 'Turtletoad': 'Tortuga Sapo',
    'Lump of Horror': 'Masa de Terror', 'Gigas: Power Class': 'Gigas Poderoso', 'Gigas: Speed Class': 'Gigas Veloz',
    'Gigas: Gunner Class': 'Gigas Cañón', 'Beasts & Bugs': 'Bichos y monstruos', 'Patchwork Animals': 'Peluches',
    'Air Droids': 'Robots aéreos', 'Bouncy Pets': 'Mascotas saltarinas', 'Supreme Smasher': 'Superaplastador',
    'Angelic Amber': 'Amber Angélica',
}
ERRATAS = {'Manny Pop': 'Munny Popcat'}  # erratas de la lista de PowerPyx
TIPOS = {'Heartless': 'Sincorazón', 'Nobodies': 'Incorpóreos', 'Unversed': 'Nescientes', 'Others': 'Otros'}
MUNDOS = {'Olympus': 'El Olimpo', 'Twilight Town': 'Villa Crepúsculo', 'Toy Box': 'Caja de juguetes',
          'Kingdom of Corona': 'Reino de Corona', 'Monstropolis': 'Monstruópolis', 'Arendelle': 'Arendelle',
          'The Caribbean': 'El Caribe', 'San Fransokyo': 'San Fransokyo', 'San Fransoyko': 'San Fransokyo',
          'Keyblade Graveyard': 'Necrópolis de Llaves Espada'}
# Las notas entre paréntesis de PowerPyx, en castellano (resumidas).
NOTAS = {
    'Dark Inferno': 'En un portal de batalla de la Necrópolis de Llaves Espada, después de la historia.',
    'High Soldier': 'San Fransokyo, de noche.',
    'Metal Troll': 'San Fransokyo: es el combate del puente al principio del mundo, imposible de perder.',
    'Mechanitaur': 'En un portal de batalla de San Fransokyo, después de la historia.',
    'Vaporfly': 'El Caribe: al principio del mundo montas sobre ellas para derribar a un jefe volador y puedes derribar a otras.',
    'Darkside': 'El primer enemigo del juego, en el tutorial: imposible de perder.',
    'Demon Tower': 'En un portal de batalla de Monstruópolis, después de la historia.',
    'Catastrochorus': 'San Fransokyo: jefe de la historia, imposible de perder.',
    'Sniper': 'En el portal de batalla de la mansión de Villa Crepúsculo, después de la historia.',
    'Berserker': 'En un portal de batalla de Arendelle, después de la historia.',
    'Sorcerer': 'En el portal de batalla de la mansión de Villa Crepúsculo, después de la historia.',
}


def bajar(url):
    return urllib.request.urlopen(urllib.request.Request(url, headers=UA), timeout=60).read()


def slug(t):
    return re.sub(r'[^a-z0-9]+', '-', t.lower().replace('ö', 'o')).strip('-')


def lista():
    h = bajar('https://www.powerpyx.com/kingdom-hearts-3-adversaries-locations-list/').decode('utf-8')
    h = h[h.find('entry-content'):h.find('</article>')]
    h = re.sub(r'<br\s*/?>|</p>|</li>|</h\d>', '\n', h)
    h = re.sub(r'<h(\d)[^>]*>', lambda m: '\n' + '#' * int(m.group(1)) + ' ', h)
    h = html.unescape(re.sub(r'<[^>]+>', '', h)).replace('\xa0', ' ')
    out, tipo = [], None
    for l in (re.sub(r'\s+', ' ', x).strip() for x in h.split('\n')):
        if l.startswith('## '):
            tipo = TIPOS.get(l[3:].rstrip(':'))
            continue
        m = re.match(r'^(.+?) [–-] (.+)$', l)
        if tipo and m and not l.startswith('That'):
            en = ERRATAS.get(m[1].strip(), m[1].strip())
            mundos = [MUNDOS[w.strip()] for w in re.sub(r'\(.*?\)', '', m[2]).split(',')
                      if w.strip() in MUNDOS]
            out.append({'id': slug(en), 'en': en, 'nombre': NOMBRES.get(en, f'«{en}»'), 'tipo': tipo,
                        'mundos': list(dict.fromkeys(mundos)), **({'nota': NOTAS[en]} if en in NOTAS else {})})
    return out


def imagenes(advs, carpeta):
    titulos = {a['id']: f'File:{a["en"].replace(":", "")} KHIII.png' for a in advs}
    lst = list(titulos.items())
    urls = {}
    for i in range(0, len(lst), 40):
        u = 'https://www.khwiki.com/api.php?' + urllib.parse.urlencode(dict(
            action='query', prop='imageinfo', iiprop='url', format='json', titles='|'.join(t for _, t in lst[i:i + 40])))
        j = json.loads(bajar(u))
        norm = {x['to']: x['from'] for x in j['query'].get('normalized', [])}
        for p in j['query']['pages'].values():
            if 'imageinfo' in p:
                urls[norm.get(p['title'], p['title'])] = p['imageinfo'][0]['url']
    for aid, t in titulos.items():
        url = urls.get(t)
        if not url:
            print('Sin imagen:', t)
            continue
        open(f'{carpeta}/adv-{aid}.png', 'wb').write(bajar(url))
        time.sleep(0.3)


def main():
    advs = lista()
    if len(advs) != 81:
        sys.exit(f'Se esperaban 81 adversarios: {len(advs)}')
    for a in advs:
        if a['nombre'].startswith('«'):
            print('Sin nombre en castellano:', a['en'])
    if '--imagenes' in sys.argv:
        imagenes(advs, sys.argv[sys.argv.index('--imagenes') + 1])
    js = ('// GENERADO por notas/herramientas/genera_kh3_adversarios.py: no editar a mano.\n'
          '// Adversarios del gumífono de KH III en su orden (PowerPyx). Nombres: Wiki ES por nombre japonés.\n'
          'export const ADVERSARIOS_KH3 = ' + json.dumps(advs, ensure_ascii=False, indent=1) + ';\n')
    open(SALIDA, 'w', encoding='utf-8').write(js)
    print('OK', len(advs), 'adversarios')


if __name__ == '__main__':
    main()
