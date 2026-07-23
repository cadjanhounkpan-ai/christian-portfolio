"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { fadeInUp } from "@/lib/motion-variants";
import type { Dictionary } from "@/lib/i18n/get-dictionary";

interface CTASectionProps {
  dict: Dictionary;
}

export function CTASection({ dict }: CTASectionProps) {
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeInUp}
          className="relative overflow-hidden rounded-2xl bg-primary-700 px-6 py-16 text-center sm:px-16 sm:py-20"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />
          <h2 className="relative text-display-md font-display font-semibold text-white">
            {dict.cta.title}
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-body-lg text-primary-100">
            {dict.cta.subtitle}
          </p>
          <div className="relative mt-8">
            <Button
              href="#contact"
              size="lg"
              className="bg-white text-primary-700 hover:bg-primary-50"
              icon={<ArrowRight className="h-4 w-4" aria-hidden="true" />}
            >
              {dict.cta.button}
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
