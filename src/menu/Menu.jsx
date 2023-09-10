import { NavLink } from "react-router-dom"
import "./Menu.css"

const Menu = () => {
    return    (
        <nav className="main-menu">
            <ul>
                <li className="link"><NavLink to={"/"} className="link">INICIO</NavLink></li>
                <li className="link"><NavLink to={"Seccion-1"} className="link">SECCION 1</NavLink></li>
                <li className="link"><NavLink to={"Seccion-2"} className="link">SECCION 2</NavLink></li>
            </ul>
        </nav>
    )
}
export default Menu;