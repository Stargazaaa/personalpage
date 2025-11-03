import React from 'react'
const projects = [
  {
    title: 'Data-driven Policy Analysis (MITx)',
    desc: 'Applied ML models for policy evaluation and causal inference techniques learned through MITx programs.'
  },
  {
    title: 'MassRobotics — Industrial Robotics Study',
    desc: 'Worked on robot arm applications and cycle time optimization with a focus on automation partnerships.'
  },
  {
    title: 'BU SAIL Internship Projects',
    desc: 'Built user-focused software solutions in team environments; contributed to front-end and data features.'
  }
]
export default function Projects(){
  return (
    <section className="page projects">
      <h2>Projects</h2>
      <div className="project-grid">
        {projects.map(p=> (
          <article className="project-card" key={p.title}>
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
            <div className="project-actions">
              <button className="btn">Read more</button>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
