export const site = {
  name: "Enes Demirağ",
  title: "Enes Demirağ — AI engineer & product builder",
  description: "I build AI products and the systems behind them. Notes on software, computer vision, and things I've learned while building.",
  email: "enesdmrg@gmail.com",
  location: "Istanbul, Türkiye",
  portrait: "/assets/images/profile.jpg",
  resume: "/assets/documents/enesdemirag-resume.pdf",
  socials: [
    { label: "GitHub", href: "https://github.com/enesdemirag" },
    { label: "X", href: "https://x.com/ensdmrg" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/enesdemirag" },
    { label: "Medium", href: "https://ensdmrg.medium.com" },
    { label: "YouTube", href: "https://www.youtube.com/@enes-demirag" },
  ],
} as const;

export type Project = {
  name: string;
  eyebrow: string;
  description: string;
  image: string | null;
  monogram: string;
  href: string | null;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    name: "CallsReady",
    eyebrow: "Voice AI · Product",
    description: "AI voice agents that answer customer calls and keep conversations moving when a team is busy.",
    image: "/assets/images/callsready_logo.png",
    monogram: "CR",
    href: "https://callsready.com",
    featured: true,
  },
  {
    name: "Hudux AI",
    eyebrow: "Voice AI · Product",
    description: "An inbound voice agent platform for businesses, built around practical phone and browser conversations.",
    image: "/assets/images/hudux.png",
    monogram: "H",
    href: "https://linkedin.com/company/Hudux",
    featured: true,
  },
  {
    name: "Destek Chat",
    eyebrow: "Customer support · Product",
    description: "An AI customer service assistant for small businesses.",
    image: "/assets/images/destek_chat.png",
    monogram: "D",
    href: "https://destek.chat",
    featured: true,
  },
  {
    name: "DiyetChat",
    eyebrow: "Nutrition AI · Product",
    description: "A WhatsApp-based AI nutrition coach for meal plans, food logging, and daily guidance.",
    image: "/assets/images/diyetchat_logo.png",
    monogram: "DC",
    href: "https://wa.me/905356509181?text=Merhaba%2C%20DiyetChat%20kullanmaya%20ba%C5%9Flamak%20istiyorum.",
    featured: true,
  },
  {
    name: "ShelfScan",
    eyebrow: "Mobile AI · Product",
    description: "A mobile experiment in scanning ingredients and estimating calories.",
    image: "/assets/images/shelf_scan.png",
    monogram: "S",
    href: "https://shelf-scan-4358b.web.app",
    featured: true,
  },
  {
    name: "DermaGlow",
    eyebrow: "Computer vision · Project",
    description: "An experiment in AI-assisted skin analysis.",
    image: "/assets/images/derma_glow.svg",
    monogram: "D",
    href: "https://derma-glow.web.app",
  },
  {
    name: "Maaş Dedektifi",
    eyebrow: "Data · Project",
    description: "A place to explore anonymously shared salary data.",
    image: "/assets/images/salary_detective.png",
    monogram: "M",
    href: "https://maasdedektifi.com",
  },
];

export const experience = [
  { role: "Lead AI Engineer", company: "Klyft", period: "2025 — now", href: "https://www.klyft-technologies.com" },
  { role: "Senior AI Engineer", company: "DiAS", period: "2025", href: "https://dias.com" },
  { role: "Lead MLOps Engineer", company: "Chooch", period: "2022 — 2025", href: "https://chooch.com" },
  { role: "Software Engineer", company: "Baykar", period: "2020 — 2022", href: "https://baykartech.com" },
] as const;
