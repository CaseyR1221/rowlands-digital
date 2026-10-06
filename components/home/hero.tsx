import Link from "next/link";

import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import { SystemDiagram } from "@/components/home/system-diagram";

export function Hero() {
  return (
    <section className="border-b border-border">
      <Container className="py-14 sm:py-20 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
          <div className="lg:col-span-6">
            <p className="flex items-center gap-3 text-sm font-medium text-primary">
              <span aria-hidden="true" className="h-px w-8 bg-accent" />
              Web Development &amp; Digital Solutions
            </p>

            {/*
              Below `sm`, each line is fluidly sized (via a fitted clamp, not
              the shared --text-display token) to stay on one line at any
              phone width; `sm:` restores the original fixed display size and
              wrapping. Now that the heading lives in a 6-col track instead of
              the full container, `lg:` re-fits the size (font-size only) to
              the ~440-504px column so each phrase still holds one line.
              `max-sm:` scopes the mobile leading/tracking so they don't leak
              into --tw-leading/--tw-tracking at sm+ (text-display's own
              utility reads those custom properties before its own fallback,
              so an always-on leading/tracking class would silently override
              it at every breakpoint).
            */}
            <h1 className="mt-6 max-w-4xl text-[clamp(1.1rem,-0.2rem+6.2vw,1.6rem)] max-sm:leading-snug font-semibold max-sm:tracking-tight whitespace-nowrap text-foreground sm:text-display sm:whitespace-normal lg:text-[clamp(1.75rem,-0.25rem+3.125vw,2rem)]">
              <span className="block">Better websites.</span>
              <span className="mt-2 block sm:mt-0">Smarter digital systems.</span>
              <span className="mt-2 block sm:mt-0">
                A partner you can actually reach.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lead text-muted-foreground">
              Rowlands Digital Works is an independent technical partner for
              growing service businesses, improving websites, connecting
              technology, and building digital solutions that support customer
              acquisition and day-to-day operations.
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

          {/*
            The diagram is inline SVG (vector), so scaling it up costs no
            resolution. It's centered and capped at a modest width pre-`lg`
            (single-column, stacked below the text); at `lg` the cap lifts so
            it fills the right-hand column, itself bounded by the 12-col grid
            and the Container's max width.
          */}
          <div className="flex items-center justify-center lg:col-span-6">
            <SystemDiagram />
          </div>
        </div>
      </Container>
    </section>
  );
}
