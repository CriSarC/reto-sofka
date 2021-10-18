import React from 'react'
import { NavLink } from 'react-router-dom'
import { CargarPreguntasDos } from '../common/hooks/TraerPreguntasDos'


export const Ronda2 = () => {
    return (
        <div className="container abs-center" >
        <div className="row rounded justify-content-med-center paddingcentro" style={{ fontSize: "30px" }}>
            <p>Segunda Ronda</p>
            <p>Pregunta</p>
            <CargarPreguntasDos/>
            <div className="buton-center">
                <NavLink exact to='/3ra-Ronda' className="btn btn-warning" >
                    Ronda 3
                </NavLink>
            </div>
        </div>
    </div>
    )
}
