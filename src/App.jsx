import { Header } from './sections/Header';
import { Home } from './sections/Home';
import { About } from './sections/About';
import { Skills } from './sections/Skills';
import { Project } from './sections/Project';
import { Footer } from './sections/Footer';

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
      <Footer/>
    </>
  )
}

export default App
