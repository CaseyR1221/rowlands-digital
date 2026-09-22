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
      <h2 className="text-title font-semibold text-foreground">
        What happens next
      </h2>
      <p className="mt-3 leading-relaxed text-muted-foreground">
        Every request comes straight to me — here is how it works, start to
        finish.
      </p>

      {/* No bottom rule: the "Prefer email?" divider below closes the section,
          and two parallel rules would leave an empty band between them. */}
      <ol className="mt-8 divide-y divide-border border-t border-border">
        {STEPS.map((step) => (
          <li key={step.number} className="flex gap-5 py-6 sm:gap-7">
            {/* Fixed width so every title starts on the same axis — digit
                glyphs differ enough in width to leave the edge ragged. */}
            <span className="w-6 shrink-0 pt-0.5 text-sm font-semibold text-primary">
              {step.number}
            </span>
            <div>
              <h3 className="font-medium text-foreground">{step.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                {step.body}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
