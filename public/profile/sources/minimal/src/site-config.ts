// Everything personal lives here. Edit this file to update the site.
//
// Icons:
//   { brand: "github" }                 → built-in social icon (see components/Icon.astro)
//   { image: "/images/app.png" }        → your own image in /public
//   { letter: "H", color: "#4f46e5" }   → coloured tile with a letter

export type IconSpec =
  | { brand: string }
  | { image: string }
  | { letter: string; color: string };

export interface LinkItem {
  label: string;
  href: string;
  icon: IconSpec;
}

// One line of the home page intro: text followed by a group of icons.
export interface IntroLine {
  text: string;
  items?: LinkItem[];
  /** Adds extra space above the line to start a new "paragraph". */
  gap?: boolean;
}

const email = "enesdmrg@gmail.com";

export const site = {
  name: "Enes Demirağ",
  title: "Enes Demirağ",
  description: "AI Engineer in Istanbul, building production AI systems and products.",
  avatar: "/images/profile.jpg",
  email,

  // Posts from this Medium account are pulled from its RSS feed at build time.
  mediumUsername: "ensdmrg",

  intro: [
    {
      text: "I'm an AI engineer, leading AI at",
      items: [{ label: "Klyft — Lead AI Engineer", href: "https://klyft-technologies.com", icon: { image: "/images/klyft.png" } }],
      gap: true,
    },
    {
      text: "previously at",
      items: [
        { label: "DiAS — Senior AI Engineer", href: "https://dias.com", icon: { image: "/images/dias.jpg" } },
        { label: "Chooch — MLOps Team Leader", href: "https://chooch.com", icon: { image: "/images/chooch.jpg" } },
        { label: "Baykar — Software Engineer", href: "https://baykartech.com", icon: { image: "/images/baykar.jpg" } },
      ],
    },
    {
      text: "I'm building",
      items: [{ label: "Destek Chat — AI customer service for small businesses", href: "https://destek.chat", icon: { image: "/images/destekchat.png" } }],
      gap: true,
    },
    {
      text: "and have shipped side projects",
      items: [
        { label: "ShelfScan — ingredient & calorie scanner", href: "https://shelf-scan-4358b.web.app", icon: { image: "/images/shelfscan.png" } },
        { label: "Hudux AI — visual monitoring with VLMs", href: "https://landing-hudux-ai.web.app", icon: { image: "/images/hudux.png" } },
        { label: "DermaGlow — AI skin analysis", href: "https://derma-glow.web.app", icon: { image: "/images/dermaglow.svg" } },
        { label: "Maaş Dedektifi — anonymous salary data", href: "https://maasdedektifi.com", icon: { image: "/images/maasdedektifi.png" } },
      ],
    },
    {
      text: "I also post on these platforms",
      items: [
        { label: "LinkedIn", href: "https://www.linkedin.com/in/enesdemirag", icon: { brand: "linkedin" } },
        { label: "X", href: "https://x.com/ensdmrg", icon: { brand: "x" } },
        { label: "Medium", href: "https://ensdmrg.medium.com", icon: { brand: "medium" } },
        { label: "YouTube", href: "https://www.youtube.com/@enes-demirag", icon: { brand: "youtube" } },
        { label: "GitHub", href: "https://github.com/enesdemirag", icon: { brand: "github" } },
      ],
      gap: true,
    },
  ] satisfies IntroLine[],

  // The "…? Click here." lines under the intro.
  ctas: [
    { text: "Looking for my resume?", href: "/docs/enesdemirag_resume.pdf" },
    { text: "Want to say hi?", href: `mailto:${email}` },
  ],
};
