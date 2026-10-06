import { ArrowDown, ArrowRight } from 'lucide-react';

import { Container } from '@/components/container';
import { ImageWithFallback } from '@/components/image-with-fallback';
import { SectionHeading } from '@/components/section-heading';

const SERVICE_FLOW = [
  'Website',
  'Conversion',
  'Integrations',
  'Analytics',
  'Ongoing Improvement',
];

const STEPS = [
  {
    number: '01',
    title: 'Understand',
    descriptor: 'Goals, audience, systems',
  },
  {
    number: '02',
    title: 'Recommend',
    descriptor: 'Scope and approach',
  },
  {
    number: '03',
    title: 'Build',
    descriptor: 'Design, development, testing',
  },
  {
    number: '04',
    title: 'Launch & Improve',
    descriptor: 'Launch, measure, support',
  },
];

export function WorkTogether() {
  return (
    <section className="border-b border-border">
      <Container className="py-16 sm:py-20 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-16">
          <div className="lg:col-span-7">
            <SectionHeading
              eyebrow="How I Work"
              title="Built to Work Together"
              lead={
                <>
                  Work directly with the technical partner responsible for your
                  project, from the first conversation through launch and
                  beyond. My process is always to:
                </>
              }
            >
              <div className="text-lead text-muted-foreground">
                <ol
                  aria-label="Project process"
                  className="mt-4 mb-8 grid gap-3 sm:mt-4 lg:grid-cols-4 lg:gap-0"
                >
                  {STEPS.map((step, index) => (
                    <li key={step.number} className="relative lg:pr-1">
                      <div className="flex items-baseline gap-2">
                        <span className="text-sm font-semibold text-primary">
                          {step.number}
                        </span>
                        <h3 className="font-semibold text-foreground text-base">
                          {step.title}
                        </h3>
                      </div>
                      <p className="mt-1 text-sm text-pretty text-muted-foreground">
                        {step.descriptor}
                      </p>

                      {index < STEPS.length - 1 ? (
                        <>
                          <ArrowDown
                            aria-hidden="true"
                            className="mt-2 size-3.5 text-accent lg:hidden"
                          />
                          <ArrowRight
                            aria-hidden="true"
                            className="absolute top-1 right-4.25 hidden size-3.5 text-accent lg:block"
                          />
                        </>
                      ) : null}
                    </li>
                  ))}
                </ol>
                <p>
                  The work itself is designed to connect &nbsp;&mdash; so a
                  website project can naturally lead into:
                </p>
              </div>
            </SectionHeading>

            <ol
              aria-label="How the work connects"
              className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-2 text-[0.9375rem] md:text-base font-medium text-foreground"
            >
              {SERVICE_FLOW.map((stage, index) => (
                <li key={stage} className="flex items-center gap-2">
                  {stage}
                  {index < SERVICE_FLOW.length - 1 ? (
                    <ArrowRight
                      aria-hidden="true"
                      className="size-4 shrink-0 text-accent"
                    />
                  ) : null}
                </li>
              ))}
            </ol>
          </div>

          <div className="hidden md:block lg:order-first lg:col-span-5">
            <ImageWithFallback
              src="/services-work-together-collage.jpg"
              alt="Four scenes of a project's progress: a conversation over a laptop, a checklist with a calendar and clock, a growth chart, and a website launching"
              sizes="(min-width: 1024px) 420px, (min-width: 480px) 448px, 100vw"
              concept="Professional portrait or working image of Casey"
              className="aspect-square max-w-md lg:max-w-none"
            />
          </div>
        </div>

        {/*
          The project process, kept deliberately light: number, title and a
          few words per step. Below `lg` the steps stack with a down arrow
          under each; from `lg` they sit in a row, with a right arrow centered
          in the padding after each step. The arrows are decorative.
        */}
        {/* <ol
          aria-label="Project process"
          className="mt-12 grid gap-3 sm:mt-14 lg:grid-cols-4 lg:gap-0"
        >
          {STEPS.map((step, index) => (
            <li key={step.number} className="relative lg:pr-12">
              <div className="flex items-baseline gap-2">
                <span className="text-sm font-semibold text-primary">
                  {step.number}
                </span>
                <h3 className="font-semibold text-foreground">{step.title}</h3>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">
                {step.descriptor}
              </p>

              {index < STEPS.length - 1 ? (
                <>
                  <ArrowDown
                    aria-hidden="true"
                    className="mt-2 size-3.5 text-accent lg:hidden"
                  />
                  <ArrowRight
                    aria-hidden="true"
                    className="absolute top-1 right-[17px] hidden size-3.5 text-accent lg:block"
                  />
                </>
              ) : null}
            </li>
          ))}
        </ol> */}
      </Container>
    </section>
  );
}
