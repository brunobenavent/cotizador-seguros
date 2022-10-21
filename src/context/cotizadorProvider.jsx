import { createContext, useState } from "react";

const CotizadorContext = createContext()

const CotizadorProvider = ({children}) => {

    const [error, setError] = useState('')
    const [resultado, setResultado] = useState(0)

    const [datos, setDatos] = useState({
        marca: "",
        year: "",
        plan: ""
    })
    const [cargando, setCargando] = useState(false)

    const handleChangeDatos = e =>{
        setDatos({
            ...datos,
            [e.target.name] : e.target.value
        })

    }
    const cotizarSeguro = () => {
        let cantidad = 2000;
        const difYear = new Date().getFullYear() - Number(datos.year)
        cantidad = cantidad - cantidad * 3 * difYear / 100

        switch (datos.marca){
            case '1': 
                cantidad *= 1.30;
                break;
            case '2':
                cantidad *= 1.15;
                break;
            case '3':
                cantidad *= 1.05;
                break;
            default:
                break;
        }
        if(datos.plan ==='1'){
            cantidad *= 1.2

        }else{
            cantidad *= 1.5
        }
        cantidad= cantidad.toLocaleString('es-ES',{
            style:'currency',
            currency: 'EUR'
        } )
        
        setCargando(true)

        setTimeout(() => {
            setResultado(cantidad)
            setCargando(false)
        }, 1200);
        
    }


    return(
        <CotizadorContext.Provider
            value={{
                handleChangeDatos,
                datos,
                error,
                setError,
                cotizarSeguro, 
                resultado,
                cargando
            }}
        >
            {children}
        </CotizadorContext.Provider>
    )
}

export {
    CotizadorProvider
}

export default CotizadorContext