import { Container } from "@/components/container";

const FLOW = [
  "Website",
  "Conversion",
  "Integrations",
  "Analytics",
  "Ongoing improvement",
];

export function HowServicesConnect() {
  return (
    <section aria-labelledby="built-to-work-together" className="border-b border-border">
      <Container className="py-12 sm:py-14 lg:py-16">
        <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8 lg:p-10">
          <div className="grid gap-4 lg:grid-cols-12 lg:gap-16">
            <h2
              id="built-to-work-together"
              className="text-title font-semibold text-foreground lg:col-span-4"
            >
              Built to work together
            </h2>
            <p className="max-w-2xl leading-relaxed text-muted-foreground lg:col-span-8">
              A website project can uncover a lead-routing problem. A redesign
              can reveal that bookings aren&rsquo;t being tracked. The goal
              isn&rsquo;t to sell every service at once &mdash; it&rsquo;s to
              solve the immediate problem while leaving a cleaner technical
              foundation for what comes next.
            </p>
          </div>

          {/*
            A plain sequence, not an architecture diagram: the rules between
            stages are decorative, so the list still reads correctly to a
            screen reader. Each stage leads with its step number, which is the
            slot a custom icon can take over later.
          */}
          <ol className="mt-8 flex flex-col items-start border-t border-border pt-8 lg:flex-row lg:items-center">
            {FLOW.map((stage, index) => (
              <li
                key={stage}
                className="flex flex-col items-start lg:flex-row lg:items-center"
              >
                {index > 0 ? (
                  <span
                    aria-hidden="true"
                    className="ml-6 h-4 w-px shrink-0 bg-accent lg:mx-3 lg:h-px lg:w-5 xl:mx-4 xl:w-8"
                  />
                ) : null}
                <span className="flex items-center gap-2.5 rounded-lg border border-border bg-background px-4 py-2.5 text-sm font-medium text-foreground">
                  <span
                    aria-hidden="true"
                    className="text-xs font-semibold text-accent"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {stage}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
