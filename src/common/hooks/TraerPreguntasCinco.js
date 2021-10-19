import { NavLink } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import { consultarDatabase } from './../../config/firebase';
import { Modal_Ganar } from '../components/Ganar';

export const CargarPreguntasCinco = () => {
    const [unaPregunta, setUnaPregunta] = useState([]);
    const consultarPreguntasUno = async () => {
        const listaTemporal = await consultarDatabase('preguntas_cinco') //trae info database
        const unPreg = listaTemporal[Math.floor(Math.random() * listaTemporal.length)]
        setUnaPregunta(unPreg)
    }
    useEffect(() => {
        consultarPreguntasUno()
    }, [])
    return (
        <>
            <label>{unaPregunta.pregunta}</label>
            <div className="container-fluid">
                <div clasName="container">
                    <div clasName="row">
                        <div className="col-12 ">
                            <NavLink exact to='/erroneo' className="btn btn-warning buton-resp" >
                                {unaPregunta.erronea1}
                            </NavLink>
                            <NavLink exact to='/erroneo' className="btn btn-warning buton-resp" >
                                {unaPregunta.erronea2}
                            </NavLink>
                        </div>
                        <div className="col-12">
                            <NavLink exact to='/Puntajes' className="btn btn-warning buton-resp" data-bs-toggle="modal" data-bs-target="#Ganador" >
                                {unaPregunta.respuesta}
                            </NavLink>
                            <NavLink exact to='/erroneo' className="btn btn-warning buton-resp" >
                                {unaPregunta.erronea3}
                            </NavLink>
                        </div>
                    </div>
                </div>
                <Modal_Ganar puntos="Cinco" />
            </div>
        </>
    )
}
