import Image from 'next/image';
import Link from 'next/link';

import { Container } from '@/components/container';
import { Button } from '@/components/ui/button';
import backgroundImage from '@/public/final-cta-bg.jpg';

export function FinalCta() {
  return (
    <section className="section-dark relative overflow-hidden">
      <Image
        src={backgroundImage}
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
      />
      {/*
        Scrim at 85% opacity — measured against the brightest highlights in
        the photo, this keeps body copy (text-muted-foreground) at ~4.7:1 and
        the heading at ~9:1, both clearing WCAG AA regardless of what part of
        the image sits behind them.
      */}
      <div aria-hidden="true" className="absolute inset-0 bg-dark-section/70" />

      <Container className="relative z-10 py-16 sm:py-20 lg:py-24">
        <h2 className="max-w-3xl md:max-w-full text-balance text-headline font-semibold text-foreground">
          Not sure what your website actually needs?
        </h2>

        <p className="mt-6 max-w-2xl md:max-w-full text-lead text-foreground">
          Start with a website review. I&rsquo;ll take a look at your current
          site and identify a few of the highest-impact opportunities around
          usability, conversion, mobile experience, and technical quality. No
          generic automated score. No obligation. Just a focused review of your
          actual website.
        </p>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:gap-4">
          <Button asChild size="xl">
            <Link href="/contact">Request a Free Website Review</Link>
          </Button>
          <Button asChild size="xl" variant="outline">
            <Link href="/services">Explore Services</Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}
