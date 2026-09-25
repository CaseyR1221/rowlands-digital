import Link from "next/link";

import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";

export function ChiropracticCallout() {
  return (
    <section className="border-b border-border bg-accent-soft">
      <Container className="py-14 sm:py-16 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-center lg:gap-16">
          <div className="lg:col-span-6">
            <p className="flex items-center gap-3 text-sm font-medium text-primary">
              <span aria-hidden="true" className="h-px w-8 bg-accent" />
              Chiropractic Practices
            </p>

            <h2 className="mt-5 text-balance text-headline font-semibold text-foreground">
              Looking for chiropractic-specific web development?
            </h2>
          </div>

          <div className="lg:col-span-6">
            <p className="max-w-xl text-lead text-muted-foreground">
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
        </div>
      </Container>
    </section>
  );
}
