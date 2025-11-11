# The Peacock House – Full‑Stack (Front + Back)

Proyecto completo con reservas, leads y panel admin con login email/contraseña (JWT).

## Estructura

```
peacock-house/
  server/
  client/
```

## Backend

1. Variables

Crear `server/.env` con:

```
PORT=4000
CORS_ORIGIN=http://localhost:5173
DB_FILE=./peacock.db
ADMIN_EMAIL=admin@peacockhouse.local
ADMIN_PASSWORD=changeme123
JWT_SECRET=please_change_me
```

2. Instalar y correr

```bash
cd server
npm i
npm run dev
```

Endpoints clave:
- POST `/api/admin/login` → { email, password } → { token }
- GET `/api/admin/reservations` (Bearer token)
- POST `/api/reservations`, GET `/api/reservations/availability`, POST `/api/leads`

## Frontend

```bash
cd client
npm i
npm run dev
```

Config: `VITE_API_BASE` por defecto `http://localhost:4000`.

Rutas:
- `/` landing + reservas
- `/admin` login + tabla de reservas


