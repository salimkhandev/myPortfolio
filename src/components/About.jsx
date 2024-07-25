import '../App.css'
const About = () => {
  return (
    <section
      id="about"
  
      className="min-h-screen flex  text-white justify-center bg-black bg-opacity-70 py-16"
    >
      <div className="max-w-4xl px-6 text-center"  
        style={{
          backgroundColor: 'rgba(0,0 ,0 ,0.5)', backdropFilter: 'blur(10px)', // Adjust the blur intensity
          WebkitBackdropFilter: 'blur(10px)'
        }}
      >
        <h2 className="text-4xl font-extrabold mb-6  black-ops-one-regular transition-colors duration-300 ease-in-out hover:text-gray-500">About Me</h2>
        <div className="space-y-6">
          <p className="text-lg leading-relaxed">
            Hi, I'm <span className="text-yellow-400">[Your Name]</span>, a dedicated Software Engineering undergraduate student at Islamia College University Peshawar. With a passion for web development, I specialize in creating dynamic and responsive web applications.
          </p>
          <h3 className="text-2xl font-semibold">Experience</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Project A:</strong> Developed a scalable e-commerce platform using React and Node.js, increasing user engagement by 30%.
            </li>
            <li>
              <strong>Project B:</strong> Led a team in creating a real-time chat application, leveraging WebSocket and MongoDB.
            </li>
          </ul>
          <h3 className="text-2xl font-semibold mt-6">Skills</h3>
          <p className="text-lg leading-relaxed">
            <span className="font-bold">Technical:</span> JavaScript, React, Node.js, Express, MongoDB, HTML, CSS, Git
          </p>
          <p className="text-lg leading-relaxed">
            <span className="font-bold">Soft Skills:</span> Team collaboration, problem-solving, agile methodologies
          </p>
          <h3 className="text-2xl font-semibold mt-6">Education</h3>
          <p className="text-lg leading-relaxed">
            Currently pursuing a Bachelor's degree in Software Engineering at Islamia College University Peshawar. My coursework has equipped me with a strong foundation in software development, algorithms, and system design.
          </p>
          <h3 className="text-2xl font-semibold mt-6">Personal Projects</h3>
          <p className="text-lg leading-relaxed">
            In my spare time, I contribute to open-source projects and enjoy experimenting with new technologies. Check out my GitHub profile at <a href="https://github.com/yourusername" className="text-yellow-400 underline">github.com/yourusername</a>.
          </p>
          <h3 className="text-2xl font-semibold mt-6">Interests</h3>
          <p className="text-lg leading-relaxed">
            When I'm not coding, I love hiking, photography, and exploring new places.
          </p>
          <h3 className="text-2xl font-semibold mt-6">Get in Touch</h3>
          <p className="text-lg leading-relaxed">
            I'm always open to discussing new opportunities or collaborations. Feel free to reach out to me at <a href="mailto:your.email@example.com" className="text-yellow-400 underline">your.email@example.com</a> or connect with me on <a href="https://linkedin.com/in/yourprofile" className="text-yellow-400 underline">LinkedIn</a>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
