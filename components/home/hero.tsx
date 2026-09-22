import Link from "next/link";

import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import { SystemDiagram } from "@/components/home/system-diagram";

export function Hero() {
  return (
    <section className="border-b border-border">
      <Container className="py-14 sm:py-20 lg:py-24">
        <p className="flex items-center gap-3 text-sm font-medium text-primary">
          <span aria-hidden="true" className="h-px w-8 bg-accent" />
          Web Development &amp; Digital Solutions
        </p>

        <h1 className="mt-6 max-w-4xl text-balance text-display font-semibold text-foreground">
          Better websites. Smarter digital systems. A technical partner you can
          actually reach.
        </h1>

        <div className="mt-12 grid gap-12 lg:mt-14 lg:grid-cols-12 lg:items-center lg:gap-16">
          <div className="lg:col-span-6">
            <p className="max-w-xl text-lead text-muted-foreground">
              Rowlands Digital Works helps growing service businesses improve
              their websites, connect their technology, and build digital
              solutions that support real business growth.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:gap-4">
              <Button asChild size="xl">
                <Link href="/contact">Request a Free Website Review</Link>
              </Button>
              <Button asChild size="xl" variant="outline">
                <Link href="/services">Explore Services</Link>
              </Button>
            </div>
          </div>

          <div className="flex justify-center lg:col-span-6 lg:justify-end">
            <SystemDiagram />
          </div>
        </div>

        <p className="mt-14 max-w-2xl border-t border-border pt-7 text-sm leading-relaxed text-muted-foreground sm:text-base">
          Strategy, design, development, and ongoing support — directly from the
          developer responsible for your project.
        </p>
      </Container>
    </section>
  );
}
