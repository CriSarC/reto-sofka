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
                    <div>
                        <NavLink exact to='/' activeClassName="btn btn-warning active">
                            Juega!
                        </NavLink>
                    </div>
                    <div>
                        <NavLink exact to='/Puntajes' activeClassName="btn btn-warning active">
                            Puntajes
                        </NavLink>
                    </div>
                    <div className="col-12 text-aling-end">
                        <a className="navbar-brand menuNG-titulo font-size-25px">
                            {titulo}&nbsp;&nbsp; <i className="fas  font-size-50px"></i>
                        </a>
                    </div>
                </div>
            </nav>

        </>

    )
}
