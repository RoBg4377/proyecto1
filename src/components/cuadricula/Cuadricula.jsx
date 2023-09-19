import Criptomoneda from "./Criptomoneda";
import "./Cuadricula.css";
import usePedido from "../../hooks/usePedido";
import { useContext } from "react";
import { AutorContext } from "../context/AutorProvider";

function Cuadricula() {

  const rodrigo = useContext(AutorContext)

  const [criptos, carga] = usePedido("assets")

  if (carga)
  return (
    <div className="cargando">
      <h1>CARGANDO...</h1>
    </div>
  );

  return (
    <>
    <div className="container">
      <h1>CRIPTOMONEDAS</h1>
      <div className="criptomonedas">

        {criptos &&
        criptos.map(({name, symbol, priceUsd, explorer, id, changePercent24Hr}) => (
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
      <h2>{rodrigo.nombre}</h2>
    </div>
      
    </>
  );
}

export default Cuadricula;
