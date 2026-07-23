export const siteConfig = {
  name: "Christian Adjanhounkpan",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://christianseo.netlify.app",
  defaultOgImage: "/images/og-cover.jpg", // À REMPLACER par un visuel 1200x630
  locales: ["fr", "en"] as const,
  defaultLocale: "fr" as const,
  seo: {
    fr: {
      title: "Consultant SEO Freelance & Développeur Front-End | Christian Adjanhounkpan",
      description:
        "Consultant SEO freelance à Bohicon/Cotonou : audit SEO technique, référencement local et sites web rapides. Un expert SEO qui corrige aussi le code. Devis gratuit.",
      keywords: [
        "consultant SEO freelance",
        "consultant SEO",
        "freelance SEO",
        "consultant SEO technique",
        "audit SEO",
        "SEO local",
        "expert SEO",
        "expert SEO Shopify",
        "référencement local",
        "optimisation Core Web Vitals",
        "audit SEO PME",
        "consultant SEO Bohicon",
        "développeur web Bénin",
      ],
    },
    en: {
      title: "Freelance SEO Consultant & Front-End Developer | Christian Adjanhounkpan",
      description:
        "Freelance SEO consultant based in Bohicon/Cotonou: technical SEO audits, local SEO, and fast websites. An SEO expert who fixes the code too. Free first audit.",
      keywords: [
        "freelance SEO consultant",
        "SEO consultant",
        "technical SEO consultant",
        "SEO audit",
        "local SEO",
        "SEO expert",
        "Shopify SEO expert",
        "local search optimization",
        "Core Web Vitals optimization",
        "SEO audit for small business",
        "SEO consultant Benin",
        "web developer Benin",
      ],
    },
  },
} as const;
