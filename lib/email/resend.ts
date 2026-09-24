import { Resend } from "resend";

import { siteConfig } from "@/lib/site";

export const INQUIRY_RECIPIENT = siteConfig.email;
export const CONFIRMATION_REPLY_TO = siteConfig.email;

function requireEnv(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
}

let client: Resend | undefined;

// Credentials are read when an email is actually sent
export function getResendClient(): Resend {
  client ??= new Resend(requireEnv("RESEND_API_KEY"));
  return client;
}

export function getInquiryFromAddress(): string {
  return `${siteConfig.name} Website <${requireEnv("RESEND_FROM_EMAIL")}>`;
}

export function getConfirmationFromAddress(): string {
  return `Casey at ${siteConfig.name} <${requireEnv("RESEND_CONFIRMATION_FROM_EMAIL")}>`;
}
