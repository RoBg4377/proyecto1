import { useParams } from "react-router-dom";
import History from "../moneda/History";
import usePedido from "../../hooks/usePedido";
import "./Monedas.css";
import Moneda from "../moneda/Moneda";

const Monedas = () => {
  const param = useParams();
  const [mon, carga, error] = usePedido(`assets/${param.id}`);
  const [history, carga2, error2] = usePedido(`assets/${param.id}/history?interval=d1`);
  if (carga || carga2)
    return (
      <div className="cargando">
        <h1>CARGANDO...</h1>
      </div>
    );
    if (error || error2)
    return (
      <div className="error">
        <h5>Los datos solicitados no se encuentran disponibles</h5>
        <img src="https://img.freepik.com/vector-gratis/pop-up-moderno-precaucion-diseno-plano_23-2147876453.jpg?w=740&t=st=1695080060~exp=1695080660~hmac=a624b5cb3ff40dc9915b6d4dcd51b77c3930e7e5192f5444b03251aab3ea8c67" alt="hola que tal" />

      </div>
    );

  return (
    <>
      < div className="container2">
          <div className="moneda">{mon && <Moneda mon={mon} />}</div>
          <div className="cotizacion">
            <h3 className="titulos">Cotización historica anual</h3>
            {history && <History history={history} />} 
            </div>
      </div>
    </>
  );
};
export default Monedas;
