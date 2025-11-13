import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import db from './db.js';

const app = express();
const PORT = process.env.PORT || 4000;
const CORS_ORIGIN = process.env.CORS_ORIGIN || '*';
const JWT_SECRET = process.env.JWT_SECRET || 'dev_secret';
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'admin@peacockhouse.local';
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'changeme123';

app.use(cors({ origin: CORS_ORIGIN }));
app.use(express.json());

// Utils
const fmt = (d) => new Date(d + 'T00:00:00');
const overlaps = (aStart, aEnd, bStart, bEnd) => {
  return fmt(aStart) < fmt(bEnd) && fmt(bStart) < fmt(aEnd);
};

// Seed admin user idempotente
(() => {
  const existing = db.prepare('SELECT id FROM admin_users WHERE email = ?').get(ADMIN_EMAIL);
  if (!existing) {
    const hash = bcrypt.hashSync(ADMIN_PASSWORD, 10);
    db.prepare('INSERT INTO admin_users (email, password_hash) VALUES (?, ?)').run(ADMIN_EMAIL, hash);
    console.log('Admin user created:', ADMIN_EMAIL);
  }
})();

// Health
app.get('/api/health', (_req, res) => res.json({ ok: true }));

// Auth: login admin (email/contraseña)
app.post('/api/admin/login', (req, res) => {
  const { email, password } = req.body || {};
  if (!email || !password) return res.status(400).json({ error: 'Email y contraseña requeridos' });
  const user = db.prepare('SELECT * FROM admin_users WHERE email = ?').get(email);
  if (!user) return res.status(401).json({ error: 'Credenciales inválidas' });
  const ok = bcrypt.compareSync(password, user.password_hash);
  if (!ok) return res.status(401).json({ error: 'Credenciales inválidas' });
  const token = jwt.sign({ sub: user.id, email: user.email }, JWT_SECRET, { expiresIn: '8h' });
  res.json({ token });
});

// Middleware protegido
function requireAuth(req, res, next) {
  const token = req.headers.authorization?.replace('Bearer ', '');
  if (!token) return res.status(401).json({ error: 'No autorizado' });
  try {
    const payload = jwt.verify(token, JWT_SECRET);
    req.user = payload;
    next();
  } catch (_err) {
    return res.status(401).json({ error: 'Token inválido o expirado' });
  }
}

// Disponibilidad
app.get('/api/reservations/availability', (req, res) => {
  const { start, end } = req.query;
  if (!start || !end) return res.status(400).json({ error: 'start y end son requeridos (YYYY-MM-DD)' });
  const rows = db.prepare('SELECT start_date, end_date FROM reservations').all();
  const isAvailable = rows.every(r => !overlaps(start, end, r.start_date, r.end_date));
  res.json({ available: isAvailable });
});

// Crear reserva
app.post('/api/reservations', (req, res) => {
  const { first_name, last_name, email, phone, country, start_date, end_date, guests, notes } = req.body || {};
  if (!first_name || !last_name || !email || !start_date || !end_date || !guests) {
    return res.status(400).json({ error: 'Campos obligatorios: first_name, last_name, email, start_date, end_date, guests' });
  }
  const existing = db.prepare('SELECT start_date, end_date FROM reservations').all();
  const clash = existing.find(r => overlaps(start_date, end_date, r.start_date, r.end_date));
  if (clash) return res.status(409).json({ error: 'Fechas no disponibles' });

  const stmt = db.prepare(`INSERT INTO reservations
    (first_name, last_name, email, phone, country, start_date, end_date, guests, notes)
    VALUES (@first_name, @last_name, @email, @phone, @country, @start_date, @end_date, @guests, @notes)`);
  const info = stmt.run({ first_name, last_name, email, phone, country, start_date, end_date, guests, notes });
  const created = db.prepare('SELECT * FROM reservations WHERE id=?').get(info.lastInsertRowid);
  res.status(201).json(created);
});

// (Opcional) Listar reservas (no autenticado)
app.get('/api/reservations', (_req, res) => {
  const rows = db.prepare('SELECT * FROM reservations ORDER BY created_at DESC').all();
  res.json(rows);
});

// Leads
app.post('/api/leads', (req, res) => {
  const { first_name, last_name, email, phone, country } = req.body || {};
  if (!first_name || !last_name || !email || !country) return res.status(400).json({ error: 'Faltan campos requeridos' });
  const stmt = db.prepare(`INSERT INTO leads (first_name, last_name, email, phone, country)
                          VALUES (@first_name, @last_name, @email, @phone, @country)`);
  const info = stmt.run({ first_name, last_name, email, phone, country });
  const created = db.prepare('SELECT * FROM leads WHERE id=?').get(info.lastInsertRowid);
  res.status(201).json(created);
});

// Admin: listar reservas (protegido)
app.get('/api/admin/reservations', requireAuth, (_req, res) => {
  const rows = db.prepare('SELECT * FROM reservations ORDER BY created_at DESC').all();
  res.json(rows);
});

// Admin: listar leads (protegido)
app.get('/api/admin/leads', requireAuth, (_req, res) => {
  const rows = db.prepare('SELECT * FROM leads ORDER BY created_at DESC').all();
  res.json(rows);
});

app.listen(PORT, () => {
  console.log(`API running on http://localhost:${PORT}`);
});


