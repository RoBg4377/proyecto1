import axios from "axios"
import { useEffect, useState } from "react"

const usePedido = (path) => {
    const url = import.meta.env.VITE_API_URL
    const [dato, setDato] = useState()
    const [carga, setCarga] = useState(false)
    const [error,setError] = useState(false)

    useEffect(() => {
        setCarga(true)
        axios
            .get(`${url}${path}`)
            .then((dato)=> {
                setDato(dato.data.data)
                setCarga(false) 
            })
            .catch(()=> {
                setCarga(false)
                setError(true)
                console.error("Falló...la puta!")
            })

    }, [])

    return [dato,carga, error]

}
export default usePedido


