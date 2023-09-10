const Criptomoneda = ({ nombre, simbolo, precio, enlace, variacion }) => {
  return (
    <>
      <div className="criptomoneda">
        <h2 className="cripto">{nombre}</h2>
        <ul>
          <li>Simbolo: {simbolo}</li>
          <li>Precio: ${precio}</li>
          <li>
            Var. 24hs: %<span className={variacion > 0 ? "positivo": "negativo"}> {variacion}</span>
          </li>
        </ul>
        <div className="boton">
          <button type="button">
            <a href={enlace} target="_blank">
              ENLACE
            </a>
          </button>
        </div>
      </div>
    </>
  );
};

export default Criptomoneda;
