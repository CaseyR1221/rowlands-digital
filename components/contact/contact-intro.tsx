export function ContactIntro() {
  return (
    <div>
      <p className="flex items-center gap-3 text-sm font-medium text-primary">
        <span aria-hidden="true" className="h-px w-8 bg-accent" />
        Start a Conversation
      </p>

      <h1 className="mt-5 text-balance text-headline font-semibold text-foreground">
        Let&rsquo;s talk about what&rsquo;s not working.
      </h1>

      <p className="mt-5 max-w-xl text-lead text-muted-foreground">
        Whether you need a stronger website, a custom digital solution, or
        simply want a second opinion on your current site, tell me a little
        about what you&rsquo;re working with.
      </p>

      <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
        You&rsquo;ll hear directly from Casey — no sales team or
        account-manager handoff.
      </p>
    </div>
  );
}
