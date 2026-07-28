/**
 * Inquiry payload shape and validation, shared by the client form and the
 * `/api/inquiry` route handler so both enforce identical rules. The client
 * copy exists for fast feedback; the server copy is the one that counts.
 */

import { interestValues } from "@/config/inquiry";

export type InquiryPayload = {
  /* Required */
  firstName: string;
  lastName: string;
  email: string;
  organization: string;
  interest: string;
  description: string;
  consent: boolean;

  /* Optional */
  phone?: string;
  website?: string;
  organizationType?: string;
  timeline?: string;
  contactMethod?: string;
  referralSource?: string;
  budget?: string;

  /* Anti-spam / de-duplication — never rendered back to the user. */
  /** Honeypot. Must stay empty; real people never see this field. */
  companyWebsite?: string;
  /** Epoch ms when the form was rendered, used to reject instant submissions. */
  renderedAt?: number;
  /** Client-generated id so a retried request is not delivered twice. */
  submissionId?: string;
};

/** Field-level errors, keyed by field name. */
export type InquiryErrors = Partial<Record<keyof InquiryPayload, string>>;

export const MAX_LENGTHS = {
  firstName: 80,
  lastName: 80,
  email: 254,
  organization: 160,
  phone: 40,
  website: 200,
  description: 4000,
} as const;

/** Minimum characters for a description that can start a real conversation. */
export const MIN_DESCRIPTION = 20;

/** Pragmatic email check — deliverability is confirmed by actually replying. */
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const text = (value: unknown) => (typeof value === "string" ? value.trim() : "");

/**
 * Validate an inquiry. Returns field errors keyed by field name; an empty
 * object means the submission is valid.
 */
export function validateInquiry(input: Partial<InquiryPayload>): InquiryErrors {
  const errors: InquiryErrors = {};

  const firstName = text(input.firstName);
  if (!firstName) errors.firstName = "Please enter your first name.";
  else if (firstName.length > MAX_LENGTHS.firstName)
    errors.firstName = `Please keep this under ${MAX_LENGTHS.firstName} characters.`;

  const lastName = text(input.lastName);
  if (!lastName) errors.lastName = "Please enter your last name.";
  else if (lastName.length > MAX_LENGTHS.lastName)
    errors.lastName = `Please keep this under ${MAX_LENGTHS.lastName} characters.`;

  const email = text(input.email);
  if (!email) errors.email = "Please enter an email address.";
  else if (!EMAIL_RE.test(email) || email.length > MAX_LENGTHS.email)
    errors.email = "Please enter a valid email address.";

  const organization = text(input.organization);
  if (!organization)
    errors.organization = "Please enter your organization or company name.";
  else if (organization.length > MAX_LENGTHS.organization)
    errors.organization = `Please keep this under ${MAX_LENGTHS.organization} characters.`;

  const interest = text(input.interest);
  if (!interest) errors.interest = "Please choose where the conversation should begin.";
  else if (!interestValues.includes(interest))
    errors.interest = "Please choose one of the listed areas of interest.";

  const description = text(input.description);
  if (!description) errors.description = "Please tell us a little about the work.";
  else if (description.length < MIN_DESCRIPTION)
    errors.description = `Please add a little more detail — at least ${MIN_DESCRIPTION} characters.`;
  else if (description.length > MAX_LENGTHS.description)
    errors.description = `Please keep this under ${MAX_LENGTHS.description} characters.`;

  if (!input.consent)
    errors.consent = "Please acknowledge the statement above to continue.";

  const phone = text(input.phone);
  if (phone && phone.length > MAX_LENGTHS.phone)
    errors.phone = `Please keep this under ${MAX_LENGTHS.phone} characters.`;

  const website = text(input.website);
  if (website && website.length > MAX_LENGTHS.website)
    errors.website = `Please keep this under ${MAX_LENGTHS.website} characters.`;

  return errors;
}

/** True when validation produced no errors. */
export const isValid = (errors: InquiryErrors) => Object.keys(errors).length === 0;

/** Order used when focusing the first invalid field. */
export const FIELD_ORDER: (keyof InquiryPayload)[] = [
  "interest",
  "firstName",
  "lastName",
  "email",
  "phone",
  "organization",
  "website",
  "organizationType",
  "description",
  "timeline",
  "budget",
  "contactMethod",
  "referralSource",
  "consent",
];
