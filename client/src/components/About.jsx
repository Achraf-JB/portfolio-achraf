import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { resume } from '../resume';
import { GraduationCap, Code2, Terminal, Target, Award, Briefcase, User, Database, Layers, Monitor, HardDrive } from 'lucide-react';

const About = () => {
    const [activeTab, setActiveTab] = useState('skills');

    const skillCategories = [
        { id: 'automation', icon: <Terminal className="text-blue-400" />, label: 'Automation', skills: resume.skills.automation },
        { id: 'cloud', icon: <Target className="text-purple-400" />, label: 'Cloud & Infra', skills: resume.skills.cloud },
        { id: 'cicd', icon: <Award className="text-pink-400" />, label: 'CI/CD Pipelines', skills: resume.skills.cicd },
        { id: 'containers', icon: <Layers className="text-orange-400" />, label: 'Containers & Orchestration', skills: resume.skills.containers },
        { id: 'monitoring', icon: <Monitor className="text-yellow-400" />, label: 'Monitoring', skills: resume.skills.monitoring },
        { id: 'languages', icon: <Code2 className="text-cyan-400" />, label: 'Languages', skills: resume.skills.languages },
        { id: 'web', icon: <HardDrive className="text-green-400" />, label: 'Web Tech', skills: resume.skills.web },
        { id: 'database', icon: <Database className="text-indigo-400" />, label: 'Databases', skills: resume.skills.database },
        { id: 'os', icon: <Terminal className="text-gray-400" />, label: 'Operating Systems', skills: resume.skills.os },
    ];

    const tabs = [
        { id: 'skills', label: 'My Skills', icon: <Target size={20} /> },
        { id: 'experience', label: 'Work History', icon: <Briefcase size={20} /> },
        { id: 'education', label: 'Education', icon: <GraduationCap size={20} /> },
        { id: 'bio', label: 'About Me', icon: <User size={20} /> },
    ];

    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, staggerChildren: 0.1 }
        },
        exit: { opacity: 0, y: -20, transition: { duration: 0.3 } }
    };

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: { opacity: 1, scale: 1 }
    };

    return (
        <section id="about" className="py-24 bg-slate-950 text-white px-6 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] -z-10 animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] -z-10 animate-pulse delay-700"></div>

            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-blue-500 font-mono text-sm tracking-[0.2em] uppercase mb-4 block"
                    >
                        Capabilities & Background
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-black mb-6"
                    >
                        Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Mastery</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed"
                    >
                        A blend of software engineering principles and DevOps culture, focused on delivering robust, automated, and scalable solutions.
                    </motion.p>
                </div>

                {/* Tab Navigation */}
                <div className="flex flex-wrap justify-center gap-2 mb-12 p-1 bg-slate-900/50 backdrop-blur-md rounded-2xl border border-slate-800 w-fit mx-auto overflow-hidden">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all duration-300 relative ${activeTab === tab.id
                                ? 'text-white'
                                : 'text-slate-500 hover:text-slate-300'
                                }`}
                        >
                            {tab.icon}
                            <span>{tab.label}</span>
                            {activeTab === tab.id && (
                                <motion.div
                                    layoutId="activeTab"
                                    className="absolute inset-0 bg-blue-600 rounded-xl -z-10"
                                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                                />
                            )}
                        </button>
                    ))}
                </div>

                {/* Content Area */}
                <div className="min-h-[500px]">
                    <AnimatePresence mode="wait">
                        {activeTab === 'skills' && (
                            <motion.div
                                key="skills"
                                variants={containerVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
                            >
                                {skillCategories.map((cat) => (
                                    <motion.div
                                        key={cat.id}
                                        variants={itemVariants}
                                        className="p-6 rounded-3xl bg-slate-900/40 border border-slate-800 hover:border-blue-500/50 transition-all group"
                                    >
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="p-2.5 bg-slate-800 rounded-xl group-hover:bg-blue-500/10 transition-colors">
                                                {cat.icon}
                                            </div>
                                            <h4 className="font-bold text-white tracking-wide">{cat.label}</h4>
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            {cat.skills.map((skill, sIdx) => (
                                                <span
                                                    key={sIdx}
                                                    className="px-3 py-1.5 bg-slate-800/50 rounded-lg text-xs font-semibold text-slate-400 border border-slate-700/50 group-hover:border-blue-500/20 group-hover:text-blue-300 transition-all"
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        )}

                        {activeTab === 'experience' && (
                            <motion.div
                                key="experience"
                                variants={containerVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                className="max-w-4xl mx-auto space-y-6"
                            >
                                {resume.experience.map((exp, idx) => (
                                    <motion.div
                                        key={idx}
                                        variants={itemVariants}
                                        className="p-8 rounded-3xl bg-slate-900/40 border border-slate-800 hover:border-purple-500/30 transition-all flex flex-col md:flex-row gap-6 relative group"
                                    >
                                        <div className="md:w-1/4">
                                            <div className="text-purple-400 font-mono text-sm mb-1">{exp.period}</div>
                                            <div className="text-white font-bold text-lg">{exp.company}</div>
                                        </div>
                                        <div className="md:w-3/4">
                                            <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                                {exp.role}
                                                <span className="h-px flex-1 bg-slate-800 group-hover:bg-purple-500/30 transition-colors"></span>
                                            </h4>
                                            <ul className="space-y-3 mb-6">
                                                {exp.description.map((desc, dIdx) => (
                                                    <li key={dIdx} className="text-slate-400 text-sm leading-relaxed flex gap-3">
                                                        <span className="text-purple-500 mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-500 flex-shrink-0" />
                                                        {desc}
                                                    </li>
                                                ))}
                                            </ul>
                                            <div className="flex flex-wrap gap-2">
                                                {exp.keywords && exp.keywords.map((kw, kIdx) => (
                                                    <span key={kIdx} className="text-[10px] uppercase font-bold text-slate-500 bg-slate-800/50 px-2.5 py-1 rounded-md border border-slate-700 group-hover:border-purple-500/20 transition-all">
                                                        {kw}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        )}

                        {activeTab === 'education' && (
                            <motion.div
                                key="education"
                                variants={containerVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                className="max-w-4xl mx-auto space-y-6"
                            >
                                {resume.education.map((edu, idx) => (
                                    <motion.div
                                        key={idx}
                                        variants={itemVariants}
                                        className="p-8 rounded-3xl bg-slate-900/40 border border-slate-800 flex flex-col md:flex-row gap-6 items-center text-center md:text-left group hover:border-pink-500/30 transition-all"
                                    >
                                        <div className="p-4 bg-slate-800 rounded-2xl text-pink-500 group-hover:bg-pink-500/10 transition-colors">
                                            <GraduationCap size={32} />
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="text-xl font-bold text-white mb-1">{edu.school}</h4>
                                            <p className="text-pink-400 font-mono text-sm mb-2">{edu.period}</p>
                                            <p className="text-slate-400">{edu.degree}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        )}

                        {activeTab === 'bio' && (
                            <motion.div
                                key="bio"
                                variants={containerVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                className="max-w-3xl mx-auto"
                            >
                                <div className="p-10 rounded-[3rem] bg-slate-900/40 border border-slate-800 relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 p-8 text-blue-500/10">
                                        <User size={120} />
                                    </div>
                                    <h3 className="text-3xl font-bold mb-8 text-white relative flex items-center gap-4">
                                        My Story
                                        <div className="h-px flex-1 bg-slate-800 group-hover:bg-blue-500/30 transition-colors"></div>
                                    </h3>
                                    <div className="space-y-6 relative">
                                        <p className="text-slate-300 text-lg leading-relaxed first-letter:text-5xl first-letter:font-bold first-letter:text-blue-500 first-letter:mr-3 first-letter:float-left">
                                            {resume.personal.summary}
                                        </p>
                                        <p className="text-slate-400 leading-relaxed">
                                            I am dedicated to automating complex workflows to achieve maximum efficiency with minimal cost.
                                            By integrating DevSecOps and MLOps principles, I focus on building self-healing, secure, and intelligent
                                            cloud infrastructures that minimize manual effort and significantly reduce time-to-market.
                                        </p>
                                        <div className="pt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
                                            <div className="p-4 rounded-2xl bg-slate-800/30 border border-slate-700/50">
                                                <div className="text-blue-400 font-bold text-xl mb-1">ENSI</div>
                                                <div className="text-[10px] uppercase text-slate-500 font-bold">University</div>
                                            </div>
                                            <div className="p-4 rounded-2xl bg-slate-800/30 border border-slate-700/50">
                                                <div className="text-purple-400 font-bold text-xl mb-1">Azure</div>
                                                <div className="text-[10px] uppercase text-slate-500 font-bold">Certified</div>
                                            </div>
                                            <div className="p-4 rounded-2xl bg-slate-800/30 border border-slate-700/50">
                                                <div className="text-pink-400 font-bold text-xl mb-1">Linux</div>
                                                <div className="text-[10px] uppercase text-slate-500 font-bold">Enthusiast</div>
                                            </div>
                                            <div className="p-4 rounded-2xl bg-slate-800/30 border border-slate-700/50">
                                                <div className="text-green-400 font-bold text-xl mb-1">Open Source</div>
                                                <div className="text-[10px] uppercase text-slate-500 font-bold">Contributor</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default About;

