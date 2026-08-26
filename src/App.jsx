import './App.css'
import { Header } from './pages/Header';
import { TitleSection } from './components/TitleSections';
import { Home } from './pages/Home';
import { About } from './pages/About';

function App() {
  return (
    <>
      <Header/>
      <main>
        <Home/>
        <About/>
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
