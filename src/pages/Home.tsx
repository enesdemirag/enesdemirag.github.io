import { motion } from 'framer-motion';
import ProfileCard from '../components/ProfileCard';
import ProjectCard from '../components/ProjectCard';

const experiences = [
  {
    id: 'klyft',
    title: 'Klyft',
    description: 'AI Engineer · 2025 - Present',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'chooch',
    title: 'Chooch',
    description: 'MLOps Team Leader · Jul 2022 - 2025',
    image: '/images/chooch.jpg'
  },
  {
    id: 'scaleai',
    title: 'Scale AI',
    description: 'AI Model Training Engineer',
    image: '/images/scaleai.jpg'
  },
  {
    id: 'dias',
    title: 'DiAS',
    description: 'Python Software Engineer',
    image: '/images/dias.jpg'
  },
  {
    id: 'baykar',
    title: 'Baykar Defence',
    description: 'Software Engineer · Aug 2020 - Jul 2022',
    image: '/images/baykar.jpg'
  }
];

const education = [
  {
    id: 'itu-cs',
    title: "Master's Degree",
    description: 'ITU Computer Engineering · 2021 - 2024',
    image: '/images/itu.png',
  },
  {
    id: 'itu-ehb',
    title: "Bachelor's Degree",
    description: 'ITU Electronics & Communication · 2016 - 2021',
    image: '/images/itu.png',
  }
];

const projects = [
  {
    id: 'dermaglow',
    title: 'DermaGlow',
    description: 'AI-Powered Skin Analysis App',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'hudux',
    title: 'Hudux AI',
    description: 'AI-Powered Visual Monitoring Platform',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'shelfscan',
    title: 'ShelfScan',
    description: 'Shopping Smarter is Just a Scan Away',
    image: '/images/shelfscan.png'
  },
  {
    id: 'kazanco',
    title: 'Kazanco',
    description: 'Sadece İzle ve Kazan!',
    image: '/images/kazanco.png'
  }
];


export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 pt-20 px-4 pb-8 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-6xl mx-auto space-y-12"
      >
        <ProfileCard />
        <h2 className="text-2xl font-bold text-blue-900 mb-2">{"Experience"}</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {experiences.map((x) => (
            <ProjectCard key={x.id} {...x} />
          ))}
        </div>
        <h2 className="text-2xl font-bold text-blue-900 mb-2">{"Education"}</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {education.map((x) => (
            <ProjectCard key={x.id} {...x} />
          ))}
        </div>
        <h2 className="text-2xl font-bold text-blue-900 mb-2">{"Projects"}</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {projects.map((x) => (
            <ProjectCard key={x.id} {...x} />
          ))}
        </div>
      </motion.div>
    </div>
  );
}