import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const projects = {
  'chooch': {
    title: 'Chooch',
    description: 'MLOps Engineer',
    image: '/images/chooch.jpg',
    details: 'Chooch is a computer vision company based in Silicon Valley. Here I developed a real-time inference engine, deployed several LLMs and wrote backend APIs.',
    url: 'https://www.chooch.com',
    technologies: ['Computer Vision', 'Machine Learning', 'Python', 'Deepstream', "Tritonserver", "Docker", "Linux Systems", 'FastAPI']
  },
  'scaleai': {
    title: 'Scale AI',
    description: 'AI Model Training Engineer',
    image: '/images/scaleai.jpg',
    details: 'Lorem impus',
    url: '',
    technologies: ['Python']
  },
  'dias': {
    title: 'DIAS',
    description: 'Python Software Engineer',
    image: '/images/dias.jpg',
    details: 'Lorem impus',
    url: '',
    technologies: ['Computer Vision', 'REST Services', 'Docker']
  },
  'baykar': {
    title: 'Baykar',
    description: 'Software Engineer',
    image: '/images/baykar.jpg',
    details: 'Baykar Defence is a private Turkish defence company specialising in armed UAVs. I developed an augmented reality system and a real-time video decoding system.I also developed many image processing, video enhancement and filtering techniques. Managed more than 10 different vision based projects as a lead engineer.',
    url: '',
    technologies: ['Computer Vision', 'C++', 'OpenCV', 'OpenGL', 'FFmpeg']
  },
  'itu-ehb': {
    title: "Bachelor's Degree",
    description: 'Istanbul Technical University - Electronics and Communication Engineering',
    image: '/images/itu.png',
    details: 'Baykar Defence is a private Turkish defence company specialising in armed UAVs. I developed an augmented reality system and a real-time video decoding system.I also developed many image processing, video enhancement and filtering techniques. Managed more than 10 different vision based projects as a lead engineer.',
    url: '',
    technologies: ['Computer Vision', 'C++', 'OpenCV', 'OpenGL', 'FFmpeg']
  },
  'itu-cs': {
    title: "Master's Degree",
    description: 'Istanbul Technical University - Computer Engineering',
    image: '/images/itu.png',
    details: 'Baykar Defence is a private Turkish defence company specialising in armed UAVs. I developed an augmented reality system and a real-time video decoding system.I also developed many image processing, video enhancement and filtering techniques. Managed more than 10 different vision based projects as a lead engineer.',
    url: '',
    technologies: ['Computer Vision', 'C++', 'OpenCV', 'OpenGL', 'FFmpeg']
  },
  'shelfscan': {
    title: 'ShelfScan',
    description: 'Shopping Smarter is Just a Scan Away',
    image: '/images/shelfscan.png',
    details: "We're committed to making your dietary choices easier and more informed.",
    url: 'https://shelfscan.app',
    technologies: []
  },
  'kazanco': {
    title: 'Kazanco',
    description: 'Sadece İzle ve Kazan!',
    image: '/images/kazanco.png',
    details: 'Boş zamanınızı Kazanco ile paraya dönüştürün. Reklam izleyin ve kazanın.',
    url: 'https://kazanco.app',
    technologies: []
  },
  'navbotics': {
    title: 'Navbotics',
    description: 'Lorem impus.',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800',
    details: 'Baykar Defence is a private Turkish defence company specialising in armed UAVs. I developed an augmented reality system and a real-time video decoding system.I also developed many image processing, video enhancement and filtering techniques. Managed more than 10 different vision based projects as a lead engineer.',
    url: '',
    technologies: ['Computer Vision', 'C++', 'OpenCV', 'OpenGL', 'FFmpeg']
  },
  'divebotics': {
    title: 'Divebotics',
    description: 'Lorem impus.',
    image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=800',
    details: 'Baykar Defence is a private Turkish defence company specialising in armed UAVs. I developed an augmented reality system and a real-time video decoding system.I also developed many image processing, video enhancement and filtering techniques. Managed more than 10 different vision based projects as a lead engineer.',
    url: '',
    technologies: ['Computer Vision', 'C++', 'OpenCV', 'OpenGL', 'FFmpeg']
  }
};

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects[id as keyof typeof projects];

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 pt-20 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-4xl mx-auto"
      >
        <Link
          to="/home"
          className="inline-flex items-center text-blue-900 hover:text-blue-700 mb-6"
        >
          <ArrowLeft className="mr-2" size={20} />
          Back to Home
        </Link>

        <motion.img
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          src={project.image}
          alt={project.title}
          className="w-full h-64 object-cover rounded-lg shadow-lg mb-8"
        />

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-lg shadow-lg p-6"
        >
          <h1 className="text-3xl font-bold text-blue-900 mb-4">{project.title}</h1>
          <p className="text-gray-600 mb-6 font-bold">{project.description}</p>
          <p className="text-gray-600 mb-6">{project.details}</p>
          <a href={project.url} target='_blank'>
            <button className="inline-flex mb-6 items-center px-2 py-2 text-blue-900 rounded-md hover:bg-blue-900 hover:text-white transition-colors">
              <ExternalLink size={20} className="mr-2" />Go To Website
            </button>
          </a>

          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}