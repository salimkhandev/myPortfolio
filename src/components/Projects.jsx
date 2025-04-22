import AOS from 'aos';
import 'aos/dist/aos.css';
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
      title: "School Management System (still working on it...)",
      description: "",
      link: "https://ghss-management.vercel.app",
      githubLink: "https://github.com/salimkhandev/GHSS-Management",
      technologies: ["React", "Node.js", "Material-UI", "Tailwind CSS"],
      image: "../../public/techIcons/projectScreenshot/schoolmng.png"
    },
    {
      title: "Push Notifications",
      description: "Send background and foreground push notification to desktops, Iphone and android devices , in bulk or individually.",
      link: "https://firebase-fcm2.vercel.app",
      githubLink: "https://github.com/salimkhandev/Firebase-FCM",
      technologies: ["Firebase", "FCM", "React"],
      image: "../../public/techIcons/projectScreenshot/fcm.png"
    },
    {
      title: "offline attendance system (PWA)",
      description: "Mark attendance offline using persistent IndexedDB. When the internet is back, data is automatically sent to the server.",
      link: "https://pwa-frontend-123.vercel.app/attendance",

      githubLink: "https://github.com/salimkhandev/pwa-master",
      technologies: ["React", "PWA", "push notification", "IndexedDB", "bgSync"],
      image: "../../public/techIcons/projectScreenshot/fullPwa.png"
    },
    {
      title: "TaskTame",
      description: "Use and install it offline on any OS",
      link: "https://salimnote.vercel.app",
      githubLink: "https://github.com/salimkhandev/ReactToDo",
      technologies: ["React", "Tailwind CSS", "PWA", "localStorage"],
      // correct the path of the image
      image: "../../public/techIcons/projectScreenshot/tasktame.png.png"


    },
    {
      title: "SITI Networks UI Clone (Pure HTML/CSS)",
      description: "",
      link: "https://siti-networks.vercel.app/",
      githubLink: "https://github.com/salimkhandev/SITI-Networks",
      technologies: ["HTML", "CSS", "Responsive Design"],
      image: "../../public/techIcons/projectScreenshot/siti.png"
    },
    {
      title: "SeatGeek",
      description: "",
      link: "https://seatgreek.vercel.app",
      githubLink: "https://github.com/salimkhandev/seatgreek",
      technologies: ["Next.js"],
      image: "../../public/techIcons/projectScreenshot/geek.png"
    },
    {
      title: "Background Remover",
      description: "",
      link: "https://backgroundremover-eta.vercel.app/",
      githubLink: "https://github.com/salimkhandev/BackgroundRemoverFrontend",
      technologies: ["React", "Image Processing", "API Integration"],
      image: "../../public/techIcons/projectScreenshot/bgRemove.png"
    },
    
    {
      title: "Offline Snake Game 🐍 (PWA)",
      description: "install & play it offline on any OS",
      link: "https://snake-game-pwa.vercel.app",
      githubLink: "https://github.com/salimkhandev/offline-snake-game",
      technologies: ["JavaScript", "PWA", "HTML5 Canvas"],
      image: "../../public/techIcons/projectScreenshot/snake.png"
    },
    {
      title: "Tic Tac Toe Game",
      description: "Play against computer",
      link: "https://tic-tac-toe-game-tawny-five.vercel.app",
      githubLink: "https://github.com/salimkhandev/Tic-Tac-Toe-game",
      technologies: ["React", "Tailwind CSS", "Game Logic"],
      image: "../../public/techIcons/projectScreenshot/tictactoe.png"
    }
  ];

  return (
    <section
      id="projects"
      className="min-h-screen py-20 relative bg-gradient-to-b from-black via-[#0a1122] to-black"
    >
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
