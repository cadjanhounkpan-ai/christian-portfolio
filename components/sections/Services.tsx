"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { staggerContainer, staggerItem } from "@/lib/motion-variants";
import { getActiveServices } from "@/data/services";
import { getIcon } from "@/lib/icon-map";
import { t } from "@/lib/utils";
import type { Locale } from "@/types";
import type { Dictionary } from "@/lib/i18n/get-dictionary";

interface ServicesProps {
  locale: Locale;
  dict: Dictionary;
}

export function Services({ locale, dict }: ServicesProps) {
  const activeServices = getActiveServices();

  return (
    <section id="services" className="bg-surface-subtle py-20 sm:py-28">
      <Container>
        <SectionTitle
          eyebrow={dict.services.eyebrow}
          title={dict.services.title}
          subtitle={dict.services.subtitle}
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {activeServices.map((service) => {
            const Icon = getIcon(service.icon);
            return (
              <motion.div key={service.id} variants={staggerItem}>
                <Card className="group flex h-full flex-col bg-white">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary-50 text-primary-600">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="mb-2 font-display text-base font-semibold text-ink-800">
                    {t(service.name, locale)}
                  </h3>
                  <p className="mb-5 flex-1 text-sm leading-relaxed text-slate-600">
                    {t(service.description, locale)}
                  </p>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1 text-sm font-medium text-primary-600 transition-transform duration-200 group-hover:gap-2"
                  >
                    {dict.services.ctaCard}
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
