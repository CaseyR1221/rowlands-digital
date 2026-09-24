import { ContactConfirmationEmail } from "@/emails/contact-confirmation-email";
import { ContactInquiryEmail } from "@/emails/contact-inquiry-email";
import {
  CONFIRMATION_REPLY_TO,
  INQUIRY_RECIPIENT,
  getConfirmationFromAddress,
  getInquiryFromAddress,
  getResendClient,
} from "@/lib/email/resend";
import { siteConfig } from "@/lib/site";
import type { ContactFormValues, InquiryType } from "@/lib/validation/contact";

const SUBJECT_LABELS: Record<InquiryType, string> = {
  "Free Website Review": "Website Review Request",
  "Website Redesign": "Website Redesign Inquiry",
  "New Website": "New Website Inquiry",
  "Custom Development / Integration": "Custom Development Inquiry",
  "Ongoing Technical Support": "Technical Support Inquiry",
  "Something Else": "General Inquiry",
};

export async function sendInquiryNotification(
  values: ContactFormValues,
): Promise<void> {
  const { error } = await getResendClient().emails.send({
    from: getInquiryFromAddress(),
    to: INQUIRY_RECIPIENT,
    replyTo: values.email,
    subject: `${SUBJECT_LABELS[values.inquiryType]} — ${values.business}`,
    react: <ContactInquiryEmail values={values} />,
  });

  if (error) {
    throw new Error(
      `Resend rejected the inquiry notification (${error.name}): ${error.message}`,
    );
  }
}

export async function sendProspectConfirmation(
  values: ContactFormValues,
): Promise<void> {
  const { error } = await getResendClient().emails.send({
    from: getConfirmationFromAddress(),
    to: values.email,
    replyTo: CONFIRMATION_REPLY_TO,
    subject: `Thanks for reaching out to ${siteConfig.name}`,
    react: <ContactConfirmationEmail values={values} />,
  });

  if (error) {
    throw new Error(
      `Resend rejected the confirmation email (${error.name}): ${error.message}`,
    );
  }
}
