import { createContext, useEffect, useState } from "react";

const UsuarioContext = createContext()

const UsuarioProvider = ({children}) =>{
    const [usuario, setUsuario] = useState({})

    useEffect(() =>(
        setUsuario(
            {
                "data": {
                    "id": 2,
                    "email": "janet.weaver@reqres.in",
                    "first_name": "Janet",
                    "last_name": "Weaver",
                    "avatar": "https://reqres.in/img/faces/2-image.jpg"
                },
                "support": {
                    "url": "https://reqres.in/#support-heading",
                    "text": "To keep ReqRes free, contributions towards server costs are appreciated!"
                }
            }
        )
    ),[])
        
        return (
            <UsuarioContext.Provider value={usuario}>
                {children}
            </UsuarioContext.Provider>
        )
}
export {UsuarioContext, UsuarioProvider}