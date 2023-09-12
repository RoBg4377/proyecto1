import "./Moneda.css";
const Moneda = ({
  id,
  rank,
  symbol,
  name,
  supply,
  maxSupply,
  volumeUsd24Hr,
  priceUsd,
  changePercent24Hr,
  vwap24Hr,
}) => {
  return (
    <div className="container">
      <div className="moneda">
        <ul className="elemento">
          <li>
            <span className="nombre">Identificador: </span>
            <span className="dato">{id}</span>
          </li>
        </ul>
        <ul className="elemento">
          <li>
            <span className="nombre">Rango de valor en el mercado: </span>
            <span className="dato">{rank}</span>
          </li>
        </ul>
        <ul className="elemento">
          <li>
            <span className="nombre">Símbolo: </span>
            <span className="dato">{symbol}</span>
          </li>
        </ul>
        <ul className="elemento">
          <li>
            <span className="nombre">Nombre oficial: </span>
            <span className="dato">{name}</span>
          </li>
        </ul>
        <ul className="elemento">
          <li>
            <span className="nombre">Disponibilidad para el comercio: </span>
            <span className="dato">$ {supply}</span>
          </li>
        </ul>
      </div>

      <div className="moneda">
        <ul className="elemento">
          <li>
            <span className="nombre">Cantidad total emitida: </span>
            <span className="dato">$ {maxSupply}</span>
          </li>
        </ul>
        <ul className="elemento">
          <li>
            <span className="nombre">Volumen operado en el último día: </span>
            <span className="dato">$ {volumeUsd24Hr}</span>
          </li>
        </ul>
        <ul className="elemento">
          <li>
            <span className="nombre">Precio en dólares: </span>
            <span className="dato">$ {priceUsd}</span>
          </li>
        </ul>
        <ul className="elemento">
          <li>
            <span className="nombre">Variación en el último día: </span>
            <span className="dato">% {changePercent24Hr}</span>
          </li>
        </ul>
        <ul className="elemento">
          <li>
            <span className="nombre">Precio promedio en el último día: </span>
            <span className="dato">$ {vwap24Hr}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Moneda;
