import React from 'react';
import { motion } from 'framer-motion';
import { resume } from '../resume';
import profileImg from '../assets/profile.png';
import { ChevronRight } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-slate-900 text-white p-8 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 0.3, scale: 1.2 }}
                    transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
                    className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px]"
                ></motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 0.3, scale: 1.1 }}
                    transition={{ duration: 5, delay: 1, repeat: Infinity, repeatType: "reverse" }}
                    className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px]"
                ></motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true }}
                className="z-10 md:w-1/2 flex justify-center mb-10 md:mb-0 order-1 md:order-2"
            >
                <div className="relative">
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 blur-md opacity-75"
                    ></motion.div>
                    <div className="relative w-64 h-64 md:w-96 md:h-96 rounded-full p-2 bg-slate-900">
                        <div className="w-full h-full rounded-full overflow-hidden bg-slate-800 border-4 border-slate-800 shadow-2xl">
                            <img src={profileImg} alt={resume.personal.name} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                        </div>
                    </div>
                </div>
            </motion.div>

            <div className="z-10 md:w-1/2 text-center md:text-left order-2 md:order-1 px-4 md:px-0">
                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="inline-block px-4 py-1.5 bg-blue-500/10 text-blue-400 rounded-full text-xs md:text-sm font-bold border border-blue-500/20 mb-6"
                >
                    Specialist in DevOps & Automation
                </motion.span>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tight leading-[1.1]"
                >
                    <span className="block text-white">Achraf</span>
                    <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">Jarboui</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="text-base md:text-xl text-slate-400 mb-10 font-medium leading-relaxed max-w-lg mx-auto md:mx-0"
                >
                    I architect scalable cloud infrastructures and build high-performance full-stack applications with an "automation-first" mindset.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="flex flex-col sm:flex-row gap-5 justify-center md:justify-start"
                >
                    <a href="#contact" className="group flex items-center justify-center px-8 py-4 bg-white text-slate-900 rounded-2xl font-bold text-lg hover:bg-blue-50 transition-all shadow-xl hover:shadow-blue-500/25">
                        Get in touch
                        <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </a>

                </motion.div>

                {/* Hero Stats */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                    className="mt-16 pt-8 border-t border-slate-800 flex gap-12 justify-center md:justify-start"
                >
                    <div>
                        <div className="text-2xl font-bold text-white">3+</div>
                        <div className="text-sm text-slate-500 font-medium uppercase tracking-widest">Experience</div>
                    </div>
                    <div>
                        <div className="text-2xl font-bold text-white">10+</div>
                        <div className="text-sm text-slate-500 font-medium uppercase tracking-widest">Projects</div>
                    </div>
                    <div>
                        <div className="text-2xl font-bold text-white">5+</div>
                        <div className="text-sm text-slate-500 font-medium uppercase tracking-widest">Certifications</div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
