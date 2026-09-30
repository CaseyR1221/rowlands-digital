import type { Metadata } from "next";

import { ChiropracticCallout } from "@/components/services/chiropractic-callout";
import { FinalCta } from "@/components/services/final-cta";
import { Hero } from "@/components/services/hero";
import { HowServicesConnect } from "@/components/services/how-services-connect";
import { Process } from "@/components/services/process";
import { ProjectStandards } from "@/components/services/project-standards";
import { SERVICE_AREAS } from "@/components/services/service-areas";
import { ServiceOverview } from "@/components/services/service-overview";
import { ServiceSection } from "@/components/services/service-section";
import { WebsiteReviewCta } from "@/components/services/website-review-cta";
import { siteConfig } from "@/lib/site";

const title = "Web Development Services";

const description =
  "Website design and development, redesigns, custom web applications, integrations, automation, analytics, and ongoing technical support for growing service businesses.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    url: "/services",
    title: `${title} | ${siteConfig.name}`,
    description,
  },
};

// The catalog mirrors the four service sections on the page and carries only
// their published descriptions: no pricing, ratings, address or phone.
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: `${title} | ${siteConfig.name}`,
  description,
  serviceType: "Web development and digital solutions for service businesses",
  url: `${siteConfig.url}/services`,
  areaServed: siteConfig.areaServed,
  provider: {
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    email: siteConfig.email,
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Service areas",
    itemListElement: SERVICE_AREAS.map((area) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: area.title,
        description: area.body,
        url: `${siteConfig.url}/services#${area.id}`,
      },
    })),
  },
};

export default function ServicesPage() {
  return (
    <main id="main" className="flex-1">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema).replace(/</g, "\\u003c"),
        }}
      />
      <Hero />
      <ServiceOverview />
      {SERVICE_AREAS.map((area, index) => (
        <ServiceSection key={area.id} area={area} index={index} />
      ))}
      <HowServicesConnect />
      <ProjectStandards />
      <Process />
      <ChiropracticCallout />
      <WebsiteReviewCta />
      <FinalCta />
    </main>
  );
}
