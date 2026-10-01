import Link from "next/link";
import { ArrowDown } from "lucide-react";

import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { SERVICE_AREAS } from "@/components/services/service-areas";

export function ServiceOverview() {
  return (
    <section className="border-b border-border">
      <Container className="py-16 sm:py-20 lg:py-24">
        <SectionHeading
          eyebrow="What I Help With"
          title="Start with the problem, then build the right solution."
          lead="Not every business needs a full rebuild, and not every technical problem is a website problem. The work starts by finding what is creating friction."
        />

        <ul className="mt-12 grid gap-4 sm:mt-14 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
          {SERVICE_AREAS.map((area) => (
            // The title link is stretched over the whole card, so the card is
            // one tap target without nesting block content inside an anchor.
            <li
              key={area.id}
              className="group relative flex flex-col rounded-2xl border border-border bg-surface p-6 transition-colors focus-within:border-accent hover:border-accent sm:p-7"
            >
              <span className="text-sm font-semibold text-primary">
                {area.number}
              </span>
              <h3 className="mt-3 text-lg font-semibold text-balance text-foreground">
                <Link
                  href={`#${area.id}`}
                  className="after:absolute after:inset-0 after:rounded-2xl"
                >
                  {area.title}
                </Link>
              </h3>
              <p className="mt-3 flex-1 leading-relaxed text-muted-foreground">
                {area.summary}
              </p>
              <span
                aria-hidden="true"
                className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary"
              >
                See details
                <ArrowDown className="size-4 transition-transform group-hover:translate-y-0.5" />
              </span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
