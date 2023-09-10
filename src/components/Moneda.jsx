import { useParams } from "react-router-dom"

const Moneda = () => {

const param = useParams()

    return (
        <h1>{param.id.toUpperCase()}</h1>
    )
}
export default Moneda