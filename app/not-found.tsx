import Link from "next/link";

import { Container } from "@/components/container";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { Button } from "@/components/ui/button";

// Unmatched URLs render under the root layout, outside the (site) group, so
// the header and footer are added here to keep visitors oriented.
export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main id="main" className="flex-1">
        <Container className="py-20 sm:py-28">
          <p className="text-sm font-medium text-primary">404</p>
          <h1 className="mt-4 text-headline font-semibold text-foreground">
            This page could not be found.
          </h1>
          <div className="mt-8">
            <Button asChild size="lg">
              <Link href="/">Back to Home</Link>
            </Button>
          </div>
        </Container>
      </main>
      <SiteFooter />
    </>
  );
}
