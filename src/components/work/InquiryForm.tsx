"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import { Field, Input, Textarea, Select, FormMessage } from "@/components/ui/FormFields";
import InterestSelect from "./InterestSelect";
import InquirySuccess from "./InquirySuccess";
import {
  budgetOptions,
  contactMethods,
  organizationTypes,
  referralSources,
  resolveInterest,
  timelineOptions,
} from "@/config/inquiry";
import {
  FIELD_ORDER,
  isValid,
  validateInquiry,
  type InquiryErrors,
  type InquiryPayload,
} from "@/lib/inquiry";
import styles from "./InquiryForm.module.css";

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  organization: string;
  website: string;
  organizationType: string;
  interest: string;
  description: string;
  timeline: string;
  budget: string;
  contactMethod: string;
  referralSource: string;
  consent: boolean;
  /** Honeypot — hidden from real users and expected to stay empty. */
  companyWebsite: string;
};

const EMPTY: FormState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  organization: "",
  website: "",
  organizationType: "",
  interest: "",
  description: "",
  timeline: "",
  budget: "",
  contactMethod: "",
  referralSource: "",
  consent: false,
  companyWebsite: "",
};

/** Blank option label shared by the optional selects. */
const ANY = "— Select —";

export default function InquiryForm() {
  const searchParams = useSearchParams();
  const [form, setForm] = useState<FormState>(EMPTY);
  const [errors, setErrors] = useState<InquiryErrors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [formError, setFormError] = useState<string | null>(null);

  /** Set after mount so the server and client render identical markup. */
  const renderedAt = useRef<number>(0);
  const submissionId = useRef<string>("");

  useEffect(() => {
    renderedAt.current = Date.now();
    submissionId.current =
      typeof crypto !== "undefined" && "randomUUID" in crypto
        ? crypto.randomUUID()
        : `${Date.now()}-${Math.random().toString(36).slice(2)}`;
  }, []);

  /**
   * Preselect the area of interest from `?interest=` so visitors arriving from
   * a sector or brand page land on the right choice. Unknown values are
   * ignored rather than shown as an error.
   */
  useEffect(() => {
    const preset = resolveInterest(searchParams.get("interest"));
    if (preset) setForm((prev) => (prev.interest ? prev : { ...prev, interest: preset }));
  }, [searchParams]);

  const set = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    // Clear a field's error as soon as the visitor edits it.
    setErrors((prev) => (prev[key as keyof InquiryErrors] ? { ...prev, [key]: undefined } : prev));
  };

  function focusFirstError(found: InquiryErrors) {
    const first = FIELD_ORDER.find((key) => found[key]);
    if (!first) return;
    const target =
      first === "interest"
        ? document.querySelector<HTMLElement>('input[name="interest"]')
        : document.getElementById(first);
    target?.focus();
    target?.scrollIntoView({ block: "center", behavior: "smooth" });
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return; // guard against double submits

    setFormError(null);
    const found = validateInquiry(form);
    setErrors(found);

    if (!isValid(found)) {
      focusFirstError(found);
      return;
    }

    setStatus("sending");

    const payload: InquiryPayload = {
      ...form,
      renderedAt: renderedAt.current,
      submissionId: submissionId.current,
    };

    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json().catch(() => ({}));

      if (res.ok && data.ok) {
        setStatus("sent");
        return;
      }

      // Entered information is deliberately left untouched so nothing is lost.
      if (data.errors) {
        setErrors(data.errors);
        focusFirstError(data.errors);
      }
      setFormError(
        data.message ?? "We could not submit your inquiry. Please try again."
      );
      setStatus("idle");
    } catch {
      setFormError(
        "We could not reach the server. Please check your connection and try again."
      );
      setStatus("idle");
    }
  }

  if (status === "sent") return <InquirySuccess />;

  const sending = status === "sending";

  return (
    <form onSubmit={handleSubmit} noValidate>
      {/* ---------------------------------------------- Area of interest */}
      <section className="section" aria-labelledby="interest-heading">
        <Container>
          <div className={styles.head}>
            <p className="eyebrow">Area of Interest</p>
            <hr className="rule" />
            <h2 id="interest-heading" className="section-heading">
              Where Should the Conversation Begin?
            </h2>
            <p className="body">
              Choose the one area closest to your need. If more than one applies,
              or none does, select the closest option and tell us more below.
            </p>
          </div>

          <div className={styles.interest}>
            <InterestSelect
              value={form.interest}
              onChange={(value) => set("interest", value)}
              error={errors.interest}
            />
          </div>
        </Container>
      </section>

      {/* ------------------------------------------------- Inquiry fields */}
      <section className={`section ${styles.formSection}`} aria-labelledby="inquiry-heading">
        <Container>
          <div className={styles.head}>
            <p className="eyebrow">Inquiry</p>
            <hr className="rule" />
            <h2 id="inquiry-heading" className="section-heading">
              Tell Us About the Work.
            </h2>
          </div>

          <div className={styles.fields}>
            <div className={styles.row}>
              <Field label="First name" htmlFor="firstName" required error={errors.firstName}>
                <Input
                  id="firstName"
                  name="firstName"
                  autoComplete="given-name"
                  value={form.firstName}
                  onChange={(e) => set("firstName", e.target.value)}
                  aria-invalid={errors.firstName ? true : undefined}
                  aria-describedby={errors.firstName ? "firstName-error" : undefined}
                />
              </Field>

              <Field label="Last name" htmlFor="lastName" required error={errors.lastName}>
                <Input
                  id="lastName"
                  name="lastName"
                  autoComplete="family-name"
                  value={form.lastName}
                  onChange={(e) => set("lastName", e.target.value)}
                  aria-invalid={errors.lastName ? true : undefined}
                  aria-describedby={errors.lastName ? "lastName-error" : undefined}
                />
              </Field>
            </div>

            <div className={styles.row}>
              <Field label="Email address" htmlFor="email" required error={errors.email}>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  inputMode="email"
                  autoComplete="email"
                  value={form.email}
                  onChange={(e) => set("email", e.target.value)}
                  aria-invalid={errors.email ? true : undefined}
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
              </Field>

              <Field label="Phone number" htmlFor="phone" hint="Optional" error={errors.phone}>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                  value={form.phone}
                  onChange={(e) => set("phone", e.target.value)}
                  aria-invalid={errors.phone ? true : undefined}
                  aria-describedby={errors.phone ? "phone-error" : undefined}
                />
              </Field>
            </div>

            <div className={styles.row}>
              <Field
                label="Organization or company"
                htmlFor="organization"
                required
                error={errors.organization}
              >
                <Input
                  id="organization"
                  name="organization"
                  autoComplete="organization"
                  value={form.organization}
                  onChange={(e) => set("organization", e.target.value)}
                  aria-invalid={errors.organization ? true : undefined}
                  aria-describedby={errors.organization ? "organization-error" : undefined}
                />
              </Field>

              <Field label="Website" htmlFor="website" hint="Optional" error={errors.website}>
                <Input
                  id="website"
                  name="website"
                  inputMode="url"
                  autoComplete="url"
                  placeholder="example.com"
                  value={form.website}
                  onChange={(e) => set("website", e.target.value)}
                  aria-invalid={errors.website ? true : undefined}
                  aria-describedby={errors.website ? "website-error" : undefined}
                />
              </Field>
            </div>

            <Field label="Organization type" htmlFor="organizationType" hint="Optional">
              <Select
                id="organizationType"
                name="organizationType"
                value={form.organizationType}
                onChange={(e) => set("organizationType", e.target.value)}
              >
                <option value="">{ANY}</option>
                {organizationTypes.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </Select>
            </Field>

            <Field
              label="Brief description of the need"
              htmlFor="description"
              required
              hint="Tell us what you are building, what is currently challenging, and what kind of support you believe may be helpful."
              error={errors.description}
            >
              <Textarea
                id="description"
                name="description"
                rows={7}
                value={form.description}
                onChange={(e) => set("description", e.target.value)}
                aria-invalid={errors.description ? true : undefined}
                aria-describedby={errors.description ? "description-error" : undefined}
              />
            </Field>

            <div className={styles.row}>
              <Field label="Estimated timeline" htmlFor="timeline" hint="Optional">
                <Select
                  id="timeline"
                  name="timeline"
                  value={form.timeline}
                  onChange={(e) => set("timeline", e.target.value)}
                >
                  <option value="">{ANY}</option>
                  {timelineOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </Select>
              </Field>

              <Field
                label="Is there an approved or estimated investment range for this work?"
                htmlFor="budget"
                hint="Optional. Not every project fits a listed range — this only helps us prepare."
              >
                <Select
                  id="budget"
                  name="budget"
                  value={form.budget}
                  onChange={(e) => set("budget", e.target.value)}
                >
                  <option value="">{ANY}</option>
                  {budgetOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </Select>
              </Field>
            </div>

            <div className={styles.row}>
              <Field label="Preferred contact method" htmlFor="contactMethod" hint="Optional">
                <Select
                  id="contactMethod"
                  name="contactMethod"
                  value={form.contactMethod}
                  onChange={(e) => set("contactMethod", e.target.value)}
                >
                  <option value="">{ANY}</option>
                  {contactMethods.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </Select>
              </Field>

              <Field label="How did you hear about 5LA?" htmlFor="referralSource" hint="Optional">
                <Select
                  id="referralSource"
                  name="referralSource"
                  value={form.referralSource}
                  onChange={(e) => set("referralSource", e.target.value)}
                >
                  <option value="">{ANY}</option>
                  {referralSources.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </Select>
              </Field>
            </div>

            {/* Honeypot: off-screen and hidden from assistive technology. */}
            <div className={styles.honeypot} aria-hidden="true">
              <label htmlFor="companyWebsite">Company website</label>
              <input
                id="companyWebsite"
                name="companyWebsite"
                type="text"
                tabIndex={-1}
                autoComplete="off"
                value={form.companyWebsite}
                onChange={(e) => set("companyWebsite", e.target.value)}
              />
            </div>

            <div className={styles.consent}>
              <label className="choice" htmlFor="consent">
                <input
                  id="consent"
                  name="consent"
                  type="checkbox"
                  checked={form.consent}
                  onChange={(e) => set("consent", e.target.checked)}
                  aria-invalid={errors.consent ? true : undefined}
                  aria-describedby={errors.consent ? "consent-error" : undefined}
                />
                <span>
                  I understand that submitting this form begins a conversation and
                  does not create a client, partnership, employment, or contractual
                  relationship.
                </span>
              </label>
              {errors.consent && (
                <span id="consent-error" className="field-error" role="alert">
                  {errors.consent}
                </span>
              )}
            </div>

            {formError && <FormMessage variant="error">{formError}</FormMessage>}

            <p className={styles.legalNote}>
              By submitting this form, you acknowledge that you have read the{" "}
              <Link href="/privacy-policy" className={styles.legalLink}>
                Privacy Policy
              </Link>{" "}
              and understand that submission does not create a client or
              contractual relationship. Use of this website is subject to our{" "}
              <Link href="/terms-of-service" className={styles.legalLink}>
                Terms of Service
              </Link>
              .
            </p>

            <div className={styles.actions}>
              <Button type="submit" variant="primary" size="lg" disabled={sending}>
                {sending ? "Submitting…" : "Submit Inquiry"}
              </Button>
              <p className="caption" role="status">
                {sending ? "Sending your inquiry…" : "Required fields are marked with an asterisk."}
              </p>
            </div>
          </div>
        </Container>
      </section>
    </form>
  );
}
