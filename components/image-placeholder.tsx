import { cn } from "@/lib/utils";

/**
 * Reserves the space for a custom image that hasn't been produced yet, at the
 * aspect ratio the final artwork should be exported at. The concept text is
 * there for whoever creates the image; it's hidden from assistive technology
 * because it describes a future asset rather than page content.
 *
 * Swap each instance for `next/image` once the artwork exists.
 */
export function ImagePlaceholder({
  concept,
  className,
}: {
  concept: string;
  className?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "flex w-full flex-col items-center justify-center gap-2 rounded-2xl border border-dashed border-accent/40 bg-surface/60 p-6 text-center",
        className,
      )}
    >
      <span className="text-xs font-medium tracking-wide text-accent uppercase">
        Custom image
      </span>
      <span className="max-w-xs text-sm leading-relaxed text-muted-foreground">
        {concept}
      </span>
    </div>
  );
}
