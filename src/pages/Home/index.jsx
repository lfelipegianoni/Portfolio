import "./home-styles.css";

import { Badge } from "../../components/Badge";
import { TechCard } from "../../components/Home/TechCard";

export function Home() {
  return (
    <section id="home" className="hero"> 
            <Badge name="I'M SOFTWARE ENGINEER"/>
            <h1>Hi, I'm Luis Felipe<br/><span className="sss">I build things for the web</span></h1>
            
            <p className="subtitle">
                Front-End Developer and Computer Engineer specializing in creating modern, responsive interfaces and efficient ERP systems using React, JavaScript, TypeScript, and UI/UX.
            </p>

            <div className="hero-actions">
                <a href="https://linkedin.com" target="_blank" className="btn btn-primary">
                  LinkedIn
                </a>
                <a href="#contact" className="btn btn-secondary">
                  Download CV
                </a>
                <a href="#contact" className="btn btn-secondary">
                  Contato
                </a>
            </div>
            <div className="tech-title">Technologies | Work With</div>
            <div className="tech-section">
              <div className="tech-icons">
                <TechCard 
                  nameIcon="devicon-javascript-plain colored" 
                  nameTech="React"
                />
                <TechCard
                  nameIcon="devicon-html5-plain colored" 
                  nameTech="HTML5"
                />
                <TechCard 
                  nameIcon="devicon-css3-plain colored" 
                  nameTech="CSS3"
                />
                <TechCard 
                  nameIcon="devicon-figma-plain colored" 
                  nameTech="Figma"
                />
                <TechCard 
                  nameIcon="devicon-git-plain colored" 
                  nameTech="Git"
                />
                <TechCard 
                  nameIcon="devicon-docker-plain colored" 
                  nameTech="Docker"
                />
                <TechCard 
                  nameIcon="devicon-python-plain colored" 
                  nameTech="Python"
                /> 
                <TechCard 
                  nameIcon="devicon-mysql-plain colored" 
                  nameTech="MySQL"
                />
                <TechCard 
                  nameIcon="devicon-bootstrap-plain colored" 
                  nameTech="Bootstrap"
                /> 
              </div>
            </div>
        </section>
  )
}