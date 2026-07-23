"use client";

import { useState } from "react";
import { Menu } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { navItems } from "@/data/nav";
import { profile } from "@/data/profile";
import { useActiveSection } from "@/hooks/useActiveSection";
import { useScrolled } from "@/hooks/useScrolled";
import { cn } from "@/lib/utils";
import type { Locale } from "@/types";
import type { Dictionary } from "@/lib/i18n/get-dictionary";

interface HeaderProps {
  locale: Locale;
  dict: Dictionary;
}

export function Header({ locale, dict }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const scrolled = useScrolled();
  const activeId = useActiveSection(navItems.map((i) => i.id));
  const firstName = profile.name.split(" ")[0];

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-30 transition-all duration-300",
        scrolled ? "bg-white/90 shadow-card backdrop-blur-md" : "bg-transparent"
      )}
    >
      <Container className="flex h-16 items-center justify-between sm:h-20">
        <a
          href="#top"
          className="font-display text-lg font-semibold tracking-tight text-ink-800 focus-visible:outline-none focus-visible:shadow-focus rounded-md"
        >
          {firstName}<span className="text-primary-600">.</span>
        </a>

        <nav aria-label="Navigation principale" className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={cn(
                "rounded-full px-3.5 py-2 text-sm font-medium transition-colors duration-200",
                activeId === item.id
                  ? "bg-primary-50 text-primary-700"
                  : "text-slate-600 hover:text-ink-800"
              )}
            >
              {item.label[locale]}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <LanguageSwitcher
            currentLocale={locale}
            label={dict.languageSwitcher.label}
            className="hidden sm:flex"
          />
          <Button href="#contact" size="md" className="hidden md:inline-flex">
            {dict.header.ctaContact}
          </Button>
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            aria-label="Ouvrir le menu"
            className="flex h-10 w-10 items-center justify-center rounded-full text-ink-700 hover:bg-slate-100 md:hidden"
          >
            <Menu className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </Container>

      <MobileMenu
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
        items={navItems}
        locale={locale}
        activeId={activeId}
        ctaLabel={dict.header.ctaContact}
        closeLabel="Fermer le menu"
      />
    </header>
  );
}
