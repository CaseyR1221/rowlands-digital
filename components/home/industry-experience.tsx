import Link from "next/link";

import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";

const PRACTICE_AREAS = [
  "New-patient conversion",
  "Appointment and scheduling flows",
  "Service and condition pages",
  "Local search foundations",
  "Analytics and lead tracking",
  "Reviews and trust signals",
  "Third-party booking and CRM integrations",
  "Multi-location website architecture",
];

export function IndustryExperience() {
  return (
    <section className="border-b border-border bg-accent-soft">
      <Container className="py-16 sm:py-20 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="flex items-center gap-3 text-sm font-medium text-primary">
              <span aria-hidden="true" className="h-px w-8 bg-accent" />
              Industry Experience
            </p>

            <h2 className="mt-5 text-balance text-headline font-semibold text-foreground">
              Web solutions built with chiropractic practices in mind.
            </h2>

            <p className="mt-5 max-w-xl text-lead text-muted-foreground">
              After working extensively with chiropractic websites, clinic
              technology, analytics, booking systems, and multi-location digital
              platforms, Casey brings firsthand industry experience to practices
              looking to improve their online patient experience.
            </p>

            <div className="mt-8">
              <Button asChild size="xl">
                <Link href="/chiropractors">Web Development for Chiropractors</Link>
              </Button>
            </div>

            <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
              Not a chiropractic practice? Rowlands Digital Works works with
              established service businesses across industries.
            </p>
          </div>

          <div className="lg:col-span-7">
            <h3 className="text-sm font-medium text-foreground">
              Where that experience shows up
            </h3>
            <ul className="mt-2 grid sm:grid-cols-2 sm:gap-x-10">
              {PRACTICE_AREAS.map((area) => (
                <li
                  key={area}
                  className="flex items-baseline gap-3 border-t border-border py-4 text-foreground"
                >
                  <span
                    aria-hidden="true"
                    className="mt-2 h-px w-3 shrink-0 bg-accent"
                  />
                  {area}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
