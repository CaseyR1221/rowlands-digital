import type { Metadata } from "next";

import { Container } from "@/components/container";
import { ContactForm } from "@/components/contact/contact-form";
import { ContactIntro } from "@/components/contact/contact-intro";
import { ContactProcess } from "@/components/contact/contact-process";
import {
  CONTACT_TOPIC_PARAM,
  inquiryTypeFromTopic,
} from "@/lib/contact-topic";
import { siteConfig } from "@/lib/site";

const description =
  "Contact Rowlands Digital Works to request a free website review or discuss website development, custom digital solutions, integrations, and ongoing technical support.";

export const metadata: Metadata = {
  title: "Contact",
  description,
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    url: "/contact",
    title: "Contact | Rowlands Digital Works",
    description,
  },
};

// Reading the query string opts this route into dynamic rendering. That is
// the point: the preselected inquiry type ships in the server-rendered HTML
// instead of being applied after hydration, and the page fetches nothing, so
// rendering it per request costs essentially nothing.
export default async function ContactPage({
  searchParams,
}: PageProps<"/contact">) {
  const defaultInquiryType = inquiryTypeFromTopic(
    (await searchParams)[CONTACT_TOPIC_PARAM],
  );

  return (
    <main id="main" className="flex-1">
      <section>
        <Container className="py-14 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-3xl">
            <ContactIntro />

            <div className="mt-12">
              {/* The process only appears once the form is sent, so it reaches
                  the person who actually submitted rather than competing with
                  the form for attention beforehand. */}
              <ContactForm
                defaultInquiryType={defaultInquiryType}
                whatHappensNext={<ContactProcess />}
              />
            </div>

            <p className="mt-12 border-t border-border pt-8 text-sm text-muted-foreground">
              Prefer email?{" "}
              <a
                href={`mailto:${siteConfig.email}`}
                className="font-medium text-primary underline decoration-border underline-offset-4 transition-colors hover:decoration-primary"
              >
                {siteConfig.email}
              </a>
            </p>
          </div>
        </Container>
      </section>
    </main>
  );
}
