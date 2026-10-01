import type { Metadata } from "next";

import { ChiropracticExperience } from "@/components/about/chiropractic-experience";
import { DirectRelationship } from "@/components/about/direct-relationship";
import { Experience } from "@/components/about/experience";
import { FinalCta } from "@/components/about/final-cta";
import { Hero } from "@/components/about/hero";
import { Principles } from "@/components/about/principles";
import { Story } from "@/components/about/story";
import { siteConfig } from "@/lib/site";

const title = "About Casey Rowlands";

const description =
  "Meet Casey Rowlands, founder and developer at Rowlands Digital Works. Learn about the experience and approach behind web development, integrations, and digital solutions for growing businesses.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    type: "profile",
    url: "/about",
    title: `${title} | ${siteConfig.name}`,
    description,
  },
};

// Only facts this project already holds: name, role, the business, and the
// published headshot. No address, credentials, dates, or social profiles.
const profileSchema = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  url: `${siteConfig.url}/about`,
  mainEntity: {
    "@type": "Person",
    name: siteConfig.founder,
    jobTitle: "Founder & Developer",
    image: `${siteConfig.url}/casey-rowlands.jpg`,
    worksFor: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
  },
};

export default function AboutPage() {
  return (
    <main id="main" className="flex-1">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(profileSchema).replace(/</g, "\\u003c"),
        }}
      />
      <Hero />
      <Story />
      <Experience />
      <Principles />
      <DirectRelationship />
      <ChiropracticExperience />
      <FinalCta />
    </main>
  );
}
