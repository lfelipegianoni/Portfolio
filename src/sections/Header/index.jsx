import "./header-styles.css"

export function Header() {
  return (
    <header>
        <div className="container nav-container">
            <a href="#home" className="logo">
                <code>&lt;/&gt;</code> LuisFelipe.dev
            </a>
            <ul className="nav-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Project</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <button className="lang-btn" id="#">pt-BR ▾</button>
        </div>
    </header>
  )
}