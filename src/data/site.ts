export const site = {
  name: "Enes Demirağ",
  title: "Enes Demirağ — AI Engineer & Product Builder",
  description: "I build AI products and the systems behind them. Notes on software, computer vision, and things I've learned while building.",
  email: "enesdmrg@gmail.com",
  calendar: "https://cal.com/enesdemirag/meet",
  location: "Istanbul, Türkiye",
  portrait: "/images/profile.jpg",
  resume: "/documents/enesdemirag-resume.pdf",
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
    image: "/images/callsready-logo.png",
    monogram: "CR",
    href: "https://callsready.com",
    featured: true,
  },
  {
    name: "Hudux AI",
    eyebrow: "Voice AI · Product",
    description: "An inbound voice agent platform for businesses, built around practical phone and browser conversations.",
    image: "/images/hudux.png",
    monogram: "H",
    href: "https://linkedin.com/company/Hudux",
    featured: true,
  },
  {
    name: "Destek Chat",
    eyebrow: "Customer Support · Product",
    description: "An AI customer service assistant for small businesses.",
    image: "/images/destek-chat.png",
    monogram: "D",
    href: "https://destek.chat",
    featured: true,
  },
  {
    name: "DiyetChat",
    eyebrow: "Nutrition AI · Product",
    description: "A WhatsApp-based AI nutrition coach for meal plans, food logging, and daily guidance.",
    image: "/images/diyetchat-logo.png",
    monogram: "DC",
    href: "https://wa.me/905356509181?text=Merhaba%2C%20DiyetChat%20kullanmaya%20ba%C5%9Flamak%20istiyorum.",
    featured: true,
  },
  {
    name: "ShelfScan",
    eyebrow: "Mobile AI · Product",
    description: "A mobile experiment in scanning ingredients and estimating calories.",
    image: "/images/shelf-scan.png",
    monogram: "S",
    href: "https://shelf-scan-4358b.web.app",
    featured: true,
  },
  {
    name: "DermaGlow",
    eyebrow: "Computer Vision · Project",
    description: "An experiment in AI-assisted skin analysis.",
    image: "/images/derma-glow.svg",
    monogram: "D",
    href: "https://derma-glow.web.app",
  },
  {
    name: "Maaş Dedektifi",
    eyebrow: "Data · Project",
    description: "A place to explore anonymously shared salary data.",
    image: "/images/salary-detective.png",
    monogram: "M",
    href: "https://maasdedektifi.com",
  },
];

export const teamProjects: Project[] = [
  {
    name: "ITU AUV Team",
    eyebrow: "University Team · 2018–2020",
    description: "Developed computer vision and ROS software for autonomous underwater vehicles.",
    image: null,
    monogram: "AUV",
    href: null,
  },
  {
    name: "ITU Racing Team",
    eyebrow: "University Team · 2017–2018",
    description: "Worked on lane detection, LiDAR, and ECU and ignition systems for racing and driverless cars.",
    image: null,
    monogram: "RT",
    href: null,
  },
  {
    name: "ITU ROV Team",
    eyebrow: "University Team · 2016–2018",
    description: "Software team member, lead, and mentor; won the MATE ROV regional competition in 2017 and 2018.",
    image: null,
    monogram: "ROV",
    href: null,
  },
];

export const experience = [
  { role: "Lead AI Engineer", company: "Klyft", period: "Nov 2025 — Present", focus: "Agentic AI · Google ADK", href: "https://www.klyft-technologies.com" },
  { role: "Founder", company: "CallsReady", period: "Sep 2026 — Present", focus: "Voice AI · Agentic AI", href: "https://callsready.com" },
  { role: "Founder", company: "Destek Chat", period: "Nov 2025 — Present", focus: "AI audio models · Text-to-speech", href: "https://destek.chat" },
  { role: "Senior AI Engineer", company: "DiAS Teknoloji", period: "Feb — Nov 2025", focus: "OCR · .NET Core", href: "https://dias.com" },
  { role: "Co-Founder", company: "ShelfScan", period: "Jan — Nov 2025", focus: "Firebase · OpenAI API", href: "https://shelf-scan-4358b.web.app" },
  { role: "Lead MLOps Engineer", company: "Chooch AI", period: "Oct 2024 — Nov 2025", focus: "LLMs · Vision-language models", href: "https://chooch.com" },
  { role: "AI Trainer (RLHF & Red Teaming)", company: "Outlier", period: "Nov 2024 — Apr 2025", focus: "RLHF · Prompt engineering", href: "https://outlier.ai" },
  { role: "MLOps Engineer", company: "Chooch AI", period: "Jul 2022 — Oct 2024", focus: "MLOps · Computer vision", href: "https://chooch.com" },
  { role: "Software Engineer", company: "Baykar Technologies", period: "Mar 2021 — Jul 2022", focus: "C# · OpenCV", href: "https://baykartech.com" },
  { role: "Software Engineer (Part-Time)", company: "Baykar Technologies", period: "Oct 2020 — Mar 2021", focus: "C++ · OpenGL", href: "https://baykartech.com" },
  { role: "Software Intern", company: "Baykar Technologies", period: "Aug — Oct 2020", focus: "C++", href: "https://baykartech.com" },
  { role: "Software Developer", company: "ITU AUV Team", period: "Sep 2018 — Apr 2020", focus: "Computer vision · ROS", href: null },
  { role: "Python Tutor", company: "ITU Robotics Club", period: "Oct — Nov 2019", focus: "Introductory Python classes", href: null },
] as const;
