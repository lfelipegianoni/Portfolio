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
          <h5>I`M SOFTWARE ENGINEER</h5>
          <p>Hi, I`m Luis Felipe <br/> I build  things for the web</p>
          <p>I'm a Full-Stack Developer specializing in building <br/> exceptional digital experiences with modern technologies</p>
          <a>linkedin</a>
          <button>Dowload CV</button>
          <h5>TECHNOLOGIES | WORK WITH</h5>
        </section>
        <section className="about">
          <h5>About</h5>
        </section>
        <section className="skills">
          <h5>My Skills</h5>
        </section>
        <section className="project">
          <h5>My best projects</h5>
        </section>
      </main>
      <footer className="contact">
        {/*Linkedin / Git / email */}
      </footer>
    </>
  )
}

export default App
