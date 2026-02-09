import React from 'react'
import './Footer.css'

// Footer with simple social icon placeholders and copyright
const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer__social">
        {/* Social links from the CV */}
        <a
          href="https://github.com/samuelkwartengokyere"
          aria-label="GitHub"
          className="footer__icon"
          target="_blank"
          rel="noreferrer"
        >
          GH
        </a>
        <a
          href="https://linkedin.com/in/samuel-kwarteng-okyere"
          aria-label="LinkedIn"
          className="footer__icon"
          target="_blank"
          rel="noreferrer"
        >
          in
        </a>
        {/* Add your X/Twitter URL if you have one */}
        <a href="#" aria-label="X (Twitter)" className="footer__icon">
          X
        </a>
      </div>

      <p className="footer__copy">© {year} Samuel Kwarteng Okyere. All rights reserved.</p>
    </footer>
  )
}

export default Footer

