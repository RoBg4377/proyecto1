import Criptomoneda from "./Criptomoneda";
import "./Cuadricula.css";
import usePedido from "../../hooks/usePedido";

function Cuadricula() {

  const criptos = usePedido("assets")

  if (!criptos) {
    return <span>Cargando...</span>;
  }

  return (
    <>
    <div className="container">
      <h1>CRIPTOMONEDAS</h1>
      <div className="criptomonedas">
        {criptos.map(({name, symbol, priceUsd, explorer, id, changePercent24Hr}) => (
          <Criptomoneda
            nombre={name}
            simbolo={symbol}
            precio={parseFloat(priceUsd).toFixed(2)}
            enlace={explorer}
            variacion={parseFloat(changePercent24Hr).toFixed(3)}
            key={id}
            id={id}
          />
        ))}
      </div>
    </div>
      
    </>
  );
}

export default Cuadricula;
