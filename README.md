# ScolarGestor_enhanced
Starter fullstack project (backend + frontend) for the enhanced School Database Management App.

## Structure
- backend/  -> Node.js + Express + TypeScript + Prisma
- frontend/ -> React + Vite + TypeScript + Tailwind
- docker-compose.yml -> local dev (postgres + api)

## Quick start (dev)
1. Install Docker & Docker Compose (optional, recommended)
2. From project root:
   - Start DB with Docker Compose:
     `docker compose up -d`
   - Backend:
     cd backend
     npm install
     # create .env from .env.example then run migrations
     npx prisma migrate dev --name init
     npm run dev
   - Frontend:
     cd frontend
     npm install
     npm run dev

## Notes
- This is a starter scaffold. Fill in environment variables and production configs.
- If you want me to expand any file or implement more endpoints/components, tell me which ones.
