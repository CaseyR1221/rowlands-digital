import { Hexagon } from "lucide-react";

/**
 * Bullet for the site's capability lists. The box is exactly one line tall,
 * so the hexagon stays centered on an item's first line however far the text
 * wraps. Use inside a `flex items-start` list item.
 */
export function ListMarker() {
  return (
    <span aria-hidden="true" className="flex h-lh shrink-0 items-center">
      <Hexagon className="size-3.5 text-accent" />
    </span>
  );
}
