import React from 'react';
import ProjectCard from './ProjectCard';

export default function Projects() {
  const projects = [
    {
      title: "Chinese Paper Capelet",
      description: "Intricate paper art combining traditional Chinese symbols (Rú yì, peony, phoenix) with textile design. Awarded Gold Key at 2024 Scholastic Art Awards.",
      tags: ['Art', 'Design', 'Cultural Heritage'],
      color: "from-red-400 to-orange-400"
    },
    {
      title: "MIT MicroMasters Program",
      description: "Completed comprehensive program in Data, Economics, and Design of Policy. Applied data science and machine learning to economic analysis.",
      tags: ['Data Science', 'Economics', 'Policy'],
      color: "from-blue-400 to-cyan-400",
      link: "https://mitxonline.mit.edu/certificate/program/7f2c019a-65ab-4baf-abf0-daebe6413af2/"
    },
    {
      title: "USACO Platinum Achievement",
      description: "Achieved Rank 1 among all pre-college participants in USACO December 2021 Contest with perfect score of 1000.",
      tags: ['Algorithms', 'Problem Solving', 'C++'],
      color: "from-purple-400 to-pink-400"
    },
    {
      title: "Industrial Robotics Study",
      description: "Research at MassRobotics focusing on robot arm applications, cycle time optimization, and industrial automation with Mitsubishi Electric.",
      tags: ['Robotics', 'Automation', 'Engineering'],
      color: "from-green-400 to-cyan-400"
    },
    {
      title: "BU SAIL Software Development",
      description: "Developed user-focused software solutions through team-based programming projects with interdisciplinary approach.",
      tags: ['Software', 'UX Design', 'Collaboration'],
      color: "from-cyan-400 to-blue-400"
    },
    {
      title: "International Music Festival",
      description: "Featured performer and host at Boston International Asian Music Festival 2024. Performed in Belgrade, Serbia with coverage across 30+ media outlets.",
      tags: ['Music', 'Performance', 'Cultural Exchange'],
      color: "from-pink-400 to-purple-400"
    }
  ];

  return (
    <section id="projects" className="min-h-screen flex items-center px-6 py-20">
      <div className="max-w-6xl mx-auto w-full">
        <h3 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Featured Projects
        </h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}