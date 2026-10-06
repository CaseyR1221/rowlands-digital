import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import headshot from "@/public/casey-rowlands.jpg";

export function Hero() {
  return (
    <section className="border-b border-border">
      <Container className="py-14 sm:py-20 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-16">
          {/*
            Below `lg` this wrapper is `display: contents`, so the title, the
            portrait and the copy are siblings in one grid and `order` can put
            the portrait between the title and the copy on phones and tablets.
            At `lg` it is a normal block again, keeping the two-column layout.
          */}
          <div className="contents lg:col-span-7 lg:block">
            <div className="order-1">
              <p className="flex items-center gap-3 text-sm font-medium text-primary">
                <span aria-hidden="true" className="h-px w-8 bg-accent" />
                About Rowlands Digital Works
              </p>

              <h1 className="mt-6 max-w-3xl text-balance text-display font-semibold text-foreground">
                A technical partner who understands the business behind the website.
              </h1>
            </div>

            <div className="order-3 lg:mt-6">
              <div className="max-w-xl space-y-5 text-lead text-muted-foreground">
                <p>
                  I&rsquo;m Casey Rowlands, a full-stack developer and the
                  founder of Rowlands Digital Works, an independent technical
                  partner based in Central Florida. I help growing service
                  businesses build better websites, connect the systems behind
                  them, and solve technical problems without the layers of a
                  traditional agency.
                </p>
                <p>
                  Clients work directly with me from the first conversation
                  through development, launch, and ongoing support.
                </p>
              </div>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:gap-4">
                <Button asChild size="xl">
                  <Link href="/contact">Start a Conversation</Link>
                </Button>
                <Button asChild size="xl" variant="outline">
                  <Link href="/services">Explore Services</Link>
                </Button>
              </div>
            </div>
          </div>

          {/*
            The caption card hangs over the bottom edge of the portrait; the
            figure's bottom padding reserves that overhang so it never collides
            with the next section.
          */}
          <figure className="relative order-2 max-w-md pb-8 lg:order-0 lg:col-span-5 lg:max-w-none">
            <div className="relative aspect-4/5 overflow-hidden rounded-2xl border border-border bg-surface">
              <Image
                src={headshot}
                alt="Portrait of Casey Rowlands"
                fill
                sizes="(min-width: 1024px) 420px, (min-width: 640px) 448px, 100vw"
                loading="eager"
                fetchPriority="high"
                className="object-cover"
              />
            </div>

            <figcaption className="absolute bottom-0 left-5 rounded-xl border border-border bg-surface px-5 py-4 sm:left-6">
              <p className="font-semibold text-foreground">Casey Rowlands</p>
              <p className="text-sm text-muted-foreground">
                Founder &amp; Developer
              </p>
            </figcaption>
          </figure>
        </div>
      </Container>
    </section>
  );
}
