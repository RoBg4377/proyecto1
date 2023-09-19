import { NavLink } from "react-router-dom"
import "./Menu.css"

const Menu = () => {
    return    (
        <nav className="main-menu">
            <ul>
                <li className="link"><NavLink to={"/"} className="link">HOME</NavLink></li>
                <li className="link"><NavLink to={"/Criptos"} className="link">LISTADO</NavLink></li>
                <li className="link"><NavLink to={"autor"} className="link">AUTOR</NavLink></li>
            </ul>
        </nav>
    )
}
export default Menu;