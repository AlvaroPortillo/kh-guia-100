"""Genera src/data/kh3-logros.js y baja los iconos de los logros de KH III + Re Mind (ACH_01…ACH_51).

Uso: python genera_kh3_logros.py <pagina-logros-es.html> <raiz-del-proyecto>
La página se descarga con la cookie de idioma (sin ella Steam la sirve en inglés):
  curl -sL --compressed -A "Mozilla/5.0" -b "Steam_Language=spanish" \
    "https://steamcommunity.com/stats/2552450/achievements/?l=spanish" -o logros-es.html
"""
import sys, re, json, os, urllib.request, datetime

sys.stdout.reconfigure(encoding='utf-8')
html, raiz = sys.argv[1], sys.argv[2]
UA = {'User-Agent': 'Mozilla/5.0'}

h = open(html, encoding='utf-8').read()
objs = re.findall(r'\{\\"internal_key\\".*?\\"groupid\\":\d+\}', h)
todos = {a['api_name']: a for a in (json.loads(json.loads('"' + o + '"')) for o in objs)}
ids = [f'ACH_{n:02d}' for n in range(1, 52)]
faltan = [i for i in ids if i not in todos]
if faltan:
    sys.exit(f'Faltan logros en la página: {faltan}')

u = 'https://api.steampowered.com/ISteamUserStats/GetGlobalAchievementPercentagesForApp/v2/?gameid=2552450'
pct = {a['name']: round(float(a['percent']), 1)
       for a in json.load(urllib.request.urlopen(urllib.request.Request(u, headers=UA)))['achievementpercentages']['achievements']}

carpeta = os.path.join(raiz, 'assets', 'img', 'kh3', 'logros')
os.makedirs(carpeta, exist_ok=True)
logros = []
for i in ids:
    a = todos[i]
    destino = os.path.join(carpeta, i + '.jpg')
    if not os.path.exists(destino):
        datos = urllib.request.urlopen(urllib.request.Request(a['icon_achieved'], headers=UA)).read()
        open(destino, 'wb').write(datos)
    logros.append({'id': i, 'nombre': a['name'].strip(), 'desc': a['description'].strip(),
                   'oculto': bool(a['hidden']), 'pct': pct.get(i)})

hoy = datetime.date.today().strftime('%d/%m/%Y')
js = ('// Generado desde la página oficial de logros de Steam (idioma: español). No editar a mano:\n'
      '// notas/herramientas/genera_kh3_logros.py\n'
      '// https://steamcommunity.com/stats/2552450/achievements/?l=spanish\n'
      f'// pct = % global de jugadores de Steam (API GetGlobalAchievementPercentagesForApp, consultada el {hoy})\n'
      'export const LOGROS_KH3 = ' + json.dumps(logros, ensure_ascii=False, indent=2) + ';\n')
open(os.path.join(raiz, 'src', 'data', 'kh3-logros.js'), 'w', encoding='utf-8', newline='\n').write(js)
print('OK', len(logros), 'logros;', sum(l['pct'] is None for l in logros), 'sin %')
