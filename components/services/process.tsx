import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";

const STEPS = [
  {
    number: "01",
    title: "Understand",
    body: "Learn about the business, current systems, customers, goals, and what is creating friction.",
  },
  {
    number: "02",
    title: "Recommend",
    body: "Define the right approach, scope, timeline, and technical direction.",
  },
  {
    number: "03",
    title: "Build",
    body: "Design, develop, integrate, test, and refine the solution.",
  },
  {
    number: "04",
    title: "Launch & improve",
    body: "Launch carefully, validate functionality and analytics, and continue supporting the system when appropriate.",
  },
];

export function Process() {
  return (
    <section className="border-b border-border">
      <Container className="py-16 sm:py-20 lg:py-24">
        <SectionHeading title="A straightforward way to work together" />

        <ol className="mt-12 grid divide-y divide-border border-y border-border sm:mt-14 lg:grid-cols-4 lg:divide-x lg:divide-y-0">
          {STEPS.map((step) => (
            <li
              key={step.number}
              className="py-8 lg:px-7 lg:py-10 lg:first:pl-0 lg:last:pr-0"
            >
              <span className="text-sm font-semibold text-primary">
                {step.number}
              </span>
              <h3 className="mt-3 text-title font-semibold text-foreground">
                {step.title}
              </h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                {step.body}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
