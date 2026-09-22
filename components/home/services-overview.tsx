import Link from "next/link";

import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";

const SERVICES = [
  {
    title: "Website strategy & development",
    body: "Modern websites designed around your customers, business goals, performance, and conversion.",
  },
  {
    title: "Website redesign & growth",
    body: "Modernize outdated websites, improve customer journeys, strengthen calls to action, and create a stronger foundation for marketing.",
  },
  {
    title: "Custom development & integrations",
    body: "Build custom functionality, applications, APIs, integrations, dashboards, and automation when off-the-shelf tools aren't enough.",
  },
  {
    title: "Ongoing technical partnership",
    body: "Website maintenance, optimization, development, analytics support, and technical guidance after launch.",
  },
];

export function ServicesOverview() {
  return (
    <section className="border-b border-border">
      <Container className="py-16 sm:py-20 lg:py-24">
        <SectionHeading
          eyebrow="Services"
          title="From your website to the systems behind it."
        />

        <ul className="mt-12 grid border-t border-border sm:mt-14 sm:grid-cols-2">
          {SERVICES.map((service) => (
            <li
              key={service.title}
              className="border-b border-border py-8 sm:py-10 sm:odd:pr-10 sm:even:border-l sm:even:pl-10"
            >
              <h3 className="text-title font-semibold text-foreground">
                {service.title}
              </h3>
              <p className="mt-3 max-w-md leading-relaxed text-muted-foreground">
                {service.body}
              </p>
            </li>
          ))}
        </ul>

        <div className="mt-10">
          <Button asChild variant="outline" size="lg">
            <Link href="/services">View All Services</Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}
