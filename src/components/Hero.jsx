import React from 'react';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';

export default function Hero({ setActiveSection }) {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="text-center max-w-4xl mx-auto">
        <div className="mb-8 animate-fade-in">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-cyan-400 to-purple-600 p-1">
            <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center text-5xl font-bold">
              ZJ
            </div>
          </div>
        </div>
        
        <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          Zikun (Quinten) Jin
        </h2>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-8">
          Yale Student | USAMO Qualifier | Award-Winning Artist | Technology Enthusiast
        </p>
        
        <div className="flex gap-6 justify-center mb-12">
          <a href="https://www.linkedin.com/in/zikun-quinten-jin-285b09273/" target="_blank" rel="noopener noreferrer" 
             className="hover:scale-110 transition-transform">
            <Linkedin className="text-cyan-400" size={32} />
          </a>
          <a href="https://github.com/quintenjin" target="_blank" rel="noopener noreferrer"
             className="hover:scale-110 transition-transform">
            <Github className="text-purple-400" size={32} />
          </a>
          <a href="mailto:Quinten.jin@yale.edu" 
             className="hover:scale-110 transition-transform">
            <Mail className="text-pink-400" size={32} />
          </a>
        </div>

        <button 
          onClick={() => scrollToSection('about')}
          className="animate-bounce"
        >
          <ChevronDown size={40} className="text-cyan-400" />
        </button>
      </div>
    </section>
  );
}