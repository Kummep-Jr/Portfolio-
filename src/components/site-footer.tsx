import Link from "next/link";
import { EnvelopeSimple, GithubLogo, LinkedinLogo, LockSimple, MediumLogo, XLogo } from "@phosphor-icons/react/dist/ssr";
import { Container } from "@/components/container";
import { siteConfig } from "@/config/meta";
import { socialLinks } from "@/config/hero";
import { GitHubButton } from "@/components/ui/github-button";

const footerIcons = {
  x: XLogo,
  linkedin: LinkedinLogo,
  github: GithubLogo,
  medium: MediumLogo,
  mail: EnvelopeSimple,
} as const;

const footerSocial = socialLinks.flatMap((link) =>
  link.icon in footerIcons
    ? [{ ...link, icon: footerIcons[link.icon as keyof typeof footerIcons] }]
    : [],
);

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60">
      <Container className="flex flex-col items-center gap-6 py-8 sm:flex-row sm:items-center sm:justify-between">
        <div className="text-center font-mono text-sm text-secondary sm:text-left">
          <p>© {new Date().getFullYear()} {siteConfig.name}</p>
          <p className="mt-1">{siteConfig.footerTagline}</p>
          {/* Plain <a>: the admin is a separate app, so load it as a full page */}
          {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
          <a
            href="/keystatic"
            rel="nofollow"
            className="mt-2 inline-flex items-center gap-1 text-xs text-secondary/70 transition-colors hover:text-foreground"
          >
            <LockSimple className="size-3" />
            Admin
          </a>
        </div>

        <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-6">
          <GitHubButton />

          <div className="flex items-center gap-2">
            {footerSocial.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  className="flex size-9 items-center justify-center rounded-lg border border-border text-secondary transition-colors hover:bg-muted hover:text-foreground"
                >
                  <Icon className="size-5" />
                </Link>
              );
            })}
          </div>
        </div>
      </Container>
    </footer>
  );
}

