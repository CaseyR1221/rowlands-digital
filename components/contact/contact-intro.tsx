export function ContactIntro() {
  return (
    <div>
      <p className="flex items-center gap-3 text-sm font-medium text-primary">
        <span aria-hidden="true" className="h-px w-8 bg-accent" />
        Start a Conversation
      </p>

      <h1 className="mt-5 text-balance text-headline font-semibold text-foreground">
        Let&rsquo;s talk about your needs.
      </h1>

      <div className="mt-6 space-y-5 text-lead text-muted-foreground">
        <p>
          Whether you need a stronger website, a custom digital solution, or
          simply want a second opinion on your current site, tell me a little
          about what you&rsquo;re working with.
        </p>
        <p>
          There&rsquo;s no intake process and no qualifying call to get past.
          Send as much or as little detail as you have — the more specific you
          can be about what isn&rsquo;t working, the more useful my response
          will be.
        </p>
      </div>

      <p className="mt-6 border-t border-border pt-6 text-sm leading-relaxed text-muted-foreground">
        You&rsquo;ll hear directly from Casey — no sales team, no
        account-manager handoff, and a reply either way.
      </p>
    </div>
  );
}
