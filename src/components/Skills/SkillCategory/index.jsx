import "./skill-category-styles.css"

export function SkillCategory({ icon, title, skills }) {
    return (
        <div className="skill-category">
            <h3>
                <i className={icon}></i> {title}
            </h3>

            <div className="tags-container">
                {skills.map((skill) => (
                    <span className="skill-tag" key={skill}>
                        {skill}
                    </span>
                ))}
            </div>
        </div>
    );
}