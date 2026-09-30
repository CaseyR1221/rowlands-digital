import { MousePointerClick, Workflow, Wrench, type LucideIcon } from "lucide-react";

import { Container } from "@/components/container";
import { Card, CardContent } from "@/components/ui/card";

const FOCUS_AREAS: {
  icon: LucideIcon;
  title: string;
  body: string;
}[] = [
  {
    icon: MousePointerClick,
    title: "Attract & convert",
    body: "Create clearer customer journeys that make it easier for visitors to understand your business and take the next step.",
  },
  {
    icon: Workflow,
    title: "Connect & automate",
    body: "Connect websites, forms, CRMs, scheduling platforms, analytics, and other systems so information moves where it needs to go.",
  },
  {
    icon: Wrench,
    title: "Improve & support",
    body: "Improve performance, maintainability, analytics, and reliability — with an experienced developer available when something needs attention.",
  },
];

export function Positioning() {
  return (
    <section className="border-b border-border">
      <Container className="py-16 sm:py-20 lg:py-24">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-16">
          <h2 className="text-balance text-headline font-semibold text-foreground lg:col-span-5">
            Your website shouldn&rsquo;t just exist. It should work for your
            business.
          </h2>
          <div className="max-w-xl space-y-5 text-lead text-muted-foreground lg:col-span-7">
            <p>
              Businesses often outgrow their websites long before they replace
              them. The result is an outdated experience, confusing customer
              journeys, disconnected tools, and missed opportunities.
            </p>
            <p>
              Rowlands Digital Works helps businesses turn those problems into
              modern, maintainable digital systems built around how the business
              actually operates.
            </p>
          </div>
        </div>

        <ul className="mt-14 grid gap-5 sm:mt-16 sm:grid-cols-3">
          {FOCUS_AREAS.map(({ icon: Icon, title, body }) => (
            <li key={title}>
              <Card className="h-full rounded-2xl border border-border ring-0 [--card-spacing:--spacing(6)] sm:[--card-spacing:--spacing(8)]">
                <CardContent>
                  <div className="flex size-11 items-center justify-center rounded-lg bg-accent-soft">
                    <Icon aria-hidden="true" className="size-5 text-accent" />
                  </div>
                  <h3 className="mt-5 text-title font-semibold text-foreground">
                    {title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">
                    {body}
                  </p>
                </CardContent>
              </Card>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
