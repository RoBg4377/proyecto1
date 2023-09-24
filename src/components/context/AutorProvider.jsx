import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

const AutorContext = createContext()

const AutorContextProvider = ({children}) =>{
    const [autor, setAutor] = useState({})

    useEffect(() =>(
        setAutor ({
            nombre: "Rodrigo",
            apellido: "Benavides",
            titulo: "Proyecto React Nº 1",
            fecha: "Septiembre de 2023",
            comentarios: "Todos los derechos reservados"
        })
    ),[])

    return (
        <AutorContext.Provider value={autor}>
            {children}
        </AutorContext.Provider>
    )
}
export {AutorContext, AutorContextProvider}
