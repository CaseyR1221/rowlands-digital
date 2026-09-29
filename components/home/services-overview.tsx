import Link from "next/link";

import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

/*
 * Bento placement is deliberate rather than uniform: `wide` cells take four of
 * the six columns and split their contents into two inner columns, so the two
 * cell shapes alternate down the grid. `featured` tints the flagship service.
 */
const SERVICES = [
  {
    title: "Website strategy & development",
    body: "Modern websites designed around your customers, business goals, performance, and conversion.",
    wide: true,
    featured: true,
  },
  {
    title: "Website redesign & growth",
    body: "Modernize outdated websites, improve customer journeys, strengthen calls to action, and create a stronger foundation for marketing.",
    wide: false,
    featured: false,
  },
  {
    title: "Custom development & integrations",
    body: "Build custom functionality, applications, APIs, integrations, dashboards, and automation when off-the-shelf tools aren't enough.",
    wide: false,
    featured: false,
  },
  {
    title: "Ongoing technical partnership",
    body: "Website maintenance, optimization, development, analytics support, and technical guidance after launch.",
    wide: true,
    featured: false,
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

        <ul className="mt-12 grid gap-4 sm:mt-14 sm:grid-cols-2 sm:gap-5 lg:grid-cols-6">
          {SERVICES.map((service) => (
            <li
              key={service.title}
              className={cn(
                "lg:col-span-2",
                service.wide && "sm:col-span-2 lg:col-span-4",
              )}
            >
              <Card
                className={cn(
                  "h-full justify-center rounded-2xl border border-border ring-0 [--card-spacing:--spacing(6)] sm:[--card-spacing:--spacing(8)]",
                  service.featured &&
                    "border-accent/30 bg-accent-soft lg:[--card-spacing:--spacing(10)]",
                )}
              >
                <CardContent
                  className={cn(
                    service.wide &&
                      "lg:grid lg:grid-cols-5 lg:items-baseline lg:gap-x-8",
                  )}
                >
                  <h3
                    className={cn(
                      "text-title font-semibold text-balance text-foreground",
                      service.wide && "lg:col-span-2",
                    )}
                  >
                    {service.title}
                  </h3>
                  <p
                    className={cn(
                      "mt-3 leading-relaxed text-muted-foreground",
                      // Wide cells only split into columns at `lg`; until then
                      // the cap keeps the stacked body at a readable measure.
                      service.wide &&
                        "max-w-prose lg:col-span-3 lg:mt-0 lg:text-lead",
                    )}
                  >
                    {service.body}
                  </p>
                </CardContent>
              </Card>
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
