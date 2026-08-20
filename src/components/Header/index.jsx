import "./header-styles.css"
import { ButtonHeader } from "../ButtonHeader"
import closing from '../../assets/icons/closing.svg'

export function Header() {
  return (
    <header>
        <div className="container-header">
            <div className="logo">
                <img className="teste" src={closing} alt="" />
                <h2 className="logo-title">BuildingReact</h2>
            </div>
            <nav>
                <ButtonHeader name="Home" />
                <ButtonHeader name="About" />
                <ButtonHeader name="Skills" />
                <ButtonHeader name="Project" />
                <ButtonHeader name="Contact" />
            </nav>
            <select>
                <option value="pt-br">Pt-Br</option>
                <option value="en">Ig</option>
            </select>
        </div>
        <div className="line-left"/>
        <div className="line-right"/>
    </header>
  )
}