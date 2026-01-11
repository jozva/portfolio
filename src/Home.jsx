import { SocialIcon } from "react-social-icons"
import { MdEmail } from "react-icons/md"

function Home() {
  return (
    <section className="min-h-screen md:h-[calc(100vh-7rem)] w-full flex flex-col md:flex-row overflow-hidden pt-28">

      <div className="w-full md:w-1/2 bg-[#E0E0E0] flex flex-col justify-center px-8 py-10 md:pl-24 relative z-10">
        <div>
          <p className="text-lg mb-4">Hi, I am</p>

          <h1 className="text-4xl md:text-5xl font-bold mb-2">
            Beniyel Josva
          </h1>

          <p className="text-gray-600 mb-8 md:mb-10">
            Full Stack Developer / MERN
          </p>

          <div className="flex gap-4">
            <div className="flex items-center justify-center rounded transition hover:scale-110">
              <SocialIcon url="https://www.linkedin.com/in/beniyel-josva-58825625b/" style={{ height: "40px", width: "40px" }} target="_blank" />
            </div>
            <div className="flex items-center justify-center rounded transition hover:scale-110">
              <SocialIcon url="https://github.com/jozva?tab=repositories" style={{ height: "40px", width: "40px" }} target="_blank" />
            </div>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=kingsonjozva@email.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-[#555] flex items-center justify-center text-white transition hover:scale-110"
              aria-label="Send Email"
            >
              <MdEmail size={22} />
            </a>
          </div>
        </div>
      </div>

      <div className="w-full h-[50vh] md:h-auto md:w-1/2 bg-black relative flex items-end justify-center overflow-hidden">

        <div className="hidden md:block absolute left-[-120px] top-0 h-full w-[250px] bg-[#E0E0E0] skew-x-[-12deg]"></div>

        <img
          src="https://raw.githubusercontent.com/jozva/portfolio/main/src/assets/images/josva-photo.jpeg"
          alt="profile"
          className="h-full w-full object-cover xl:h-[75%] lg:h-[61%] md:w-auto md:object-contain z-10 relative bottom-0"
        />

      </div>

    </section>
  )
}

export default Home