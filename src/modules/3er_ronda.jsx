import React from 'react'
import { NavLink } from 'react-router-dom'
import { CargarPreguntasTres } from '../common/hooks/TraerPreguntasTres'


export const Ronda3 = () => {
    return (
        <div className="container abs-center" >
        <div className="row rounded justify-content-med-center paddingcentro" style={{ fontSize: "30px" }}>
            <p>Tercera Ronda</p>
            <p>Pregunta</p>
            <CargarPreguntasTres/>
            <div className="buton-center">
                <NavLink exact to='/4ta-Ronda' className="btn btn-warning" >
                    Ronda 4
                </NavLink>
            </div>
        </div>
    </div>
    )
}
