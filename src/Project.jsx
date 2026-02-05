import React, { useState } from 'react';
import certificate from "../src/assets/images/certificate.jpg";
import { SiReact, SiTailwindcss, SiNodedotjs, SiMongodb, SiGithub } from "react-icons/si";
import { FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  const [showCert, setShowCert] = useState(false);
  const [showCodeModal, setShowCodeModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const projectData = [
    {
      id: 1,
      title: "EVENT MANAGEMENT",
      description: "Productivity full-stack e-commerce solution with user authentication, event search, cart functionality, and payment gateway integration.",
      image: "https://raw.githubusercontent.com/jozva/portfolio/main/src/assets/images/event-management.png",
      techStack: [<SiTailwindcss />, <SiReact />, <SiNodedotjs />, <SiMongodb />, <SiGithub />],
      liveLink: "https://event-management-v0.netlify.app",
      frontendRepo: "https://github.com/jozva/e-commerce-client",
      backendRepo: "https://github.com/jozva/e-commerce-server",
    },
    {
      id: 2,
      title: "OTT PLATFORM",
      description: "Implemented secure video streaming using Cloudinary CDN, enabling reliable playback, fast delivery, and scalable media management for an OTT platform.",
      image: "https://raw.githubusercontent.com/jozva/portfolio/main/src/assets/images/ott-image.png",
      techStack: [<SiTailwindcss />, <SiReact />, <SiNodedotjs />, <SiMongodb />, <SiGithub />],
      liveLink: "https://ott-client.netlify.app/",
      frontendRepo: "https://github.com/jozva/ott-client",
      backendRepo: "https://github.com/jozva/ott-server",
    },
    {
      id: 3,
      title: "LOGIN PAGE",
      description: "Built a secure authentication system with login validation and password reset flow, ensuring protected and reliable user access.",
      image: "https://raw.githubusercontent.com/jozva/portfolio/main/src/assets/images/reset-flow.png",
      techStack: [<SiTailwindcss />, <SiReact />, <SiNodedotjs />, <SiMongodb />, <SiGithub />],
      liveLink: "https://gleaming-buttercream-d89021.netlify.app",
      frontendRepo: "https://github.com/jozva/reset-flow-client",
      backendRepo: "https://github.com/jozva/reset-flow-server",
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
          <div key={project.id} className="border-4 border-black bg-white flex flex-col group hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-shadow duration-300">

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
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 border-2 border-black py-3 px-2 lg:text-xs xl:text-sm text-sm font-bold tracking-widest uppercase hover:bg-black hover:text-white transition-all duration-300"
                >
                  <FaExternalLinkAlt size={12} /> Live Demo
                </a>

                <button
                  onClick={() => {
                    setSelectedProject(project);
                    setShowCodeModal(true);
                  }}
                  className="flex-1 flex items-center justify-center gap-2 border-2 border-black py-3 lg:text-xs xl:text-sm text-sm font-bold tracking-widest uppercase hover:bg-black hover:text-white transition-all duration-300"
                >
                  <SiGithub size={14} /> Code
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Certification Button */}
      <div className="mt-16">
        <button
          onClick={() => setShowCert(true)}
          className="border-3 border-black bg-black text-white px-10 py-3 font-bold tracking-widest uppercase hover:bg-white hover:text-black transition-all duration-300"
        >
          Certification
        </button>
      </div>

      {/* Certificate Modal */}
      {showCert && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="relative bg-white border-4 border-black max-w-4xl w-full">
            <button
              onClick={() => setShowCert(false)}
              className="absolute top-2 right-2 bg-black text-white px-3 py-1 font-bold"
            >
              X
            </button>

            <img
              src={certificate}
              alt="Certificate"
              className="w-full h-auto"
            />
          </div>
        </div>
      )}

      {/* Code Selection Modal */}
      {showCodeModal && selectedProject && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="bg-white border-4 border-black p-8 w-[90%] max-w-md text-center relative">

            <button
              onClick={() => setShowCodeModal(false)}
              className="absolute top-2 right-2 bg-black text-white px-3 py-1 font-bold"
            >
              X
            </button>

            <h3 className="text-xl font-bold tracking-widest uppercase mb-8">
              View Code
            </h3>

            <div className="flex flex-col gap-4">
              {selectedProject.frontendRepo && (
                <a
                  href={selectedProject.frontendRepo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-black py-3 font-bold tracking-widest uppercase hover:bg-black hover:text-white transition"
                >
                  Frontend
                </a>
              )}

              {selectedProject.backendRepo && (
                <a
                  href={selectedProject.backendRepo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-black py-3 font-bold tracking-widest uppercase hover:bg-black hover:text-white transition"
                >
                  Backend
                </a>
              )}
            </div>

          </div>
        </div>
      )}

    </section>
  );
};

export default Projects;
