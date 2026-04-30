# API + UI Paired App Template

Monorepo template with API and UI for full-stack prototypes. Uses Next.js with API routes for simplicity.

## What This Template Is For

- Full-stack prototypes
- Apps needing both UI and backend logic
- Internal tools with dashboards
- Data-driven applications
- Projects that benefit from monorepo structure

## Architecture

This template uses **Option A**: Next.js serves both the UI and API via API routes.

- **Frontend:** Next.js App Router (`apps/web`)
- **Backend:** Next.js API routes (`apps/web/app/api`)
- **Deployment:** Single Docker container exposing port 3000

This keeps deployment simple while providing clear separation between frontend and backend code.

## Stack

- Next.js 14 (App Router)
- React 18
- TypeScript
- Tailwind CSS
- Zod for validation
- npm workspaces

## Local Development

### Install Dependencies

```bash
npm install
```

This installs dependencies for all workspaces.

### Run Development Server

```bash
npm run dev
```

Web app runs on `http://localhost:3000`

### Build for Production

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

### Type Check All Workspaces

```bash
npm run typecheck
```

## Environment Variables

Copy `.env.example` to `.env`:

```env
PORT=3000
NODE_ENV=development
APP_NAME=api-ui-paired-app
```

## Available Routes

### UI Pages
- `GET /` - Home page with API data
- `GET /dashboard` - Example dashboard
- `GET /health` - Health check

### API Routes
- `GET /api/health` - API health check
- `GET /api/example` - Example data endpoint

## Project Structure

```
apps/
├── web/                    # Next.js frontend + API
│   ├── app/
│   │   ├── api/           # API routes
│   │   ├── dashboard/     # Dashboard page
│   │   ├── layout.tsx     # Root layout
│   │   └── page.tsx       # Home page
│   ├── public/            # Static assets
│   ├── package.json
│   └── next.config.mjs
│
├── Dockerfile             # Production build
├── package.json           # Root workspace config
└── README.md
```

## Docker

### Build Docker Image

```bash
docker build -t prototype-api-ui .
```

### Run Docker Container

```bash
docker run --rm -p 3000:3000 --env-file .env.example prototype-api-ui
```

Visit: `http://localhost:3000`

Test health check:
```bash
curl http://localhost:3000/health
```

## Deployment Configuration

- **Default Port:** 3000
- **Health Check Path:** `/health`
- **Health Check Response:** `{ "status": "ok" }`
- **Container Listens On:** `0.0.0.0:3000`

## Important Implementation Notes

- Uses Next.js standalone output for smaller Docker images
- Single container deployment (frontend + API)
- API logic lives in `apps/web/app/api`
- Frontend pages live in `apps/web/app`
- No separate API server needed
- No database required by default

## Adding More API Routes

Create new route files in `apps/web/app/api/`:

```typescript
// apps/web/app/api/users/route.ts
import { NextResponse } from 'next/server'

export async function GET() {
  const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
  ]
  return NextResponse.json({ users })
}
```

Access at: `/api/users`

## Expanding to True Paired Services (Optional)

If you need a separate API process:

1. Create `apps/api` with Express
2. Add a docker-compose.yml for local multi-service development
3. Update Dockerfile to support multi-stage or multi-container builds

However, for most prototypes, Next.js API routes are sufficient and keep deployment simple.

## Deployment to Prototype VM

This template deploys as a single Docker container:

1. Main website creates repo from template
2. GitHub Actions builds Next.js app
3. Docker image includes both UI and API
4. Container deployed on prototype VM
5. Caddy routes traffic
6. Health checks via `/health`

The deployment system expects:
- One Docker image
- One exposed port (3000)
- One health check endpoint (/health)
- No manual configuration

## Platform Deployment Contract

This template is designed for deployment on the prototype platform:

- **Deployment URL:** `https://etag-main-vm.australiaeast.cloudapp.azure.com/<slug>`
- **BASE_PATH:** Set at build time (e.g., `/my-prototype`)
- **PORT:** Configurable via environment variable (default: 3000)
- **Output:** Next.js standalone mode
- **Health Check:** `/health` returns `{ "status": "ok" }`
- **Reverse Proxy:** Runs behind Caddy

### Build Args

- `BASE_PATH`: Subpath where app is mounted (required for correct asset loading)
- `CACHEBUST`: Cache-busting value (git commit SHA)

### Environment Variables

- `PORT`: Port to bind to (default: 3000)
- `NODE_ENV`: Environment mode (production in containers)
- `BASE_PATH`: Build-time path prefix (set via Docker build arg)

### Local Development

For local development at root path:
```bash
npm run dev
# Runs at http://localhost:3000
```

To test with BASE_PATH locally:
```bash
BASE_PATH=/test-path npm run dev
# Runs at http://localhost:3000/test-path
```
