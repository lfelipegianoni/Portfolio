import "./badge-styles.css";

export function Badge ({name}){
    return(
        <div>
            <span className="badge">{name}</span>
        </div>
    )
}