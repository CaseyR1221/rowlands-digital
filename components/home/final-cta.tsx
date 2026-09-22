import Link from "next/link";

import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";

export function FinalCta() {
  return (
    <section>
      <Container className="py-16 sm:py-20 lg:py-24">
        <h2 className="max-w-3xl text-balance text-headline font-semibold text-foreground">
          Let&rsquo;s build something that works better for your business.
        </h2>

        <p className="mt-6 max-w-2xl text-lead text-muted-foreground">
          Whether you need a stronger website, a custom digital solution, or an
          experienced developer to help manage what you already have, let&rsquo;s
          talk about what you&rsquo;re trying to accomplish.
        </p>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:gap-4">
          <Button asChild size="xl">
            <Link href="/contact">Start a Conversation</Link>
          </Button>
          <Button asChild size="xl" variant="outline">
            <Link href="/services">Explore Services</Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}
