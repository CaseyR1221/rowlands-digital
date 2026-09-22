import type { Metadata } from "next";

import { Container } from "@/components/container";
import { ContactForm } from "@/components/contact/contact-form";
import { ContactIntro } from "@/components/contact/contact-intro";
import { ContactProcess } from "@/components/contact/contact-process";

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

export default function ContactPage() {
  return (
    <main id="main" className="flex-1">
      <section>
        <Container className="py-14 sm:py-20 lg:py-24">
          <div className="max-w-2xl">
            <ContactIntro />

            <div className="mt-10">
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>

      {/* Reads as the answer to "and then what?" — below the form before it is
          sent, and directly under the confirmation once it has been. */}
      <section className="border-t border-border">
        <Container className="py-16 sm:py-20 lg:py-24">
          <ContactProcess />
        </Container>
      </section>
    </main>
  );
}
