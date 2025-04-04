import React, { useEffect, useRef, useState } from 'react';

const COLOR_PRESETS = {
    subtle: {
        primary: 'rgba(180, 210, 255, 0.4)',
        secondary: 'rgba(200, 230, 255, 0.3)',
        shadow: '0 0 8px rgba(180, 210, 255, 0.2)'
    },
    cyber: {
        primary: 'rgba(0, 255, 255, 0.8)',
        secondary: 'rgba(255, 0, 255, 0.6)',
        shadow: '0 0 15px rgba(0, 255, 255, 0.7)'
    },
    lava: {
        primary: 'rgba(255, 80, 0, 0.8)',
        secondary: 'rgba(255, 200, 0, 0.6)',
        shadow: '0 0 20px rgba(255, 100, 0, 0.6)'
    },
    nebula: {
        primary: 'rgba(150, 50, 255, 0.8)',
        secondary: 'rgba(50, 150, 255, 0.6)',
        shadow: '0 0 25px rgba(150, 50, 255, 0.5)'
    }
};

const CursorTrail = ({
    active = true,
    preset = "subtle",
    density = 2,
    sizeRange = [2, 6],
    physics = true,
    maxParticles = 30,
    activationAreas = [],
    fadeSpeed = 0.95
}) => {
    const [particles, setParticles] = useState([]);
    const [isInActiveArea, setIsInActiveArea] = useState(false);
    const frameRef = useRef();
    const lastPos = useRef({ x: 0, y: 0 });
    const colors = COLOR_PRESETS[preset] || COLOR_PRESETS.subtle;
    const isEnabledRef = useRef(active);

    useEffect(() => {
        isEnabledRef.current = active;
    }, [active]);

    useEffect(() => {
        if (!active) return;

        const checkActiveAreas = (e) => {
            if (activationAreas.length === 0) {
                setIsInActiveArea(true);
                return true;
            }

            const elements = activationAreas.map(selector => 
                Array.from(document.querySelectorAll(selector))
            ).flat();
            
            const isOver = elements.some(el => {
                if (!el) return false;
                const rect = el.getBoundingClientRect();
                return (
                    e.clientX >= rect.left &&
                    e.clientX <= rect.right &&
                    e.clientY >= rect.top &&
                    e.clientY <= rect.bottom
                );
            });

            setIsInActiveArea(isOver);
            return isOver;
        };

        const handleMouseMove = (e) => {
            if (!isEnabledRef.current || (activationAreas.length > 0 && !checkActiveAreas(e))) {
                return;
            }

            const velocity = physics ? {
                x: e.clientX - lastPos.current.x,
                y: e.clientY - lastPos.current.y
            } : { x: 0, y: 0 };

            lastPos.current = { x: e.clientX, y: e.clientY };

            if (Math.abs(velocity.x) < 0.2 && Math.abs(velocity.y) < 0.2 && physics) {
                return;
            }

            const speedFactor = physics ? 
                Math.min(1, Math.sqrt(velocity.x * velocity.x + velocity.y * velocity.y) / 10) : 1;
            const currentDensity = Math.max(1, Math.round(density * speedFactor));

            const newParticles = Array.from({ length: currentDensity }).map((_, i) => ({
                id: Date.now() + i,
                x: e.clientX + (Math.random() * 20 - 10),
                y: e.clientY + (Math.random() * 20 - 10),
                size: Math.random() * (sizeRange[1] - sizeRange[0]) + sizeRange[0],
                opacity: 0.8 + Math.random() * 0.2,
                velocity: {
                    x: velocity.x * 0.2 + (Math.random() * 2 - 1),
                    y: velocity.y * 0.2 + (Math.random() * 2 - 1)
                },
                life: 100
            }));

            setParticles(prev => [...prev.slice(-(maxParticles - density)), ...newParticles]);
        };

        const updateParticles = () => {
            setParticles(prev => {
                return prev
                    .map(p => {
                        // Apply physics
                        const updated = {
                            ...p,
                            x: p.x + p.velocity.x,
                            y: p.y + p.velocity.y,
                            velocity: {
                                x: p.velocity.x * 0.95,
                                y: p.velocity.y * 0.95
                            },
                            life: p.life - 2,
                            opacity: p.opacity * 0.96
                        };
                        return updated;
                    })
                    .filter(p => p.life > 0 && p.opacity > 0.05);
            });
            frameRef.current = requestAnimationFrame(updateParticles);
        };

        window.addEventListener('mousemove', handleMouseMove);
        frameRef.current = requestAnimationFrame(updateParticles);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(frameRef.current);
        };
    }, [active, density, maxParticles, physics, sizeRange]);

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            pointerEvents: 'none',
            zIndex: 9999
        }}>
            {particles.map((p) => (
                <div
                    key={p.id}
                    style={{
                        position: 'absolute',
                        left: `${p.x}px`,
                        top: `${p.y}px`,
                        width: `${p.size}px`,
                        height: `${p.size}px`,
                        borderRadius: '50%',
                        background: `radial-gradient(circle, ${colors.primary}, ${colors.secondary})`,
                        boxShadow: colors.shadow,
                        opacity: p.opacity,
                        transform: `translate(-50%, -50%) scale(${1 + (1 - p.opacity)})`,
                        transition: 'transform 0.05s ease-out, opacity 0.1s ease-out',
                        willChange: 'transform, opacity'
                    }}
                />
            ))}
        </div>
    );
};

export default CursorTrail;