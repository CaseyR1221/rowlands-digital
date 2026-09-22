"use server";

import { z } from "zod";

import {
  contactFormSchema,
  type ContactFormState,
  type ContactFormValuesInput,
} from "@/lib/validation/contact";

const HONEYPOT_FIELD_NAME = "hp_company";

const GENERIC_FORM_ERROR =
  "Something went wrong while processing your request. Please review the form and try again.";

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

  const honeypotValue = formData.get(HONEYPOT_FIELD_NAME);
  if (typeof honeypotValue === "string" && honeypotValue.length > 0) {
    // Likely an automated submission. Return the same success response a real
    // visitor would get, without processing further, so the sender gets no
    // signal that anything was different.
    return { status: "success", inquiryType: parsed.data.inquiryType };
  }

  if (process.env.NODE_ENV === "development") {
    console.log("[contact] validated submission", parsed.data);
  }

  // Email delivery service — NEXT TASK.
  // Once Resend is configured, this is where the validated submission gets
  // handed off, and success should only be returned after delivery succeeds.

  return { status: "success", inquiryType: parsed.data.inquiryType };
}
