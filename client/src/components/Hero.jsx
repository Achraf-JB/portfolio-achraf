import React from 'react';
import { motion } from 'framer-motion';
import { resume } from '../resume';
import profileImg from '../assets/profile.png';
import { ChevronRight } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-slate-900 text-white p-6 md:p-12 relative overflow-hidden pt-24 md:pt-32">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                <div className="absolute top-[-5%] left-[-5%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-blue-600/10 rounded-full blur-[80px] md:blur-[150px]"></div>
                <div className="absolute bottom-[-5%] right-[-5%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-purple-600/10 rounded-full blur-[80px] md:blur-[150px]"></div>
            </div>

            {/* Photo Container */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="z-10 md:w-5/12 flex justify-center mb-8 md:mb-0 order-1 md:order-2"
            >
                <div className="relative group">
                    <div className="absolute inset-[-8px] rounded-full bg-gradient-to-tr from-blue-500 to-purple-600 blur-md opacity-30 group-hover:opacity-50 transition-opacity"></div>
                    <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full p-1 bg-slate-900">
                        <div className="w-full h-full rounded-full overflow-hidden bg-slate-800 border-2 border-slate-700 shadow-2xl">
                            <img
                                src={profileImg}
                                alt={resume.personal.name}
                                className="w-full h-full object-cover scale-105 grayscale hover:grayscale-0 transition-all duration-700"
                            />
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Text Content */}
            <div className="z-10 md:w-7/12 text-center md:text-left order-2 md:order-1 px-4 md:px-0 lg:pl-12">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    <span className="inline-block px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-widest border border-blue-500/20 mb-4">
                        DevOps & Cloud Specialist
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-4 tracking-tight leading-tight text-white"
                >
                    Achraf <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500">Jarboui.</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-sm md:text-base lg:text-lg text-slate-400 mb-8 font-medium leading-relaxed max-w-lg mx-auto md:mx-0"
                >
                    I design and automate scalable cloud infrastructures with an <span className="text-white">"automation-first"</span> mindset, focusing on security and operational efficiency.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
                >
                    <a href="#contact" className="px-8 py-3.5 bg-blue-600 text-white rounded-xl font-bold text-sm hover:bg-blue-500 transition-all shadow-lg shadow-blue-500/20">
                        Work with me
                    </a>
                </motion.div>

                {/* Hero Stats */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="mt-12 pt-6 border-t border-white/5 flex gap-8 md:gap-10 justify-center md:justify-start"
                >
                    {[
                        { val: '3+', label: 'Years' },
                        { val: '10+', label: 'Projects' },
                        { val: '5+', label: 'certs' }
                    ].map((stat, i) => (
                        <div key={i}>
                            <div className="text-lg md:text-xl font-bold text-white">{stat.val}</div>
                            <div className="text-[9px] text-slate-500 font-bold uppercase tracking-widest">{stat.label}</div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
