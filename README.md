# Babideal

Petites annonces en Côte d'Ivoire. Next.js 15, Tailwind CSS, shadcn/ui, Supabase.

## Démarrer

```bash
npm install
cp .env.example .env.local
npm run dev
```

Renseignez `NEXT_PUBLIC_SUPABASE_URL` et `NEXT_PUBLIC_SUPABASE_ANON_KEY` dans `.env.local` quand le projet Supabase est créé. Sans ces clés, le site s'affiche quand même : la session n'est simplement pas branchée.

La clé `SUPABASE_SERVICE_ROLE_KEY` reste côté serveur. Ne la préfixez jamais par `NEXT_PUBLIC_`.

Le schéma SQL n'est pas appliqué. Il attend une confirmation avant toute migration.
