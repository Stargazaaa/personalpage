import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, Award, Code, Palette, ChevronDown, ExternalLink } from 'lucide-react';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(sectionId);
    setIsMenuOpen(false);
  };

  const projects = [
    {
      title: "USACO Platinum Achievement",
      description: "Ranked #1 among all pre-college participants with a perfect score of 1000 in the 2021 USACO December Contest, advancing to the Platinum division.",
      tags: ["Algorithms", "C++", "Problem Solving"],
      icon: "💻",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "2024 USAMO Qualifier",
      description: "Perfect AMC 12 score (150/150) and AIME score of 13/15, qualifying for the USA Mathematical Olympiad.",
      tags: ["Mathematics", "Competition", "Problem Solving"],
      icon: "🏆",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Physics Bowl International Recognition",
      description: "Achieved 8th place internationally with a score of 49/50 in the 2024 Physics Bowl competition.",
      tags: ["Physics", "International Competition"],
      icon: "⚛️",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "MIT MicroMasters Program",
      description: "Completed comprehensive program in Data, Economics, and Design of Policy, covering microeconomics, development policy, and data analysis.",
      tags: ["Data Science", "Economics", "Policy"],
      icon: "📊",
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Chinese Paper Cutting Art",
      description: "Gold Key Scholastic Award for intricate paper capelet combining Chinese and textile design with 30+ days of detailed work featuring traditional symbols.",
      tags: ["Art", "Cultural Heritage", "Design"],
      icon: "🎨",
      color: "from-rose-500 to-pink-600"
    },
    {
      title: "International Performance Artist",
      description: "Featured performer and host at Boston International Asian Music Festival and Belgrade Serbia Festival, with coverage across 30+ media outlets.",
      tags: ["Performance", "Music", "Cultural Exchange"],
      icon: "🎭",
      color: "from-indigo-500 to-purple-600"
    }
  ];

  const skills = [
    { category: "Programming", items: ["C++", "Java", "Python", "C"], color: "bg-blue-500" },
    { category: "Data Science", items: ["Machine Learning", "Statistical Analysis", "Data Visualization"], color: "bg-green-500" },
    { category: "Economics", items: ["Microeconomics", "Game Theory", "Policy Design"], color: "bg-purple-500" },
    { category: "Arts", items: ["Paper Cutting", "Performance", "Design"], color: "bg-pink-500" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md z-50 border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Quinten Jin
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'projects', 'achievements', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize hover:text-cyan-400 transition-colors ${
                    activeSection === item ? 'text-cyan-400' : 'text-gray-300'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-800/95 backdrop-blur-md">
            <div className="px-4 py-3 space-y-3">
              {['home', 'about', 'projects', 'achievements', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left capitalize hover:text-cyan-400 transition-colors py-2"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16">
        <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="mb-6">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 p-1">
              <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center text-6xl">
                🎯
              </div>
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Zikun (Quinten) Jin
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-4">
            Yale Student | Math Olympiad Qualifier | Artist
          </p>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
            Bridging mathematics, computer science, economics, and the arts
          </p>
          <div className="flex justify-center space-x-4 mb-8">
            <a href="https://www.linkedin.com/in/zikun-quinten-jin-285b09273/" target="_blank" rel="noopener noreferrer" 
               className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 px-6 py-3 rounded-full transition-all transform hover:scale-105 flex items-center space-x-2">
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </a>
            <a href="mailto:Quinten.jin@yale.edu"
               className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 px-6 py-3 rounded-full transition-all transform hover:scale-105 flex items-center space-x-2">
              <Mail size={20} />
              <span>Email</span>
            </a>
          </div>
          <button
            onClick={() => scrollToSection('about')}
            className="animate-bounce text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-6xl w-full">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition-all">
              <div className="flex items-center mb-4">
                <Code className="text-cyan-400 mr-3" size={28} />
                <h3 className="text-2xl font-bold">Technical Excellence</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                I'm currently a student at Yale University pursuing my passion for mathematics, computer science, and economics. 
                With a perfect USACO Platinum score and USAMO qualification, I've demonstrated exceptional problem-solving abilities. 
                I've also completed MIT's MicroMasters in Data, Economics, and Design of Policy, combining technical skills with policy understanding.
              </p>
            </div>
            
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-pink-500/20 hover:border-pink-500/40 transition-all">
              <div className="flex items-center mb-4">
                <Palette className="text-pink-400 mr-3" size={28} />
                <h3 className="text-2xl font-bold">Artistic Expression</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Beyond academics, I'm a passionate artist specializing in Chinese paper cutting. My work has earned a Gold Key 
                Scholastic Award and been exhibited internationally. I've performed at festivals in Boston and Belgrade, 
                hosted events, and taught cultural workshops, bridging traditional art with modern audiences.
              </p>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, idx) => (
              <div key={idx} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-purple-500/50 transition-all">
                <div className={`w-12 h-12 ${skill.color} rounded-lg flex items-center justify-center mb-4`}>
                  {idx === 0 && <Code size={24} />}
                  {idx === 1 && <Award size={24} />}
                  {idx === 2 && <ExternalLink size={24} />}
                  {idx === 3 && <Palette size={24} />}
                </div>
                <h4 className="font-bold mb-3 text-lg">{skill.category}</h4>
                <ul className="space-y-2">
                  {skill.items.map((item, i) => (
                    <li key={i} className="text-gray-400 text-sm">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-7xl w-full">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Featured Projects & Achievements
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 hover:border-purple-500/50 transition-all hover:transform hover:scale-105 cursor-pointer group"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${project.color} rounded-xl flex items-center justify-center text-3xl mb-4 group-hover:rotate-6 transition-transform`}>
                  {project.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Timeline */}
      <section id="achievements" className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-4xl w-full">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Notable Achievements
          </h2>
          <div className="space-y-6">
            {[
              { year: "2024", title: "USAMO Qualifier", detail: "Perfect AMC 12 score (150/150)" },
              { year: "2024", title: "Physics Bowl - 8th Place International", detail: "Score: 49/50" },
              { year: "2024", title: "Scholastic Art Awards - Gold Key", detail: "Chinese paper capelet design" },
              { year: "2024", title: "Boston Asian Music Festival", detail: "Host and featured performer" },
              { year: "2023-24", title: "Belgrade Serbia Festival", detail: "Coverage in 30+ media outlets" },
              { year: "2023-24", title: "ACSL Perfect Score", detail: "Bronze medal in finals" },
              { year: "2022-25", title: "MIT MicroMasters", detail: "Data, Economics, and Design of Policy" },
              { year: "2021", title: "USACO Platinum", detail: "Perfect score - Rank 1 among pre-college students" },
              { year: "2021", title: "USAJMO Qualifier", detail: "Junior Mathematical Olympiad qualification" }
            ].map((achievement, idx) => (
              <div key={idx} className="flex items-start space-x-4 bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-cyan-500/50 transition-all">
                <div className="bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg px-4 py-2 font-bold min-w-[80px] text-center">
                  {achievement.year}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">{achievement.title}</h3>
                  <p className="text-gray-400">{achievement.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-2xl w-full text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            I'm always interested in discussing mathematics, technology, policy, and the arts.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <a
              href="mailto:Quinten.jin@yale.edu"
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 hover:border-purple-500/50 transition-all hover:transform hover:scale-105 flex flex-col items-center space-y-4"
            >
              <Mail className="text-purple-400" size={48} />
              <h3 className="text-xl font-bold">Email</h3>
              <p className="text-gray-400 text-sm">Quinten.jin@yale.edu</p>
            </a>
            <a
              href="https://www.linkedin.com/in/zikun-quinten-jin-285b09273/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 hover:border-cyan-500/50 transition-all hover:transform hover:scale-105 flex flex-col items-center space-y-4"
            >
              <Linkedin className="text-cyan-400" size={48} />
              <h3 className="text-xl font-bold">LinkedIn</h3>
              <p className="text-gray-400 text-sm">Connect with me</p>
            </a>
          </div>
          <div className="mt-12 text-gray-400">
            <p>📍 New Haven, CT (Yale University)</p>
            <p className="mt-2">📱 (617) 959-9662</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900/80 backdrop-blur-md border-t border-purple-500/20 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center text-gray-400">
          <p>&copy; 2025 Quinten Jin. Built with React.</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;