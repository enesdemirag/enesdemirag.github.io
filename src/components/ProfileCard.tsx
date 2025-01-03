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
        <h2 className="text-xl text-blue-700 mb-4">Software Engineer</h2>

        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Hey! I'm Enes. I'm someone who loves exploring and trying new things.
          <br /><br />
          I studied Engineering at Istanbul Technical University and currently work as an Software Engineer at Chooch, where I get to combine my love for AI and technology with problem-solving.
          <br /><br />
          I'm really into AI and technology. I love discussing new technologies and what the future might look like. I'm also talking about finance and investing. It's exciting to learn how things work and share ideas. I also enjoy playing video games. It's my favorite way to relax and have fun.
          Traveling is a big passion of mine. I enjoy visiting new places and experiencing different cultures. I also bring my drone along to capture amazing views from the sky.
        </p>

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