import { twMerge } from "tailwind-merge";

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
