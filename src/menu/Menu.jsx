import { NavLink, Navigate, useNavigate } from "react-router-dom";
import "./Menu.css";
import { useContext } from "react";
import { UsuarioContext } from "../components/context/UsuarioProvider";

const Menu = () => {
  const usuario = useContext(UsuarioContext);
  console.log(usuario);
  const navegar = useNavigate();
  return (
    <nav className="main-menu">
      <ul>
        <li className="link">
          <NavLink to={"/"} className="link">
            HOME
          </NavLink>
        </li>
        <li className="link">
          <NavLink to={"/Criptos"} className="link">
            LISTADO
          </NavLink>
        </li>
        <li className="link">
          <NavLink to={"autor"} className="link">
            AUTOR
          </NavLink>
        </li>
        <div className="saludo">
          <div className="usuario">
            <img src={usuario.img} alt="" className="imagen" />
            <p className="nombre">¡Hola! {usuario.nomUsuario}</p>
          </div>

          <li
            className="cerrar"
            onClick={() => {
              localStorage.removeItem("loginToken");
              navegar("/");
            }}
          >
            CERRAR SESION
          </li>
        </div>
      </ul>
    </nav>
  );
};
export default Menu;
