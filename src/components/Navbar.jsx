import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar({ activeSection, setActiveSection }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
      setIsMenuOpen(false);
    }
  };

  const navItems = ['home', 'about', 'projects', 'awards', 'contact'];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
          Quinten Jin
        </h1>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          {navItems.map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className={`capitalize transition-all duration-300 hover:text-cyan-400 ${activeSection === section ? 'text-cyan-400' : 'text-gray-300'}`}
            >
              {section}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-slate-900/95 backdrop-blur-sm">
          <div className="flex flex-col gap-4 px-6 py-4">
            {navItems.map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="capitalize text-left text-gray-300 hover:text-cyan-400 transition-colors"
              >
                {section}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}