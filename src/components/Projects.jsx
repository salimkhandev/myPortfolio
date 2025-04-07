import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import { useEffect } from 'react';
import Project from "./Project";

const Projects = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  const projectList = [
    {
      title: "School Management System (beta version)",
      description:
        "Created a comprehensive school management application utilizing Node.js, React, Material-UI, and Tailwind CSS for a responsive and user-friendly experience.",
      link: "https://ghss-management.vercel.app",
      githubLink: "https://github.com/yourusername/school-management",
      technologies: ["React", "Node.js", "Material-UI", "Tailwind CSS"],
      // image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAZwvFgirjun2d5KsHYrsqPXogcr8qqt5qYg&s" // Add image paths if available
    },
    {
      title: "Push Notifications",
      description:
        "Used Firebase Cloud Messaging (FCM) service to send in-app and background push notifications to all devices or specific ones from custom UI",
      link: "https://firebase-fcm2.vercel.app",
      githubLink: "https://github.com/yourusername/firebase-fcm",
      technologies: ["Firebase", "FCM", "React"]
    },
    {
      title: "TaskTame",
      description:
        "Task Tame is a React and Tailwind CSS-powered note-taking app that works offline, is installable, auto-adapts to dark or light mode, offers customization options, and stores notes securely in localStorage",
      link: "https://salimnote.vercel.app",
      githubLink: "https://github.com/yourusername/task-tame",
      technologies: ["React", "Tailwind CSS", "PWA", "localStorage"]
    },
    {
      title: "Background Remover",
      description:
        "A powerful tool to remove backgrounds from images effortlessly. Built with React",
      link: "https://backgroundremover-eta.vercel.app/",
      githubLink: "https://github.com/yourusername/background-remover",
      technologies: ["React", "Image Processing", "API Integration"]
    },
    {
      title: "SITI Networks UI Clone (Pure HTML/CSS)",
      description:
        "A responsive front-page replica of SITI Networks, built using only HTML & CSS.",
      link: "https://siti-networks.vercel.app/",
      githubLink: "https://github.com/yourusername/siti-networks-clone",
      technologies: ["HTML", "CSS", "Responsive Design"]
    },
    {
      title: "SeatGeek",
      description:
        "A redesigned version of SeatGeek optimized for PC, offering a streamlined experience tailored for desktop users.",
      link: "https://seatgreek.vercel.app",
      githubLink: "https://github.com/yourusername/seatgeek-clone",
      technologies: ["React", "CSS", "UI/UX Design"]
    },
    {
      title: "Offline Snake Game 🐍 (PWA)",
      description:
        "A lightweight, offline-capable Snake game. Install it on your home screen and enjoy playing without the internet!",
      link: "https://snake-game-pwa.vercel.app",
      githubLink: "https://github.com/yourusername/snake-game-pwa",
      technologies: ["JavaScript", "PWA", "HTML5 Canvas"]
    },
    {
      title: "Tic Tac Toe Game",
      description:
        "An interactive Tic Tac Toe game built with React and styled using Tailwind CSS. the purpose was to improve my programming logic.",
      link: "https://tic-tac-toe-game-tawny-five.vercel.app",
      githubLink: "https://github.com/yourusername/tic-tac-toe",
      technologies: ["React", "Tailwind CSS", "Game Logic"]
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen py-20 relative bg-gradient-to-b from-black via-[#0a1122] to-black"
    >
      {/* Enhanced background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-indigo-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div
          className="max-w-6xl mx-auto md:bg-[#1a2544]/40 md:backdrop-blur-xl rounded-2xl md:border md:border-white/10 md:shadow-2xl"
          data-aos="fade-up"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center p-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 p-6">
            {projectList.map((proj, index) => (
              <Project
                key={index}
                title={proj.title}
                description={proj.description}
                link={proj.link}
                githubLink={proj.githubLink}
                technologies={proj.technologies}
                image={proj.image}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;