import React from 'react'
import { NavLink } from 'react-router-dom'
import { CargarPreguntasCinco } from '../common/hooks/TraerPreguntasCinco'

export const Ronda5 = () => {
    return (
        <div className="container abs-center" >
        <div className="row rounded justify-content-med-center paddingcentro" style={{ fontSize: "30px" }}>
            <p>Quinta Ronda</p>
            <p>Pregunta</p>
            <CargarPreguntasCinco/>
            <div className="buton-center">
                <NavLink exact to='/Puntajes' className="btn btn-warning" >
                    Mira Tu Puntaje
                </NavLink>
            </div>
        </div>
    </div>
    )
}
