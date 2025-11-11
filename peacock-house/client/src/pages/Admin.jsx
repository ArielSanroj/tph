import { useEffect, useState } from 'react';
import AdminCalendar from '../components/AdminCalendar.jsx';

export default function Admin() {
  const [reservations, setReservations] = useState([]);
  const [email, setEmail] = useState(localStorage.getItem('adminEmail') || '');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState(localStorage.getItem('adminToken') || '');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:4000';

  const fetchReservations = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${API_BASE}/api/admin/reservations`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      if (res.status === 401 || res.status === 403) {
        setToken('');
        localStorage.removeItem('adminToken');
        throw new Error('Token inválido o expirado. Vuelve a iniciar sesión.');
      }
      if (!res.ok) throw new Error('Error en el servidor');
      const data = await res.json();
      setReservations(data);
      setError('');
    } catch (err) {
      setError(err.message);
      setReservations([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (token) fetchReservations();
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(`${API_BASE}/api/admin/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || 'Credenciales inválidas');
      setToken(data.token);
      localStorage.setItem('adminToken', data.token);
      localStorage.setItem('adminEmail', email);
      setPassword('');
      setError('');
      fetchReservations();
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    setToken('');
    localStorage.removeItem('adminToken');
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold">Panel de Administración</h1>
          {token && <button onClick={handleLogout} className="text-sm underline">Cerrar sesión</button>}
        </div>

        {!token && <p className="text-gray-500 mb-4">Inicia sesión con tu email y contraseña.</p>}

        {!token && (
          <form onSubmit={handleLogin} className="mb-6 grid gap-3 max-w-md">
            <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} className="border rounded-lg px-3 py-2" required />
            <input type="password" placeholder="Contraseña" value={password} onChange={e => setPassword(e.target.value)} className="border rounded-lg px-3 py-2" required />
            <button type="submit" className="bg-primary text-white px-5 py-2 rounded-lg">Entrar</button>
          </form>
        )}

        {loading && <p>Cargando...</p>}
        {error && <p className="text-red-600">{error}</p>}

        {token && !loading && (
          <div className="grid gap-8">
            <div>
              <h2 className="text-xl font-semibold mb-3">Calendario</h2>
              <AdminCalendar reservations={reservations} />
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-3">Listado</h2>
          <table className="w-full border-collapse bg-white shadow-sm rounded-xl overflow-hidden">
            <thead className="bg-accent text-white">
              <tr>
                <th className="p-2 text-left">Nombre</th>
                <th className="p-2 text-left">Email</th>
                <th className="p-2 text-left">Fechas</th>
                <th className="p-2 text-left">Huéspedes</th>
                <th className="p-2 text-left">País</th>
                <th className="p-2 text-left">Notas</th>
              </tr>
            </thead>
            <tbody>
              {reservations.map(r => (
                <tr key={r.id} className="border-t">
                  <td className="p-2">{r.first_name} {r.last_name}</td>
                  <td className="p-2">{r.email}</td>
                  <td className="p-2">{r.start_date} → {r.end_date}</td>
                  <td className="p-2">{r.guests}</td>
                  <td className="p-2">{r.country}</td>
                  <td className="p-2 text-sm text-gray-600">{r.notes || '-'}</td>
                </tr>
              ))}
            </tbody>
          </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}


