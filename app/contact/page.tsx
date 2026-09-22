import type { Metadata } from "next";

import { Container } from "@/components/container";
import { ContactForm } from "@/components/contact/contact-form";
import { ContactIntro } from "@/components/contact/contact-intro";
import { ContactSidebar } from "@/components/contact/contact-sidebar";

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
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <ContactIntro />
              <div className="mt-10">
                <ContactForm />
              </div>
            </div>

            <div className="lg:col-span-5">
              <ContactSidebar />
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
