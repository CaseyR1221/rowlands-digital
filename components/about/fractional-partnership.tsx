import Link from "next/link";
import { SlidersHorizontal, Users, Wrench, type LucideIcon } from "lucide-react";

import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import { contactHref } from "@/lib/contact-topic";

const CAPABILITIES: { icon: LucideIcon; title: string; body: string }[] = [
  {
    icon: Wrench,
    title: "Improve and build",
    body: "Website improvements, new features, landing pages, integrations, performance work, and hands-on development when something needs to be built.",
  },
  {
    icon: SlidersHorizontal,
    title: "Own the technical details",
    body: "Oversight of the website, CMS, analytics, hosting, integrations, vendors, and the technical systems around the business.",
  },
  {
    icon: Users,
    title: "Support the team",
    body: "Work directly with marketing, operations, leadership, or outside partners to evaluate technical needs and move projects forward.",
  },
];

/**
 * A contained primary-colored panel on the light page background, rather than
 * another full-width band: it sits between the pale chiropractic section and
 * the photographic closing call to action, and reads as a distinct way of
 * working together. The panel supplies its own light-on-dark colors because the
 * `section-dark` token scope would swap it to the darker band color instead.
 */
export function FractionalPartnership() {
  return (
    <section>
      <Container className="py-16 sm:py-20 lg:py-24">
        <div className="rounded-2xl bg-primary p-7 text-primary-foreground [--ring:var(--accent-soft)] sm:p-12 lg:p-16">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
            <div className="lg:col-span-6">
              <p className="flex items-center gap-3 text-sm font-medium text-accent-soft">
                <span aria-hidden="true" className="h-px w-8 bg-accent-soft" />
                Fractional Technical Partnership
              </p>

              <h2 className="mt-5 text-balance text-headline font-semibold">
                Need technical expertise, but not another full-time hire?
              </h2>

              <div className="mt-6 max-w-xl space-y-5 leading-relaxed text-primary-foreground/80">
                <p>
                  Not every business needs a full-time technical hire or a large
                  agency. I work with businesses as a fractional technical
                  partner, providing ongoing help across their website,
                  integrations, digital tools, and the technical problems that
                  come up along the way.
                </p>
                <p>
                  When something needs to be improved, connected, investigated,
                  or built, you have someone who already understands your
                  business and can take ownership of figuring it out.
                </p>
                <p>
                  It isn&rsquo;t only for new websites. It works best when you
                  already have a site, a CMS, booking, analytics, and marketing
                  tools, and need someone who understands how they fit together.
                </p>
              </div>

              <div className="mt-8">
                <Button
                  asChild
                  size="xl"
                  className="bg-surface text-primary hover:bg-accent-soft"
                >
                  <Link href={contactHref("ongoing-support")}>
                    Talk About Fractional Support
                  </Link>
                </Button>
              </div>
            </div>

            <ul className="border-b border-primary-foreground/20 lg:col-span-6">
              {CAPABILITIES.map(({ icon: Icon, title, body }) => (
                <li
                  key={title}
                  className="flex gap-4 border-t border-primary-foreground/20 py-7 sm:gap-5"
                >
                  <Icon
                    aria-hidden="true"
                    className="mt-0.5 size-5 shrink-0 text-accent-soft"
                  />
                  <div>
                    <h3 className="text-lg font-semibold">{title}</h3>
                    <p className="mt-2 leading-relaxed text-primary-foreground/80">
                      {body}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
