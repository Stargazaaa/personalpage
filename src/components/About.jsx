import React from 'react';
import { Code, Palette, Briefcase, Award } from 'lucide-react';

export default function About() {
  const aboutCards = [
    {
      icon: <Code className="text-cyan-400 mb-4" size={40} />,
      title: "Technology & Mathematics",
      description: "Currently studying at Yale University with a strong foundation in mathematics and computer science. USAMO Qualifier (2024) with perfect AMC 12 score and USACO Platinum achievement (Rank 1 among pre-college participants in 2021). Completed MIT MicroMasters in Data, Economics, and Design of Policy.",
      borderColor: "hover:border-cyan-400/50"
    },
    {
      icon: <Palette className="text-purple-400 mb-4" size={40} />,
      title: "Art & Culture",
      description: "Award-winning Chinese paper-cutting artist with exhibitions across multiple venues. 2024 Scholastic Art Awards Gold Key recipient for intricate paper capelet design. Featured performer at international music festivals, combining artistic expression with cultural heritage.",
      borderColor: "hover:border-purple-400/50"
    },
    {
      icon: <Briefcase className="text-pink-400 mb-4" size={40} />,
      title: "Professional Experience",
      description: "Interned at PANORAMA HOLDINGS LLC conducting economic research and developing business proposals. Studied industrial robotics at MassRobotics with Mitsubishi Electric. Participated in BU SAIL Program developing software solutions with focus on user experience.",
      borderColor: "hover:border-pink-400/50"
    },
    {
      icon: <Award className="text-cyan-400 mb-4" size={40} />,
      title: "Leadership & Service",
      description: "Former Science Team Captain and Vice President of Fessenden Chapter in Student Corps. Multiple-time recipient of The President's Volunteer Service Award (Gold and Bronze). Passionate about mentoring and community service, bridging technical excellence with social impact.",
      borderColor: "hover:border-cyan-400/50"
    }
  ];

  return (
    <section id="about" className="min-h-screen flex items-center px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
          About Me
        </h3>
        
        <div className="grid md:grid-cols-2 gap-8">
          {aboutCards.map((card, index) => (
            <div 
              key={index}
              className={`bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 ${card.borderColor} transition-all duration-300`}
            >
              {card.icon}
              <h4 className="text-2xl font-bold mb-4">{card.title}</h4>
              <p className="text-gray-300 leading-relaxed">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}