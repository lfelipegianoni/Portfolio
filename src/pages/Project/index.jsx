import "./project-styles.css";

export function Project (){
    return(
        <section id="projects">
            <div className="section-header">
                <span className="section-tag">MY BEST PROJECTS</span>
                <h2 className="section-title">Projetos em Destaque</h2>
            </div>

            <div className="projects-grid">
                {/*Project 1*/}
                <div className="project-card">
                    <div>
                        <div className="project-header">
                            <i className="fa-regular fa-folder-closed folder"></i>
                            <div className="project-links">
                                <a href="#" title="Ver no App Store / Play Store"><i className="fa-solid fa-arrow-up-right-from-square"></i></a>
                            </div>
                        </div>
                        <h3 className="project-title">Sistema ERP & App Merenda Escolar</h3>
                        <p className="project-desc">
                            Desenvolvimento de produto ERP voltado à Secretaria de Educação para gestão de entregas e controle de estoque de alimentos. Criação de telas e componentes responsivos em React integrados via Flutter WebView para o ecossistema mobile.
                        </p>
                    </div>
                    <div className="project-techs">
                        <span>React</span>
                        <span>Flutter (WebView)</span>
                        <span>UI/UX</span>
                        <span>Google Play</span>
                        <span>App Store</span>
                    </div>
                </div>

                {/*Project 2*/}
                <div className="project-card">
                    <div>
                        <div className="project-header">
                            <i className="fa-regular fa-folder-closed folder"></i>
                            <div className="project-links">
                                <a href="#" title="Ver detalhes"><i className="fa-brands fa-github"></i></a>
                            </div>
                        </div>
                        <h3 className="project-title">Modernização de Interfaces & SEO (ETIBrasil)</h3>
                        <p className="project-desc">
                            Levantamento de requisitos, prototipação no Figma e desenvolvimento de interfaces modernas integradas a sistemas legados (ASP Clássico) e MySQL, garantindo otimização de SEO e performance.
                        </p>
                    </div>
                    <div className="project-techs">
                        <span>React</span>
                        <span>Figma</span>
                        <span>MySQL</span>
                        <span>SEO</span>
                        <span>REST APIs</span>
                    </div>
                </div>

                {/*Project 3*/}
                <div className="project-card">
                    <div>
                        <div className="project-header">
                            <i className="fa-regular fa-folder-closed folder"></i>
                            <div className="project-links">
                                <a href="#" title="Ver documentação"><i className="fa-solid fa-file-code"></i></a>
                            </div>
                        </div>
                        <h3 className="project-title">Mapeamento de Processos & Prevenção de Bugs</h3>
                        <p className="project-desc">
                            Projeto estratégico para mapeamento (BPMN) e documentação de processos do sistema ERP, reduzindo tempo de atendimento ao suporte e prevenindo falhas de software recorrentes.
                        </p>
                    </div>
                    <div className="project-techs">
                        <span>BPMN</span>
                        <span>Swagger</span>
                        <span>Gestão de Processos</span>
                        <span>Suporte Técnico</span>
                    </div>
                </div>
            </div>
        </section>
    )
}