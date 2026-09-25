import type { Metadata } from "next";

import { Capabilities } from "@/components/chiropractors/capabilities";
import { FinalCta } from "@/components/chiropractors/final-cta";
import { Hero } from "@/components/chiropractors/hero";
import { IndustryExperience } from "@/components/chiropractors/industry-experience";
import { PatientJourney } from "@/components/chiropractors/patient-journey";
import { PatientQuestions } from "@/components/chiropractors/patient-questions";
import { Process } from "@/components/chiropractors/process";
import { ProjectTypes } from "@/components/chiropractors/project-types";
import { WebsiteReviewCta } from "@/components/chiropractors/website-review-cta";
import { WhyWorkTogether } from "@/components/chiropractors/why-work-together";
import { siteConfig } from "@/lib/site";

const title = "Chiropractic Website Design & Development";

const description =
  "Web development for chiropractic practices, including website redesigns, booking and CRM integrations, analytics, local SEO foundations, and ongoing technical support.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/chiropractors",
  },
  openGraph: {
    url: "/chiropractors",
    title: `${title} | ${siteConfig.name}`,
    description,
  },
};

// Describes the web development service, not a healthcare service, and carries
// only facts this project already holds: no ratings, pricing, address or phone.
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: title,
  description,
  serviceType: "Web development for chiropractic practices",
  url: `${siteConfig.url}/chiropractors`,
  areaServed: siteConfig.areaServed,
  provider: {
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    email: siteConfig.email,
  },
};

export default function ChiropractorsPage() {
  return (
    <main id="main" className="flex-1">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema).replace(/</g, "\\u003c"),
        }}
      />
      <Hero />
      <PatientJourney />
      <Capabilities />
      <IndustryExperience />
      <PatientQuestions />
      <WebsiteReviewCta />
      <ProjectTypes />
      <Process />
      <WhyWorkTogether />
      <FinalCta />
    </main>
  );
}
