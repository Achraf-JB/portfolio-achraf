import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { resume } from '../resume';
import { MessageSquare, X, Send, Bot, User, Sparkles } from 'lucide-react';

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { text: "Hi! I'm Achraf's AI assistant. I can tell you about his cloud expertise, full-stack skills, or how to hire him. What would you like to know?", isBot: true }
    ]);
    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        if (isOpen) scrollToBottom();
    }, [messages, isOpen, isTyping]);

    const handleSend = (e) => {
        e.preventDefault();
        if (!input.trim() || isTyping) return;

        const userMsg = input.trim();
        setMessages(prev => [...prev, { text: userMsg, isBot: false }]);
        setInput('');
        setIsTyping(true);

        // Simulate thinking delay
        setTimeout(() => {
            const botResponse = getBotResponse(userMsg);
            setMessages(prev => [...prev, { text: botResponse, isBot: true }]);
            setIsTyping(false);
        }, 1200);
    };

    const getBotResponse = (msg) => {
        const lowerMsg = msg.toLowerCase();

        // Helper to check if message contains any of the keywords
        const contains = (keywords) => keywords.some(kw => lowerMsg.includes(kw));

        // 1. Identity & Greeting
        if (contains(['who are you', 'what is your name', 'who created you'])) {
            return `I'm Achraf's AI assistant! I'm here to help you navigate his portfolio and answer any questions about his background in DevOps and Software Engineering.`;
        }
        if (contains(['hello', 'hi', 'hey', 'greetings'])) {
            return "Hey there! I'm ready to tell you anything you want to know about Achraf's work. What's on your mind?";
        }

        // 2. DevOps & Cloud (The core focus)
        if (contains(['devops', 'cloud', 'infrastructure', 'ansible', 'terraform', 'kubernetes', 'docker', 'k8s'])) {
            return `Achraf is a DevOps specialist. He's expert in ${resume.skills.containers.join(', ')} and automation with ${resume.skills.automation[0]}. He also holds an Azure AI Fundamentals certification!`;
        }

        // 3. Skills & Stack
        if (contains(['skill', 'stack', 'tech', 'tool', 'language', 'program', 'java', 'python', 'javascript'])) {
            return `Achraf's arsenal includes ${resume.skills.languages.join(', ')}. For web development, he uses ${resume.skills.web.slice(0, 3).join(', ')}. He's truly a bridge between code and infrastructure.`;
        }

        // 4. Experience & Work
        if (contains(['experience', 'work', 'job', 'company', 'history', 'career'])) {
            const currentJob = resume.experience[0];
            return `Achraf is currently working as a ${currentJob.role} at ${currentJob.company}. He has a proven track record at companies like Creative Comet and Primatec Engineering.`;
        }

        // 5. Projects
        if (contains(['project', 'build', 'made', 'created', 'portfolio', 'github'])) {
            const p = resume.projects[0];
            return `He has built some impressive things, like a ${p.name}. You can see his full source code on GitHub (link in the Contact section)!`;
        }

        // 6. Contact & Socials
        if (contains(['contact', 'email', 'phone', 'hire', 'call', 'message', 'reach', 'linkedin', 'medium'])) {
            return `You can reach him at ${resume.personal.email} or ${resume.personal.phone}. He's also active on LinkedIn and writes articles on Medium!`;
        }

        // 7. Goals & Interests (The new bio info)
        if (contains(['goal', 'interest', 'focus', 'mission', 'future', 'cost', 'time'])) {
            return `His mission is simple: automate everything to minimize costs and reduce time-to-market. He's currently focused on the intersection of DevSecOps, Cloud, and MLOps.`;
        }

        // 8. Education
        if (contains(['education', 'university', 'study', 'degree', 'ensi', 'graduate'])) {
            const edu = resume.education[0];
            return `Achraf graduated from ${edu.school} with a degree in ${edu.degree} (${edu.period}).`;
        }

        // 9. Monitoring
        if (contains(['monitoring', 'grafana', 'prometheus', 'observability', 'metrics', 'logging'])) {
            return `He's proficient in setting up observability stacks using ${resume.skills.monitoring.join(' and ')}. He specializes in creating dashboards that give real-time visibility into infrastructure health.`;
        }

        // Default
        return "That's interesting! I'm mostly trained to talk about Achraf's DevOps skills, his projects (like CI/CD pipelines), or how you can get in touch with him. Anything specific you'd like to know?";
    };

    return (
        <div className="fixed bottom-8 right-8 z-[100]">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95, transformOrigin: 'bottom right' }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        className="mb-6 w-[350px] md:w-[400px] h-[550px] bg-slate-900 border border-slate-800 rounded-[32px] shadow-2xl overflow-hidden flex flex-col"
                    >
                        {/* Header */}
                        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-6 flex justify-between items-center">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-md">
                                    <Sparkles className="text-white w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className="text-white font-bold text-sm">Achraf's Assistant</h3>
                                    <div className="flex items-center gap-1.5">
                                        <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
                                        <span className="text-[10px] text-blue-100 font-bold uppercase tracking-wider">Online</span>
                                    </div>
                                </div>
                            </div>
                            <button onClick={() => setIsOpen(false)} className="text-white/50 hover:text-white transition-colors">
                                <X size={24} />
                            </button>
                        </div>

                        {/* Messages */}
                        <div className="flex-1 p-6 overflow-y-auto bg-slate-950 space-y-6 scrollbar-hide">
                            {messages.map((m, idx) => (
                                <motion.div
                                    initial={{ opacity: 0, x: m.isBot ? -10 : 10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    key={idx}
                                    className={`flex ${m.isBot ? 'justify-start' : 'justify-end'} items-end gap-3`}
                                >
                                    {m.isBot && (
                                        <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center flex-shrink-0">
                                            <Bot size={16} className="text-blue-400" />
                                        </div>
                                    )}
                                    <div className={`max-w-[80%] p-4 rounded-3xl text-[14px] leading-relaxed ${m.isBot ? 'bg-slate-900 text-slate-200 rounded-bl-none border border-slate-800' : 'bg-blue-600 text-white rounded-br-none shadow-lg shadow-blue-600/20'}`}>
                                        {m.text}
                                    </div>
                                    {!m.isBot && (
                                        <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0">
                                            <User size={16} className="text-white" />
                                        </div>
                                    )}
                                </motion.div>
                            ))}
                            {isTyping && (
                                <div className="flex justify-start items-end gap-3">
                                    <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center">
                                        <Bot size={16} className="text-blue-400" />
                                    </div>
                                    <div className="bg-slate-900 p-4 rounded-3xl rounded-bl-none border border-slate-800">
                                        <div className="flex gap-1">
                                            <motion.div animate={{ opacity: [0.2, 1, 0.2] }} transition={{ repeat: Infinity, duration: 1.5 }} className="w-1.5 h-1.5 bg-slate-500 rounded-full"></motion.div>
                                            <motion.div animate={{ opacity: [0.2, 1, 0.2] }} transition={{ repeat: Infinity, duration: 1.5, delay: 0.2 }} className="w-1.5 h-1.5 bg-slate-500 rounded-full"></motion.div>
                                            <motion.div animate={{ opacity: [0.2, 1, 0.2] }} transition={{ repeat: Infinity, duration: 1.5, delay: 0.4 }} className="w-1.5 h-1.5 bg-slate-500 rounded-full"></motion.div>
                                        </div>
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input */}
                        <form onSubmit={handleSend} className="p-6 bg-slate-900 border-t border-slate-800 flex gap-3">
                            <input
                                type="text"
                                className="flex-1 bg-slate-950 border border-slate-800 rounded-2xl px-5 py-3 text-white text-sm focus:outline-none focus:border-blue-500 transition-all font-medium"
                                placeholder="Type a message..."
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                            />
                            <button
                                type="submit"
                                disabled={!input.trim() || isTyping}
                                className="bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white rounded-2xl p-3 w-12 h-12 flex items-center justify-center transition-all shadow-lg shadow-blue-600/20"
                            >
                                <Send size={20} />
                            </button>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Toggle Button */}
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
                className={`w-20 h-20 rounded-[30px] shadow-2xl flex items-center justify-center text-white transition-all duration-500 transform ${isOpen ? 'bg-slate-800 rotate-90' : 'bg-gradient-to-tr from-blue-600 to-indigo-600'}`}
            >
                {isOpen ? <X size={32} /> : <MessageSquare size={32} />}
                {!isOpen && (
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="absolute -top-1 -right-1 w-6 h-6 bg-red-500 rounded-full border-4 border-slate-900 flex items-center justify-center"
                    >
                        <div className="w-1.5 h-1.5 bg-white rounded-full animate-ping"></div>
                    </motion.div>
                )}
            </motion.button>
        </div>
    );
};

export default Chatbot;
