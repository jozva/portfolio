import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaFigma, FaNodeJs } from "react-icons/fa";
import { SiTypescript, SiMongodb,SiTailwindcss ,SiExpress,SiGithub, SiPostman} from "react-icons/si";

const Skills = () => {

  const usingNow = [
    { name: "HTML5", icon: <FaHtml5 />, color: "text-orange-600" },
    { name: "CSS3", icon: <FaCss3Alt />, color: "text-blue-600" },
    { name: "JAVASCRIPT", icon: <FaJs />, color: "text-yellow-400" },
    { name: "TAILWIND CSS", icon: <SiTailwindcss />, color: "text-cyan-400" },
    { name: "REACT.JS", icon: <FaReact />, color: "text-cyan-400" },
    { name: "NODE.JS", icon: <FaNodeJs />, color: "text-green-500" },
    { name: "EXPRESS JS", icon: <SiExpress />, color: "text-gray-800" },
    { name: "MONGODB", icon: <SiMongodb />, color: "text-green-600" },
  ];

  const learning = [
  
    
    { name: "TYPESCRIPT", icon: <SiTypescript />, color: "text-blue-600" },
  ];

  const otherSkills = [
    { name: "FIGMA", icon: <FaFigma />, color: "text-pink-600" },
    { name: "GITHUB", icon: <SiGithub />, color: "text-black" },
    { name: "POSTMAN", icon: <SiPostman />, color: "text-orange-500" },
  ];

  return (
    <section className="min-h-screen  flex flex-col items-center py-20 px-4">
      
      <div className="border-4 border-black px-12 py-3 mb-16">
        <h2 className="text-2xl font-bold tracking-[0.2em] uppercase">Skills</h2>
      </div>

      <div className="w-full max-w-5xl mb-16">
        <h3 className="text-lg font-bold tracking-widest mb-8 uppercase text-center md:text-left">Experience:</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-6 justify-items-center">
          {usingNow.map((skill, index) => (
            <div key={index} className="flex flex-col items-center gap-2 group cursor-pointer hover:scale-110 transition-transform duration-300">
              <div className={`text-6xl ${skill.color} drop-shadow-sm`}>
                {skill.icon}
              </div>
              <p className="text-sm font-semibold tracking-wider text-gray-600 mt-2">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full max-w-5xl mb-16">
        <h3 className="text-lg font-bold tracking-widest mb-8 uppercase text-center md:text-left">Other Skills:</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-6 justify-items-center">
          {otherSkills.map((skill, index) => (
            <div key={index} className="flex flex-col items-center gap-2 group cursor-pointer hover:scale-110 transition-transform duration-300">
              <div className={`text-6xl ${skill.color} drop-shadow-sm`}>
                {skill.icon}
              </div>
              <p className="text-sm font-semibold tracking-wider text-gray-600 mt-2 text-center leading-tight">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>

          <div className="w-full max-w-5xl ">
        <h3 className="text-lg font-bold tracking-widest mb-8 uppercase text-center md:text-left">Learning:</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-6 justify-items-center">
          {learning.map((skill, index) => (
            <div key={index} className="flex flex-col items-center gap-2 group cursor-pointer hover:scale-110 transition-transform duration-300">
              <div className={`text-6xl ${skill.color} drop-shadow-sm`}>
                {skill.icon}
              </div>
              <p className="text-sm font-semibold tracking-wider text-gray-600 mt-2">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default Skills;