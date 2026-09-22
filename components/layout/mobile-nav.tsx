"use client";

import { useState } from "react";
import Link from "next/link";
import { MenuIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { mainNav, siteConfig } from "@/lib/site";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="-mr-1 size-10 lg:hidden">
          <MenuIcon className="size-5" />
          <span className="sr-only">Open menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="gap-0 data-[side=right]:w-full sm:data-[side=right]:max-w-sm">
        <SheetHeader className="border-b border-border px-5 py-5">
          <SheetTitle className="text-left text-base">Menu</SheetTitle>
        </SheetHeader>

        <nav aria-label="Site" className="flex flex-col px-5 py-2">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="border-b border-border py-4 text-lg font-medium text-foreground transition-colors last:border-b-0 hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="mt-auto border-t border-border px-5 py-6">
          <Button asChild size="xl" className="w-full">
            <Link href="/contact" onClick={() => setOpen(false)}>
              Request a Website Review
            </Link>
          </Button>
          <a
            href={`mailto:${siteConfig.email}`}
            className="mt-4 block text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            {siteConfig.email}
          </a>
        </div>
      </SheetContent>
    </Sheet>
  );
}
