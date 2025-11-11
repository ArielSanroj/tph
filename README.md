# The Peacock House – Full‑Stack (Front + Back)

Proyecto completo con reservas, leads y panel admin con login email/contraseña (JWT).

## Estructura

```
tph/
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

## Deployment en Vercel (Frontend)

### Opción 1: Deploy desde GitHub (Recomendado)

1. Conecta tu repositorio en [Vercel](https://vercel.com)
2. Configura el proyecto:
   - **Root Directory**: `client` (o deja vacío si el repo root es `client/`)
   - **Framework Preset**: Vite (se detecta automáticamente)
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`

3. **Variables de Entorno**:
   - `VITE_API_BASE`: URL de tu backend (ej: `https://api.tudominio.com`)

4. Deploy automático en cada push a `main`

### Opción 2: Deploy con Vercel CLI

```bash
cd client
npm install -g vercel
vercel
```

Sigue las instrucciones y configura:
- `VITE_API_BASE` en el dashboard de Vercel

### Notas importantes:

- El archivo `vercel.json` ya está configurado para SPA routing
- Asegúrate de que tu backend tenga CORS configurado para el dominio de Vercel
- Actualiza `CORS_ORIGIN` en el backend con la URL de producción de Vercel


