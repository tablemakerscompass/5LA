import Container from "@/components/layout/Container";
import SectionIntro from "@/components/ui/SectionIntro";
import Reveal from "@/components/ui/Reveal";
import VxScreenFrame from "./VxScreenFrame";
import { vxAssets } from "@/config/velaxity";
import styles from "./VxPreview.module.css";

/**
 * Section 12 — Platform preview.
 *
 * The application repository contains no captured interface imagery, so all
 * three slots render labelled placeholders. Nothing here is a mockup dressed
 * up as a live screen, and no dashboard is filled with invented client data.
 *
 * FOR EDITORS: capture from the running application, remove client and personal
 * data, then set the paths in `vxAssets`. Keep the captions — they name which
 * screen each image shows.
 */
export default function VxPreview() {
  return (
    <section
      id="platform-preview"
      className={`section ${styles.wrap}`}
      data-surface="dark"
      aria-labelledby="vx-preview-heading"
    >
      <Container>
        <SectionIntro
          eyebrow="See the Experience"
          title={
            <span id="vx-preview-heading">
              A Refined Executive Environment Built for Daily Use.
            </span>
          }
          divider
        />

        <Reveal delay={60} className={styles.primary}>
          <VxScreenFrame
            src={vxAssets.screenExecutive}
            alt="The VelaXity Executive Hub overview, showing organizational priorities and pulse."
            placeholderLabel="Executive Hub — overview"
            placeholderNote="Screenshot required: capture the Executive Hub overview from the running application, with client and personal data removed"
            aspect="16/10"
            caption="Executive Hub — the leadership overview, where priorities and organizational pulse are gathered."
          />
        </Reveal>

        <div className={styles.pair}>
          <Reveal delay={80}>
            <VxScreenFrame
              src={vxAssets.screenAi}
              alt="The VelaXity AI Hub, showing insights derived from workspace records."
              placeholderLabel="AI Hub — insights"
              placeholderNote="Screenshot required: capture from the running application, with client and personal data removed"
              aspect="4/3"
              caption="AI Hub — insights derived from the workspace’s own records."
            />
          </Reveal>
          <Reveal delay={140}>
            <VxScreenFrame
              src={vxAssets.screenStandards}
              alt="The VelaXity Standards Hub, showing the SOP library."
              placeholderLabel="Standards Hub — SOP library"
              placeholderNote="Screenshot required: capture from the running application, with client and personal data removed"
              aspect="4/3"
              caption="Standards Hub — the SOP library and its version history."
            />
          </Reveal>
        </div>

        <Reveal delay={100}>
          <p className={`caption ${styles.note}`}>
            Interface imagery will be published here only once it has been
            captured from the current application and cleared of client and
            personal information. No mockups or sample dashboards are shown in
            the meantime.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
