// Progreso del jugador: qué conseguibles ha marcado. Si la web se sirve con
// `python server.py`, se guarda en SQLite (datos/progreso.db) a través de /api.
// localStorage queda como copia local por si se abre sin ese servidor.
// También se puede exportar/importar como archivo JSON.
const CLAVE = 'kh100:v1';
const listeners = new Set();
let conApi = false;
// Las peticiones van en cola para que lleguen en orden (marcar y desmarcar rápido).
let cola = Promise.resolve();

function leer() {
  try {
    const raw = localStorage.getItem(CLAVE);
    const data = raw ? JSON.parse(raw) : null;
    if (data && typeof data.hechos === 'object') return data;
  } catch { /* almacenamiento bloqueado o corrupto: empezamos de cero */ }
  return { version: 1, hechos: {}, ajustes: {} };
}

let estado = leer();

// Devuelve una promesa que falla si el servidor rechaza los datos.
function api(ruta, datos) {
  if (!conApi) return Promise.resolve();
  const envio = cola.then(() => fetch(`/api/${ruta}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(datos),
  })).then(async (r) => {
    if (!r.ok) throw new Error((await r.json().catch(() => ({}))).error || `El servidor respondió ${r.status}.`);
  });
  // Un fallo no bloquea la cola; queda la copia de localStorage.
  cola = envio.catch((e) => console.warn('No se pudo guardar en el servidor:', e.message));
  return envio;
}

function guardar() {
  try { localStorage.setItem(CLAVE, JSON.stringify(estado)); } catch { /* sin almacenamiento */ }
  listeners.forEach((fn) => fn());
}

export const store = {
  // Carga el progreso de la base de datos y le suma lo que solo estuviera en el navegador
  // (marcas hechas con la web abierta sin server.py).
  async iniciar() {
    try {
      const r = await fetch('/api/estado', { cache: 'no-store' });
      if (!r.ok) return;
      const db = await r.json();
      conApi = true;
      const soloLocal = Object.keys(estado.hechos).filter((id) => !(id in db.hechos));
      const dbVacia = !Object.keys(db.hechos).length && !Object.keys(db.ajustes).length;
      estado = {
        version: 1,
        hechos: { ...db.hechos, ...Object.fromEntries(soloLocal.map((id) => [id, estado.hechos[id]])) },
        ajustes: dbVacia ? estado.ajustes : db.ajustes,
      };
      guardar();
      if (soloLocal.length || dbVacia) api('estado', estado);
    } catch { /* servidor estático: seguimos con localStorage */ }
  },
  hecho: (id) => Boolean(estado.hechos[id]),
  marcar(id, valor) {
    if (valor) estado.hechos[id] = Date.now();
    else delete estado.hechos[id];
    guardar();
    api('hecho', { id, valor: Boolean(valor) });
  },
  contar: (ids) => ids.reduce((n, id) => n + (estado.hechos[id] ? 1 : 0), 0),
  ajuste: (k, def) => (k in estado.ajustes ? estado.ajustes[k] : def),
  fijarAjuste(k, v) { estado.ajustes[k] = v; guardar(); api('ajuste', { clave: k, valor: v }); },
  alCambiar(fn) { listeners.add(fn); return () => listeners.delete(fn); },

  exportar() {
    return JSON.stringify({ ...estado, exportado: new Date().toISOString() }, null, 2);
  },
  // Devuelve una promesa: falla si el archivo no vale o si el servidor lo rechaza.
  importar(texto) {
    const noValido = new Error('El archivo no es una copia de progreso de esta guía.');
    let data;
    try { data = JSON.parse(texto); } catch { throw noValido; }
    if (!data || !data.hechos || typeof data.hechos !== 'object' || (data.ajustes && typeof data.ajustes !== 'object')) {
      throw noValido;
    }
    estado = { version: 1, hechos: data.hechos, ajustes: data.ajustes || {} };
    guardar();
    return api('estado', estado);
  },
  borrarTodo() { estado = { version: 1, hechos: {}, ajustes: estado.ajustes }; guardar(); api('estado', estado); },
};
