import { Badge } from "../../components/Badge";
import "./about-styles.css";

export function About (){
    return(
        <section id="about">
            <Badge name="ABOUT ME"/>
            <div className="about-grid">
                <div className="about-text">
                    <p>
                        I graduated with a degree in <strong>Software Engineering from FACENS (2020-2025)</strong>, with <strong>1 year and 9 months of experience</strong> as an intern, working as a Full Stack Developer at ETI Brasil, focusing on public education management.
                    </p>
                    <p>
                        During my internship experience, I worked with (UI/UX), Figma, React, Bootstrap, JavaScript, HTML5, CSS3, C#, Flutter, process mapping, customer support, and Trello using Agile methodologies.
                    </p>
                    <p>
                        I am currently studying to improve my English proficiency through the Hotmart platform, taking the Cronograma dos Fluentes course, and I am looking for new opportunities as a developer.
                    </p>
                </div>
                <div className="about-highlights">
                    <div className="stat-card">
                        <div className="number">Estagio</div>
                        <div className="label">1 Ano e 9 meses como Full-Stack</div>
                    </div>
                    <div className="stat-card">
                        <div className="number">Graduação</div>
                        <div className="label">Engenharia da Computação</div>
                    </div>
                    <div className="stat-card">
                        <div className="number">4+</div>
                        <div className="label">Projetos </div>
                    </div>
                    <div className="stat-card">
                        <div className="number">Ingles</div>
                        <div className="label">Atualmente no B1</div>
                    </div>
                </div>
            </div>
        </section>
    )
}