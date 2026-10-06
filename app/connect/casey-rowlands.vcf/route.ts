import { readFile } from "node:fs/promises";
import path from "node:path";

import { siteConfig } from "@/lib/site";

// Built once at build time from siteConfig, so the card never drifts from the site.
export const dynamic = "force-static";

// vCard 3.0 is the version both iOS Contacts and Android contact apps import reliably.
function escapeText(value: string) {
  return value.replace(/\\/g, "\\\\").replace(/([,;])/g, "\\$1");
}

// Lines longer than 75 octets must be folded: CRLF, then a single space before
// the continuation. Every line here is ASCII, so characters equal octets.
function foldLine(line: string) {
  const chunks = [line.slice(0, 75)];
  for (let i = 75; i < line.length; i += 74) {
    chunks.push(` ${line.slice(i, i + 74)}`);
  }
  return chunks.join("\r\n");
}

export async function GET() {
  // A 400px square crop of the site headshot, embedded rather than linked so
  // the photo is saved with the contact on both iOS and Android.
  const photo = await readFile(
    path.join(process.cwd(), "public/casey-rowlands-contact.jpg"),
  );

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
    `PHOTO;ENCODING=b;TYPE=JPEG:${photo.toString("base64")}`,
    "END:VCARD",
  ]
    .map(foldLine)
    .join("\r\n");

  return new Response(`${card}\r\n`, {
    headers: {
      "Content-Type": "text/vcard; charset=utf-8",
      "Content-Disposition": 'attachment; filename="casey-rowlands.vcf"',
    },
  });
}
