import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import React, { useEffect } from 'react';

const VirtualAssistant = () => {
    useEffect(() => {
        AOS.init({
            duration: 800, // Duration of animations
            once: true, // Animation happens only once
        });
    }, []);
    return (
        <section
            id="va"
            className="min-h-screen relative flex items-center justify-center bg-gradient-to-b from-black via-[#0a1122] to-black py-16 px-4"
        >
            <div
                className="w-full max-w-4xl mx-auto"
                data-aos="fade-up"
                data-aos-duration="800"
            >
                {/* Card Container */}
                <div className="relative bg-[#1a2544]/40 backdrop-blur-xl rounded-2xl shadow-2xl overflow-hidden border border-white/10">
                    {/* Header */}
                    <div className="relative overflow-hidden">
                        {/* Background gradient for header */}
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-90"></div>
                        
                        {/* Header content */}
                        <div className="relative px-6 py-8 text-center">
                            <h1 className="text-3xl md:text-4xl font-['Great_Vibes'] text-white mb-2">
                                Virtual Assistant
                            </h1>
                            <p className="text-white/80 text-sm md:text-base">
                                Your AI-powered assistant, ready to help 24/7
                            </p>
                        </div>
                        
                        {/* Decorative elements */}
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-purple-400"></div>
                    </div>

                    {/* Iframe Container with improved styling */}
                    <div className="p-4 md:p-6">
                        <div className="relative rounded-xl overflow-hidden shadow-inner bg-black/20">
                            <iframe 
                                src="https://cdn.botpress.cloud/webchat/v2.2/shareable.html?configUrl=https://files.bpcontent.cloud/2024/10/17/11/20241017113347-9HC98NSW.json"
                                className="w-full h-[500px] md:h-[600px] transition-all duration-300 rounded-xl"
                                title="Virtual Assistant"
                            />
                            
                            {/* Loading overlay - optional */}
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/5 pointer-events-none"></div>
                        </div>
                    </div>

                    {/* Footer accent */}
                    <div className="h-1 w-full bg-gradient-to-r from-purple-400 to-blue-400"></div>
                </div>

                {/* Decorative background elements */}
                <div className="absolute inset-0 -z-10">
                    <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl"></div>
                </div>
            </div>
        </section>
    );
};

export default VirtualAssistant;
