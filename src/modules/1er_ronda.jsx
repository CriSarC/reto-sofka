import React from 'react'
import { NavLink } from 'react-router-dom'
import { Modal_Retirarme } from '../common/components/Retirar'
import { CargarPreguntasUno } from '../common/hooks/TraerPreguntasUno'

export const Ronda1 = () => {

    return (
        <div className="container abs-center" >
            <div className="row rounded justify-content-med-center paddingcentro" style={{ fontSize: "30px" }}>
                <p>Primera Ronda</p>
                <p>Pregunta</p>
                <CargarPreguntasUno />
                <div className="buton-center">
                    <NavLink exact to='/Puntaje' className="btn btn-warning" data-bs-toggle="modal" data-bs-target="#Retirarme">
                        Retirarme
                    </NavLink>
                </div>
            </div>
            <Modal_Retirarme puntos="Cero" />
        </div>
    )
}
