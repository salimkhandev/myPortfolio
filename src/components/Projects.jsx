
import Project from "./Project";
import { useEffect } from 'react';
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos';

const Projects = () => {
  useEffect(() => {
    AOS.init({
      duration: 800, // Duration of animations
    });
  }, []);
  const projectList = [
   {
      title: "School Management System (Alpha Version)",
      description:
        "Created a comprehensive school management application utilizing Node.js, React, Material-UI, and Tailwind CSS for a responsive and user-friendly experience.",
      link: "https://ghss-management.vercel.app",
    },
    {
      title: "TaskTame",
      description:
        "Task Tame is a React , Tailwind CSS note-taking app with  auto-adapting to dark or light mode, customizable, and storing notes in localStorage",
      link: "https://salimnote.vercel.app",
    },
    {
      title: "Background Remover",
      description:
        "A powerful tool to remove backgrounds from images effortlessly. Built with React, it provides a user-friendly interface for uploading images and downloading the processed results with transparent backgrounds.",
      link: "https://backgroundremover-eta.vercel.app/",
    },
    {
      title: "SITI Networks UI Clone (Pure HTML/CSS)",
      description:
        "A responsive front-page replica of SITI Networks, built using only HTML & CSS.",
      link: "siti-networks.vercel.app/",
    },
      {
      title: "SeatGeek",
      description:
        "A redesigned version of SeatGeek optimized for PC, offering a streamlined experience tailored for desktop users.",
      link: "https://seatgreek.vercel.app", 
    }
    ,
    {
      title: "Tic Tac Toe Game",
      description:
        "An interactive Tic Tac Toe game built with React and styled using Tailwind CSS. the purpose was to improve my programming logic.",
      link: "https://tic-tac-toe-game-tawny-five.vercel.app", 
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen  text-white flex items-center justify-center bg-black bg-opacity-70 "
    >
      <div className="max-w-4xl border border-gray-600  a70 rounded-md " 
        style={{
          backgroundColor: 'rgba(0,0 ,0 ,0.5)', backdropFilter: 'blur(10px)', // Adjust the blur intensity
          WebkitBackdropFilter: 'blur(10px)'
        }}
      >
        <h2 className="text-3xl font-bold text-center pt-6 black-ops-one-regular transition-colors duration-300 ease-in-out hover:text-gray-500"
        
        
        >Projects</h2>
        <div className="mt-10" data-aos="zoom-in" data-aos-delay="100"  >
          {projectList.map((proj, index) => (
            <Project
              key={index}
              title={proj.title}
              description={proj.description}
              link={proj.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
