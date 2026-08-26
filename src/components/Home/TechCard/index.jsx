import "./tech-card-styles.css"

export function TechCard ({nameIcon, nameTech}) {
    return(
        <div className="tech-card"><i className={nameIcon}></i>{nameTech}</div>
    )
}
            
          