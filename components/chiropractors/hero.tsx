import Link from "next/link";

import { Container } from "@/components/container";
import { PatientJourneyPanel } from "@/components/chiropractors/patient-journey-panel";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="border-b border-border">
      <Container className="py-14 sm:py-20 lg:py-24">
        <p className="flex items-center gap-3 text-sm font-medium text-primary">
          <span aria-hidden="true" className="h-px w-8 bg-accent" />
          Web Development for Chiropractic Practices
        </p>

        <h1 className="mt-6 max-w-4xl text-balance text-display font-semibold text-foreground">
          A better website should make it easier for the right patients to
          choose your practice.
        </h1>

        <div className="mt-12 grid gap-12 lg:mt-14 lg:grid-cols-12 lg:items-start lg:gap-16">
          <div className="lg:col-span-7">
            <p className="max-w-xl text-lead text-muted-foreground">
              Rowlands Digital Works helps chiropractic practices improve the
              way prospective patients discover, understand, and interact with
              their business — from the first website visit through scheduling
              and follow-up.
            </p>

            <p className="mt-5 max-w-xl text-lead leading-relaxed text-muted-foreground">
              With firsthand experience working across chiropractic websites,
              booking systems, analytics, clinic technology, and multi-location
              platforms, Casey brings industry context to both the strategy and
              the technical implementation.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:gap-4">
              <Button asChild size="xl">
                <Link href="/contact">Request a Free Website Review</Link>
              </Button>
              <Button asChild size="xl" variant="outline">
                <Link href="/services">Explore Services</Link>
              </Button>
            </div>

            <p className="mt-8 border-t border-border pt-6 text-sm leading-relaxed text-muted-foreground">
              Based in Central Florida · Working with chiropractic practices
              locally and remotely
            </p>
          </div>

          <div className="flex justify-center lg:col-span-5 lg:justify-end">
            <PatientJourneyPanel />
          </div>
        </div>
      </Container>
    </section>
  );
}
