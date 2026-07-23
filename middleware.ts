import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { locales, defaultLocale } from "@/lib/i18n/config";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const pathnameHasLocale = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  );

  if (pathnameHasLocale) return;

  const url = request.nextUrl.clone();
  url.pathname = `/${defaultLocale}${pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: [
    /*
     * Exclut : fichiers statiques, API, assets internes Next.js,
     * sitemap.xml, robots.txt, manifest, favicon.
     */
    "/((?!_next|api|images|icons|sitemap.xml|robots.txt|manifest.webmanifest|favicon.ico).*)",
  ],
};
