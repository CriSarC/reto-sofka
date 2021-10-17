import React from 'react'
import { NavLink } from 'react-router-dom'

export const Ronda2 = () => {
    return (
        <div className="container abs-center" >
        <div className="row rounded justify-content-med-center paddingcentro" style={{ fontSize: "30px" }}>
            <p>Segunda Ronda</p>
            <p>Pregunta</p>

            <div className="buton-center">
                <NavLink exact to='/3ra-Ronda' className="btn btn-warning" >
                    Ronda 3
                </NavLink>
            </div>
        </div>
    </div>
    )
}
