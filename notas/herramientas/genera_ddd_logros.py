"""Genera src/data/ddd-logros.js (Dream Drop Distance, ACH_16…ACH_69) y src/data/bbs02-logros.js (Kingdom Hearts 0.2,
ACH_01…ACH_15) y baja los iconos de los logros. Los dos juegos comparten la app 2552440 (KH HD 2.8 Final Chapter Prologue).

Uso: python genera_ddd_logros.py <pagina-logros-es.html> <raiz-del-proyecto>
La página se descarga con la cookie de idioma (sin ella Steam la sirve en inglés). Ojo: stats/…/achievements redirige;
la buena es /achievements/<app>:
  curl -sL --compressed -A "Mozilla/5.0" -b "Steam_Language=spanish" \
    "https://steamcommunity.com/achievements/2552440" -o logros-es.html
"""
import sys, re, json, os, urllib.request, datetime

sys.stdout.reconfigure(encoding='utf-8')
html, raiz = sys.argv[1], sys.argv[2]
UA = {'User-Agent': 'Mozilla/5.0'}

h = open(html, encoding='utf-8').read()
objs = re.findall(r'\{\\"internal_key\\".*?\\"groupid\\":\d+\}', h)
todos = {a['api_name']: a for a in (json.loads(json.loads('"' + o + '"')) for o in objs)}
if len(todos) != 69:
    sys.exit(f'Se esperaban 69 logros y hay {len(todos)}')

u = 'https://api.steampowered.com/ISteamUserStats/GetGlobalAchievementPercentagesForApp/v2/?gameid=2552440'
pct = {a['name']: round(float(a['percent']), 1)
       for a in json.load(urllib.request.urlopen(urllib.request.Request(u, headers=UA)))['achievementpercentages']['achievements']}
hoy = datetime.date.today().strftime('%d/%m/%Y')

JUEGOS = [
    # (carpeta de iconos, archivo, constante, desde, hasta)
    ('ddd', 'ddd-logros.js', 'LOGROS_DDD', 16, 69),
    ('bbs02', 'bbs02-logros.js', 'LOGROS_BBS02', 1, 15),
]
for carpeta_img, archivo, const, desde, hasta in JUEGOS:
    carpeta = os.path.join(raiz, 'assets', 'img', carpeta_img, 'logros')
    os.makedirs(carpeta, exist_ok=True)
    logros = []
    for n in range(desde, hasta + 1):
        i = f'ACH_{n:02d}'
        a = todos[i]
        destino = os.path.join(carpeta, i + '.jpg')
        if not os.path.exists(destino):
            open(destino, 'wb').write(urllib.request.urlopen(urllib.request.Request(a['icon_achieved'], headers=UA)).read())
        logros.append({'id': i, 'nombre': a['name'].strip(), 'desc': a['description'].strip().replace('\\"', '"'),
                       'oculto': bool(a['hidden']), 'pct': pct.get(i)})
    js = ('// Generado desde la página oficial de logros de Steam (idioma: español). No editar a mano:\n'
          '// notas/herramientas/genera_ddd_logros.py\n'
          '// https://steamcommunity.com/achievements/2552440\n'
          f'// pct = % global de jugadores de Steam (API GetGlobalAchievementPercentagesForApp, consultada el {hoy})\n'
          f'export const {const} = ' + json.dumps(logros, ensure_ascii=False, indent=2) + ';\n')
    open(os.path.join(raiz, 'src', 'data', archivo), 'w', encoding='utf-8', newline='\n').write(js)
    print('OK', archivo, len(logros), 'logros;', sum(l['pct'] is None for l in logros), 'sin %')
