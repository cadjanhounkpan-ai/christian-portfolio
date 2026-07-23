import type { Certification } from "@/types";

export const certifications: Certification[] = [
  {
    id: "google-digital-garage",
    name: "Fondamentaux du Marketing Digital",
    issuer: "Google Digital Garage",
    issuerLogo: "https://cdn.simpleicons.org/google/0A5C46",
    date: "2026-04-17",
    credentialId: "452426284",
    image: "/images/certifications/google-digital-garage.jpg", // le visuel du certificat
    verifyUrl: "https://skillshop.exceedlms.com/student/award/jHWqLQNPmoTccj1cKyZhkqsE?fbclid=IwY2xjawRPSp5leHRuA2FlbQIxMQBzcnRjBmFwcF9pZBAyMjIwMzkxNzg4MjAwODkyAAEemJrcBW-KA9S4IlJsClU-isvd1LCU_UcqNyXIEpld312NL2_3DP7vh9rOuyU_aem_Zi7XNNDiJ9SUkIkdfyiNdA", 
    description: {
      fr: "Certification couvrant les fondamentaux du marketing digital, du SEO à la publicité en ligne.",
      en: "Certification covering the fundamentals of digital marketing, from SEO to online advertising.",
    },
  },
  {
    id: "hubspot-digital-marketing",
    name: "Certification Marketing Digital",
    issuer: "HubSpot Academy",
    issuerLogo: "https://cdn.simpleicons.org/hubspot/0A5C46",
    date: "2026-05-12",
    credentialId: "e395213202f84bf0bf802f54549a1827",
    image: "/images/certifications/hubspot-digital-marketing.jpg", // le visuel du certificat
    verifyUrl: "https://app-eu1.hubspot.com/academy/achievements/wbxmdqlj/fr/1/christian-adjanhounkpan/certifiee-en-marketing-digital", 
    description: {
      fr: "Certification valide jusqu'en juin 2027, couvrant les stratégies de marketing digital modernes.",
      en: "Certification valid until June 2027, covering modern digital marketing strategies.",
    },
  },
  {
    id: "Brightlocal Academy",
    name: "A Beginner's Guide to Local SEO",
    issuer: "BrightLocal Academy",
    issuerLogo: "https://cdn.simpleicons.org/hubspot/0A5C46",
    date: "2026-07-09",
    credentialId: "",
    image: "/images/certifications/brightlocal-academy.jpg", //  le visuel du certificat
    verifyUrl: "/images/certifications/brightlocal-academy.jpg", //  le lien de vérification réel
    description: {
      fr: "Cette certification couvre les principes essentiels du référencement local : optimisation de Google Business Profile, facteurs de classement local, recherche de mots-clés locaux, citations, gestion des avis clients et bonnes pratiques pour améliorer la visibilité d'une entreprise dans les résultats de recherche locaux.",
      en: "This training strengthened my understanding of local SEO fundamentals, including local search ranking factors, Google Business Profile optimization, local keyword research, citations, online reviews, and best practices to improve local online visibility.",
    },
  },
  {
    id: "Brightlocal Academy-2",
    name: "Essential Google Business Profile Tasks for Agencies",
    issuer: "BrightLocal Academy",
    issuerLogo: "https://cdn.simpleicons.org/hubspot/0A5C46",
    date: "2026-07-10",
    credentialId: "",
    image: "/images/certifications/essentiel-GBP-Agence.jpg", //  le visuel du certificat
    verifyUrl: "/images/certifications/essentiel-GBP-Agence.jpg", // À REMPLACER par le lien de vérification réel
    description: {
      fr: "Cette certification couvre les tâches essentielles liées à l'optimisation et à la gestion des fiches Google Business Profile, afin d'améliorer la visibilité locale des entreprises et d'appliquer les bonnes pratiques du référencement local.",
      en: "This training focused on managing and optimizing Google Business Profiles for businesses and clients, covering essential tasks such as profile optimization, local visibility, business information management, and best practices for delivering effective local SEO services.",
    },
  },
];
