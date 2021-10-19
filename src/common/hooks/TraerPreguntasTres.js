import { NavLink } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import { consultarDatabase } from './../../config/firebase';

export const CargarPreguntasTres = () => {
    const [unaPregunta, setUnaPregunta] = useState([]);
    const consultarPreguntasUno = async () => {
        const listaTemporal = await consultarDatabase('preguntas_tres') //trae info database
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
                                {unaPregunta.erronea2}
                            </NavLink>
                            <NavLink exact to='/erroneo' className="btn btn-warning buton-resp" >
                                {unaPregunta.erronea1}
                            </NavLink>
                        </div>
                        <div className="col-12">
                            <NavLink exact to='/4ta-Ronda' className="btn btn-warning buton-resp" >
                                {unaPregunta.respuesta}
                            </NavLink>
                            <NavLink exact to='/erroneo' className="btn btn-warning buton-resp" >
                                {unaPregunta.erronea3}
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
