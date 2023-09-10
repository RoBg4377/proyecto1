import { useEffect, useState } from "react";
import axios from "axios";
import Criptomoneda from "./Criptomoneda";
import "./Cuadricula.css";

function Cuadricula() {
  const [criptos, setCriptos] = useState();
  const URL_API = import.meta.env.VITE_API_URL;

  useEffect(() => {
    axios
      .get(`${URL_API}assets`)
      .then((objeto) => {
        setCriptos(objeto.data.data);
        console.log(objeto.data.data);
      })
      .catch(() => console.error("Falló al conseguir los datos"));
  }, []);

  if (!criptos) {
    return <span>Cargando...</span>;
  }

  return (
    <>
      <h1>CRIPTOMONEDAS</h1>
      <div className="criptomonedas">
        {criptos.map(({name, symbol, priceUsd, explorer, id, changePercent24Hr}) => (
          <Criptomoneda
            nombre={name}
            simbolo={symbol}
            precio={parseFloat(priceUsd).toFixed(3)}
            enlace={explorer}
            variacion={parseFloat(changePercent24Hr).toFixed(3)}
            key={id}
          />
        ))}
      </div>
    </>
  );
}

export default Cuadricula;
