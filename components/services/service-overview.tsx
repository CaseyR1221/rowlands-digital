import Link from "next/link";

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
          lead="Not every business needs a full rebuild, and not every technical problem is really a website problem. The goal is to identify what is creating friction and choose the smallest solution that meaningfully improves it."
        />

        <ul className="mt-12 grid border-t border-border sm:mt-14 sm:grid-cols-2">
          {SERVICE_AREAS.map((area) => (
            <li
              key={area.id}
              className="border-b border-border py-8 sm:py-10 sm:odd:pr-10 sm:even:border-l sm:even:pl-10"
            >
              <span className="text-sm font-semibold text-primary">
                {area.number}
              </span>
              <h3 className="mt-3 text-title font-semibold text-foreground">
                <Link
                  href={`#${area.id}`}
                  className="transition-colors hover:text-primary"
                >
                  {area.title}
                </Link>
              </h3>
              <p className="mt-3 max-w-md leading-relaxed text-muted-foreground">
                {area.summary}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
