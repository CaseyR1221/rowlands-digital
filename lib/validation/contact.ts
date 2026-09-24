import { z } from "zod";

export const inquiryTypes = [
  "Free Website Review",
  "Website Redesign",
  "New Website",
  "Custom Development / Integration",
  "Ongoing Technical Support",
  "Something Else",
] as const;

export type InquiryType = (typeof inquiryTypes)[number];

const trimIfString = (value: unknown) =>
  typeof value === "string" ? value.trim() : value;

const trimToUndefinedIfEmpty = (value: unknown) => {
  const trimmed = trimIfString(value);
  return trimmed === "" ? undefined : trimmed;
};

export const FREE_WEBSITE_REVIEW_INQUIRY: InquiryType = "Free Website Review";
export const WEBSITE_REDESIGN_INQUIRY: InquiryType = "Website Redesign";

export const WEBSITE_REQUIRED_INQUIRY_TYPES: readonly string[] = [
  FREE_WEBSITE_REVIEW_INQUIRY,
  WEBSITE_REDESIGN_INQUIRY,
];

export const contactFormSchema = z
  .object({
    name: z.preprocess(
      trimIfString,
      z.string().min(2, "Enter your name.").max(120, "That name is too long."),
    ),
    business: z.preprocess(
      trimIfString,
      z
        .string()
        .min(2, "Enter your business or practice name.")
        .max(160, "That name is too long."),
    ),
    email: z.preprocess(
      trimIfString,
      z.email("Enter a valid email address.").max(254, "That email is too long."),
    ),
    website: z.preprocess(
      trimToUndefinedIfEmpty,
      z
        .url({
          // Anything but http(s) — javascript:, mailto:, ftp: — would otherwise
          // be captured here and later rendered as a link in a notification email.
          protocol: /^https?$/,
          error: "Enter a valid website URL, including https://.",
        })
        .max(300, "That URL is too long.")
        .optional(),
    ),
    inquiryType: z.enum(inquiryTypes, {
      error: "Choose what you'd like help with.",
    }),
    details: z.preprocess(
      trimIfString,
      z
        .string()
        .min(
          20,
          "Add a bit more detail (at least 20 characters) so I know where to start.",
        )
        .max(
          4000,
          "That's a lot of detail — please trim it to 4000 characters or fewer.",
        ),
    ),
    phone: z.preprocess(
      trimToUndefinedIfEmpty,
      z
        .string()
        .regex(/^[0-9+()./\-\s]{7,20}$/, "Enter a valid phone number.")
        .optional(),
    ),
  })
  .superRefine((values, ctx) => {
    if (
      WEBSITE_REQUIRED_INQUIRY_TYPES.includes(values.inquiryType) &&
      !values.website
    ) {
      ctx.addIssue({
        code: "custom",
        path: ["website"],
        message: "Enter your website so I can prepare your review.",
      });
    }
  });

export type ContactFormValues = z.infer<typeof contactFormSchema>;

export type ContactFormFieldErrors = Partial<
  Record<keyof ContactFormValues, string[]>
>;

export type ContactFormValuesInput = Record<keyof ContactFormValues, string>;

export type ContactFormState =
  | { status: "idle" }
  | {
      status: "error";
      fieldErrors: ContactFormFieldErrors;
      formError: string;
      values: ContactFormValuesInput;
    }
  | { status: "success"; inquiryType: InquiryType; hasWebsite: boolean };

export const initialContactFormState: ContactFormState = { status: "idle" };
