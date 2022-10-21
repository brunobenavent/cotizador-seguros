import { useMemo, useRef } from "react"
import { MARCAS, PLANES } from "../constants"
import useCotizador from "../hooks/useCotizador"


const Resultado = () => {
const {datos, resultado}= useCotizador()
const {marca, year, plan} = datos

const nombreMarca = useMemo( () => MARCAS.filter(m => m.id === Number(marca)), [resultado])
const nombrePlan = useMemo( () => PLANES.filter(m => m.id === Number(plan)), [resultado])
const yearRef = useRef(year)


if (resultado === 0) return null

  return (
    <div className="bg-gray-100 text-center mt-5 p-5 shadow">
      <h2 className="text-gray-600 font-black text-3xl ">
        Resumen
      </h2>
      <p className="my-2">
        <span className="font-bold">Marca: </span>
        {nombreMarca[0].nombre}
      </p>
      <p className="my-2">
        <span className="font-bold">Plan: </span>
        {nombrePlan[0].nombre}
      </p>
      <p className="my-2">
        <span className="font-bold">Año del coche: </span>
        {yearRef.current}
      </p>
      <p className="my-2 text-2xl">
        <span className="font-bold">Total Cotización: </span>
        {resultado}
      </p>
    </div>
  )
}

export default Resultado
