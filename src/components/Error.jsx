import useCotizador from "../hooks/useCotizador"


const Error = () => {
    const {error} = useCotizador()
    return (
        <div>
            {error}
        </div>
  )
}

export default Error
