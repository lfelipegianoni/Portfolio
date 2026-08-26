import { TitleSection } from "../../components/TitleSections"
import "./about-styles.css"

export function About (){
    return(
        <section id="about">
            <div className="section-header">
                <span className="section-tag">ABOUT ME</span>
            </div>

            <div className="about-grid">
                <div className="about-text">
                    <p>
                        Sou formado em <strong>Engenharia da Computação pela Facens (2020-2025)</strong> e possuo <strong>1 ano e 9 meses de experiência prática</strong> como Analista e Desenvolvedor de Software na ETIBrasil.
                    </p>
                    <p>
                        Minha atuação une a visão estruturada da engenharia ao foco em <strong>Design de Interfaces (UI/UX) e performance Front-End</strong>. Tenho experiência sólida em levantamento de requisitos com clientes, metodologias ágeis (Kanban), integração com APIs REST, bancos de dados MySQL e controle de versão com Git.
                    </p>
                    <p>
                        Um dos meus principais destaques profissionais foi a atuação no desenvolvimento de um <strong>Sistema ERP e Aplicativo de Controle de Estoque para a Secretaria de Educação</strong> (desenvolvido em Flutter com WebView e React UI/UX), aplicativo publicado com sucesso na <strong>Google Play e App Store</strong>.
                    </p>

                    <ul className="pillars-list">
                        <li><i className="fa-solid fa-check"></i> <strong>Foco em Experiência do Usuário (UI/UX):</strong> Criação de telas intuitivas com Figma e React.</li>
                        <li><i className="fa-solid fa-check"></i> <strong>Visão de Processos & Qualidade:</strong> Mapeamento de processos em BPMN e documentação para redução de bugs.</li>
                        <li><i className="fa-solid fa-check"></i> <strong>Engenharia & Solução Real:</strong> Formação técnica sólida voltada para evolução e sustentabilidade do software.</li>
                    </ul>
                </div>

                <div className="about-highlights">
                    <div className="stat-card">
                        <div className="number">1.9+</div>
                        <div className="label">Anos de Experiência em Dev</div>
                    </div>
                    <div className="stat-card">
                        <div className="number">FACENS</div>
                        <div className="label">Engenharia da Computação</div>
                    </div>
                    <div className="stat-card">
                        <div className="number">App Store</div>
                        <div className="label">& Google Play Publicado</div>
                    </div>
                    <div className="stat-card">
                        <div className="number">B1</div>
                        <div className="label">Inglês & Espanhol</div>
                    </div>
                </div>
            </div>
        </section>
    )
}