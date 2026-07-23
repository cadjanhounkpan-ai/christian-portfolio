import type { Locale } from "@/types";

export const locales: Locale[] = ["fr", "en"];
export const defaultLocale: Locale = "fr";

export function isValidLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}
