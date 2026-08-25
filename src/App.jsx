import './App.css'
import { Header } from './pages/Header';
import { TitleSection } from './components/TitleSections';
import { Home } from './pages/Home';

function App() {
  return (
    <>
      <Header/>
      <main>
        <Home/>
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
