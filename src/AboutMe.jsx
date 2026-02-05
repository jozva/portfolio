import React from 'react';
import { PencilRuler, Wrench, Settings } from 'lucide-react';

const ServiceCard = ({ title, description, Icon }) => {
  return (
    <div className="relative flex flex-col items-center justify-center text-center w-full max-w-[280px] md:w-80 group p-4">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-[0.07] group-hover:opacity-[0.15] transition-opacity duration-300">
        <Icon size={120} className="text-black" />
      </div>

      <div className="z-10">
        <h3 className="text-lg font-bold uppercase tracking-[0.2em] mb-3 text-black">
          {title}
        </h3>
        <p className="text-xs text-gray-500 leading-relaxed mx-auto">
          {description}
        </p>
      </div>
    </div>
  );
};

const GeometricDivider = () => {
  return (
    <div className="flex items-center justify-center gap-4 my-8 md:my-12 opacity-80">
      <div className="h-[2px] w-8 md:w-12 bg-black rounded-full"></div>
      <svg width="40" height="10" viewBox="0 0 40 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 5 L5 0 L10 5 L15 0 L20 5 L25 0 L30 5 L35 0 L40 5" stroke="black" strokeWidth="1.5" />
        <path d="M0 10 L5 5 L10 10 L15 5 L20 10 L25 5 L30 10 L35 5 L40 10" stroke="black" strokeWidth="1.5" />
      </svg>
      <div className="h-[2px] w-8 md:w-12 bg-black rounded-full"></div>
    </div>
  );
};

const AboutMe = () => {
  return (
    <div className="min-h-screen h-auto bg-gradient-to-b from-gray-100 to-gray-300 flex flex-col items-center py-20 px-4 font-sans text-gray-800">
      
      <div className="border-[5px] border-black px-8 md:px-12 py-4 mb-10 mt-10">
        <h1 className="text-2xl md:text-3xl font-bold uppercase tracking-[0.4em] text-black text-center">
          About Me
        </h1>
      </div>

      <p className="text-center text-sm text-gray-600 max-w-2xl leading-loose mb-10 px-4">
       Passionate Full Stack Developer specializing in the MERN stack. I build scalable, 
       high-performance web applications that merge robust backend engineering with intuitive,
       modern frontend designs. My focus is on writing clean code and delivering digital solutions that solve real-world problems.
      </p>

      <div className="flex items-center gap-4 mb-4 ">
        <a className=" border-black px-6 py-3 font-bold tracking-[0.2em] text-xs bg-black  hover:bg-gray-200 border-3 hover:text-black text-white transition-all duration-300 uppercase" 
        href="https://drive.google.com/file/d/1ldiNVfT0LNGNiiEmqP9AYsHu3H7bbNSE/view" target="_blank" >View CV</a>
      </div>

      <GeometricDivider />
      
      <div className="flex flex-col items-center gap-12 w-full max-w-5xl">
        
        <div className="flex flex-col md:flex-row justify-center items-start gap-10 md:gap-16 w-full">
          <ServiceCard 
            title="Design" 
            Icon={PencilRuler}
            description="Craft responsive and user-centric interfaces that look great on any device.
             I focus on clean aesthetics and seamless user experiences,
             translating complex ideas into intuitive visual layouts using modern design principles"
          />
          
          <ServiceCard 
            title="Development" 
            Icon={Wrench}
            description="Build powerful web applications from the ground up. 
            Using React, Node.js, and MongoDB, I develop secure, scalable, and fast solutions tailored to your specific business needs,"
          />
          
           <div className="md:hidden">
              <ServiceCard 
              title="Maintenance" 
              Icon={Settings}
              description="Launching is just the beginning. I provide consistent support, performance optimization,
               and regular updates to ensure your application remains secure, bug-free, and up-to-date with the latest technologies."
            />
           </div>
        </div>

        <div className="hidden md:flex justify-center w-full">
          <ServiceCard 
            title="Maintenance" 
            Icon={Settings}
            description="Launching is just the beginning. I provide consistent support, performance optimization,
             and regular updates to ensure your application remains secure, bug-free, and up-to-date with the latest technologies."
          />
        </div>

      </div>

      <GeometricDivider />

    </div>
  );
};

export default AboutMe;