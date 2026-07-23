"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useId, useState } from "react";
import { cn } from "@/lib/utils";

interface AccordionItemProps {
  question: string;
  answer: string;
  defaultOpen?: boolean;
}

export function AccordionItem({ question, answer, defaultOpen = false }: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const id = useId();

  return (
    <div className="border-b border-slate-200 py-5">
      <button
        type="button"
        onClick={() => setIsOpen((v) => !v)}
        aria-expanded={isOpen}
        aria-controls={`${id}-panel`}
        className="flex w-full items-center justify-between gap-4 text-left focus-visible:outline-none focus-visible:shadow-focus rounded-md"
      >
        <span className="font-display text-base font-medium text-ink-800 sm:text-lg">
          {question}
        </span>
        <ChevronDown
          aria-hidden="true"
          className={cn(
            "h-5 w-5 shrink-0 text-primary-600 transition-transform duration-300 ease-out-soft",
            isOpen && "rotate-180"
          )}
        />
      </button>
      <motion.div
        id={`${id}-panel`}
        role="region"
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="overflow-hidden"
      >
        <p className="pt-3 text-sm leading-relaxed text-slate-600 sm:text-base">{answer}</p>
      </motion.div>
    </div>
  );
}
