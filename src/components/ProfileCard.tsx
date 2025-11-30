import { motion } from 'framer-motion';
import SocialLinks from './SocialLinks';
import { FileDown } from 'lucide-react';

export default function ProfileCard() {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="relative">
        <div className="w-full h-48 bg-blue-900">
          <img
            src="/images/profile-bg.png"
            alt="Profile Background"
            className="w-full h-full object-cover opacity-25"
          />
        </div>
        <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-1/2">
          <div className="w-32 h-32 rounded-full border-4 border-white overflow-hidden">
            <img
              src="/images/profile.jpg"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      <div className="pt-20 p-6 text-center">
        <h1 className="text-3xl font-bold text-blue-900 mb-2">Enes Demirağ</h1>
        <h2 className="text-xl text-blue-700 mb-4">AI Engineer</h2>

        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          I am an AI Engineer with a strong background in computer vision, deep learning, LLMs, and real-time AI systems. Over the past several years, I have built and deployed production-grade AI applications at scale, leading teams focused on high-performance solutions.
          <br /><br />
          I have hands-on experience with modern AI frameworks and agentic tools. My work bridges machine learning and backend engineering, with a focus on designing scalable, production-ready AI systems.
          <br /><br />
          Beyond work, I'm passionate about AI, technology, and discussing what the future might hold. I enjoy traveling to new places, capturing amazing views with my drone, and relaxing with video games.
        </p>

        <div className="mb-6 max-w-3xl mx-auto">
          <div className="flex flex-wrap justify-center gap-2">
            {['Python', 'LLMs', 'Computer Vision', 'MLOps', 'Backend', 'Agentic AI'].map((skill) => (
              <span
                key={skill}
                className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="flex justify-center mb-6">
          <SocialLinks />
        </div>

        <div className="flex justify-center">
          <a href="/files/enesdemirag-resume.pdf" target="_blank">
            <button className="inline-flex items-center px-4 py-2 border border-blue-900 text-blue-900 rounded-md hover:bg-blue-900 hover:text-white transition-colors">
              <FileDown size={20} className="mr-2" />
              Download Resume
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}