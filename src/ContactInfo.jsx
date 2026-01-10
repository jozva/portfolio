import React from 'react';
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

const ContactBar = () => {
  return (
    <div className=" px-4 bg-black ">
      
      <div className="flex flex-col md:flex-row justify-between gap-4 lg:gap-25 xl:gap-58 w-full">

        <div className="group flex-1 text-white flex items-center justify-center py-6 px-4 transition-all duration-300 shadow-lg cursor-default">
            
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=kingsonjozva@email.com" className="flex items-center gap-4 cursor-pointer w-fit" target='_blank'>
                <FaEnvelope className="text-2xl group-hover:scale-110 transition-transform" />
                <div className="text-center md:text-left">
                    <p className="text-[10px] font-bold tracking-widest uppercase opacity-60">Email</p>
                    <p className="text-sm font-bold tracking-wider break-all">kingsonjozva@email.com</p>
                </div>
            </a>
        </div>

        <div className="group flex-1 text-white flex items-center justify-center py-6 px-4 transition-all duration-300 shadow-lg cursor-default">
            
            <a href="tel:+917639761719" className="flex items-center gap-4 cursor-pointer w-fit" >
                <FaPhoneAlt className="text-2xl group-hover:scale-110 transition-transform" />
                <div className="text-center md:text-left">
                    <p className="text-[10px] font-bold tracking-widest uppercase opacity-60">Call </p>
                    <p className="text-sm font-bold tracking-wider">+91 76397 61719</p>
                </div>
            </a>
        </div>

        <div className="group flex-1 text-white flex items-center justify-center py-6 px-4 transition-all duration-300 shadow-lg cursor-default">
            
            <div className="flex items-center gap-4 cursor-text w-fit">
                <FaMapMarkerAlt className="text-2xl group-hover:scale-110 transition-transform" />
                <div className="text-center md:text-left">
                    <p className="text-[10px] font-bold tracking-widest uppercase opacity-60">Location</p>
                    <p className="text-sm font-bold tracking-wider">Chennai, India</p>
                </div>
            </div>
        </div>

      </div>

    </div>
  );
};

export default ContactBar;