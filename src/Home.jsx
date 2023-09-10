import { Link } from "react-router-dom"

const Home = ()=>{
    return (
        <>
        <h1>Bienvenido a Criptolistado</h1>
        <p>Un listado de las 100 criptomonedas más usadas</p>
        <Link to={"/criptos"}>VER LISTADO</Link>
        </>
    )
}
export default Home