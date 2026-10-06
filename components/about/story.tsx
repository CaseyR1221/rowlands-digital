import { Container } from '@/components/container';
import { Quote } from 'lucide-react';

export function Story() {
  return (
    <section className="border-b border-border">
      <Container className="py-16 sm:py-20 lg:py-28">
        <div className="flex flex-col items-center justify-center gap-10 lg:gap-6">
          {/* Holds its place beside the longer story on wide screens. */}
          <div className="lg:top-32 lg:col-span-6 lg:self-start">
            <p className="flex items-center gap-3 text-sm font-medium text-primary">
              <span aria-hidden="true" className="h-px w-8 bg-accent" />
              Why Rowlands Digital Works
            </p>
            <h2 className="mt-5 text-balance text-headline font-semibold text-foreground">
              Good development starts with understanding the problem.
            </h2>
          </div>

          <div className="max-w-7xl space-y-4 text-lead text-muted-foreground lg:col-span-6">
            <p>
              Before starting Rowlands Digital Works, I spent years working
              directly inside the systems businesses depend on every day:
              websites, content platforms, analytics, APIs, and the
              infrastructure connecting them.
            </p>
            <div className="relative flex items-center gap-3">
              <Quote
                aria-hidden="true"
                className="size-16 sm:size-6 text-accent relative -top-8.5 sm:-top-2.5"
              />
              <p className="font-bold italic text-accent text-2xl">
                That experience changed the way I think about the digital
                process.
              </p>
            </div>
            <p>
              A website rarely exists by itself. It connects to marketing
              campaigns, scheduling platforms, forms, CRMs, analytics, internal
              processes, and the people responsible for keeping all of it
              running. The best solution isn&rsquo;t always a new website or the
              newest technology. Sometimes it&rsquo;s a better customer journey.
              Sometimes it&rsquo;s fixing an integration. Sometimes it&rsquo;s
              simplifying a process that has become unnecessarily complicated.
            </p>
            <p>
              My background goes beyond designing and coding individual pages.
              I&rsquo;ve been responsible for systems that had to stay
              available, integrate with third-party platforms, support marketing
              teams and business users, handle frequent releases, and keep
              working long after launch.
            </p>
            <p>
              I started Rowlands Digital Works to bring that same hands-on
              technical partnership to independent practices and growing
              businesses—combining web development, integrations, analytics, and
              ongoing support without the layers of a traditional agency.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
