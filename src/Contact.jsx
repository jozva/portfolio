import React from 'react';

const Contact = () => {
  return (
    <section className="m bg-gray-200 flex flex-col items-center py-20 px-4">
      
      <div className="border-4 border-black px-10 py-3 mb-10">
        <h2 className="text-xl md:text-2xl font-bold tracking-[0.3em] uppercase">
          Contact
        </h2>
      </div>

      <p className="text-center text-xs md:text-sm text-gray-600 max-w-2xl mb-8 leading-relaxed px-4">
       I am currently open to new opportunities and collaborations. Whether you have a question, a project idea,
        or just want to say hi, feel free to drop a message.
      </p>

      <div className="flex items-center gap-3 mb-16 opacity-80">
        <div className="h-[2px] w-12 bg-black"></div>
        <div className="text-lg font-bold tracking-tighter flex gap-1">
            <span>\\</span>
            <span>//</span>
        </div>
        <div className="h-[2px] w-12 bg-black"></div>
      </div>

      <form className="w-full max-w-xl flex flex-col gap-8 px-4">
        
        <div className="relative group">
             <input 
                type="text" 
                placeholder="ENTER YOUR NAME*" 
                className="w-full bg-transparent border-l-4 border-b-4 border-black p-4 text-xs font-bold tracking-[0.1em] placeholder-gray-600 focus:outline-none focus:bg-white/30 transition-colors"
                required
             />
        </div>

        <div className="relative group">
             <input 
                type="email" 
                placeholder="ENTER YOUR EMAIL*" 
                className="w-full bg-transparent border-l-4 border-b-4 border-black p-4 text-xs font-bold tracking-[0.1em] placeholder-gray-600 focus:outline-none focus:bg-white/30 transition-colors"
                required
             />
        </div>

        <div className="relative group">
             <input 
                type="tel" 
                placeholder="PHONE NUMBER" 
                className="w-full bg-transparent border-l-4 border-b-4 border-black p-4 text-xs font-bold tracking-[0.1em] placeholder-gray-600 focus:outline-none focus:bg-white/30 transition-colors"
             />
        </div>

        <div className="relative group">
             <textarea 
                rows="5"
                placeholder="YOUR MESSAGE*" 
                className="w-full bg-transparent border-l-4 border-b-4 border-black p-4 text-xs font-bold tracking-[0.1em] placeholder-gray-600 focus:outline-none focus:bg-white/30 transition-colors resize-none"
                required
             ></textarea>
        </div>

        <div className="flex justify-center mt-6">
            <button 
                type="submit"
                className="border-3 border-black px-12 py-3 hover:bg-gray-200 hover:text-black font-bold tracking-[0.2em] text-xs bg-black cursor-pointer text-white transition-all duration-300 uppercase"
            >
                Submit
            </button>
        </div>

      </form>
    </section>
  );
};

export default Contact;