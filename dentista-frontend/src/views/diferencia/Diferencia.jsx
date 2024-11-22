import React from 'react'
import DifferenceCard from '../../components/DifferenceCard'

export const Diferencia = () => {
  return (
    <div class="pt-5 mb-5">
        <div class="container d-flex justify-content-center pb-2">
            <p class="fw-bold text-primary">QUE NOS HACE DIFERENTES?</p>
        </div>
        <div class="container d-flex justify-content-center mb-5">
            <h2 class="w-75 d-flex text-center ">Descubre los beneficios de elegir nuestro centro odontologico para tu salud dental</h2>
        </div>
        <div className="d-flex flex-row justify-content-between px-5 mx-5">
            <DifferenceCard 
                titulo="Atencion personalizada y tratamientos odontologicos."
                body="Nuestro equipo de expertos se especializa en ofrecer la mejor atencion dental" 
                link="https//google.com/"
            />
            <DifferenceCard 
                titulo="Tecnologia avanzada para diagnosticos y tratamientos."
                body="Utilizamos equipos modernos que garantizan un tratamiento seguro y eficaz" 
                link="https//google.com/"
            />
            <DifferenceCard 
                titulo="Ambiente comodo y acogedor para una experiencia dental sin estres."
                body="Te hacemos sentir como en casa mientras cuidas de tus dientes" 
                link="https//google.com/"
            />
        </div>
    </div>
  )
}
