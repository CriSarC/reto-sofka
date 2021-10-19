import React, { useEffect, useState } from 'react'
import { consultarDatabase } from '../config/firebase'

export const Puntajes = () => {
    const [listaUsuarios, setListaUsuarios] = useState([])
    const cargarUsuarios = async () => {
        const listaTemp = await consultarDatabase('usuario')
        setListaUsuarios(listaTemp)
    }
    useEffect(() => {
        cargarUsuarios()
    }, [listaUsuarios])
    return (
        <div className="container text-center">
            <section className="main abs-center" style={{ fontSize: "30px" }}>
                <div className="container-fluid table-responsive abs-center-table">
                    <table className="table table-hover table-striped" >
                        <thead style={{ textAlign: "center" }}>
                            <tr>
                                <th scope="col">Nombre</th>
                                <th scope="col">Puntaje</th>
                            </tr>
                        </thead>
                        <tbody style={{ textAlign: "center" }}>
                            {
                                listaUsuarios.map((usuario) => (
                                    <tr>
                                        <td>{usuario.nombre}</td>
                                        <td>{usuario.puntos}</td>
                                    </tr>

                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    )
}
