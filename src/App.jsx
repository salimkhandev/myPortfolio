import React, { Suspense, useEffect, useRef, useState } from "react";
import Header from "./components/Header";
import Headers from "./components/Headers";
import Spinner from "./components/Spinner";

const Home = React.lazy(() => import("./components/Home"));
const About = React.lazy(() => import("./components/About"));
const Contact = React.lazy(() => import("./components/Contact"));
const Projects = React.lazy(() => import("./components/Projects"));

function App() {
  const [renderHome, setRenderHome] = useState(false);
  const [renderAbout, setRenderAbout] = useState(false);
  const [renderContact, setRenderContact] = useState(false);
  const [renderProjects, setRenderProjects] = useState(false);

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const projectsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            switch (entry.target.id) {
              case "home":
                setRenderHome(true);
                break;
              case "about":
                setRenderAbout(true);
                break;
              case "contact":
                setRenderContact(true);
                break;
              case "projects":
                setRenderProjects(true);
                break;
              default:
                break;
            }
          }
        });
      },
      {
        threshold: 0.5, // Adjust as per your needs
      }
    );

    if (homeRef.current) observer.observe(homeRef.current);
    if (aboutRef.current) observer.observe(aboutRef.current);
    if (contactRef.current) observer.observe(contactRef.current);
    if (projectsRef.current) observer.observe(projectsRef.current);

    // Cleanup function for observer
    return () => {
      if (homeRef.current) observer.unobserve(homeRef.current);
      if (aboutRef.current) observer.unobserve(aboutRef.current);
      if (contactRef.current) observer.unobserve(contactRef.current);
      if (projectsRef.current) observer.unobserve(projectsRef.current);
    };
  }, []);

  return (
    <div className="App">
      <header>
        {/* <Header /> */}
        <Headers />
      </header>
      <main>
        <div id="home" ref={homeRef}>
          {renderHome && (
            <Suspense fallback={<Spinner />}>
              <Home />
            </Suspense>
          )}
        </div>
        <div id="about" ref={aboutRef}>
          {renderAbout && (
            <Suspense fallback={<Spinner />}>
              <About />
            </Suspense>
          )}
        </div>
        <div id="contact" ref={contactRef}>
          {renderContact && (
            <Suspense fallback={<Spinner />}>
              <Contact />
            </Suspense>
          )}
        </div>
        <div id="projects" ref={projectsRef}>
          {renderProjects && (
            <Suspense fallback={<Spinner />}>
              <Projects />
            </Suspense>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
