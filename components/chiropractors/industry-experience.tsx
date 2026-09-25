import Link from "next/link";

import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";

export function IndustryExperience() {
  return (
    <section className="border-b border-border bg-accent-soft">
      <Container className="py-16 sm:py-20 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="flex items-center gap-3 text-sm font-medium text-primary">
              <span aria-hidden="true" className="h-px w-8 bg-accent" />
              Industry Experience
            </p>

            <h2 className="mt-5 text-balance text-headline font-semibold text-foreground">
              Chiropractic isn&rsquo;t a new market to me.
            </h2>

            <div className="mt-8">
              <Button asChild variant="outline" size="lg">
                <Link href="/about">More About Casey</Link>
              </Button>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="max-w-xl space-y-5 text-lead text-muted-foreground">
              <p>
                Before starting Rowlands Digital Works, I worked extensively on
                a large chiropractic web platform supporting clinic websites,
                digital integrations, analytics, booking tools, content systems,
                and multi-location architecture.
              </p>
              <p>
                That experience taught me that chiropractic websites have their
                own set of practical challenges — from how services and
                conditions are presented to how booking, reviews, lead tracking,
                and clinic-specific content fit together.
              </p>
              <p>
                I bring that context into every chiropractic project so
                discovery can start from a more informed place.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
