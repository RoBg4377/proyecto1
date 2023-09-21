import { createContext, useEffect, useState } from "react";

const UsuarioContext = createContext()

const UsuarioProvider = ({children}) =>{
    const [usuario, setUsuario] = useState({})

    useEffect(() =>(
        setUsuario(
            {
                nomUsuario: "Rodrigotete",
                img: "https://img2.freepng.es/20200413/cx/transparent-icon-design-5e9514e3e94e76.6287660515868285159556.jpg"
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