import type { Testimonial } from "@/types";

/**
 * ⚠️ CONTENU PROVISOIRE — isDemo: true
 * Ces témoignages sont des exemples à remplacer par les avis réels
 * récupérés sur la fiche Google Business Profile. Le composant
 * Testimonials affiche un badge "Exemple" tant que isDemo === true,
 * afin de ne jamais présenter un contenu fictif comme authentique.
 */
export const testimonials: Testimonial[] = [
  {
    id: "demo-1",
    name: "Client DETT",
    role: { fr: "Dirigeant d'entreprise", en: "Business owner" },
    company: "Divine Électricité Technologies & Trading",
    rating: 5,
    comment: {
      fr: "Il est très bon Mon entreprise a actuellement un site web professionnel",
      en: "He's excellent. My business now has a professional website thanks to his work. I'm very satisfied with the result and highly recommend his services.",
    },
    // isDemo: true,
  },
  {
    id: "demo-2",
    name: "Carel Escobar",
    role: { fr: "responsable du design", en: "Design Manager" },
    company: "DISNOK ART GRAPHIQUE",
    rating: 5,
    comment: {
      fr: "Très professionnel et à l'écoute. Il m'a expliqué simplement ce qu'il allait faire et les résultats ont suivi. Merci Christian !",
      en: "Very professional and attentive. \"He clearly explained every step of the process, and the results met my expectations. Thank you, Christian!.\"",
    },
    // isDemo: true,
  },
  {
    id: "demo-3",
    name: "Client Miroiterie Jakin",
    role: { fr: "Gérant", en: "Manager" },
    company: "Miroiterie Aluminate Jakin Le Retour",
    rating: 5,
    comment: {
      fr: "Christian, m'a crée optimiser ma fiche sur Google maps. Grâce à lui, ma fiche apparaît sur plus de 5 mots en moins de trois semaines. Je le trouve très bon et je vous le recommande vivement",
      en: "Christian optimized my Google Business Profile \"Thanks to his work, my profile started ranking for more than five keywords in less than three weeks. I'm really impressed with the results and highly recommend him.\"",
    },
    // isDemo: true,
  },
];
