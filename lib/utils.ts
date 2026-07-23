import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import type { Locale, LocalizedText } from "@/types";

/** Fusionne intelligemment les classes Tailwind (évite les conflits). */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Récupère le texte localisé pour la langue active. */
export function t(text: LocalizedText, locale: Locale): string {
  return text[locale] ?? text.fr;
}

/** Formate une date ISO en libellé lisible selon la langue. */
export function formatDate(iso: string, locale: Locale): string {
  try {
    return new Intl.DateTimeFormat(locale === "fr" ? "fr-FR" : "en-US", {
      year: "numeric",
      month: "long",
    }).format(new Date(iso));
  } catch {
    return iso;
  }
}
