import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import { contactHref } from "@/lib/contact-topic";
import backgroundImage from "@/public/final-cta-bg.jpg";

/**
 * Same photographic dark band as the homepage's closing call to action, so
 * the two pages a visitor is most likely to compare end the same way.
 */
export function FinalCta() {
  return (
    <section className="section-dark relative overflow-hidden">
      <Image
        src={backgroundImage}
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-dark-section/70" />

      <Container className="relative z-10 py-16 sm:py-20 lg:py-24">
        <p className="flex items-center gap-3 text-sm font-medium text-primary">
          <span aria-hidden="true" className="h-px w-8 bg-accent" />
          Let&rsquo;s Work Together
        </p>

        <h2 className="mt-5 max-w-3xl text-balance text-headline font-semibold text-foreground">
          Have a website or digital problem worth solving?
        </h2>

        <p className="mt-6 max-w-2xl text-lead text-foreground">
          You don&rsquo;t need to know exactly what the technical solution
          should be before reaching out. Tell me what you&rsquo;re trying to
          improve, and I&rsquo;ll help determine the most practical next step.
        </p>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:gap-4">
          <Button asChild size="xl">
            <Link href="/contact">Start a Conversation</Link>
          </Button>
          {/*
            The outline variant's hover fill is the light accent-soft token,
            which the dark band doesn't remap; keep the hover on the band's own
            surface so the label stays legible.
          */}
          <Button asChild size="xl" variant="outline" className="hover:bg-muted">
            <Link href={contactHref("free-website-review")}>
              Request a Free Website Review
            </Link>
          </Button>
        </div>

        <p className="mt-8 text-sm leading-relaxed text-foreground">
          No sales team. No account-manager handoff. You&rsquo;ll hear directly
          from Casey.
        </p>
      </Container>
    </section>
  );
}
