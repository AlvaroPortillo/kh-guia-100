// Progreso del jugador: qué conseguibles ha marcado. Se guarda en localStorage
// del navegador y se puede exportar/importar como archivo JSON.
const CLAVE = 'kh100:v1';
const listeners = new Set();

function leer() {
  try {
    const raw = localStorage.getItem(CLAVE);
    const data = raw ? JSON.parse(raw) : null;
    if (data && typeof data.hechos === 'object') return data;
  } catch { /* almacenamiento bloqueado o corrupto: empezamos de cero */ }
  return { version: 1, hechos: {}, ajustes: {} };
}

let estado = leer();

function guardar() {
  try { localStorage.setItem(CLAVE, JSON.stringify(estado)); } catch { /* sin almacenamiento */ }
  listeners.forEach((fn) => fn());
}

export const store = {
  hecho: (id) => Boolean(estado.hechos[id]),
  marcar(id, valor) {
    if (valor) estado.hechos[id] = Date.now();
    else delete estado.hechos[id];
    guardar();
  },
  contar: (ids) => ids.reduce((n, id) => n + (estado.hechos[id] ? 1 : 0), 0),
  ajuste: (k, def) => (k in estado.ajustes ? estado.ajustes[k] : def),
  fijarAjuste(k, v) { estado.ajustes[k] = v; guardar(); },
  alCambiar(fn) { listeners.add(fn); return () => listeners.delete(fn); },

  exportar() {
    return JSON.stringify({ ...estado, exportado: new Date().toISOString() }, null, 2);
  },
  importar(texto) {
    const data = JSON.parse(texto);
    if (!data || typeof data.hechos !== 'object') throw new Error('El archivo no es una copia de progreso de esta guía.');
    estado = { version: 1, hechos: data.hechos, ajustes: data.ajustes || {} };
    guardar();
  },
  borrarTodo() { estado = { version: 1, hechos: {}, ajustes: estado.ajustes }; guardar(); },
};
