import type { ProjectTypeOption } from "@/types";

export const projectTypeOptions: ProjectTypeOption[] = [
  { value: "seo-audit", label: { fr: "Audit SEO", en: "SEO audit" } },
  { value: "seo-local", label: { fr: "SEO local / Google Business Profile", en: "Local SEO / Google Business Profile" } },
  { value: "website", label: { fr: "Création de site web", en: "Website creation" } },
  { value: "landing-page", label: { fr: "Landing page publicitaire", en: "Ad landing page" } },
  { value: "ads", label: { fr: "Campagnes Meta Ads / Google Ads", en: "Meta Ads / Google Ads campaigns" } },
  { value: "other", label: { fr: "Autre projet", en: "Other project" } },
];
