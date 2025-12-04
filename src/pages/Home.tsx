import { useState } from 'react';
import { ExternalLink, MapPin, Calendar, ChevronDown, FileText, Mail } from 'lucide-react';
import { FaGithub, FaLinkedinIn, FaMediumM, FaYoutube } from 'react-icons/fa';

const socialLinks = [
  { icon: FaGithub, href: 'https://github.com/enesdemirag', label: 'GitHub' },
  { icon: FaLinkedinIn, href: 'https://linkedin.com/in/enesdemirag', label: 'LinkedIn' },
  { icon: FaMediumM, href: 'https://ensdmrg.medium.com/', label: 'Medium' },
  { icon: FaYoutube, href: 'https://www.youtube.com/@enes-demirag', label: 'YouTube' },
  { icon: Mail, href: 'mailto:enesdmrg@gmail.com', label: 'Email' },
];

// Data
const experiences = [
  {
    company: 'Klyft',
    role: 'Lead AI Engineer',
    period: 'Nov 2025 - Present',
    description: 'Klyft is a mobile app company based in UK. Working as one of the founding engineers, developing agentic AI systems using Google ADK.',
    logo: '🚀',
    url: 'https://klyft-technologies.com',
  },
  {
    company: 'DiAS',
    role: 'Senior AI Engineer',
    period: 'Feb 2025 - Nov 2025',
    description: 'Atlastek is a Technology company for the Product Tracking Platform by DiAS Group. Built multiple ML services including OCR (Tesseract), QR code decoding, watermark resolving, and text extraction tools.',
    logo: '/images/dias.jpg',
    url: 'https://dias.com',
  },
  {
    company: 'Chooch',
    role: 'MLOps Team Leader',
    period: 'Jul 2022 - Feb 2025',
    description: 'Led deployment of real-time inference engines, Generative AI models, LLMs, and backend APIs. Skilled in model optimization using ONNX and TensorRT.',
    logo: '/images/chooch.jpg',
    url: 'https://chooch.com',
  },
  {
    company: 'Scale AI',
    role: 'AI Model Training Engineer',
    period: 'Nov 2024 - Present',
    description: 'Worked on data labeling, model evaluation, and training data quality assurance for various AI applications.',
    logo: '/images/scaleai.jpg',
    url: 'https://scale.com',
  },
  {
    company: 'Baykar Defence',
    role: 'Software Engineer',
    period: 'Aug 2020 - Jul 2022',
    description: 'Developed augmented reality and real-time video decoding systems. Led 10+ vision-based ML projects focusing on system reliability and real-time performance.',
    logo: '/images/baykar.jpg',
    url: 'https://baykartech.com',
  },
];

const projects = [
  {
    name: 'DermaGlow',
    description: 'AI-powered skin analysis Flutter app with personalized skincare recommendations.',
    period: '2025',
    url: 'https://derma-glow.web.app',
    repo: '',
    logo: '/images/dermaglow.svg',
  },
  {
    name: 'Hudux AI',
    description: 'AI-powered visual monitoring platform with VLMs and natural language commands. (Discontinued)',
    period: '2025',
    url: 'https://hudux.tech',
    repo: '',
    logo: '/images/hudux.png',
  },
  {
    name: 'Maaş Dedektifi',
    description: 'Website where anyone can submit job/paycheck details anonymously and browse all entries. (Discontinued)',
    period: 'Jan - Feb 2025',
    url: 'https://maasdedektifi.com',
    repo: '',
    logo: '/images/maasdedektifi.png',
  },
  {
    name: 'ShelfScan',
    description: 'Mobile app for scanning product barcodes to get nutritional information and health recommendations.',
    period: '2025',
    url: 'https://shelfscan.app',
    repo: '',
    logo: '/images/shelfscan.png',
  },
  {
    name: 'Kazanco',
    description: 'Mobile app that rewards users for watching advertisements.',
    period: '2024',
    url: 'https://kazanco.app',
    repo: '',
    logo: '/images/kazanco.png',
  },
];

const education = [
  {
    school: 'Istanbul Technical University',
    degree: "Master's in Computer Engineering",
    period: '2021 - 2024',
    logo: '/images/itu.png',
  },
  {
    school: 'Istanbul Technical University',
    degree: "Bachelor's in Electronics & Communication",
    period: '2016 - 2021',
    logo: '/images/itu.png',
  },
  {
    school: 'Liverpool John Moores University',
    degree: 'Erasmus Exchange Program',
    period: '2019',
    logo: '/images/ljmu_logo.svg',
  },
];

const certificates = [
  { name: 'Azure Fundamentals', issuer: 'Microsoft', file: '/docs/certificates/azure_fundamentals_certificate.pdf' },
  { name: 'Machine Learning Certificate', issuer: 'Google', file: '/docs/certificates/google_ml_certificate.pdf' },
  { name: 'Deep Learning Specialization', issuer: 'Coursera', file: '/docs/certificates/deeplearning_course.pdf' },
  { name: 'Python Certificate', issuer: 'Online Course', file: '/docs/certificates/python_certificate.pdf' },
];

// Collapsible Section Component
interface CollapsibleSectionProps {
  title: string;
  color: string;
  isOpen: boolean;
  onToggle: () => void;
  count: number;
  children: React.ReactNode;
}

function CollapsibleSection({ title, color, isOpen, onToggle, count, children }: CollapsibleSectionProps) {
  return (
    <section>
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-3 group cursor-pointer"
      >
        <h2 className="text-2xl font-bold text-white flex items-center gap-3">
          <span className={`w-8 h-1 ${color} rounded-full`} />
          {title}
          <span className="text-sm font-normal text-slate-500">({count})</span>
        </h2>
        <ChevronDown 
          size={24} 
          className={`text-slate-500 group-hover:text-slate-300 transition-all duration-300 ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-[2000px] opacity-100 mt-8' : 'max-h-0 opacity-0 mt-0'
        }`}
      >
        {children}
      </div>
    </section>
  );
}

export default function Home() {
  const [openSections, setOpenSections] = useState({
    experience: true,
    projects: false,
    education: false,
    certificates: false,
  });

  const toggleSection = (section: keyof typeof openSections) => {
    setOpenSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Hero / About Section */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 via-slate-950 to-emerald-600/10" />
        <div className="relative max-w-4xl mx-auto px-4 py-16 sm:py-24">
          <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
            <img
              src="/images/profile.jpg"
              alt="Enes Demirağ"
              className="w-28 h-28 sm:w-36 sm:h-36 rounded-full border-4 border-indigo-500/50 shadow-2xl shadow-indigo-500/20"
            />
            <div className="text-center sm:text-left">
              <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
                Enes Demirağ
              </h1>
              <p className="text-lg sm:text-xl text-indigo-400 mt-1 font-medium">AI Engineer</p>
              <div className="flex items-center justify-center sm:justify-start gap-2 mt-2 text-slate-400 text-sm">
                <MapPin size={14} />
                <span>Istanbul, Turkey</span>
              </div>
            </div>
          </div>

          <p className="mt-8 text-slate-300 leading-relaxed max-w-2xl mx-auto text-center">
            AI Engineer with a strong background in computer vision, LLMs, backend development and real-time AI systems. 
            I build and deploy production-grade AI applications at scale.
          </p>

          
          {/* Social Links */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-800/80 border border-slate-700 text-slate-400 hover:text-white hover:border-slate-500 hover:bg-slate-700/80 transition-all"
                aria-label={label}
                title={label}
              >
                <Icon size={18} />
              </a>
            ))}
            <a
              href="/docs/enesdemirag-resume.pdf"
              target="_blank"
              className="h-10 flex items-center gap-2 px-5 bg-indigo-600 hover:bg-indigo-500 rounded-full text-white text-sm font-medium transition-colors"
            >
              <FileText size={16} />
              Resume
            </a>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 pb-20 space-y-6">
        {/* Experience */}
        <CollapsibleSection
          title="Experience"
          color="bg-indigo-500"
          isOpen={openSections.experience}
          onToggle={() => toggleSection('experience')}
          count={experiences.length}
        >
          <div className="space-y-6">
            {experiences.map((exp, i) => (
              <div
                key={i}
                className="group p-5 bg-slate-900/50 border border-slate-800 rounded-xl hover:border-slate-700 transition-colors"
              >
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    {exp.logo.startsWith('/') || exp.logo.startsWith('http') ? (
                      <img src={exp.logo} alt={exp.company} className="w-12 h-12 rounded-lg object-contain bg-white p-1" />
                    ) : (
                      <div className="w-12 h-12 rounded-lg bg-slate-800 flex items-center justify-center text-2xl">
                        {exp.logo}
                      </div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                      <h3 className="font-semibold text-white">{exp.company}</h3>
                      <span className="text-sm text-slate-500 flex items-center gap-1">
                        <Calendar size={12} />
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-indigo-400 text-sm mt-0.5">{exp.role}</p>
                    <p className="text-slate-400 text-sm mt-2 leading-relaxed">{exp.description}</p>
                    {exp.url && (
                      <a
                        href={exp.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm text-slate-500 hover:text-indigo-400 mt-2 transition-colors"
                      >
                        <ExternalLink size={12} />
                        {exp.url.replace('https://', '')}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CollapsibleSection>

        {/* Projects */}
        <CollapsibleSection
          title="Projects"
          color="bg-emerald-500"
          isOpen={openSections.projects}
          onToggle={() => toggleSection('projects')}
          count={projects.length}
        >
          <div className="grid sm:grid-cols-2 gap-4">
            {projects.map((project, i) => (
              <div
                key={i}
                className="p-5 bg-slate-900/50 border border-slate-800 rounded-xl hover:border-slate-700 transition-colors"
              >
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0">
                    {project.logo.startsWith('/') ? (
                      <img src={project.logo} alt={project.name} className="w-10 h-10 rounded-lg object-contain bg-white p-1" />
                    ) : (
                      <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-xl">
                        {project.logo}
                      </div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="font-semibold text-white">{project.name}</h3>
                      <span className="text-xs text-slate-500">{project.period}</span>
                    </div>
                    <p className="text-slate-400 text-sm mt-1 leading-relaxed">{project.description}</p>
                    <div className="flex items-center gap-3 mt-3">
                      {project.url && (
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs text-slate-500 hover:text-emerald-400 transition-colors"
                        >
                          <ExternalLink size={12} />
                          Website
                        </a>
                      )}
                      {project.repo && (
                        <a
                          href={project.repo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs text-slate-500 hover:text-emerald-400 transition-colors"
                        >
                          <FaGithub size={12} />
                          Repo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CollapsibleSection>

        {/* Education */}
        <CollapsibleSection
          title="Education"
          color="bg-amber-500"
          isOpen={openSections.education}
          onToggle={() => toggleSection('education')}
          count={education.length}
        >
          <div className="space-y-4">
            {education.map((edu, i) => (
              <div
                key={i}
                className="p-5 bg-slate-900/50 border border-slate-800 rounded-xl hover:border-slate-700 transition-colors"
              >
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    {edu.logo.startsWith('/') ? (
                      <img src={edu.logo} alt={edu.school} className="w-12 h-12 rounded-lg object-contain bg-white p-1" />
                    ) : (
                      <div className="w-12 h-12 rounded-lg bg-slate-800 flex items-center justify-center text-2xl">
                        {edu.logo}
                      </div>
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                      <h3 className="font-semibold text-white">{edu.school}</h3>
                      <span className="text-sm text-slate-500">{edu.period}</span>
                    </div>
                    <p className="text-amber-400/80 text-sm mt-0.5">{edu.degree}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CollapsibleSection>

        {/* Certificates */}
        <CollapsibleSection
          title="Certificates"
          color="bg-rose-500"
          isOpen={openSections.certificates}
          onToggle={() => toggleSection('certificates')}
          count={certificates.length}
        >
          <div className="grid sm:grid-cols-2 gap-4">
            {certificates.map((cert, i) => (
              <a
                key={i}
                href={cert.file}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-slate-900/50 border border-slate-800 rounded-xl hover:border-rose-500/50 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-rose-500/10 flex items-center justify-center text-rose-400 group-hover:bg-rose-500/20 transition-colors">
                  📜
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-medium text-white text-sm truncate">{cert.name}</h3>
                  <p className="text-slate-500 text-xs">{cert.issuer}</p>
                </div>
                <ExternalLink size={14} className="text-slate-600 group-hover:text-rose-400 transition-colors" />
              </a>
            ))}
          </div>
        </CollapsibleSection>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-8">
        <div className="max-w-4xl mx-auto px-4 text-center text-slate-500 text-sm">
          © {new Date().getFullYear()} Enes Demirağ
        </div>
      </footer>
    </div>
  );
}
