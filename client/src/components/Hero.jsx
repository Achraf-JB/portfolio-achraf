import React from 'react';
import { motion } from 'framer-motion';
import { resume } from '../resume';
import profileImg from '../assets/profile.png';
import { ChevronRight } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-slate-900 text-white p-6 md:p-12 relative overflow-hidden pt-24 md:pt-0">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 0.2, scale: 1.2 }}
                    transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
                    className="absolute top-[-5%] left-[-5%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-blue-600/20 rounded-full blur-[80px] md:blur-[120px]"
                ></motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 0.2, scale: 1.1 }}
                    transition={{ duration: 5, delay: 1, repeat: Infinity, repeatType: "reverse" }}
                    className="absolute bottom-[-5%] right-[-5%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-purple-600/20 rounded-full blur-[80px] md:blur-[120px]"
                ></motion.div>
            </div>

            {/* Photo Container */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="z-10 md:w-1/2 flex justify-center mb-12 md:mb-0 order-1 md:order-2"
            >
                <div className="relative group">
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-[-10px] rounded-full bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 blur-lg opacity-40 group-hover:opacity-70 transition-opacity"
                    ></motion.div>
                    <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px] rounded-full p-1.5 bg-slate-900">
                        <div className="w-full h-full rounded-full overflow-hidden bg-slate-800 border-4 border-slate-800/50 shadow-2xl">
                            <img
                                src={profileImg}
                                alt={resume.personal.name}
                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110"
                            />
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Text Content */}
            <div className="z-10 md:w-1/2 text-center md:text-left order-2 md:order-1 px-2 md:px-0">
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    <span className="inline-block px-4 py-1.5 bg-blue-500/10 text-blue-400 rounded-full text-[10px] md:text-xs font-black uppercase tracking-widest border border-blue-500/20 mb-6">
                        Cloud & DevOps Engineer
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-[2.25rem] sm:text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tighter leading-[1.1] text-white"
                >
                    Achraf <span className="bg-clip-text text-transparent bg-gradient-to-br from-blue-400 via-indigo-500 to-purple-600">Jarboui.</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="text-base md:text-lg lg:text-xl text-slate-400 mb-10 font-medium leading-relaxed max-w-lg mx-auto md:mx-0"
                >
                    I design and automate complex cloud infrastructures with an <span className="text-white italic">"automation-first"</span> mindset, focusing on scalability and operational efficiency.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center"
                >
                    <a href="#contact" className="w-full sm:w-auto flex items-center justify-center px-10 py-4 bg-blue-600 text-white rounded-2xl font-black text-sm hover:bg-blue-500 transition-all shadow-xl shadow-blue-500/20 active:scale-95">
                        Start a Project
                        <ChevronRight className="ml-2 w-4 h-4" />
                    </a>
                </motion.div>

                {/* Simplified Mobile Stats */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.9 }}
                    className="mt-12 pt-8 border-t border-white/5 flex gap-8 md:gap-12 justify-center md:justify-start"
                >
                    {[
                        { val: '3+', label: 'Experience' },
                        { val: '10+', label: 'Projects' },
                        { val: '5+', label: 'Certifications' }
                    ].map((stat, i) => (
                        <div key={i}>
                            <div className="text-xl md:text-2xl font-black text-white">{stat.val}</div>
                            <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">{stat.label}</div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
