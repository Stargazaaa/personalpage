import React from 'react';

export default function ContactCard({ icon, title, content, link }) {
  return (
    <a
      href={link}
      target={link.startsWith('http') ? '_blank' : '_self'}
      rel="noopener noreferrer"
      className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105 block"
    >
      <div className="text-cyan-400 mb-3 flex justify-center">{icon}</div>
      <h4 className="font-bold mb-2">{title}</h4>
      <p className="text-gray-400 text-sm">{content}</p>
    </a>
  );
}
