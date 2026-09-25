import Link from "next/link";

import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";

export function FinalCta() {
  return (
    <section>
      <Container className="py-16 sm:py-20 lg:py-24">
        <h2 className="max-w-3xl text-balance text-headline font-semibold text-foreground">
          Let&rsquo;s take a look at your current website.
        </h2>

        <p className="mt-6 max-w-2xl text-lead text-muted-foreground">
          If you&rsquo;re not sure whether your practice needs a redesign, a few
          targeted improvements, or something more technical, start with a free
          website review.
        </p>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:gap-4">
          <Button asChild size="xl">
            <Link href="/contact">Request a Free Website Review</Link>
          </Button>
        </div>

        <p className="mt-8 text-sm leading-relaxed text-muted-foreground">
          Central Florida · Available for remote projects nationwide
        </p>
      </Container>
    </section>
  );
}
