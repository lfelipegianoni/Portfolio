import './App.css'
import { Header } from './pages/Header';
import { TitleSection } from './components/TitleSections';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Skills } from './pages/Skills';
import { Project } from './pages/Project';

function App() {
  return (
    <>
      <Header/>
      <main>
        <Home/>
        <About/>
        <Skills/>
        <Project/>
      </main>
      <footer className="contact">
        {/*Linkedin / Git / email */}
      </footer>
    </>
  )
}

export default App
