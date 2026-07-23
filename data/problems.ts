import type { Problem } from "@/types";

export const problems: Problem[] = [
  {
    id: "invisible-google",
    icon: "search-x",
    title: { fr: "Invisible sur Google", en: "Invisible on Google" },
    description: {
      fr: "Votre entreprise n'apparaît pas dans les premiers résultats, même sur des recherches locales évidentes.",
      en: "Your business doesn't show up in top results, even for obvious local searches.",
    },
  },
  {
    id: "slow-website",
    icon: "gauge",
    title: { fr: "Site lent ou peu performant", en: "Slow, underperforming website" },
    description: {
      fr: "Un site qui met du temps à charger fait fuir les visiteurs avant même qu'ils ne découvrent votre offre.",
      en: "A slow-loading site drives visitors away before they even see what you offer.",
    },
  },
  {
    id: "low-conversion",
    icon: "trending-down",
    title: { fr: "Faible taux de conversion", en: "Low conversion rate" },
    description: {
      fr: "Du trafic arrive, mais très peu de visiteurs deviennent des prospects ou des clients.",
      en: "Traffic comes in, but very few visitors turn into leads or customers.",
    },
  },
  {
    id: "poor-local-seo",
    icon: "map-pin-x",
    title: { fr: "Mauvais référencement local", en: "Poor local SEO" },
    description: {
      fr: "Votre fiche Google Business est mal optimisée, désorganisée, ou absente de Google Maps.",
      en: "Your Google Business Profile is poorly optimized, disorganized, or missing from Google Maps.",
    },
  },
  {
    id: "unprofitable-ads",
    icon: "circle-dollar-sign",
    title: { fr: "Publicités peu rentables", en: "Unprofitable ad spend" },
    description: {
      fr: "Vous dépensez en publicité, mais le retour sur investissement reste flou ou décevant.",
      en: "You're spending on ads, but the return on investment stays unclear or disappointing.",
    },
  },
  {
    id: "technical-debt",
    icon: "bug",
    title: { fr: "Erreurs techniques invisibles", en: "Invisible technical errors" },
    description: {
      fr: "Robots.txt mal configuré, redirections cassées, balises dupliquées : des erreurs qui coûtent cher en visibilité.",
      en: "Misconfigured robots.txt, broken redirects, duplicate tags: hidden errors that cost you visibility.",
    },
  },
];
