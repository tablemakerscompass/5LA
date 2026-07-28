/**
 * Accessibility Statement content.
 *
 * The features and limitations listed here come from an actual audit of this
 * website (July 2026): automated checks for contrast, heading order, landmarks,
 * alt text, accessible names, target size, reflow at 320 CSS pixels and text
 * zoom at 200%, plus manual keyboard testing in a Chromium browser.
 *
 * Nothing in this statement claims conformance. The known limitations are real
 * findings from that audit and should be updated as they are addressed.
 */

import type { LegalSection } from "@/components/legal/LegalPage";
import { legal } from "@/config/legal";

export const accessibilityIntro =
  "The 5 Loaves Agency, LLC is committed to making its website and digital content accessible to people with disabilities and to providing an inclusive experience for all visitors.";

export const accessibilitySections: LegalSection[] = [
  {
    id: "commitment",
    title: "Our Commitment",
    blocks: [
      "We believe the experience behind a brand includes whether people can actually use it. Accessibility is part of how this website is built, not something added afterward.",
      "We are working to improve:",
      {
        list: [
          "Perceivability of text, images, and interface elements",
          "Keyboard access to every interactive part of the site",
          "Compatibility with screen readers and other assistive technology",
          "Clear, understandable navigation and page structure",
          "Colour contrast across the site’s palette",
          "Text scaling and zoom",
          "Accessible forms, labels, and error messages",
          "Meaningful alternative text for images",
          "Support for reduced-motion preferences",
          "Accessibility on small screens and touch devices",
        ],
      },
      "We do not claim that this website is perfectly accessible. It is not, and the “Known Limitations” section below says where it currently falls short.",
    ],
  },
  {
    id: "standard",
    title: "Accessibility Standard",
    blocks: [
      "We use the Web Content Accessibility Guidelines, currently WCAG 2.2 Level AA, as a reference for our ongoing accessibility efforts.",
      "WCAG organizes accessibility around four principles: content should be perceivable, operable, understandable, and robust. We use those principles to guide design and development decisions.",
      "This website has not undergone a complete third-party accessibility audit, and we do not state that it fully conforms to WCAG 2.2 Level AA. Conformance requires meeting all applicable Level A and Level AA success criteria, and we have not verified that. We are not certified under any accessibility standard, and this statement should not be read as asserting legal compliance.",
    ],
  },
  {
    id: "features",
    title: "Accessibility Features",
    blocks: [
      "The following are implemented across the website and were verified during our most recent review:",
      { h3: "Navigation and keyboard use" },
      {
        list: [
          "A “Skip to content” link is the first item in the tab order on every page and moves focus to the main content area",
          "All interactive elements — links, buttons, form fields, and the header menu — can be reached and operated with a keyboard alone",
          "Every focusable element displays a visible focus indicator",
          "The area-of-interest selector on the Work With Us page is a standard radio group, so arrow keys move between options as expected",
          "Link text describes its destination; the site does not use “click here” or bare “read more” links",
        ],
      },
      { h3: "Structure and semantics" },
      {
        list: [
          "Each page has exactly one main heading, with heading levels nested in order beneath it",
          "Pages use header, navigation, main, and footer landmark regions",
          "Every page has a unique, descriptive title",
          "The page language is declared as English",
        ],
      },
      { h3: "Colour, size, and zoom" },
      {
        list: [
          "Body and interface text meets the WCAG AA contrast minimum against its background",
          "Accent text on light backgrounds uses the deepest gold in the palette so that it clears the minimum too",
          "Pages reflow into a single column at 320 pixels wide without horizontal scrolling",
          "Text can be enlarged to 200% without content being lost or clipped",
          "Interactive targets meet the 24-pixel minimum introduced in WCAG 2.2",
          "No information is conveyed by colour alone",
        ],
      },
      { h3: "Forms" },
      {
        list: [
          "Every form field has a visible, programmatically associated label",
          "Required fields are marked, and optional fields are labelled as optional",
          "Validation errors appear in text next to the field they describe, are announced to assistive technology, and are linked to the field",
          "Focus moves to the first field needing attention when a submission cannot be completed",
          "Information already entered is preserved when validation fails",
          "Submission confirmation is announced rather than shown by colour alone",
        ],
      },
      { h3: "Content and media" },
      {
        list: [
          "All images carry alternative text, and decorative images are marked so screen readers skip them",
          "Text is real text rather than words embedded in images",
          "Body copy is set at a comfortable size and measure for reading",
          "Layouts are responsive and adapt to small screens",
          "The site honours the operating system’s reduced-motion setting and disables scroll animations when it is enabled",
          "Legal and accessibility pages include print styles that remove site navigation",
        ],
      },
      { h3: "What the site does not do" },
      "Some accessibility risks are avoided simply by not being present. This website has no pop-ups or interstitials, no carousels, no modal dialogs, no automatically playing audio or video, no scrolling or blinking content, no time limits, and no cookie banner. It has no video or audio content, so captions and transcripts do not currently apply.",
    ],
  },
  {
    id: "ongoing",
    title: "Ongoing Efforts",
    blocks: [
      "Accessibility is an ongoing process rather than a finished task. Our work includes:",
      {
        list: [
          "Testing pages for keyboard access, structure, contrast, and reflow",
          "Reviewing new content for heading structure, link text, and alternative text",
          "Considering accessibility in design decisions, including colour and type choices",
          "Improving existing pages as issues are identified",
          "Reviewing accessibility whenever a new page or feature is added",
          "Correcting barriers that visitors report to us",
          "Building awareness of accessibility among the people who create and maintain our content",
        ],
      },
      "We have not set a fixed deadline for resolving the limitations listed below. We would rather name them honestly than publish a remediation date we cannot commit to. They are recorded and prioritized as part of our ongoing work, and the list is revised as issues are fixed rather than left to go stale.",
    ],
  },
  {
    id: "limitations",
    title: "Known Limitations",
    blocks: [
      "The following are known to us from our most recent review. We are listing them because a statement that claimed none would not be accurate.",
      { h3: "Testing coverage" },
      "Our review combined automated checks, manual keyboard testing, and inspection of the accessibility tree — the structured information a browser exposes to assistive technology, covering the role, name, and state of every element. That tells us what a screen reader should announce.",
      "It does not tell us how the site actually sounds and feels in use. We have not tested with real screen readers, magnification software, voice-control software, or switch devices, we have not tested with disabled users, and we have not commissioned an independent audit. There may be barriers we have not found, and this is the limitation we would most like to close.",
      { h3: "Decorative imagery" },
      "A few pages place large decorative numerals over photography. These are hidden from screen readers and the same information appears as ordinary text beside them, but their legibility depends on the photograph behind them rather than on a fixed colour pair.",
      { h3: "Third-party destinations" },
      "We do not control the accessibility of external websites we link to. Where a linked service presents a barrier, our ability to fix it is limited to raising it with the provider or offering the information another way.",
      { h3: "Pages in development" },
      "Some pages describe brands and initiatives whose full content is still being developed. As that content is added, it will be reviewed for accessibility before publication.",
      { h3: "Recently resolved" },
      "A review in July 2026 identified and corrected several issues: gold accent text that fell below the contrast minimum on cream backgrounds, horizontal scrolling at 320-pixel widths and at 200% text size, a heading level skipped on the Our Companies page, and navigation and footer links whose clickable area was smaller than the 24-pixel minimum. These have been fixed and are recorded here for transparency rather than as outstanding problems.",
    ],
  },
  {
    id: "third-party",
    title: "Third-Party Content",
    blocks: [
      "This website currently embeds no third-party content — there are no external players, maps, chat widgets, or social feeds on any page. Everything the site loads is served from the site itself.",
      "The website does link to services operated by others, and we may add more over time. We do not control the accessibility of external websites, social platforms, event or ticketing systems, or documents hosted elsewhere.",
      "If you encounter a barrier on a service we link to or, in future, embed, please tell us. We will look at whether we can raise it with the provider, offer the information another way, or replace the integration.",
    ],
  },
  {
    id: "assistance",
    title: "Requesting Assistance or an Alternative Format",
    blocks: [
      "If any part of this website is difficult to use, please contact us. We can help with:",
      {
        list: [
          "Accessing information on a page you are having difficulty with",
          "Providing a document or page content in an alternative format",
          "Completing the inquiry form, or receiving the same information another way",
          "Arranging captions or a transcript if we publish audio or video in future",
          "Communicating through another reasonable method that works better for you",
        ],
      },
      "When contacting us, please identify the page or material, describe the difficulty encountered, and state the format or assistance that would be most useful.",
      "You are welcome to contact us by email or telephone, whichever is easier for you. You do not need to use the website form to reach us.",
    ],
  },
  {
    id: "feedback",
    title: "Feedback",
    blocks: [
      "We welcome reports of accessibility barriers. Feedback from the people using the site is the most reliable way we learn where it falls short.",
      "You can reach us at:",
      {
        list: [
          `Email: ${legal.contact.email}`,
          `Phone: ${legal.contact.phone}`,
          "Or through the Work With Us page",
        ],
      },
      "It helps if you can tell us the page address, what you were trying to do, what happened, and the browser or assistive technology you were using.",
      "We review accessibility feedback and use it to guide reasonable improvements. Response times may vary depending on the nature of the request and the resources required. We are a small company, and we will be honest with you about what we can address and when.",
    ],
  },
  {
    id: "compatibility",
    title: "Technical Compatibility",
    blocks: [
      "This website is built with standard HTML, CSS, and JavaScript, and is designed to work with current versions of major web browsers on desktop and mobile devices.",
      "It is built to follow the semantic and accessibility conventions that assistive technologies rely on — landmark regions, proper heading structure, labelled form controls, and standard interactive elements rather than custom substitutes.",
      "We have verified that every interactive element exposes a correct role, name, and state to the browser's accessibility layer, that form errors are announced, and that the submission confirmation is announced and receives focus. We have not completed testing with specific screen readers, so we are not naming particular products as supported. If you use assistive technology and encounter a problem here, we would genuinely like to hear about it.",
      "The website does not require JavaScript to read its content. It does require JavaScript to submit the inquiry form; if that is a barrier for you, please contact us by email or telephone instead.",
    ],
  },
  {
    id: "updates",
    title: "Effective Date and Updates",
    blocks: [
      "This statement reflects the state of the website as of the last reviewed date shown at the top of this page.",
      "We will update it as accessibility work continues — both to record improvements and to remove limitations once they are resolved. Where a limitation listed above is fixed, it will be taken off the list rather than left in place.",
      "This page will also be reviewed when significant new pages or features are added to the website.",
    ],
  },
];
