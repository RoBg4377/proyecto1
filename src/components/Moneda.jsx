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
      <div className="moneda">
        <h1>{id.toUpperCase()}</h1>
        <ul className="elemento">
          <li>
            <span className="nombre">Identificador: </span>
            <span className="dato">{id}</span>
          </li>
        </ul>
        <ul className="elemento">
          <li>
            <span className="nombre">Ranking en el mercado: </span>
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
            <span className="nombre">Disponibile: </span>
            <span className="dato">$ {supply}</span>
          </li>
        </ul>
        <ul className="elemento">
          <li>
            <span className="nombre">Total emitido: </span>
            <span className="dato">$ {maxSupply}</span>
          </li>
        </ul>
        <ul className="elemento">
          <li>
            <span className="nombre">Operado 24H: </span>
            <span className="dato">$ {volumeUsd24Hr}</span>
          </li>
        </ul>
        <ul className="elemento">
          <li>
            <span className="nombre">Precio: </span>
            <span className="dato">$ {priceUsd}</span>
          </li>
        </ul>
        <ul className="elemento">
          <li>
            <span className="nombre">Variación 24H: </span>
            <span className={changePercent24Hr > 0 ? "dato positivo": "dato negativo"}>% {changePercent24Hr}</span>
          </li>
        </ul>
        <ul className="elemento">
          <li>
            <span className="nombre">Promedio 24H: </span>
            <span className="dato">$ {vwap24Hr}</span>
          </li>
        </ul>
      </div>
  );
};
export default Moneda;
