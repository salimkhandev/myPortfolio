import "../CSS/Skill.css"; // Import the custom CSS for animations

const Skills = () => {
    return (
        <div className="skills max-w-md mx-auto">
       
            <ul className="space-y-5 mt-2">
                <li>
                    <h3 className="text-lg font-bold">HTML</h3>
                    <div className="bar bg-gray-700 h-1 rounded-lg  overflow-hidden">
                        <span className="block bg-blue-500 h-full css" style={{ width: "93%" }}></span>
                    </div>
                </li>
                <li>
                    <h3 className="text-lg font-bold">CSS</h3>
                    <div className="bar bg-gray-700 h-1 rounded-lg overflow-hidden">
                        <span className="block bg-blue-500 h-full css" style={{ width: "93%" }}></span>
                    </div>
                </li>
                <li>
                    <h3 className="text-lg font-bold">JavaScript</h3>
                    <div className="bar bg-gray-700 h-1 rounded-lg  overflow-hidden">
                        <span className="block bg-blue-500 h-full javascript" style={{ width: "50%" }}></span>
                    </div>
                </li>
              
                <li>
                    <h3 className="text-lg font-bold">React</h3>
                    <div className="bar bg-gray-700 h-1 rounded-lg overflow-hidden">
                        <span className="block bg-blue-500 h-full react" style={{ width: "85%" }}></span>
                    </div>
                </li>
                <li>
                    <h3 className="text-lg font-bold">Next.js</h3>
                    <div className="bar bg-gray-700 h-1 rounded-lg  overflow-hidden">
                        <span className="block bg-blue-500 h-full nextjs" style={{ width: "75%" }}></span>
                    </div>
                </li>
                <li>
                    <h3 className="text-lg font-bold">Node.js</h3>
                    <div className="bar bg-gray-700 h-1 rounded-lg  overflow-hidden">
                        <span className="block bg-blue-500 h-full nodejs" style={{ width: "80%" }}></span>
                    </div>
                </li>
                <li>
                    <h3 className="text-lg font-bold">Tailwind CSS</h3>
                    <div className="bar bg-gray-700 h-1 rounded-lg  overflow-hidden">
                        <span className="block bg-blue-500 h-full tailwind" style={{ width: "70%" }}></span>
                    </div>
                </li>
                <li>
                    <h3 className="text-lg font-bold">MongoDB</h3>
                    <div className="bar bg-gray-700 h-1 rounded-lg  overflow-hidden">
                        <span className="block bg-blue-500 h-full mongodb" style={{ width: "60%" }}></span>
                    </div>
                </li>
                <li>
                    <h3 className="text-lg font-bold">PostgreSQL</h3>
                    <div className="bar bg-gray-700 h-1 rounded-lg  overflow-hidden">
                        <span className="block bg-blue-500 h-full postgresql" style={{ width: "65%" }}></span>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default Skills;
