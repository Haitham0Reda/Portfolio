import React, { useEffect, useState } from 'react';
import Pic from "../../assets/Pic.jpg";
import { RevealOnScroll } from '../RevealOnScroll';

const Home = () => {
    const [stars, setStars] = useState([]);

    // Function to generate random stars
    useEffect(() => {
        const generateStars = () => {
            const starCount = 200; // Number of stars
            const newStars = [];

            for (let i = 0; i < starCount; i++) {
                const size = Math.random() * 6 + 1; // Random size between 1px and 4px
                const left = Math.random() * 100; // Random horizontal position
                const top = Math.random() * 100; // Random vertical position
                const delay = Math.random() * 5; // Random animation delay

                newStars.push(
                    <div
                        key={i}
                        className="star absolute bg-gradient-to-r from-blue-500 to-cyan-400"
                        style={{
                            width: `${size}px`,
                            height: `${size}px`,
                            left: `${left}%`,
                            top: `${top}%`,
                            animationDelay: `${delay}s`,
                            clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 92%, 50% 70%, 21% 92%, 32% 57%, 2% 35%, 39% 35%)',
                        }}
                    />
                );
            }

            setStars(newStars);
        };

        generateStars();
    }, []);

    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
            {/* Stars Background */}
            <div className="absolute inset-0 z-0">
                {stars}
            </div>
            <RevealOnScroll>

                {/* Content */}
                <div className="text-center z-10 px-4">
                    {/* Profile Picture */}
                    <div className='w-48 h-48 sm:w-64 sm:h-64 rounded-full overflow-hidden mx-auto mb-8'>
                        <img
                            src={Pic}
                            alt="Haitham Tech's Profile Picture"
                            className="w-full h-full object-cover rounded-full hover:scale-105 transition-transform duration-300"
                        />
                    </div>

                    {/* Heading */}
                    <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-tight">
                        Hi, I'm Haitham Mo Reda
                    </h1>

                    {/* Description */}
                    <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
                        I’m a passionate <span className="font-semibold text-blue-400">front-end developer</span> specializing in building modern, responsive, and user-friendly web interfaces.
                        With expertise in <span className="font-semibold text-cyan-400">React.js</span>, <span className="font-semibold text-cyan-400">Tailwind CSS</span>, and <span className="font-semibold text-cyan-400">JavaScript</span>,
                        I love turning creative designs into seamless, high-performance web experiences.
                    </p>

                    {/* Buttons with Updated Styling */}
                    <div className="flex justify-center space-x-4">
                        <a
                            href="#projects"
                            className="bg-blue-500 text-white py-3 px-6 rounded-full font-semibold transition-all duration-200 hover:bg-blue-600 hover:shadow-lg hover:-translate-y-1"
                        >
                            View Projects
                        </a>

                        <a
                            href="#contact"
                            className="bg-transparent border-2 border-blue-500 text-cyan-500 py-3 px-6 rounded-full font-semibold transition-all duration-200 hover:bg-blue-500 hover:text-white hover:shadow-lg hover:-translate-y-1"
                        >
                            Contact Me
                        </a>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};

export default Home;