import React from 'react'
import { NavLink } from 'react-router-dom'
import './../css/style.css';

export const Tutorial = () => {
    return (
        <>
            <div className="container abs-center" >
                <div className="row rounded justify-content-med-center paddingcentro" style={{ fontSize: "30px" }}>
                    <p>Preguntas y Respuestas</p>
                    <p>Te doy la bienvenida al juego de preguntas y respuestas donde tendrás
                        que responder un total de 5 rondas de preguntas, conforme vayas avanzando
                        la dificultad de las preguntas aumentaran! Pero también lo harán los puntos
                        que ganes!!</p>
                    <p>Si en alguna de las rondas decides retirarte voluntariamente podrás conservar
                        los puntos que lleves acumulados, por el contrario, si respondes mal una
                        pregunta perderás todos los puntos, diviértete!</p>
                    <div className="buton-center">
                        <NavLink exact to='/1ra-Ronda' className="btn btn-danger buton-Menu">
                            Comenzar Ahora!
                        </NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}
