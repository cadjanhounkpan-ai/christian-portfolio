"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import type { Locale } from "@/types";
import { locales } from "@/lib/i18n/config";

interface LanguageSwitcherProps {
  currentLocale: Locale;
  label: string;
  className?: string;
}

function getLocalizedPath(pathname: string, targetLocale: Locale): string {
  const segments = pathname.split("/");
  segments[1] = targetLocale;
  return segments.join("/") || `/${targetLocale}`;
}

export function LanguageSwitcher({ currentLocale, label, className }: LanguageSwitcherProps) {
  const pathname = usePathname();

  return (
    <div
      role="group"
      aria-label={label}
      className={cn(
        "flex items-center rounded-full border border-slate-200 bg-white p-0.5 text-xs font-mono font-medium",
        className
      )}
    >
      {locales.map((locale) => {
        const isActive = locale === currentLocale;
        return (
          <Link
            key={locale}
            href={getLocalizedPath(pathname, locale)}
            aria-current={isActive ? "true" : undefined}
            className={cn(
              "rounded-full px-2.5 py-1.5 uppercase transition-colors duration-200",
              isActive ? "bg-primary-500 text-white" : "text-slate-500 hover:text-ink-800"
            )}
          >
            {locale}
          </Link>
        );
      })}
    </div>
  );
}
