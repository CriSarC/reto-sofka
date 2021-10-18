import React, { useEffect, useState } from 'react'

const nombreJugador = document.getElementById('nombreJugador')
export const Participante = () => {
    const [contadorUno, setContadorUno] = useState(0)
    useEffect(() => {
        console.log('contadorUno: ', contadorUno)
    }, [contadorUno])
    let premios = 0
    switch (contadorUno) {
        case 0:
            premios = 0
            break;
        case 1:
            premios = 5 * (1 + 1)
            break;
        case 2:
            premios = 5 * (2 + 1)
            break;
        case 3:
            premios = 5 * (3 + 1)
            break;
        case 4:
            premios = 5 * (4 + 1)
            break;
        case 5:
            premios = 5 * (5 + 1)
            break;
    }
    const agregar ={
        nombre: nombreJugador,
        puntos: premios
    }
    console.log(agregar)
    return (
        <>
            <h3>rondas Pasadas: {contadorUno}</h3>
            <button onClick={() => setContadorUno(contadorUno + 1)} >s</button>

            {/* {document.getElementById("btnRespuesta").setAttribute("onClick","{() => setContadorUno(contadorUno + 1)}")} */}
        </>


    )
}
