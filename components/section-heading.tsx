import { cn } from "cn";

/**
 * Eyebrow, heading and optional lead-in, sharing one measure and rhythm.
 * The eyebrow is marked by a short accent rule rather than tracked-out caps.
 */
export function SectionHeading({
  eyebrow,
  title,
  lead,
  as: Heading = "h2",
  className,
  children,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
  as?: "h2" | "h3";
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className={cn("max-w-2xl", className)}>
      {eyebrow ? (
        <p className="mb-5 flex items-center gap-3 text-sm font-medium text-primary">
          <span aria-hidden="true" className="h-px w-8 bg-accent" />
          {eyebrow}
        </p>
      ) : null}
      <Heading className="text-balance text-headline font-semibold text-foreground">
        {title}
      </Heading>
      {lead ? (
        <p className="mt-5 text-lead text-muted-foreground">{lead}</p>
      ) : null}
      {children}
    </div>
  );
}
