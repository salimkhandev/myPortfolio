import { useEffect, useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import About from './components/About';
import AdminPanel from './components/AdminPanel';
import Contact from './components/Contact';
import CursorTrail from './components/CursorTrail';
import Headers from './components/Headers';
import Home from './components/Home';
import Projects from './components/Projects';
import SplashScreen from './components/SplashScreen';
import VirtualAssistant from './components/VirtualAssistant';
// import My3DBackground from './components/My3DBackground';
function App() {
  const [showSplash, setShowSplash] = useState(false);


  // const path = window.location.pathname;

  useEffect(() => {

    // Simulate a delay to hide the splash screen after 3 seconds
    const splashTimeout = setTimeout(() => {
      setShowSplash(false);
    }, 3000);

    return () => clearTimeout(splashTimeout); 

  }, []);

  useEffect(() => {


    const sections = document.querySelectorAll("section");
    const navLi = document.querySelectorAll("li");

    const handleScroll = () => {
      let current = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 150) {
          current = section.getAttribute("id");

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
  }, [showSplash]);
  return (
    <Router>
      <div className='svg'>
        {
          showSplash ? (<SplashScreen />) : (
            <>
              <Routes>
                <Route path='admin' element={<AdminPanel />} />
                <Route path='/' element={
                  <>
                    <Headers />
                    <Home />
                    <About />
                    <Projects />
                    <Contact />
                    <VirtualAssistant />
                    <CursorTrail />
                    {/* <My3DBackground /> */}
                  </>
                } />
              </Routes>
            </>
          )
        }
      </div>
    </Router>
  );
}

export default App;
