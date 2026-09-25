import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";

const PROJECT_TYPES = [
  {
    title: "Full website redesign",
    body: "For established practices whose website no longer reflects the quality of the business.",
  },
  {
    title: "New practice website",
    body: "For practices that need a strong digital foundation from the beginning.",
  },
  {
    title: "Website optimization",
    body: "For practices with a fundamentally solid site that needs stronger conversion, performance, analytics, or technical improvements.",
  },
  {
    title: "Custom development & integration",
    body: "For practices that need functionality or systems beyond what a standard website platform provides.",
  },
];

export function ProjectTypes() {
  return (
    <section className="border-b border-border">
      <Container className="py-16 sm:py-20 lg:py-24">
        <SectionHeading title="Ways I can help your practice" />

        <ul className="mt-12 grid border-t border-border sm:mt-14 sm:grid-cols-2">
          {PROJECT_TYPES.map((type) => (
            <li
              key={type.title}
              className="border-b border-border py-8 sm:py-10 sm:odd:pr-10 sm:even:border-l sm:even:pl-10"
            >
              <h3 className="text-title font-semibold text-foreground">
                {type.title}
              </h3>
              <p className="mt-3 max-w-md leading-relaxed text-muted-foreground">
                {type.body}
              </p>
            </li>
          ))}
        </ul>

        <p className="mt-10 w-full leading-relaxed text-lg md:text-2xl text-muted-foreground italic">
          <span className="text-2xl hidden md:inline-block">***</span> Most projects begin with <span className="font-semibold">understanding</span> what is already working, what
          is creating friction, and <span className="font-semibold">what the practice actually needs</span> — <span className="text-destructive font-semibold">not
          forcing every client into the same package.</span> <span className="text-2xl hidden md:inline-block">***</span>
        </p>
      </Container>
    </section>
  );
}
