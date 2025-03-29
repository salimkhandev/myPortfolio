import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Skills = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true
        });
    }, []);

    const skills = [
        { name: "HTML", level: 93, color: "from-[#FF6B6B] to-[#FF8E53]" },
        { name: "CSS", level: 93, color: "from-[#4A90E2] to-[#67B26F]" },
        { name: "JavaScript", level: 50, color: "from-[#F7DF1E] to-[#FFA500]" },
        { name: "React", level: 85, color: "from-[#61DAFB] to-[#00B4D8]" },
        { name: "Next.js", level: 75, color: "from-[#000000] to-[#333333]" },
        { name: "Node.js", level: 80, color: "from-[#68A063] to-[#3C873A]" },
        { name: "Tailwind CSS", level: 70, color: "from-[#38BDF8] to-[#818CF8]" },
        { name: "MongoDB", level: 60, color: "from-[#4DB33D] to-[#3F9C35]" },
        { name: "PostgreSQL", level: 65, color: "from-[#336791] to-[#0064A5]" }
    ];

    return (
        <section className="min-h-screen relative bg-gradient-to-b from-black via-[#0a1122] to-black py-20">
            {/* Decorative background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
            </div>

            {/* Main content */}
            <div className="container mx-auto px-4 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-12" data-aos="fade-down">
                    <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
                        Technical Skills
                    </h2>
                    <p className="text-gray-400">My technical expertise and proficiency levels</p>
                </div>

                {/* Skills Container */}
                <div className="max-w-3xl mx-auto bg-[#1a2544]/40 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl p-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {skills.map((skill, index) => (
                            <div
                                key={skill.name}
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                                className="skill-item group"
                            >
                                <div className="flex justify-between items-center mb-2">
                                    <h3 className="text-lg font-bold tracking-wide text-white/90 group-hover:text-white transition-colors">
                                        {skill.name}
                                    </h3>
                                    <span className="text-sm font-semibold text-white/70 group-hover:text-white/90 transition-colors">
                                        {skill.level}%
                                    </span>
                                </div>
                                
                                {/* Skill Bar Container */}
                                <div className="relative h-3 bg-white/5 rounded-full overflow-hidden backdrop-blur-sm">
                                    {/* Background Glow Effect */}
                                    <div 
                                        className="absolute inset-0 blur-md bg-gradient-to-r opacity-30"
                                        style={{
                                            width: `${skill.level}%`,
                                            backgroundImage: `linear-gradient(to right, ${skill.color})`
                                        }}
                                    />
                                    
                                    {/* Main Progress Bar */}
                                    <div 
                                        className={`relative h-full rounded-full bg-gradient-to-r ${skill.color}
                                            transform origin-left transition-all duration-1000 ease-out
                                            group-hover:scale-x-105`}
                                        style={{
                                            width: `${skill.level}%`,
                                            animation: `slideIn 1.5s ease-out forwards`
                                        }}
                                    >
                                        {/* Shine Effect */}
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent
                                            transform -skew-x-45 translate-x-full group-hover:translate-x-0 transition-transform duration-1000" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
