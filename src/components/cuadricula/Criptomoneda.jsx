import { Link } from "react-router-dom";

const Criptomoneda = ({ nombre, simbolo, precio, enlace, variacion, id }) => {
  return (
    <>
      <div className="criptomoneda">
        <h2 className="cripto">{nombre}</h2>
        <ul>
          <li>Simbolo: {simbolo}</li>
          <li>Precio: ${precio}</li>
          <li>
            Var. 24hs: %<span className={variacion > 0 ? "positivo": "negativo"}> {variacion}</span>
          </li>
        </ul>
        <div className="boton">
          
            <Link to={`/criptos/${id}`}><button type="button">INFO</button></Link>
          
        </div>
      </div>
    </>
  );
};

export default Criptomoneda;
