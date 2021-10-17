import React from 'react'
import { NavLink } from 'react-router-dom'
import { CargarPreguntasUno } from '../common/hooks/TraerPreguntasUno'
import primerPregunta, { CargarPreguntas } from './../common/components/Ronda1'

export const Ronda1 = () => {

    return (
        <div className="container abs-center" >
            <div className="row rounded justify-content-med-center paddingcentro" style={{ fontSize: "30px" }}>
                <p>Primera Ronda</p>
                <p>Pregunta</p>
                <p>{primerPregunta.cuestionario}</p>
                
                <CargarPreguntasUno/>
                <div className="buton-center">
                    <NavLink exact to='/2da-Ronda' className="btn btn-warning" >
                        Ronda 2
                    </NavLink>
                </div>
            </div>
        </div>
    )
}
