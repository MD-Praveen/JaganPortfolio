import React, { Suspense, useRef } from "react";
import LoadingSnippet from "./Components/Snippet/LoadingSnippet";
import "./styles.scss";

import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Projects from "./Pages/Projects/Projects";
import Education from "./Pages/Education/Education";
import About from "./Pages/About/About";
import Skills from "./Pages/Skills/Skills";
import Contact from "./Pages/Contact/Contact";

import ScrolltoTop from './Components/ScrollTop/ScrolltoTop';

const App = () => {
  // Create refs for each section

  const navbarRef = useRef(null);

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const educationRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  // Scroll to the section based on ref
  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div id="stars-container">
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>

      <div id="starsContainerData">
        <Suspense fallback={<LoadingSnippet />}>
          
          <div ref={navbarRef}>
            <Navbar
              scrollToSection={scrollToSection}
              refs={{ homeRef, aboutRef, educationRef, skillsRef, projectsRef, contactRef, navbarRef}}
            />
          </div>

          <div ref={homeRef}>
            <Home scrollToSection={scrollToSection} projectsRef = {projectsRef}/>
          </div>

          <div ref={aboutRef}>
            <About  scrollToSection={scrollToSection} contactRef = {contactRef}/>
          </div>

          <div ref={educationRef}>
            <Education />
          </div>

          <div ref={skillsRef}>
            <Skills />
          </div>

          <div ref={projectsRef}>
            <Projects />
          </div>

          <div ref={contactRef}>
            <Contact />
          </div>

        </Suspense>

      </div>

      <span className="scrollBarBtn">
        <ScrolltoTop scrollToSection={scrollToSection} navbarRef = {navbarRef}/>
      </span>

    </div>
  );
};

export default App;
