import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  let botones;

  if (localStorage.getItem("loginToken")) {
    botones = (
      <Link to={"/criptos"} className="link2">
        <button className="button">ENTRAR AL LISTADO DE MONEDAS</button>
      </Link>
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
