import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Chatbot from './components/Chatbot';

function App() {
  return (
    <div className="bg-slate-900 min-h-screen text-gray-200 font-sans selection:bg-blue-500 selection:text-white">
      {/* Navigation (Simple) */}
      <nav className="fixed top-0 w-full z-40 bg-slate-900/80 backdrop-blur-md border-b border-white/10 px-8 py-4 flex justify-between items-center">
        <div className="text-xl font-bold text-white tracking-wider">JA.</div>
        <ul className="hidden md:flex gap-8 text-sm font-medium text-gray-300">
          <li><a href="#home" className="hover:text-blue-400 transition-colors">Home</a></li>
          <li><a href="#about" className="hover:text-blue-400 transition-colors">About</a></li>
          <li><a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a></li>
          <li><a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a></li>
        </ul>
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
