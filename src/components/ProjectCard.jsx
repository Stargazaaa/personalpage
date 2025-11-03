import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';

export default function ProjectCard({ title, description, tags, color, link }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/30 transition-all duration-300 transform hover:scale-105 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => link && window.open(link, '_blank')}
    >
      <div className={`h-2 rounded-full bg-gradient-to-r ${color} mb-4 transition-all duration-300 ${isHovered ? 'h-3' : ''}`} />
      <h4 className="text-xl font-bold mb-3 flex items-center gap-2">
        {title}
        {link && <ExternalLink size={16} className="text-cyan-400" />}
      </h4>
      <p className="text-gray-300 mb-4 text-sm leading-relaxed">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, idx) => (
          <span key={idx} className="px-3 py-1 bg-white/10 rounded-full text-xs text-cyan-400">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}