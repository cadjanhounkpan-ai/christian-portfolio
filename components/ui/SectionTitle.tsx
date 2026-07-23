"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/motion-variants";
import { cn } from "@/lib/utils";

interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
  as?: "h1" | "h2";
}

export function SectionTitle({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className,
  as = "h2",
}: SectionTitleProps) {
  const Heading = as;
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={fadeInUp}
      className={cn(
        "mx-auto max-w-2xl",
        align === "center" ? "text-center" : "text-left",
        className
      )}
    >
      {eyebrow && (
        <span className="mb-3 inline-block font-mono text-xs font-medium uppercase tracking-[0.15em] text-primary-600">
          {eyebrow}
        </span>
      )}
      <Heading className="text-display-md font-display font-semibold text-ink-800">
        {title}
      </Heading>
      {subtitle && (
        <p className="mt-4 text-body-lg text-slate-600">{subtitle}</p>
      )}
    </motion.div>
  );
}
