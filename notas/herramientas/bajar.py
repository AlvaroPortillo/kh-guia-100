"""Descarga imágenes de KHWiki: python bajar.py <carpeta> clave=Nombre de archivo.png ..."""
import sys, json, os, urllib.request, urllib.parse
sys.stdout.reconfigure(encoding='utf-8')
d = sys.argv[1]
os.makedirs(d, exist_ok=True)
UA = {'User-Agent': 'kh-guia-personal/1.0'}
for par in sys.argv[2:]:
    clave, nombre = par.split('=', 1)
    u = 'https://www.khwiki.com/api.php?action=query&prop=imageinfo&iiprop=url&format=json&titles=' + urllib.parse.quote('File:' + nombre)
    p = list(json.load(urllib.request.urlopen(urllib.request.Request(u, headers=UA)))['query']['pages'].values())[0]
    if 'imageinfo' not in p:
        print('NO', clave, nombre); continue
    datos = urllib.request.urlopen(urllib.request.Request(p['imageinfo'][0]['url'], headers=UA)).read()
    open(os.path.join(d, clave + '.png'), 'wb').write(datos)
    print('OK', clave, len(datos))
