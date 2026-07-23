import type { LocalizedText } from "@/types";

export interface FaqItem {
  id: string;
  question: LocalizedText;
  answer: LocalizedText;
}

export const faqItems: FaqItem[] = [
  {
    id: "why-freelance-seo-consultant",
    question: {
      fr: "Pourquoi engager un consultant SEO freelance plutôt qu'une agence ?",
      en: "Why hire a freelance SEO consultant instead of an agency?",
    },
    answer: {
      fr: "Un consultant SEO freelance travaille directement avec vous, sans intermédiaire ni compte géré par un junior. Vous gagnez en réactivité, en transparence sur les actions menées, et généralement en coût — tout en gardant un interlocuteur unique qui connaît votre projet en profondeur, du premier audit jusqu'aux résultats.",
      en: "A freelance SEO consultant works directly with you, with no account manager or junior handling your project behind the scenes. You get faster turnaround, full transparency on what's actually being done, and typically a better price — while keeping a single point of contact who knows your project inside out, from the first audit to the results.",
    },
  },
  {
    id: "seo-results-timeline",
    question: {
      fr: "Combien de temps faut-il pour voir des résultats en référencement ?",
      en: "How long does it take to see SEO results?",
    },
    answer: {
      fr: "Cela dépend de la situation de départ. Certaines corrections techniques et optimisations de fiche Google Business Profile produisent des effets en quelques jours à quelques semaines — comme observé sur plusieurs projets récents. Un positionnement durable sur des mots-clés compétitifs prend généralement de 3 à 6 mois de travail régulier.",
      en: "It depends on your starting point. Some technical fixes and Google Business Profile optimizations show effects within days to a few weeks — as seen on several recent projects. Ranking durably on competitive keywords typically takes 3 to 6 months of consistent work.",
    },
  },
  {
    id: "seo-audit-vs-local-seo",
    question: {
      fr: "Quelle est la différence entre un audit SEO et le SEO local ?",
      en: "What's the difference between an SEO audit and local SEO?",
    },
    answer: {
      fr: "Un audit SEO analyse l'ensemble du site (code, structure, contenu, performance) pour identifier ce qui bloque le référencement. Le SEO local, lui, cible spécifiquement votre visibilité sur Google Maps et dans les recherches géolocalisées, via l'optimisation de votre fiche Google Business Profile. Les deux se complètent : un audit révèle souvent des opportunités de référencement local à exploiter.",
      en: "An SEO audit analyzes your entire site (code, structure, content, performance) to identify what's holding back your rankings. Local SEO specifically targets your visibility on Google Maps and geo-based searches, mainly through Google Business Profile optimization. The two work together — an audit often reveals local SEO opportunities worth acting on.",
    },
  },
  {
    id: "shopify-seo",
    question: {
      fr: "Proposez-vous un accompagnement SEO pour les boutiques Shopify ?",
      en: "Do you offer SEO support for Shopify stores?",
    },
    answer: {
      fr: "Oui. En tant qu'expert SEO Shopify, j'interviens sur la structure des collections, les balises méta des fiches produits, la vitesse de chargement et le maillage interne — les leviers qui pèsent le plus sur le référencement d'un e-commerce Shopify.",
      en: "Yes. As a Shopify SEO expert, I work on collection structure, product page meta tags, load speed, and internal linking — the levers that matter most for a Shopify store's search rankings.",
    },
  },
  {
    id: "core-web-vitals",
    question: {
      fr: "Qu'est-ce que les Core Web Vitals et pourquoi sont-ils importants ?",
      en: "What are Core Web Vitals and why do they matter?",
    },
    answer: {
      fr: "Les Core Web Vitals sont les indicateurs de performance utilisés par Google pour évaluer l'expérience utilisateur d'un site : vitesse de chargement, réactivité et stabilité visuelle. Un score faible peut freiner votre positionnement, même avec un excellent contenu — d'où l'intérêt de les intégrer dès l'audit SEO technique.",
      en: "Core Web Vitals are the performance metrics Google uses to assess a site's user experience: loading speed, responsiveness, and visual stability. A poor score can hold back your rankings even with great content — which is why they're checked as part of every technical SEO audit.",
    },
  },
  {
    id: "free-audit",
    question: {
      fr: "L'audit SEO est-il vraiment gratuit ?",
      en: "Is the SEO audit really free?",
    },
    answer: {
      fr: "Oui, un premier audit est offert pour toute prise de contact, sans engagement. Il permet d'identifier les principaux points bloquants de votre référencement et de vous proposer un plan d'action clair avant toute décision de votre part.",
      en: "Yes, a first audit is offered free of charge for any new inquiry, with no obligation. It identifies the main issues holding back your rankings and gives you a clear action plan before you decide anything.",
    },
  },
];
