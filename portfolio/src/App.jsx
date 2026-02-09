import './App.css'

import Navbar from './components/layout/Navbar.jsx'
import Hero from './components/sections/Hero.jsx'
import About from './components/sections/About.jsx'
import Skills from './components/sections/Skills.jsx'
import Projects from './components/sections/Projects.jsx'
import Contact from './components/sections/Contact.jsx'
import Footer from './components/layout/Footer.jsx'

function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="app__main">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
