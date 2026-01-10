import { BrowserRouter } from "react-router-dom"
import Hero from "./Hero"
import Home from "./Home"
import AboutMe from "./AboutMe"
import Skills from "./Skills"
import Contact from "./Contact"
import Projects from "./Project"
import ContactInfo from "./ContactInfo"

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col w-full overflow-x-hidden">
        <Hero />

        <section id="home">
          <Home />
        </section>

        <section id="about">
          <AboutMe />
        </section>

        <section id="skills">
          <Skills />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="contact">
          <Contact />
        </section>

        <ContactInfo />
      </div>
    </BrowserRouter>
  )
}
export default App
