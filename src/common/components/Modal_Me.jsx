import React from 'react'

export const Modal_Me = () => {
    return (
        <>
            <div className="modal fade" id="Info" tabindex="-1">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header headerNg" >
                            <h5 className="modal-dialog modal-dialog-centered" ></h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <h5 style={{ fontSize: "30px" }}>Acerca de mi :</h5>
                            <p>Hola!! </p>
                            <p> Soy Cristian Gonzalo Sarmiento Castro, una persona apasionada por el desarrollo,
                                actualmente hago parte del programa Misión Tic 2022 en el cual me estoy formando
                                como programador, cuento con un técnico en programación, se lenguajes como Python,
                                Java y JavaScript, además de eso me interesa muchísimo el entorno necesario alrededor
                                del desarrollo, conociendo herramientas como Git, GitHub, manejo de terminal o CLI en
                                máquinas Linux(Ubuntu), tengo en mira el aprendizaje de herramientas como Docker manejo
                                de plataformas de Cloud Service como Azure y el uso de herramientas que permitan realizar
                                integración continua como Jenkins o CircleCi, en general muy interesado por el mundo DevOps
                                y el desarrollo ágil!<br/>
                                Espero que te guste esta página la cual hace parte del reto Sofka, en la cual se desarrolla 
                                un juego de preguntas y respuestas!
                            </p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
