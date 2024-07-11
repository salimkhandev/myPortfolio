import { useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      console.log("all the sections are ",sections,"end");
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      console.log("this is the scroll position ",scrollPosition);
      console.log("this is Y",window.scrollY); 
      console.log("window.innerHeight", window.innerHeight); 
      console.log("window.innerHeight/2", window.innerHeight/2); 

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        console.log(sectionTop,"sectionTop");
        console.log(section.offsetTop, "sectionTop");

        const sectionHeight = section.offsetHeight;

        if (
          scrollPosition >= sectionTop &&
          scrollPosition <= sectionTop + sectionHeight
        ) {
          const currentActive = document.querySelector("header nav ul .active");
          if (currentActive) {
            currentActive.classList.remove("active");
          }
          const newActive = document.querySelector(
            `header nav ul li a[href='#${section.id}']`
          );
          newActive.parentElement.classList.add("active");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <Header />
      <main className="pt-13">
        <Home />
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
