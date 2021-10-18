import { arrayRemove } from '@firebase/firestore';
import { RANDOM_FACTOR } from '@firebase/util';
import React, { useEffect, useState } from 'react'

import { consultarDatabase } from './../../config/firebase';
export const CargarPreguntasTres = () => {
   
    
    const [listaPreguntasUno, setListaPreguntas] = useState([])
    const [unaPregunta, setUnaPregunta] = useState([]);
    console.log('unaPregunta ',setUnaPregunta)
    const consultarPreguntasUno = async () => {
        const listaTemporal = await consultarDatabase('preguntas_tres') //trae info database
        setListaPreguntas(listaTemporal)
        console.log(listaTemporal)
        const unPreg = listaTemporal[Math.floor(Math.random() * listaTemporal.length)]
        console.log('Unpreg',unPreg)
        setUnaPregunta(unPreg)
        const preguntas = unPreg.pregunta
        console.log('preguntas 1 ',preguntas)
        const respuestas = unPreg.respuesta
        console.log('respuestas 1 ',respuestas)
       
        console.log("preguntas ", preguntas)
        var preg= preguntas
    }

    useEffect(() => {
        consultarPreguntasUno()
    }, [])


    // let setUnaPregunta = listaPreguntasUno[Math.floor(Math.random()*listaPreguntasUno.length)];

    return (
        
  

        <>


            {/* {console.log('una pregunta',unaPregunta)} */}
           
            {/* {preguntas = unaPregunta.pregunta} */}
            {/* {console.log('Preguntas de pregunta',preguntas)} */}
           {/* { respuestas = unaPregunta.respuesta} */}
            {/* {console.log('respuestas de pregunta',respuestas)} */}
        





            {
                // listaPreguntasUno.map((pregunta) => (
                // <>
                //     <label>{pregunta.pregunta}</label>
                //     <label>{pregunta.respuesta}</label>
                // </>
                // unaPregunta.map((pregunta) => (
                //         <>
                //             <label>{pregunta.pregunta}</label>
                //             <label>{pregunta.respuesta}</label>

                //         </>



                // ))
                <label>{unaPregunta.pregunta}</label>


            }

        </>
    )
}
