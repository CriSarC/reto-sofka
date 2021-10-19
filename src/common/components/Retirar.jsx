import React, { useState, useEffect } from 'react'
import { guardarDatabase } from '../../config/firebase';
import { NavLink } from 'react-router-dom'
import './../../css/style.css';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom'
import { Puntajes } from './../../modules/puntaje_jugador'

export const Modal_Retirarme = ({ puntos }) => {
    const [nameJugador, setNameJugador] = useState()
    const handleClickRetirar = async (event) => {
        event.preventDefault()
        let premios = 0;
        switch (puntos) {
            case "Cero":
                premios = 0
                break;
            case "Uno":
                premios = 5 * (1 + 1)
                break;
            case "Dos":
                premios = 5 * (2 + 1)
                break;
            case "Tres":
                premios = 5 * (3 + 1)
                break;
            case "Cuatro":
                premios = 5 * (4 + 1)
                break;
            case "Cinco":
                premios = 5 * (5 + 1)
                break;
        }
        setNameJugador(nameJugador)
        const agregar = {
            nombre: nameJugador,
            puntos: premios
        }
        guardarDatabase('usuario', agregar)
    }
    useEffect(() => {
    }, [])
    return (
        <>
            <Router>
                <Switch>
                    <Route path="/Puntajes" component={Puntajes} />
                </Switch>
            </Router>
            <div className="modal fade" id="Retirarme" tabindex="-1">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header headerNg" >
                            <h5 className="modal-dialog modal-dialog-centered" ></h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <h5 style={{ fontSize: "30px" }}>Retirarse:</h5>
                            <p>¿Deseas retirarte?  </p>
                            <input name="username" id="nombreJugador" type="text" placeholder="ingresa tu Nombre"
                                value={nameJugador}
                                onChange={(event) => setNameJugador(event.target.value)}></input>
                        </div>
                        <div className="modal-footer">
                            <div>
                                <NavLink data-bs-dismiss="modal" to='/Puntajes' className="btn btn-secondary" onClick={handleClickRetirar} >
                                    <span>Si</span>
                                </NavLink>
                            </div>
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">No</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
