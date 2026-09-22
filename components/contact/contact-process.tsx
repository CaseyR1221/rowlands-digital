import { SectionHeading } from "@/components/section-heading";
import { siteConfig } from "@/lib/site";

const STEPS = [
  {
    number: "01",
    title: "You send your request",
    body: "Tell me what isn’t working. The more specific you are, the more useful my response will be.",
  },
  {
    number: "02",
    title: "I review it personally",
    body: "No automated scoring and no generic report — I read every request myself.",
  },
  {
    number: "03",
    title: "I look at the actual problem",
    body: "For website reviews I go through your current site: usability, conversion, mobile experience, customer journey, and technical quality.",
  },
  {
    number: "04",
    title: "You hear back either way",
    body: "Whether or not I think I’m the right fit, you get a direct reply from me with what I found. No obligation.",
  },
];

export function ContactProcess() {
  return (
    <div>
      <SectionHeading
        title="What happens next"
        lead="Every request comes straight to me — here is how it works, start to finish."
      />

      <ol className="mt-12 grid divide-y divide-border border-y border-border sm:mt-14 lg:grid-cols-4 lg:divide-x lg:divide-y-0">
        {STEPS.map((step) => (
          <li
            key={step.number}
            className="py-8 lg:px-7 lg:py-10 lg:first:pl-0 lg:last:pr-0"
          >
            <span className="text-sm font-semibold text-primary">
              {step.number}
            </span>
            <h3 className="mt-3 text-title font-semibold text-foreground">
              {step.title}
            </h3>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              {step.body}
            </p>
          </li>
        ))}
      </ol>

      <p className="mt-10 text-sm text-muted-foreground">
        Prefer email?{" "}
        <a
          href={`mailto:${siteConfig.email}`}
          className="font-medium text-primary underline decoration-border underline-offset-4 transition-colors hover:decoration-primary"
        >
          {siteConfig.email}
        </a>
      </p>
    </div>
  );
}
