import React from 'react'
import './Hero.css'

// Hero section with name, tagline and primary actions
const Hero = () => {
  const handleScrollToContact = () => {
    const section = document.getElementById('contact')
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="hero">
      <div className="hero__content">
        <p className="hero__eyebrow">Hi, I&apos;m</p>
        <h1 className="hero__title">Samuel Kwarteng Okyere</h1>
        <p className="hero__tagline">
          Software Engineer focused on frontend development, cloud computing, and resilient systems.
        </p>

        <div className="hero__actions">
          {/* Download CV button - place Samuel_Okyere_CV.pdf in the public/ folder */}
          <a href="/Samuel_Okyere_CV.pdf" className="btn btn--primary" download>
            Download CV
          </a>
          <button className="btn btn--ghost" onClick={handleScrollToContact}>
            Contact Me
          </button>
        </div>

        <p className="hero__subtext">
          Passionate and results-driven engineer with hands-on experience in front-end development, cloud computing, and
          resilient system design. I enjoy applying AI and modern web technologies to solve real-world problems with
          scalable, intelligent solutions.
        </p>
      </div>
    </section>
  )
}

export default Hero

