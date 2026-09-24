import type { CSSProperties, ReactNode } from "react";
import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";

import type { ContactFormValues } from "@/lib/validation/contact";

import * as theme from "./theme";

const detailSection: CSSProperties = {
  margin: "0 0 16px",
};

const detailValue: CSSProperties = {
  color: theme.emailColors.foreground,
  fontSize: "16px",
  lineHeight: 1.5,
  margin: 0,
};

const detailsBody: CSSProperties = {
  ...detailValue,
  whiteSpace: "pre-wrap",
};

function Detail({ label, children }: { label: string; children: ReactNode }) {
  return (
    <Section style={detailSection}>
      <Text style={theme.label}>{label}</Text>
      <Text style={detailValue}>{children}</Text>
    </Section>
  );
}

export function ContactInquiryEmail({ values }: { values: ContactFormValues }) {
  return (
    <Html lang="en">
      <Head />
      <Preview>{`${values.inquiryType} from ${values.business}`}</Preview>
      <Body style={theme.body}>
        <Container style={theme.container}>
          <Text style={theme.eyebrow}>New Contact Inquiry</Text>
          <Heading style={theme.heading}>{values.inquiryType}</Heading>

          <Hr style={theme.hr} />

          <Detail label="Name">{values.name}</Detail>
          <Detail label="Business or Practice">{values.business}</Detail>
          <Detail label="Email">
            <Link href={`mailto:${values.email}`} style={theme.link}>
              {values.email}
            </Link>
          </Detail>
          {values.phone ? <Detail label="Phone">{values.phone}</Detail> : null}
          {values.website ? (
            <Detail label="Current Website">
              <Link href={values.website} style={theme.link}>
                {values.website}
              </Link>
            </Detail>
          ) : null}

          <Hr style={theme.hr} />

          <Text style={theme.label}>Project Details</Text>
          <Text style={detailsBody}>{values.details}</Text>
        </Container>
      </Body>
    </Html>
  );
}
