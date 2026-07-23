/**
 * Types centraux du projet.
 * Toute nouvelle donnée (service, projet, certification, témoignage...)
 * doit respecter une de ces structures pour rester compatible avec les
 * composants existants, sans jamais avoir à les modifier.
 */

export type Locale = "fr" | "en";

export type LocalizedText = {
  fr: string;
  en: string;
};

/* ------------------------------------------------------------------ */
/* Profil                                                              */
/* ------------------------------------------------------------------ */

export interface SocialLink {
  id: string;
  label: string;
  url: string;
  icon: "linkedin" | "github" | "facebook" | "whatsapp" | "mail" | "instagram";
}

export interface Profile {
  name: string;
  title: LocalizedText;
  tagline: LocalizedText;
  bio: LocalizedText;
  location: string;
  email: string;
  phone: string;
  whatsapp: string;
  photo: string;
  cvUrl?: string;
  socials: SocialLink[];
  googleBusinessProfileUrl: string;
}

/* ------------------------------------------------------------------ */
/* Statistiques (bande de confiance)                                   */
/* ------------------------------------------------------------------ */

export interface Stat {
  id: string;
  value: number;
  suffix?: string;
  label: LocalizedText;
}

/* ------------------------------------------------------------------ */
/* Problèmes résolus                                                    */
/* ------------------------------------------------------------------ */

export interface Problem {
  id: string;
  icon: string;
  title: LocalizedText;
  description: LocalizedText;
}

/* ------------------------------------------------------------------ */
/* Services                                                             */
/* ------------------------------------------------------------------ */

export interface Service {
  id: string;
  icon: string;
  name: LocalizedText;
  description: LocalizedText;
  order: number;
  active: boolean;
  featured?: boolean;
}

/* ------------------------------------------------------------------ */
/* Projets                                                              */
/* ------------------------------------------------------------------ */

export type ProjectCategory = "web" | "seo";

export interface ProjectBase {
  id: string;
  category: ProjectCategory;
  name: string;
  description: LocalizedText;
  coverImage: string;
  gallery: string[];
  featured?: boolean;
  client?: string;
  date?: string;
  /** true = projet d'illustration (image/mise en page libre de droits), à remplacer par une vraie capture */
  isPlaceholder?: boolean;
}

export interface WebProject extends ProjectBase {
  category: "web";
  technologies: string[];
  projectUrl?: string;
  repoUrl?: string;
}

export type SeoType = "technique" | "local" | "on-page" | "audit";

export interface SeoResult {
  metric: LocalizedText;
  before: string;
  after: string;
}

// export interface SeoProject extends ProjectBase {
//   category: "seo";
//   seoType: SeoType;
//   objectives: LocalizedText[];
//   actions: LocalizedText[];
//   results: SeoResult[];
//   beforeAfterGallery: { before: string; after: string; label: LocalizedText }[];
// }

export interface SeoProject extends ProjectBase {
  category: "seo";
  seoType: SeoType;
  objectives: LocalizedText[];
  actions: LocalizedText[];
  results: SeoResult[];
  resultsGallery: { image: string; label: LocalizedText }[]; // ← remplace beforeAfterGallery
}

export type Project = WebProject | SeoProject;

/* ------------------------------------------------------------------ */
/* Certifications                                                       */
/* ------------------------------------------------------------------ */

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  issuerLogo: string;
  date: string;
  credentialId: string;
  image: string;
  verifyUrl: string;
  description?: LocalizedText;
}

/* ------------------------------------------------------------------ */
/* Témoignages                                                          */
/* ------------------------------------------------------------------ */

export interface Testimonial {
  id: string;
  name: string;
  role?: LocalizedText;
  company?: string;
  rating: 1 | 2 | 3 | 4 | 5;
  comment: LocalizedText;
  photo?: string;
  isDemo?: boolean;
}

/* ------------------------------------------------------------------ */
/* Technologies & outils                                                */
/* ------------------------------------------------------------------ */

export type TechCategory = "dev" | "seo" | "tools" | "ads";

// export interface Technology {
//   id: string;
//   name: string;
//   logo: string;
//   category: TechCategory;
//   level?: number; // 1-5, facultatif
// }
export interface Technology {
  id: string;
  name: string;
  logo: string;
  category: TechCategory;
  level?: number;
  fallbackIcon?: string; // nom d'icône Lucide, utilisé si aucun logo officiel n'existe
}

/* ------------------------------------------------------------------ */
/* Formulaire de contact                                                */
/* ------------------------------------------------------------------ */

export interface ProjectTypeOption {
  value: string;
  label: LocalizedText;
}

export interface ContactFormState {
  success: boolean;
  message?: string;
  errors?: Record<string, string[]>;
}
