import Link from "next/link";

import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";

const STANDARDS = [
  {
    title: "Direct communication",
    body: "Work directly with Casey rather than through salespeople or account managers.",
  },
  {
    title: "Clear scope",
    body: "Define what is being built, what is included, and what success should look like before development begins.",
  },
  {
    title: "Business-first decisions",
    body: "Choose tools and architecture based on the actual problem rather than technology trends.",
  },
  {
    title: "Responsive, accessible implementation",
    body: "Build for real users across devices with accessibility fundamentals considered from the beginning.",
  },
  {
    title: "Production-ready delivery",
    body: "Treat performance, maintainability, analytics, deployment, and reliability as part of the project — not an afterthought.",
  },
  {
    title: "Honest recommendations",
    body: "If the existing site only needs targeted improvements rather than a full rebuild, recommend the smaller solution.",
  },
];

export function ProjectStandards() {
  return (
    <section className="border-b border-border">
      <Container className="py-16 sm:py-20 lg:py-24">
        <SectionHeading title="What you can expect on every project" />

        <dl className="mt-12 grid border-t border-border sm:mt-14 sm:grid-cols-2">
          {STANDARDS.map((standard) => (
            <div
              key={standard.title}
              className="border-b border-border py-8 sm:py-10 sm:odd:pr-10 sm:even:border-l sm:even:pl-10"
            >
              <dt className="text-title font-semibold text-foreground">
                {standard.title}
              </dt>
              <dd className="mt-3 max-w-md leading-relaxed text-muted-foreground">
                {standard.body}
              </dd>
            </div>
          ))}
        </dl>

        <p className="mt-10 max-w-2xl leading-relaxed text-muted-foreground">
          Every project is delivered by one developer who stays responsible for
          it from the first conversation through launch.{" "}
          <Link
            href="/about"
            className="font-medium text-primary underline decoration-border underline-offset-4 transition-colors hover:decoration-primary"
          >
            More about Casey
          </Link>
          .
        </p>
      </Container>
    </section>
  );
}
