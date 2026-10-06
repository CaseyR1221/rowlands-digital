export const siteConfig = {
  name: "Rowlands Digital Works",
  founder: "Casey Rowlands",
  founderTitle: "Technical Partner",
  email: "casey@rowlandsdigitalworks.com",
  url: "https://rowlandsdigitalworks.com",
  linkedinUrl: "https://www.linkedin.com/in/casey-rowlands-0311/",
  tagline:
    "Websites, integrations, and ongoing technical partnership for growing service businesses.",
  description:
    "Rowlands Digital Works is an independent technical partner for growing service businesses, helping with websites, custom digital solutions, integrations, and the systems that support business growth.",
  areaServed: "Central Florida",
  locationLine: "Central Florida · Working with clients nationwide",
} as const;

export const mainNav = [
  { href: "/services", label: "Services" },
  { href: "/chiropractors", label: "Chiropractors" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;
