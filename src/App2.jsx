import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Headers from './components/Headers';
import AdminPanel from './components/AdminPanel';
import SplashScreen from './components/SplashScreen';

function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    // Simulate a delay to hide the splash screen after 3 seconds
    const splashTimeout = setTimeout(() => {
      setShowSplash(false);
    }, 3000);

    return () => clearTimeout(splashTimeout); // Cleanup timeout on unmount
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const navLi = document.querySelectorAll('li');

    const handleScroll = () => {
      let current = '';

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 100) {
          current = section.getAttribute('id');
        }
      });

      navLi.forEach((li) => {
        li.classList.remove('active');
        if (li.classList.contains(current)) {
          li.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [showSplash]); // Empty dependency array ensures useEffect runs once after initial render

  return (
    <Router>
      <div>
        {showSplash ? (
          <SplashScreen />
        ) : (
          <Routes>
            <Route path="/admin" element={<AdminPanel />} />
            <Route
              path="/"
              element={
                <>
                  <Headers />
                  <Home />
                  <About />
                  <Projects />
                  <Contact />
                </>
              }
            />
          </Routes>
        )}
      </div>
    </Router>
  );
}

export default App;
