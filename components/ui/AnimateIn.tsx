"use client";

import { motion, type Variants } from "framer-motion";
import { fadeInUp } from "@/lib/motion-variants";

interface AnimateInProps {
  children: React.ReactNode;
  variants?: Variants;
  delay?: number;
  className?: string;
}

export function AnimateIn({ children, variants = fadeInUp, delay = 0, className }: AnimateInProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={variants}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
