import type { Technology } from "@/types";

/**
 * Logos officiels servis via Simple Icons CDN (SVG légers, à jour).
 * https://cdn.simpleicons.org/{slug}/{couleur-hex-optionnelle}
 */
export const technologies: Technology[] = [
  // SEO
  { id: "search-console", name: "Google Search Console", logo: "https://cdn.simpleicons.org/googlesearchconsole/0A5C46", category: "seo" },
  { id: "ga4", name: "Google Analytics 4", logo: "https://cdn.simpleicons.org/googleanalytics/0A5C46", category: "seo" },
  { id: "gbp", name: "Google Business Profile", logo: "https://cdn.simpleicons.org/google/0A5C46", category: "seo" },
  { id: "pagespeed", name: "PageSpeed Insights", logo: "", fallbackIcon: "gauge", category: "seo" },
  { id: "gtmetrix", name: "GTmetrix", logo: "", fallbackIcon: "gauge", category: "seo" },
  { id: "screaming-frog", name: "Screaming Frog", logo: "", fallbackIcon: "bug", category: "seo" },
  { id: "google-trends", name: "Google Trends", logo: "", fallbackIcon: "trending-up", category: "seo" },
  { id: "ahrefs", name: "Ahrefs", logo: "", fallbackIcon: "search", category: "seo" },
  // Développement Web
  { id: "html5", name: "HTML5", logo: "https://cdn.simpleicons.org/html5/0A5C46", category: "dev" },
  { id: "css", name: "CSS3", logo: "https://cdn.simpleicons.org/css3/0A5C46", category: "dev" },
  { id: "javascript", name: "JavaScript", logo: "https://cdn.simpleicons.org/javascript/0A5C46", category: "dev" },
  { id: "typescript", name: "TypeScript", logo: "https://cdn.simpleicons.org/typescript/0A5C46", category: "dev" },
  { id: "react", name: "React", logo: "https://cdn.simpleicons.org/react/0A5C46", category: "dev" },
  { id: "nextjs", name: "Next.js", logo: "https://cdn.simpleicons.org/nextdotjs/0A5C46", category: "dev" },
  { id: "tailwind", name: "Tailwind CSS", logo: "https://cdn.simpleicons.org/tailwindcss/0A5C46", category: "dev" },
  { id: "wordpress", name: "WordPress", logo: "https://cdn.simpleicons.org/wordpress/0A5C46", category: "dev" },

  // Outils
  { id: "netlify", name: "Netlify", logo: "https://cdn.simpleicons.org/netlify/0A5C46", category: "tools" },
  { id: "vscode", name: "VS Code", logo: "https://cdn.simpleicons.org/visualstudiocode/0A5C46", category: "tools" },
  { id: "vercel", name: "Vercel", logo: "https://cdn.simpleicons.org/vercel/0A5C46", category: "tools" },

  // Publicité digitale
  { id: "meta-ads", name: "Meta Ads", logo: "https://cdn.simpleicons.org/meta/0A5C46", category: "ads" },
  { id: "google-ads", name: "Google Ads", logo: "https://cdn.simpleicons.org/googleads/0A5C46", category: "ads" },
];

export const techCategories: { id: Technology["category"]; label: { fr: string; en: string } }[] = [
  { id: "seo", label: { fr: "SEO", en: "SEO" } },
  { id: "dev", label: { fr: "Développement Web", en: "Web Development" } },
  { id: "tools", label: { fr: "Outils", en: "Tools" } },
  { id: "ads", label: { fr: "Publicité digitale", en: "Digital Advertising" } },
];
