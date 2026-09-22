import Link from "next/link";

import { Container } from "@/components/container";
import { mainNav, siteConfig } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="section-dark mt-auto">
      <Container className="py-14 lg:py-20">
        <div className="grid gap-12 md:grid-cols-[minmax(0,1fr)_auto] md:gap-20">
          <div className="max-w-sm">
            <p className="text-base font-semibold tracking-tight text-foreground">
              Rowlands
              <span className="font-normal text-muted-foreground"> Digital Works</span>
            </p>
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

        <p className="mt-14 border-t border-border pt-8 text-sm text-muted-foreground">
          © {new Date().getFullYear()} {siteConfig.name}
        </p>
      </Container>
    </footer>
  );
}
