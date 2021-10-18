import React from 'react'
import { NavLink } from 'react-router-dom'
import { CargarPreguntasDos } from '../common/hooks/TraerPreguntasDos'
import { Modal_Retirarme } from '../common/components/Retirar'



export const Ronda2 = () => {
    return (
        <div className="container abs-center" >
        <div className="row rounded justify-content-med-center paddingcentro" style={{ fontSize: "30px" }}>
            <p>Segunda Ronda</p>
            <p>Pregunta</p>
            <CargarPreguntasDos/>
            <div className="buton-center">
                    <NavLink exact to='/Puntaje' className="btn btn-warning" data-bs-toggle="modal" data-bs-target="#Retirarme">
                        Retirarme
                    </NavLink>
                </div>
            </div>
            <Modal_Retirarme puntos="Uno"/>
        </div>
    )
}
