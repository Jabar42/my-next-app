This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Prisma + Supabase

1. Crea un archivo `.env` (no se versiona) con las variables:
   - `DATABASE_URL` — cadena de conexión Postgres de Supabase (Project settings → Database → Connection string → URI).
   - `NEXT_PUBLIC_SUPABASE_URL` y `NEXT_PUBLIC_SUPABASE_ANON_KEY` — para el cliente público de Supabase que ya usas en el frontend.
2. Instala dependencias y genera el cliente:
   ```bash
   npm install
   npm run prisma:generate
   ```
3. Para sincronizar el esquema con la base de datos de Supabase (sin crear migraciones locales) usa:
   ```bash
   npm run prisma:db-push
   ```
4. Cuando quieras versionar cambios de esquema, crea una migración:
   ```bash
   npm run prisma:migrate -- --name init
   ```
5. Visualiza y edita datos con Prisma Studio:
   ```bash
   npm run prisma:studio
   ```

> El helper `src/lib/prisma.ts` expone una única instancia de `PrismaClient` lista para usarse en rutas, server components y scripts.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
