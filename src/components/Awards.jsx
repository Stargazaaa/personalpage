import React from 'react';
import AwardCard from './AwardCard';

export default function Awards() {
  const awards = [
    {
      year: "2024",
      title: "USAMO Qualifier",
      description: "AMC 12 Perfect Score (150/150), AIME I Score 13/15",
      icon: "🏆"
    },
    {
      year: "2024",
      title: "Physics Bowl International 8th Place",
      description: "Score: 49/50",
      icon: "⚛️"
    },
    {
      year: "2024",
      title: "Scholastic Art Awards Gold Key",
      description: "Intricate paper capelet design (30+ days of work)",
      icon: "🎨"
    },
    {
      year: "2024",
      title: "President's Volunteer Service Award - Gold",
      description: "Recognition for community service commitment",
      icon: "🌟"
    },
    {
      year: "2023-24",
      title: "ACSL Perfect Score & Bronze Final",
      description: "American Computer Science League Competition",
      icon: "💻"
    },
    {
      year: "2021",
      title: "USACO Platinum - Rank 1",
      description: "Perfect score among all pre-college participants",
      icon: "🥇"
    }
  ];

  return (
    <section id="awards" className="min-h-screen flex items-center px-6 py-20">
      <div className="max-w-6xl mx-auto w-full">
        <h3 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
          Awards & Recognition
        </h3>

        <div className="grid md:grid-cols-2 gap-6">
          {awards.map((award, index) => (
            <AwardCard key={index} {...award} />
          ))}
        </div>
      </div>
    </section>
  );
}
