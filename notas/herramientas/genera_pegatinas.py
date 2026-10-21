"""Genera src/data/bbs-pegatinas.js: pegatinas de cada personaje agrupadas por mundo, con sus zonas."""
import sys, json, re
sys.stdout.reconfigure(encoding='utf-8')
D, SALIDA = sys.argv[1], sys.argv[2]
datos = json.load(open(f'{D}/pegatinas.json', encoding='utf-8'))
ES = {'Land of Departure': 'Tierra de Partida', 'Enchanted Dominion': 'Reino Encantado', 'Dwarf Woodlands': 'Bosque de los Enanitos',
      'Castle of Dreams': 'Castillo de los Sueños', 'Mysterious Tower': 'Torre de los Misterios', 'The Mysterious Tower': 'Torre de los Misterios',
      'Radiant Garden': 'Vergel Radiante', 'Disney Town': 'Ciudad Disney', 'Olympus Coliseum': 'Coliseo del Olimpo', 'Deep Space': 'Espacio Profundo',
      'Destiny Islands': 'Islas del Destino', 'Neverland': 'País de Nunca Jamás', 'Never Land': 'País de Nunca Jamás',
      'Keyblade Graveyard': 'Necrópolis de Llaves Espada', 'Realm of Darkness': 'Reino de la Oscuridad'}
ORDEN = ['Tierra de Partida', 'Reino Encantado', 'Bosque de los Enanitos', 'Castillo de los Sueños', 'Torre de los Misterios', 'Vergel Radiante',
         'Ciudad Disney', 'Coliseo del Olimpo', 'Espacio Profundo', 'Islas del Destino', 'País de Nunca Jamás', 'Necrópolis de Llaves Espada']
ZONA_ES = {"Pete's Rec Room": 'Sala de Juegos de Pete', 'Aqueduct': 'acueducto', "Cinderella's Room": 'habitación de Cenicienta'}
slug = lambda s: re.sub(r'[^a-z0-9]+', '-', s.lower().translate(str.maketrans('áéíóúñ', 'aeioun'))).strip('-')
out = {}
for pj, filas in datos.items():
    mundos = {}
    for x in filas:
        m = ES[x['mundo']]
        z = x['zona_nombre']
        mundos.setdefault(m, []).append(ZONA_ES.get(z, f'«{z}»') if z not in ES else None)
    out[pj] = [{'id': slug(m), 'mundo': m, 'n': len(zs), 'zonas': [z for z in dict.fromkeys(zs) if z],
                'repes': {z: zs.count(z) for z in set(zs) if z and zs.count(z) > 1}}
               for m, zs in sorted(mundos.items(), key=lambda kv: ORDEN.index(kv[0]))]
js = ['// Pegatinas de BBS Final Mix por personaje y mundo. GENERADO (notas/herramientas/genera_pegatinas.py); no editar a mano.',
      '// Fuente: KHWiki — Sticker Album (zona de cada pegatina) y página de cada zona (mundo). Zonas sin nombre oficial en castellano: «».',
      '', 'export const PEGATINAS_MUNDOS = ' + json.dumps(out, ensure_ascii=False, indent=1) + ';', '']
open(SALIDA, 'w', encoding='utf-8').write('\n'.join(js))
for pj, ms in out.items():
    print(pj, sum(m['n'] for m in ms), [(m['mundo'], m['n']) for m in ms])
