import React from 'react'
import './Navbar.css'

// Navbar component with smooth scrolling links to sections
const Navbar = () => {
  const handleScroll = (id) => {
    const section = document.getElementById(id)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className="navbar">
      <div className="navbar__logo">
        <span className="navbar__logo-mark">&lt;/&gt;</span>
        <span className="navbar__logo-text">Samuel Okyere</span>
      </div>

      <nav className="navbar__nav">
        <button onClick={() => handleScroll('hero')} className="navbar__link">
          Home
        </button>
        <button onClick={() => handleScroll('about')} className="navbar__link">
          About
        </button>
        <button onClick={() => handleScroll('skills')} className="navbar__link">
          Skills
        </button>
        <button onClick={() => handleScroll('projects')} className="navbar__link">
          Projects
        </button>
        <button onClick={() => handleScroll('contact')} className="navbar__link navbar__link--primary">
          Contact
        </button>
      </nav>
    </header>
  )
}

export default Navbar

