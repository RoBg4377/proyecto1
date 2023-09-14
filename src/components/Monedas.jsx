import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Moneda from "./Moneda";
import "./Monedas.css";

const Monedas = () => {
  const [mon, setMon] = useState();
  const [history, setHistory] = useState([]);
  const URL_API = import.meta.env.VITE_API_URL;
  const param = useParams();

  useEffect(() => {
    axios
      .get(`${URL_API}assets/${param.id}`)
      .then((obj) => {
        setMon(obj.data.data);
        console.log(obj.data.data);
      })
      .catch(() => console.error("Falló al conseguir los datos"));

    axios
      .get(`${URL_API}assets/${param.id}/history?interval=d1`)
      .then((obj) => {
        setHistory(obj.data.data);
      })
      .catch(() => console.error("No se encuetra el historial"));
  }, []);

  if (!mon) {
    return <span>Cargando...</span>;
  }

  return (
    <>
      

      <div className="container2">
        <div>
          
          <Moneda
            id={mon.id}
            rank={mon.rank}
            symbol={mon.symbol}
            name={mon.name}
            supply={parseFloat(mon.supply).toFixed(2)}
            maxSupply={parseFloat(mon.maxSupply).toFixed(2)}
            volumeUsd24Hr={parseFloat(mon.volumeUsd24Hr).toFixed(2)}
            priceUsd={parseFloat(mon.priceUsd).toFixed(3)}
            changePercent24Hr={parseFloat(mon.changePercent24Hr).toFixed(2)}
            vwap24Hr={parseFloat(mon.vwap24Hr).toFixed(3)}
          />
        </div>
        <div className="cotizacion">
          <h2>COTIZACIÓN EN EL ULTIMO AÑO</h2>
          <table className="tabla">
            
            <thead>
              <tr>
                <th>Fecha</th>
                <th>Valor</th>
              </tr>
            </thead>
            {history.reverse().map(({ time, priceUsd }) => (
              <tbody>
                <tr>
                  <td>{new Date(time).toDateString()}</td>
                  <td className="valor">$ {parseFloat(priceUsd).toFixed(2)}</td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </div>
    </>
  );
};
export default Monedas;
