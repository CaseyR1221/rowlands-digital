import Link from "next/link";

import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";

export function WebsiteReviewCta() {
  return (
    <section className="section-dark">
      <Container className="py-16 sm:py-20 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="flex items-center gap-3 text-sm font-medium text-primary">
              <span aria-hidden="true" className="h-px w-8 bg-accent" />
              Free Website Review
            </p>

            <h2 className="mt-5 text-balance text-headline font-semibold text-foreground">
              I&rsquo;ll show you where the biggest opportunities are.
            </h2>
          </div>

          <div className="lg:col-span-7">
            <p className="max-w-xl text-lead text-muted-foreground">
              If you already have a chiropractic website, I&rsquo;ll review it
              and identify a few of the highest-impact opportunities around
              patient journey, mobile usability, scheduling, trust, conversion,
              and technical quality.
            </p>

            <p className="mt-5 max-w-xl leading-relaxed text-muted-foreground">
              This is not an automated score or generic report. I&rsquo;ll look
              at the actual site and send you focused observations based on what
              I find.
            </p>

            <div className="mt-8">
              <Button asChild size="xl">
                <Link href="/contact">Request a Free Website Review</Link>
              </Button>
            </div>

            <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
              No obligation. No sales team. You&rsquo;ll hear directly from
              Casey.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
