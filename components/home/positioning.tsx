import { Container } from "@/components/container";

const FOCUS_AREAS = [
  {
    title: "Attract & convert",
    body: "Create clearer customer journeys that make it easier for visitors to understand your business and take the next step.",
  },
  {
    title: "Connect & automate",
    body: "Connect websites, forms, CRMs, scheduling platforms, analytics, and other systems so information moves where it needs to go.",
  },
  {
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

        <ul className="mt-14 grid divide-y divide-border border-y border-border sm:mt-16 lg:grid-cols-3 lg:divide-x lg:divide-y-0">
          {FOCUS_AREAS.map((area) => (
            <li
              key={area.title}
              className="py-8 lg:px-8 lg:py-10 lg:first:pl-0 lg:last:pr-0"
            >
              <h3 className="text-title font-semibold text-foreground">
                {area.title}
              </h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                {area.body}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
