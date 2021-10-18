
import Pregunta from './ClasePreguntas'
import { CargarPreguntasUno } from '../hooks/TraerPreguntasUno';

console.log('clase Ronda Uno Cargada')
export class RondaUno extends Pregunta {
    constructor(cantidad, premio, cuestionario) {
        super(cantidad, premio)
        this.cuestionario = cuestionario;
    }
    recompenza(multiplicador) {
        console.log(`Recompenza: ${this.premio * multiplicador}`)
    }
    cuestion(cuestionario) {
        console.log(`pregunta: ${this.cuestionario}`)
        console.log(`cantidad: ${this.cantidad}`)
        console.log(`premio: ${this.premio}`)



        }
    }
    // return(

    // <CargarPreguntasUno/>
    // )


    const PrimerPregunta = CargarPreguntasUno.preg
    
    console.log("traida ",PrimerPregunta)
    const PrimerRespuesta = CargarPreguntasUno.respuestas

let primerPregunta = new RondaUno(9, 2, "PrimerPregunta");
primerPregunta.recompenza(2)
// primerpregunta.cuestion()

export default primerPregunta;
