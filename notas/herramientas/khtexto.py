"""Baja páginas de KHWiki como HTML y las pasa a texto (para cuando la API da 503).

Uso: python khtexto.py <carpeta> "Título de página" ...
Las tablas salen fila a fila con las celdas separadas por « | ».
"""
import sys, os, re, html, time, urllib.request, urllib.parse

sys.stdout.reconfigure(encoding='utf-8')
UA = {'User-Agent': 'kh-guia-personal/1.0'}
carpeta = sys.argv[1]
os.makedirs(carpeta, exist_ok=True)


def a_texto(h):
    i = h.find('<div id="mw-content-text"')
    j = h.find('<div class="printfooter"', i)
    h = h[i:j if j > 0 else None]
    h = re.sub(r'<(script|style)[^>]*>.*?</\1>', '', h, flags=re.S)
    h = re.sub(r'<img[^>]*alt="([^"]*)"[^>]*>', r'[\1]', h)
    h = re.sub(r'</t[dh]>\s*', ' | ', h)
    h = re.sub(r'</tr>|<br\s*/?>|</p>|</li>|</h\d>|</dd>|</dt>', '\n', h)
    h = re.sub(r'<h(\d)[^>]*>', lambda m: '\n' + '#' * int(m.group(1)) + ' ', h)
    h = re.sub(r'<li[^>]*>', '* ', h)
    h = re.sub(r'<[^>]+>', '', h)
    h = html.unescape(h)
    h = re.sub(r'[ \t]+', ' ', h)
    return re.sub(r'\n\s*\n+', '\n', h).strip()


for t in sys.argv[2:]:
    u = 'https://www.khwiki.com/' + urllib.parse.quote(t.replace(' ', '_'))
    h = None
    for intento in range(4):  # KHWiki da 503 a ráfagas: esperar y reintentar
        try:
            h = urllib.request.urlopen(urllib.request.Request(u, headers=UA)).read().decode('utf-8')
            break
        except Exception as e:
            err = e
            time.sleep(4 * (intento + 1))
    if h is None:
        print('ERR', t, err)
        continue
    time.sleep(1.5)
    fn = re.sub(r'[^\w]+', '_', t) + '.txt'
    texto = a_texto(h)
    open(os.path.join(carpeta, fn), 'w', encoding='utf-8').write(texto)
    print('OK', t, len(texto))
