import "animate.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion'; // You'll need to install framer-motion
import { useEffect } from 'react';
import { ReactTyped } from "react-typed";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  const strings = [
    "<span class='bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent'>I'm</span> a frontend developer",
    "<span class='bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent'>I'm</span> a backend developer",
    "<span class='bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent'>I'm</span> a UI/UX designer",
    "<span class='bg-gradient-to-r from-rose-400 to-orange-400 bg-clip-text text-transparent'>I'm</span> a tester"
  ];

  return (
    <section
      id="home"
      className="min-h-screen relative flex items-center justify-center bg-gradient-to-b from-black via-[#0a1122] to-black overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative mb-8 inline-block"
        >
          {/* Profile image with animated border */}
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
            <img
              src="/profilePic.jpg"
              className="relative h-48 w-48 md:h-56 md:w-56 rounded-full object-cover transform transition duration-500 hover:scale-105"
              alt="Salim Khan"
            />
          </div>

          {/* Animated rings around the profile picture */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 border-2 border-blue-500/20 rounded-full animate-spin-slow"></div>
            <div className="absolute inset-4 border-2 border-purple-500/20 rounded-full animate-spin-slow-reverse"></div>
          </div>
        </motion.div>

        {/* Name and title */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="space-y-6"
        >
          {/* Name with gradient */}
          <h1 className="text-4xl md:text-6xl font-bold">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              Salim Khan
            </span>
          </h1>

          {/* Typed text container */}
          <div className="h-20 flex justify-center items-center">
            <ReactTyped
              className="text-xl md:text-2xl font-light text-white/90"
              strings={strings}
              typeSpeed={40}
              backSpeed={50}
              loop
              cursorChar="|"
            />
          </div>

          {/* Tagline with gradient */}
          <p className="text-lg bg-gradient-to-r from-gray-400 to-white/80 bg-clip-text text-transparent">
            Turning ideas into reality through code
          </p>

          {/* CTA Button */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <a
              href="#projects"
              className="inline-block px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full 
                text-white font-medium transform hover:scale-105 transition-all duration-300 
                hover:shadow-lg hover:shadow-blue-500/25"
            >
              Explore My Work
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
