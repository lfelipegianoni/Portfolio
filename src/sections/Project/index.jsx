import "./project-styles.css";

import { Badge } from "../../components/Badge";
import { SubTitle } from "../../components/SubTitle";
import { ProjectCard } from "../../components/Project/ProjectCard";

export function Project (){
    return(
        <section id="projects" className="projects">
            <Badge name="My Projects"/>
            <SubTitle name="Featured Projects"/>
            <div className="projects-grid">
                <ProjectCard
                    title="Sistema ERP & App Merenda Escolar"
                    description="Desenvolvimento de produto ERP voltado à Secretaria de Educação para gestão de entregas e controle de estoque de alimentos. Criação de telas e componentes responsivos em React integrados via Flutter WebView para o ecossistema mobile."
                    tags={[
                        "React",
                        "Flutter",
                        "UI/UX",
                        "Google Play",
                        "App Store",
                    ]}
                />
                <ProjectCard
                    title="Modernização de Interfaces & SEO (ETIBrasil)"
                    description="Levantamento de requisitos, prototipação no Figma e desenvolvimento de interfaces modernas integradas a sistemas legados (ASP Clássico) e MySQL, garantindo otimização de SEO e performance."
                    tags={[
                        "React",
                        "Figma",
                        "MySQL",
                        "SEO",
                        "REST APIs",
                    ]}
                />
                <ProjectCard
                    title="Mapeamento de Processos & Prevenção de Bugs"
                    description="Projeto estratégico para mapeamento (BPMN) e documentação de processos do sistema ERP, reduzindo tempo de atendimento ao suporte e prevenindo falhas de software recorrentes."
                    tags={[
                        "BPMN",
                        "Swagger",
                        "Gestão de Processos",
                        "Suporte Técnico"
                    ]}
                />
            </div>
        </section>
    )
}