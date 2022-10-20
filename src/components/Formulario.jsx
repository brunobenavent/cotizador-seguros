import { Fragment } from "react"
import { MARCAS, YEARS, PLANES } from "../constants"
import useCotizador from "../hooks/useCotizador"
import Error from "./Error"

const Formulario = () => {
    const {handleChangeDatos ,  datos, error, setError, cotizarSeguro} = useCotizador()
    const handleSubmit = e => {
        e.preventDefault();

        if(Object.values(datos).includes("")){
            setError('Todos los campos son obligatorios')
            return
        }
        setError('')
        const cotizacion = cotizarSeguro()
        





    }
    return (
    <>
        {error && <Error/>}
        <form
            onSubmit={handleSubmit}
        >
            <div className="my-5">
                <label htmlFor="marca" className="block mb-3 font-bold text-gray-400 uppercase ">
                    Marca
                </label>
                <select
                    name="marca"
                    value={datos.marca}
                    className="w-full p-3 bg-white border rounded-lg border-gray-200"
                    onChange={e =>{
                        handleChangeDatos(e)
                    }}
                    >
                    <option value="" >-- Selecciona Marca --</option>
                        {MARCAS.map(marca => (
                            <option
                                value={marca.id}
                                key = {marca.id}
                            >
                                {marca.nombre}
                            </option>
                        ))}
                </select>
            </div>
            <div className="my-5">
                <label htmlFor="year" className="block mb-3 font-bold text-gray-400 uppercase ">
                    Año
                </label>
                <select
                    name="year"
                    value={datos.year}
                    className="w-full p-3 bg-white border rounded-lg border-gray-200"
                    onChange={e =>{
                        handleChangeDatos(e)
                    }}
                    >
                    <option value="" >-- Selecciona Año --</option>
                        {YEARS.map(year => (
                            <option
                                value={year}
                                key = {year}
                            >
                                {year}
                            </option>
                        ))}
                </select>
            </div>
            <div className="my-5">
                <label htmlFor="plan" className="block mb-3 font-bold text-gray-400 uppercase ">
                    Elige un Plan
                </label>
                <div className="flex gap-3 items-center">
                    {PLANES.map(plan => (
                        <Fragment key = {plan.id}>
                            <label htmlFor="">
                                {plan.nombre}
                            </label>
                            <input 
                                type="radio"
                                name= 'plan'
                                value = {plan.id}
                                onChange={e =>{
                                    handleChangeDatos(e)
                                }}

                            />
                        </Fragment>

                    ))}
                </div>
            </div>
            <input 
                type="submit"
                className="w-full bg-indigo-500 hover:bg-indigo-600 transition-colors text-white cursor-pointer p-3 uppercase font-bold"
            />
        </form> 
    </>
  )
}

export default Formulario
