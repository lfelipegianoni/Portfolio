import { useState } from 'react'
import './App.css'
import { ButtonHeader } from './components/ButtonHeader'

function App() {
  return (
    <>
      <header>
        <ButtonHeader name="Home"/>
        <ButtonHeader name="About"/>
        <ButtonHeader name="Skills"/>
        <ButtonHeader name="Project"/>
        <ButtonHeader name="Contact"/>
      </header>
      <main>
        <section className="home">
          <h3>I`m a Softer Developer</h3>
        </section>
        <section className="about">
          <h3>About me</h3>
        </section>
        <section className="skills">
          <h3>My Skills</h3>
        </section>
        <section className="project">
          <h3>My best projects</h3>
        </section>
      </main>
      <footer className="contact">
        {/*Linkedin / Git / email */}
      </footer>
    </>
  )
}

export default App
