import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";

const FLOW = [
  "Website",
  "Conversion",
  "Integrations",
  "Analytics",
  "Ongoing improvement",
];

export function HowServicesConnect() {
  return (
    <section className="border-b border-border">
      <Container className="py-16 sm:py-20 lg:py-24">
        <SectionHeading title="One project can lead to a much better system." />

        <div className="mt-8 grid gap-6 lg:grid-cols-12 lg:gap-16">
          <div className="max-w-xl space-y-5 text-lead text-muted-foreground lg:col-span-7">
            <p>
              A website project may uncover an opportunity to improve lead
              routing. A redesign may reveal that booking data is not being
              tracked. A custom integration may eventually need ongoing support.
            </p>
            <p>
              The goal is not to sell every service at once. It is to solve the
              immediate problem while leaving the business with a cleaner
              technical foundation for what comes next.
            </p>
          </div>
        </div>

        {/*
          A plain sequence, not an architecture diagram: each stage is a real
          step a project tends to move through, and the rules between them are
          decorative, so the list still reads correctly to a screen reader.
        */}
        <ol className="mt-12 flex flex-col items-start sm:mt-14 lg:flex-row lg:items-center">
          {FLOW.map((stage, index) => (
            <li
              key={stage}
              className="flex flex-col items-start lg:flex-row lg:items-center"
            >
              {index > 0 ? (
                <span
                  aria-hidden="true"
                  className="ml-6 h-5 w-px shrink-0 bg-accent lg:mx-4 lg:h-px lg:w-6 xl:mx-5 xl:w-8"
                />
              ) : null}
              <span className="border border-border bg-surface px-4 py-2.5 text-sm font-medium text-foreground sm:px-5 sm:text-base">
                {stage}
              </span>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
