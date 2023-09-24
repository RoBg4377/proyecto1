import { Link } from "react-router-dom";
import "./Home.css";
import { UsuarioContext, UsuarioProvider} from "./components/context/UsuarioProvider";
import { useContext } from "react";

const Home = () => {
  const usuario = useContext(UsuarioContext)
  console.log(usuario.first_name)

  let botones;

  if (localStorage.getItem("loginToken")) {
    botones = (
      <>
      <h4 className="titulos">¡Hola! {usuario.first_name} {usuario.last_name}</h4>
      <Link to={"/criptos"} className="link2">
        <button className="button">ENTRAR AL LISTADO DE MONEDAS</button>
      </Link>
      </>
    );
  } else {
    botones = (
      <>
      <div className="ingreso">
      <Link to={"/login"} className="link3">
        <button className="button2">REGISTRARTE</button>
      </Link>
      <Link to={"/login"} className="link3">
        <button className="button2">LOGEARTE</button>
      </Link>
      </div>
      </>
    );
  }

  return (
    <>
      <div className="principal">
      <h1 className="titulos">Bienvenido a Criptolistado</h1>
        <h3 className="titulos">Un listado de las 100 criptomonedas más usadas</h3>

        {botones}
      </div>
    </>
  );
};
export default Home;
