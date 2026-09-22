import { siteConfig } from "@/lib/site";

const STEPS = [
  {
    number: "01",
    title: "I review your request",
    body: "No automated scoring or generic report.",
  },
  {
    number: "02",
    title: "I look at the actual problem",
    body: "For website reviews, I'll focus on areas such as usability, conversion, mobile experience, patient/customer journey, and technical quality.",
  },
  {
    number: "03",
    title: "We decide whether it makes sense to talk",
    body: "If I think I can help, we can schedule a short conversation to discuss the next step.",
  },
];

export function ContactSidebar() {
  return (
    <div className="space-y-10">
      <div>
        <h2 className="text-title font-semibold text-foreground">
          What happens next
        </h2>
        <p className="mt-3 leading-relaxed text-muted-foreground">
          I&rsquo;ll review your message personally and respond directly. If
          you&rsquo;re requesting a website review, I&rsquo;ll take a look at
          your current site and identify a few of the highest-impact
          opportunities before we talk.
        </p>

        <ol className="mt-6 space-y-6">
          {STEPS.map((step) => (
            <li key={step.number}>
              <span className="text-sm font-semibold text-primary">
                {step.number}
              </span>
              <h3 className="mt-1 font-medium text-foreground">{step.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                {step.body}
              </p>
            </li>
          ))}
        </ol>

        <p className="mt-6 border-t border-border pt-6 text-sm leading-relaxed text-muted-foreground">
          No obligation. No sales team. Just a direct conversation about what
          could work better.
        </p>
      </div>

      <div className="border border-border bg-surface p-6">
        <h2 className="text-sm font-medium text-foreground">Prefer email?</h2>
        <a
          href={`mailto:${siteConfig.email}`}
          className="mt-2 block text-lg font-medium text-primary transition-colors hover:text-primary-hover"
        >
          {siteConfig.email}
        </a>
      </div>
    </div>
  );
}
