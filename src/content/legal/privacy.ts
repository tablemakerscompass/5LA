/**
 * Privacy Policy content.
 *
 * Every statement here was written against an audit of what this website
 * actually does (July 2026). At the time of writing the website:
 *   - loads no third-party scripts, embeds, or fonts at runtime
 *   - sets no cookies and uses no localStorage or sessionStorage
 *   - has no analytics, advertising, or tracking provider configured
 *   - has no user accounts, payments, or database
 * If any of that changes, this policy must change with it.
 */

import type { LegalSection } from "@/components/legal/LegalPage";
import { legal } from "@/config/legal";
import { site } from "@/config/site";

export const privacyIntro =
  "This Privacy Policy explains how The 5 Loaves Agency, LLC collects, uses, shares, stores, and otherwise handles information when visitors use this website, submit an inquiry, interact with website features, or access linked 5LA services.";

export const privacySections: LegalSection[] = [
  {
    id: "scope",
    title: "Scope of This Policy",
    blocks: [
      `This policy applies to the public website at ${site.url} operated by ${legal.contact.entity} (“5LA,” “we,” “us,” or “our”).`,
      "It also applies to the pages on this website that describe brands and initiatives within the 5LA ecosystem — including The Georgia B. Media Group, The Georgia B. Society, Aunt Sarah’s Girls, The Sarah Method, VelaXity, The 5LA Academy, and Tablemakers. Those pages are part of this website and are covered by this policy.",
      "This policy does not apply to separate applications, portals, community platforms, ticketing systems, or products that may be operated under those brand names in the future. Those are distinct services with their own data practices, and each will have its own privacy policy when it launches. Nothing in this policy should be read as describing how such a product handles information.",
      "This policy also does not apply to websites or services operated by anyone other than 5LA. If you follow a link away from this website, the practices of the destination apply.",
    ],
  },
  {
    id: "information-you-provide",
    title: "Information Visitors Provide",
    blocks: [
      "This website collects information from visitors in one place: the inquiry form on the Work With Us page. Nothing else on the website asks visitors to enter information, and the website has no accounts, logins, subscriptions, or payment features.",
      "The inquiry form asks for the following, and only the following:",
      { h3: "Required" },
      {
        list: [
          "First name and last name",
          "Email address",
          "Organization or company name",
          "Primary area of interest",
          "A description of the need or project",
          "Acknowledgement of the form’s consent statement",
        ],
      },
      { h3: "Optional" },
      {
        list: [
          "Telephone number",
          "Website",
          "Organization type",
          "Estimated timeline",
          "Estimated investment range",
          "Preferred contact method",
          "How the visitor heard about 5LA",
        ],
      },
      "We also receive whatever information a visitor chooses to include when they email or call us directly using the contact details published on this website.",
      "Visitors should not submit Social Security numbers, banking credentials, medical information, government-identification numbers, or other unnecessary sensitive personal information through general website forms. The inquiry form does not ask for any of this, and it should not be sent to us this way.",
      "Please also avoid sending confidential business information, unpublished creative work, or trade secrets through the inquiry form. See the Terms of Service for how unsolicited submissions are treated.",
    ],
  },
  {
    id: "information-collected-automatically",
    title: "Information Collected Automatically",
    blocks: [
      "This website does not run analytics software, advertising tags, session-recording tools, or any other tracking technology. It loads no third-party scripts. As a result, the website itself collects very little automatically.",
      "Two forms of automatic processing do occur:",
      { h3: "Hosting and server logs" },
      "This website is hosted by Vercel Inc. Like any web host, Vercel receives and may log the technical information that a browser sends in order to request a page — including IP address, browser and device type, operating system, the page requested, referring page, and the date and time of the request. This information is processed by the hosting provider as part of delivering the website and keeping it secure and available.",
      { h3: "Inquiry form abuse prevention" },
      "When an inquiry is submitted, our server briefly reads the IP address associated with the request in order to limit how many submissions can be sent from one connection in a short period. This is a spam and abuse control. The value is held in server memory only, is not written to a database, is not attached to the inquiry that is delivered to us, and is discarded automatically.",
      "We do not collect approximate location, build behavioural profiles, track visitors across other websites, or record clicks, scrolling, or mouse movement.",
    ],
  },
  {
    id: "cookies",
    title: "Cookies and Similar Technologies",
    blocks: [
      "Cookies are small files a website can store in a browser to remember information between page views. Related technologies include local storage, session storage, pixels, and similar identifiers.",
      "This website does not use any of them. It sets no cookies — not essential, analytics, preference, advertising, embedded-media, or authentication cookies — and it does not write to localStorage, sessionStorage, or any similar browser storage.",
      "Because no cookies are set, there is nothing to consent to and nothing to reject. This website therefore has no cookie banner and no cookie-preference control, and none is needed. If 5LA later introduces analytics or any other technology that relies on cookies, this policy will be updated first, and an appropriate consent mechanism will be provided where required.",
      "Visitors can manage or block cookies generally through their browser settings. Because this website sets none, those settings will not affect how it works.",
    ],
  },
  {
    id: "analytics",
    title: "Analytics and Website Performance",
    blocks: [
      "No analytics or website-measurement provider is configured on this website. There is no Google Analytics, Vercel Analytics, Microsoft Clarity, Plausible, or comparable service running here, and no advertising or attribution platform is connected.",
      "Aggregate infrastructure information — such as request volume and error rates — may be visible to us through the hosting provider’s standard operational dashboards. That information is used to keep the website working and is not used to identify individual visitors.",
      "If an analytics provider is added in the future, this section will be updated to name it and describe what it collects before it is enabled.",
    ],
  },
  {
    id: "how-we-use-information",
    title: "How Information Is Used",
    blocks: [
      "We use the information described above for the following purposes:",
      {
        list: [
          "Responding to inquiries and correspondence",
          "Evaluating whether an inquiry is a fit for the work 5LA does",
          "Communicating about potential services, projects, events, training, or partnerships",
          "Arranging introductory conversations and next steps",
          "Operating, maintaining, and improving the website",
          "Keeping the website secure and preventing spam, fraud, and abuse",
          "Maintaining ordinary business and correspondence records",
          "Meeting legal obligations and enforcing our agreements",
          "Establishing, exercising, or defending legal claims",
        ],
      },
      "We do not use information collected through this website for targeted or behavioural advertising, and we do not use it to build advertising profiles.",
      "We do not add people to a marketing list because they submitted an inquiry. See “Marketing Communications” below.",
    ],
  },
  {
    id: "how-we-share",
    title: "How Information May Be Shared",
    blocks: [
      "We do not sell personal information for money, and we do not share personal information for cross-context behavioural advertising.",
      "We are not able to say that information is never shared, because delivering a website and an email inquiry necessarily involves service providers. Information may be shared in these circumstances:",
      {
        list: [
          "Website hosting — Vercel Inc. hosts this website and processes requests made to it.",
          "Inquiry delivery — the provider that transmits inquiry submissions to our business email, described in the next section.",
          "Email — the provider that hosts the 5LA business email account where inquiries and correspondence are received and stored.",
          "Professional advisers — attorneys, accountants, or similar advisers, where reasonably necessary and subject to their professional obligations.",
          "Contractors — individuals or firms supporting website operation or business administration, limited to what their work requires.",
          "Legal and safety — government or legal authorities where required by law, valid legal process, or to protect rights, safety, or property.",
          "Business transfer — a successor in connection with a merger, acquisition, financing, reorganization, or sale of assets.",
        ],
      },
      "Each provider processes information under its own terms and privacy commitments.",
    ],
  },
  {
    id: "form-providers",
    title: "Form Submission and Communication Providers",
    blocks: [
      "When the inquiry form is submitted, the information is sent to our own server, validated, and then delivered to the 5LA business email address. It is not stored in a 5LA database — this website has no database, and inquiries are not retained on the website itself.",
      "Delivery is handled by an email-delivery provider. Our current configuration uses Resend for this purpose. Once delivered, the inquiry lives in the 5LA business email account and is subject to that email provider’s practices, together with our own retention practices described below.",
      "Inquiry contents are not written to browser storage, are not exposed publicly, and are not recorded in our server logs. Our logs note only that a submission occurred, which area of interest was selected, and whether delivery succeeded.",
      "We do not publish specific security configuration, credentials, or infrastructure details, for the protection of the information itself.",
      {
        note: "Configuration note for 5LA: if the delivery provider changes, or if inquiries are later stored in a database or CRM, this section must be updated to reflect the actual route before that change goes live.",
      },
    ],
  },
  {
    id: "marketing",
    title: "Marketing Communications",
    blocks: [
      "5LA does not currently operate an email newsletter or marketing mailing list through this website. There is no newsletter signup on the website, and no marketing consent box appears anywhere, prechecked or otherwise.",
      "Submitting the inquiry form does not subscribe anyone to marketing email. We use inquiry submissions to respond to the inquiry and to carry the resulting conversation forward — not for general marketing — unless separate, clearly given consent is provided.",
      "If a marketing list is introduced later, joining it will require a deliberate opt-in that is never prechecked, and every marketing message will include a way to unsubscribe. Even after unsubscribing, we may still send necessary messages about an active conversation, project, or agreement.",
    ],
  },
  {
    id: "retention",
    title: "Data Retention",
    blocks: [
      "Information is retained for as long as reasonably necessary to respond to inquiries, maintain business records, fulfill the purposes described in this policy, resolve disputes, enforce agreements, and meet legal obligations.",
      "In practice, an inquiry sent through this website becomes an email in the 5LA business account and is retained like other business correspondence. We have not set a fixed retention period, and we would rather say so than publish a schedule we do not actually follow.",
      "Records may be deleted or anonymized when they are no longer reasonably required. Where records containing sensitive personal information are disposed of, we take reasonable steps to do so in a manner appropriate to the information, consistent with Georgia law on the disposal of business records.",
      "The transient IP value used for form rate limiting is held only in server memory and is discarded automatically; it is not part of any retained record.",
    ],
  },
  {
    id: "security",
    title: "Data Security",
    blocks: [
      "The 5 Loaves Agency uses reasonable administrative, technical, and organizational measures appropriate to the nature of the information and the website. No website, transmission method, or storage system can be guaranteed to be completely secure.",
      "Practical measures currently in place include serving the website over an encrypted connection, limiting the information the inquiry form asks for, keeping inquiry contents out of our server logs, applying spam and rate-limiting controls to the form, and relying on established hosting and email providers rather than operating our own infrastructure.",
      "We make no claim of certification or formal compliance under any security or privacy framework, and this policy should not be read as asserting one. Visitors should not send highly sensitive information to us through this website.",
      "If you believe your information has been compromised in connection with this website, please contact us using the details in the Contact section.",
    ],
  },
  {
    id: "children",
    title: "Children’s Privacy",
    blocks: [
      "This website is intended for a business and professional audience. It is not directed to children under 13, and we do not knowingly collect personal information from children under 13 through it.",
      "If you are a parent or guardian and believe a child under 13 has submitted personal information through this website, please contact us and we will take reasonable steps to delete it.",
      "This section addresses the public website only. Any future 5LA program, platform, or service involving young people will be assessed on its own terms and will carry its own notice.",
    ],
  },
  {
    id: "third-party-links",
    title: "Third-Party Links and Embedded Content",
    blocks: [
      "This website may link to external websites and services — for example social networks, professional networks, event or ticketing platforms, publishers, or the websites of partner organizations.",
      "We do not control those services. Their content, terms, and privacy practices are their own, and visiting them is subject to their policies rather than this one. We encourage visitors to review the policies of any third-party service they use.",
      "At present this website embeds no third-party media, players, maps, chat widgets, or social feeds. Pages load only content served from this website. If embedded content is added later, this section will be updated to describe it.",
    ],
  },
  {
    id: "separate-platforms",
    title: "Separate 5LA Applications and Platforms",
    blocks: [
      "5LA describes several brands and platforms on this website. Some of them are expected to become separate products or services, including:",
      {
        list: [
          "VelaXity",
          "The Sarah Method",
          "The 5LA Academy and any future learning portal",
          "Tablemakers and any future community platform",
          "Any future ticketing, publishing, or ecommerce system",
        ],
      },
      "Those are separate from this website. When any of them launches as an actual product or platform, it will have data practices of its own — potentially including accounts, stored content, or payment processing — and it will require its own privacy policy.",
      "This policy governs this website only. It should not be taken to describe or govern any of those services.",
    ],
  },
  {
    id: "your-rights",
    title: "Privacy Rights and Requests",
    blocks: [
      "You may contact us using the details in the Contact section to:",
      {
        list: [
          "Ask what information you have submitted to us",
          "Request a correction to information you submitted",
          "Request deletion of information you submitted",
          "Withdraw consent to any communications you have opted into",
          "Ask a question about how we handle information",
        ],
      },
      "We will respond to reasonable requests and will honour them where we are able to. A few honest caveats apply:",
      {
        list: [
          "We may need to verify your identity before acting on a request, so that we do not disclose or delete someone else’s information.",
          "We may retain information where we are legally or operationally required to, such as to complete a transaction, resolve a dispute, keep required records, or enforce an agreement.",
          "Privacy rights differ by jurisdiction. Some visitors have specific statutory rights and some do not; the practical process above is offered to everyone regardless.",
        ],
      },
      "Because this website has no accounts, requests are handled by correspondence rather than through an automated portal.",
      {
        note: "For attorney review: 5LA has not assessed whether it meets the applicability thresholds of any specific state or international privacy statute. This section deliberately describes a practical process rather than asserting compliance with a named law.",
      },
    ],
  },
  {
    id: "united-states",
    title: "United States Operations",
    blocks: [
      "The website is operated from the United States. Visitors accessing it from other jurisdictions understand that information may be processed in the United States, subject to applicable law.",
      "The laws of the United States may differ from those of a visitor’s own country, and may not provide the same protections. We do not claim compliance with any non-United States privacy framework.",
    ],
  },
  {
    id: "changes",
    title: "Changes to the Policy",
    blocks: [
      "We may update this policy from time to time — for example if we add an analytics provider, change how inquiries are delivered, or introduce a new feature that handles information differently.",
      "When we do, we will revise the effective date shown at the top of this page. We do not currently operate a system for notifying visitors individually about policy changes, so we encourage visitors to review this page when they return.",
      "Material changes will be reflected here before the practice they describe takes effect wherever it is reasonably possible to do so.",
    ],
  },
  {
    id: "contact",
    title: "Contact",
    blocks: [
      "Questions, requests, or concerns about this policy or about how information is handled can be directed to:",
      {
        list: [
          legal.contact.entity,
          `Email: ${legal.contact.email}`,
          `Phone: ${legal.contact.phone}`,
          `Formed in the ${legal.jurisdictionLong}`,
        ],
      },
      "You may also use the Work With Us page to reach us, though for a privacy request email is the more direct route.",
      "Please include enough detail for us to understand what you are asking about — for example the page involved, the approximate date of any submission, and the email address you used.",
    ],
  },
];
