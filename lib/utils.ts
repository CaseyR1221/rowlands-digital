import { extendTailwindMerge } from "tailwind-merge";

/*
 * The fluid display scale lives in globals.css, so tailwind-merge has no way to
 * know `text-title` is a font size. Left unregistered it reads as a text color
 * and gets dropped whenever a colour appears later in the same `cn()` call.
 */
const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": [{ text: ["display", "headline", "title", "lead"] }],
    },
  },
});

type ClassValue =
  | string
  | number
  | boolean
  | null
  | undefined
  | ClassValue[]
  | Record<string, boolean | null | undefined>;

function classNames(...inputs: ClassValue[]): string {
  return inputs
    .flatMap((input) => {
      if (!input) return [];
      if (typeof input === "string" || typeof input === "number") {
        return [String(input)];
      }
      if (Array.isArray(input)) return [classNames(...input)];
      return Object.entries(input)
        .filter(([, value]) => Boolean(value))
        .map(([key]) => key);
    })
    .join(" ");
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(classNames(...inputs));
}
