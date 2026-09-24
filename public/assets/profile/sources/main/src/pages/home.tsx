import { MapPin, FileText, Mail } from 'lucide-react';
import { FaGithub, FaLinkedinIn, FaMediumM, FaYoutube } from 'react-icons/fa';

const socialLinks = [
  { icon: FaGithub, href: 'https://github.com/enesdemirag', label: 'GitHub' },
  { icon: FaLinkedinIn, href: 'https://linkedin.com/in/enesdemirag', label: 'LinkedIn' },
  { icon: FaMediumM, href: 'https://ensdmrg.medium.com/', label: 'Medium' },
  { icon: FaYoutube, href: 'https://www.youtube.com/@enes-demirag', label: 'YouTube' },
  { icon: Mail, href: 'mailto:enesdmrg@gmail.com', label: 'Email' },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
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

          <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
            {socialLinks.map(({ icon: Icon, href, label }, i) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-animate w-10 h-10 flex items-center justify-center rounded-full bg-slate-800/80 border border-slate-700 text-slate-400 hover:text-white hover:border-slate-500 hover:bg-slate-700/80 transition-all"
                style={{ animationDelay: `${i * 80}ms` }}
                aria-label={label}
                title={label}
              >
                <Icon size={18} />
              </a>
            ))}
            <a
              href="/docs/enesdemirag_resume.pdf"
              download="enesdemirag_resume.pdf"
              target="_blank"
              className="social-icon-animate h-10 flex items-center gap-2 px-5 bg-indigo-600 hover:bg-indigo-500 rounded-full text-white text-sm font-medium transition-colors"
              style={{ animationDelay: `${socialLinks.length * 80}ms` }}
            >
              <FileText size={16} />
              Resume
            </a>
          </div>
        </div>
      </header>

    </div>
  );
}
