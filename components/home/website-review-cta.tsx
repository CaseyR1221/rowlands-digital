import Link from "next/link";

import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";

export function WebsiteReviewCta() {
  return (
    <section className="section-dark">
      <Container className="py-16 sm:py-20 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <h2 className="text-balance text-headline font-semibold text-foreground lg:col-span-5">
            Not sure what your website actually needs?
          </h2>

          <div className="lg:col-span-7">
            <p className="max-w-xl text-lead text-muted-foreground">
              Start with a website review. I&rsquo;ll take a look at your current
              site and identify a few of the highest-impact opportunities around
              usability, conversion, mobile experience, and technical quality.
            </p>

            <div className="mt-8">
              <Button asChild size="xl">
                <Link href="/contact">Request a Free Website Review</Link>
              </Button>
            </div>

            <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
              No generic automated score. No obligation. Just a focused review of
              your actual website.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
