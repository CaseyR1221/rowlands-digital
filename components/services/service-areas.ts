import type { ContactTopic } from "@/lib/contact-topic";

/**
 * The four core service areas, shared by the overview cards, the detailed
 * sections below them, and the page's Service structured data. Keeping them in
 * one place means the numbering and anchors can never drift apart from the
 * sections they point at.
 */
export type ServiceArea = {
  id: string;
  number: string;
  title: string;
  descriptor: string;
  summary: string;
  body: string;
  /** Grouped capabilities: related items share a line rather than a bullet each. */
  work: string[];
  ctaLabel: string;
  /** Preselects this section's intent in the contact form. */
  ctaTopic: ContactTopic;
  /**
   * Brief for the custom image. Shown as a placeholder until `image` exists,
   * and again if the image ever fails to load.
   */
  imageConcept: string;
  /** Finished artwork for this section, once it has been made. 4:5 portrait. */
  image?: { src: string; alt: string };
};

export const SERVICE_AREAS: ServiceArea[] = [
  {
    id: "website-strategy-development",
    number: "01",
    title: "Website Strategy & Development",
    descriptor: "Build a stronger digital foundation from the start.",
    summary:
      "A new website planned and built around your customers and how the business actually runs.",
    body: "For businesses that need a new website, or are replacing one that no longer reflects the quality of the business. I handle the project from planning through launch, built around your customers rather than a prebuilt template.",
    work: [
      "Discovery, customer journeys, and information architecture",
      "Responsive web design",
      "Custom frontend development",
      "Content structure and CMS implementation",
      "Forms, booking, and lead capture",
      "Analytics and technical SEO",
      "Performance and accessibility",
      "Deployment and post-launch support",
    ],
    ctaLabel: "Discuss a Website Project",
    ctaTopic: "new-website",
    imageConcept: "Wireframe → finished desktop site → responsive mobile site",
    image: {
      src: "/services-website-strategy.jpg",
      alt: "Scattered content pieces being organized into a layered page structure, then assembled into a finished website",
    },
  },
  {
    id: "website-redesign-growth",
    number: "02",
    title: "Website Redesign & Growth",
    descriptor:
      "Improve the site you already have — or rebuild the parts holding the business back.",
    summary:
      "Targeted improvements or a full modernization of a site that still works but no longer performs.",
    body: "Established businesses often outgrow their websites gradually. The site still works, but the customer journey is unclear, the technology is hard to manage, or it no longer matches the business. Sometimes that calls for a rebuild; often targeted improvements are enough.",
    work: [
      "Website and UX review",
      "Conversion paths and calls to action",
      "Mobile experience improvements",
      "Navigation, service, and location-page structure",
      "Redesign and modernization",
      "Content migration and redirect strategy",
      "Performance, technical SEO, and conversion tracking",
      "CMS improvements and third-party integrations",
    ],
    ctaLabel: "Request a Website Review",
    ctaTopic: "website-redesign",
    imageConcept: "Before-and-after website modernization",
    image: {
      src: "/services-website-redesign.jpg",
      alt: "An outdated, faded website breaking apart and rebuilding into a modern site, with growth charts and analytics rising beside it",
    },
  },
  {
    id: "custom-development-integrations",
    number: "03",
    title: "Custom Development & Integrations",
    descriptor: "When the problem goes beyond a standard website.",
    summary:
      "Custom applications, internal tools, and connections between the systems a business already runs on.",
    body: "Sometimes the real issue is behind the pages: systems that don’t talk to each other, repetitive manual work, or a process no off-the-shelf tool handles well.",
    work: [
      "Custom web applications and CMS functionality",
      "Internal tools and dashboards",
      "API development and third-party integrations",
      "CRM, booking, and payment integrations",
      "Form and lead-routing workflows",
      "Automated email and SMS workflows",
      "Data synchronization and process automation",
      "AI-enabled workflows where they genuinely help",
    ],
    ctaLabel: "Discuss a Custom Solution",
    ctaTopic: "custom-development",
    imageConcept:
      "Connected system: website, CRM, booking, payments, analytics, APIs, and automation",
    image: {
      src: "/services-custom-development.jpg",
      alt: "A central custom application connected to a database, email, calendar, and location data on one side, and CRM and analytics tools on the other, with a checklist of API integration, custom functionality, third-party services, and automations",
    },
  },
  {
    id: "ongoing-technical-partnership",
    number: "04",
    title: "Fractional Technical Partnership",
    descriptor: "An experienced technical partner, without the full-time hire.",
    summary:
      "Ongoing improvements, troubleshooting, and technical ownership from someone who understands your website and systems.",
    body: "Platforms change, integrations break, and businesses evolve. As a fractional technical partner, I give your team direct access to someone who understands your technical environment and can take ownership of problems as they come up, without a full-time technical hire. It works for sites I built and for ones I didn’t.",
    work: [
      "Website maintenance and dependency updates",
      "Technical monitoring and troubleshooting",
      "Performance reviews and ongoing optimization",
      "Analytics and conversion-tracking support",
      "Small development requests and landing pages",
      "Integration and CMS support",
      "Technical recommendations, tool evaluation, and backlog planning",
      "Coordination with marketing teams and outside vendors",
    ],
    ctaLabel: "Talk About Fractional Support",
    ctaTopic: "ongoing-support",
    imageConcept: "Casey working on or providing ongoing technical support",
    image: {
      src: "/services-ongoing-partnership.jpg",
      alt: "A continuous improvement cycle surrounded by icons for monitoring, analytics, hosting, security, code, support, and updates",
    },
  },
];
