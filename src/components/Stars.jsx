import React, { useMemo } from 'react';

const Stars = ({ children }) => {  // Receive children as prop here
    // Generate stars with useMemo for better performance
    const stars = useMemo(() => {  // Remove props from useMemo
        const starCount = 150; // Slightly reduced for performance
        return Array.from({ length: starCount }).map((_, i) => {
            const size = Math.random() * 3 + 1; // Smaller size range
            const left = Math.random() * 100;
            const top = Math.random() * 100;
            const delay = Math.random() * 5;
            const opacity = Math.random() * 0.7 + 0.3;
            const duration = Math.random() * 4 + 2;
            const isTwinkling = Math.random() > 0.3; // 70% chance to twinkle

            return (
                <div
                    key={`star-${i}`}
                    className={`star absolute ${isTwinkling ? 'animate-twinkle' : ''}`}
                    style={{
                        width: `${size}px`,
                        height: `${size}px`,
                        left: `${left}%`,
                        top: `${top}%`,
                        animationDelay: `${delay}s`,
                        animationDuration: `${duration}s`,
                        opacity: opacity,
                        background: 'rgba(255, 255, 255, 0.8)',
                        boxShadow: `0 0 ${size * 2}px ${size / 2}px rgba(100, 200, 255, ${opacity * 0.5})`,
                        transform: `scale(${Math.random() * 0.5 + 0.5})`,
                        willChange: 'transform, opacity',
                        clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)'
                    }}
                />
            );
        });
    }, []);

    return (
        <div className="fixed inset-0 -z-50 overflow-hidden pointer-events-none">
            {stars}
            {children}  {/* Render children here */}
        </div>
    );
};

export default Stars;