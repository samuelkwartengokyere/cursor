import React from 'react'
import './Contact.css'

// Contact section with a simple, styled form layout
const Contact = () => {
  // On submit, open the user's email client with the form values prefilled
  const handleSubmit = (event) => {
    event.preventDefault()
    const formData = new FormData(event.target)
    const name = formData.get('name')
    const email = formData.get('email')
    const message = formData.get('message')

    const subject = encodeURIComponent(`New message from portfolio - ${name}`)
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    )

    window.location.href = `mailto:samfine278@gmail.com?subject=${subject}&body=${body}`

    // Optional: clear the form after triggering the email client
    event.target.reset()
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

        <form className="contact__form" onSubmit={handleSubmit}>
          <div className="field">
            <label htmlFor="name">Name</label>
            <input id="name" name="name" type="text" placeholder="Your name" required />
          </div>

          <div className="field">
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" placeholder="you@example.com" required />
          </div>

          <div className="field">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="4" placeholder="Tell me about your project or idea" required />
          </div>

          <button type="submit" className="btn btn--primary btn--full">
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact

