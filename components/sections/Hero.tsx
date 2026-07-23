"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, MoveRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { heroSequence } from "@/lib/motion-variants";
import { profile } from "@/data/profile";
import type { Locale } from "@/types";
import type { Dictionary } from "@/lib/i18n/get-dictionary";
import { t } from "@/lib/utils";

interface HeroProps {
  locale: Locale;
  dict: Dictionary;
}

export function Hero({ locale, dict }: HeroProps) {
  const prefersReducedMotion = useReducedMotion();
  return (
    <section id="top" className="relative overflow-hidden pb-20 pt-32 sm:pb-28 sm:pt-40">
      {/* Motif d'arrière-plan très discret : grille + tendance ascendante, évoquant le suivi SEO */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(10,92,70,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(10,92,70,0.06) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)",
        }}
      />

      <Container className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
        <div>
          <motion.span
            initial="hidden"
            animate="visible"
            variants={heroSequence.eyebrow}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary-200 bg-primary-50 px-4 py-1.5 font-mono text-xs font-medium uppercase tracking-wide text-primary-700"
          >
            {dict.hero.eyebrow}
          </motion.span>

          <motion.h1
            initial="hidden"
            animate="visible"
            variants={heroSequence.title}
            className="text-display-xl font-display font-semibold text-ink-800"
          >
            {dict.hero.title}
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="visible"
            variants={heroSequence.subtitle}
            className="mt-6 max-w-xl text-body-lg text-slate-600"
          >
            {dict.hero.subtitle}
          </motion.p>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={heroSequence.actions}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <Button href="#realisations" size="lg" icon={<ArrowRight className="h-4 w-4" aria-hidden="true" />}>
              {dict.hero.ctaPrimary}
            </Button>
            <Button
              href="#contact"
              variant="secondary"
              size="lg"
              icon={<MoveRight className="h-4 w-4" aria-hidden="true" />}
            >
              {dict.hero.ctaSecondary}
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={heroSequence.media}
          className="relative mx-auto w-full max-w-sm lg:max-w-none"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-slate-200 bg-surface-muted shadow-card-hover">
            <Image
              src={profile.photo}
              alt={`${profile.name}, ${t(profile.title, locale)} à Bohicon, Bénin`}
              fill
              priority
              sizes="(min-width: 1024px) 420px, 90vw"
              className="object-cover"
            />
          </div>

          {/* Badges flottants — preuves chiffrées, discrets */}
          <motion.div
            animate={prefersReducedMotion ? undefined : { y: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-4 top-8 rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-card-hover sm:-left-8"
          >
            <p className="font-mono text-2xl font-semibold text-primary-600">100/100</p>
            <p className="text-xs text-slate-500">{dict.hero.badgeSeoScore}</p>
          </motion.div>

          <motion.div
            animate={prefersReducedMotion ? undefined : { y: [0, 8, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute -right-4 bottom-8 rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-card-hover sm:-right-8"
          >
            <p className="font-mono text-2xl font-semibold text-accent-600">96/100</p>
            <p className="text-xs text-slate-500">{dict.hero.badgePerfScore}</p>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
