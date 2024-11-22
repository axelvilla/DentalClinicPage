import React from 'react'


export const Header = () => {
  return (
    <div className="d-flex flex-row w-100 pb-5">
        <div className=".container align-self-center">
            <h1 className=" mx-5 px-5 fw-bold">Tu sonrisa es nuestra prioridad como odontologa</h1>
            <h5 className="mx-5 px-5">Ofrecemos una amplia variedad de servicios odontologicos, desde limpiezas hasta tratamientos avanzados. Aprovecha nuestras promociones actuales y cuida tu salud dental con nosotros</h5>
        </div>
        <div className="d-flex flex-row justify-content-center">
            <img className="mt-3" width="722" src="https://draluisamartinez.com/wp-content/uploads/2024/05/foto1-1024x793.png"/>
        </div>
    </div>
  )
}
