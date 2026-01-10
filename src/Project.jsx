import React from 'react';
import { SiHtml5, SiCss3,SiReact, SiTailwindcss, SiNodedotjs, SiMongodb, SiGithub, } from "react-icons/si";
import { FaExternalLinkAlt } from "react-icons/fa";
import { SiJavascript } from 'react-icons/si';

const Projects = () => {
  const projectData = [
    {
      id: 1,
      title: "LANDING PAGE ",
      description: "A productivity app to manage daily tasks with drag-and-drop functionality, categories, and progress tracking.",
      image: "src/assets/images/landing-page.png", 
      techStack: [<SiHtml5 />, <SiCss3 />, ],
      liveLink: "https://lighthearted-pastelito-9a4872.netlify.app",
      githubLink: "https://github.com/jozva/tailwind",
    },
    {
      id: 2,
      title: "EXPENSE CALCULATOR",
      description: "A minimalist, brutalist style personal portfolio website built with React and Tailwind CSS, featuring responsive design and custom animations.",
      image: "src/assets/images/expense-calculator.png", 
      techStack: [<SiHtml5 />, <SiCss3 />,<SiJavascript />,],
      liveLink: "https://todo-task-v1.netlify.app/",
      githubLink: "https://github.com/jozva/todo-task",
    },
    {
      id: 3,
      title: "KANBAN BOARD",
      description: "A productivity app to manage daily tasks with drag-and-drop functionality, categories, and progress tracking.",
      image: "src/assets/images/kanban-board.png", 
      techStack: [<SiReact />, <SiTailwindcss />, <SiGithub />],
      liveLink: "https://kanban-board0.netlify.app/",
      githubLink: "https://github.com/jozva/kanban-board",
    },


  
    {
      id: 4,
      title: "PASSWORD RESET FLOW",
      description: "A productivity app to manage daily tasks with drag-and-drop functionality, categories, and progress tracking.",
      image: "src/assets/images/reset-flow.png", 
      techStack: [<SiReact />, <SiTailwindcss />, <SiGithub />,<SiMongodb />],
      liveLink: "https://gleaming-buttercream-d89021.netlify.app",
      githubLink: "https://github.com/jozva/reset-flow-client",
    },
      {
      id: 5,
      title: "EVENT MANAGEMENT",
      description: "A full-stack e-commerce solution with user authentication, product search, cart functionality, and payment gateway integration.",
      image: "src/assets/images/event-management.png", 
      techStack: [<SiReact />, <SiTailwindcss />, <SiNodedotjs />, <SiMongodb />],
      liveLink: "https://event-management-v0.netlify.app",
      githubLink: "https://github.com/jozva/e-commerce-client",
    },
  ];

  return (
    <section className="min-h-screen bg-gray-100 flex flex-col items-center py-20 px-4">
      
      <div className="border-4 border-black px-10 py-3 mb-16">
        <h2 className="text-xl md:text-2xl font-bold tracking-[0.3em] uppercase">
          Projects
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl px-4">
        
        {projectData.map((project) => (
          <div key={project.id} className="border-4 border-black bg-white flex flex-col group  hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-shadow duration-300">
            
            <div className="h-56 overflow-hidden border-b-4 border-black object-cover relative">
               <img 
                 src={project.image} 
                 alt={project.title} 
                 className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
               />
            </div>

            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold uppercase tracking-wider mb-3">
                {project.title}
              </h3>
              
              <p className="text-gray-600 text-sm mb-6 flex-grow leading-relaxed">
                {project.description}
              </p>

              <div className="flex gap-4 text-2xl text-gray-700 mb-8">
                {project.techStack.map((icon, index) => (
                  <span key={index} className="hover:text-black transition-colors">
                    {icon}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 mt-auto">
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer" 
                   className="flex-1 flex items-center justify-center gap-2 border-2 border-black py-3  px-2 lg:text-xs xl:text-sm text-sm font-bold tracking-widest uppercase hover:bg-black hover:text-white transition-all duration-300">
                  <FaExternalLinkAlt size={12} /> Live Demo
                </a>
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer"
                   className="flex-1 flex items-center justify-center gap-2 border-2 border-black py-3 lg:text-xs xl:text-sm text-sm font-bold tracking-widest uppercase hover:bg-black hover:text-white transition-all duration-300">
                  <SiGithub size={14} /> Code
                </a>
              </div>

            </div>
          </div>
        ))}

      </div>
    </section>
  );
};

export default Projects;