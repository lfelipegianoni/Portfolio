import './App.css'
import { Header } from './pages/Header';
import { TitleSection } from './components/TitleSections';

function App() {
  return (
    <>
      <Header/>
      <main>
        <TitleSection name="I`M SOFTWARE ENGINEER"/>
        /*Home*/
        <section className="about">
          <TitleSection name="ABOUT ME"/>
        </section>
        <section className="skills">
          <TitleSection name="MY SKILLS"/>
        </section>
        <section className="project">
          <TitleSection name="MY BEST PROJECTS"/>
        </section>
      </main>
      <footer className="contact">
        {/*Linkedin / Git / email */}
      </footer>
    </>
  )
}

export default App
