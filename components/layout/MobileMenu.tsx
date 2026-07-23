"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useEffect } from "react";
import type { NavItem } from "@/data/nav";
import type { Locale } from "@/types";
import { Button } from "@/components/ui/Button";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  items: NavItem[];
  locale: Locale;
  activeId: string;
  ctaLabel: string;
  closeLabel: string;
}

export function MobileMenu({ isOpen, onClose, items, locale, activeId, ctaLabel, closeLabel }: MobileMenuProps) {
  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 z-40 bg-ink-900/50 backdrop-blur-sm md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            aria-hidden="true"
          />
          <motion.nav
            aria-label="Menu mobile"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-y-0 right-0 z-50 flex w-[80%] max-w-sm flex-col bg-white p-6 shadow-card-hover md:hidden"
          >
            <div className="mb-8 flex items-center justify-end">
              <button
                type="button"
                onClick={onClose}
                aria-label={closeLabel}
                className="flex h-10 w-10 items-center justify-center rounded-full text-ink-700 hover:bg-slate-100 focus-visible:outline-none focus-visible:shadow-focus"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
            <ul className="flex flex-col gap-1">
              {items.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    onClick={onClose}
                    className={`block rounded-xl px-3 py-3 text-base font-medium transition-colors ${
                      activeId === item.id ? "bg-primary-50 text-primary-700" : "text-ink-700 hover:bg-slate-50"
                    }`}
                  >
                    {item.label[locale]}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-auto pt-6">
              <Button href="#contact" onClick={onClose} className="w-full">
                {ctaLabel}
              </Button>
            </div>
          </motion.nav>
        </>
      )}
    </AnimatePresence>
  );
}
