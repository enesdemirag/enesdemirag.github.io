import './HeroSection.css';

const links = [
  { href: 'https://github.com/enesdemirag', label: 'GitHub', icon: '/images/social/github.png' },
  { href: 'https://linkedin.com/in/enesdemirag', label: 'LinkedIn', icon: '/images/social/linkedin.png' },
  { href: 'https://ensdmrg.medium.com/', label: 'Medium', icon: '/images/social/medium.png' },
  { href: 'https://www.youtube.com/@enes-demirag', label: 'YouTube', icon: '/images/social/youtube.png' },
  { href: 'mailto:enesdmrg@gmail.com', label: 'Email', icon: '/images/social/email.png' },
  { href: '/docs/enesdemirag-resume.pdf', label: 'Resume', icon: '/images/social/cv.png' },
];

export default function HeroSection() {
  return (
    <header className="hero">
      <div className="hero__inner">
        <img className="hero__avatar" src="/images/profile.jpg" alt="Enes Demirağ" loading="eager" />
        <div className="hero__content">
          <p className="hero__eyebrow">Portfolio</p>
          <h1 className="hero__title">Enes Demirağ</h1>
          <p className="hero__role">AI Engineer</p>
          <p className="hero__location">Istanbul, Turkey</p>
          <p className="hero__description">
            AI Engineer with production experience in computer vision, LLM systems, backend services, and MLOps.
          </p>
          <nav className="hero__links" aria-label="Social and contact links">
            {links.map((link) => (
              <a
                key={link.label}
                className="hero__link"
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                aria-label={link.label}
                title={link.label}
              >
                <img className="hero__link-icon-img" src={link.icon} alt="" loading="lazy" aria-hidden="true" />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
