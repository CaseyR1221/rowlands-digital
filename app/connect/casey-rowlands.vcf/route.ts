import { siteConfig } from "@/lib/site";

// Built once at build time from siteConfig, so the card never drifts from the site.
export const dynamic = "force-static";

// vCard 3.0 is the version both iOS Contacts and Android contact apps import reliably.
function escapeText(value: string) {
  return value.replace(/\\/g, "\\\\").replace(/([,;])/g, "\\$1");
}

export function GET() {
  const [firstName, ...rest] = siteConfig.founder.split(" ");
  const lastName = rest.join(" ");

  const card = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `N:${escapeText(lastName)};${escapeText(firstName)};;;`,
    `FN:${escapeText(siteConfig.founder)}`,
    `ORG:${escapeText(siteConfig.name)}`,
    `TITLE:${escapeText(siteConfig.founderTitle)}`,
    `EMAIL;TYPE=INTERNET,WORK:${siteConfig.email}`,
    `URL;TYPE=WORK:${siteConfig.url}`,
    // The item group lets iOS label the second URL; Android imports it as a website.
    `item1.URL:${siteConfig.linkedinUrl}`,
    "item1.X-ABLabel:LinkedIn",
    "END:VCARD",
  ].join("\r\n");

  return new Response(`${card}\r\n`, {
    headers: {
      "Content-Type": "text/vcard; charset=utf-8",
      "Content-Disposition": 'attachment; filename="casey-rowlands.vcf"',
    },
  });
}
