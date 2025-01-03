import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
}

export default function ProjectCard({ id, title, description, image }: ProjectCardProps) {
  return (
    <Link to={`/project/${id}`}>
      <motion.div
        className="relative group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
        whileHover={{ y: -5 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="aspect-video w-full overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
          />
        </div>
        <div className="p-4">
          <h3 className="text-l font-semibold text-blue-900 mb-2 text-center">{title}</h3>
          <div className="absolute inset-0 bg-blue-900 bg-opacity-90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
            <p className="text-white text-center">{description}</p>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}