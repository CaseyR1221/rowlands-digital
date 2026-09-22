import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";

const STEPS = [
  {
    number: "01",
    title: "Understand",
    body: "Learn how the business works, what isn't working today, and what success should look like.",
  },
  {
    number: "02",
    title: "Plan",
    body: "Define the customer journey, project scope, architecture, design direction, and technical approach.",
  },
  {
    number: "03",
    title: "Build",
    body: "Design, develop, integrate, test, and refine the solution with clear communication throughout the project.",
  },
  {
    number: "04",
    title: "Launch & improve",
    body: "Deploy the project, validate analytics and functionality, and continue improving it when ongoing support makes sense.",
  },
];

export function Process() {
  return (
    <section className="border-b border-border">
      <Container className="py-16 sm:py-20 lg:py-24">
        <SectionHeading title="A straightforward process from problem to launch." />

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
