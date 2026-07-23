-- ============================================================
-- Table : contact_submissions
-- À exécuter dans l'éditeur SQL de Supabase (Database > SQL Editor)
-- ============================================================

create table if not exists public.contact_submissions (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  phone text,
  project_type text not null,
  message text not null,
  created_at timestamptz not null default now()
);

-- Index utile pour trier/filtrer les demandes les plus récentes
create index if not exists contact_submissions_created_at_idx
  on public.contact_submissions (created_at desc);

-- Sécurité : Row Level Security activé, AUCUNE policy publique.
-- Seule la clé "service role" (utilisée exclusivement côté serveur,
-- dans lib/supabase/client.ts) peut lire/écrire cette table, car elle
-- contourne RLS par défaut. Le navigateur ne peut jamais y accéder
-- directement.
alter table public.contact_submissions enable row level security;

-- ============================================================
-- Pour ajouter une nouvelle colonne à l'avenir, par exemple "budget" :
--
--   alter table public.contact_submissions add column budget text;
--
-- Puis mettre à jour :
--   1. lib/validations.ts (schéma Zod)
--   2. lib/supabase/contact-repository.ts (objet inséré)
--   3. components/sections/Contact.tsx (champ de formulaire)
-- ============================================================
