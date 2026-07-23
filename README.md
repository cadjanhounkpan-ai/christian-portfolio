# Portfolio — Christian Adjanhounkpan

Landing page personnelle à forte conversion, conçue pour transformer les visiteurs
(Meta Ads, Google Ads, référencement naturel) en prospects qualifiés.

**Stack** : Next.js 14 (App Router) · React 18 · TypeScript · Tailwind CSS · Framer Motion

---

## 1. Présentation

Ce n'est pas un CV en ligne : c'est un outil commercial. Chaque section répond à une
question précise dans le parcours du visiteur (Hero → Confiance → Problèmes → Services
→ Réalisations → Technologies → Certifications → Témoignages → CTA → Contact), pensé
pour la conversion, la performance et le référencement naturel.

Le site est **bilingue (FR/EN)** et **entièrement piloté par les données** : ajouter un
projet, un service ou un témoignage ne nécessite jamais de toucher au code des
composants — uniquement aux fichiers dans `/data`.

---

## 2. Installation

Prérequis : Node.js ≥ 18.18.

```bash
npm install
```

## 3. Lancement en développement

```bash
npm run dev
```

Le site est accessible sur [http://localhost:3000](http://localhost:3000)
(redirige automatiquement vers `/fr`).

## 4. Build & déploiement

```bash
npm run build
npm run start   # pour tester le build de production en local
```

### Déploiement sur Vercel

1. Pousser le projet sur un dépôt GitHub/GitLab.
2. Importer le dépôt sur [vercel.com](https://vercel.com).
3. Renseigner les variables d'environnement (voir `.env.example`) dans les
   paramètres du projet Vercel.
4. Déployer — aucune configuration supplémentaire n'est nécessaire.

## 5. Variables d'environnement

Copier `.env.example` vers `.env.local` et renseigner :

| Variable | Description |
|---|---|
| `CONTACT_RECEIVING_EMAIL` | Adresse recevant les messages du formulaire |
| `RESEND_API_KEY` | Clé API [Resend](https://resend.com) pour l'envoi d'e-mails |
| `SUPABASE_URL` | URL du projet Supabase (Project Settings > API) |
| `SUPABASE_SERVICE_ROLE_KEY` | Clé "service role" Supabase — **jamais préfixée `NEXT_PUBLIC_`**, utilisée uniquement côté serveur |
| `NEXT_PUBLIC_SITE_URL` | URL canonique du site, utilisée pour le SEO |
| `NEXT_PUBLIC_GA4_ID` | ID Google Analytics 4 (facultatif) |
| `NEXT_PUBLIC_META_PIXEL_ID` | ID Meta Pixel (facultatif) |

### Configuration de Supabase (enregistrement des demandes de contact)

1. Créer un projet sur [supabase.com](https://supabase.com) (gratuit).
2. Ouvrir **SQL Editor** dans le tableau de bord Supabase et exécuter le contenu
   de `supabase/schema.sql` — cela crée la table `contact_submissions` avec
   Row Level Security activé (aucun accès public, uniquement via la clé
   "service role" utilisée côté serveur).
3. Récupérer `SUPABASE_URL` et la clé **`service_role`** (Project Settings >
   API > Project API keys) et les renseigner dans `.env.local`.
4. Pour ajouter une colonne plus tard (ex. "budget"), voir les instructions
   commentées directement dans `supabase/schema.sql`.

### Configuration de Resend (envoi d'e-mails)

1. Créer un compte sur [resend.com](https://resend.com) et générer une clé API.
2. La renseigner dans `RESEND_API_KEY`.
3. Par défaut, les e-mails partent de `onboarding@resend.dev` (domaine de test
   Resend). Pour un envoi depuis votre propre domaine, vérifier un domaine
   dans Resend puis mettre à jour l'adresse `from` dans
   `lib/email/resend-client.ts`.
4. Si Resend n'est pas configuré, les demandes sont tout de même enregistrées
   dans Supabase (l'e-mail est "best-effort" et ne fait jamais perdre une
   demande de contact).

---

## 6. Structure du projet

```
app/
  [lang]/            → routes localisées (fr/en) : layout.tsx (racine réelle de l'app), page.tsx, not-found.tsx
  actions.ts          → Server Action du formulaire de contact (orchestration)
  globals.css
  sitemap.ts / robots.ts / manifest.ts
middleware.ts          → redirection "/" → "/fr"
components/
  ui/                 → bibliothèque de composants réutilisables (Button, Card, Modal, Tabs, AccordionItem...)
  layout/              → Header, Footer, MobileMenu, BackToTop
  sections/            → une section = un composant indépendant (dont FAQ.tsx)
    projects/           → sous-composants de la section Réalisations (cartes, modale, carousel)
data/                  → TOUTES les données du site (voir section 7), dont faq.ts
lib/
  i18n/                → dictionnaires FR/EN et logique de chargement
  supabase/             → client.ts (connexion) + contact-repository.ts (logique métier, isolée)
  email/                → resend-client.ts (envoi d'e-mail, isolé)
  motion-variants.ts    → animations Framer Motion centralisées
  validations.ts         → schémas Zod (formulaire de contact)
  utils.ts                → helpers (cn, traduction, dates)
  icon-map.tsx              → correspondance nom d'icône → composant Lucide
types/                  → types TypeScript partagés
constants/site.ts        → configuration SEO globale
supabase/schema.sql       → schéma SQL de la table contact_submissions
public/                  → images, icônes (voir section 8)
```

## 7. Personnalisation du contenu

**Aucune donnée ne doit être modifiée dans les composants.** Tout se passe dans `/data` :

| Fichier | Contenu |
|---|---|
| `data/profile.ts` | Nom, titre, bio, coordonnées, réseaux sociaux, lien Google Business Profile |
| `data/stats.ts` | Chiffres de la bande de confiance |
| `data/problems.ts` | Problèmes résolus (section 5) |
| `data/services.ts` | Services proposés (ordre, actif/inactif) |
| `data/projects.ts` | Projets Web et SEO (structure commune + champs spécifiques) |
| `data/certifications.ts` | Certifications |
| `data/testimonials.ts` | Témoignages — **actuellement des exemples (`isDemo: true`)** |
| `data/faq.ts` | Questions fréquentes (section FAQ, avec données structurées FAQPage) |
| `data/technologies.ts` | Technologies & outils par catégorie |
| `data/project-types.ts` | Options du menu déroulant du formulaire |
| `data/nav.ts` | Liens de navigation |
| `constants/site.ts` | Titres, descriptions, mots-clés SEO par langue |
| `lib/i18n/dictionaries/fr.ts` / `en.ts` | Tous les textes d'interface (boutons, labels...) |

### ⚠️ Points à finaliser avant la mise en ligne

1. **Témoignages** (`data/testimonials.ts`) : remplacer les textes d'exemple
   (`isDemo: true`) par de vrais avis récupérés sur la fiche Google Business Profile,
   puis passer `isDemo` à `false` (le badge "Exemple" disparaîtra automatiquement).
2. **Captures d'écran des projets** (`data/projects.ts`) : remplacer les images
   Unsplash (`isPlaceholder: true`) par de vraies captures, dans
   `/public/images/projects/`.
3. **Photo de profil** (`data/profile.ts`) : remplacer l'URL Unsplash par la photo
   professionnelle définitive dans `/public/images/profile/`.
4. **Liens sociaux et fiche GBP** (`data/profile.ts`) : URLs LinkedIn, GitHub et
   Google Business Profile marquées "À REMPLACER".
5. **Visuels de certification** (`data/certifications.ts`) : liens de vérification
   officiels à confirmer.
6. **Image Open Graph** : ajouter `og-cover.jpg` (1200×630) dans `/public/images/`.
7. **Icônes PWA** : ajouter `icon-192.png`, `icon-512.png` et `favicon.ico` dans
   `/public/icons/` (voir `app/manifest.ts`).
8. **E-mail de réception du formulaire** : configurer `RESEND_API_KEY` et
   `CONTACT_RECEIVING_EMAIL` (voir section 5). Sans cela, les messages sont
   uniquement journalisés côté serveur (`console.log`), pas envoyés par e-mail.

### Ajouter un nouveau projet

Ouvrir `data/projects.ts` et ajouter un objet respectant le type `WebProject` ou
`SeoProject` (voir `types/index.ts`). Aucune modification de composant nécessaire.

### Ajouter une langue

1. Créer `lib/i18n/dictionaries/xx.ts` en respectant la structure de `fr.ts`.
2. Ajouter `"xx"` à `locales` dans `lib/i18n/config.ts`.
3. Ajouter les traductions correspondantes dans chaque champ `LocalizedText` des
   fichiers `/data`.

---

## 8. Images

Toutes les images passent par `next/image` (lazy loading, formats AVIF/WebP,
tailles responsives), à l'exception des logos SVG de technologies (servis via
Simple Icons CDN) qui n'en ont pas besoin.

Organisation dans `/public/images/` :
- `profile/` — photo professionnelle
- `projects/` — captures d'écran des réalisations
- `certifications/` — visuels de certificats
- `testimonials/` — photos clients (facultatif)

---

## 9. Accessibilité & performance

- Navigation clavier complète, focus visibles (`focus-visible:shadow-focus`).
- Respect de `prefers-reduced-motion` (animations désactivées automatiquement).
- Une seule balise `<h1>` par page (dans le Hero).
- Images optimisées via `next/image` avec texte alternatif systématique.
- Animations limitées à `transform`/`opacity` pour rester performantes.
- Skeleton loaders plutôt que spinners pour le contenu dynamique.

Avant mise en ligne, lancer un audit Lighthouse (Chrome DevTools) et viser :
Performance ≥ 95 · Accessibilité ≥ 95 · Bonnes pratiques 100 · SEO 100.

---

## 10. Formulaire de contact

Le formulaire suit un pipeline complet, avec séparation stricte des responsabilités :

```
Composant UI (Contact.tsx)
   → validation client (HTML5) + états de chargement/succès/erreur
   → Server Action (app/actions.ts)
       → validation serveur (Zod, lib/validations.ts)
       → protection anti-spam (champ honeypot invisible)
       → enregistrement (lib/supabase/contact-repository.ts)
       → notification e-mail (lib/email/resend-client.ts), best-effort
```

- **Aucune clé API n'est exposée côté client** : les modules Supabase et
  Resend utilisent `import "server-only"`, qui fait échouer le build si l'un
  d'eux est accidentellement importé dans un composant client.
- Un échec d'envoi d'e-mail **n'efface jamais** une demande déjà enregistrée
  dans Supabase — l'e-mail est envoyé après coup et son erreur est isolée.
  Voir la configuration détaillée en section 5.
- Pour ajouter un nouveau champ au formulaire, voir les instructions dans
  `supabase/schema.sql`.

---

## 11. Qualité du code

```bash
npm run lint      # ESLint
npm run format    # Prettier (avec tri automatique des classes Tailwind)
```

Avant chaque mise en production, vérifier :
- [ ] Aucune erreur TypeScript (`tsc --noEmit`, exécuté automatiquement par `next build`)
- [ ] Aucun avertissement ESLint important
- [ ] Aucune image cassée, aucun lien invalide
- [ ] Tous les points de la section 7 "à finaliser" sont traités
- [ ] Test sur Chrome, Firefox, Safari, Edge et sur mobile

---

## 12. Évolutivité

L'architecture permet d'ajouter facilement : projets, services, certifications,
témoignages, langues, sans jamais modifier la logique des composants — uniquement
les fichiers de `/data`. Une migration future vers un CMS headless (ex. Sanity,
Contentful) serait directe, les composants consommant déjà des données typées et
découplées de l'interface.
