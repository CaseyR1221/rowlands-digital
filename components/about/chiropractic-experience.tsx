import Link from "next/link";

import { Container } from "@/components/container";
import { ImageWithFallback } from "@/components/image-with-fallback";
import { Button } from "@/components/ui/button";

/**
 * Same accent band and artwork as the chiropractic callout on the Services
 * page, scaled down: this is a supporting note on the About page, not a
 * second landing page for the niche.
 */
export function ChiropracticExperience() {
  return (
    <section className="border-b border-border bg-accent-soft">
      <Container className="py-14 sm:py-16 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-16">
          <div className="lg:col-span-6">
            <p className="flex items-center gap-3 text-sm font-medium text-primary">
              <span aria-hidden="true" className="h-px w-8 bg-accent" />
              Chiropractic Experience
            </p>

            <h2 className="mt-5 text-balance text-headline font-semibold text-foreground">
              An industry I know especially well.
            </h2>

            <div className="mt-6 max-w-xl space-y-5 leading-relaxed text-muted-foreground">
              <p>
                A significant part of my professional experience has been in
                chiropractic technology. I&rsquo;ve worked with clinic websites,
                multi-location architecture, booking systems, analytics, lead
                tracking, content platforms, integrations, and the systems
                surrounding the patient journey.
              </p>
              <p>
                That means chiropractic practices don&rsquo;t have to start
                every conversation by explaining how their website, scheduling,
                marketing, and clinic systems fit together.
              </p>
            </div>

            <div className="mt-8">
              <Button asChild size="lg">
                <Link href="/chiropractors">
                  Web Development for Chiropractors
                </Link>
              </Button>
            </div>
          </div>

          <div className="hidden md:block lg:col-span-6">
            <ImageWithFallback
              src="/services-chiropractic.jpg"
              alt="A chiropractic practice website shown on a laptop and phone on a desk, beside a sketchbook of page wireframes"
              sizes="(min-width: 1024px) 420px, 448px"
              concept="A modern chiropractic practice and the digital patient journey"
              className="aspect-3/2 max-w-md lg:max-w-none"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
