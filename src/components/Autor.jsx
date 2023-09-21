import { useContext } from "react";
import "./Autor.css";
import {AutorContext} from "./context/AutorProvider";
const Seccion_2 = () => {
    const autor = useContext(AutorContext)

    return(
    
  <>
    <div className="secciones">
      <h1>CREADOR DE ESTE EJERCICIO</h1>
      <ul>
        <li>
          NOMBRE: <span>{autor.nombre} {autor.apellido}</span>
        </li>
        <li>
          TITULO DEL PROYECTO: <span>{autor.titulo}</span>
        </li>
        <li>
          FECHA DE CREACIÓN: <span>{autor.fecha}</span>
        </li>
        <li>
          COMENTARIO: <span>{autor.comentarios}</span>
        </li>
      </ul>
    </div>
  </>
);
}
export default Seccion_2;
