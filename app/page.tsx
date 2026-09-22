import { Hero } from "@/components/home/hero";
import { Positioning } from "@/components/home/positioning";
import { ServicesOverview } from "@/components/home/services-overview";
import { IndustryExperience } from "@/components/home/industry-experience";
import { WhyWorkTogether } from "@/components/home/why-work-together";
import { FounderSection } from "@/components/home/founder-section";
import { Process } from "@/components/home/process";
import { WebsiteReviewCta } from "@/components/home/website-review-cta";
import { FinalCta } from "@/components/home/final-cta";
import { siteConfig } from "@/lib/site";

// Only facts that exist in this project: no address, phone, reviews,
// founding date, or social profiles.
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  url: siteConfig.url,
  description: siteConfig.description,
  email: siteConfig.email,
  founder: {
    "@type": "Person",
    name: siteConfig.founder,
  },
  areaServed: siteConfig.areaServed,
};

export default function HomePage() {
  return (
    <main id="main" className="flex-1">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema).replace(/</g, "\\u003c"),
        }}
      />
      <Hero />
      <Positioning />
      <ServicesOverview />
      <IndustryExperience />
      <WhyWorkTogether />
      <FounderSection />
      <Process />
      <WebsiteReviewCta />
      <FinalCta />
    </main>
  );
}
