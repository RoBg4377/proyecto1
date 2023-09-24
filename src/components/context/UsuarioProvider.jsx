import { createContext, useEffect, useState } from "react";

const UsuarioContext = createContext()

const UsuarioProvider = ({children}) =>{
    const [usuario, setUsuario] = useState({})

    useEffect(() =>(
        setUsuario({
            id: 2,
            email: "janet.weaver@reqres.in",
            first_name: "Janet",
            last_name: "Weaver",
            avatar: "https://reqres.in/img/faces/2-image.jpg"
        })
    ),[])
        
        return (
            <UsuarioContext.Provider value={usuario}>
                {children}
            </UsuarioContext.Provider>
        )
}
export {UsuarioContext, UsuarioProvider}