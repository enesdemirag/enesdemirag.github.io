import { motion } from 'framer-motion';
import ProfileCard from '../components/ProfileCard';
import ProjectCard from '../components/ProjectCard';

const experiences = [
  // {
  //   id: 'dias',
  //   title: 'DIAS',
  //   description: 'Python Software Engineer',
  //   image: '/images/dias.jpg'
  // },
  // {
  //   id: 'scaleai',
  //   title: 'Scale AI',
  //   description: 'AI Model Training Engineer',
  //   image: '/images/scaleai.jpg'
  // },
  {
    id: 'chooch',
    title: 'Chooch',
    description: 'MLOps Engineer',
    image: '/images/chooch.jpg'
  },
  {
    id: 'baykar',
    title: 'Baykar',
    description: 'Software Engineer',
    image: '/images/baykar.jpg'
  }
];

const education = [
  {
    id: 'itu-cs',
    title: "Masters's Degree",
    description: 'Istanbul Technical University - Computer Engineering',
    image: '/images/itu.png',
  },
  {
    id: 'itu-ehb',
    title: "Bachelor's Degree",
    description: 'Istanbul Technical University - Electronics and Communication Engineering',
    image: '/images/itu.png',
  }
];

const projects = [
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
  },
  // {
  //   id: 'navbotics',
  //   title: 'Navbotics',
  //   description: 'Lorem impus.',
  //   image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800'
  // },
  // {
  //   id: 'divebotics',
  //   title: 'Divebotics',
  //   description: 'Lorem impus.',
  //   image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=800'
  // }
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
        {/* <h2 className="text-2xl font-bold text-blue-900 mb-2">{"Education"}</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {education.map((x) => (
            <ProjectCard key={x.id} {...x} />
          ))}
        </div> */}
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