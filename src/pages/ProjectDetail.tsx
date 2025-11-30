import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const projects = {
  'klyft': {
    title: 'Klyft',
    description: 'AI Engineer · 2025 - Present',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800',
    details: 'Klyft is an AI company where I work as an AI Engineer, developing and deploying cutting-edge AI solutions. Building intelligent systems using modern AI frameworks, large language models, and production-grade infrastructure.',
    url: '',
    technologies: ['Python', 'LLMs', 'Machine Learning', 'AI Engineering', 'Deep Learning']
  },
  'chooch': {
    title: 'Chooch',
    description: 'MLOps Team Leader · Jul 2022 - 2025',
    image: '/images/chooch.jpg',
    details: 'Chooch is a vision AI company based in Silicon Valley. I developed and led the deployment of real-time inference engines, Generative AI models, LLMs, and backend APIs. Strong in production-grade Python development (testing, packaging, and code reviews) with Git/GitHub workflows (branching, PRs, CI/CD). Experienced in hosting and serving YOLO models, LLMs, and VLMs on the edge, integrating OpenAI and Gemini APIs. Skilled in model optimization using ONNX and TensorRT, and quantization (FP16/INT8).',
    url: 'https://www.chooch.com',
    technologies: ['Python', 'PyTorch', 'YOLO', 'LLMs', 'VLMs', 'ONNX', 'TensorRT', 'Triton Server', 'Deepstream', 'Docker', 'FastAPI', 'Redis', 'Kafka', 'OpenAI API', 'Gemini']
  },
  'scaleai': {
    title: 'Scale AI',
    description: 'AI Model Training Engineer',
    image: '/images/scaleai.jpg',
    details: 'Scale AI is a data platform for AI, providing high-quality training data to leading machine learning teams. As an AI Model Training Engineer, I worked on data labeling, model evaluation, and training data quality assurance for various AI applications.',
    url: 'https://scale.com',
    technologies: ['Python', 'Machine Learning', 'Data Annotation', 'Model Evaluation', 'AI Training']
  },
  'dias': {
    title: 'DiAS',
    description: 'Python Software Engineer',
    image: '/images/dias.jpg',
    details: 'DiAS is a technology company where I worked as a Python Software Engineer, developing computer vision solutions, REST services, and containerized applications.',
    url: '',
    technologies: ['Python', 'Computer Vision', 'REST APIs', 'Docker', 'Software Development']
  },
  'baykar': {
    title: 'Baykar Defence',
    description: 'Software Engineer · Aug 2020 - Jul 2022',
    image: '/images/baykar.jpg',
    details: 'Baykar Defence is a private Turkish defence company specialising in armed UAVs. I developed augmented reality and real-time video decoding systems, implementing image processing, video enhancement, and filtering techniques using OpenCV and OpenGL. Led over ten vision-based ML projects as a lead engineer, focusing on system reliability and real-time performance. Experienced in production-level C++ and C# development, and API design and implementation for embedded and mission-critical systems.',
    url: 'https://baykartech.com',
    technologies: ['C++', 'C#', 'OpenCV', 'OpenGL', 'FFmpeg', 'Computer Vision', 'Augmented Reality', 'Embedded Systems']
  },
  'itu-cs': {
    title: "Master's Degree",
    description: 'Istanbul Technical University - Computer Engineering · 2021 - 2024',
    image: '/images/itu.png',
    details: 'Master of Science in Computer Engineering from Istanbul Technical University. Focused on machine learning, deep learning, and computer vision research. Developed expertise in neural networks, optimization algorithms, and scalable AI systems.',
    url: 'https://www.itu.edu.tr',
    technologies: ['Machine Learning', 'Deep Learning', 'Computer Vision', 'Python', 'PyTorch', 'Research']
  },
  'itu-ehb': {
    title: "Bachelor's Degree",
    description: 'Istanbul Technical University - Electronics and Communication Engineering · 2016 - 2021',
    image: '/images/itu.png',
    details: 'Bachelor of Science in Electronics and Communication Engineering from Istanbul Technical University. Built a strong foundation in embedded systems, signal processing, and programming. Participated in multiple robotics teams and competitions.',
    url: 'https://www.itu.edu.tr',
    technologies: ['Electronics', 'Embedded Systems', 'C/C++', 'Signal Processing', 'Robotics']
  },
  'dermaglow': {
    title: 'DermaGlow',
    description: 'AI-Powered Skin Analysis App',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800',
    details: 'DermaGlow is a Flutter application for AI-powered skin analysis. The app uses computer vision and machine learning models to analyze skin conditions, provide personalized skincare recommendations, and track skin health over time.',
    url: '',
    technologies: ['Flutter', 'Firebase', 'Computer Vision', 'Machine Learning', 'Dart']
  },
  'hudux': {
    title: 'Hudux AI',
    description: 'AI-Powered Visual Monitoring Platform (Discontinued)',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800',
    details: 'Hudux AI was an AI-powered visual monitoring platform that connects to camera networks and interprets video streams via natural language commands. I founded and led development of the core system, integrating vision-language models (VLMs), real-time scene understanding, and command parsing.',
    url: '',
    technologies: ['Python', 'VLMs', 'Computer Vision', 'NLP', 'Real-time Processing', 'FastAPI']
  },
  'shelfscan': {
    title: 'ShelfScan',
    description: 'Shopping Smarter is Just a Scan Away',
    image: '/images/shelfscan.png',
    details: "ShelfScan is a mobile application committed to making your dietary choices easier and more informed. Scan product barcodes to get instant nutritional information, ingredient analysis, and personalized health recommendations.",
    url: 'https://shelfscan.app',
    technologies: ['Flutter', 'Firebase', 'Barcode Scanning', 'Mobile Development']
  },
  'kazanco': {
    title: 'Kazanco',
    description: 'Sadece İzle ve Kazan!',
    image: '/images/kazanco.png',
    details: 'Boş zamanınızı Kazanco ile paraya dönüştürün. Reklam izleyin ve kazanın. A mobile app that rewards users for watching advertisements.',
    url: 'https://kazanco.app',
    technologies: ['Flutter', 'Firebase', 'AdMob', 'Mobile Development']
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