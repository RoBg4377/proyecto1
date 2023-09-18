import { useParams } from "react-router-dom";
import History from "../moneda/History";
import usePedido from "../../hooks/usePedido"
import "./Monedas.css";
import Moneda from "../moneda/Moneda";

const Monedas = () => {
  const param = useParams();
  const mon = usePedido(`assets/${param.id}`)
  const history = usePedido(`assets/${param.id}/history?interval=d1`);
  return (
    <>
      <div className="container2">
        <div>
          {mon && <Moneda mon={mon} />}
        </div>
        <div className="cotizacion">
          {history && <History history={history}/>}

        </div>
        
      </div>
    </>
  );
};
export default Monedas;
