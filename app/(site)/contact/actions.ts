"use server";

import { z } from "zod";

import {
  sendInquiryNotification,
  sendProspectConfirmation,
} from "@/lib/email/contact-emails";
import { siteConfig } from "@/lib/site";
import {
  contactFormSchema,
  type ContactFormState,
  type ContactFormValuesInput,
} from "@/lib/validation/contact";

const HONEYPOT_FIELD_NAME = "hp_company";

const GENERIC_FORM_ERROR =
  "Something went wrong while processing your request. Please review the form and try again.";

const DELIVERY_FORM_ERROR = `Something went wrong while sending your request. Please try again or email ${siteConfig.email} directly.`;

const FORM_FIELDS = [
  "name",
  "business",
  "email",
  "website",
  "inquiryType",
  "details",
  "phone",
] as const;

function readValues(formData: FormData): ContactFormValuesInput {
  const values = {} as ContactFormValuesInput;
  for (const field of FORM_FIELDS) {
    const value = formData.get(field);
    values[field] = typeof value === "string" ? value : "";
  }
  return values;
}

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const values = readValues(formData);

  const parsed = contactFormSchema.safeParse(values);

  if (!parsed.success) {
    const { fieldErrors } = z.flattenError(parsed.error);
    return {
      status: "error",
      fieldErrors,
      formError: GENERIC_FORM_ERROR,
      values,
    };
  }

  const success: ContactFormState = {
    status: "success",
    inquiryType: parsed.data.inquiryType,
    hasWebsite: Boolean(parsed.data.website),
  };

  const honeypotValue = formData.get(HONEYPOT_FIELD_NAME);
  if (typeof honeypotValue === "string" && honeypotValue.length > 0) {
    return success;
  }

  try {
    await sendInquiryNotification(parsed.data);
  } catch (error) {
    console.error("[contact] inquiry notification failed to send", error);
    return {
      status: "error",
      fieldErrors: {},
      formError: DELIVERY_FORM_ERROR,
      values,
    };
  }

  try {
    await sendProspectConfirmation(parsed.data);
  } catch (error) {
    console.error("[contact] confirmation email failed to send", error);
  }

  return success;
}
