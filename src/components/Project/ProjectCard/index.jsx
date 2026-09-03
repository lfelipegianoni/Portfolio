import "./project-card-styles.css";

import folder from "../../../assets/icons/folder_open.svg";
import github from "../../../assets/icons/github-brands-solid-full.svg"
import site from "../../../assets/icons/globe-solid-full.svg"

export function ProjectCard({siteHref,gitHref,title,description,tags}) {

    return(
        <div className="project-card">
            <div>
                <div className="project-header">
                    <img className="fa-regular fa-folder-closed folder" src={folder} alt=""/>
                    <div className="project-links">
                        <a href={siteHref}  target="_blank" title="site do projeto"><img src={site} alt="" /></a>
                        <a href={gitHref}  target="_blank" title="pasta do projeto"><img src={github} alt="" /></a>
                    </div>
                </div>
                <h3 className="project-title">{title}</h3>
                <p className="project-desc">
                    {description}
                </p>
            </div>
            <div className="project-techs">
                {tags.map((tags) => (
                    <span key={tags}>
                        {tags}
                    </span>
                ))}
            </div>
        </div>
    )
}