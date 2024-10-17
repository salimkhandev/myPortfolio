import React, { useEffect } from 'react';
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos';

const VirtualAssistant = () => {
    useEffect(() => {
        AOS.init({
            duration: 800, // Duration of animations
        });
    }, []);
    return (
        <section
            id="va"
            className="min-h-screen flex items-center justify-center bg-black bg-opacity-70 relative"
        >
            <div
                className="min-h-screen flex items-center justify-center py-20 text-white"
                data-aos="zoom-in"  // AOS animation type
                data-aos-duration="500"  // Duration of the animation
            >
                {/* Card Container */}
                <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-lg">
                    {/* Header */}
                    <div className="bg-blue-600 text-white text-center py-4">
                        <h1 className="text-2xl font-semibold">Virtual Assistant</h1>
                    </div>

                    {/* Iframe Section */}
                    <div>
                        <iframe
                            src="https://cdn.botpress.cloud/webchat/v2.2/shareable.html?configUrl=https://files.bpcontent.cloud/2024/10/17/11/20241017113347-9HC98NSW.json"
                            className="w-full h-96 border-none rounded-lg"
                            title="Virtual Assistant"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VirtualAssistant;
