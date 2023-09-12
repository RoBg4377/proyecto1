import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Moneda from "./Moneda";

const Monedas = () => {
  const [mon, setMon] = useState();
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
  }, []);

  if(!mon){
    return <span>Cargando...</span>;
  }
  
  return (
    <>
      <h1>{param.id.toUpperCase()}</h1>
      
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
      
      
    
    </>
  );
};
export default Monedas;
