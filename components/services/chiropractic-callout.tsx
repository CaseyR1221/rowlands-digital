import Link from "next/link";

import { Container } from "@/components/container";
import { ImageWithFallback } from "@/components/image-with-fallback";
import { Button } from "@/components/ui/button";

export function ChiropracticCallout() {
  return (
    <section className="border-b border-border bg-accent-soft">
      <Container className="py-16 sm:py-20 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-16">
          <div className="lg:col-span-6">
            <p className="flex items-center gap-3 text-sm font-medium text-primary">
              <span aria-hidden="true" className="h-px w-8 bg-accent" />
              Chiropractic Practices
            </p>

            <h2 className="mt-5 text-balance text-headline font-semibold text-foreground">
              Looking for chiropractic-specific services?
            </h2>

            <p className="mt-5 max-w-xl text-lead text-muted-foreground">
              Rowlands Digital Works brings firsthand experience working with
              chiropractic websites, booking systems, analytics, integrations,
              and multi-location digital platforms.
            </p>

            <div className="mt-8">
              <Button asChild size="lg">
                <Link href="/chiropractors">
                  Web Development for Chiropractors
                </Link>
              </Button>
            </div>
          </div>

          <div className="lg:col-span-6">
            <ImageWithFallback
              src="/services-chiropractic.jpg"
              alt="A chiropractic practice website shown on a laptop and phone on a desk, beside a sketchbook of page wireframes and a framed spine illustration"
              sizes="(min-width: 1024px) 50vw, 100vw"
              concept="A modern chiropractic practice and the digital patient journey: website, mobile booking, appointments, analytics, or CRM"
              className="aspect-3/2"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
