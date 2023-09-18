import axios from "axios"
import { useEffect, useState } from "react"

const usePedido = (path) => {
    const url = import.meta.env.VITE_API_URL
    const [dato, setDato] = useState()
    useEffect(() => {
        
        axios
            .get(`${url}${path}`)
            .then((dato)=> {
                setDato(dato.data.data)
            })
            .catch(()=> {
                console.error("Falló...la puta!")
            })

    }, [])

    return dato

}
export default usePedido


