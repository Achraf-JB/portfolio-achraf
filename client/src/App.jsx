import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Chatbot from './components/Chatbot';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X as Close } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div className="bg-slate-900 min-h-screen text-gray-200 font-sans selection:bg-blue-500 selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-[100] bg-slate-900/80 backdrop-blur-xl border-b border-white/5 px-6 py-4 flex justify-between items-center h-16 md:h-20">
        <div className="text-xl font-black text-white tracking-tighter flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center text-xs shadow-lg shadow-blue-500/20">JA</div>
          <span className="hidden xs:inline text-lg">Achraf Jarboui</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-bold text-slate-400">
          <li><a href="#home" className="hover:text-blue-400 transition-colors uppercase tracking-widest text-[10px]">Home</a></li>
          <li><a href="#about" className="hover:text-blue-400 transition-colors uppercase tracking-widest text-[10px]">About</a></li>
          <li><a href="#projects" className="hover:text-blue-400 transition-colors uppercase tracking-widest text-[10px]">Projects</a></li>
          <li>
            <a href="#contact" className="px-6 py-2.5 bg-blue-600 text-white rounded-xl hover:bg-blue-500 transition-all shadow-lg shadow-blue-600/20 text-xs uppercase tracking-widest">
              Let's Talk
            </a>
          </li>
        </ul>

        {/* Mobile Hamburger toggle */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden relative z-[110] p-2 text-white hover:bg-white/10 rounded-xl transition-colors active:scale-90"
        >
          {isMenuOpen ? <Close size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="fixed inset-0 bg-slate-950/95 backdrop-blur-2xl z-[105] flex flex-col justify-center items-center p-8 md:hidden text-center"
            >
              <div className="flex flex-col gap-4 w-full max-w-xs">
                {[
                  { name: 'Home', href: '#home' },
                  { name: 'About', href: '#about' },
                  { name: 'Projects', href: '#projects' },
                  { name: 'Contact', href: '#contact' },
                ].map((item, i) => (
                  <motion.a
                    key={item.name}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                    onClick={() => setIsMenuOpen(false)}
                    href={item.href}
                    className="text-4xl font-black text-white hover:text-blue-500 transition-colors tracking-tighter py-2 border-b border-white/5 active:bg-white/5 rounded-xl uppercase"
                  >
                    {item.name}
                  </motion.a>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="mt-16 text-slate-500"
              >
                <div className="text-xs font-black uppercase tracking-[0.3em] mb-4">Availability</div>
                <div className="flex items-center gap-2 justify-center text-green-400 font-bold">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  Open for new projects
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>

      <footer className="py-8 bg-black text-center text-gray-600 text-sm">
        <p>&copy; {new Date().getFullYear()} Jarboui Achraf. All rights reserved.</p>
        <p>Built with React & Node.js</p>
      </footer>

      <Chatbot />
    </div>
  );
}

export default App;
