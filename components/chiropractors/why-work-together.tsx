import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";

const DIFFERENTIATORS = [
  {
    title: "Direct access",
    body: "Work directly with the developer responsible for the project.",
  },
  {
    title: "Chiropractic context",
    body: "Spend less time explaining basic clinic workflows and common website needs.",
  },
  {
    title: "Full-stack capability",
    body: "Go beyond page design when the problem involves integrations, APIs, data, analytics, or custom functionality.",
  },
  {
    title: "Ongoing support",
    body: "Have someone available after launch to maintain, improve, and troubleshoot the website and connected systems.",
  },
];

export function WhyWorkTogether() {
  return (
    <section className="border-b border-border">
      <Container className="py-16 sm:py-20 lg:py-24">
        <SectionHeading title="Technical depth without traditional agency overhead." />

        <ul className="mt-12 grid divide-y divide-border border-y border-border sm:mt-14 lg:grid-cols-4 lg:divide-x lg:divide-y-0">
          {DIFFERENTIATORS.map((item) => (
            <li
              key={item.title}
              className="py-8 lg:px-7 lg:py-10 lg:first:pl-0 lg:last:pr-0"
            >
              <h3 className="text-title font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                {item.body}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
