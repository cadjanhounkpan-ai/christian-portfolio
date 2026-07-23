import type { Project, SeoProject, WebProject } from "@/types";

const webProjects: WebProject[] = [
  {
    id: "design-agency-website",
    category: "web",
    name: "Site vitrine — Société de design",
    description: {
      fr: "Site vitrine moderne développé pour une société de design, avec une interface élégante, une navigation fluide et une architecture pensée pour mettre en valeur les réalisations et renforcer la crédibilité de la marque.",
    en: "Modern corporate website developed for a design agency, featuring an elegant interface, smooth navigation, and an architecture designed to showcase projects and strengthen the brand's credibility.",
  },
    coverImage: "/images/projects/createur-visuelles-exception.jpg",
    gallery: [
      "/images/projects/createur-visuelles-exception.jpg",
      "/images/projects/createur-visuelles-exception.jpg",
    ],
    technologies: ["HTML5", "CSS3", "JAVASCRIPT"],
    projectUrl: "https://createur-visuelle-exception.netlify.app/",
    featured: true,
    date: "2026",
  },
  {
    id: "artisan-plumber-paris",
    category: "web",
    name: "Site vitrine — Artisan plombier Paris",
    description: {
       fr: "Site vitrine professionnel conçu pour développer la visibilité locale d'un artisan plombier à Paris, avec une architecture optimisée pour le SEO local, les performances, l'expérience utilisateur et la génération de demandes d'intervention.",
    en: "Professional business website designed to increase the local online visibility of a plumbing business in Paris, featuring an SEO-focused architecture optimized for local search, performance, user experience, and lead generation.",
  },
    coverImage: "/images/projects/seo-local-plombier.jpg",
    gallery: [
      "/images/projects/seo-local-plombier.jpg",
      "/images/projects/seo-local-plombier.jpg",
    ],
    technologies: ["Wordpress", "HTML", "CSS", "JavaScript"],
    projectUrl: "https://artisant-plombier-paris.netlify.app/",
    featured: true,
    date: "2026",
  },
  {
    id: "personal-portfolio",
    category: "web",
    name: "Portfolio personnel",
    description: {
      fr: "Le site que vous consultez actuellement : conçu en Next.js, pensé SEO dès la première ligne de code, avec un score PageSpeed de 96/100 en performance.",
      en: "The very site you're browsing: built with Next.js, SEO-minded from the first line of code, scoring 96/100 on PageSpeed performance.",
    },
    coverImage: "/images/projects/christian-adjanhounkpan-site-web.jpg",
    gallery: [
      "/images/projects/christian-adjanhounkpan-site-web.jpg",
      "/images/projects/christian-adjanhounkpan-site-web.jpg",
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    featured: true,
    date: "2026",
  },
  {
    id: "wordpress-showcase",
    category: "web",
    name: "Site vitrine WordPress",
    description: {
      fr: "Exemple de site vitrine réalisé pour un client local, avec bonnes pratiques SEO on-page intégrées dès la conception.",
      en: "Example of a showcase site built for a local client, with on-page SEO best practices baked in from the design phase.",
    },
    coverImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
      "https://images.unsplash.com/photo-1481487196290-c152efe083f5?w=1200&q=80",
    ],
    technologies: ["WordPress", "HTML5", "CSS3", "JavaScript"],
    featured: true,
    date: "2026",
  },
];

const seoProjects: SeoProject[] = [
  {
    id: "dett",
    category: "seo",
    seoType: "local",
    name: "Divine Électricité Technologies & Trading (DETT)",
    client: "DETT — Cotonou",
    description: {
      fr: "Création de site web et optimisation complète de la fiche Google Business Profile pour une entreprise sans aucune visibilité locale.",
      en: "Website creation and full Google Business Profile optimization for a business with zero local visibility.",
    },
    coverImage: "/images/projects/electricien-cotonou-1.jpg",
    gallery: [
      "/images/projects/electricien-cotonou-1.jpg",
    ],
    objectives: [
      { fr: "Sortir de l'invisibilité totale sur Google Maps", en: "Move from total invisibility to visible on Google Maps" },
      { fr: "Obtenir un premier trafic local qualifié", en: "Generate first qualified local traffic" },
    ],
    actions: [
      { fr: "Création du site web de l'entreprise", en: "Built the company website" },
      { fr: "Optimisation complète de la fiche Google Business Profile", en: "Full Google Business Profile optimization" },
    ],
    results: [
      { metric: { fr: "Visibilité Google Maps", en: "Google Maps visibility" }, before: "Aucune", after: "Top 3 sur 4 mots-clés (~1 semaine)" },
    ],
    resultsGallery: [
  { image: "/images/projects/service-electrique-cotonou.jpg", label: { fr: "Résultat 1", en: "Result 1" } },
  { image: "/images/projects/service-electrique-cotonou.jpg", label: { fr: "Résultat 2", en: "Result 2" } },
  { image: "/images/projects/service-electrique-cotonou.jpg", label: { fr: "Résultat 3", en: "Result 3" } },
  { image: "/images/projects/service-electrique-cotonou.jpg", label: { fr: "Résultat 4", en: "Result 4" } },
],
    date: "Jan. 2026",
    featured: true,
  },
  {
    id: "lawn-poppers",
    category: "seo",
    seoType: "technique",
    name: "Lawn Popper's LLC",
    client: "Lawn Popper's LLC — Richmond, VA",
    description: {
      fr: "Optimisation SEO technique complet pour une entreprise américaine, suivi d'une refonte structurelle de sa fiche Google Business Profile.",
      en: "Complete technical SEO Optimization for a US-based company, followed by a structural overhaul of its Google Business Profile.",
    },
    coverImage: "/images/projects/sitemap-code.jpg",
    gallery: [
      "/images/projects/sitemap-code.jpg",
    ],
    objectives: [
      { fr: "Corriger les erreurs techniques bloquant l'indexation", en: "Fix technical errors blocking indexation" },
      { fr: "Clarifier une fiche Google Business Profile désorganisée", en: "Clean up a disorganized Google Business Profile" },
    ],
    actions: [
      { fr: "Audit SEO complet du site", en: "Full SEO site audit" },
      { fr: "Correction du robots.txt et des redirections 301", en: "Fixed robots.txt and 301 redirects" },
      { fr: "Mise en place des balises canoniques et du sitemap XML", en: "Implemented canonical tags and XML sitemap" },
      { fr: "Refonte de la fiche GBP : 55 entrées désorganisées → 13 services optimisés", en: "GBP overhaul: 55 disorganized entries → 13 optimized services" },
    ],
    results: [
      { metric: { fr: "Structure Google Business Profile", en: "Google Business Profile structure" }, before: "55 entrées désorganisées", after: "13 services optimisés" },
    ],
    resultsGallery: [
  { image: "/images/projects/robots.jpg", label: { fr: "Résultat 1", en: "Result 1" } },
  { image: "/images/projects/htaccess.jpg", label: { fr: "Résultat 2", en: "Result 2" } },
  { image: "/images/projects/sitemap.jpg", label: { fr: "Résultat 3", en: "Result 3" } },
  { image: "/images/projects/htaccess.jpg", label: { fr: "Résultat 4", en: "Result 4" } },
],

    date: "Avr.–Mai 2026",
    featured: true,
  },
  {
    id: "jakin",
    category: "seo",
    seoType: "local",
    name: "Miroiterie Aluminate Jakin Le Retour",
    client: "Miroiterie Jakin — Bohicon",
    description: {
      fr: "Création de fiche Google et optimisation du référencement local pour un artisan local.",
      en: "Google listing creation and local SEO optimization for a local craftsman business.",
    },
    coverImage: "/images/projects/fiche-google.jpg",
    gallery: [
      "/images/projects/fiche-google.jpg",
    ],
    objectives: [
      { fr: "Créer une présence Google inexistante", en: "Establish a nonexistent Google presence" },
      { fr: "Atteindre le positionnement local le plus élevé possible", en: "Reach the highest possible local ranking" },
    ],
    actions: [
      { fr: "Création complète de la fiche Google", en: "Full Google listing creation" },
      { fr: "Optimisation du profil (catégories, description, photos)", en: "Profile optimization (categories, description, photos)" },
    ],
    results: [
      { metric: { fr: "Position locale", en: "Local ranking" }, before: "Profil inexistant", after: "Top 1 local" },
    ],
     resultsGallery: [
  { image: "/images/projects/resultat-vitrier-bohicon.jpg", label: { fr: "Résultat 1", en: "Result 1" } },
  { image: "/images/projects/installation-vitre-aluminuim.jpg", label: { fr: "Résultat 2", en: "Result 2" } },
  { image: "/images/projects/fiche-generale.jpg", label: { fr: "Résultat 3", en: "Result 3" } },
  { image: "/images/projects/resultat-ajr.jpg", label: { fr: "Résultat 4", en: "Result 4" } },
],
    date: "Mai 2026 – présent",
  },
  {
    id: "complete-seo-audit",
    category: "seo",
    seoType: "audit",
    name: "Audit SEO complet — Site vitrine PME",
    client: "PME",
    description: {
      fr: "Audit SEO complet d'un site vitrine afin d'identifier les freins techniques, sémantiques et UX impactant la visibilité sur Google, avec un plan d'action priorisé.",
      en: "Comprehensive SEO audit of a business website to identify technical, semantic, and UX issues affecting Google visibility, followed by a prioritized action plan.",
  },
    coverImage: "/images/projects/seo-technique.jpg",
    gallery: [
      "/images/projects/seo-technique.jpg",
    ],
    objectives: [
      {  fr: "Identifier les problèmes bloquant les performances SEO du site",
      en: "Identify issues preventing the website from reaching its SEO potential" },
      {
      fr: "Prioriser les actions selon leur impact et leur facilité de mise en œuvre",
      en: "Prioritize improvements based on impact and implementation effort"},
    ],
    actions: [
      { fr: "Audit technique complet (indexation, robots.txt, sitemap XML, redirections, balises canoniques)",
      en: "Comprehensive technical audit (indexing, robots.txt, XML sitemap, redirects, canonical tags)" },
      {fr: "Analyse SEO On-Page (titres, balises méta, structure Hn, maillage interne)",
      en: "On-page SEO analysis (titles, meta tags, heading structure, internal linking)"},
      {
      fr: "Évaluation des Core Web Vitals et des performances du site",
      en: "Core Web Vitals and website performance assessment",
    },
    {
      fr: "Analyse des mots-clés et de la visibilité organique",
      en: "Keyword and organic visibility analysis",
    },
    {
      fr: "Remise d'un rapport détaillé avec recommandations priorisées",
      en: "Delivery of a detailed report with prioritized recommendations",
    },
    ],
    results: [
      {
      metric: {
        fr: "Erreurs critiques détectées",
        en: "Critical issues identified",
      },
      before: "Non identifiées",
      after: "Corrigées et priorisées",
    },
    {
      metric: {
        fr: "Plan d'action SEO",
        en: "SEO action plan",
      },
      before: "Aucun",
      after: "Rapport complet avec priorités",
    },
    ],
     resultsGallery: [
  { image: "/images/projects/audit-seo-img.jpg", label: { fr: "Résultat 1", en: "Result 1" } },
  { image: "/images/projects/audit-seo-rapport.jpg", label: { fr: "Résultat 2", en: "Result 2" } },
  { image: "/images/projects/audit-technique-probleme-img.jpg", label: { fr: "Résultat 3", en: "Result 3" } },
  { image: "/images/projects/pagespeed.jpg", label: { fr: "Résultat 4", en: "Result 4" } },
],

    date: "2026",
    featured: true,
  },
  {
    id: "personal-brand-seo",
    category: "seo",
    seoType: "local",
    name: "Positionnement personnel — christianseo.netlify.app",
    client: "Profil personnel",
    description: {
      fr: "Le meilleur cas d'école : son propre site, positionné n°1 sur Google Maps pour « Consultant SEO Bohicon » et « Développeur web Bohicon ».",
      en: "The best case study: his own site, ranked #1 on Google Maps for \"SEO Consultant Bohicon\" and \"Web Developer Bohicon\".",
    },
    coverImage: "/images/projects/christianSeo.jpg",
    gallery: [
      "/images/projects/christianSeo.jpg",
    ],
    objectives: [
      { fr: "Prouver son expertise SEO sur son propre terrain", en: "Prove SEO expertise on his own turf" },
    ],
    actions: [
      { fr: "SEO on-page complet dès la phase de développement", en: "Full on-page SEO from the development phase" },
      { fr: "Optimisation technique pour un score PageSpeed maximal", en: "Technical optimization for a maximal PageSpeed score" },
    ],
    results: [
      { metric: { fr: "Classement Google Maps", en: "Google Maps ranking" }, before: "Non classé", after: "#1 « Consultant SEO Bohicon » & « Développeur web Bohicon »" },
      { metric: { fr: "Score SEO PageSpeed", en: "PageSpeed SEO score" }, before: "—", after: "100/100" },
    ],
     resultsGallery: [
  { image: "/images/projects/local-developpeur.jpg", label: { fr: "Résultat 1", en: "Result 1" } },
  { image: "/images/projects/local-expert.jpg", label: { fr: "Résultat 2", en: "Result 2" } },
  { image: "/images/projects/christian-seo.jpg", label: { fr: "Résultat 3", en: "Result 3" } },
  { image: "/images/projects/christian-adjanhounkpan-site-web.jpg", label: { fr: "Résultat 4", en: "Result 4" } },
],

    date: "2026",
    featured: true,
  },
];

export const projects: Project[] = [...seoProjects, ...webProjects];

export const getFeaturedProjects = () => projects.filter((p) => p.featured);
export const getProjectsByCategory = (category: Project["category"]) =>
  projects.filter((p) => p.category === category);
