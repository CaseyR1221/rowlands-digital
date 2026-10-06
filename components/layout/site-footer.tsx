import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/container";
import { LinkedInIcon } from "@/components/linkedin-icon";
import { mainNav, siteConfig } from "@/lib/site";
import footerLogo from "@/public/logo-dark.png";

export function SiteFooter() {
  return (
    <footer className="section-dark mt-auto border-t border-border bg-accent-soft">
      <Container className="py-14 lg:py-20">
        <div className="grid gap-12 md:grid-cols-[minmax(0,1fr)_auto] md:gap-20">
          <div className="max-w-sm">
            <Image
              src={footerLogo}
              alt="Rowlands Digital Works"
              className="h-10 w-auto"
            />
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {siteConfig.tagline}
            </p>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 sm:gap-20">
            <nav aria-label="Footer">
              <h2 className="text-sm font-medium text-foreground">Site</h2>
              <ul className="mt-4 space-y-3">
                {mainNav.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div>
              <h2 className="text-sm font-medium text-foreground">Contact</h2>
              <ul className="mt-4 space-y-3">
                <li>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {siteConfig.email}
                  </a>
                </li>
                <li className="text-sm leading-relaxed text-muted-foreground">
                  {siteConfig.locationLine}
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-14 flex items-center justify-between gap-4 border-t border-border pt-8">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {siteConfig.name}
          </p>
          <a
            href={siteConfig.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Casey Rowlands on LinkedIn (opens in a new tab)"
            className="inline-flex size-9 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:border-accent hover:text-foreground"
          >
            <LinkedInIcon className="size-4" />
          </a>
        </div>
      </Container>
    </footer>
  );
}
