import Link from "next/link";

import { Container } from "@/components/container";
import { ImagePlaceholder } from "@/components/image-placeholder";
import { SectionHeading } from "@/components/section-heading";

const EXPECTATIONS = [
  {
    title: "Direct communication",
    body: "You work with Casey, not a salesperson or account manager.",
  },
  {
    title: "Clear scope",
    body: "What is being built and what success looks like, agreed before development starts.",
  },
  {
    title: "Business-first decisions",
    body: "Honest recommendations, including the smaller fix when a rebuild isn’t needed.",
  },
  {
    title: "Production-ready delivery",
    body: "Performance, accessibility, analytics, and reliability built in from the start.",
  },
];

const STEPS = [
  {
    number: "01",
    title: "Understand",
    body: "Learn about the business, customers, current systems, goals, and friction.",
  },
  {
    number: "02",
    title: "Recommend",
    body: "Define the right approach, scope, timeline, and technical direction.",
  },
  {
    number: "03",
    title: "Build",
    body: "Design, develop, integrate, test, and refine.",
  },
  {
    number: "04",
    title: "Launch & improve",
    body: "Launch carefully, validate the experience and analytics, and continue supporting the system where appropriate.",
  },
];

export function WorkTogether() {
  return (
    <section className="border-b border-border">
      <Container className="py-16 sm:py-20 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-16">
          <div className="lg:col-span-7">
            <SectionHeading
              eyebrow="Working Together"
              title="What It’s Like to Work Together"
              lead={
                <>
                  Work directly with the developer responsible for your
                  project, from the first conversation through launch and
                  beyond. No sales handoff, unnecessary layers, or technology
                  chosen simply because it&rsquo;s trendy.
                </>
              }
            />

            <dl className="mt-10 grid gap-x-8 gap-y-6 sm:grid-cols-2">
              {EXPECTATIONS.map((expectation) => (
                <div
                  key={expectation.title}
                  className="border-l-2 border-accent pl-4"
                >
                  <dt className="font-semibold text-foreground">
                    {expectation.title}
                  </dt>
                  <dd className="mt-1 text-[0.9375rem] leading-relaxed text-muted-foreground">
                    {expectation.body}
                  </dd>
                </div>
              ))}
            </dl>

            <p className="mt-8 text-sm text-muted-foreground">
              <Link
                href="/about"
                className="font-medium text-primary underline decoration-border underline-offset-4 transition-colors hover:decoration-primary"
              >
                More about Casey
              </Link>
            </p>
          </div>

          <div className="lg:order-first lg:col-span-5">
            <ImagePlaceholder
              concept="Professional portrait or working image of Casey"
              className="aspect-4/5 max-w-md lg:max-w-none"
            />
          </div>
        </div>

        <ol className="mt-14 grid divide-y divide-border border-y border-border sm:mt-16 lg:grid-cols-4 lg:divide-x lg:divide-y-0">
          {STEPS.map((step) => (
            <li
              key={step.number}
              className="py-6 lg:px-7 lg:py-9 lg:first:pl-0 lg:last:pr-0"
            >
              <span className="text-sm font-semibold text-primary">
                {step.number}
              </span>
              <h3 className="mt-2 text-lg font-semibold text-foreground">
                {step.title}
              </h3>
              <p className="mt-2 text-[0.9375rem] leading-relaxed text-muted-foreground">
                {step.body}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
