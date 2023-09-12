import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <>
      <h1>Bienvenido a Criptolistado</h1>
      <div className="principal">
        <p>Un listado de las 100 criptomonedas más usadas</p>

        <Link to={"/criptos"} className="link2">
          <button className="button">ENTRAR AL LISTADO DE MONEDAS</button>
        </Link>
      </div>
    </>
  );
};
export default Home;
