import React, { useEffect, useState } from 'react'

import { consultarDatabase } from './../../config/firebase';

export const CargarPreguntasUno = () => {

    const [listaPreguntasUno, setListaPreguntas] = useState([])
    const consultarPreguntasUno = async () => {
        const listaTemporal = await consultarDatabase('preguntas_uno') //trae info database
        setListaPreguntas(listaTemporal)
        console.log(listaTemporal)

    }
    useEffect(() => {
        consultarPreguntasUno()

    }, [])

    return (
        <>
            {
                listaPreguntasUno.map((pregunta) => (
                 <>   
        <label>{pregunta.pregunta}</label>

        <label>{pregunta.respuesta}</label>
</>

                ))

            }
        </>
    )
}