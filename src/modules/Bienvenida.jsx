import React, { Component } from 'react';

import './../css/style.css';
import { Menu } from './Menu'

export const Bienvenida = () => {
    
    
    return (
        <>          
            <div className="container abs-center" >
                <div className="row rounded justify-content-med-center paddingcentro">
                    <div className="col">
                        <div className="row text-align-center align-items-center">
                            <div className="col-12">
                                <h1>Preguntas y Respuestas</h1>
                            </div>
                        </div>
                        <div className="row text-center">
                            <h6>Ingresa por medio de Gmail</h6>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}