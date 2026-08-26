import "./skills-styles.css";

import { Badge } from "../../components/Badge";

export function Skills (){
    return(
        <section id="skills">
            <Badge name="My Skills"/>
            <div className="section-header">
                <h2 className="section-title">Habilidades & Tecnologias</h2>
            </div>

            <div className="skills-grid">
                <div className="skill-category">
                    <h3><i className="fa-solid fa-desktop"></i> Front-End & Design</h3>
                    <div className="tags-container">
                        <span className="skill-tag">React</span>
                        <span className="skill-tag">JavaScript (ES6+)</span>
                        <span className="skill-tag">TypeScript</span>
                        <span className="skill-tag">HTML5 & CSS3</span>
                        <span className="skill-tag">UI/UX Design</span>
                        <span className="skill-tag">Figma</span>
                        <span className="skill-tag">Bootstrap</span>
                        <span className="skill-tag">SEO Técnico</span>
                    </div>
                </div>

                <div className="skill-category">
                    <h3><i className="fa-solid fa-server"></i> Backend & Banco de Dados</h3>
                    <div className="tags-container">
                        <span className="skill-tag">APIs REST</span>
                        <span className="skill-tag">MySQL</span>
                        <span className="skill-tag">SQL Server</span>
                        <span className="skill-tag">Python</span>
                        <span className="skill-tag">C# / C</span>
                        <span className="skill-tag">ASP Clássico</span>
                        <span className="skill-tag">Swagger</span>
                        <span className="skill-tag">Postman</span>
                    </div>
                </div>

                <div className="skill-category">
                    <h3><i className="fa-solid fa-gears"></i> Ferramentas & Processos</h3>
                    <div className="tags-container">
                        <span className="skill-tag">Git & GitHub</span>
                        <span className="skill-tag">Kanban / Trello</span>
                        <span className="skill-tag">Docker</span>
                        <span className="skill-tag">DevTools</span>
                        <span className="skill-tag">BPMN</span>
                        <span className="skill-tag">Documentação de Processos</span>
                    </div>
                </div>
            </div>
        </section>
    )
}