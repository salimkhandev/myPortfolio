
import Project from "./Project";

const Projects = () => {
  const projectList = [
    {
      title: "Secure Login Page for Facebook Users",
      description:
        "A secure login page designed for Facebook users to access their accounts. User data is stored securely to ensure privacy and convenience.",
      link: "https://login-rose-eight.vercel.app/",
    },
    {
      title: "TaskTame",
      description:
        "A simple and efficient to-do app that saves your tasks on your device. It automatically matches your device's dark or light mode for a comfortable viewing experience.",
      link: "https://salimnote.vercel.app/",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen  text-white flex items-center justify-center bg-black bg-opacity-70 "
    >
      <div className="max-w-4xl border border-gray-600  rounded-md rounded-md" 
        style={{
          backgroundColor: 'rgba(0,0 ,0 ,0.5)', backdropFilter: 'blur(10px)', // Adjust the blur intensity
          WebkitBackdropFilter: 'blur(10px)'
        }}
      >
        <h2 className="text-3xl font-bold text-center pt-6 black-ops-one-regular transition-colors duration-300 ease-in-out hover:text-gray-500"
        
        
        >Projects</h2>
        <div className="mt-10" >
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
