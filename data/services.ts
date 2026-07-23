import type { Service } from "@/types";

export const services: Service[] = [
  {
    id: "seo-technical",
    icon: "code-2",
    name: { fr: "SEO Technique", en: "Technical SEO" },
    description: {
      fr: "Audit du code, robots.txt, redirections 301, balises canoniques, sitemap XML : je corrige ce qui bloque votre indexation.",
      en: "Code audit, robots.txt, 301 redirects, canonical tags, XML sitemap: I fix what's blocking your indexing.",
    },
    order: 1,
    active: true,
    featured: true,
  },
  {
    id: "seo-onpage",
    icon: "file-text",
    name: { fr: "SEO On-page", en: "On-page SEO" },
    description: {
      fr: "Optimisation sémantique, maillage interne, balises méta et Core Web Vitals pour un contenu qui se positionne.",
      en: "Semantic optimization, internal linking, meta tags, and Core Web Vitals for content that ranks.",
    },
    order: 2,
    active: true,
  },
  {
    id: "seo-local",
    icon: "map-pin",
    name: { fr: "SEO Local", en: "Local SEO" },
    description: {
      fr: "Optimisation Google Business Profile et positionnement sur Google Maps pour dominer votre zone de chalandise.",
      en: "Google Business Profile optimization and Google Maps ranking to dominate your local area.",
    },
    order: 3,
    active: true,
    featured: true,
  },
  {
    id: "seo-audit",
    icon: "clipboard-check",
    name: { fr: "Audit SEO", en: "SEO Audit" },
    description: {
      fr: "Un rapport complet et un plan d'action priorisé pour savoir exactement quoi corriger, et dans quel ordre.",
      en: "A complete report and a prioritized action plan so you know exactly what to fix, and in what order.",
    },
    order: 4,
    active: true,
  },
  {
    id: "meta-ads",
    icon: "instagram",
    name: { fr: "Meta Ads", en: "Meta Ads" },
    description: {
      fr: "Campagnes Facebook & Instagram conçues pour générer des prospects qualifiés, pas seulement des clics.",
      en: "Facebook & Instagram campaigns designed to generate qualified leads, not just clicks.",
    },
    order: 5,
    active: true,
  },
  {
    id: "google-ads",
    icon: "search",
    name: { fr: "Google Ads", en: "Google Ads" },
    description: {
      fr: "Des campagnes de recherche rentables, avec un ciblage précis et un suivi des conversions rigoureux.",
      en: "Profitable search campaigns, with precise targeting and rigorous conversion tracking.",
    },
    order: 6,
    active: true,
  },
  {
    id: "frontend-dev",
    icon: "layout-template",
    name: { fr: "Développement Front-end", en: "Front-end Development" },
    description: {
      fr: "Des sites rapides et sémantiques en HTML5, CSS3 et JavaScript, pensés pour le SEO dès la première ligne de code.",
      en: "Fast, semantic sites in HTML5, CSS3, and JavaScript, built with SEO in mind from the first line of code.",
    },
    order: 7,
    active: true,
  },
  {
    id: "landing-pages",
    icon: "rocket",
    name: { fr: "Création de Landing Pages", en: "Landing Page Creation" },
    description: {
      fr: "Des pages d'atterrissage à forte conversion pour vos campagnes publicitaires, du design au déploiement.",
      en: "High-converting landing pages for your ad campaigns, from design to deployment.",
    },
    order: 8,
    active: true,
  },
];

export const getActiveServices = () =>
  services.filter((s) => s.active).sort((a, b) => a.order - b.order);
