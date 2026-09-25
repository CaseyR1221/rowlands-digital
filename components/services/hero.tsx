import Link from "next/link";

import { Container } from "@/components/container";
import { SERVICE_AREAS } from "@/components/services/service-areas";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";

export function Hero() {
  return (
    <section className="border-b border-border">
      <Container className="py-14 sm:py-20 lg:py-24">
        <p className="flex items-center gap-3 text-sm font-medium text-primary">
          <span aria-hidden="true" className="h-px w-8 bg-accent" />
          Services
        </p>

        <h1 className="mt-6 max-w-4xl text-balance text-display font-semibold text-foreground">
          Websites, custom development, and digital systems built around how
          your business actually works.
        </h1>

        <div className="mt-12 grid gap-12 lg:mt-14 lg:grid-cols-12 lg:items-start lg:gap-16">
          <div className="lg:col-span-7">
            <p className="max-w-xl text-lead text-muted-foreground">
              Rowlands Digital Works helps growing service businesses improve
              their websites, connect disconnected tools, and build custom
              digital solutions when off-the-shelf platforms are no longer
              enough.
            </p>

            <p className="mt-5 max-w-xl text-lead leading-relaxed text-muted-foreground">
              Whether the problem is an outdated website, a manual process, a
              missing integration, or simply not having anyone technical
              responsible for what happens after launch, the work starts with
              understanding the problem first.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:gap-4">
              <Button asChild size="xl">
                <Link href="/contact">Start a Conversation</Link>
              </Button>
              <Button asChild size="xl" variant="outline">
                <Link href="/contact">Request a Free Website Review</Link>
              </Button>
            </div>

            <p className="mt-8 border-t border-border pt-6 text-sm leading-relaxed text-muted-foreground">
              {siteConfig.locationLine}
            </p>
          </div>

          {/*
            Doubles as the page index: this is a long page, and the four
            anchors let someone jump straight to the service that matches the
            problem they came in with.
          */}
          <nav aria-label="Service areas" className="lg:col-span-5">
            <div className="border border-border bg-surface p-6 sm:p-8">
              <h2 className="text-sm font-medium text-foreground">
                Four ways a project usually starts
              </h2>
              <ul className="mt-5 border-t border-border">
                {SERVICE_AREAS.map((area) => (
                  <li
                    key={area.id}
                    className="border-b border-border last:border-b-0"
                  >
                    <Link
                      href={`#${area.id}`}
                      className="flex items-baseline gap-4 py-4 text-foreground transition-colors hover:text-primary"
                    >
                      <span className="w-6 shrink-0 text-sm font-semibold text-primary">
                        {area.number}
                      </span>
                      <span className="font-medium">{area.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>
      </Container>
    </section>
  );
}
