import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { AccordionItem } from "@/components/ui/AccordionItem";
import { faqItems } from "@/data/faq";
import { t } from "@/lib/utils";
import type { Locale } from "@/types";
import type { Dictionary } from "@/lib/i18n/get-dictionary";

interface FAQProps {
  locale: Locale;
  dict: Dictionary;
}

export function FAQ({ locale, dict }: FAQProps) {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: t(item.question, locale),
      acceptedAnswer: {
        "@type": "Answer",
        text: t(item.answer, locale),
      },
    })),
  };

  return (
    <section id="faq" className="bg-surface-subtle py-20 sm:py-28">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Container className="max-w-3xl">
        <SectionTitle eyebrow={dict.faq.eyebrow} title={dict.faq.title} subtitle={dict.faq.subtitle} />

        <div className="mt-12">
          {faqItems.map((item, i) => (
            <AccordionItem
              key={item.id}
              question={t(item.question, locale)}
              answer={t(item.answer, locale)}
              defaultOpen={i === 0}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
