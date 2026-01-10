function Hero() {

  const scrollToSection = (id) => {
    const section = document.getElementById(id)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <nav className="relative">
      <div className="fixed top-0 right-0 left-0 h-28 bg-[#0B0B0B] text-white font-bold grid grid-cols-2 z-[100] border-b border-gray-800">

        <div className="flex items-center pl-4 md:pl-10">
          <img
            src="src/assets/images/logo.png"
            alt="Logo"
            className="h-16 md:h-20 object-contain cursor-pointer"
            onClick={() => scrollToSection("home")}
          />
        </div>

        <div className="flex items-center justify-end pr-4 md:pr-10 gap-4 md:gap-20 text-xs md:text-base">

          <p
            onClick={() => scrollToSection("about")}
            className="cursor-pointer hover:text-gray-300 transition"
          >
            About Me
          </p>

          <p
            onClick={() => scrollToSection("skills")}
            className="cursor-pointer hover:text-gray-300 transition"
          >
            Skills
          </p>

          <p
            onClick={() => scrollToSection("projects")}
            className="cursor-pointer hover:text-gray-300 transition"
          >
            Projects
          </p>

          <p
            onClick={() => scrollToSection("contact")}
            className="cursor-pointer hover:text-gray-300 transition"
          >
            Contact
          </p>

        </div>
      </div>
    </nav>
  )
}

export default Hero
