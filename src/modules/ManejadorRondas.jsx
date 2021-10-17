import React, { Component } from 'react';

import { NavLink } from 'react-router-dom'
import './../css/style.css';

export const ManejadorRondas = () => {
  
    return (
        <>

            <NavLink exact to='/1ra-Ronda' className="btn btn-warning " >
                Ronda 1
            </NavLink>
            <NavLink exact to='/2da-Ronda' className="btn btn-warning" >
                Ronda 2
            </NavLink>
            <NavLink exact to='/3ra-Ronda' className="btn btn-warning" >
                Ronda 3
            </NavLink>
            <NavLink exact to='/4ta-Ronda' className="btn btn-warning" >
                Ronda 4
            </NavLink>
            <NavLink exact to='/5ta-Ronda' className="btn btn-warning" >
                Ronda 5
            </NavLink>
        </>
    )
}