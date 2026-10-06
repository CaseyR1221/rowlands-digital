import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Globe, Mail, UserRoundPlus } from "lucide-react";

import { LinkedInIcon } from "@/components/linkedin-icon";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";
import headshot from "@/public/casey-rowlands.jpg";
import logo from "@/public/logo.png";

const title = `${siteConfig.founder} | ${siteConfig.name}`;

const description = `Connect with ${siteConfig.founder}, ${siteConfig.founderTitle} and founder of ${siteConfig.name}.`;

export const metadata: Metadata = {
  title: siteConfig.founder,
  description,
  alternates: {
    canonical: "/connect",
  },
  openGraph: {
    type: "profile",
    url: "/connect",
    title,
    description,
  },
};

const secondaryLinkClass =
  "inline-flex min-h-11 items-center gap-2 rounded-md px-3 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground";

/*
 * The digital business card behind the QR code. It sits outside the (site)
 * route group so nothing competes with the contact actions: no header,
 * navigation or footer.
 */
export default function ConnectPage() {
  return (
    <main
      id="main"
      className="flex flex-1 items-center justify-center px-4 py-8 sm:px-6 sm:py-16"
    >
      <div className="w-full max-w-sm">
        <Link
          href="/"
          className="mx-auto block w-fit transition-opacity hover:opacity-80"
        >
          <Image
            src={logo}
            alt="Rowlands Digital Works"
            loading="eager"
            className="h-12 w-auto sm:h-14"
          />
        </Link>

        <div className="mt-5 rounded-2xl border border-border bg-surface px-5 pt-8 pb-6 text-center sm:mt-6 sm:px-8 sm:pt-10 sm:pb-8">
          <div className="relative mx-auto size-28 overflow-hidden rounded-full border border-border bg-muted sm:size-32">
            {/* Scaled toward the face so the small circle reads as a portrait
                rather than a distant half-body shot. */}
            <Image
              src={headshot}
              alt="Portrait of Casey Rowlands"
              fill
              sizes="176px"
              loading="eager"
              fetchPriority="high"
              className="origin-[52%_26%] scale-[1.4] object-cover"
            />
          </div>

          <h1 className="mt-5 text-3xl font-semibold tracking-tight text-foreground">
            {siteConfig.founder}
          </h1>
          <p className="mt-1.5 font-medium text-primary">
            {siteConfig.founderTitle}
          </p>
          <p className="text-sm text-muted-foreground">{siteConfig.name}</p>

          <p className="mx-auto mt-5 max-w-76 text-[0.9375rem] leading-relaxed text-pretty text-muted-foreground">
            Websites, integrations, and ongoing technical support for
            businesses that need technology to work for them.
          </p>

          <div className="mt-7 grid gap-3">
            {/* A plain anchor, not <Link>: the vCard is a file response. No
                `download` attribute, so iOS opens its Add Contact sheet
                instead of saving the file to Downloads. */}
            <Button asChild size="xl" className="h-14 w-full text-base">
              <a href="/connect/casey-rowlands.vcf">
                <UserRoundPlus className="size-5" />
                Save Contact
              </a>
            </Button>
            <Button
              asChild
              size="xl"
              variant="outline"
              className="h-14 w-full text-base"
            >
              <a href={`mailto:${siteConfig.email}`}>
                <Mail className="size-5" />
                Email Casey
              </a>
            </Button>
          </div>
        </div>

        <ul className="mt-5 flex flex-wrap items-center justify-center gap-x-2 gap-y-1">
          <li>
            <Link href="/" className={secondaryLinkClass}>
              <Globe aria-hidden="true" className="size-4" />
              Visit Website
            </Link>
          </li>
          <li className="flex items-center before:mr-2 before:h-4 before:w-px before:bg-border before:content-['']">
            <a
              href={siteConfig.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={secondaryLinkClass}
            >
              <LinkedInIcon className="size-4" />
              LinkedIn
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          </li>
        </ul>

        <p className="mx-auto mt-5 max-w-xs text-center text-[0.8125rem] leading-relaxed text-balance text-muted-foreground">
          Experienced supporting chiropractic, wellness, and growing service
          businesses with their web and technology needs.
        </p>
      </div>
    </main>
  );
}
