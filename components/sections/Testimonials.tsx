import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { StarRating } from "@/components/ui/StarRating";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { staggerItem } from "@/lib/motion-variants";
import { testimonials } from "@/data/testimonials";
import { profile } from "@/data/profile";
import { t } from "@/lib/utils";
import { ExternalLink, Quote } from "lucide-react";
import type { Locale } from "@/types";
import type { Dictionary } from "@/lib/i18n/get-dictionary";

function Avatar({ name, photo }: { name: string; photo?: string }) {
  const initials = name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  if (photo) {
    return (
      <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full">
        <Image src={photo} alt="" fill sizes="40px" className="object-cover" />
      </div>
    );
  }

  return (
    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-100 font-mono text-xs font-semibold text-primary-700">
      {initials}
    </div>
  );
}

interface TestimonialsProps {
  locale: Locale;
  dict: Dictionary;
}

export function Testimonials({ locale, dict }: TestimonialsProps) {
  return (
    <section id="temoignages" className="bg-surface-subtle py-20 sm:py-28">
      <Container>
        <SectionTitle
          eyebrow={dict.testimonials.eyebrow}
          title={dict.testimonials.title}
          subtitle={dict.testimonials.subtitle}
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, i) => (
            <AnimateIn key={testimonial.id} variants={staggerItem} delay={i * 0.05}>
              <Card className="flex h-full flex-col bg-white">
                <div className="mb-4 flex items-start justify-between gap-2">
                  <Quote className="h-6 w-6 text-primary-200" aria-hidden="true" />
                  {testimonial.isDemo && (
                    <Badge tone="accent" className="normal-case">
                      {dict.testimonials.demoBadge}
                    </Badge>
                  )}
                </div>
                <p className="mb-6 flex-1 text-sm leading-relaxed text-slate-600">
                  {t(testimonial.comment, locale)}
                </p>
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <Avatar name={testimonial.name} photo={testimonial.photo} />
                    <div>
                      <p className="text-sm font-semibold text-ink-800">{testimonial.name}</p>
                      {(testimonial.role || testimonial.company) && (
                        <p className="text-xs text-slate-500">
                          {testimonial.role ? t(testimonial.role, locale) : null}
                          {testimonial.role && testimonial.company ? " · " : null}
                          {testimonial.company}
                        </p>
                      )}
                    </div>
                  </div>
                  <StarRating rating={testimonial.rating} />
                </div>
              </Card>
            </AnimateIn>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Button
            href={profile.googleBusinessProfileUrl}
            target="_blank"
            rel="noopener noreferrer"
            variant="secondary"
            icon={<ExternalLink className="h-4 w-4" aria-hidden="true" />}
          >
            {dict.testimonials.viewAllGoogle}
          </Button>
        </div>
      </Container>
    </section>
  );
}
