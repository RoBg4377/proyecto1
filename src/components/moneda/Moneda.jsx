import "./Moneda.css";
const Moneda = ({mon}) => {
  return (
    <>
        <h2>{mon.id.toUpperCase()}</h2>
        <ul className="elemento">
          <li>
            <span className="nombre">Identificador: </span>
            <span className="dato">{mon.id}</span>
          </li>
        </ul>
        <ul className="elemento">
          <li>
            <span className="nombre">Ranking en el mercado: </span>
            <span className="dato">{mon.rank}</span>
          </li>
        </ul>
        <ul className="elemento">
          <li>
            <span className="nombre">Símbolo: </span>
            <span className="dato">{mon.symbol}</span>
          </li>
        </ul>
        <ul className="elemento">
          <li>
            <span className="nombre">Nombre oficial: </span>
            <span className="dato">{mon.name}</span>
          </li>
        </ul>
        <ul className="elemento">
          <li>
            <span className="nombre">Disponibile: </span>
            <span className="dato">$ {parseFloat(mon.supply).toFixed(2)}</span>
          </li>
        </ul>
        <ul className="elemento">
          <li>
            <span className="nombre">Total emitido: </span>
            <span className="dato">$ {parseFloat(mon.maxSupply).toFixed(2)}</span>
          </li>
        </ul>
        <ul className="elemento">
          <li>
            <span className="nombre">Operado 24H: </span>
            <span className="dato">$ {parseFloat(mon.volumeUsd24Hr).toFixed(2)}</span>
          </li>
        </ul>
        <ul className="elemento">
          <li>
            <span className="nombre">Precio: </span>
            <span className="dato">$ {parseFloat(mon.priceUsd).toFixed(2)}</span>
          </li>
        </ul>
        <ul className="elemento">
          <li>
            <span className="nombre">Variación 24H: </span>
            <span className={mon.changePercent24Hr > 0 ? "dato positivo": "dato negativo"}>% {mon.changePercent24Hr}</span>
          </li>
        </ul>
        <ul className="elemento">
          <li>
            <span className="nombre">Promedio 24H: </span>
            <span className="dato">$ {parseFloat(mon.vwap24Hr).toFixed(2)}</span>
          </li>
        </ul>
    </>
  );
};
export default Moneda;
