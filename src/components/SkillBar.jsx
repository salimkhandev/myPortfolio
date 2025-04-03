import { useState } from "react";

const Skills = () => {
    const [hoveredSkill, setHoveredSkill] = useState(null);

    // Rearranged by relevance and removed C++
    const skills = [
        { name: "React", color: "bg-[#61DAFB]", icon: "react.png", textColor: "text-black", description: "Built interactive UIs and SPAs" },
        { name: "Next.js", color: "bg-[#333333]", icon: "next.png", textColor: "text-white", iconClass: "invert", description: "Developed SSR and SSG websites" },
        { name: "JavaScript", color: "bg-[#F7DF1E]", icon: "javascript.png", textColor: "text-black", description: "Strong ES6+ experience" },
        { name: "HTML", color: "bg-[#E44D26]", icon: "html.png", textColor: "text-white", description: "Semantic HTML and accessibility" },
        { name: "CSS", color: "bg-[#264DE4]", icon: "css.png", textColor: "text-white", description: "Responsive layouts with Flexbox/Grid" },
        { name: "Tailwind CSS", color: "bg-blue-900", icon: "twcss.png", textColor: "text-white", iconClass: "contrast-125", description: "Utility-first styling for rapid UI" },
        { name: "Node.js", color: "bg-[#339933]", icon: "node.png", textColor: "text-white", description: "Built RESTful APIs and backends" },
        { name: "PostgreSQL", color: "bg-[#336791]", icon: "pg.png", textColor: "text-white", description: "Complex SQL queries and DB design" },
        { name: "MongoDB", color: "bg-[#47A248]", icon: "mongo.png", textColor: "text-white", description: "NoSQL database for flexible models" },
        { name: "PWA", color: "bg-[#9333EA]", icon: "pwa.png", textColor: "text-white", description: "Offline-first applications" },
        { name: "git", color: "bg-[#F05032]", icon: "git.png", textColor: "text-white", description: "Version control and collaboration" }
    ];

    return (
        <section className="min-h-screen bg-gradient-to-b from-black via-[#0a1122] to-black py-20">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
                    Technical Skills
                </h2>
                <p className="text-white/70 max-w-2xl mx-auto">
                    Technologies I've worked with in web development projects
                </p>

                <div className="max-w-4xl mx-auto bg-[#0a1122]/80 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl p-8 mt-10">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        {skills.map((skill) => (
                            <div
                                key={skill.name}
                                className="flex flex-col items-center group relative"
                                onMouseEnter={() => setHoveredSkill(skill.name)}
                                onMouseLeave={() => setHoveredSkill(null)}
                            >
                                <div className={`w-20 h-20 flex items-center justify-center rounded-full ${skill.color} transition-all transform group-hover:scale-110 shadow-lg`}>
                                    <img
                                        src={`/techIcons/${skill.icon}`}
                                        alt={`${skill.name} icon`}
                                        className={`w-10 h-10 object-contain ${skill.iconClass || ""}`}
                                    />
                                </div>
                                <h3 className="text-base font-medium text-white/90 group-hover:text-white transition-colors">
                                    {skill.name}
                                </h3>

                                {hoveredSkill === skill.name && (
                                    <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 -translate-y-full w-48 bg-gray-900/90 backdrop-blur-md text-white text-xs rounded-lg p-3 shadow-xl border border-white/10">
                                        {skill.description}
                                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-3 h-3 bg-gray-900/90 border-b border-r border-white/10"></div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
