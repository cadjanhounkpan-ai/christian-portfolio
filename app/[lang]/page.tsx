import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { Problems } from "@/components/sections/Problems";
import { Services } from "@/components/sections/Services";
import { ProjectsSection } from "@/components/sections/projects/ProjectsSection";
import { TechStack } from "@/components/sections/TechStack";
import { Certificates } from "@/components/sections/Certificates";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { CTASection } from "@/components/sections/CTASection";
import { Contact } from "@/components/sections/Contact";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { defaultLocale, isValidLocale } from "@/lib/i18n/config";
import type { Locale } from "@/types";

export default async function HomePage({ params }: { params: { lang: string } }) {
  const locale: Locale = isValidLocale(params.lang) ? params.lang : defaultLocale;
  const dict = await getDictionary(locale);

  return (
    <>
      <Hero locale={locale} dict={dict} />
      <TrustBar locale={locale} dict={dict} />
      <Problems locale={locale} dict={dict} />
      <Services locale={locale} dict={dict} />
      <ProjectsSection locale={locale} dict={dict} />
      <TechStack locale={locale} dict={dict} />
      <Certificates locale={locale} dict={dict} />
      <Testimonials locale={locale} dict={dict} />
      <FAQ locale={locale} dict={dict} />
      <CTASection dict={dict} />
      <Contact locale={locale} dict={dict} />
    </>
  );
}
