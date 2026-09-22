export const siteConfig = {
  name: "Rowlands Digital Works",
  founder: "Casey Rowlands",
  email: "casey@rowlandsdigitalworks.com",
  url: "https://rowlandsdigitalworks.com",
  tagline: "Web development and digital solutions for growing service businesses.",
  description:
    "Rowlands Digital Works helps growing service businesses build better websites, custom digital solutions, integrations, and systems that support business growth.",
  areaServed: "Central Florida",
  locationLine: "Central Florida · Working with clients nationwide",
} as const;

export const mainNav = [
  { href: "/services", label: "Services" },
  { href: "/chiropractors", label: "Chiropractors" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;
