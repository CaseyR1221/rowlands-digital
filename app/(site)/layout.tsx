import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";

/*
 * Marketing pages share the full header and footer. Routes outside this group
 * (the /connect business card) render without them.
 */
export default function SiteLayout({ children }: LayoutProps<"/">) {
  return (
    <>
      <SiteHeader />
      {children}
      <SiteFooter />
    </>
  );
}
