const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:4000';

export const checkAvailability = async (start, end) => {
  const r = await fetch(`${API_BASE}/api/reservations/availability?start=${start}&end=${end}`);
  return r.json();
};

export const createReservation = async (payload) => {
  const r = await fetch(`${API_BASE}/api/reservations`, {
    method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload)
  });
  return r.json().then(data => r.ok ? data : Promise.reject(data));
};

export const createLead = async (payload) => {
  const r = await fetch(`${API_BASE}/api/leads`, {
    method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload)
  });
  return r.json().then(data => r.ok ? data : Promise.reject(data));
};

export const adminLogin = async (email, password) => {
  const r = await fetch(`${API_BASE}/api/admin/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });
  const data = await r.json();
  if (!r.ok) throw new Error(data?.error || 'No se pudo iniciar sesión');
  return data; // { token }
};


