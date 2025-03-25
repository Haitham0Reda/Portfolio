import React, { useEffect, useState } from 'react';
import { RevealOnScroll } from '../RevealOnScroll';
import emailjs from 'emailjs-com';
import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css';

const Contact = () => {
    const [stars, setStars] = useState([]);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [isLoading, setIsLoading] = useState(false);

    // Generate starry background
    useEffect(() => {
        const generateStars = () => {
            const starCount = 200;
            const newStars = [];

            for (let i = 0; i < starCount; i++) {
                const size = Math.random() * 6 + 1;
                const left = Math.random() * 100;
                const top = Math.random() * 100;
                const delay = Math.random() * 5;

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

    const showToast = (message, isSuccess = true) => {
        Toastify({
            text: message,
            duration: 5000,
            close: true,
            gravity: "bottom",
            position: "right",
            style: {
                "background": isSuccess ? "#4CAF50" : "#ef4444", // Using standard green color
                "color": "#ffffff",
                "font-weight": "500",
                "border-radius": "8px",
                "box-shadow": "0 4px 6px rgba(0, 0, 0, 0.1)"
            },
            stopOnFocus: true,
        }).showToast();
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);

        // Add hidden input for to_name (your name)
        const hiddenInput = document.createElement('input');
        hiddenInput.type = 'hidden';
        hiddenInput.name = 'to_name';
        hiddenInput.value = 'Mr. Haitham';
        e.target.appendChild(hiddenInput);

        emailjs
            .sendForm(
                import.meta.env.VITE_SERVICE_ID,
                import.meta.env.VITE_TEMPLATE_ID,
                e.target,
                import.meta.env.VITE_PUBLIC_KEY
            )
            .then((result) => {
                showToast("Message sent successfully! I'll get back to you soon.");
                setFormData({ name: "", email: "", message: "" });
            })
            .catch((error) => {
                console.error("EmailJS Error:", error);
                showToast("Oops! Something went wrong. Please try again.", false);
            })
            .finally(() => {
                setIsLoading(false);
                e.target.removeChild(hiddenInput);
            });
    };

    return (
        <section id="contact" className="min-h-screen flex items-center justify-center py-20 relative overflow-hidden">
            {/* Stars Background */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                {stars}
            </div>

            <RevealOnScroll>
                <div className="container px-4 w-full min-w-[300px] md:w-[500px] sm:w-2/3 p-6">
                    <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                        Get In Touch
                    </h2>

                    <div className="max-w-md mx-auto p-6 rounded-xl bg-gray-900/50 border border-white/10 backdrop-blur-sm">
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div className="relative">
                                <input
                                    type="text"
                                    id="name"
                                    name="from_name"
                                    required
                                    value={formData.name}
                                    className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                                    placeholder="Your Name"
                                    onChange={(e) =>
                                        setFormData({ ...formData, name: e.target.value })
                                    }
                                />
                            </div>

                            <div className="relative">
                                <input
                                    type="email"
                                    id="email"
                                    name="from_email"
                                    required
                                    value={formData.email}
                                    className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                                    placeholder="your@email.com"
                                    onChange={(e) =>
                                        setFormData({ ...formData, email: e.target.value })
                                    }
                                />
                            </div>

                            <div className="relative">
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows={5}
                                    value={formData.message}
                                    className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                                    placeholder="Your Message..."
                                    onChange={(e) =>
                                        setFormData({ ...formData, message: e.target.value })
                                    }
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isLoading}
                                className={`w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] ${isLoading ? 'opacity-80 cursor-not-allowed' : ''
                                    }`}
                            >
                                {isLoading ? (
                                    <span className="flex items-center justify-center">
                                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Sending...
                                    </span>
                                ) : (
                                    'Send Message'
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
}

export default Contact;