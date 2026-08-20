import './App.css'
import { ButtonHeader } from './components/ButtonHeader'
import { Header } from './components/Header';


import closing from './assets/icons/closing.svg';

function App() {
  return (
    <>
      <Header/>
      <main>
        <section className="home">
          <h3>I`m a Softer Developer</h3>
        </section>
        <section className="about">
          <h3>About</h3>
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
