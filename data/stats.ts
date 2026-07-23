import type { Stat } from "@/types";
export const stats: Stat[] = [
  {
    id: "pagespeed-seo",
    value: 100,
    suffix: "/100",
    label: { fr: "Score SEO PageSpeed", en: "PageSpeed SEO score" },
  },
  {
    id: "pagespeed-perf",
    value: 96,
    suffix: "/100",
    label: { fr: "Performance PageSpeed", en: "PageSpeed performance" },
  },
  {
    id: "google-rating",
    value: 4.9,
    suffix: "★",
    label: { fr: "Note Google vérifiée", en: "Verified Google rating" },
  },
  {
    id: "clients",
    value: 5, 
    suffix: "+",
    label: { fr: "Clients accompagnés", en: "Clients served" },
  },
];
