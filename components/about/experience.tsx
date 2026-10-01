import { Container } from '@/components/container';
import { Quote } from 'lucide-react';

const AREAS = [
  {
    title: 'Full-stack development',
    body: 'Websites and applications built across the frontend, backend, APIs, databases, and content-management layer, not just the pages people see.',
    details: [
      'React',
      'Next.js',
      'TypeScript',
      'Node.js',
      'CMS platforms',
      'Relational databases',
      'APIs',
    ],
  },
  {
    title: 'Integrations & business systems',
    body: 'Connecting websites with the services a business already depends on, so information reaches the people and tools that need it.',
    details: [
      'Booking & scheduling',
      'CRMs',
      'Forms',
      'Email & SMS',
      'Marketing platforms',
      'Third-party APIs',
    ],
  },
  {
    title: 'Analytics & customer journeys',
    body: 'Measurement that connects technical work to business outcomes: which pages, forms, and booking flows actually turn visitors into inquiries.',
    details: [
      'Google Tag Manager',
      'Conversion tracking',
      'Booking tracking',
      'Lead flows',
    ],
  },
  {
    title: 'Production ownership',
    body: "Keeping live systems healthy: shipping frequent releases safely, tracking down problems quickly, and improving what's already running.",
    details: [
      'Deployments',
      'Monitoring',
      'Performance',
      'Migrations',
      'Troubleshooting',
      'Incident response',
      'Maintenance',
    ],
  },
];

export function Experience() {
  return (
    <section className="border-b border-border bg-surface">
      <Container className="py-16 sm:py-20 lg:py-24">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-12">
            <p className="flex items-center gap-3 text-sm font-medium text-primary">
              <span aria-hidden="true" className="h-px w-8 bg-accent" />
              Real-World Experience
            </p>
            <h2 className="mt-5 text-balance text-headline font-semibold text-foreground">
              Built from experience running real production systems.
            </h2>
          </div>

          {/* <div className="max-w-xl space-y-5 text-lead text-muted-foreground lg:col-span-7">
            <p>
              Before Rowlands Digital Works, I worked extensively on a large,
              multi-location chiropractic web platform.
            </p>
            <p>
              My background goes beyond designing and coding individual pages.
              I&rsquo;ve been responsible for systems that had to stay
              available, integrate with third-party platforms, support marketing
              teams and business users, handle frequent releases, and keep
              working long after launch.
            </p>
          </div> */}
        </div>

        {/*
          A ruled two-by-two layout rather than cards: the hairlines group the
          four areas without boxing each one in. The detail lists are short,
          plain text so they read as context rather than a logo wall.
        */}
        <ul className="mt-12 grid border-t border-border sm:mt-14 md:grid-cols-2">
          {AREAS.map((area) => (
            <li
              key={area.title}
              className="border-b border-border py-8 sm:py-10 md:odd:pr-10 md:even:border-l md:even:pl-10"
            >
              <h3 className="text-title font-semibold text-foreground">
                {area.title}
              </h3>
              <p className="mt-3 max-w-md leading-relaxed text-muted-foreground">
                {area.body}
              </p>
              <ul className="mt-5 flex max-w-md flex-wrap gap-2">
                {area.details.map((detail) => (
                  <li
                    key={detail}
                    className="rounded-md border border-border bg-background px-2.5 py-1 text-xs font-medium text-muted-foreground"
                  >
                    {detail}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>

        <figure className="mt-8 pt-8 sm:mt-12 sm:pt-10">
          <div className='relative flex items-center justify-center gap-4'>
            <Quote aria-hidden="true" className="size-22 sm:size-12 text-accent relative -top-14.5 sm:-top-7" />
            <blockquote className="mt-6 max-w-7xl">
              <p className="text-pretty text-headline italic font-medium text-accent">
                The goal isn&rsquo;t to build more technology. It&rsquo;s to
                build the right technology for the problem.
              </p>
            </blockquote>
          </div>
          <figcaption className="mt-6 text-sm text-muted-foreground">
            Casey Rowlands, Founder
          </figcaption>
        </figure>
      </Container>
    </section>
  );
}
