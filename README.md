# Md. Fahim Istiaq Siam — Interactive 3D Developer Portfolio

A modern, high-performance interactive 3D developer portfolio built with **React 19**, **Vite**, **Tailwind CSS 4**, and **React Three Fiber**, ready for direct deployment to **Vercel** with serverless API functions.

---

## Architecture & Project Structure

```
porfolio-main/
├── api/                    # Vercel Serverless Functions
│   ├── data/
│   │   ├── projects.json   # Seed projects data
│   │   └── skills.json     # Seed skills data
│   ├── lib/
│   │   ├── contact.js      # Contact delivery service (Webhook & Resend email)
│   │   └── utils.js        # Static data loaders & CORS helpers
│   ├── contact.js          # POST /api/contact
│   ├── index.js            # GET  /api (API status & endpoints discovery)
│   ├── projects.js         # GET  /api/projects
│   ├── server.js           # Local standalone Node.js development server
│   └── skills.js           # GET  /api/skills
│
├── frontend/               # React + Vite Single Page Application (SPA)
│   ├── public/
│   │   ├── favicon.svg
│   │   ├── og-image.png
│   │   ├── resume.pdf
│   │   ├── robots.txt
│   │   └── sitemap.xml     # Search engine sitemap
│   ├── src/
│   │   ├── assets/         # Optimized project screenshots & portrait
│   │   ├── components/
│   │   │   ├── sections/   # Hero, Skills, Projects, Contact, NotFound
│   │   │   ├── three/      # React Three Fiber 3D particle & geometry scene
│   │   │   └── ui/         # Navbar, CommandPalette (Ctrl+K)
│   │   ├── lib/            # api, useMagnetic, useScrollReveal
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
│
├── vercel.json             # Vercel deployment configuration, headers & SPA rewrites
├── package.json            # Root scripts & tooling
└── .env.example            # Environment variables template
```

---

## Quick Start (Local Development)

### 1. Install Dependencies

```bash
# Install root tools
npm install

# Install frontend dependencies
npm run install:frontend
```

### 2. Configure Environment Variables

```bash
cp .env.example .env
```

### 3. Run Locally

#### Option A: Full-Stack with Vercel CLI (Recommended)
Runs frontend and serverless API endpoints concurrently on `http://localhost:3000`:

```bash
npm run dev
```

#### Option B: Standalone Frontend & Backend
In Terminal 1 (Backend API on `http://localhost:5001`):
```bash
npm run dev:backend
```

In Terminal 2 (Vite Frontend on `http://localhost:5173`):
```bash
npm run dev:frontend
```

---

## Production Build & Linting

```bash
# Build the production bundle
npm run build

# Run Oxlint on frontend codebase
npm run lint

# Preview the production build locally
npm run preview
```

---

# Vercel Deployment

This repository is pre-configured for zero-config deployment to Vercel via the GitHub integration or Vercel CLI.

### Option 1 — Import to Vercel (Recommended)

1. Push this repository to your GitHub account.
2. Navigate to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Vercel automatically detects the build settings from `vercel.json`:
   - **Framework Preset:** Other / Vite
   - **Install Command:** `cd frontend && npm install`
   - **Build Command:** `cd frontend && npm run build`
   - **Output Directory:** `frontend/dist`
4. Add any desired environment variables under **Settings → Environment Variables** (see table below).
5. Click **Deploy**.

### Option 2 — Deploy via Vercel CLI

```bash
npm install -g vercel
vercel login
vercel --prod
```

---

## Environment Variables

### Server-Side Variables (Secret / Backend only)

Configure these in the Vercel Dashboard under **Project Settings → Environment Variables**. These variables are **never exposed to the browser client**.

| Variable | Required | Description |
| :--- | :---: | :--- |
| `CONTACT_WEBHOOK_URL` | Optional | Webhook endpoint (Discord, Slack, Zapier, Make) to receive contact form submissions. |
| `RESEND_API_KEY` | Optional | API key from [Resend](https://resend.com) to forward contact inquiries via email. |
| `CONTACT_EMAIL` | Optional | Destination email address where contact messages should be delivered (e.g. `fahimistiaq456@gmail.com`). |
| `RESEND_FROM_EMAIL` | Optional | Verified sender email address (e.g. `Portfolio <onboarding@resend.dev>`). |

### Client-Side Variables (Public / Frontend)

Client-side variables must start with `VITE_`.

| Variable | Required | Description |
| :--- | :---: | :--- |
| `VITE_API_BASE_URL` | Optional | Override API base URL. **Leave blank in production on Vercel** — the app automatically uses same-origin `/api` serverless routes. |
| `VITE_API_PROXY_TARGET` | Optional | Proxy target for local Vite development (`http://localhost:5001` or `http://localhost:3000`). |

---

## API Endpoints

All endpoints support CORS and standard HTTP verbs:

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/api` | API health check and endpoint catalog |
| `GET` | `/api/projects` | List of curated engineering projects |
| `GET` | `/api/skills` | Categorized technical skills & credentials |
| `POST` | `/api/contact` | Submits a contact inquiry (name, email, subject, message) |

---

## Vercel Compatibility & Architecture Notes

1. **Stateless Serverless Execution:** API routes run as Vercel serverless functions (`nodejs20.x`/`nodejs22.x`). Static data (`projects.json`, `skills.json`) is bundled with static module requires to ensure Node File Trace (`@vercel/nft`) includes it without runtime path resolution issues.
2. **Ephemeral Filesystem:** Local disk writes to JSON files are not persistent across serverless invocations. Contact submissions are stateless and forward directly via Webhook or Resend email.
3. **SPA Routing:** `vercel.json` provides rewrite fallback to `/index.html` for client-side routing while keeping `/api/*` endpoints routed to serverless handlers.
4. **Security & Caching Headers:** `vercel.json` applies HTTP security headers (`X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`, `Permissions-Policy`) and 1-year immutable caching for static assets under `/assets/`.
