import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";

const DIFFERENTIATORS = [
  {
    title: "Work directly with the developer",
    body: "No account-manager handoffs or layers of communication. Clients work directly with the person designing and building the solution.",
  },
  {
    title: "Business before technology",
    body: "Start with the objective, customer journey, and business problem before deciding what technology should be used.",
  },
  {
    title: "More than a website builder",
    body: "Full-stack experience makes it possible to solve problems involving APIs, databases, CMS platforms, analytics, integrations, automation, and custom software.",
  },
  {
    title: "Built for life after launch",
    body: "The work doesn't stop when the site goes live. Performance, maintainability, analytics, reliability, and ongoing improvements are part of building something useful long-term.",
  },
];

export function WhyWorkTogether() {
  return (
    <section className="border-b border-border">
      <Container className="py-16 sm:py-20 lg:py-24">
        <SectionHeading title="A different kind of development partner." />

        <dl className="mt-12 border-t border-border sm:mt-14">
          {DIFFERENTIATORS.map((item) => (
            <div
              key={item.title}
              className="grid gap-3 border-b border-border py-8 lg:grid-cols-12 lg:gap-12 lg:py-9"
            >
              <dt className="text-title font-semibold text-foreground lg:col-span-4">
                {item.title}
              </dt>
              <dd className="max-w-2xl leading-relaxed text-muted-foreground lg:col-span-8">
                {item.body}
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
