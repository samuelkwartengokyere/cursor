import React from 'react'
import './Projects.css'

// Projects based on the portfolio section of the CV
// Each project now uses a direct image URL from Pexels
const projects = [
  {
    title: 'Intelligent Weather Prediction Dashboard (Conceptual)',
    description:
      'A React-based dashboard concept that visualizes weather trends using the OpenWeather API and simple machine learning models to predict patterns over time.',
    imageAlt: 'Preview of an intelligent weather dashboard interface',
    image:
      'https://images.pexels.com/photos/907485/pexels-photo-907485.jpeg?auto=compress&cs=tinysrgb&w=1200',
    github: 'https://github.com/samuelkwartengokyere',
    live: 'https://github.com/samuelkwartengokyere', // Replace with a live demo if deployed
  },
  {
    title: 'Age Calculator',
    description:
      'Responsive web app that calculates exact age in years, months, and days from user input, built to practice precise date handling and UI feedback.',
    imageAlt: 'Preview of an age calculator interface',
    image:
      'https://images.pexels.com/photos/534216/pexels-photo-534216.jpeg?auto=compress&cs=tinysrgb&w=1200',
    github: 'https://github.com/samuelkwartengokyere', // Replace with specific repo if available
    live: 'https://age-calculator-lilac-eta.vercel.app/',
  },
  {
    title: 'New Year Countdown',
    description:
      'Real-time countdown application that displays remaining days, hours, minutes, and seconds to the New Year, highlighting dynamic UI updates.',
    imageAlt: 'Preview of a countdown interface',
    image:
      'https://images.pexels.com/photos/3871/city-night-explosion-firework.jpg?auto=compress&cs=tinysrgb&w=1200',
    github: 'https://github.com/samuelkwartengokyere',
    live: 'https://new-year-countdown-mocha-sigma.vercel.app/',
  },
  {
    title: 'Pomodoro Timer',
    description:
      'Productivity-focused Pomodoro timer with work and break cycles to support better time management and focused study sessions.',
    imageAlt: 'Preview of a Pomodoro timer interface',
    image:
      'https://images.pexels.com/photos/1537268/pexels-photo-1537268.jpeg?auto=compress&cs=tinysrgb&w=1200',
    github: 'https://github.com/samuelkwartengokyere',
    live: 'https://pomodoro-timer-ivory-phi.vercel.app/',
  },
]

// Projects section with cards containing image placeholder, description, and links
const Projects = () => {
  return (
    <section id="projects" className="section projects">
      <div className="section__header">
        <h2 className="section__title">Projects</h2>
        <p className="section__subtitle">Selected work that highlights my approach to building interfaces.</p>
      </div>

      <div className="projects__grid">
        {projects.map((project) => (
          <article key={project.title} className="project-card">
            <div className="project-card__image">
              <div className="project-card__image-inner">
                <img src={project.image} alt={project.imageAlt} className="project-card__img" />
                <span className="project-card__label">{project.title}</span>
              </div>
            </div>

            <div className="project-card__body">
              <h3 className="project-card__title">{project.title}</h3>
              <p className="project-card__description">{project.description}</p>

              <div className="project-card__links">
                <a href={project.github} target="_blank" rel="noreferrer" className="project-card__link">
                  GitHub
                </a>
                <a href={project.live} target="_blank" rel="noreferrer" className="project-card__link project-card__link--primary">
                  Live Demo
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects

