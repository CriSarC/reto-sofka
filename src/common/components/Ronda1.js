
import React, { useEffect, useState } from 'react'
import Pregunta from './ClasePreguntas'
import { consultarDatabase } from './../../config/firebase';

console.log('clase Ronda Uno Cargada')
class RondaUno extends Pregunta {
    constructor(cantidad, premio, cuestionario) {
        super(cantidad, premio)
        this.cuestionario = cuestionario;
    }
    recompenza(multiplicador) {
        console.log(`Recompenza: ${this.premio * multiplicador}`)
    }
    //  cuestion(cuestionario){
    //     console.log(`pregunta: ${this.cuestionario}`)
    //     console.log(`cantidad: ${this.cantidad}`)
    //     console.log(`premio: ${this.premio}`)


    // }

}

export const CargarPreguntas = () =>{

const [listaPreguntasUno, setListaPreguntas] = useState([])
const consultarPreguntasUno = async () => {
    const listaTemporal = await consultarDatabase('preguntas_uno') //trae info database
    setListaPreguntas(listaTemporal)
    console.log(listaTemporal)

}
useEffect(() => {
    consultarPreguntasUno()

}, [])

return(
<>
</>
)
}


let primerPregunta = new RondaUno(9, 2, 'nombre?');
primerPregunta.recompenza(2)
// primerpregunta.cuestion()

export default primerPregunta;
