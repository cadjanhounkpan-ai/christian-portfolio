"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { staggerContainer, staggerItem } from "@/lib/motion-variants";
import { problems } from "@/data/problems";
import { getIcon } from "@/lib/icon-map";
import { t } from "@/lib/utils";
import type { Locale } from "@/types";
import type { Dictionary } from "@/lib/i18n/get-dictionary";

interface ProblemsProps {
  locale: Locale;
  dict: Dictionary;
}

export function Problems({ locale, dict }: ProblemsProps) {
  return (
    <section id="problemes" className="py-20 sm:py-28">
      <Container>
        <SectionTitle
          eyebrow={dict.problems.eyebrow}
          title={dict.problems.title}
          subtitle={dict.problems.subtitle}
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {problems.map((problem) => {
            const Icon = getIcon(problem.icon);
            return (
              <motion.div key={problem.id} variants={staggerItem}>
                <Card className="h-full">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary-50 text-primary-600">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="mb-2 font-display text-lg font-semibold text-ink-800">
                    {t(problem.title, locale)}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-600">
                    {t(problem.description, locale)}
                  </p>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
