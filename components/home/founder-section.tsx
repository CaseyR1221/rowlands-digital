import Link from "next/link";

import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";

export function FounderSection() {
  return (
    <section className="border-b border-border">
      <Container className="py-14 sm:py-16 lg:py-20">
        <p className="flex items-center gap-3 text-sm font-medium text-primary">
          <span aria-hidden="true" className="h-px w-8 bg-accent" />
          Founder
        </p>

        <h2 className="mt-4 max-w-xl text-balance text-headline font-semibold text-foreground">
          The developer behind your project
        </h2>

        <figure className="mt-8 grid border border-border bg-surface sm:mt-10 md:grid-cols-12">
          {/*
            Portrait placeholder. Swap this block for a fill next/image once a
            headshot exists; the grid cell already sets the shape and height.
          */}
          <div className="flex aspect-4/3 items-center justify-center bg-accent-soft sm:aspect-16/9 md:col-span-5 md:aspect-auto md:min-h-full">
            <span
              aria-hidden="true"
              className="text-6xl font-semibold tracking-tight text-primary/40"
            >
              CR
            </span>
          </div>

          <div className="flex flex-col border-t border-border md:col-span-7 md:border-t-0 md:border-l">
            <blockquote className="flex-1 p-7 sm:p-9 lg:p-10">
              <p className="max-w-2xl text-title leading-snug text-muted-foreground">
                <span className="text-foreground">
                  &ldquo;I started Rowlands Digital Works on one belief: a
                  website should do real work for the business behind it.
                </span>{" "}
                That means direct communication, thoughtful technical decisions,
                and one person accountable from the first conversation through
                launch.&rdquo;
              </p>
            </blockquote>

            <figcaption className="flex flex-wrap items-center justify-between gap-4 border-t border-border px-7 py-5 sm:px-9 lg:px-10">
              <div>
                <p className="font-medium text-foreground">Casey Rowlands</p>
                <p className="text-sm text-muted-foreground">
                  Founder &amp; developer, Central Florida
                </p>
              </div>

              <Button asChild variant="outline">
                <Link href="/about">More About Casey</Link>
              </Button>
            </figcaption>
          </div>
        </figure>
      </Container>
    </section>
  );
}
