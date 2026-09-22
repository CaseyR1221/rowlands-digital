import Link from "next/link";

import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";

export function FounderSection() {
  return (
    <section className="border-b border-border">
      <Container className="py-16 sm:py-20 lg:py-24">
        <div className="grid gap-10 border border-border bg-surface p-6 sm:p-10 lg:grid-cols-12 lg:gap-14 lg:p-14">
          {/*
            Monogram plate. Swap the inner block for a next/image headshot
            once one exists; the surrounding layout does not need to change.
          */}
          <div className="lg:col-span-4">
            <div className="flex aspect-[4/5] max-w-[14rem] items-center justify-center border border-border bg-accent-soft">
              <span
                aria-hidden="true"
                className="text-6xl font-semibold tracking-tight text-primary"
              >
                CR
              </span>
            </div>
            <p className="mt-4 font-medium text-foreground">Casey Rowlands</p>
            <p className="text-sm text-muted-foreground">
              Founder &amp; developer, Central Florida
            </p>
          </div>

          <div className="lg:col-span-8">
            <p className="flex items-center gap-3 text-sm font-medium text-primary">
              <span aria-hidden="true" className="h-px w-8 bg-accent" />
              Founder-Led
            </p>

            <h2 className="mt-5 text-balance text-headline font-semibold text-foreground">
              You&rsquo;ll work directly with the person building your project.
            </h2>

            <div className="mt-6 max-w-2xl space-y-5 text-lead text-muted-foreground">
              <p>
                I&rsquo;m Casey Rowlands, a full-stack web developer based in
                Central Florida. I&rsquo;ve spent my career building and
                operating production websites and digital systems, including
                extensive work supporting the chiropractic industry.
              </p>
              <p>
                I started Rowlands Digital Works to give growing businesses
                access to experienced web development without the layers and
                overhead of a traditional agency. That means direct
                communication, thoughtful technical decisions, and one person
                accountable for understanding the problem and carrying the
                solution through to launch.
              </p>
            </div>

            <div className="mt-8">
              <Button asChild variant="outline" size="lg">
                <Link href="/about">More About Casey</Link>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
