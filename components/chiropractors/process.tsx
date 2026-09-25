import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";

const STEPS = [
  {
    number: "01",
    title: "Review",
    body: "Understand the practice, current website, patient journey, and existing systems.",
  },
  {
    number: "02",
    title: "Recommend",
    body: "Identify the highest-value improvements and define a clear project scope.",
  },
  {
    number: "03",
    title: "Build",
    body: "Design, develop, integrate, test, and refine the solution.",
  },
  {
    number: "04",
    title: "Launch & support",
    body: "Launch carefully, validate key functionality and tracking, and provide ongoing support where needed.",
  },
];

export function Process() {
  return (
    <section className="border-b border-border">
      <Container className="py-16 sm:py-20 lg:py-24">
        <SectionHeading title="A straightforward process" />

        <ol className="mt-12 border-t border-border sm:mt-14">
          {STEPS.map((step) => (
            <li
              key={step.number}
              className="grid gap-3 border-b border-border py-8 lg:grid-cols-12 lg:gap-12 lg:py-9"
            >
              <div className="flex items-baseline gap-4 lg:col-span-4">
                {/* Fixed width so every title starts on the same axis — digit
                    glyphs differ enough in width to leave the edge ragged. */}
                <span className="w-6 shrink-0 text-sm font-semibold text-primary">
                  {step.number}
                </span>
                <h3 className="text-title font-semibold text-foreground">
                  {step.title}
                </h3>
              </div>
              <p className="max-w-2xl leading-relaxed text-muted-foreground lg:col-span-8">
                {step.body}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
