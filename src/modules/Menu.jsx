import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import '../css/style.css';


export const Menu = ({ titulo }) => {
    return (
        <>



            <nav className="navbar navbar-expand-lg navbar-dark bg-color " id="menu">
                <div className="container-fluid">
                    <div className="col-6">
                        <NavLink exact to='/' className="btn btn-warning buton-menu" >
                            Juega!
                            
                        </NavLink>
                    </div>
                    <div className="col-6">
                        <NavLink exact to='/Puntajes' className="btn btn-warning buton-menu" >
                            Puntajes
                        </NavLink>
                    </div>
                   
                </div>
            </nav>

        </>

    )
}
