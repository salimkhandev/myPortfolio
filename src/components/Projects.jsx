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
      className="min-h-screen flex items-center justify-center relative"
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-md"></div>
      <div className="relative z-10 max-w-4xl p-6 bg-white bg-opacity-90 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center text-gray-900" 
        >Projects</h2>
        <div className="mt-8 space-y-6">
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
