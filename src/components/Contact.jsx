import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';
import ContactCard from './ContactCard';

export default function Contact() {
  const contactMethods = [
    {
      icon: <Mail size={32} />,
      title: "Email",
      content: "Quinten.jin@yale.edu",
      link: "mailto:Quinten.jin@yale.edu"
    },
    {
      icon: <Linkedin size={32} />,
      title: "LinkedIn",
      content: "Connect with me",
      link: "https://www.linkedin.com/in/zikun-quinten-jin-285b09273/"
    },
    {
      icon: <Github size={32} />,
      title: "GitHub",
      content: "View my code",
      link: "https://github.com/quintenjin"
    }
  ];

  return (
    <section id="contact" className="min-h-screen flex items-center px-6 py-20">
      <div className="max-w-4xl mx-auto w-full text-center">
        <h3 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent">
          Get In Touch
        </h3>
        
        <p className="text-xl text-gray-300 mb-12">
          I'm always open to discussing new opportunities, collaborations, or just connecting!
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {contactMethods.map((method, index) => (
            <ContactCard key={index} {...method} />
          ))}
        </div>

        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
          <p className="text-gray-300 mb-4">
            <strong>Location:</strong> New Haven, CT (Yale University)
          </p>
          <p className="text-gray-300">
            <strong>Phone:</strong> (617) 959-9662
          </p>
        </div>
      </div>
    </section>
  );
}