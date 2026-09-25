import Link from "next/link";

import { Container } from "@/components/container";
import type { ServiceArea } from "@/components/services/service-areas";
import { SERVICE_AREAS } from "@/components/services/service-areas";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/**
 * One of the four detailed service sections. The composition is deliberately
 * shared across all four — they answer the same questions in the same order,
 * so a reader comparing them can scan rather than re-learn each layout. The
 * alternating surface band supplies the rhythm instead.
 */
export function ServiceSection({
  area,
  index,
}: {
  area: ServiceArea;
  index: number;
}) {
  return (
    <section
      id={area.id}
      aria-labelledby={`${area.id}-heading`}
      className={cn(
        "scroll-mt-16 border-b border-border lg:scroll-mt-20",
        index % 2 === 1 && "bg-surface",
      )}
    >
      <Container className="py-16 sm:py-20 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="flex items-center gap-3 text-sm font-medium text-primary">
              <span aria-hidden="true" className="h-px w-8 bg-accent" />
              {area.number} / {String(SERVICE_AREAS.length).padStart(2, "0")}
            </p>

            <h2
              id={`${area.id}-heading`}
              className="mt-5 text-balance text-headline font-semibold text-foreground"
            >
              {area.title}
            </h2>

            <p className="mt-5 max-w-xl text-lead font-medium text-foreground">
              {area.descriptor}
            </p>

            <p className="mt-5 max-w-xl leading-relaxed text-muted-foreground">
              {area.body}
            </p>

            <p className="mt-8 max-w-xl border-l-2 border-accent bg-accent-soft px-5 py-4 leading-relaxed text-foreground">
              <span className="font-semibold">Good fit for:</span>{" "}
              {area.goodFit}
            </p>

            <div className="mt-8">
              <Button asChild size="lg">
                <Link href="/contact">{area.ctaLabel}</Link>
              </Button>
            </div>
          </div>

          <div className="lg:col-span-7">
            <h3 className="text-sm font-medium text-muted-foreground">
              {area.workLabel}
            </h3>
            <ul className="mt-5 grid border-t border-border sm:grid-cols-2 sm:gap-x-10">
              {area.work.map((item) => (
                <li
                  key={item}
                  className="flex items-baseline gap-3 border-b border-border py-3 leading-relaxed text-foreground"
                >
                  <span
                    aria-hidden="true"
                    className="mt-2 h-px w-3 shrink-0 bg-accent"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
