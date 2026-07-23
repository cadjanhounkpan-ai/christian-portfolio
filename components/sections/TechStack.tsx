"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { staggerContainer, staggerItem } from "@/lib/motion-variants";
import { technologies, techCategories } from "@/data/technologies";
import type { Locale } from "@/types";
import type { Dictionary } from "@/lib/i18n/get-dictionary";

interface TechStackProps {
  locale: Locale;
  dict: Dictionary;
}

export function TechStack({ locale, dict }: TechStackProps) {
  return (
    <section className="bg-surface-subtle py-20 sm:py-28">
      <Container>
        <SectionTitle eyebrow={dict.tech.eyebrow} title={dict.tech.title} subtitle={dict.tech.subtitle} />

        <div className="mt-14 space-y-12">
          {techCategories.map((category) => {
            const items = technologies.filter((tech) => tech.category === category.id);
            if (items.length === 0) return null;

            return (
              <div key={category.id}>
                <h3 className="mb-5 text-center font-mono text-xs font-medium uppercase tracking-[0.15em] text-slate-500">
                  {category.label[locale]}
                </h3>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-60px" }}
                  variants={staggerContainer}
                  className="flex flex-wrap justify-center gap-3"
                >
                  {items.map((tech) => (
                    <motion.div
                      key={tech.id}
                      variants={staggerItem}
                      className="group flex items-center gap-2.5 rounded-full border border-slate-200 bg-white px-4 py-2.5 transition-all duration-200 hover:-translate-y-0.5 hover:border-primary-300 hover:shadow-card"
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={tech.logo} alt="" aria-hidden="true" width={18} height={18} loading="lazy" />
                      <span className="text-sm font-medium text-ink-700">{tech.name}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
