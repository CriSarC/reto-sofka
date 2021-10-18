import React, { useState, useEffect } from 'react'
import { guardarDatabase } from '../../config/firebase';
import { useParams, useHistory, NavLink } from 'react-router-dom'
import './../../css/style.css';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom'
import { Puntajes } from './../../modules/puntaje_jugador'


export const Modal_Ganar = ({ puntos }) => {
    const [nameJugador, setNameJugador] = useState()
    // const btnAgregar = document.getElementById('agregarUsuario')
    // console.log(btnAgregar)
    const handleClickRetirar = async (event) => {
        event.preventDefault()

        // btnAgregar.addEventListener('click', (e) => {
        //     e.preventDefault()
        console.log("entro al enventlistener")
        // const NombreJugador = document.getElementById('nombreJugador')
        // const NombreJugador = e.target.username
        console.log(nameJugador)
        // const [agregar, setAgregar] = useState()
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
        // console.log('nombre11: ',e.target.elements.username.value)
        // console.log('nombre22 ',e.target.username.value)
        console.log("nombre jugador: ", nameJugador)
        setNameJugador(nameJugador)
        // setNameJugador("juan")

        //  setAgregar(agregar)
        const agregar = {
            // nombre: NombreJugador.value,
            nombre: nameJugador,
            puntos: premios

        }
        guardarDatabase('usuario', agregar)
        // })
    }
    useEffect(() => {
        // handleClickRetirar()
    }, [])
    // console.log('agregar',agregar)

    return (
        <>

            <Router>
                <Switch>
                    <Route path="/Puntajes" component={Puntajes} />
                </Switch>
            </Router>

            <div className="modal fade" id="Ganador" tabindex="-1">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header headerNg" >
                            <h5 className="modal-dialog modal-dialog-centered" ></h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <h5 style={{ fontSize: "30px" }}>Ganaste!!!:</h5>
                            <p>ingresa tu nombre:  </p>
                            <input name="username" id="nombreJugador" type="text" placeholder="ingresa tu Nombre"
                                value={nameJugador}
                                onChange={(event) => setNameJugador(event.target.value)}></input>
                        </div>
                        <div className="modal-footer">
                            {/* <button type="button" className="btn btn-secondary" id="agregarUsuario"
                            onClick={handleClickRetirar}
                            data-bs-dismiss="modal">Si</button> */}
                            <div>

                            <NavLink  data-bs-dismiss="modal" to='/Puntajes' className="btn btn-secondary"  onClick={handleClickRetirar} >
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
