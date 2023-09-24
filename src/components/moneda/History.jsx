import "./History.css"
const History = ({history}) => {
    return (
        <>
          <table className="tabla">
            <thead>
              <tr>
                <th>Fecha</th>
                <th>Valor</th>
              </tr>
            </thead>
            {history.reverse().map(({ time, priceUsd}) => (
                <tbody>
                  <tr key={time}>
                    <td>{new Date(time).toDateString()}</td>
                    <td className="valor">
                      $ {parseFloat(priceUsd).toFixed(2)}
                      
                    </td>
                  </tr>
                </tbody>
              ))}
          </table>
        </>
    )
}
export default History;