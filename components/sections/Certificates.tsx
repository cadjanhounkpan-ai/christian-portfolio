import { ExternalLink } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { staggerItem } from "@/lib/motion-variants";
import { certifications } from "@/data/certifications";
import { formatDate, t } from "@/lib/utils";
import type { Locale } from "@/types";
import type { Dictionary } from "@/lib/i18n/get-dictionary";

interface CertificatesProps {
  locale: Locale;
  dict: Dictionary;
}

export function Certificates({ locale, dict }: CertificatesProps) {
  return (
    <section id="certifications" className="py-20 sm:py-28">
      <Container>
        <SectionTitle
          eyebrow={dict.certifications.eyebrow}
          title={dict.certifications.title}
          subtitle={dict.certifications.subtitle}
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-2">
          {certifications.map((cert, i) => (
            <AnimateIn key={cert.id} variants={staggerItem} delay={i * 0.05}>
              <Card className="flex h-full flex-col">
                <div className="mb-4 flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-50 p-2.5">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={cert.issuerLogo} alt="" aria-hidden="true" className="h-full w-full object-contain" />
                    </div>
                    <div>
                      <p className="font-display text-base font-semibold leading-tight text-ink-800">
                        {cert.name}
                      </p>
                      <p className="text-sm text-slate-500">{cert.issuer}</p>
                    </div>
                  </div>
                </div>

                {cert.description && (
                  <p className="mb-4 text-sm leading-relaxed text-slate-600">
                    {t(cert.description, locale)}
                  </p>
                )}

                <div className="mb-5 mt-auto flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-xs text-slate-500">
                  <span>{formatDate(cert.date, locale)}</span>
                  <span className="truncate">
                    {dict.certifications.credentialId}: {cert.credentialId}
                  </span>
                </div>

                <a
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-fit items-center gap-1.5 rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-ink-700 transition-colors hover:border-primary-500 hover:text-primary-600"
                >
                  {dict.certifications.verify}
                  <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              </Card>
            </AnimateIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
