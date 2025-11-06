import { useState } from 'react';
import Section from './Section';
import Input from './Input';
import Button from './Button';
import { checkAvailability, createReservation } from '../api';

export default function ReservationForm() {
  const [form, setForm] = useState({
    first_name: '', last_name: '', email: '', phone: '', country: '', start_date: '', end_date: '', guests: 2, notes: ''
  });
  const [status, setStatus] = useState({ type: 'idle', message: '' });

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: 'loading' });
    try {
      const av = await checkAvailability(form.start_date, form.end_date);
      if (!av.available) {
        setStatus({ type: 'error', message: 'Lo sentimos, las fechas no están disponibles.' });
        return;
      }
      await createReservation({ ...form, guests: Number(form.guests) });
      setStatus({ type: 'success', message: '¡Reserva creada con éxito! Te hemos enviado la confirmación a tu correo.' });
      setForm({ first_name: '', last_name: '', email: '', phone: '', country: '', start_date: '', end_date: '', guests: 2, notes: '' });
    } catch (err) {
      setStatus({ type: 'error', message: err?.error || 'Error al crear la reserva.' });
    }
  };

  return (
    <Section id="reservas" title="Reservas">
      <form onSubmit={handleSubmit} className="grid gap-4 rounded-2xl border border-borderSoft bg-bgLight p-6">
        <div className="grid gap-4 md:grid-cols-2">
          <Input label="Nombre" name="first_name" value={form.first_name} onChange={onChange} required />
          <Input label="Apellido" name="last_name" value={form.last_name} onChange={onChange} required />
          <Input label="Correo" name="email" type="email" value={form.email} onChange={onChange} required />
          <Input label="Teléfono" name="phone" value={form.phone} onChange={onChange} />
          <Input label="País" name="country" value={form.country} onChange={onChange} required />
          <Input label="Huéspedes" name="guests" type="number" min="1" max="18" value={form.guests} onChange={onChange} required />
          <Input label="Fecha de llegada" name="start_date" type="date" value={form.start_date} onChange={onChange} required />
          <Input label="Fecha de salida" name="end_date" type="date" value={form.end_date} onChange={onChange} required />
        </div>
        <label className="block">
          <span className="text-sm font-medium text-gray-700">Notas</span>
          <textarea name="notes" value={form.notes} onChange={onChange} rows="3" className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-accent"></textarea>
        </label>
        <div className="flex items-center gap-3">
          <Button type="submit">¡Reservar ahora!</Button>
          {status.type === 'loading' && <span role="status" aria-live="polite">Procesando…</span>}
          {status.type === 'error' && <span className="text-red-600" role="alert">{status.message}</span>}
          {status.type === 'success' && <span className="text-green-700" aria-live="polite">{status.message}</span>}
        </div>
      </form>
    </Section>
  );
}


