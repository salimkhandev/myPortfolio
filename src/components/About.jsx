import '../App.css';

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex text-white justify-center bg-black bg-opacity-70 py-16"
    >
      <div className="max-w-4xl px-6 text-center  border border-gray-600  rounded-md"
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)'
        }}
      >
        <h2 className="text-4xl font-extrabold mb-6 black-ops-one-regular transition-colors duration-300 ease-in-out hover:text-gray-500">About Me</h2>
        <div className="space-y-6">
          <p className="text-lg leading-relaxed">
            Hi, I'm <span className="text-yellow-400">Salim Khan</span>, a dedicated Software Engineering undergraduate student at Islamia College University Peshawar. With a passion for web development, I specialize in creating dynamic and responsive web applications.
          </p>

          <h3 className="text-2xl font-semibold mt-6">Skills</h3>
          <div className="skill-bar">
            <p className="text-lg leading-relaxed font-bold">Technical:</p>
            <div className="skill">
              <span>JavaScript</span>
              <div className="skill-bar-fill" style={{ width: '90%' }}></div>
            </div>
            <div className="skill">
              <span>React</span>
              <div className="skill-bar-fill" style={{ width: '85%' }}></div>
            </div>
            <div className="skill">
              <span>Node.js</span>
              <div className="skill-bar-fill" style={{ width: '80%' }}></div>
            </div>
            <div className="skill">
              <span>MongoDB</span>
              <div className="skill-bar-fill" style={{ width: '80%' }}></div>
            </div>
            <div className="skill">
              <span>MySQL</span>
              <div className="skill-bar-fill" style={{ width: '70%' }}></div>
            </div>
            <div className="skill">
              <span>HTML</span>
              <div className="skill-bar-fill" style={{ width: '95%' }}></div>
            </div>
            <div className="skill">
              <span>CSS</span>
              <div className="skill-bar-fill" style={{ width: '90%' }}></div>
            </div>
            <div className="skill">
              <span>Git</span>
              <div className="skill-bar-fill" style={{ width: '85%' }}></div>
            </div>
            <div className="skill">
              <span>Cypress</span>
              <div className="skill-bar-fill" style={{ width: '60%' }}></div>
            </div>
            <h4 className="text-xl font-semibold mt-6 text-yellow-400">Currently Learning:</h4>
            <p className="text-lg leading-relaxed">
              I'm constantly expanding my skill set and currently learning about:
            </p>
            <ul className="list-disc list-inside">
              <li>TypeScript</li>
              <li>GraphQL</li>
              <li>Docker</li>
              <li>Next.js</li>
            </ul>
          </div>
          <p className="text-lg leading-relaxed">
            <span className="font-bold">Soft Skills:</span> Team collaboration, problem-solving, agile methodologies
          </p>


          <h3 className="text-2xl font-semibold mt-6">Interests</h3>
          <p className="text-lg leading-relaxed pb-12">
            When I'm not coding, I love hiking, photography, and exploring new places.
          </p>

        </div>
      </div>
    </section>
  );
};

export default About;
