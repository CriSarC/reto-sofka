import React from 'react'
import { NavLink } from 'react-router-dom'
import { CargarPreguntasCinco } from '../common/hooks/TraerPreguntasCinco'
import { Modal_Retirarme } from '../common/components/Retirar'
import { Modal_Ganar } from '../common/components/Ganar'

export const Ronda5 = () => {
    return (
        <div className="container abs-center" >
            <div className="row rounded justify-content-med-center paddingcentro" style={{ fontSize: "30px" }}>
                <p>Quinta Ronda</p>
                <p>Pregunta</p>
                <CargarPreguntasCinco />
                <div className="buton-center">
                    <NavLink exact to='/Puntaje' className="btn btn-warning" data-bs-toggle="modal" data-bs-target="#Retirarme">
                        Retirarme
                    </NavLink>
                </div>
            </div>
            <Modal_Retirarme puntos="Cuatro" />
            <Modal_Ganar puntos="Cinco" />
        </div>
    )
}
