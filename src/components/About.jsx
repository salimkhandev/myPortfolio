import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import { useEffect } from 'react';
import '../App.css';
import SkillBar from '../components/SkillBar';

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  return (
    <section 
      id="about"
      className="min-h-screen relative bg-gradient-to-b from-black via-[#0a1122] to-black py-20"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto bg-[#1a2544]/40 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl">
          {/* About Section Header */}
          <div className="text-center p-8 border-b border-white/10">
            <h2 
              data-aos="fade-down"
              className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
            >
              About Me
            </h2>
          </div>

          {/* Content Container */}
          <div className="p-8 space-y-12">
            {/* Bio Section */}
            <div 
              data-aos="fade-up"
              className="max-w-3xl mx-auto space-y-6"
            >
              <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                Hi, I'm <span className="font-semibold text-blue-400">Salim Khan</span>, 
                a Software Engineering undergraduate student at 
                <span className="font-semibold text-purple-400"> Islamia College University Peshawar</span>. 
                With a passion for web development and creating innovative solutions.
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center py-4">
                {['Problem Solver', 'Web Developer', 'UI/UX Enthusiast'].map((tag, index) => (
                  <span 
                    key={index}
                    className="px-4 py-2 bg-white/5 rounded-full text-sm font-medium text-white/80 
                    border border-white/10 hover:bg-white/10 transition-colors duration-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Skills Section */}
            <div data-aos="fade-up" className="space-y-8">
              <div className="text-center">
                <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent inline-block">
                  Technical Skills
                </h3>
                <p className="text-white/60 mt-2">
                  Technologies I work with
                </p>
              </div>
              
              <div className="skill-bar">
                <SkillBar />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
