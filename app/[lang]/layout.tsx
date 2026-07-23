import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "@/app/globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BackToTop } from "@/components/layout/BackToTop";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { locales, defaultLocale, isValidLocale } from "@/lib/i18n/config";
import { siteConfig } from "@/constants/site";
import { profile } from "@/data/profile";
import type { Locale } from "@/types";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500", "600"],
});

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: { lang: string };
}): Promise<Metadata> {
  const locale: Locale = isValidLocale(params.lang) ? params.lang : defaultLocale;
  const seo = siteConfig.seo[locale];

  return {
    metadataBase: new URL(siteConfig.url),
    title: {
      default: seo.title,
      template: `%s | ${profile.name}`,
    },
    description: seo.description,
    keywords: [...seo.keywords],
    authors: [{ name: profile.name }],
    creator: profile.name,
    alternates: {
      canonical: `${siteConfig.url}/${locale}`,
      languages: {
        fr: `${siteConfig.url}/fr`,
        en: `${siteConfig.url}/en`,
      },
    },
    openGraph: {
      type: "website",
      locale: locale === "fr" ? "fr_FR" : "en_US",
      url: `${siteConfig.url}/${locale}`,
      title: seo.title,
      description: seo.description,
      siteName: profile.name,
      images: [{ url: siteConfig.defaultOgImage, width: 1200, height: 630, alt: seo.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
      images: [siteConfig.defaultOgImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true },
    },
  };
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  const locale: Locale = isValidLocale(params.lang) ? params.lang : defaultLocale;
  const dict = await getDictionary(locale);

  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: dict.hero.eyebrow,
    url: siteConfig.url,
    email: profile.email,
    telephone: profile.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bohicon / Cotonou",
      addressCountry: "BJ",
    },
    sameAs: profile.socials.filter((s) => s.icon !== "mail" && s.icon !== "whatsapp").map((s) => s.url),
    knowsAbout: ["SEO technique", "SEO local", "Développement Front-end", "Next.js", "Google Ads", "Meta Ads"],
  };

  const professionalServiceJsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: `${profile.name} — Consultant SEO Freelance`,
    description: siteConfig.seo[locale].description,
    url: `${siteConfig.url}/${locale}`,
    image: siteConfig.defaultOgImage,
    priceRange: "€€",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bohicon",
      addressRegion: "Cotonou",
      addressCountry: "BJ",
    },
    areaServed: [
      { "@type": "Place", name: "Bénin" },
      { "@type": "Place", name: "International (à distance)" },
    ],
    founder: { "@type": "Person", name: profile.name },
    telephone: profile.phone,
    email: profile.email,
  };

  return (
    <html lang={locale} className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans">
        <a
          href="#top"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-primary-600 focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-white"
        >
          {dict.meta.skipToContent}
        </a>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceJsonLd) }}
        />
        <Header locale={locale} dict={dict} />
        <main>{children}</main>
        <Footer locale={locale} dict={dict} />
        <BackToTop label={dict.footer.backToTop} />
      </body>
    </html>
  );
}
