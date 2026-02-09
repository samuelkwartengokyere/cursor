import React from 'react'
import './Skills.css'

// Skills pulled from the CV so this section stays in sync
const skills = [
  'JavaScript',
  'React',
  'HTML & CSS',
  'Python',
  'Flutter',
  'AWS',
  'Docker',
  'CI/CD',
  'Infrastructure as Code',
  'Responsive Design',
  'UI/UX Principles',
  'Blockchain Basics',
  'Machine Learning Fundamentals',
  'Git & GitHub',
  'npm',
  'Sanity CMS',
  'Problem Solving',
  'Collaboration',
  'Technical Communication',
  'Coaching & Mentorship',
]

// Skills section showing skills in a responsive card grid
const Skills = () => {
  return (
    <section id="skills" className="section skills">
      <div className="section__header">
        <h2 className="section__title">Skills</h2>
        <p className="section__subtitle">Technologies and tools I use to build modern web experiences.</p>
      </div>

      <div className="skills__grid">
        {skills.map((skill) => (
          <article key={skill} className="skills__card">
            <span className="skills__dot" />
            <h3>{skill}</h3>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Skills

