import Link from "next/link";
import { cn } from "cn";

export function Wordmark({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn(
        "text-[0.9375rem] font-semibold tracking-tight text-foreground transition-colors hover:text-primary sm:text-base",
        className,
      )}
    >
      Rowlands<span className="font-normal text-muted-foreground"> Digital Works</span>
    </Link>
  );
}
