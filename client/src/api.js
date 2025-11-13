// En producción, VITE_API_BASE debe estar configurado en Vercel
// En desarrollo local, usar: VITE_API_BASE=http://localhost:4000
const API_BASE = import.meta.env.VITE_API_BASE || (import.meta.env.DEV ? 'http://localhost:4000' : null);

if (!API_BASE && !import.meta.env.DEV) {
  console.error('VITE_API_BASE no está configurado. Por favor configura la variable de entorno en Vercel.');
}

export const checkAvailability = async (start, end) => {
  if (!API_BASE) {
    throw new Error('API no configurada. Por favor contacta al administrador.');
  }
  const r = await fetch(`${API_BASE}/api/reservations/availability?start=${start}&end=${end}`);
  return r.json();
};

export const createReservation = async (payload) => {
  if (!API_BASE) {
    throw new Error('API no configurada. Por favor contacta al administrador.');
  }
  const r = await fetch(`${API_BASE}/api/reservations`, {
    method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload)
  });
  return r.json().then(data => r.ok ? data : Promise.reject(data));
};

export const createLead = async (payload) => {
  if (!API_BASE) {
    throw new Error('API no configurada. Por favor contacta al administrador.');
  }
  const r = await fetch(`${API_BASE}/api/leads`, {
    method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload)
  });
  return r.json().then(data => r.ok ? data : Promise.reject(data));
};

export const adminLogin = async (email, password) => {
  if (!API_BASE) {
    throw new Error('API no configurada. Por favor contacta al administrador.');
  }
  const r = await fetch(`${API_BASE}/api/admin/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });
  const data = await r.json();
  if (!r.ok) throw new Error(data?.error || 'No se pudo iniciar sesión');
  return data; // { token }
};

export const getLeads = async (token) => {
  if (!API_BASE) {
    throw new Error('API no configurada. Por favor contacta al administrador.');
  }
  const r = await fetch(`${API_BASE}/api/admin/leads`, {
    headers: { Authorization: `Bearer ${token}` }
  });
  if (!r.ok) throw new Error('Error al obtener leads');
  return r.json();
};


