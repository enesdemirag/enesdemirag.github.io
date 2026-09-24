export type Category = 'education' | 'work' | 'project' | 'award' | 'life';

export interface TimelineItem {
  id: string;
  category: Category;
  title: string;
  subtitle?: string;
  timeRange: string;
  description: string;
  tags: string[];
  icon?: string;
  url?: string;
  images?: string[];
  order: number;
}

export interface TimelineEdge {
  from: string;
  to: string;
}

export const CATEGORY_LABELS: Record<Category, string> = {
  education: 'Education',
  work: 'Work',
  project: 'Project',
  award: 'Award',
  life: 'Life Event',
};

export const timelineItems: TimelineItem[] = [
  {
    "id": "UKJob",
    "category": "work",
    "title": "Klyft",
    "subtitle": "Lead AI Engineer",
    "timeRange": "Nov. 2025 – Present",
    "description": "I am building agentic AI systems for a UK-based mobile product utilizing Google ADK. My responsibilities cover core AI architecture, third-party integrations, and ensuring complete reliability for our production rollout.",
    "tags": [
      "Google ADK",
      "Agentic AI",
      "Mobile",
      "Python"
    ],
    "icon": "/images/klyft.jpeg",
    "url": "https://klyft-technologies.com",
    "images": [
      "/images/klyft.jpeg"
    ],
    "order": 1
  },
  {
    "id": "MySaaS",
    "category": "project",
    "title": "Destek Chat",
    "subtitle": "Founder",
    "timeRange": "Nov. 2025 – Present",
    "description": "I founded Destek Chat, an AI Customer Service Assistant SaaS tailored for small and medium businesses. I architected and built the entire platform using Next.js, NestJS, Firebase, and various LLM integrations.",
    "tags": [
      "Agentic AI",
      "Web App",
      "Firebase",
      "Backend",
      "Next.js",
      "NestJS"
    ],
    "icon": "/images/destekchat.png",
    "url": "https://destek.chat",
    "images": [
      "/images/destekchat.png"
    ],
    "order": 2
  },
  {
    "id": "Freelance",
    "category": "work",
    "title": "Freelance",
    "subtitle": "AI Engineer",
    "timeRange": "Nov. 2025 – Present",
    "description": "I provide specialized freelance services covering agentic AI systems, modern mobile app development, scalable websites, technical consulting, and general software development support.",
    "tags": [
      "AI",
      "Web Dev",
      "Mobile",
      "Consulting"
    ],
    "order": 3
  },
  {
    "id": "CoupleApp",
    "category": "project",
    "title": "Secret Project",
    "subtitle": "Co-Founder",
    "timeRange": "Feb. 2026 – Present",
    "description": "I am developing an exciting mobile app project alongside my wife during our spare time.",
    "tags": [
      "Mobile",
      "React Native",
      "Expo"
    ],
    "order": 4
  },
  {
    "id": "Resign",
    "category": "life",
    "title": "Resignations",
    "timeRange": "Nov. 2025",
    "description": "I resigned from all my previous positions to focus entirely on entrepreneurship, active founding roles, and freelance consulting.",
    "tags": [],
    "order": 5
  },
  {
    "id": "Outlier",
    "category": "work",
    "title": "Outlier",
    "subtitle": "AI Contributor",
    "timeRange": "Nov. 2024 – Present",
    "description": "I enhance AI model performance by meticulously curating high-quality training data, evaluating model outputs for RLHF (Reinforcement Learning from Human Feedback), and conducting adversarial testing to significantly improve model safety and robustness.",
    "tags": [
      "RLHF",
      "Adversarial Testing",
      "AI Safety",
      "LLM Validation"
    ],
    "url": "https://outlier.ai",
    "order": 6
  },
  {
    "id": "Dias",
    "category": "work",
    "title": "DiAS",
    "subtitle": "Senior AI Engineer",
    "timeRange": "Feb. 2025 – Nov. 2025",
    "description": "I engineered ML services heavily focused on document understanding, including robust OCR, QR decoding, watermark handling, and complex text extraction pipelines. I delivered production-ready Python services featuring clean, optimal APIs and maintainable deployment patterns.",
    "tags": [
      "OCR",
      "ML",
      "Python",
      "FastAPI"
    ],
    "icon": "/images/dias.jpg",
    "url": "https://dias.com",
    "images": [
      "/images/dias.jpg"
    ],
    "order": 7
  },
  {
    "id": "ChoochCont",
    "category": "work",
    "title": "Chooch AI",
    "subtitle": "Lead MLOps Engineer",
    "timeRange": "Oct. 2024 – Nov. 2025",
    "description": "I continued to actively lead the MLOps engineering team remotely during US hours, balancing this demanding role with my daytime position in Turkey.",
    "tags": [
      "MLOps",
      "Team Lead",
      "Remote"
    ],
    "icon": "/images/chooch.jpg",
    "url": "https://chooch.com",
    "order": 8
  },
  {
    "id": "ShelfScan",
    "category": "project",
    "title": "ShelfScan",
    "subtitle": "Co-Founder",
    "timeRange": "Jan. 2025 – Nov. 2025",
    "description": "I co-founded a mobile app startup aimed at ingredient scanning and calorie analysis. I integrated the Gemini API for intelligence and built the scalable infrastructure using Firebase Auth, Firestore, and Cloud Storage.",
    "tags": [
      "Flutter",
      "Firebase",
      "Gemini API",
      "Mobile"
    ],
    "icon": "/images/shelfscan.png",
    "url": "https://shelf-scan-4358b.web.app",
    "images": [
      "/images/shelfscan.png"
    ],
    "order": 9
  },
  {
    "id": "MultiJob",
    "category": "life",
    "title": "Overemployment",
    "timeRange": "Feb. 2025 – Nov. 2025",
    "description": "I took on two full-time jobs simultaneously. During the day, I tackled document understanding ML challenges in Turkey for DiAS, and at night, I remotely led the MLOps team for Chooch AI in the US. I sustained this routine for about a year while simultaneously co-founding a startup.",
    "tags": [],
    "order": 10
  },
  {
    "id": "ChoochLead",
    "category": "work",
    "title": "Chooch AI",
    "subtitle": "Lead MLOps Engineer",
    "timeRange": "Oct. 2024 – Nov. 2025",
    "description": "As a team lead, I drove the deployment of real-time inference systems and backend APIs for complex Computer Vision and LLM workloads across edge environments and major cloud providers (AWS, GCP, Azure). I served and aggressively optimized AI models using ONNX, TensorRT, Triton, and DeepStream. I enforced strong engineering practices such as comprehensive testing, standard packaging, rigorous code reviews, and robust CI/CD pipelines while managing messaging infrastructure utilizing Kafka, MQTT, Redis, RabbitMQ, and MinIO.",
    "tags": [
      "Team Lead",
      "AI",
      "CV",
      "LLM",
      "Kafka",
      "Redis",
      "AWS",
      "GCP",
      "Azure",
      "ONNX",
      "TensorRT",
      "Triton"
    ],
    "icon": "/images/chooch.jpg",
    "url": "https://chooch.com",
    "images": [
      "/images/chooch.jpg"
    ],
    "order": 11
  },
  {
    "id": "Evlilik",
    "category": "life",
    "title": "💍 Marriage",
    "subtitle": "Married Büşra",
    "timeRange": "2024",
    "description": "I happily married my wonderful wife, Büşra.",
    "tags": [],
    "order": 12
  },
  {
    "id": "ChoochMLOps",
    "category": "work",
    "title": "Chooch AI",
    "subtitle": "MLOps Engineer",
    "timeRange": "Jul. 2022 – Oct. 2024",
    "description": "I joined Chooch, a Silicon Valley-based startup, as an MLOps Engineer. My primary focus was on bridging the gap between machine learning models and robust production environments, deploying real-time inference systems and maintaining highly available backend APIs.",
    "tags": [
      "MLOps",
      "Docker",
      "AWS",
      "GCP",
      "ONNX",
      "TensorRT",
      "Triton"
    ],
    "icon": "/images/chooch.jpg",
    "url": "https://chooch.com",
    "order": 13
  },
  {
    "id": "Y2",
    "category": "education",
    "title": "Master's Discontinued",
    "subtitle": "Istanbul Technical University",
    "timeRange": "Feb. 2021 – 2024 (Discontinued)",
    "description": "I formally discontinued my Master's program in Computer Science with only the final thesis remaining, actively choosing to prioritize and focus entirely on accelerating my industry career growth.",
    "tags": [],
    "icon": "/images/itu.png",
    "order": 14
  },
  {
    "id": "CertAzure",
    "category": "award",
    "title": "Azure Fundamentals",
    "subtitle": "Microsoft Certification",
    "timeRange": "Aug. 2022",
    "description": "I achieved the Microsoft Azure Fundamentals certification, verifying my foundational knowledge of cloud architectural concepts and core Azure specific services.",
    "tags": [
      "Azure",
      "Cloud",
      "Certification",
      "Microsoft"
    ],
    "order": 15
  },
  {
    "id": "Y1",
    "category": "education",
    "title": "Scientific Preparation for Master's",
    "subtitle": "Istanbul Technical University",
    "timeRange": "2021 – 2022",
    "description": "I successfully completed a rigorous set of scientific preparation courses required for the Computer Science Master's program alongside my full-time work.",
    "tags": [
      "Computer Science"
    ],
    "icon": "/images/itu.png",
    "order": 16
  },
  {
    "id": "X",
    "category": "work",
    "title": "Baykar Technologies",
    "subtitle": "Software Engineer",
    "timeRange": "Mar. 2021 – Jul. 2022",
    "description": "I developed mission-critical augmented reality interfaces and real-time video decoding systems. I aggressively implemented image processing and enhancement solutions utilizing OpenCV and OpenGL. Overall, I successfully led over 10 distinct computer vision projects focusing relentlessly on real-time performance and absolute framework reliability.",
    "tags": [
      "C++",
      "C#",
      "OpenCV",
      "OpenGL",
      "Computer Vision",
      "AR"
    ],
    "icon": "/images/baykar.jpg",
    "url": "https://baykartech.com",
    "images": [
      "/images/baykar.jpg"
    ],
    "order": 17
  },
  {
    "id": "Y",
    "category": "education",
    "title": "Master's in Computer Science",
    "subtitle": "Istanbul Technical University",
    "timeRange": "Feb. 2021 – 2024",
    "description": "I proudly enrolled in the highly competitive Computer Science Master's program at ITU while simultaneously maintaining my full-time commitments at Baykar Technologies.",
    "tags": [
      "Computer Science",
      "Graduate Studies"
    ],
    "icon": "/images/itu.png",
    "order": 18
  },
  {
    "id": "W",
    "category": "life",
    "title": "🎓 University Graduation",
    "subtitle": "BSc. Electronics and Communication Engineering",
    "timeRange": "Feb. 2021",
    "description": "I happily graduated from Istanbul Technical University after successfully completing 1 preparatory year alongside 8 intensive undergraduate semesters.",
    "tags": [
      "Graduation"
    ],
    "icon": "/images/itu.png",
    "order": 19
  },
  {
    "id": "V",
    "category": "project",
    "title": "Bachelor's Thesis: GANs & Image Inpainting",
    "subtitle": "Prof. Dr. Ender Mete Ekşioğlu",
    "timeRange": "2020 – 2021",
    "description": "I conducted a specialized research project focusing on Generative Adversarial Networks directed towards image inpainting. This work was supervised by Prof. Dr. Ender Mete Ekşioğlu.",
    "tags": [
      "GANs",
      "Deep Learning",
      "Image Inpainting",
      "PyTorch"
    ],
    "icon": "/images/itu.png",
    "order": 20
  },
  {
    "id": "U_baykar",
    "category": "work",
    "title": "Baykar Technologies",
    "subtitle": "Software Engineer (Part-time)",
    "timeRange": "Oct. 2020 – Mar. 2021",
    "description": "I transitioned to a part-time Software Engineer role where I developed an augmented reality visualization system completely from scratch, destined for specialized unmanned aerial vehicles.",
    "tags": [
      "Augmented Reality",
      "OpenCV",
      "OpenGL",
      "C++"
    ],
    "icon": "/images/baykar.jpg",
    "url": "https://baykartech.com",
    "order": 21
  },
  {
    "id": "T",
    "category": "work",
    "title": "Baykar Technologies",
    "subtitle": "Software Intern",
    "timeRange": "Aug. 2020 – Oct. 2020",
    "description": "I landed an internship at Baykar's esteemed imaging systems division where I actively contributed to the AKINCI drone project's intensive R&D processes.",
    "tags": [
      "Image Processing",
      "Drones",
      "R&D",
      "C++"
    ],
    "icon": "/images/baykar.jpg",
    "url": "https://baykartech.com",
    "order": 22
  },
  {
    "id": "CertML",
    "category": "award",
    "title": "Machine Learning Crash Course",
    "subtitle": "Google Certification",
    "timeRange": "May 2020",
    "description": "I successfully completed Google's Machine Learning Crash Course, deepening my theoretical understanding of ML principles and their practical applications.",
    "tags": [
      "Machine Learning",
      "Google",
      "Certification"
    ],
    "order": 23
  },
  {
    "id": "AUV_Remote",
    "category": "project",
    "title": "ITU AUV Team",
    "subtitle": "Software Developer (Remote)",
    "timeRange": "Jan. 2019 – Jun. 2019",
    "description": "I actively continued to provide software support to the ITU AUV team remotely through digital collaboration while currently studying abroad in Liverpool.",
    "tags": [
      "Remote",
      "Computer Vision"
    ],
    "icon": "/images/itu.png",
    "order": 24
  },
  {
    "id": "RobotikKulup",
    "category": "education",
    "title": "ITU Robotics Club",
    "subtitle": "Python Tutor",
    "timeRange": "Oct. 2019 – Nov. 2019",
    "description": "I gave back to the community by teaching weekly introductory Python programming courses to an engaged class of approximately 30 students through ITU's Robotics Club.",
    "tags": [
      "Python",
      "Teaching"
    ],
    "icon": "/images/itu.png",
    "order": 25
  },
  {
    "id": "Erasmus",
    "category": "education",
    "title": "Erasmus Student Exchange",
    "subtitle": "Liverpool John Moores University",
    "timeRange": "Jan. 2019 – Jun. 2019",
    "description": "I studied abroad in the United Kingdom at Liverpool John Moores University in the Electronics and Electrical Engineering department, participating in the prestigious Erasmus+ exchange program.",
    "tags": [
      "Study Abroad",
      "Erasmus+"
    ],
    "icon": "/images/ljmu_logo.svg",
    "url": "https://www.ljmu.ac.uk",
    "order": 26
  },
  {
    "id": "CertPython",
    "category": "award",
    "title": "PCAP: Programming Essentials in Python",
    "subtitle": "OpenEDG Python Institute",
    "timeRange": "Feb. 2019",
    "description": "I earned the PCAP certification, solidifying my proficiency and proving my expertise in Python programming essentials and core language syntax.",
    "tags": [
      "Python",
      "Certification"
    ],
    "order": 27
  },
  {
    "id": "AUV_Found",
    "category": "project",
    "title": "ITU AUV Team",
    "subtitle": "Software Developer",
    "timeRange": "Sep. 2018 – Apr. 2020",
    "description": "I joined the ITU AUV (Autonomous Underwater Vehicle) Team as an active Software Developer. I played a vital role in architecting software for complex computer vision, object detection, and underwater navigation systems utilizing ROS.",
    "tags": [
      "Computer Vision",
      "Object Detection",
      "Navigation",
      "Autonomous",
      "ROS"
    ],
    "icon": "/images/itu.png",
    "order": 28
  },
  {
    "id": "StajRav",
    "category": "work",
    "title": "Ravinspect Tech",
    "subtitle": "Intern",
    "timeRange": "Jul. 2018 – Sep. 2018",
    "description": "I interned at Ravinspect Tech, an innovative drone startup located in ITU's incubator. I gained invaluable hands-on experience experimenting with point cloud processing, stereo cameras, and sophisticated real-time indoor mapping and navigation systems (SLAM).",
    "tags": [
      "Point Cloud Processing",
      "Stereo Vision",
      "SLAM",
      "Drones"
    ],
    "order": 29
  },
  {
    "id": "Res1",
    "category": "award",
    "title": "ROV: TR Champ. & USA Ranking 🏆",
    "subtitle": "MATE Global — Washington",
    "timeRange": "2018",
    "description": "I successfully led our software team to decisively win the Turkish National Championship again, subsequently representing Turkey at the global competition in Washington, and proudly achieving an improved international software ranking.",
    "tags": [
      "ROV",
      "Robotics",
      "Competition"
    ],
    "order": 30
  },
  {
    "id": "Res2",
    "category": "award",
    "title": "Italy: Formula Student 🏁",
    "subtitle": "Formula Student Italy",
    "timeRange": "2018",
    "description": "As a core component of the ITU Racing team, we qualified and fiercely competed at the Formula Student competition in Italy, proudly flying the flag for Turkey.",
    "tags": [
      "Formula Student",
      "Autonomous Vehicle"
    ],
    "order": 31
  },
  {
    "id": "P_ROV",
    "category": "project",
    "title": "ITU ROV Team",
    "subtitle": "Software Team Leader",
    "timeRange": "Sep. 2017 – Sep. 2018",
    "description": "I stepped up to definitively lead our software team of 5-10 dedicated members. I organized and conducted technical presentations, assigned complex tasks, thoroughly tracked our progress, and actively contributed to core vehicle software development.",
    "tags": [
      "Python",
      "C++",
      "Computer Vision",
      "Leadership",
      "C#"
    ],
    "icon": "/images/itu.png",
    "order": 32
  },
  {
    "id": "P_Racing",
    "category": "project",
    "title": "ITU Racing Driverless",
    "subtitle": "Software Developer",
    "timeRange": "Sep. 2017 – Aug. 2018",
    "description": "I integrated tightly with the Autonomous Systems Lab to work intensively on LIDAR sensors, complex point cloud processing, NVIDIA Jetson embedded devices, advanced lane tracking systems, ICE ignition sequences, and rigorous ECU programming.",
    "tags": [
      "LIDAR",
      "Point Cloud Processing",
      "NVIDIA Jetson",
      "ECU",
      "Autonomous Systems"
    ],
    "icon": "/images/itu.png",
    "order": 33
  },
  {
    "id": "P_BIDB",
    "category": "work",
    "title": "İTÜ Bilgi İşlem Daire Başkanlığı",
    "subtitle": "Assistant Student",
    "timeRange": "Apr. 2017 – Jun. 2017",
    "description": "I enthusiastically took on a part-time position functioning at ITU's core IT department. I immediately gained highly valuable practical experience operating natively within rigorous Linux environments and complex campus network topologies.",
    "tags": [
      "Linux",
      "Network Topology",
      "System Administration"
    ],
    "icon": "/images/itu.png",
    "order": 34
  },
  {
    "id": "StajDesi",
    "category": "work",
    "title": "Desi Security & Lock Systems",
    "subtitle": "Intern",
    "timeRange": "Jul. 2017 – Aug. 2017",
    "description": "During my very first internship operating at an established security systems company, I quickly gained foundational hands-on technical experience with microcontrollers, oscilloscopes, rapid soldering, precision assembly, and strict quality control processes.",
    "tags": [
      "Microcontrollers",
      "Electronics",
      "Oscilloscope",
      "Soldering"
    ],
    "order": 35
  },
  {
    "id": "G1",
    "category": "education",
    "title": "Volunteer Math Tutoring",
    "timeRange": "2016 – 2017",
    "description": "I volunteered primarily as a math tutor during my intensive preparatory year, assisting fellow students directly in understanding fundamental pool mathematics courses.",
    "tags": [
      "Teaching",
      "Mathematics"
    ],
    "order": 36
  },
  {
    "id": "G2",
    "category": "project",
    "title": "Python Studies",
    "timeRange": "2016 – 2017",
    "description": "I dedicated a highly significant self-study period towards mastering Python programming principles and deeply exploring its diverse applications within engineering fields.",
    "tags": [
      "Python"
    ],
    "order": 37
  },
  {
    "id": "I",
    "category": "award",
    "title": "ROV: TR Championship & USA 🏆",
    "subtitle": "MATE Global Competition — California",
    "timeRange": "2017",
    "description": "Our determined student team won the Turkish National ROV Championship. I subsequently traveled eagerly to represent Turkey competing at MATE's global competition in Long Beach, California.",
    "tags": [
      "Robotics",
      "Competition",
      "Leadership"
    ],
    "icon": "/images/itu.png",
    "order": 38
  },
  {
    "id": "U1",
    "category": "project",
    "title": "ITU ROV Team",
    "subtitle": "Software Developer",
    "timeRange": "Oct. 2016 – Sep. 2017",
    "description": "I proudly co-founded the ITU ROV (Remotely Operated Vehicle) Team. Throughout my first operational year, I focused extensively on Python, C++, C#, integrating Raspberry Pi, programming Arduino, and architecting initial computer vision systems.",
    "tags": [
      "Python",
      "C++",
      "C#",
      "Raspberry Pi",
      "Arduino",
      "Computer Vision"
    ],
    "icon": "/images/itu.png",
    "order": 39
  },
  {
    "id": "UniStart",
    "category": "education",
    "title": "BSc. Electronics & Communication Eng.",
    "subtitle": "Istanbul Technical University",
    "timeRange": "Sep. 2016 – Feb. 2021",
    "description": "I successfully enrolled in the rigorous Electronics and Communication Engineering program at ITU. I comfortably passed the demanding English proficiency exam with an exceptionally high score (94/100) specifically to begin my engineering coursework immediately.",
    "tags": [
      "Electronics",
      "Communication",
      "Engineering"
    ],
    "icon": "/images/itu.png",
    "url": "https://www.itu.edu.tr",
    "order": 40
  },
  {
    "id": "L5",
    "category": "project",
    "title": "Arduino & IoT Projects",
    "timeRange": "2015 – 2016",
    "description": "I enthusiastically expanded my Arduino skills scaling far beyond the introductory basics. I regularly worked intimately with circuit breadboards and foundational soldering kits to practically build various simple, sensor-driven IoT devices.",
    "tags": [
      "Arduino",
      "IoT",
      "Electronics",
      "Soldering"
    ],
    "order": 41
  },
  {
    "id": "L4",
    "category": "award",
    "title": "Robotics Team & Solar Boat 🏆",
    "subtitle": "1st Place — Koç University Solar Boat Competition",
    "timeRange": "2015",
    "description": "I co-founded an ambitious robotics development team alongside close friends and our physics teacher. We systematically built competitive sumo robots, swift line followers, and crucially, an award-winning solar-powered miniature boat that easily took 1st place at the Koç University innovation fair.",
    "tags": [
      "Arduino",
      "Robotics",
      "Solar Energy"
    ],
    "order": 42
  },
  {
    "id": "L3",
    "category": "project",
    "title": "C# Mini Games",
    "timeRange": "2014",
    "description": "I formally started my actual software development journey completely from scratch by learning C#. I successfully built several functional mini-games that I proudly showcased directly to my teachers and intrigued classmates rendering on our classroom smart board.",
    "tags": [
      "C#",
      "Game Dev"
    ],
    "order": 43
  },
  {
    "id": "L2",
    "category": "project",
    "title": "DijitalBeyin.net",
    "subtitle": "Co-Creator",
    "timeRange": "2013",
    "description": "I co-created DijitalBeyin.net, a fully functional technology news website built structurally using WordPress. I actively authored and shared engaging articles discussing the latest technological developments and industry shifts.",
    "tags": [
      "WordPress",
      "Web Development"
    ],
    "order": 44
  },
  {
    "id": "L1_5",
    "category": "education",
    "title": "Prof. Dr. Nabi Avcı Science High School",
    "subtitle": "High School",
    "timeRange": "2012 – 2016",
    "description": "I reliably attended Prof. Dr. Nabi Avcı Science High School, where I fundamentally built a particularly strong, enduring foundation in rigorous mathematics and empirical sciences.",
    "tags": [
      "High School",
      "Science"
    ],
    "order": 45
  },
  {
    "id": "L1",
    "category": "education",
    "title": "HTML5 & Web Design",
    "timeRange": "2010 – 2012",
    "description": "I proactively became self-taught in initial web design, thoroughly learning foundational HTML5 and standard Photoshop entirely during middle school and thereby cultivating an intense, lasting passion for technology incredibly early on.",
    "tags": [
      "HTML5",
      "CSS",
      "Photoshop"
    ],
    "order": 46
  }
];

export const timelineEdges: TimelineEdge[] = [
  {
    "from": "UKJob",
    "to": "Resign"
  },
  {
    "from": "MySaaS",
    "to": "Resign"
  },
  {
    "from": "Freelance",
    "to": "Resign"
  },
  {
    "from": "CoupleApp",
    "to": "Resign"
  },
  {
    "from": "Outlier",
    "to": "Resign"
  },
  {
    "from": "Resign",
    "to": "Dias"
  },
  {
    "from": "Resign",
    "to": "ChoochCont"
  },
  {
    "from": "Resign",
    "to": "ShelfScan"
  },
  {
    "from": "Outlier",
    "to": "ChoochLead"
  },
  {
    "from": "Dias",
    "to": "MultiJob"
  },
  {
    "from": "ChoochCont",
    "to": "MultiJob"
  },
  {
    "from": "ShelfScan",
    "to": "MultiJob"
  },
  {
    "from": "MultiJob",
    "to": "ChoochLead"
  },
  {
    "from": "ChoochLead",
    "to": "Evlilik"
  },
  {
    "from": "Evlilik",
    "to": "ChoochMLOps"
  },
  {
    "from": "Evlilik",
    "to": "Y2"
  },
  {
    "from": "ChoochMLOps",
    "to": "CertAzure"
  },
  {
    "from": "CertAzure",
    "to": "X"
  },
  {
    "from": "Y2",
    "to": "Y1"
  },
  {
    "from": "X",
    "to": "W"
  },
  {
    "from": "Y",
    "to": "W"
  },
  {
    "from": "Y1",
    "to": "Y"
  },
  {
    "from": "W",
    "to": "V"
  },
  {
    "from": "V",
    "to": "U_baykar"
  },
  {
    "from": "U_baykar",
    "to": "T"
  },
  {
    "from": "T",
    "to": "CertML"
  },
  {
    "from": "CertML",
    "to": "RobotikKulup"
  },
  {
    "from": "RobotikKulup",
    "to": "Erasmus"
  },
  {
    "from": "AUV_Remote",
    "to": "Erasmus"
  },
  {
    "from": "Erasmus",
    "to": "CertPython"
  },
  {
    "from": "CertPython",
    "to": "AUV_Found"
  },
  {
    "from": "Erasmus",
    "to": "AUV_Remote"
  },
  {
    "from": "AUV_Found",
    "to": "StajRav"
  },
  {
    "from": "StajRav",
    "to": "Res1"
  },
  {
    "from": "StajRav",
    "to": "Res2"
  },
  {
    "from": "StajRav",
    "to": "P_BIDB"
  },
  {
    "from": "Res1",
    "to": "P_ROV"
  },
  {
    "from": "Res2",
    "to": "P_Racing"
  },
  {
    "from": "P_ROV",
    "to": "StajDesi"
  },
  {
    "from": "P_Racing",
    "to": "StajDesi"
  },
  {
    "from": "P_BIDB",
    "to": "StajDesi"
  },
  {
    "from": "StajDesi",
    "to": "I"
  },
  {
    "from": "StajDesi",
    "to": "G1"
  },
  {
    "from": "I",
    "to": "U1"
  },
  {
    "from": "G1",
    "to": "U1"
  },
  {
    "from": "G2",
    "to": "U1"
  },
  {
    "from": "U1",
    "to": "UniStart"
  },
  {
    "from": "UniStart",
    "to": "L5"
  },
  {
    "from": "L5",
    "to": "L4"
  },
  {
    "from": "L4",
    "to": "L3"
  },
  {
    "from": "L3",
    "to": "L2"
  },
  {
    "from": "L2",
    "to": "L1_5"
  },
  {
    "from": "L1_5",
    "to": "L1"
  }
];
