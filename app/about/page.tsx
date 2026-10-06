import type { Metadata } from "next";

import { ChiropracticExperience } from "@/components/about/chiropractic-experience";
import { DirectRelationship } from "@/components/about/direct-relationship";
import { Experience } from "@/components/about/experience";
import { FinalCta } from "@/components/about/final-cta";
import { FractionalPartnership } from "@/components/about/fractional-partnership";
import { Hero } from "@/components/about/hero";
import { Principles } from "@/components/about/principles";
import { Story } from "@/components/about/story";
import { siteConfig } from "@/lib/site";

const title = "About Casey Rowlands";

const description =
  "Meet Casey Rowlands, full-stack developer and founder of Rowlands Digital Works. Learn how Casey works as a technical partner on websites, integrations, and digital systems for growing businesses.";

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

// Only facts this project already holds: name, role, the business, the
// published headshot, and the LinkedIn profile. No address, credentials, or dates.
const profileSchema = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  url: `${siteConfig.url}/about`,
  mainEntity: {
    "@type": "Person",
    name: siteConfig.founder,
    jobTitle: "Founder & Developer",
    image: `${siteConfig.url}/casey-rowlands.jpg`,
    sameAs: [siteConfig.linkedinUrl],
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
      <FractionalPartnership />
      <FinalCta />
    </main>
  );
}
