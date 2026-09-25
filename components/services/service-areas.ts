import type { ContactTopic } from "@/lib/contact-topic";

/**
 * The four core service areas, shared by the hero index, the overview section,
 * the detailed sections below them, and the page's Service structured data.
 * Keeping them in one place means the numbering and anchors can never drift
 * apart from the sections they point at.
 */
export type ServiceArea = {
  id: string;
  number: string;
  title: string;
  descriptor: string;
  summary: string;
  body: string;
  workLabel: string;
  work: string[];
  goodFit: string;
  ctaLabel: string;
  /** Preselects this section's intent in the contact form. */
  ctaTopic: ContactTopic;
};

export const SERVICE_AREAS: ServiceArea[] = [
  {
    id: "website-strategy-development",
    number: "01",
    title: "Website Strategy & Development",
    descriptor: "Build a stronger digital foundation from the start.",
    summary:
      "A new website planned, designed, and built around your customers and how the business actually runs.",
    body: "For businesses that need a new website or are replacing something that no longer represents the quality of the business, Rowlands Digital Works handles the project from planning through launch.",
    workLabel: "Focus areas may include",
    work: [
      "Discovery and project strategy",
      "Information architecture",
      "Customer journey planning",
      "Responsive design",
      "Custom frontend development",
      "Content structure",
      "CMS implementation where appropriate",
      "Contact and lead forms",
      "Booking and scheduling integrations",
      "Analytics setup",
      "Technical SEO foundations",
      "Accessibility fundamentals",
      "Performance optimization",
      "Launch and deployment",
      "Post-launch support",
    ],
    goodFit:
      "businesses that need a new professional website and want more than a prebuilt template.",
    ctaLabel: "Discuss a Website Project",
    ctaTopic: "new-website",
  },
  {
    id: "website-redesign-growth",
    number: "02",
    title: "Website Redesign & Growth",
    descriptor:
      "Improve the site you already have — or rebuild the parts holding the business back.",
    summary:
      "Targeted improvements or a full modernization of a site that still works but no longer performs.",
    body: "Established businesses often outgrow their websites gradually. The site may still function, but the customer journey becomes unclear, the technology becomes difficult to manage, or the experience no longer matches the business.",
    workLabel: "Potential work may include",
    work: [
      "Website and UX review",
      "Conversion-path improvements",
      "Stronger calls to action",
      "Mobile experience improvements",
      "Navigation and information architecture",
      "Redesign and modernization",
      "Service and location-page structure",
      "Content migration",
      "Performance improvements",
      "Technical SEO",
      "Analytics and conversion tracking",
      "Redirect strategy",
      "CMS improvements",
      "Third-party integrations",
    ],
    goodFit:
      "businesses with an existing site that is technically functional but no longer effective.",
    ctaLabel: "Request a Website Review",
    ctaTopic: "free-website-review",
  },
  {
    id: "custom-development-integrations",
    number: "03",
    title: "Custom Development & Integrations",
    descriptor: "When the problem goes beyond a standard website.",
    summary:
      "Custom applications, internal tools, and connections between the systems a business already runs on.",
    body: "Sometimes the real issue is behind the pages: systems that do not communicate, repetitive manual work, missing functionality, or a process that cannot be handled well by an off-the-shelf tool.",
    workLabel: "Potential work may include",
    work: [
      "Custom web applications",
      "Internal tools",
      "Dashboards",
      "API development",
      "Third-party API integrations",
      "CRM integrations",
      "Booking-system integrations",
      "Payment integrations",
      "Form and lead-routing workflows",
      "Automated email or SMS workflows",
      "Data synchronization",
      "Custom CMS functionality",
      "Business-process automation",
      "AI-enabled workflows where they genuinely improve the process",
    ],
    goodFit:
      "businesses that have a clear operational or technical problem standard website platforms cannot solve cleanly.",
    ctaLabel: "Discuss a Custom Solution",
    ctaTopic: "custom-development",
  },
  {
    id: "ongoing-technical-partnership",
    number: "04",
    title: "Ongoing Technical Partnership",
    descriptor: "Someone technical to call after the project launches.",
    summary:
      "Continued maintenance, improvements, and technical guidance from the developer who built the work.",
    body: "A website or digital system is rarely finished forever. Platforms change, integrations break, campaigns create new needs, and businesses evolve. Ongoing support gives clients direct access to someone who already understands the technical environment.",
    workLabel: "Potential support may include",
    work: [
      "Website maintenance",
      "Dependency updates",
      "Technical monitoring",
      "Performance reviews",
      "Analytics support",
      "Conversion tracking",
      "Small development requests",
      "Landing pages",
      "Integrations",
      "Troubleshooting",
      "CMS support",
      "Technical consulting",
      "Ongoing optimization",
      "Development backlog support",
    ],
    goodFit:
      "businesses that rely on their website or digital systems and want ongoing technical ownership without hiring an internal developer.",
    ctaLabel: "Ask About Ongoing Support",
    ctaTopic: "ongoing-support",
  },
];
