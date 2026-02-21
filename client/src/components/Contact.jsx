import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { resume } from '../resume';
import { Mail, Phone, MapPin, Send, CheckCircle2, BookOpen } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');

        try {
            let apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:3000';
            // Remove trailing slash if present
            apiUrl = apiUrl.replace(/\/$/, '');

            const response = await fetch(`${apiUrl}/api/contact`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                const errorData = await response.json().catch(() => ({ message: 'Server error' }));
                throw new Error(errorData.message || 'Transmission failed');
            }

            const data = await response.json();
            if (data.success) {
                setStatus('success');
                setFormData({ name: '', email: '', message: '' });
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error(error);
            setStatus('error');
        }
    };

    return (
        <section id="contact" className="py-32 bg-slate-950 text-white px-8 relative overflow-hidden">
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid lg:grid-cols-2 gap-20">
                    {/* Left: Info */}
                    <div>
                        <motion.h2
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="text-4xl sm:text-5xl md:text-7xl font-black mb-8 md:mb-10 leading-tight"
                        >
                            Ready to <span className="text-blue-500">Collaborate?</span>
                        </motion.h2>
                        <p className="text-slate-400 text-lg md:text-xl mb-12 max-w-md">
                            I'm available for freelance projects and technical leadership roles. Let's build something exceptional together.
                        </p>

                        <div className="space-y-6 md:space-y-8 mb-12">
                            <div className="flex items-center gap-4 md:gap-6 group">
                                <div className="p-3 md:p-4 bg-slate-900 rounded-2xl border border-slate-800 group-hover:bg-blue-600 transition-colors">
                                    <Mail className="text-blue-400 group-hover:text-white" />
                                </div>
                                <div>
                                    <div className="text-[10px] md:text-sm font-bold text-slate-500 uppercase tracking-widest mb-1">Email Me</div>
                                    <div className="text-lg md:text-xl font-bold break-all">{resume.personal.email}</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 md:gap-6 group">
                                <div className="p-3 md:p-4 bg-slate-900 rounded-2xl border border-slate-800 group-hover:bg-blue-600 transition-colors">
                                    <Phone className="text-blue-400 group-hover:text-white" />
                                </div>
                                <div>
                                    <div className="text-[10px] md:text-sm font-bold text-slate-500 uppercase tracking-widest mb-1">Call Me</div>
                                    <div className="text-lg md:text-xl font-bold">{resume.personal.phone}</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 md:gap-6 group">
                                <a
                                    href={resume.personal.links.medium}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 md:p-4 bg-slate-900 rounded-2xl border border-slate-800 group-hover:bg-blue-600 transition-colors"
                                >
                                    <BookOpen className="text-blue-400 group-hover:text-white" />
                                </a>
                                <div>
                                    <div className="text-[10px] md:text-sm font-bold text-slate-500 uppercase tracking-widest mb-1">Read My Articles</div>
                                    <a
                                        href={resume.personal.links.medium}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-lg md:text-xl font-bold hover:text-blue-400 transition-colors"
                                    >
                                        Medium Blog
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="relative"
                    >
                        <div className="absolute inset-0 bg-blue-600 blur-[100px] opacity-10"></div>
                        <form onSubmit={handleSubmit} className="relative bg-slate-900/50 backdrop-blur-xl p-6 sm:p-8 md:p-12 rounded-[30px] md:rounded-[40px] border border-slate-800 shadow-2xl">
                            <div className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">Your Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder="Achraf Jr"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full bg-slate-950/50 border border-slate-800 rounded-2xl p-4 text-white focus:outline-none focus:border-blue-500 transition-all font-medium"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">Email Address</label>
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="hello@example.com"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full bg-slate-950/50 border border-slate-800 rounded-2xl p-4 text-white focus:outline-none focus:border-blue-500 transition-all font-medium"
                                            required
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">Tell me about your project</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Briefly describe what you're looking for..."
                                        rows="5"
                                        className="w-full bg-slate-950/50 border border-slate-800 rounded-2xl p-4 text-white focus:outline-none focus:border-blue-500 transition-all font-medium resize-none"
                                        required
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    disabled={status === 'sending'}
                                    className={`w-full flex items-center justify-center gap-3 font-black text-lg py-5 rounded-2xl transition-all ${status === 'success' ? 'bg-green-600 text-white' : 'bg-blue-600 hover:bg-blue-700 text-white'}`}
                                >
                                    {status === 'sending' ? 'Transmitting...' : status === 'success' ? <><CheckCircle2 /> Sent Successfully</> : <><Send size={20} /> Launch Message</>}
                                </button>
                                {status === 'error' && <p className="text-center text-red-500 text-sm font-bold">Transmission failed. Try again?</p>}
                            </div>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
