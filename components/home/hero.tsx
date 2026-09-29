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

        {/*
          Below `sm`, each line is fluidly sized (via a fitted clamp, not the
          shared --text-display token) to stay on one line at any phone
          width; `sm:` restores the original fixed display size and wrapping.
        */}
        <h1 className="mt-6 max-w-4xl text-[clamp(1.1rem,-0.2rem+6.2vw,1.6rem)] leading-snug font-semibold tracking-tight whitespace-nowrap text-foreground sm:text-display sm:whitespace-normal">
          <span className="block">Better websites.</span>
          <span className="mt-2 block sm:mt-0">Smarter digital systems.</span>
          <span className="mt-2 block sm:mt-0">A partner you can actually reach.</span>
        </h1>

        <div className="mt-12 grid gap-12 lg:mt-14 lg:grid-cols-12 lg:items-center lg:gap-16">
          <div className="lg:col-span-6">
            <p className="max-w-xl text-lead text-muted-foreground">
              Rowlands Digital Works helps growing service businesses improve
              their websites, connect their technology, and build digital
              solutions that support customer acquisition and day-to-day operations.
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
