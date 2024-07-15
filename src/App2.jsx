import React, { useState, useEffect, useRef, Suspense } from "react";

// Lazy load the section components
const SectionOne = React.lazy(() => import("./components/About"));
const SectionTwo = React.lazy(() => import("./components/Home"));
const SectionThree = React.lazy(() => import("./components/Contact"));

function App() {
  const [currentSection, setCurrentSection] = useState(1);
  const sectionRefs = useRef([]);
// console.log('All the components are ',sectionRefs.current);
  const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        console.log("Entry ❤️",entry);
      if (entry.isIntersecting) {
        const sectionIndex = sectionRefs.current.indexOf(entry.target);
        setCurrentSection(sectionIndex + 1);
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1,
    });

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      sectionRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <div>
      <div
        ref={(el) => (sectionRefs.current[0] = el)}
        id="section-1"
        style={{
          height: "100vh",
        }}
      >
        <Suspense fallback={<div>Loading Section One...</div>}>
          {currentSection === 1 && <SectionOne />}
        </Suspense>
      </div>
      <div
        ref={(el) => (sectionRefs.current[1] = el)}
        id="section-2"
        style={{
          height: "100vh",
        }}
      >
        <Suspense fallback={<div>Loading Section Two...</div>}>
          {currentSection === 2 && <SectionTwo />}
        </Suspense>
      </div>
      <div
        ref={(el) => {
          sectionRefs.current[2] = el;
          console.log("sectionRefs.current[0]:", el);
        }}
        id="section-3"
        style={{
          height: "100vh",
        }}
      >
        <Suspense fallback={<div>Loading Section Three...</div>}>
          {currentSection === 3 && <SectionThree />}
        </Suspense>
      </div>
    </div>
  );
}

export default App;
