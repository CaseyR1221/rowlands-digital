import Link from "next/link";

import { Container } from "@/components/container";
import { ImagePlaceholder } from "@/components/image-placeholder";
import { ImageWithFallback } from "@/components/image-with-fallback";
import { ListMarker } from "@/components/list-marker";
import type { ServiceArea } from "@/components/services/service-areas";
import { SERVICE_AREAS } from "@/components/services/service-areas";
import { Button } from "@/components/ui/button";
import { contactHref } from "@/lib/contact-topic";
import { cn } from "@/lib/utils";

/**
 * One of the four detailed service sections. The composition is deliberately
 * shared across all four — they answer the same questions in the same order,
 * so a reader comparing them can scan rather than re-learn each layout. The
 * image side and the surface band alternate to supply the rhythm instead.
 */
export function ServiceSection({
  area,
  index,
}: {
  area: ServiceArea;
  index: number;
}) {
  const imageFirst = index % 2 === 1;

  return (
    <section
      id={area.id}
      aria-labelledby={`${area.id}-heading`}
      // Clears the sticky header (~81px, ~97px from `md`) on anchor jumps.
      className={cn(
        "scroll-mt-24 border-b border-border md:scroll-mt-28",
        imageFirst && "bg-surface",
      )}
    >
      <Container className="py-16 sm:py-20 lg:py-24">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-center lg:gap-16">
          {/*
            Below `lg` this wrapper is `display: contents`, so the intro, the
            list and the image are siblings in one grid and `order` can place
            the image between the intro and the list on phones and tablets. At
            `lg` it is a normal block again, keeping the two-column layout.
          */}
          <div className="contents lg:col-span-7 lg:block">
            <div className="order-1">
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

              <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">
                {area.body}
              </p>
            </div>

            <div className="order-3 lg:mt-8">
              <ul className="grid border-t border-border sm:grid-cols-2 sm:gap-x-8">
                {area.work.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 border-b border-border py-3 text-[0.9375rem] leading-snug text-foreground"
                  >
                    <ListMarker />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <Button asChild size="lg">
                  <Link href={contactHref(area.ctaTopic)}>{area.ctaLabel}</Link>
                </Button>
              </div>
            </div>
          </div>

          <div
            className={cn(
              "order-2 lg:col-span-5",
              imageFirst ? "lg:order-first" : "lg:order-0",
            )}
          >
            {area.image ? (
              // Portrait artwork stays 4:5 at every size so nothing is cropped;
              // on phones it is capped and centered rather than full-bleed tall.
              <ImageWithFallback
                src={area.image.src}
                alt={area.image.alt}
                sizes="(min-width: 1024px) 420px, 384px"
                concept={area.imageConcept}
                className="mx-auto aspect-4/5 max-w-sm lg:max-w-none"
              />
            ) : (
              <ImagePlaceholder
                concept={area.imageConcept}
                className={cn(
                  "aspect-4/3 lg:aspect-4/5",
                  imageFirst && "bg-background/60",
                )}
              />
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
