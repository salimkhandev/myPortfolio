import React, { useState, useEffect } from 'react';
// import './DynamicCaption.css';

const DynamicCaption = () => {
    const [captionIndex, setCaptionIndex] = useState(0);
    const [fade, setFade] = useState(false);
    const captions = ["I am a developer", "I am a designer", "I am an engineer"];

    useEffect(() => {
        const intervalId = setInterval(() => {
            setFade(true); // Trigger fade-out

            setTimeout(() => {
                setCaptionIndex(prevIndex => (prevIndex + 1) % captions.length);
                setFade(false); // Trigger fade-in
            }, 500); // Match this timeout with the transition duration
        }, 2500); // Interval slightly longer than fade to keep each caption visible for 2 seconds

        return () => clearInterval(intervalId); // Cleanup interval on component unmount
    }, []);

    return (
        <div className={`caption ${fade ? 'fade-out' : ''}`}>
            {captions[captionIndex]}
        </div>
    );
};

export default DynamicCaption;
