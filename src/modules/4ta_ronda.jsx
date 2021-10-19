import React from 'react'
import { NavLink } from 'react-router-dom'
import { CargarPreguntasCuatro } from '../common/hooks/TraerPreguntasCuatro'
import { Modal_Retirarme } from '../common/components/Retirar'

export const Ronda4 = () => {
    return (
        <div className="container abs-center" >
            <div className="row rounded justify-content-med-center paddingcentro" style={{ fontSize: "30px" }}>
                <p>Cuarta Ronda</p>
                <p>Pregunta</p>
                <CargarPreguntasCuatro />
                <div className="buton-center">
                    <NavLink exact to='/Puntaje' className="btn btn-warning" data-bs-toggle="modal" data-bs-target="#Retirarme">
                        Retirarme
                    </NavLink>
                </div>
            </div>
            <Modal_Retirarme puntos="Tres" />
        </div>
    )
}
