import { Container } from "@/components/container";

export function PersonalNote() {
  return (
    <section className="border-b border-border">
      <Container className="py-14 sm:py-16 lg:py-20">
        <div className="grid gap-6 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="flex items-center gap-3 text-sm font-medium text-primary">
              <span aria-hidden="true" className="h-px w-8 bg-accent" />
              Away From the Code
            </p>
            <h2 className="mt-5 text-balance text-title font-semibold text-foreground">
              A little about the person behind the screen.
            </h2>
          </div>

          <p className="max-w-xl text-lead text-muted-foreground lg:col-span-7">
            I&rsquo;m based in Central Florida and have a background in computer
            science. When I&rsquo;m not working through a website architecture
            or tracking down an integration problem, there&rsquo;s a good chance
            you&rsquo;ll find me on a tennis court.
          </p>
        </div>
      </Container>
    </section>
  );
}
