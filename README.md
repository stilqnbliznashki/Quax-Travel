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

## Database Setup

1. Create a Supabase project.
2. Copy the Supabase Postgres connection string.
3. Replace `DATABASE_URL` in `.env`.
4. If the Supabase tables already exist, run `npx prisma db pull`, then `npx prisma generate`.

## Scripts

- `npm run dev` starts the local app
- `npm run build` creates a production build
- `npm run lint` runs ESLint
