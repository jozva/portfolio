import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaFigma } from "react-icons/fa";
import { SiRedux, SiMongodb, SiTailwindcss, SiExpress, SiGithub, SiPostman,SiMysql,SiJsonwebtokens, } from "react-icons/si";

const Skills = () => {

  const frontend = [
    { name: "HTML5", icon: <FaHtml5 />, color: "text-orange-600" },
    { name: "CSS3", icon: <FaCss3Alt />, color: "text-blue-600" },
    { name: "JAVASCRIPT", icon: <FaJs />, color: "text-yellow-400" },
    { name: "TAILWIND CSS", icon: <SiTailwindcss />, color: "text-cyan-400" },
    { name: "REACT.JS", icon: <FaReact />, color: "text-cyan-400" },
    { name: "REDUX", icon: <SiRedux />, color: "text-purple-500" },
  ];

  const backend = [
    { name: "NODE.JS", icon: <FaNodeJs />, color: "text-green-500" },
    { name: "EXPRESS JS", icon: <SiExpress />, color: "text-gray-800" },
    { name: "AUTHENTICATION", icon: <SiJsonwebtokens />, color: "text-red-500" }
  ];

  const database = [
    { name: "MONGODB", icon: <SiMongodb />, color: "text-green-600" },
    { name: "SQL", icon: <SiMysql />, color: "text-blue-500" },
  ];

  const others = [
    { name: "FIGMA", icon: <FaFigma />, color: "text-pink-600" },
    { name: "GITHUB", icon: <SiGithub />, color: "text-black" },
    { name: "POSTMAN", icon: <SiPostman />, color: "text-orange-500" },
  ];

  const SkillGrid = ({ title, skills }) => (
    <div className="w-full max-w-5xl mb-16">
      <h3 className="text-lg font-bold tracking-widest mb-8 uppercase text-center md:text-left">
        {title}
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-6 justify-items-center">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-2 group cursor-pointer hover:scale-110 transition-transform duration-300"
          >
            <div className={`text-6xl ${skill.color} drop-shadow-sm`}>
              {skill.icon}
            </div>
            <p className="text-sm font-semibold tracking-wider text-gray-600 mt-2 text-center">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section className="min-h-screen flex flex-col items-center py-20 px-4">

      <div className="border-4 border-black px-12 py-3 mb-16">
        <h2 className="text-2xl font-bold tracking-[0.2em] uppercase">
          Skills
        </h2>
      </div>

      <SkillGrid title="Frontend" skills={frontend} />
      <SkillGrid title="Backend" skills={backend} />
      <SkillGrid title="Database" skills={database} />
      <SkillGrid title="Others" skills={others} />

    </section>
  );
};

export default Skills;
