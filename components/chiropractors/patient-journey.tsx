import { Container } from "@/components/container";

const FRICTION_POINTS = [
  {
    title: "Unclear next steps",
    body: "Visitors may understand the practice but still not know how to schedule, call, or request more information.",
  },
  {
    title: "Weak mobile experience",
    body: "Many prospective patients will visit from a phone, where poor navigation or awkward layouts can create unnecessary friction.",
  },
  {
    title: "Disconnected systems",
    body: "Forms, booking tools, analytics, CRMs, review platforms, and other systems often operate separately instead of working together.",
  },
  {
    title: "Outdated structure",
    body: "Older websites may be difficult to manage, slow to update, poorly organized for services and conditions, or no longer representative of the practice.",
  },
];

export function PatientJourney() {
  return (
    <section className="border-b border-border">
      <Container className="py-16 sm:py-20 lg:py-24">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="flex items-center gap-3 text-sm font-medium text-primary">
              <span aria-hidden="true" className="h-px w-8 bg-accent" />
              More Than a Redesign
            </p>
            <h2 className="mt-5 text-balance text-headline font-semibold text-foreground">
              Your website is part of the patient journey.
            </h2>
          </div>

          <div className="max-w-xl space-y-5 text-lead text-muted-foreground lg:col-span-7">
            <p>
              A chiropractic website does more than explain who you are. It
              helps prospective patients decide whether they trust the practice,
              understand how you can help, and know what to do next.
            </p>
            <p>
              When the site is outdated, difficult to use on mobile, unclear
              about services, or disconnected from scheduling and tracking
              systems, that journey becomes harder than it needs to be.
            </p>
          </div>
        </div>

        <ul className="mt-14 grid divide-y divide-border border-y border-border sm:mt-16 lg:grid-cols-4 lg:divide-x lg:divide-y-0">
          {FRICTION_POINTS.map((point) => (
            <li
              key={point.title}
              className="py-8 lg:px-7 lg:py-10 lg:first:pl-0 lg:last:pr-0"
            >
              <h3 className="text-title font-semibold text-foreground">
                {point.title}
              </h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                {point.body}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
