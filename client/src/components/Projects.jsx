import React from 'react';
import { motion } from 'framer-motion';
import { resume } from '../resume';
import { ExternalLink, Github, Layers, Cpu, Globe } from 'lucide-react';

const Projects = () => {
    return (
        <section id="projects" className="py-32 bg-slate-900 border-y border-slate-800 text-white px-8">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                    <div className="max-w-xl">
                        <motion.h2
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-5xl font-black mb-6"
                        >
                            Impactful <span className="text-purple-500">Solutions</span>
                        </motion.h2>
                        <p className="text-slate-400 text-lg">
                            From optimizing cloud density to building seamless CI/CD pipelines, I bridge the gap between development and operations.
                        </p>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {resume.projects.map((project, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="group flex flex-col bg-slate-950 rounded-[40px] overflow-hidden border border-slate-800/50 hover:border-purple-500/50 transition-all duration-500 shadow-2xl hover:shadow-purple-500/10"
                        >
                            <div className="h-2 w-full bg-gradient-to-r from-blue-500 to-purple-600"></div>
                            <div className="p-10 flex-1 flex flex-col">
                                <div className="flex justify-between items-center mb-8">
                                    <div className="p-4 bg-purple-500/10 rounded-[20px] text-purple-400">
                                        {idx % 3 === 0 ? <Cpu size={28} /> : idx % 3 === 1 ? <Globe size={28} /> : <Layers size={28} />}
                                    </div>
                                    <div className="flex gap-4">
                                        <Github size={22} className="text-slate-600 hover:text-white transition-colors cursor-pointer" />
                                        <ExternalLink size={22} className="text-slate-600 hover:text-white transition-colors cursor-pointer" />
                                    </div>
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors leading-tight">
                                    {project.name}
                                </h3>

                                <div className="flex items-center gap-2 mb-8">
                                    <span className="h-1.5 w-1.5 rounded-full bg-purple-500"></span>
                                    <span className="text-sm font-bold text-slate-500 tracking-widest uppercase">{project.date}</span>
                                </div>

                                <ul className="space-y-4 mb-10 flex-1">
                                    {project.details.map((detail, dIdx) => (
                                        <li key={dIdx} className="text-slate-400 text-[15px] leading-relaxed flex items-start">
                                            <span className="mr-3 opacity-20 text-purple-500">→</span>
                                            {detail}
                                        </li>
                                    ))}
                                </ul>

                                <div className="pt-8 border-t border-slate-900 flex flex-wrap gap-2">
                                    {project.technologies && project.technologies.map((tag, tIdx) => (
                                        <span key={tIdx} className="px-3 py-1 bg-slate-900 text-slate-500 rounded-lg text-xs font-bold uppercase tracking-wider">
                                            # {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}

                    {/* Featured/Experience Overlay */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative rounded-[40px] p-10 bg-gradient-to-br from-indigo-600 to-purple-900 flex flex-col justify-between overflow-hidden group shadow-2xl"
                    >
                        <div className="absolute top-[-20%] right-[-20%] w-64 h-64 bg-white/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000"></div>
                        <div className="z-10">
                            <h3 className="text-3xl font-black text-white mb-6">Expertise In Action</h3>
                            <p className="text-indigo-100 mb-10 leading-relaxed font-medium">
                                Beyond individual projects, I've led transformations at companies like KPIT and Creative Comet.
                            </p>
                        </div>

                        <div className="z-10">
                            <a
                                href={resume.personal.links.github}
                                target="_blank"
                                className="inline-flex items-center px-8 py-4 bg-white text-indigo-900 rounded-2xl font-bold hover:shadow-2xl transition-all"
                            >
                                Explore more GitHub
                                <ChevronRight className="ml-2" />
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

const ChevronRight = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
);

export default Projects;
