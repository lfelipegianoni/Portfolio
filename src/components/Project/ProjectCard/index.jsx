import "./project-card-styles.css";

import folder from "../../../assets/icons/folder_open.svg";

export function ProjectCard({title,description,tags}) {
    return(
        <div className="project-card">
            <div>
                <div className="project-header">
                    <img className="fa-regular fa-folder-closed folder" src={folder} alt=""/>
                    <div className="project-links">
                        <a href="#" title="Ver detalhes"><i class="devicon-github-original"></i></a>
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