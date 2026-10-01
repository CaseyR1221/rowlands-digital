import {
  ArrowDown,
  ArrowRight,
  CircleCheck,
  Store,
  UserRound,
  type LucideIcon,
} from "lucide-react";

import { Container } from "@/components/container";
import { cn } from "@/lib/utils";

const AGENCY_PATH = [
  "You",
  "Sales",
  "Account manager",
  "Project manager",
  "Developer",
];

const DIRECT_PATH: { icon: LucideIcon; label: string; highlight?: boolean }[] =
  [
    { icon: Store, label: "Your business" },
    { icon: UserRound, label: "Casey", highlight: true },
    { icon: CircleCheck, label: "The solution" },
  ];

export function DirectRelationship() {
  return (
    <section className="section-dark">
      <Container className="py-16 sm:py-20 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
          <div className="lg:col-span-5">
            <p className="flex items-center gap-3 text-sm font-medium text-primary">
              <span aria-hidden="true" className="h-px w-8 bg-accent" />
              Who You&rsquo;re Working With
            </p>
            <h2 className="mt-5 text-balance text-headline font-semibold text-foreground">
              The person you talk to is the person building the project.
            </h2>

            <div className="mt-6 max-w-xl space-y-5 text-lead text-muted-foreground">
              <p className="font-medium text-foreground">
                Rowlands Digital Works is intentionally small.
              </p>
              <p>
                When we discuss your website or technical problem, you&rsquo;re
                talking directly with the person who will evaluate it, recommend
                the approach, build the solution, and support it afterward.
              </p>
              <p>
                That means fewer handoffs, clearer communication, and someone
                involved in the project who understands why the decisions were
                made.
              </p>
            </div>
          </div>

          {/*
            Two sequences, compared: the familiar agency chain kept small and
            muted, and the direct path given the weight. Direct-path nodes stack
            icon over label so all three fit on one row from `sm` without
            wrapping. Every arrow is decorative; each ordered list carries its
            sequence on its own.
          */}
          <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8 lg:col-span-7 lg:p-6 xl:p-8">
            <p
              id="agency-path"
              className="text-sm font-medium text-muted-foreground"
            >
              The typical agency path
            </p>
            <ol
              aria-labelledby="agency-path"
              className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-3"
            >
              {AGENCY_PATH.map((step, index) => (
                <li key={step} className="flex items-center gap-1 sm:gap-2">
                  <span className="rounded-md border border-border px-2.5 py-1 text-sm text-muted-foreground">
                    {step}
                  </span>
                  {index < AGENCY_PATH.length - 1 ? (
                    <ArrowRight
                      aria-hidden="true"
                      className="size-3.5 shrink-0 text-muted-foreground"
                    />
                  ) : null}
                </li>
              ))}
            </ol>

            <div className="mt-8 border-t border-border pt-8">
              <p id="direct-path" className="text-sm font-medium text-accent">
                Working with Rowlands Digital Works
              </p>
              <ol
                aria-labelledby="direct-path"
                className="mt-5 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center justify-center"
              >
                {DIRECT_PATH.map(({ icon: Icon, label, highlight }, index) => (
                  <li
                    key={label}
                    className="flex flex-col items-center gap-3 sm:flex-row"
                  >
                    <span
                      className={cn(
                        "flex w-full flex-col items-center gap-2 rounded-xl border px-5 py-4 font-semibold whitespace-nowrap sm:w-auto",
                        highlight
                          ? "border-primary bg-primary text-primary-foreground"
                          : "border-border bg-background text-foreground",
                      )}
                    >
                      <Icon
                        aria-hidden="true"
                        className={cn(
                          "size-5 shrink-0",
                          highlight ? "text-primary-foreground" : "text-accent",
                        )}
                      />
                      {label}
                    </span>
                    {index < DIRECT_PATH.length - 1 ? (
                      <>
                        <ArrowDown
                          aria-hidden="true"
                          className="size-5 text-accent sm:hidden"
                        />
                        <ArrowRight
                          aria-hidden="true"
                          className="hidden size-5 shrink-0 text-accent sm:block"
                        />
                      </>
                    ) : null}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
