import { Linkedin, Github, Mail, MessageCircle, Facebook, Instagram } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { navItems } from "@/data/nav";
import { profile } from "@/data/profile";
import type { Locale } from "@/types";
import type { Dictionary } from "@/lib/i18n/get-dictionary";
import type { LucideIcon } from "lucide-react";

const socialIcons: Record<string, LucideIcon> = {
  linkedin: Linkedin,
  github: Github,
  mail: Mail,
  whatsapp: MessageCircle,
  facebook: Facebook,
  instagram: Instagram,
};

interface FooterProps {
  locale: Locale;
  dict: Dictionary;
}

export function Footer({ locale, dict }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-surface-subtle">
      <Container className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-display text-lg font-semibold text-ink-800">{profile.name}</p>
          <p className="mt-3 max-w-xs text-sm text-slate-600">{dict.footer.tagline}</p>
        </div>

        <div>
          <p className="mb-4 text-sm font-semibold text-ink-800">{dict.footer.quickLinks}</p>
          <ul className="space-y-2.5">
            {navItems.map((item) => (
              <li key={item.id}>
                <a href={item.href} className="text-sm text-slate-600 transition-colors hover:text-primary-600">
                  {item.label[locale]}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-4 text-sm font-semibold text-ink-800">{dict.footer.contact}</p>
          <ul className="space-y-2.5 text-sm text-slate-600">
            <li>
              <a href={`mailto:${profile.email}`} className="transition-colors hover:text-primary-600">
                {profile.email}
              </a>
            </li>
            <li>
              <a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="transition-colors hover:text-primary-600">
                {profile.phone}
              </a>
            </li>
            <li>{profile.location}</li>
          </ul>
        </div>

        <div>
          <p className="mb-4 text-sm font-semibold text-ink-800">{dict.footer.followMe}</p>
          <div className="flex flex-wrap gap-2">
            {profile.socials.map((social) => {
              const Icon = socialIcons[social.icon] ?? Mail;
              return (
                <a
                  key={social.id}
                  href={social.url}
                  target={social.icon === "mail" ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 text-slate-600 transition-colors hover:border-primary-500 hover:text-primary-600"
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </a>
              );
            })}
          </div>
        </div>
      </Container>

      <div className="border-t border-slate-200 py-6">
        <Container className="flex flex-col items-center justify-between gap-2 text-xs text-slate-500 sm:flex-row">
          <p>
            © {year} {profile.name}. {dict.footer.rights}
          </p>
        </Container>
      </div>
    </footer>
  );
}
