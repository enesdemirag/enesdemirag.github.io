type ExperienceItem = {
  name: string;
  subtitle: string;
  period?: string;
  description: string;
  image: string | null;
  monogram: string;
  href: string | null;
};

type ExperienceRole = {
  title: string;
  employmentType?: string;
  period: string;
};

export type Experience = ExperienceItem & {
  roles?: ExperienceRole[];
  projects?: ExperienceItem[];
  awards?: string[];
};

const freelanceProjects: ExperienceItem[] = [
  {
    name: "BeneluxSoft B.V.",
    subtitle: "AI Engineer · Freelance",
    period: "Apr 2026 — Present",
    description: "Building AI systems and backend services for an accounting platform.",
    image: "/images/beneluxsoft-logo.png",
    monogram: "B",
    href: "https://beneluxsoft.com/",
  },
  {
    name: "CallsReady",
    subtitle: "Founder · Voice AI",
    period: "Sep 2026 — Present",
    description: "AI voice agents for incoming and outgoing business calls.",
    image: "/images/callsready-logo.png",
    monogram: "CR",
    href: "https://callsready.com",
  },
  {
    name: "foxperiment",
    subtitle: "A/B Testing With Virtual Audiences",
    description: "Testing product ideas with virtual audiences.",
    image: "/images/foxperiment-logo.png",
    monogram: "F",
    href: "https://foxperiment.com",
  },
  {
    name: "Destek Chat",
    subtitle: "Founder · Customer Support AI",
    period: "Nov 2025 — Present",
    description: "Creating an AI customer support assistant for small businesses.",
    image: "/images/destek-chat.png",
    monogram: "DC",
    href: "https://destek.chat",
  },
  {
    name: "dedicode",
    subtitle: "AI & Technology Newsletter",
    description: "A free Turkish newsletter covering AI and technology.",
    image: "/images/dedicode-logo.svg",
    monogram: "d",
    href: "https://dedicode.tr",
  },
  {
    name: "DiyetChat",
    subtitle: "AI Product · Nutrition",
    description: "A WhatsApp nutrition coach for meal planning, food logging, and daily guidance.",
    image: "/images/diyetchat-logo.png",
    monogram: "DC",
    href: "https://wa.me/905356509181?text=Merhaba%2C%20DiyetChat%20kullanmaya%20ba%C5%9Flamak%20istiyorum.",
  },
  {
    name: "HealPot",
    subtitle: "Google Health MCP",
    description: "Read-only Google Health tools for AI assistants, with hosted and self-hosted options.",
    image: "/images/healpot-logo.png",
    monogram: "H",
    href: "https://googlehealth.enesdemirag.com/",
  },
  {
    name: "ShelfScan",
    subtitle: "Co-Founder · Mobile AI",
    period: "Jan — Nov 2025",
    description: "An AI food scanner for ingredients, nutrition, and dietary needs.",
    image: "/images/shelf-scan.png",
    monogram: "S",
    href: "https://shelf-scan-4358b.web.app",
  },
  {
    name: "Answera Chat",
    subtitle: "AI Customer Support Assistant",
    description: "An AI assistant for customer support, instant replies, and lead capture.",
    image: "/images/answera-logo.png",
    monogram: "AC",
    href: "https://answera.chat",
  },
  {
    name: "Answera Talk",
    subtitle: "AI Voice Agents",
    description: "Managed AI voice agents for inbound calls, outbound calls, and business tools.",
    image: "/images/answera-logo.png",
    monogram: "AT",
    href: "https://answera.talk",
  },
  {
    name: "AnsweraEat",
    subtitle: "Local Food Ordering",
    description: "A food ordering platform for local restaurants and cafés.",
    image: "/images/answeraeat-logo.png",
    monogram: "AE",
    href: "https://answeraeat-customer.onrender.com",
  },
];

// Match the LinkedIn company order. The homepage stops after Baykar (the first six entries).
export const experience: Experience[] = [
  {
    name: "Klyft",
    subtitle: "Lead AI Engineer · Full-time",
    period: "Nov 2025 — Present",
    description: "Leading AI engineering across agentic systems and product experiences.",
    image: "/images/klyft.png",
    monogram: "K",
    href: "https://www.klyft-technologies.com",
  },
  {
    name: "Freelance",
    subtitle: "Self-employed",
    period: "Nov 2025 — Present",
    description: "Independent AI engineering, consulting, and products of my own.",
    image: "/images/freelance-logo.png",
    monogram: "F",
    href: null,
    projects: freelanceProjects,
  },
  {
    name: "DiAS Teknoloji",
    subtitle: "Senior AI Engineer · Full-time",
    period: "Feb — Nov 2025",
    description: "Worked on OCR and AI systems within a large software platform.",
    image: "/images/dias.jpg",
    monogram: "D",
    href: "https://diasteknoloji.com/",
  },
  {
    name: "Chooch AI",
    subtitle: "Full-time",
    period: "Jul 2022 — Nov 2025",
    description: "Built and led MLOps work for computer vision and language models.",
    image: "/images/chooch.jpg",
    monogram: "C",
    href: "https://chooch.com",
    roles: [
      { title: "Lead MLOps Engineer", employmentType: "Full-time", period: "Oct 2024 — Nov 2025" },
      { title: "MLOps Engineer", employmentType: "Full-time", period: "Jul 2022 — Oct 2024" },
    ],
  },
  {
    name: "Outlier",
    subtitle: "AI Trainer (RLHF & Red Teaming) · Part-time",
    period: "Nov 2024 — Apr 2025",
    description: "Evaluated and challenged AI model responses to improve quality and safety.",
    image: "/images/outlier.png",
    monogram: "O",
    href: "https://outlier.ai",
  },
  {
    name: "Baykar Technologies",
    subtitle: "Software Engineering",
    period: "Aug 2020 — Jul 2022",
    description: "Developed software with C++, C#, OpenCV, and OpenGL.",
    image: "/images/baykar.jpg",
    monogram: "B",
    href: "https://baykartech.com",
    roles: [
      { title: "Software Engineer", employmentType: "Full-time", period: "Mar 2021 — Jul 2022" },
      { title: "Software Engineer", employmentType: "Part-time", period: "Oct 2020 — Mar 2021" },
      { title: "Software Intern", employmentType: "Internship", period: "Aug — Oct 2020" },
    ],
  },
  {
    name: "Ravinspect Tech",
    subtitle: "Intern · Internship",
    period: "Jul — Sep 2018",
    description: "Explored point clouds, stereo vision, and indoor mapping for autonomous drones.",
    image: "/images/ravinspect-logo.jpg",
    monogram: "R",
    href: "https://www.linkedin.com/company/ravinspect/",
  },
  {
    name: "Desi Security & Lock Systems",
    subtitle: "Intern · Internship",
    period: "Jul — Aug 2017",
    description: "Gained hands-on experience with microcontrollers, electronics, and testing.",
    image: "/images/desi-logo.png",
    monogram: "D",
    href: "https://en.desi.com.tr/home",
  },
  {
    name: "İTÜ Bilgi İşlem Daire Başkanlığı",
    subtitle: "Assistant Student · Part-time",
    period: "Apr — Jun 2017",
    description: "Worked with Linux systems and campus network infrastructure.",
    image: "/images/itu.png",
    monogram: "ITU",
    href: "https://bidb.itu.edu.tr/",
  },
];

export const communityExperience: Experience[] = [
  {
    name: "ITU Autonomous Underwater Vehicle (AUV) Team",
    subtitle: "Software Team Leader",
    period: "Sep 2018 — Apr 2020",
    description: "Led software development for autonomous underwater vehicles, working on computer vision, path planning, and point cloud processing in ROS.",
    image: "/images/itu.png",
    monogram: "AUV",
    href: "https://auv.itu.edu.tr/",
  },
  {
    name: "ITU Robotics Club",
    subtitle: "Python Tutor",
    period: "Oct — Nov 2019",
    description: "Taught \"Introduction to Programming with Python\" to nearly 30 ITU students over five weeks. ITU Robotics Club was previously known as ARIGE.",
    image: "/images/itu.png",
    monogram: "ITU",
    href: "https://ogrencifaaliyetleri.itu.edu.tr/club/itu-robotik-kulubu/119",
  },
  {
    name: "ITU Racing Team",
    subtitle: "Software Team Member · Formula Student",
    period: "Feb 2017 — Sep 2018",
    description: "Worked on driverless and combustion-engine racing systems, including computer vision, LiDAR point cloud processing, and vehicle electronics.",
    image: "/images/itu-racing-logo.png",
    monogram: "ITUR",
    href: "https://ituracing.com/en/",
    roles: [
      { title: "Image Processing and Lane Detection", period: "Jul — Sep 2018" },
      { title: "LiDAR System on Driverless Racing Car", period: "Jan — Jul 2018" },
      { title: "ECU & Ignition System on Internal Combustion Engine", period: "Feb 2017 — Jan 2018" },
    ],
  },
  {
    name: "ITU Remotely Operated Vehicle (ROV) Team",
    subtitle: "Software Team Leader & Member",
    period: "Oct 2016 — Sep 2018",
    description: "A founding member of the underwater robotics team. Developed user interfaces, motor control, and communication systems, working with Raspberry Pi and embedded systems.",
    image: "/images/itu.png",
    monogram: "ROV",
    href: "https://ogrencifaaliyetleri.itu.edu.tr/team/itu-rov/8",
    roles: [
      { title: "Software Team Leader", period: "Sep 2017 — Sep 2018" },
      { title: "Software Team Member", period: "Oct 2016 — Sep 2017" },
    ],
    awards: [
      "2018 MATE ROV International Competition · 11th Place · Federal Way, Washington, USA",
      "2018 MATE ROV Regional Competition · 1st Place · Istanbul, Türkiye",
      "2017 MATE ROV International Competition · 23rd Place · Long Beach, California, USA",
      "2017 MATE ROV Regional Competition · 1st Place · Istanbul, Türkiye",
    ],
  },
];
