import { useState } from 'react';
import Modal from './Modal';
import Input from './Input';
import Button from './Button';
import { createLead } from '../api';

export default function LeadModal({ open, onClose }) {
  const [form, setForm] = useState({ first_name: '', last_name: '', phone: '', email: '', country: '' });
  const [status, setStatus] = useState({ type: 'idle', message: '' });

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: 'loading' });
    try {
      await createLead(form);
      setStatus({ type: 'success', message: '¡Gracias! Te contactaremos pronto.' });
      setForm({ first_name: '', last_name: '', phone: '', email: '', country: '' });
    } catch (err) {
      setStatus({ type: 'error', message: err?.error || err?.message || 'No se pudo enviar. Intenta nuevamente.' });
    }
  };

  return (
    <Modal open={open} onClose={onClose}>
      <h3 className="text-xl font-bold">Déjanos tus datos</h3>
      <form onSubmit={handleSubmit} className="mt-4 grid gap-3">
        <div className="grid gap-3 md:grid-cols-2">
          <Input label="Nombre" name="first_name" value={form.first_name} onChange={onChange} required />
          <Input label="Apellido" name="last_name" value={form.last_name} onChange={onChange} required />
          <Input label="Teléfono" name="phone" value={form.phone} onChange={onChange} />
          <Input label="Correo" name="email" type="email" value={form.email} onChange={onChange} required />
          <Input label="País" name="country" value={form.country} onChange={onChange} required />
        </div>
        <div className="flex items-center gap-3">
          <Button type="submit" className="bg-accent">Enviar</Button>
          {status.type === 'loading' && <span role="status" aria-live="polite">Enviando…</span>}
          {status.type === 'error' && <span className="text-red-600" role="alert">{status.message}</span>}
          {status.type === 'success' && <span className="text-green-700" aria-live="polite">{status.message}</span>}
        </div>
      </form>
    </Modal>
  );
}


