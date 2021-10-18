import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'


import './../../css/style.css';

import { consultarDatabase } from './../../config/firebase';
import { Participante } from '../components/Participante';
var preguntaUna;
var contador;
export const CargarPreguntasUno = () => {
    const [listaPreguntasUno, setListaPreguntas] = useState([])
    const [unaPregunta, setUnaPregunta] = useState([]);
    console.log('unaPregunta ', setUnaPregunta)
    const consultarPreguntasUno = async () => {
        const listaTemporal = await consultarDatabase('preguntas_uno') //trae info database
        setListaPreguntas(listaTemporal)
        console.log(listaTemporal)
        const unPreg = listaTemporal[Math.floor(Math.random() * listaTemporal.length)]
        console.log('Unpreg', unPreg)
        setUnaPregunta(unPreg)
        const preguntas = unPreg.pregunta
        console.log('preguntas 1 ', preguntas)
        const respuestas = unPreg.respuesta
        console.log('respuestas 1 ', respuestas)
        console.log("preguntas ", preguntas)
        preguntaUna = unaPregunta
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
                           <Participante/>
                           
                            <NavLink exact to='/2da-Ronda' className="btn btn-warning buton-resp" id="btnRespuesta" onClick={()=>contador++}>
                                {console.log('puntos',contador)}
                                {unaPregunta.respuesta}
                                
                            </NavLink>


                            <NavLink exact to='/erroneo' className="btn btn-warning buton-resp" >
                                {unaPregunta.erronea1}
                            </NavLink>
                        </div>
                        <div className="col-12">
                            <NavLink exact to='/erroneo' className="btn btn-warning buton-resp" >
                                {unaPregunta.erronea2}
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
