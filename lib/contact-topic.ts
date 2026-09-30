import type { InquiryType } from "@/lib/validation/contact";

/**
 * Maps a link's intent onto the contact form's "What can I help with?" option,
 * so a visitor who clicks a specific call to action doesn't have to restate
 * what they already told us by choosing that button.
 *
 * The slugs are part of the site's URLs — keep them stable, and add a new one
 * rather than renaming an existing one.
 */
const TOPIC_INQUIRY_TYPES = {
  "free-website-review": "Free Website Review",
  "website-redesign": "Website Redesign",
  "new-website": "New Website",
  "custom-development": "Custom Development / Integration",
  "ongoing-support": "Ongoing Technical Support",
} as const satisfies Record<string, InquiryType>;

export type ContactTopic = keyof typeof TOPIC_INQUIRY_TYPES;

export const CONTACT_TOPIC_PARAM = "topic";

/** The contact-page href that arrives with `topic` preselected. */
export function contactHref(topic: ContactTopic) {
  return `/contact?${CONTACT_TOPIC_PARAM}=${topic}`;
}

/**
 * Resolves a raw query value to an inquiry type. Anything unrecognised — a
 * stale link, a repeated param, a hand-edited URL — resolves to undefined and
 * simply leaves the field unselected.
 */
export function inquiryTypeFromTopic(
  value: string | string[] | undefined,
): InquiryType | undefined {
  if (typeof value !== "string") return undefined;
  return TOPIC_INQUIRY_TYPES[value as ContactTopic];
}
