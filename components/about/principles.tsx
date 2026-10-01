import {
  MessagesSquare,
  Search,
  ShieldCheck,
  Target,
  type LucideIcon,
} from "lucide-react";

import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";

const PRINCIPLES: { icon: LucideIcon; title: string; body: string }[] = [
  {
    icon: Search,
    title: "Understand before building",
    body: "Learn how the business operates, what the customer is trying to accomplish, and where the real friction is before recommending any technology.",
  },
  {
    icon: Target,
    title: "Solve the business problem",
    body: "Choose tools and architecture because they fit the problem, not because they’re new or fashionable.",
  },
  {
    icon: ShieldCheck,
    title: "Own what you ship",
    body: "Performance, accessibility, analytics, deployment, maintainability, and reliability are part of development, not someone else’s problem after launch.",
  },
  {
    icon: MessagesSquare,
    title: "Stay accessible",
    body: "A technical partner is far more useful when you can actually reach them. Communication doesn’t disappear once a project launches.",
  },
];

export function Principles() {
  return (
    <section className="border-b border-border">
      <Container className="py-16 sm:py-20 lg:py-24">
        <SectionHeading
          eyebrow="How I Think About the Work"
          title="A few principles shape every project."
        />

        <ul className="mt-12 grid gap-x-10 gap-y-12 sm:mt-14 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-8">
          {PRINCIPLES.map(({ icon: Icon, title, body }) => (
            <li key={title} className="border-t-2 border-accent pt-6">
              <div className="flex size-11 items-center justify-center rounded-lg bg-accent-soft">
                <Icon aria-hidden="true" className="size-5 text-accent" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-foreground">
                {title}
              </h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">
                {body}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
