import { Header } from './pages/Header';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Skills } from './pages/Skills';
import { Project } from './pages/Project';
import { Footer } from './pages/Footer';

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
