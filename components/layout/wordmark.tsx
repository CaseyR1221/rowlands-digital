import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";
import logo from "@/public/logo.png";

export function Wordmark({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn(
        "shrink-0 transition-opacity hover:opacity-80",
        className,
      )}
    >
      <Image
        src={logo}
        alt="Rowlands Digital Works"
        priority
        className="h-10 w-auto lg:h-12"
      />
    </Link>
  );
}
