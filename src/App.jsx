import { useEffect } from 'react';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Headers from './components/Headers';

function App() {
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const navLi = document.querySelectorAll("li");

    const handleScroll = () => {
      let current = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        console.log('Section Top:',sectionTop);
        if (window.scrollY >= sectionTop - 100) {
          current = section.getAttribute("id");

          console.log('current:',current);
        }
      });

      navLi.forEach((li) => {
        li.classList.remove("active");
        if (li.classList.contains(current)) {
          li.classList.add("active");
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array ensures useEffect runs once after initial render

  return (
    <div>
      <Headers />
      <Home />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
