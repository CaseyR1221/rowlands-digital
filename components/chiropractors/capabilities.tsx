import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";

const CAPABILITY_GROUPS = [
  {
    title: "Website strategy & redesign",
    description:
      "Rework the site around the way prospective patients actually read it and decide.",
    items: [
      "Modern responsive website design",
      "Clearer patient journeys",
      "Stronger calls to action",
      "Better service and condition-page structure",
      "Improved content organization",
      "Better first-visit and new-patient information",
    ],
  },
  {
    title: "Scheduling & conversion",
    description:
      "Make the next step obvious, whether that is booking online, calling, or asking a question.",
    items: [
      "Appointment and booking flows",
      "Click-to-call behavior",
      "Contact and lead forms",
      "Consultation offers",
      "New-patient calls to action",
      "Conversion tracking",
    ],
  },
  {
    title: "Local visibility & technical SEO",
    description:
      "Build the technical and structural foundations that help a practice be found.",
    items: [
      "Page structure",
      "Local-service content foundations",
      "Location pages",
      "Technical SEO",
      "Metadata",
      "Schema where appropriate",
      "Sitemap and crawlability",
      "Google Search Console support",
    ],
  },
  {
    title: "Analytics & lead tracking",
    description:
      "Make the actions that matter measurable, so the practice can see what the website contributes.",
    items: [
      "GA4",
      "Google Tag Manager",
      "Conversion-event setup",
      "Form submission tracking",
      "Booking-click tracking",
      "Phone-click tracking",
      "Campaign attribution support where practical",
    ],
  },
  {
    title: "Integrations",
    description:
      "Connect the website to the tools the practice already runs on so information moves between them.",
    items: [
      "Booking platforms",
      "CRM systems",
      "Forms",
      "Review platforms",
      "Email and SMS tools",
      "Third-party APIs",
      "Custom integrations",
    ],
  },
  {
    title: "Multi-location architecture",
    description:
      "For practices with more than one clinic, structure the site so locations scale without duplicating everything.",
    items: [
      "Scalable location structure",
      "Clinic-specific content",
      "Location-based routing",
      "Analytics considerations",
      "Shared vs. local content architecture",
      "Centralized site management",
    ],
  },
];

export function Capabilities() {
  return (
    <section className="border-b border-border">
      <Container className="py-16 sm:py-20 lg:py-24">
        <SectionHeading
          eyebrow="What I Can Help With"
          title="Built around how chiropractic practices actually operate."
          lead="Most practices need more than a new look. These are the areas where a website and the systems behind it tend to make the biggest practical difference."
        />

        <dl className="mt-12 border-t border-border sm:mt-14">
          {CAPABILITY_GROUPS.map((group) => (
            <div
              key={group.title}
              className="grid gap-4 border-b border-border py-8 lg:grid-cols-12 lg:gap-12 lg:py-10"
            >
              <dt className="lg:col-span-4">
                <h3 className="text-title font-semibold text-foreground">
                  {group.title}
                </h3>
                <p className="mt-3 max-w-md leading-relaxed text-muted-foreground">
                  {group.description}
                </p>
              </dt>
              <dd className="lg:col-span-8">
                <ul className="grid sm:grid-cols-2 sm:gap-x-10">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-baseline gap-3 border-t border-border py-3 text-foreground first:border-t-0 sm:nth-2:border-t-0"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-2 h-px w-3 shrink-0 bg-accent"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
