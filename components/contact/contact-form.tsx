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
            I&rsquo;ll take a look at the website you provided before responding
            so I can come back with something useful.
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

      {/* Honeypot — hidden from sighted and keyboard users. Real visitors never
          see or fill this; automated form-fillers often do. */}
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
        <FieldError id="inquiryType-error" messages={fieldErrors?.inquiryType} />
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
            <p id="website-hint" className="mt-1.5 text-sm text-muted-foreground">
              If you don&rsquo;t have one yet, leave this blank.
            </p>
          )}
        </div>

        <div>
          <Label htmlFor="phone">
            Phone Number{" "}
            <span className="font-normal text-muted-foreground">(Optional)</span>
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
