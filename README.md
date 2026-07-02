# Quax Travel

Tourism discovery MVP for a two-person Quax Internship project. The app focuses on
one selected destination, Sofia, and gives tourists one place to browse hotels,
restaurants, attractions, offers, map points, and practical destination/weather info.

## Getting Started

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Tech Stack

- TypeScript
- Next.js App Router
- Tailwind CSS
- Prisma ORM
- PostgreSQL on Supabase

## MVP Routes

- `/` home page
- `/hotels`
- `/restaurants`
- `/attractions`
- `/places/[slug]`
- `/offers`
- `/map`
- `/destination`

## Database Setup

1. Create a Supabase project.
2. Copy the Supabase Postgres connection string.
3. Replace `DATABASE_URL` in `.env`.
4. Run `npx prisma migrate dev --name init` when you are ready to create tables.

The current UI uses local sample data in `src/lib/places.ts`, so the app can run
before the database is connected.

## Scripts

- `npm run dev` starts the local app
- `npm run build` creates a production build
- `npm run lint` runs ESLint
