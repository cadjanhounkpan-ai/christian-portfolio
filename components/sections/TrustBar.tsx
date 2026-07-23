"use client";

import { Container } from "@/components/ui/Container";
import { Counter } from "@/components/ui/Counter";
import { staggerContainer, staggerItem } from "@/lib/motion-variants";
import { motion } from "framer-motion";
import { stats } from "@/data/stats";
import { t } from "@/lib/utils";
import type { Locale } from "@/types";
import type { Dictionary } from "@/lib/i18n/get-dictionary";

interface TrustBarProps {
  locale: Locale;
  dict: Dictionary;
}

export function TrustBar({ locale, dict }: TrustBarProps) {
  return (
    <section aria-label={dict.trustBar.title} className="border-y border-slate-200 bg-surface-subtle py-10">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer}
          className="grid grid-cols-2 gap-8 sm:grid-cols-4"
        >
          {stats.map((stat) => (
            <motion.div key={stat.id} variants={staggerItem} className="text-center">
              <p className="text-display-md font-display font-semibold text-ink-800">
                <Counter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-1 text-sm text-slate-500">{t(stat.label, locale)}</p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
