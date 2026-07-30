/**
 * Terms of Service content.
 *
 * Scope note: these terms govern the PUBLIC WEBSITE only. They deliberately do
 * not attempt to govern VelaXity, The Sarah Method, The 5LA Academy, or any
 * other product, which will each need product-specific terms.
 *
 * Per the brief, no mandatory arbitration clause, class-action waiver, or
 * liability cap has been included. Clauses flagged with `note` blocks need
 * attorney attention before publication.
 */

import type { LegalSection } from "@/components/legal/LegalPage";
import { legal } from "@/config/legal";
import { site } from "@/config/site";

export const termsIntro =
  "These Terms of Service govern access to and use of The 5 Loaves Agency website, its public content, forms, resources, and links to 5LA brands and services.";

export const termsSections: LegalSection[] = [
  {
    id: "acceptance",
    title: "Acceptance of Terms",
    blocks: [
      `These Terms of Service (“Terms”) are an agreement between you and ${legal.contact.entity} (“5LA,” “we,” “us,” or “our”) governing your use of the website at ${site.url} (the “Website”).`,
      "By accessing or using the Website, you agree to these Terms. If you do not agree to them, please do not use the Website.",
      "These Terms apply to the public Website. They do not govern paid services, engagements, or partnerships, which are governed by a separate written agreement, and they do not govern separate 5LA products or platforms, which will have their own terms.",
    ],
  },
  {
    id: "eligibility",
    title: "Eligibility",
    blocks: [
      "You must have the legal capacity to enter into these Terms in order to use the Website. If you are using the Website on behalf of an organization, you represent that you are authorized to accept these Terms on its behalf.",
      "The Website is intended for a business and professional audience and is not directed to children under 13.",
    ],
  },
  {
    id: "website-purpose",
    title: "Website Purpose",
    blocks: [
      "The Website provides information about 5LA and its work, including:",
      {
        list: [
          "The services 5LA offers",
          "The 5LA Experience Sectors",
          "Brands, platforms, and initiatives within the 5LA ecosystem",
          "Insights articles and editorial perspective",
          "Training and workforce-development approaches",
          "Media, publishing, and production properties",
          "Partnership and collaboration opportunities",
          "Events and gatherings",
          "The opportunity to submit an inquiry",
        ],
      },
      "Website content is informational and general in nature. It describes approaches and capabilities rather than making commitments about any particular engagement.",
      "Content may be added, changed, corrected, or removed at any time. Descriptions of brands, platforms, or initiatives may refer to work that is in development, and their availability is not guaranteed.",
    ],
  },
  {
    id: "no-relationship",
    title: "No Automatic Client or Professional Relationship",
    blocks: [
      "Visiting the Website, submitting a form, sending a message, downloading a resource, or discussing a potential project does not create a client, consulting, partnership, employment, fiduciary, legal, or contractual relationship.",
      "A relationship begins only through a separate written agreement signed by authorized parties. Until such an agreement is in place, no engagement exists, no scope has been agreed, and neither party is obligated to the other.",
      "Communications exchanged before a written agreement exists are preliminary. They are not a commitment to provide services, to accept a project, or to hold availability.",
    ],
  },
  {
    id: "inquiry-submissions",
    title: "Inquiry Submissions",
    blocks: [
      "The Website provides an inquiry form so that visitors can start a conversation with 5LA. When you use it:",
      {
        list: [
          "Submitting an inquiry does not guarantee that it will be accepted.",
          "5LA may decline any inquiry, for any lawful reason, and is not obligated to explain the decision.",
          "Availability, capacity, timing, and scheduling are not guaranteed.",
          "You agree to provide accurate information and not to misrepresent your identity, organization, or authority.",
          "You are responsible for the content of what you submit and for having the right to send it.",
        ],
      },
      { h3: "Confidentiality and creative material" },
      "Please do not submit confidential, proprietary, or highly sensitive material through the inquiry form before a written agreement is in place. Information sent to us without a signed confidentiality agreement is not automatically treated as confidential, and we cannot promise otherwise for material we did not solicit.",
      "This matters particularly for creative submissions. Please do not send manuscripts, scripts, treatments, pitches, formats, or other unpublished creative work through the Website.",
      "To be clear about what this does and does not mean: you keep ownership of your own original material. Sending something to us does not transfer any ownership of it to 5LA, and we do not claim rights in your work merely because it arrived in our inbox. What we cannot do is guarantee confidentiality for unsolicited material, or agree that we will never independently develop or work on something that resembles an idea we have received. If you want confidentiality, ask us for a written agreement first.",
      {
        note: "For attorney review: the treatment of unsolicited creative submissions, particularly for a company with active media and theatrical properties, may warrant a more specific submission clause than the balanced wording above.",
      },
    ],
  },
  {
    id: "intellectual-property",
    title: "Intellectual Property",
    blocks: [
      "The Website and its contents may include text, branding, logos, graphics, photographs, videos, articles, training concepts, frameworks, publications, characters, stories, application concepts, page designs, layouts, and downloadable resources.",
      "These materials are owned by or licensed to 5LA and are protected by copyright, trademark, and other applicable law. Some materials on the Website are owned by third parties and used with permission; nothing here claims ownership of material belonging to someone else.",
      { h3: "What you may do" },
      {
        list: [
          "View and read the Website for personal or internal, noncommercial purposes",
          "Share links to public pages",
          "Quote briefly with clear attribution to The 5 Loaves Agency and a link to the source page, where such use is permitted by law",
          "Print a page for your own reference",
        ],
      },
      { h3: "What requires written permission" },
      {
        list: [
          "Reproducing, republishing, or redistributing Website content",
          "Selling, licensing, or commercially exploiting Website content",
          "Modifying content or creating derivative works from it",
          "Systematic scraping, harvesting, or bulk copying of the Website",
          "Using Website content to train, fine-tune, or develop a competing product or model",
          "Removing or obscuring copyright, trademark, or attribution notices",
          "Using 5LA logos, brand names, or branded materials",
          "Uploading full articles or resources to another platform",
          "Creating commercial derivative products based on 5LA frameworks, characters, or stories",
        ],
      },
      "Permission requests can be sent to the address in the Contact section.",
    ],
  },
  {
    id: "brand-rights",
    title: "Brand and Property Rights",
    blocks: [
      "Names, marks, characters, and properties appearing on the Website may include:",
      {
        list: [
          "The 5 Loaves Agency and 5LA",
          "LOAVES",
          "The Georgia B. Media Group",
          "The Georgia B. Society",
          "Aunt Sarah’s Girls",
          "The Sarah Method",
          "VelaXity",
          "The 5LA Academy",
          "Tablemakers and The Tablemakers Compass",
          "Related logos, characters, artwork, publications, frameworks, and brand elements",
        ],
      },
      "These may be protected by trademark, copyright, contract, or other applicable law, whether or not they are accompanied by a symbol or notice. Nothing on the Website should be read as asserting a federal trademark registration for any particular mark.",
      "No license to use any 5LA name, mark, or property is granted by these Terms or by use of the Website. Third-party names and marks that appear on the Website belong to their respective owners.",
    ],
  },
  {
    id: "user-conduct",
    title: "User Conduct",
    blocks: [
      "When using the Website, you agree not to:",
      {
        list: [
          "Use the Website for any unlawful purpose or in violation of any applicable law",
          "Engage in fraud, deception, or misrepresentation",
          "Harass, threaten, defame, or abuse any person through Website forms or correspondence",
          "Impersonate any person or organization, or misrepresent your affiliation with 5LA",
          "Introduce malicious code, malware, or harmful components",
          "Attempt to gain unauthorized access to the Website, its servers, or related systems",
          "Scrape, crawl, or harvest the Website in a way that disrupts or burdens the service",
          "Interfere with the operation, security, or availability of the Website",
          "Misuse the inquiry form, including automated, repetitive, or bulk submissions",
          "Send spam or unsolicited commercial messages through Website forms",
          "Submit material that infringes the rights of others",
          "Attempt to obtain private data belonging to 5LA, its clients, or other visitors",
        ],
      },
    ],
  },
  {
    id: "third-party",
    title: "Third-Party Websites and Services",
    blocks: [
      "The Website may contain links to websites and services operated by others.",
      "Those links are provided for convenience. 5LA does not control third-party content and is not responsible for it. Your use of any third-party website or service is governed by that party’s own terms and privacy policy.",
      "A link does not necessarily constitute an endorsement, sponsorship, partnership, or affiliation.",
    ],
  },
  {
    id: "informational-content",
    title: "Educational and Informational Content",
    blocks: [
      "Website content — including Insights articles, training previews, business and operational guidance, discussions of artificial intelligence, media content, and reflection resources — is general informational and educational material.",
      "It is not a substitute for professional advice, and specifically is not:",
      {
        list: [
          "Legal advice",
          "Tax advice",
          "Accounting advice",
          "Financial or investment advice",
          "Medical advice",
          "Mental-health treatment or counselling",
          "Employment-law or human-resources legal advice",
          "Regulatory or compliance advice",
          "Crisis or emergency services",
        ],
      },
      "Every organization and situation is different. Please consult a qualified professional about your own circumstances before acting on anything you read here. Reading the Website does not create a professional relationship of any kind.",
    ],
  },
  {
    id: "ai-content",
    title: "AI and Technology Content",
    blocks: [
      "The Website discusses artificial intelligence, automation, and digital systems. That content is informational.",
      "Artificial-intelligence tools can produce output that is incomplete, outdated, biased, or simply wrong, and can present it confidently. Any output should be reviewed by a qualified person before it is relied upon or acted on.",
      "5LA does not guarantee any particular result from tools, prompts, workflows, automation approaches, or implementation suggestions described on the Website. You remain responsible for reviewing what you adopt, for exercising professional judgment, and for meeting the legal, privacy, and regulatory obligations that apply to your organization.",
      "These Terms govern the Website only. They do not govern VelaXity or any other 5LA technology product; those will be governed by their own product terms.",
    ],
  },
  {
    id: "story-content",
    title: "Aunt Sarah’s Girls and The Sarah Method Content",
    blocks: [
      "Storytelling, journaling, reflection, and healing-centered content described on the Website is creative and educational material. It is not therapy, counselling, diagnosis, or clinical treatment, and engaging with it does not create a therapeutic relationship.",
      "These works address sensitive themes, which may include trauma, grief, family conflict, identity, and survival. Please use your own discretion in deciding whether and when to engage with them.",
      "If you are experiencing a mental-health crisis or an immediate safety concern, please contact qualified local emergency or crisis services.",
    ],
  },
  {
    id: "availability",
    title: "Availability and Website Changes",
    blocks: [
      "5LA may update content, correct errors, add or remove pages, change or discontinue features, suspend the Website, or otherwise modify its availability at any time, with or without notice.",
      "We do not guarantee that the Website will be uninterrupted, error-free, or available at any particular time. Access may be affected by maintenance, hosting issues, network conditions, or circumstances outside our control.",
    ],
  },
  {
    id: "disclaimers",
    title: "Disclaimers",
    blocks: [
      "To the fullest extent permitted by law, the Website and its content are provided on an “as is” and “as available” basis.",
      "5LA does not warrant that the Website will be uninterrupted, secure, or free of errors, or that content is complete, current, or suitable for your particular purpose. To the extent permitted by law, we disclaim implied warranties of merchantability, fitness for a particular purpose, and non-infringement.",
      "Some jurisdictions do not allow certain disclaimers, so parts of this section may not apply to you. Nothing here limits any right you have that cannot lawfully be limited.",
    ],
  },
  {
    id: "liability",
    title: "Limitation of Liability",
    blocks: [
      "To the fullest extent permitted by law, 5LA and its members, officers, employees, and contractors will not be liable for indirect, incidental, consequential, special, exemplary, or punitive damages arising from your use of the public Website — including lost profits, lost business, lost data, or business interruption — even if advised of the possibility.",
      "This section concerns the public Website. Liability in connection with a paid engagement is addressed in the written agreement governing that engagement.",
      "Nothing in these Terms excludes or limits liability that cannot lawfully be excluded or limited, including liability for fraud, willful misconduct, or gross negligence where applicable law does not permit its exclusion. Some jurisdictions do not allow certain limitations, so parts of this section may not apply to you.",
      {
        note: "For attorney review: no monetary liability cap has been included. Whether to add one, and at what level, is a decision for counsel and the owner.",
      },
    ],
  },
  {
    id: "indemnification",
    title: "Indemnification",
    blocks: [
      "You agree to indemnify and hold harmless 5LA and its members, officers, employees, and contractors from third-party claims, damages, losses, and reasonable costs arising out of:",
      {
        list: [
          "Your misuse of the Website",
          "Your violation of these Terms",
          "Your violation of applicable law in connection with the Website",
          "Material you submit that infringes or misappropriates the rights of another party",
        ],
      },
      "This obligation does not apply to the extent a claim arises from 5LA’s own conduct. We will notify you of any claim we seek indemnification for and will allow you to participate in its defense.",
      {
        note: "For attorney review: indemnification scope, defense and control of claims, and whether this clause is appropriate for a public informational website all warrant counsel’s attention.",
      },
    ],
  },
  {
    id: "governing-law",
    title: "Governing Law and Venue",
    blocks: [
      `These Terms are governed by the laws of the ${legal.jurisdictionLong}, without regard to conflict-of-law principles.`,
      "No specific county or court is designated here.",
      {
        note: "For attorney review and owner confirmation: a venue provision naming a specific court or county has intentionally been left out and should be added only with counsel’s advice.",
      },
    ],
  },
  {
    id: "disputes",
    title: "Dispute Resolution",
    blocks: [
      "If a dispute arises in connection with the Website or these Terms, we ask that you first contact us in writing and describe the issue. Most matters can be resolved this way.",
      "Both parties agree to attempt, in good faith, to resolve a dispute through written communication before pursuing other action.",
      "These Terms do not require arbitration and do not waive any right to participate in a class action. Nothing in this section prevents either party from seeking relief through a court of competent jurisdiction, or from pursuing a claim in small-claims court.",
      {
        note: "For attorney review and owner decision: mandatory arbitration and class-action waiver provisions have deliberately been omitted from this version and should be added only with explicit owner approval and counsel’s advice.",
      },
    ],
  },
  {
    id: "termination",
    title: "Termination or Restriction of Access",
    blocks: [
      "5LA may restrict, suspend, or terminate access to the Website — in whole or in part, with or without notice — in response to misuse, illegal activity, a security threat, excessive automated traffic, or a violation of these Terms.",
      "We may also decline to receive further submissions from a particular sender where the inquiry form is being misused.",
    ],
  },
  {
    id: "changes",
    title: "Changes to the Terms",
    blocks: [
      "We may update these Terms from time to time. When we do, the revised effective date at the top of this page will be updated.",
      "Continued use of the Website after an update is posted constitutes acceptance of the revised Terms, to the extent permitted by law. If you do not agree to a change, please stop using the Website.",
    ],
  },
  {
    id: "general",
    title: "Severability and Entire Agreement",
    blocks: [
      "If any provision of these Terms is found to be invalid or unenforceable, that provision will be limited or removed to the minimum extent necessary, and the remaining provisions will stay in full force.",
      "Our failure to enforce a provision is not a waiver of it.",
      "These Terms, together with the Privacy Policy, constitute the entire agreement between you and 5LA regarding the public Website, and supersede prior understandings about it.",
      "Paid services, engagements, licenses, and partnerships are governed by separate written agreements. Where such an agreement conflicts with these Terms in relation to that engagement, the separate agreement controls.",
      "You may not assign these Terms. We may assign them in connection with a merger, acquisition, or sale of assets.",
    ],
  },
  {
    id: "contact",
    title: "Contact",
    blocks: [
      "Questions about these Terms can be directed to:",
      {
        list: [
          legal.contact.entity,
          `Email: ${legal.contact.email}`,
          `Phone: ${legal.contact.phone}`,
          `Formed in the ${legal.jurisdictionLong}`,
        ],
      },
      "For permission requests, please describe the material you would like to use and the intended use.",
    ],
  },
];
