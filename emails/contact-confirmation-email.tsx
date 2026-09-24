import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Link,
  Preview,
  Text,
} from "@react-email/components";

import { siteConfig } from "@/lib/site";
import {
  FREE_WEBSITE_REVIEW_INQUIRY,
  type ContactFormValues,
} from "@/lib/validation/contact";

import * as theme from "./theme";

const domain = siteConfig.url.replace(/^https?:\/\//, "");

export function ContactConfirmationEmail({
  values,
}: {
  values: ContactFormValues;
}) {
  const firstName = values.name.split(/\s+/)[0];

  return (
    <Html lang="en">
      <Head />
      <Preview>{`Thanks for reaching out to ${siteConfig.name}`}</Preview>
      <Body style={theme.body}>
        <Container style={theme.container}>
          <Text style={theme.paragraph}>Hi {firstName},</Text>

          <Text style={theme.paragraph}>
            Thanks for reaching out to {siteConfig.name}. I received your
            request and will review the details you sent.
          </Text>

          {values.inquiryType === FREE_WEBSITE_REVIEW_INQUIRY ? (
            <Text style={theme.paragraph}>
              I&rsquo;ll take a look at your current website before responding
              so I can come back with something useful.
            </Text>
          ) : null}

          <Text style={theme.paragraph}>You&rsquo;ll hear directly from me.</Text>

          <Hr style={theme.hr} />

          <Text style={theme.footer}>
            {siteConfig.founder}
            <br />
            Founder &amp; Web Developer
            <br />
            {siteConfig.name}
            <br />
            <Link href={siteConfig.url} style={theme.link}>
              {domain}
            </Link>
          </Text>
        </Container>
      </Body>
    </Html>
  );
}
