import Link from "next/link";

import { Container } from "@/components/container";
import { ImageWithFallback } from "@/components/image-with-fallback";
import { Button } from "@/components/ui/button";
import { contactHref } from "@/lib/contact-topic";
import { siteConfig } from "@/lib/site";

export function Hero() {
  return (
    <section className="border-b border-border">
      <Container className="py-14 sm:py-20 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
          <div className="lg:col-span-6">
            <p className="flex items-center gap-3 text-sm font-medium text-primary">
              <span aria-hidden="true" className="h-px w-8 bg-accent" />
              Services
            </p>

            <h1 className="mt-6 max-w-4xl text-balance text-display font-semibold text-foreground lg:text-headline">
              Custom digital solutions built around
              how your business actually works.
            </h1>

            <p className="mt-6 max-w-xl text-lead text-muted-foreground">
              Rowlands Digital Works helps growing service businesses improve
              their websites, connect disconnected tools, and build custom
              digital solutions when off-the-shelf platforms are no longer
              enough. Work with me on a single project or as an ongoing
              technical partner.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:gap-4">
              <Button asChild size="xl">
                <Link href={contactHref("free-website-review")}>
                  Request a Free Website Review
                </Link>
              </Button>
            </div>

            <p className="mt-8 border-t border-border pt-6 text-sm leading-relaxed text-muted-foreground">
              {siteConfig.locationLine}
            </p>
          </div>

          <div className="lg:col-span-6">
            {/*
              4:3 at every size matches the artwork, so object-cover never
              crops the floating booking, analytics, and integration cards.
              Above the fold on desktop, so it loads eagerly at high priority.
            */}
            <ImageWithFallback
              src="/services-hero.jpg"
              alt="A chiropractic website shown on a laptop and phone, surrounded by connected booking, analytics, inquiry, and integration panels"
              sizes="(min-width: 1024px) 420px, 100vw"
              loading="eager"
              fetchPriority="high"
              concept="A connected digital business: website, responsive experience, analytics, booking, CRM, and related systems"
              className="aspect-4/3"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
