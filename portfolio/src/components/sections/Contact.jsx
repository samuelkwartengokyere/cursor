import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import './Contact.css'

// Contact section with a simple, styled form layout
const Contact = () => {
  const formRef = useRef()
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    setLoading(true)
    setSuccess(false)
    setError(false)

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          setLoading(false)
          setSuccess(true)
          event.target.reset()
        },
        (error) => {
          console.error('FAILED...', error.text)
          setLoading(false)
          setError(true)
        }
      )
  }

  return (
    <section id="contact" className="section contact">
      <div className="section__header">
        <h2 className="section__title">Contact</h2>
        <p className="section__subtitle">
          Based in Accra, Ghana — open to software engineering roles, collaborations, and mentoring opportunities.
        </p>
      </div>

      <div className="contact__grid">
        <div className="contact__copy">
          <p>
            I&apos;m currently open to new opportunities, collaborations, and interesting side projects. Share a bit
            about what you&apos;re working on and how I can contribute as a Software Engineer.
          </p>
          <p>
            You can also email me directly at{' '}
            <a href="mailto:samfine278@gmail.com">samfine278@gmail.com</a> or connect via GitHub and LinkedIn in the
            footer.
          </p>
        </div>

        <form className="contact__form" ref={formRef} onSubmit={handleSubmit}>
          <div className="field">
            <label htmlFor="name">Name</label>
            <input id="name" name="user_name" type="text" placeholder="Your name" required />
          </div>

          <div className="field">
            <label htmlFor="email">Email</label>
            <input id="email" name="user_email" type="email" placeholder="you@example.com" required />
          </div>

          <div className="field">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="4" placeholder="Tell me about your project or idea" required />
          </div>

          <button type="submit" className="btn btn--primary btn--full" disabled={loading}>
            {loading ? 'Sending...' : 'Send Message'}
          </button>

          {success && <p className="form-feedback success">Message sent successfully!</p>}
          {error && <p className="form-feedback error">Failed to send message. Please try again.</p>}
        </form>
      </div>
    </section>
  )
}

export default Contact

