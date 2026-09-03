import { Badge } from "../../components/Badge";
import { SubTitle } from "../../components/SubTitle";
import "./about-styles.css";

export function About (){
    return(
        <section id="about" className="about">
            <Badge name="ABOUT ME"/>
            <SubTitle name="Experiência"/>
            <div className="about-grid">
                <div className="about-text">
                    <p>
                        Me formei em <strong>Engenharia de Software pela FACENS (2020-2025)</strong>, com <strong>1 ano e 9 meses de experiência</strong> como estagiário, atuando como Desenvolvedor Full Stack na ETI Brasil, com foco em gestão da educação pública.
                    </p>
                    <p>
                        During my internship experience, I worked with (UI/UX), Figma, React, Bootstrap, JavaScript, HTML5, CSS3, C#, Flutter, process mapping, customer support, and Trello using Agile methodologies.
                    </p>
                    <p>
                        Atualmente, estou estudando para aprimorar meu inglês por meio da plataforma Hotmart, fazendo o curso Cronograma dos Fluentes, e estou em busca de novas oportunidades como desenvolvedor.
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