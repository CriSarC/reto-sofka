import React from 'react'
import { NavLink } from 'react-router-dom'
import { CargarPreguntasCuatro } from '../common/hooks/TraerPreguntasCuatro'

export const Ronda4 = () => {
    return (
        <div className="container abs-center" >
        <div className="row rounded justify-content-med-center paddingcentro" style={{ fontSize: "30px" }}>
            <p>Cuarta Ronda</p>
            <p>Pregunta</p>
            <CargarPreguntasCuatro/>
            <div className="buton-center">
                <NavLink exact to='/5ta-Ronda' className="btn btn-warning" >
                    Ronda 5
                </NavLink>
            </div>
        </div>
    </div>
    )
}
