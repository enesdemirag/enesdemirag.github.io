import { Github, Linkedin, Mail } from 'lucide-react';

interface SocialLink {
  icon: JSX.Element;
  href: string;
  label: string;
}

export default function SocialLinks() {
  const links: SocialLink[] = [
    {
      icon: <Github size={24} />,
      href: 'https://github.com/enesdemirag',
      label: 'GitHub'
    },
    {
      icon: <Linkedin size={24} />,
      href: 'https://linkedin.com/in/enesdemirag',
      label: 'LinkedIn'
    },
    {
      icon: <Mail size={24} />,
      href: 'mailto:enesdmrg@gmail.com',
      label: 'Email'
    }
  ];

  return (
    <div className="flex space-x-4">
      {links.map(({ icon, href, label }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-900 hover:text-blue-700 transition-colors"
          aria-label={label}
        >
          {icon}
        </a>
      ))}
    </div>
  );
}