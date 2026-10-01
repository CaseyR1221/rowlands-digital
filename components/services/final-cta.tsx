import Link from "next/link";

import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import { contactHref } from "@/lib/contact-topic";

export function FinalCta() {
  return (
    <section className="section-dark">
      <Container className="py-16 sm:py-20 lg:py-24">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-16">
          <h2 className="text-balance text-headline font-semibold text-foreground lg:col-span-5">
            Not sure what you need yet?
          </h2>

          <div className="lg:col-span-7">
            <p className="max-w-xl text-lead text-muted-foreground">
              You don&rsquo;t need to know whether the answer is a redesign, an
              integration, a custom build, or something smaller. If you already
              have a website, a free review is the easiest place to start. If
              not, tell me what you&rsquo;re trying to improve.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
              <Button asChild size="xl">
                <Link href={contactHref("free-website-review")}>
                  Request a Free Website Review
                </Link>
              </Button>
              {/*
                The outline variant's hover fill is the light accent-soft
                token, which the dark band doesn't remap; keep the hover on
                the band's own surface so the label stays legible.
              */}
              <Button
                asChild
                size="xl"
                variant="outline"
                className="hover:bg-muted"
              >
                <Link href="/contact">Start a Conversation</Link>
              </Button>
            </div>

            <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
              No automated score. No obligation. Just a focused review of your
              actual website.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
