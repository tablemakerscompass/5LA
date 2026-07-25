import type { Metadata } from "next";
import Section from "@/components/layout/Section";
import SectionIntro from "@/components/ui/SectionIntro";
import Button from "@/components/ui/Button";
import SectorCard from "@/components/ui/SectorCard";
import CompanyCard from "@/components/ui/CompanyCard";
import QuoteBlock from "@/components/ui/QuoteBlock";
import StatBlock from "@/components/ui/StatBlock";
import CTABanner from "@/components/ui/CTABanner";
import EditorialImage from "@/components/ui/EditorialImage";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { Field, Input, Textarea, Select, Choice, FileUpload, FormMessage } from "@/components/ui/FormFields";
import { sectors } from "@/config/sectors";
import { companies } from "@/config/companies";
import { site } from "@/config/site";
import styles from "./style-guide.module.css";

export const metadata: Metadata = {
  title: "Design System",
  robots: { index: false, follow: false },
};

const colorGroups = [
  {
    name: "Deep Burgundy",
    swatches: [
      ["900", "#4E1013"],
      ["800", "#5A1115"],
      ["700 · primary", "#68161A"],
      ["600", "#741A20"],
      ["500", "#8B2A31"],
    ],
  },
  {
    name: "Warm Gold",
    swatches: [
      ["700", "#B88A3B"],
      ["600 · accent", "#C8A45D"],
      ["500", "#D1B376"],
      ["400", "#DCC490"],
    ],
  },
  {
    name: "Soft Cream",
    swatches: [
      ["100", "#FBF8F2"],
      ["200 · base", "#F7F2E8"],
      ["300", "#F1EAD9"],
      ["400", "#E7DCC6"],
    ],
  },
  {
    name: "Near Black",
    swatches: [
      ["900", "#171514"],
      ["800", "#1C1918"],
      ["700", "#211D1B"],
    ],
  },
  {
    name: "Deep Green (support)",
    swatches: [
      ["900", "#183B2D"],
      ["700", "#214737"],
      ["500", "#2C5140"],
    ],
  },
];

export default function StyleGuidePage() {
  return (
    <>
      <Section as="div" className={styles.head}>
        <p className="eyebrow">Internal reference · not indexed</p>
        <hr className="rule" />
        <h1 className="page-title">5LA Design System</h1>
        <p className="lead">
          The global brand foundation — colors, typography, components, and
          patterns. This page is for internal review and is excluded from search
          engines.
        </p>
      </Section>

      {/* COLORS */}
      <Section muted id="colors">
        <SectionIntro eyebrow="Tokens" title="Color palette" divider />
        <div className={styles.colorGrid}>
          {colorGroups.map((group) => (
            <div key={group.name}>
              <h3 className={styles.groupName}>{group.name}</h3>
              <div className={styles.swatchRow}>
                {group.swatches.map(([label, hex]) => (
                  <div key={hex} className={styles.swatch}>
                    <span className={styles.chip} style={{ background: hex }} />
                    <span className={styles.swatchLabel}>{label}</span>
                    <span className={styles.swatchHex}>{hex}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* TYPOGRAPHY */}
      <Section id="type">
        <SectionIntro eyebrow="Tokens" title="Typography" divider />
        <div className={styles.typeStack}>
          <p className="eyebrow">Eyebrow label</p>
          <p className="hero-headline">Hero headline</p>
          <h2 className="page-title">Page title</h2>
          <h2 className="section-heading">Section heading</h2>
          <h3 className="subheading">Subheading</h3>
          <p className="lead">
            Lead paragraph — a slightly larger, confident introduction that sets
            up the section with comfortable line height and a shorter measure.
          </p>
          <p className="body">
            Standard body copy. The 5 Loaves Agency designs the systems, people,
            technology, and stories behind meaningful experiences. Body text is
            set for comfortable reading at a controlled measure.
          </p>
          <p className="body-sm">Small body copy for secondary details and dense areas.</p>
          <blockquote className="quote">
            &ldquo;Experience is not one department.&rdquo;
          </blockquote>
          <p className="caption">Caption — image credits and fine print.</p>
        </div>
      </Section>

      {/* BUTTONS */}
      <Section muted id="buttons">
        <SectionIntro eyebrow="Components" title="Button system" divider />
        <div className={styles.row}>
          <Button variant="primary">Primary</Button>
          <Button variant="gold">Gold Accent</Button>
          <Button variant="dark">Dark</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="text">Text link</Button>
        </div>
        <div className={styles.row} style={{ marginTop: "var(--space-5)" }}>
          <Button variant="primary" size="sm">Small</Button>
          <Button variant="primary" size="md">Medium</Button>
          <Button variant="primary" size="lg">Large</Button>
        </div>
        <div className={`${styles.row} ${styles.darkRow}`} data-surface="dark">
          <Button variant="gold">Gold</Button>
          <Button variant="outline">Outline on dark</Button>
          <Button variant="text">Text on dark</Button>
        </div>
      </Section>

      {/* BREADCRUMBS */}
      <Section id="breadcrumbs">
        <SectionIntro eyebrow="Components" title="Breadcrumbs" divider />
        <Breadcrumbs
          items={[
            { label: "Experience Sectors", href: "/experience-sectors" },
            { label: "Business" },
          ]}
        />
      </Section>

      {/* SECTOR CARDS */}
      <Section muted id="sector-cards">
        <SectionIntro eyebrow="Components" title="Experience Sector cards" divider />
        <div className={styles.cardGrid4}>
          {sectors.map((s) => (
            <SectorCard key={s.slug} sector={s} />
          ))}
        </div>
      </Section>

      {/* COMPANY CARDS */}
      <Section id="company-cards">
        <SectionIntro eyebrow="Components" title="Company / brand cards" divider />
        <div className={styles.cardGrid3}>
          {companies.slice(0, 6).map((c) => (
            <CompanyCard key={c.slug} company={c} />
          ))}
        </div>
      </Section>

      {/* STAT BLOCK */}
      <Section muted id="stats">
        <SectionIntro
          eyebrow="Components"
          title="Impact / statistics block"
          lead="Values are passed as props — placeholders (—) render until verified numbers are provided."
          divider
        />
        <StatBlock
          stats={[
            { value: "—", suffix: "+", label: "Years of experience" },
            { value: "—", label: "Productions created" },
            { value: "—", label: "Teams trained" },
            { value: "—", label: "Businesses supported" },
          ]}
        />
      </Section>

      {/* EDITORIAL IMAGE */}
      <Section id="images">
        <SectionIntro eyebrow="Components" title="Editorial image blocks" divider />
        <div className={styles.imageGrid}>
          <EditorialImage placeholderLabel="Full-width editorial" aspect="16/9" />
          <EditorialImage
            placeholderLabel="Captioned image"
            aspect="4/3"
            caption="Caption — describe the moment, not the stock."
          />
        </div>
        <div style={{ marginTop: "var(--space-6)" }}>
          <EditorialImage placeholderLabel="Dark overlay for text" aspect="21/9" overlay>
            <p className="eyebrow" style={{ color: "var(--gold-500)" }}>
              Overlay
            </p>
            <p className="subheading" style={{ color: "var(--cream-100)" }}>
              Text sits legibly over imagery.
            </p>
          </EditorialImage>
        </div>
      </Section>

      {/* FORM SYSTEM */}
      <Section muted id="forms">
        <SectionIntro
          eyebrow="Components"
          title="Form style system"
          lead="Shared, reusable field styles. The final contact form is built in a later phase."
          divider
        />
        {/* Presentational only — the working form is built in a later phase. */}
        <form className={styles.form} action="/style-guide">
          <Field label="Full name" htmlFor="sg-name" required>
            <Input id="sg-name" name="name" placeholder="Your name" />
          </Field>
          <Field label="Email" htmlFor="sg-email" required>
            <Input id="sg-email" type="email" placeholder="you@company.com" />
          </Field>
          <Field label="Phone" htmlFor="sg-phone" hint="Optional">
            <Input id="sg-phone" type="tel" placeholder="(000) 000-0000" />
          </Field>
          <Field label="Area of interest" htmlFor="sg-select">
            <Select id="sg-select" defaultValue="">
              <option value="" disabled>
                Select a sector
              </option>
              {sectors.map((s) => (
                <option key={s.slug} value={s.slug}>
                  {s.name}
                </option>
              ))}
            </Select>
          </Field>
          <div className={styles.formWide}>
            <Field label="Message" htmlFor="sg-msg">
              <Textarea id="sg-msg" placeholder="Tell us about your project" />
            </Field>
          </div>
          <div className={styles.formWide}>
            <FileUpload label="Attach a brief (optional)" />
          </div>
          <fieldset className={styles.formWide} style={{ border: 0, padding: 0 }}>
            <Choice type="checkbox" name="c" label="Sign me up for occasional updates" />
            <Choice type="radio" name="r" label="I'm an organization" />
            <Choice type="radio" name="r" label="I'm an individual" />
          </fieldset>
          <div className={styles.formWide}>
            <FormMessage variant="success">Success message styling.</FormMessage>
          </div>
          <div className={styles.formWide}>
            <FormMessage variant="error">Error message styling.</FormMessage>
          </div>
        </form>
      </Section>

      {/* QUOTE + CTA (full width) */}
      <QuoteBlock quote={site.brand.belief} eyebrow="Quote block" />
      <CTABanner
        eyebrow="CTA banner"
        title="Bring structure to your vision."
        body="A reusable call-to-action banner in the dark treatment."
        primary={{ label: "Work With Us", href: "/work-with-us" }}
        secondary={{ label: "Explore Sectors", href: "/experience-sectors" }}
      />
    </>
  );
}
