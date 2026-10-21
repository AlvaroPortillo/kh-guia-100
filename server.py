"""Servidor local de la guía: sirve la web y guarda el progreso en SQLite.

Solo usa la biblioteca estándar de Python. Arranque:

    python server.py            # http://127.0.0.1:5173

API (JSON):
    GET  /api/estado            -> {"version": 1, "hechos": {id: ms}, "ajustes": {clave: valor}}
    PUT  /api/estado            <- mismo formato; reemplaza todo (importar / borrar)
    PUT  /api/hecho             <- {"id": str, "valor": bool}
    PUT  /api/ajuste            <- {"clave": str, "valor": cualquier JSON}
"""
import json
import sqlite3
import sys
import time
from functools import partial
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path

RAIZ = Path(__file__).resolve().parent
DB = RAIZ / 'datos' / 'progreso.db'
HOST, PUERTO = '127.0.0.1', 5173
MAX_CUERPO = 1_000_000  # 1 MB: de sobra para una copia de progreso
MAX_CLAVE = 200


def conectar():
    DB.parent.mkdir(exist_ok=True)
    con = sqlite3.connect(DB)
    con.executescript("""
        CREATE TABLE IF NOT EXISTS hechos (
            id    TEXT PRIMARY KEY,
            fecha INTEGER NOT NULL          -- ms desde epoch, como Date.now()
        );
        CREATE TABLE IF NOT EXISTS ajustes (
            clave TEXT PRIMARY KEY,
            valor TEXT NOT NULL             -- JSON
        );
    """)
    return con


def leer_estado(con):
    hechos = {i: f for i, f in con.execute('SELECT id, fecha FROM hechos')}
    ajustes = {c: json.loads(v) for c, v in con.execute('SELECT clave, valor FROM ajustes')}
    return {'version': 1, 'hechos': hechos, 'ajustes': ajustes}


def clave_valida(x):
    return isinstance(x, str) and 0 < len(x) <= MAX_CLAVE


class Manejador(SimpleHTTPRequestHandler):
    def end_headers(self):
        # Sin caché: así un cambio en los archivos se ve al recargar.
        self.send_header('Cache-Control', 'no-store')
        super().end_headers()

    def _json(self, codigo, datos):
        cuerpo = json.dumps(datos, ensure_ascii=False).encode('utf-8')
        self.send_response(codigo)
        self.send_header('Content-Type', 'application/json; charset=utf-8')
        self.send_header('Content-Length', str(len(cuerpo)))
        self.end_headers()
        self.wfile.write(cuerpo)

    def _cuerpo(self):
        n = int(self.headers.get('Content-Length') or 0)
        if n <= 0 or n > MAX_CUERPO:
            raise ValueError('Cuerpo vacío o demasiado grande.')
        return json.loads(self.rfile.read(n))

    def _privado(self):
        # No servir la base de datos, .env, .git ni otros archivos ocultos. Se comprueba la ruta ya
        # resuelta (descodificada, como la sirve translate_path) y sin distinguir mayúsculas (Windows).
        try:
            partes = Path(self.translate_path(self.path)).resolve().relative_to(RAIZ.resolve()).parts
        except ValueError:
            return True  # fuera de la carpeta del proyecto
        return bool(partes) and (partes[0].lower() == 'datos' or any(p.startswith('.') for p in partes))

    def do_GET(self):
        if self.path == '/api/estado':
            con = conectar()
            try:
                return self._json(200, leer_estado(con))
            finally:
                con.close()
        if self.path.startswith('/api/') or self._privado():
            return self.send_error(404)
        super().do_GET()

    def do_HEAD(self):
        if self.path.startswith('/api/') or self._privado():
            return self.send_error(404)
        super().do_HEAD()

    def do_PUT(self):
        if self.path not in ('/api/hecho', '/api/ajuste', '/api/estado'):
            return self.send_error(404)
        try:
            datos = self._cuerpo()
            if not isinstance(datos, dict):
                raise ValueError('Se esperaba un objeto JSON.')
            con = conectar()
            try:
                with con:
                    if self.path == '/api/hecho':
                        if not clave_valida(datos.get('id')):
                            raise ValueError('id no válido.')
                        if datos.get('valor'):
                            con.execute('INSERT OR REPLACE INTO hechos VALUES (?, ?)', (datos['id'], int(time.time() * 1000)))
                        else:
                            con.execute('DELETE FROM hechos WHERE id = ?', (datos['id'],))
                    elif self.path == '/api/ajuste':
                        if not clave_valida(datos.get('clave')):
                            raise ValueError('clave no válida.')
                        con.execute('INSERT OR REPLACE INTO ajustes VALUES (?, ?)', (datos['clave'], json.dumps(datos.get('valor'))))
                    elif self.path == '/api/estado':
                        hechos, ajustes = datos.get('hechos'), datos.get('ajustes', {})
                        if not isinstance(hechos, dict) or not isinstance(ajustes, dict):
                            raise ValueError('Formato de progreso no válido.')
                        if not all(map(clave_valida, list(hechos) + list(ajustes))):
                            raise ValueError('Hay claves no válidas.')
                        con.execute('DELETE FROM hechos')
                        con.execute('DELETE FROM ajustes')
                        ahora = int(time.time() * 1000)
                        con.executemany('INSERT INTO hechos VALUES (?, ?)',
                                        [(i, f if isinstance(f, int) else ahora) for i, f in hechos.items()])
                        con.executemany('INSERT INTO ajustes VALUES (?, ?)',
                                        [(c, json.dumps(v)) for c, v in ajustes.items()])
            finally:
                con.close()
            self.send_response(204)
            self.end_headers()
        except (ValueError, json.JSONDecodeError) as e:
            self._json(400, {'error': str(e)})


if __name__ == '__main__':
    puerto = int(sys.argv[1]) if len(sys.argv) > 1 else PUERTO
    conectar().close()
    # En Windows, SO_REUSEADDR deja que dos servidores compartan el puerto: mejor fallar.
    ThreadingHTTPServer.allow_reuse_address = False
    servidor = ThreadingHTTPServer((HOST, puerto), partial(Manejador, directory=str(RAIZ)))
    print(f'Guía en http://{HOST}:{puerto}  ·  progreso en {DB.relative_to(RAIZ)}')
    servidor.serve_forever()
