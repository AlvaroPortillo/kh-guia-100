"""Genera src/data/kh3-cocina.js: los 28 platos del bistró de KH III y sus 59 ingredientes.

Fuente: KHWiki («Le Grand Bistrot»: platos, ingredientes, minijuego y dificultad; «Ingredients»: grupo,
dónde se consigue cada ingrediente y si se vende en la tienda Moguri). Se baja al ejecutarlo.
Platos e ingredientes van en inglés entre «» (la Wiki ES no los tiene), salvo las frutas de los Siete
Flantásticos, que sí tienen nombre en la Wiki ES («Los Siete Flantásticos»).

Uso: python notas/herramientas/genera_kh3_cocina.py
"""
import json
import re
import sys
import urllib.parse
import urllib.request

sys.stdout.reconfigure(encoding='utf-8')
UA = {'User-Agent': 'kh-guia-personal/1.0'}
SALIDA = 'src/data/kh3-cocina.js'

FRUTAS = {'Sour Cherry': 'Cereza Agria', 'Strawberry': 'Fresa', 'Blood Orange': 'Naranja sanguina', 'Banana': 'Plátano',
          'Grapes': 'Uva', 'Melon': 'Melón', 'Watermelon': 'Sandía'}
FLAN_DE = {'Sour Cherry': 'cereza', 'Strawberry': 'fresa', 'Blood Orange': 'naranja', 'Banana': 'platano', 'Grapes': 'uva',
           'Melon': 'melon', 'Watermelon': 'sandia'}
GRUPOS = {'Meat': 'Carne', 'Seafood': 'Pescado y marisco', 'Vegetables': 'Verduras', 'Mushrooms': 'Setas', 'Herbs': 'Hierbas',
          'Fruit': 'Fruta', 'Other': 'Otros', 'Special': 'Frutas de los flanes'}
CATEGORIAS = {'Starters': 'Entrantes', 'Soups': 'Sopas', 'Fish dishes': 'Pescados', 'Meat dishes': 'Carnes', 'Desserts': 'Postres'}
MINIJUEGOS = {'Chop the Ingredients': 'cortar', 'Crack the Egg': 'huevo', 'Flambé the Food': 'flambear', 'Grind the Pepper': 'pimienta'}
# Zonas con nombre en castellano (las mismas que usa la guía en Portafortuna y Tesoros); el resto, en inglés.
ZONAS = {'Overlook': 'Tebas: Mirador', 'The Big Olive': 'Tebas: La gran aceituna', 'Agora': 'Tebas: Ágora',
         'Tram Common': 'Plazoleta del tranvía', 'The Woods': 'El bosque', 'Upper Level': 'Almacén de puertas: Nivel superior',
         'Mountain Ridge': 'Montaña del norte: Cordillera', 'Snowfield': 'Montaña del norte: Campo de nieve',
         'Docks': 'Port Royal: Muelles', 'Fort': 'Port Royal: Fuerte', 'Isla Verdemontaña': 'Isla Verdemontaña',
         'Isla De Los Mástiles': 'Isla de los Mástiles', 'South District': 'Distrito Sur'}


def wikitexto(titulos):
    u = 'https://www.khwiki.com/api.php?' + urllib.parse.urlencode(dict(
        action='query', prop='revisions', rvprop='content', rvslots='main', redirects=1, format='json', titles='|'.join(titulos)))
    j = json.loads(urllib.request.urlopen(urllib.request.Request(u, headers=UA), timeout=60).read())
    return {p['title']: p['revisions'][0]['slots']['main']['*'] for p in j['query']['pages'].values() if 'revisions' in p}


def slug(t):
    return re.sub(r'[^a-z0-9]+', '-', t.lower().replace('ê', 'e').replace('é', 'e').replace('è', 'e').replace("'", '')).strip('-')


def limpia(t):
    t = re.sub(r'<ref[^>]*?/>|<ref.*?</ref>', '', t, flags=re.S)
    t = re.sub(r'\{\{c\|([^|}]+)\|[^}]*\}\}', r'\1', t)
    t = re.sub(r'\[\[(?:[^|\]]*\|)?([^\]]+)\]\]', r'\1', t)
    return t.strip()


def nombre(en):
    return FRUTAS.get(en, f'«{en}»')


def main():
    pg = wikitexto(['Le Grand Bistrot', 'Ingredients'])
    bistro, ingr = pg['Le Grand Bistrot'], pg['Ingredients']

    platos = []
    for cat, cuerpo in re.findall(r"===([^=]+)===\n(\{\|.*?\n\|\})", bistro, re.S):
        if cat not in CATEGORIAS:
            continue
        for fila in cuerpo.split('\n|-\n')[1:]:
            celdas = fila.split('||')
            if len(celdas) < 6:
                continue
            en = re.search(r"'''([^']+)'''", celdas[1])[1]
            ings = [re.sub(r'\[\[File:[^\]]*\]\]\s*', '', x).strip() for x in celdas[3].split('|', 1)[-1].split('<br>')]
            ings = [re.sub(r'\s+', ' ', x) for x in ings if x]
            especial = 'Special KHIII' in celdas[3]
            juego = limpia(celdas[4])
            platos.append({'id': slug(en), 'en': en, 'cat': CATEGORIAS[cat], 'menu': 'especial' if especial else 'clasico',
                           'ings': ings, 'juego': MINIJUEGOS.get(juego, juego), 'dif': int(re.sub(r'\D', '', celdas[5]) or 0)})

    ingredientes = []
    grupo = None
    tabla = ingr[ingr.find('==List of Ingredients=='):ingr.find('==Notes')]
    for fila in tabla.split('\n|-\n')[1:]:
        g = re.search(r"\{\{a\|(Meat|Seafood|Vegetables|Mushrooms|Herbs|Fruit|Other|Special)\}\}", fila)
        if g and 'rowspan' in fila:
            grupo = g[1]
            fila = fila.split('\n', 1)[1] if '\n' in fila else fila
        m = re.search(r"'''\{\{a\|([^}]+)\}\}'''.*?\}\}\|\|(.*?)\|\|(.*?)\|\|", fila, re.S)
        if not m:
            continue
        en, donde, compra = m[1].strip(), limpia(m[2]), m[3].strip()
        zonas = []
        for z in [x.strip() for x in donde.split(',') if x.strip()]:
            if z in FLAN_DE or z.endswith('Flan'):
                continue
            zonas.append(ZONAS.get(z, f'«{z}»'))
        ingredientes.append({'id': slug(en), 'en': en, 'nombre': nombre(en), 'grupo': GRUPOS[grupo], 'zonas': zonas,
                             'tienda': compra not in ('—', '-', ''), 'flan': FLAN_DE.get(en)})

    por_en = {i['en']: i['id'] for i in ingredientes}
    for p in platos:
        for x in p['ings']:
            if x not in por_en:
                sys.exit(f'Ingrediente sin ficha en el plato {p["en"]}: {x}')
        p['ings'] = [por_en[x] for x in p['ings']]
        p['nombre'] = f'«{p["en"]}»'
    if len(platos) != 28 or len(ingredientes) != 59:
        sys.exit(f'Se esperaban 28 platos y 59 ingredientes: {len(platos)} y {len(ingredientes)}')
    clasicos = sum(p['menu'] == 'clasico' for p in platos)
    if clasicos != 20:
        sys.exit(f'Se esperaban 20 platos del menú clásico: {clasicos}')

    js = ('// GENERADO por notas/herramientas/genera_kh3_cocina.py: no editar a mano.\n'
          '// Platos e ingredientes del bistró de KH III (KHWiki). Inglés entre «» salvo las frutas de los flanes (Wiki ES).\n'
          'export const PLATOS_KH3 = ' + json.dumps(platos, ensure_ascii=False, indent=1) + ';\n'
          'export const INGREDIENTES_KH3 = ' + json.dumps(ingredientes, ensure_ascii=False, indent=1) + ';\n')
    open(SALIDA, 'w', encoding='utf-8').write(js)
    print('OK', len(platos), 'platos,', len(ingredientes), 'ingredientes')


if __name__ == '__main__':
    main()
