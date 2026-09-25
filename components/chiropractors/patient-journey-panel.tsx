const STAGES = [
  {
    label: "The patient finds your practice",
    body: "Search, maps, referrals, and word of mouth.",
  },
  {
    label: "The patient browses your offerings",
    body: "Services and conditions explained in plain language.",
  },
  {
    label: "The patient decides whether to trust it",
    body: "Doctor information, credentials, and reviews.",
  },
  {
    label: "An appointment is scheduled",
    body: "Books online or calls, on a phone or a desktop.",
  },
  {
    label: "The new patient shows up in your reporting",
    body: "The action is tracked so the practice can see it.",
  },
];

export function PatientJourneyPanel() {
  return (
    <div className="w-full max-w-md border border-border bg-surface p-6 sm:p-8 rounded-3xl">
      <p className="text-lg font-medium text-foreground">
        The path to a booked appointment
      </p>
      <p className="mt-1 text-sm text-destructive font-bold">
        Every step is a place a practice can gain or lose a patient.
      </p>

      <ol className="mt-6">
        {STAGES.map((stage, index) => (
          <li key={stage.label} className="flex gap-4 pb-5 last:pb-0">
            <div className="flex flex-col items-center" aria-hidden="true">
              <span className="mt-1.5 size-2 shrink-0 rounded-full bg-accent" />
              {index < STAGES.length - 1 ? (
                <span className="mt-1 w-px flex-1 bg-border" />
              ) : null}
            </div>
            <div>
              <p className="font-medium text-foreground">{stage.label}</p>
              <p className="mt-0.5 text-sm leading-relaxed text-muted-foreground">
                {stage.body}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
