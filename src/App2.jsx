import React, { useEffect } from 'react';
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos'; // Import AOS library

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 800, // Duration of animations
    });
  }, []); // Run only once when the component mounts

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-8" data-aos="fade-up">Welcome to AOS with Tailwind CSS!</h1>
      <div data-aos="flip-left" className="p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-semibold">Flip Left Animation</h2>
        <p>This section flips in from the left when you scroll down to it.</p>
      </div>
    </div>
  );
};

export default App;
