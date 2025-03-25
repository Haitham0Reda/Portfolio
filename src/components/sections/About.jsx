import React, { useEffect, useState } from 'react';
import Skills from '../Skills';
import { RevealOnScroll } from '../RevealOnScroll';

const About = () => {
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
        <section id="about" className="min-h-screen flex items-center justify-center py-20 relative overflow-hidden">
            {/* Stars Background */}
            <div className="absolute inset-0 z-0">
                {stars}
            </div>
            <RevealOnScroll>

                {/* Content */}
                <div className="max-w-3xl mx-auto px-4 z-10">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                        About Me
                    </h2>

                    {/* Skills Section */}
                    <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                        <p className="text-gray-300 mb-6">
                            Driven by curiosity, I build scalable web applications and innovative solutions that turn ideas into impactful digital experiences.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {Object.entries(Skills).map(([category, skills]) => (
                                <div key={category} className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                    <h3 className="text-xl font-bold mb-4">{category.replace(/([A-Z])/g, ' $1').trim()}</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {skills.map((skill, index) => (
                                            <span
                                                key={index}
                                                className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                                            >
                                                {skill.skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Education and Work Experience Section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                        <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">🏫 Education</h3>
                            <ul className="text-gray-300 space-y-4">
                                <li className="relative pl-6">
                                    <div className="absolute left-0 top-2 w-2 h-2 bg-blue-500 rounded-full"></div>
                                    <h4 className="font-semibold">Front-End Web Developer Nanodegree - Udacity (July 2022 - Aug 2022)</h4>
                                    <p>
                                        Gained skills in building responsive websites, developing interactive UI applications, and connecting web applications to backend server data.
                                    </p>
                                </li>

                                <li className="relative pl-6">
                                    <div className="absolute left-0 top-2 w-2 h-2 bg-blue-500 rounded-full"></div>
                                    <h4 className="font-semibold">Front-End Diploma (Web Design + React.js) - ITSharks (July 2022 - Aug 2022)</h4>
                                    <p>
                                        Focused on front-end development, including web design and React.js.
                                    </p>
                                </li>

                                <li className="relative pl-6">
                                    <div className="absolute left-0 top-2 w-2 h-2 bg-blue-500 rounded-full"></div>
                                    <h4 className="font-semibold">Bachelor’s Degree - Faculty of Art Education, Helwan University (May 2012)</h4>
                                    <p>
                                        Graduated with a degree in Art Education, which laid the foundation for my creative and technical skills.
                                    </p>
                                </li>
                            </ul>
                        </div>

                        <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">💼 Work Experience</h3>
                            <ul className="text-gray-300 space-y-4">
                                <li className="relative pl-6">
                                    <div className="absolute left-0 top-2 w-2 h-2 bg-blue-500 rounded-full"></div>
                                    <h4 className="font-semibold">Registrar at CIC Canadian International College (Jun 2015 - Present)</h4>
                                    <p>
                                        Managed student registration, documentation, and academic processes, ensuring accuracy and compliance.
                                    </p>
                                </li>

                                <li className="relative pl-6">
                                    <div className="absolute left-0 top-2 w-2 h-2 bg-blue-500 rounded-full"></div>
                                    <h4 className="font-semibold">Graphic Designer at Creo Advertising (Jun 2013 - May 2014)</h4>
                                    <p>
                                        Designed brochures, logos, and advertisements using Adobe Creative Suite (Photoshop, Illustrator, InDesign).
                                    </p>
                                </li>

                                <li className="relative pl-6">
                                    <div className="absolute left-0 top-2 w-2 h-2 bg-blue-500 rounded-full"></div>
                                    <h4 className="font-semibold">Transitioning to Front-End Developer</h4>
                                    <p>
                                        Shifting my career path to front-end development, I am building scalable web applications and creating innovative solutions to deliver seamless user experiences.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};

export default About;