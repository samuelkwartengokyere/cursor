import React from 'react'
import './About.css'

// About section with profile image placeholder and description
const About = () => {
  return (
    <section id="about" className="section about">
      <div className="section__header">
        <h2 className="section__title">About</h2>
        <p className="section__subtitle">
          A snapshot of my journey as a software engineer and educator.
        </p>
      </div>

      <div className="about__grid">
        {/* Profile image - make sure my_pic.jpg is in the public/ folder */}
        <div className="about__avatar">
          <div className="about__avatar-inner">
            <img
              src="/my_pic.jpg"
              alt="Portrait of Samuel Kwarteng Okyere"
              className="about__avatar-img"
            />
          </div>
        </div>

        <div className="about__content">
          <p>
            I&apos;m a Software Engineer based in Accra, Ghana, with experience building scalable web applications and
            supporting academic and administrative systems at the University of Energy and Natural Resources. As a
            Teaching Assistant, I&apos;ve also helped students strengthen their foundations in programming, data
            structures, and information technology.
          </p>
          <p>
            My interests span frontend engineering,mobile application development, cloud computing, and the application of artificial intelligence to
            real-world problems. I&apos;m committed to continuous learning, clear technical communication, and building
            interfaces that are both intuitive and performant.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About

