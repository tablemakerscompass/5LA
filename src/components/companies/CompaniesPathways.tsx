import Link from "next/link";
import Container from "@/components/layout/Container";
import SectionIntro from "@/components/ui/SectionIntro";
import Reveal from "@/components/ui/Reveal";
import styles from "./CompaniesPathways.module.css";

type Pathway = {
  interest: string;
  prompt: string;
  links: { label: string; href: string }[];
};

const pathways: Pathway[] = [
  {
    interest: "You are seeking business or organizational support",
    prompt: "Explore the 5LA Experience Sectors.",
    links: [{ label: "Experience Sectors", href: "/what-we-do" }],
  },
  {
    interest:
      "You are interested in books, theater, media, or original stories",
    prompt: "Explore The Georgia B. Media Group and Aunt Sarah’s Girls.",
    links: [
      {
        label: "The Georgia B. Media Group",
        href: "/our-companies/georgia-b-media-group",
      },
      { label: "Aunt Sarah’s Girls", href: "/our-companies/aunt-sarahs-girls" },
    ],
  },
  {
    interest: "You are exploring artificial intelligence and executive technology",
    prompt: "Explore VelaXity.",
    links: [{ label: "VelaXity", href: "/our-companies/velaxity" }],
  },
  {
    interest: "You need leadership, hospitality, or workforce training",
    prompt: "Explore The 5LA Academy.",
    links: [{ label: "The 5LA Academy", href: "/our-companies/5la-academy" }],
  },
  {
    interest: "You are seeking professional community and thought leadership",
    prompt: "Explore Tablemakers.",
    links: [{ label: "Tablemakers", href: "/our-companies/tablemakers" }],
  },
  {
    interest:
      "You are interested in healing, reflection, legacy, or community",
    prompt: "Explore The Sarah Method and The Georgia B. Society.",
    links: [
      { label: "The Sarah Method", href: "/our-companies/the-sarah-method" },
      {
        label: "The Georgia B. Society",
        href: "/our-companies/georgia-b-society",
      },
    ],
  },
];

/** Section 8 — guided entry points into the ecosystem. */
export default function CompaniesPathways() {
  return (
    <section
      className={`section ${styles.wrap}`}
      aria-labelledby="pathways-heading"
    >
      <Container>
        <SectionIntro
          eyebrow="Explore by Interest"
          title={<span id="pathways-heading">Where Would You Like to Begin?</span>}
          divider
        />

        <ul className={styles.list}>
          {pathways.map((pathway, i) => (
            <Reveal
              as="li"
              key={pathway.interest}
              delay={(i % 2) * 70}
              className={styles.item}
            >
              <p className={styles.interest}>{pathway.interest}</p>
              <div className={styles.action}>
                <p className={styles.prompt}>{pathway.prompt}</p>
                <ul className={styles.links}>
                  {pathway.links.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className={styles.link}>
                        {link.label}
                        <span className={styles.arrow} aria-hidden="true">
                          &rarr;
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
