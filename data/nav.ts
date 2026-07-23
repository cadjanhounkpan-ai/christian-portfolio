export interface NavItem {
  id: string;
  href: string;
  label: { fr: string; en: string };
}

export const navItems: NavItem[] = [
  { id: "problemes", href: "#problemes", label: { fr: "Problèmes résolus", en: "Problems solved" } },
  { id: "services", href: "#services", label: { fr: "Services", en: "Services" } },
  { id: "realisations", href: "#realisations", label: { fr: "Réalisations", en: "Work" } },
  { id: "certifications", href: "#certifications", label: { fr: "Certifications", en: "Certifications" } },
  { id: "temoignages", href: "#temoignages", label: { fr: "Témoignages", en: "Testimonials" } },
  { id: "faq", href: "#faq", label: { fr: "FAQ", en: "FAQ" } },
  { id: "contact", href: "#contact", label: { fr: "Contact", en: "Contact" } },
];
