import React, { useEffect, useState } from 'react';
import { RevealOnScroll } from '../RevealOnScroll';

const Projects = () => {
    const [stars, setStars] = useState([]);
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Function to generate random stars
    useEffect(() => {
        const generateStars = () => {
            const starCount = 200; // Number of stars
            const newStars = [];

            for (let i = 0; i < starCount; i++) {
                const size = Math.random() * 6 + 1; // Random size between 1px and 7px
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

    // Fetch projects from GitHub
    useEffect(() => {
        const fetchProjects = async () => {
            try {
                // Access environment variables directly through import.meta.env in Vite
                const token = import.meta.env.VITE_GITHUB_TOKEN;

                if (!token) {
                    throw new Error("GitHub token is missing. Please check your environment variables.");
                }

                const response = await fetch(
                    'https://api.github.com/users/Haitham0Reda/repos',
                    {
                        headers: {
                            Authorization: `token ${token}`,
                        },
                    }
                );

                if (!response.ok) {
                    if (response.status === 403) {
                        throw new Error("GitHub API rate limit exceeded. Please try again later.");
                    }
                    throw new Error(`Failed to fetch projects: ${response.status} ${response.statusText}`);
                }

                const data = await response.json();
                const filteredProjects = data
                    .filter((repo) => !repo.fork)
                    .sort((a, b) => b.stargazers_count - a.stargazers_count);
                setProjects(filteredProjects);
                setLoading(false);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        };

        fetchProjects();
    }, []);

    if (loading) {
        return (
            <section id="projects" className="min-h-screen flex items-center justify-center py-20 relative overflow-hidden">
                <div className="text-center">
                    <div className="spinner border-4 border-blue-400 border-t-transparent rounded-full w-12 h-12 animate-spin mx-auto mb-4"></div>
                    <p className="text-blue-400 text-lg">Loading projects...</p>
                </div>
            </section>
        );
    }

    if (error) {
        return (
            <section id="projects" className="min-h-screen flex items-center justify-center py-20 relative overflow-hidden">
                <div className="text-center">
                    <p className="text-red-400 text-lg">Error: {error}</p>
                    <p className="text-gray-400 mt-2">Please refresh the page or try again later.</p>
                </div>
            </section>
        );
    }

    return (
        <section id="projects" className="min-h-screen flex items-center justify-center py-20 relative overflow-hidden">
            {/* Stars Background */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                {stars}
            </div>
            <RevealOnScroll>

                {/* Content */}
                <div className="container max-w-5xl mx-auto px-4 z-10">
                    <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                        Featured Projects
                    </h2>

                    {projects.length === 0 ? (
                        <div className="text-center">
                            <p className="text-gray-400">No projects found.</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                            {projects.map((project) => (
                                <div
                                    key={project.id}
                                    className="p-6 rounded-xl bg-gray-900/50 border border-white/10 backdrop-blur-sm hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all duration-300"
                                >
                                    <h3 className="text-xl font-bold mb-2 text-white">{project.name}</h3>
                                    <p className="text-gray-400 mb-4">
                                        {project.description || "No description available."}
                                    </p>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.topics?.map((topic) => (
                                            <span
                                                key={topic}
                                                className="px-2 py-1 bg-blue-500/10 text-blue-400 rounded-full text-xs"
                                            >
                                                {topic}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <a
                                            href={project.html_url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-400 hover:text-blue-300 transition-colors my-4 flex items-center"
                                        >
                                            View on GitHub <span className="ml-1">→</span>
                                        </a>
                                        <div className="flex items-center text-gray-400 text-sm">
                                            <span className="mr-1">⭐</span>
                                            <span>{project.stargazers_count}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

            </RevealOnScroll>
        </section>
    );
};

export default Projects;