# Contact Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a production-quality `/contact` page for Rowlands Digital Works with an accessible, Zod-validated contact form that submits through a Next.js Server Action to a temporary (no-Resend) success flow.

**Architecture:** A reusable Zod schema in `lib/validation/contact.ts` is the single source of truth for validation and shared types. `app/contact/actions.ts` exposes a `"use server"` action that validates with the schema, runs a honeypot check, and returns a typed `ContactFormState`. `components/contact/contact-form.tsx` is the one Client Component on the page, driven by `useActionState`, rendering shadcn primitives styled to the existing design tokens. `app/contact/page.tsx` composes static Server Components (`ContactIntro`, `ContactSidebar`) around the form inside the existing two-column layout language already used on the homepage.

**Tech Stack:** Next.js App Router (v16.3.5) Server Actions, React 19 `useActionState`, Zod v4 (`z.email()`/`z.url()`/`z.flattenError()` — see notes below), shadcn/ui (`radix-nova` style, already scaffolded), Tailwind v4 design tokens from `app/globals.css`. **No test framework exists in this repo** (no Jest/Vitest/Playwright test config) and none should be added — verification is `yarn lint`, `tsc --noEmit`, `yarn build`, and manual/browser-driven checks (the Playwright MCP tools are available for this and should be used to drive the real dev server rather than writing a permanent test suite).

**Spec:** `Rowlands Digital Works Contact Page Build Prompt.md` (pasted into the conversation that produced this plan — no on-disk copy). `AGENTS.md` at the repo root is the standing project-instructions file and applies to every task below.

## Prerequisite work already completed

Before this plan was written, the following was done directly (not part of the task checklist below, but implementers need to know it exists):

- Ran `yarn shadcn add input label textarea select alert`, which created `components/ui/input.tsx`, `components/ui/label.tsx`, `components/ui/textarea.tsx`, `components/ui/select.tsx`, `components/ui/alert.tsx`.
- Fixed each file's `import { cn } from "cn"` → `import { cn } from "@/lib/utils"` (this repo deliberately removed the `cn` npm package in commit `a17c93b` — see `lib/utils.ts` for the project's own `cn()` built on `clsx`-equivalent logic + `tailwind-merge`).
- Stripped all `dark:` Tailwind variants from the generated files (this project's dark mode is intentionally never enabled — see the comment above `@custom-variant dark` in `app/globals.css`) and aligned sizing/colors with the existing `components/ui/button.tsx` conventions (`h-10` fields, `bg-surface`, `ring-3 ring-ring/30` focus rings, no `dark:bg-input/30` etc.).
- Ran `yarn remove cn` to undo the stray dependency the CLI added, and `yarn add zod` to make Zod (already present transitively at v4.6.5) a direct dependency.

Exports implementers can rely on:
- `components/ui/input.tsx` → `Input` (native `<input>` props)
- `components/ui/label.tsx` → `Label` (Radix `Label.Root`, `htmlFor` prop)
- `components/ui/textarea.tsx` → `Textarea` (native `<textarea>` props)
- `components/ui/select.tsx` → `Select`, `SelectTrigger`, `SelectValue`, `SelectContent`, `SelectItem`, `SelectGroup`, `SelectLabel`, `SelectSeparator` (Radix `Select`, supports `name`/`required` on `Select` root — Radix forwards these to a hidden native `<select>` so `FormData` picks up the value automatically)
- `components/ui/alert.tsx` → `Alert` (`variant?: "default" | "destructive"`), `AlertTitle`, `AlertDescription`, `AlertAction`
- `components/ui/button.tsx` → `Button` (`variant`, `size` incl. `"xl"`), already used throughout the homepage
- `components/container.tsx` → `Container` (max-w-6xl wrapper with responsive padding, used by every homepage section)
- `lib/site.ts` → `siteConfig.email` (`"casey@rowlandsdigitalworks.com"`)

## Global Constraints

- Package manager is Yarn (`yarn@4.18.0`) — never touch `package-lock.json` or run `npm`.
- No `src/` directory in this repo — routes live in `app/`, components in `components/`, libs in `lib/`, all at the repo root.
- Do not introduce a CMS, database, state-management library, animation library, or any other production dependency beyond what's already installed.
- Zod is required and authoritative on the server; client-side validation may only use native HTML attributes (`required`, `type="email"`, etc.) per the same schema's intent — no second validation library.
- Implement submission with a Next.js **Server Action**, not a Route Handler.
- Do **not** implement Resend, fake API calls, or placeholder email credentials in this task — stop after the honeypot check and return the temporary success result. Mark the future integration point with a comment.
- Spam protection for this task is a honeypot field + server-side Zod only — no CAPTCHA, no Turnstile, no rate limiting.
- Use design tokens already defined in `app/globals.css` (`bg-surface`, `text-foreground`, `text-muted-foreground`, `border-border`, `bg-primary`, etc.) — never hardcode a hex value.
- Server Components by default; the only Client Component in this feature is the form itself.
- Every homepage CTA already points at `/contact` (`components/home/hero.tsx`, `components/layout/site-header.tsx`, `components/layout/mobile-nav.tsx`, `components/home/website-review-cta.tsx`, `components/home/final-cta.tsx`) — no changes needed there.
- Must pass `yarn lint`, `tsc --noEmit`, and `yarn build` before the work is considered done.
- The success state must never claim an email was sent — it represents successful validation/submission handling only.

## Review Focus

- **Whitespace-only required input** (e.g. name = `"   "`): must be rejected as empty after trimming, not silently accepted as a valid 3-character name. Covered in Task 1 (schema) and Task 6 (end-to-end check).
- **Website URL without a protocol** (e.g. `example.com` instead of `https://example.com`): `z.url()` requires a scheme, so this must surface the friendly "include https://" message rather than a cryptic Zod default. Covered in Task 1 and Task 6.
- **Honeypot filled in**: the action must return the exact same `{ status: "success" }` shape as a real submission (no distinguishing error, no console noise in production) so an automated submitter gets no useful signal. Covered in Task 2 and Task 6.
- **No inquiry type selected**: native `required` on the hidden select should block the browser submission, but if it's bypassed (JS disabled, direct POST), the Zod enum must still reject with the friendly "Choose what you'd like help with." message, not a raw "Invalid enum value" string. Covered in Task 1, Task 2, and Task 6.
- **Re-submission after a validation error**: previously entered values (including a blank optional website/phone) must still be present in the fields after the action returns an error, and the selected inquiry type must not reset to the placeholder. Covered in Task 3 and Task 6.

---

## Task 1: Validation schema and shared types

**Files:**
- Create: `lib/validation/contact.ts`

**Interfaces:**
- Produces: `inquiryTypes: readonly string[]` (the six option labels, in display order), `type InquiryType`, `contactFormSchema: ZodObject`, `type ContactFormValues = z.infer<typeof contactFormSchema>`, `type ContactFormFieldErrors = Partial<Record<keyof ContactFormValues, string[]>>`, `type ContactFormValuesInput = Record<keyof ContactFormValues, string>`, `type ContactFormState` (discriminated union: `{status:"idle"}` | `{status:"error", fieldErrors, formError, values}` | `{status:"success", inquiryType}`), `initialContactFormState: ContactFormState`.
- Consumes: nothing (leaf module).

- [ ] **Step 1: Write the schema, types, and state model**

```ts
// lib/validation/contact.ts
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

export const contactFormSchema = z.object({
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
    z
      .email("Enter a valid email address.")
      .min(1, "Enter your email address.")
      .max(254, "That email is too long."),
  ),
  website: z.preprocess(
    trimToUndefinedIfEmpty,
    z
      .url("Enter a valid website URL, including https://.")
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
      .max(30, "That phone number is too long.")
      .optional(),
  ),
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
  | { status: "success"; inquiryType: InquiryType };

export const initialContactFormState: ContactFormState = { status: "idle" };
```

Notes for whoever implements this:
- `website` and `phone` use `z.preprocess` to trim *and* convert an empty string to `undefined` before the inner schema runs, so `.optional()` behaves correctly and there's no ambiguity about whether `.trim()` runs before or after `z.url()`/format checks internally.
- `email` trims first via preprocess, then the inner schema chains length checks onto `z.email(...)` directly (Zod v4's `z.email()` returns a plain string-schema instance, so `.min()`/`.max()` chain onto it normally).
- `z.enum(inquiryTypes, { error: "..." })` is the v4 way to set one custom message for any invalid enum value, including an empty string from an unselected `<select>`.

- [ ] **Step 2: Type-check the new file in isolation**

Run: `yarn tsc --noEmit`
Expected: no errors referencing `lib/validation/contact.ts`.

- [ ] **Step 3: Commit**

```bash
git add lib/validation/contact.ts
git commit -m "feat(contact): add Zod schema and form state types for the contact form"
```

---

## Task 2: Server Action

**Files:**
- Create: `app/contact/actions.ts`

**Interfaces:**
- Consumes: `contactFormSchema`, `ContactFormState`, `ContactFormValuesInput`, `initialContactFormState` from `@/lib/validation/contact` (Task 1).
- Produces: `submitContactForm(prevState: ContactFormState, formData: FormData): Promise<ContactFormState>` — the exact signature `useActionState` expects (Task 3 binds this directly as the action).

- [ ] **Step 1: Write the action**

```ts
// app/contact/actions.ts
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
    // Likely an automated submission. Return the same success response a
    // real visitor would get, without processing further, so the sender
    // gets no signal that anything was different.
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
```

- [ ] **Step 2: Type-check**

Run: `yarn tsc --noEmit`
Expected: no errors referencing `app/contact/actions.ts`.

- [ ] **Step 3: Commit**

```bash
git add app/contact/actions.ts
git commit -m "feat(contact): add server action for contact form submission"
```

---

## Task 3: Contact form client component

**Files:**
- Create: `components/contact/contact-form.tsx`

**Interfaces:**
- Consumes: `submitContactForm` from `@/app/contact/actions` (Task 2); `inquiryTypes`, `initialContactFormState`, `type InquiryType` from `@/lib/validation/contact` (Task 1); `Button`, `Input`, `Label`, `Textarea`, `Select`/`SelectTrigger`/`SelectValue`/`SelectContent`/`SelectItem`, `Alert`/`AlertTitle`/`AlertDescription` from `components/ui/*` (already in the repo).
- Produces: `ContactForm` component (no props) — consumed by Task 5's page.

- [ ] **Step 1: Write the component**

```tsx
// components/contact/contact-form.tsx
"use client";

import { useActionState, useEffect, useRef, useState } from "react";

import { submitContactForm } from "@/app/contact/actions";
import {
  inquiryTypes,
  initialContactFormState,
  type InquiryType,
} from "@/lib/validation/contact";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const WEBSITE_REVIEW_INQUIRY: InquiryType = "Free Website Review";

function FieldError({ id, messages }: { id: string; messages?: string[] }) {
  if (!messages?.length) return null;
  return (
    <p id={id} className="mt-1.5 text-sm text-destructive">
      {messages[0]}
    </p>
  );
}

export function ContactForm() {
  const [state, formAction, pending] = useActionState(
    submitContactForm,
    initialContactFormState,
  );
  const [inquiryType, setInquiryType] = useState("");
  const successHeadingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (state.status === "success") {
      successHeadingRef.current?.focus();
    }
  }, [state.status]);

  if (state.status === "success") {
    return (
      <div className="border border-border bg-surface p-6 sm:p-8">
        <h2
          ref={successHeadingRef}
          tabIndex={-1}
          className="text-title font-semibold text-foreground focus:outline-none"
        >
          Thanks — I&rsquo;ve got it.
        </h2>
        <p className="mt-3 leading-relaxed text-muted-foreground">
          I&rsquo;ll review what you sent and get back to you directly.
        </p>
        {state.inquiryType === WEBSITE_REVIEW_INQUIRY ? (
          <p className="mt-3 leading-relaxed text-muted-foreground">
            I&rsquo;ll take a look at the website you provided before
            responding so I can come back with something useful.
          </p>
        ) : null}
      </div>
    );
  }

  const fieldErrors = state.status === "error" ? state.fieldErrors : undefined;
  const values = state.status === "error" ? state.values : undefined;
  const submitLabel =
    inquiryType === WEBSITE_REVIEW_INQUIRY
      ? "Request My Website Review"
      : "Send My Request";

  return (
    <form action={formAction} className="space-y-6">
      {state.status === "error" ? (
        <Alert variant="destructive">
          <AlertTitle>There&rsquo;s a problem with your submission</AlertTitle>
          <AlertDescription>{state.formError}</AlertDescription>
        </Alert>
      ) : null}

      <p className="text-sm text-muted-foreground">
        Fields marked <span aria-hidden="true">*</span> are required.
      </p>

      {/* Honeypot — hidden from sighted and keyboard users. Real visitors
          never see or fill this; automated form-fillers often do. */}
      <div
        aria-hidden="true"
        className="absolute left-[-9999px] top-0 h-0 w-0 overflow-hidden"
      >
        <Label htmlFor="hp_company">Company</Label>
        <Input
          id="hp_company"
          name="hp_company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <Label htmlFor="name">
            Your Name <span aria-hidden="true">*</span>
          </Label>
          <Input
            id="name"
            name="name"
            type="text"
            required
            defaultValue={values?.name}
            aria-invalid={fieldErrors?.name ? true : undefined}
            aria-describedby={fieldErrors?.name ? "name-error" : undefined}
            className="mt-2"
          />
          <FieldError id="name-error" messages={fieldErrors?.name} />
        </div>

        <div>
          <Label htmlFor="business">
            Business or Practice Name <span aria-hidden="true">*</span>
          </Label>
          <Input
            id="business"
            name="business"
            type="text"
            required
            defaultValue={values?.business}
            aria-invalid={fieldErrors?.business ? true : undefined}
            aria-describedby={
              fieldErrors?.business ? "business-error" : undefined
            }
            className="mt-2"
          />
          <FieldError id="business-error" messages={fieldErrors?.business} />
        </div>
      </div>

      <div>
        <Label htmlFor="email">
          Email Address <span aria-hidden="true">*</span>
        </Label>
        <Input
          id="email"
          name="email"
          type="email"
          required
          defaultValue={values?.email}
          aria-invalid={fieldErrors?.email ? true : undefined}
          aria-describedby={fieldErrors?.email ? "email-error" : undefined}
          className="mt-2"
        />
        <FieldError id="email-error" messages={fieldErrors?.email} />
      </div>

      <div>
        <Label htmlFor="inquiryType">
          What can I help with? <span aria-hidden="true">*</span>
        </Label>
        <Select
          name="inquiryType"
          required
          value={inquiryType}
          onValueChange={setInquiryType}
        >
          <SelectTrigger
            id="inquiryType"
            className="mt-2"
            aria-invalid={fieldErrors?.inquiryType ? true : undefined}
            aria-describedby={
              fieldErrors?.inquiryType ? "inquiryType-error" : undefined
            }
          >
            <SelectValue placeholder="Select an option" />
          </SelectTrigger>
          <SelectContent>
            {inquiryTypes.map((option) => (
              <SelectItem key={option} value={option}>
                {option}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <FieldError
          id="inquiryType-error"
          messages={fieldErrors?.inquiryType}
        />
      </div>

      <div>
        <Label htmlFor="details">
          What would you like to improve? <span aria-hidden="true">*</span>
        </Label>
        <Textarea
          id="details"
          name="details"
          required
          rows={5}
          placeholder="Tell me what isn't working today, what you'd like to improve, or what you're trying to build."
          defaultValue={values?.details}
          aria-invalid={fieldErrors?.details ? true : undefined}
          aria-describedby={fieldErrors?.details ? "details-error" : undefined}
          className="mt-2"
        />
        <FieldError id="details-error" messages={fieldErrors?.details} />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <Label htmlFor="website">Current Website</Label>
          <Input
            id="website"
            name="website"
            type="url"
            placeholder="https://"
            defaultValue={values?.website}
            aria-invalid={fieldErrors?.website ? true : undefined}
            aria-describedby={
              fieldErrors?.website ? "website-error" : "website-hint"
            }
            className="mt-2"
          />
          {fieldErrors?.website ? (
            <FieldError id="website-error" messages={fieldErrors.website} />
          ) : (
            <p
              id="website-hint"
              className="mt-1.5 text-sm text-muted-foreground"
            >
              If you don&rsquo;t have one yet, leave this blank.
            </p>
          )}
        </div>

        <div>
          <Label htmlFor="phone">
            Phone Number{" "}
            <span className="font-normal text-muted-foreground">
              (Optional)
            </span>
          </Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            defaultValue={values?.phone}
            aria-invalid={fieldErrors?.phone ? true : undefined}
            aria-describedby={fieldErrors?.phone ? "phone-error" : undefined}
            className="mt-2"
          />
          <FieldError id="phone-error" messages={fieldErrors?.phone} />
        </div>
      </div>

      <Button
        type="submit"
        size="xl"
        disabled={pending}
        className="w-full sm:w-auto"
      >
        {pending ? "Sending…" : submitLabel}
      </Button>
    </form>
  );
}
```

Notes:
- `Select` is used **controlled** (`value={inquiryType}` / `onValueChange={setInquiryType}`) purely so the submit-button label can react to the selection; Radix forwards `name="inquiryType"` to a hidden native `<select>`, so `formData.get("inquiryType")` on the server sees the real value regardless.
- Uncontrolled inputs (`Input`/`Textarea` with `defaultValue`) keep whatever the user typed across a failed submission automatically, because the same DOM nodes persist across the `useActionState` re-render — `defaultValue={values?.field}` is there for correctness/defensiveness, not because it's load-bearing today.
- The honeypot's field name is `hp_company`, deliberately not a name browsers commonly autofill (e.g. plain `company`), to avoid a real visitor's browser silently filling it in via autofill heuristics.

- [ ] **Step 2: Type-check**

Run: `yarn tsc --noEmit`
Expected: no errors referencing `components/contact/contact-form.tsx`.

- [ ] **Step 3: Commit**

```bash
git add components/contact/contact-form.tsx
git commit -m "feat(contact): add accessible contact form client component"
```

---

## Task 4: Static supporting content

**Files:**
- Create: `components/contact/contact-intro.tsx`
- Create: `components/contact/contact-sidebar.tsx`

**Interfaces:**
- Consumes: `siteConfig` from `@/lib/site` (`contact-sidebar.tsx` only).
- Produces: `ContactIntro` and `ContactSidebar` components (no props) — consumed by Task 5's page.

- [ ] **Step 1: Write the intro**

```tsx
// components/contact/contact-intro.tsx
export function ContactIntro() {
  return (
    <div>
      <p className="flex items-center gap-3 text-sm font-medium text-primary">
        <span aria-hidden="true" className="h-px w-8 bg-accent" />
        Start a Conversation
      </p>

      <h1 className="mt-5 text-balance text-headline font-semibold text-foreground">
        Let&rsquo;s talk about what&rsquo;s not working.
      </h1>

      <p className="mt-5 max-w-xl text-lead text-muted-foreground">
        Whether you need a stronger website, a custom digital solution, or
        simply want a second opinion on your current site, tell me a little
        about what you&rsquo;re working with.
      </p>

      <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
        You&rsquo;ll hear directly from Casey — no sales team or
        account-manager handoff.
      </p>
    </div>
  );
}
```

- [ ] **Step 2: Write the sidebar**

```tsx
// components/contact/contact-sidebar.tsx
import { siteConfig } from "@/lib/site";

const STEPS = [
  {
    number: "01",
    title: "I review your request",
    body: "No automated scoring or generic report.",
  },
  {
    number: "02",
    title: "I look at the actual problem",
    body: "For website reviews, I'll focus on areas such as usability, conversion, mobile experience, patient/customer journey, and technical quality.",
  },
  {
    number: "03",
    title: "We decide whether it makes sense to talk",
    body: "If I think I can help, we can schedule a short conversation to discuss the next step.",
  },
];

export function ContactSidebar() {
  return (
    <div className="space-y-10">
      <div>
        <h2 className="text-title font-semibold text-foreground">
          What happens next
        </h2>
        <p className="mt-3 leading-relaxed text-muted-foreground">
          I&rsquo;ll review your message personally and respond directly. If
          you&rsquo;re requesting a website review, I&rsquo;ll take a look at
          your current site and identify a few of the highest-impact
          opportunities before we talk.
        </p>

        <ol className="mt-6 space-y-6">
          {STEPS.map((step) => (
            <li key={step.number}>
              <span className="text-sm font-semibold text-primary">
                {step.number}
              </span>
              <h3 className="mt-1 font-medium text-foreground">
                {step.title}
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                {step.body}
              </p>
            </li>
          ))}
        </ol>

        <p className="mt-6 border-t border-border pt-6 text-sm leading-relaxed text-muted-foreground">
          No obligation. No sales team. Just a direct conversation about what
          could work better.
        </p>
      </div>

      <div className="border border-border bg-surface p-6">
        <h2 className="text-sm font-medium text-foreground">Prefer email?</h2>
        <a
          href={`mailto:${siteConfig.email}`}
          className="mt-2 block text-lg font-medium text-primary transition-colors hover:text-primary-hover"
        >
          {siteConfig.email}
        </a>
      </div>
    </div>
  );
}
```

- [ ] **Step 3: Type-check**

Run: `yarn tsc --noEmit`
Expected: no errors referencing either new file.

- [ ] **Step 4: Commit**

```bash
git add components/contact/contact-intro.tsx components/contact/contact-sidebar.tsx
git commit -m "feat(contact): add contact page intro and sidebar content"
```

---

## Task 5: Page assembly and metadata

**Files:**
- Create: `app/contact/page.tsx`

**Interfaces:**
- Consumes: `Container` from `@/components/container`; `ContactIntro`, `ContactSidebar` from `@/components/contact/*` (Task 4); `ContactForm` from `@/components/contact/contact-form` (Task 3).
- Produces: default export `ContactPage`, `export const metadata` — the route Next.js serves at `/contact`.

- [ ] **Step 1: Write the page**

```tsx
// app/contact/page.tsx
import type { Metadata } from "next";

import { Container } from "@/components/container";
import { ContactForm } from "@/components/contact/contact-form";
import { ContactIntro } from "@/components/contact/contact-intro";
import { ContactSidebar } from "@/components/contact/contact-sidebar";

const description =
  "Contact Rowlands Digital Works to request a free website review or discuss website development, custom digital solutions, integrations, and ongoing technical support.";

export const metadata: Metadata = {
  title: "Contact",
  description,
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    url: "/contact",
    title: "Contact | Rowlands Digital Works",
    description,
  },
};

export default function ContactPage() {
  return (
    <main id="main" className="flex-1">
      <section>
        <Container className="py-14 sm:py-20 lg:py-24">
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <ContactIntro />
              <div className="mt-10">
                <ContactForm />
              </div>
            </div>

            <div className="lg:col-span-5">
              <ContactSidebar />
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
```

`metadata.title` uses the layout's `template: "%s | Rowlands Digital Works"` (see `app/layout.tsx`), so the rendered title is `Contact | Rowlands Digital Works`, matching the spec.

- [ ] **Step 2: Type-check**

Run: `yarn tsc --noEmit`
Expected: no errors anywhere in `app/contact/`.

- [ ] **Step 3: Commit**

```bash
git add app/contact/page.tsx
git commit -m "feat(contact): assemble the /contact page"
```

---

## Task 6: Full verification pass

**Files:** none created — this task only runs checks and, if anything is found, fixes it in the files from Tasks 1–5.

**Interfaces:** n/a.

- [ ] **Step 1: Lint**

Run: `yarn lint`
Expected: no errors or warnings in any file touched by this plan. Fix and re-run if anything surfaces.

- [ ] **Step 2: Type-check the whole project**

Run: `yarn tsc --noEmit`
Expected: clean.

- [ ] **Step 3: Production build**

Run: `yarn build`
Expected: build succeeds, `/contact` appears in the route output with no errors.

- [ ] **Step 4: Start the dev server for manual/Playwright verification**

Run: `yarn dev` (in the background, or in a separate terminal) and note the local URL (typically `http://localhost:3000`).

- [ ] **Step 5: Drive the real page with the Playwright MCP tools and verify every behavior below**

Use `mcp__plugin_playwright_playwright__browser_navigate` to `http://localhost:3000/contact`, then `mcp__plugin_playwright_playwright__browser_snapshot` to inspect the accessibility tree, and `mcp__plugin_playwright_playwright__browser_fill_form` / `browser_click` / `browser_type` to drive the form. Confirm each of the following, fixing code and re-testing if any fail:

  - Loads cleanly, single `<h1>` = "Let's talk about what's not working.", eyebrow "Start a Conversation" visible above it.
  - Submitting with all required fields empty shows field-level errors next to Name, Business, Email, What can I help with, and Project details, plus the "There's a problem with your submission" alert; no navigation occurs.
  - Whitespace-only in "Your Name" (e.g. three spaces) is rejected the same as empty (Review Focus #1).
  - An invalid email (e.g. `not-an-email`) shows "Enter a valid email address." next to the Email field.
  - An invalid/protocol-less website URL (e.g. `example.com`) shows "Enter a valid website URL, including https://." next to Current Website; leaving Current Website and Phone Number blank produces no errors for either (Review Focus #2).
  - Selecting nothing in "What can I help with?" and forcing a submit (e.g. temporarily removing the `required` attribute via `browser_evaluate`, or submitting via a direct action call) surfaces "Choose what you'd like help with." rather than a raw enum error (Review Focus #4).
  - After a validation error, previously typed values (name, business, email, details, and an already-picked inquiry type) are still present in the form — nothing was cleared (Review Focus #5).
  - Filling every field validly (including selecting "Free Website Review") and submitting shows the success panel: heading "Thanks — I've got it.", the base copy, and the extra "I'll take a look at the website you provided..." line since the inquiry type was a website review; focus moves to the success heading.
  - Repeating with a non-review inquiry type (e.g. "New Website") shows the success panel without the website-review-specific line, and the submit button read "Send My Request" (not "Request My Website Review") before submitting.
  - Filling the hidden `hp_company` honeypot field directly (via `browser_evaluate`, since it's not reachable by tab or click) and submitting an otherwise-valid form still returns the same success panel, confirming the honeypot doesn't produce a different, bot-detectable response (Review Focus #3).
  - Full keyboard pass: Tab from the top of the form reaches Name → Business → Email → What can I help with (opens with Enter/Space, closes with an item selected) → Project details → Current Website → Phone Number → Submit, in that order, with a visible focus outline at every stop, and the hidden honeypot input is never reachable by Tab.
  - `mcp__plugin_playwright_playwright__browser_resize` to a phone width (≈375px), tablet (≈768px), laptop (≈1280px), and desktop (≈1536px) and take a screenshot at each with `browser_take_screenshot`: no horizontal overflow, the form appears early in the stacked mobile order, tap targets look comfortable, and the two-column layout only kicks in at `lg`.
  - Click the `mailto:casey@rowlandsdigitalworks.com` link in the sidebar and confirm (via `browser_network_requests` or the resulting navigation) it points at the right address.

- [ ] **Step 6: Confirm every homepage CTA reaches the page**

Navigate from `/` and click each of: the header "Request a Website Review" button, the hero "Request a Free Website Review" button, the dark-band "Request a Free Website Review" CTA, and the final "Start a Conversation" CTA — each must land on `/contact`. (These links already point at `/contact` in the existing code; this step only needs to confirm nothing in this plan broke them.)

- [ ] **Step 7: Confirm no Resend/email-sent language anywhere**

Grep the new files for anything implying delivery: `grep -rn -i "resend\|email has been sent\|emailed successfully" app/contact components/contact lib/validation/contact.ts` — expect no matches (the `// Email delivery service — NEXT TASK` comment in `actions.ts` is expected and fine).

- [ ] **Step 8: Final commit**

If Steps 1–7 required any fixes, stage and commit them:

```bash
git add -A
git commit -m "fix(contact): address issues found in end-to-end verification"
```

If no fixes were needed, skip this step — there's nothing to commit.
