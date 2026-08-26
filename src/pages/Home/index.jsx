import "./home-styles.css";

import { Badge } from "../../components/Badge";

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
            <div className="tech-section">
                <div className="tech-title">Technologies | Work With</div>
                <div className="tech-icons">
                    <div className="tech-card"> React</div>
                    <div className="tech-card"> JavaScript</div>
                    <div className="tech-card"> TypeScript</div>
                    <div className="tech-card"> HTML5</div>
                    <div className="tech-card"> CSS3</div>
                    <div className="tech-card"> Figma</div>
                    <div className="tech-card"> Git</div>
                    <div className="tech-card"> Docker</div>
                    <div className="tech-card"> Python</div>
                    <div className="tech-card"> MySQL</div>
                    <div className="tech-card"> Bootstrap</div>
                </div>
            </div>
        </section>
  )
}