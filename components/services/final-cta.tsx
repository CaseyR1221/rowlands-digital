import Link from "next/link";

import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import { contactHref } from "@/lib/contact-topic";

export function FinalCta() {
  return (
    <section>
      <Container className="py-16 sm:py-20 lg:py-24">
        <h2 className="max-w-3xl text-balance text-headline font-semibold text-foreground">
          Tell me what you&rsquo;re trying to improve.
        </h2>

        <p className="mt-6 max-w-2xl text-lead text-muted-foreground">
          You do not need to know exactly what the technical solution should be
          before reaching out. Start with the business problem, and we can
          determine whether a website project, integration, custom build, or
          smaller improvement makes the most sense.
        </p>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:gap-4">
          <Button asChild size="xl">
            <Link href="/contact">Start a Conversation</Link>
          </Button>
          <Button asChild size="xl" variant="outline">
            <Link href={contactHref("free-website-review")}>
              Request a Website Review
            </Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}
