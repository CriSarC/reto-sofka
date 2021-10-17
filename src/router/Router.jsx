import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import { Bienvenida } from '../modules/Bienvenida'
import {Menu} from '../modules/Menu'
import {Footer} from '../modules/Footer'
import {Puntajes} from '../modules/Puntaje_jugador'

export const AppRouter = () => {
  return (
    <>
     
      <Router>
        <Menu />
        <Switch>
          <Route path="/Puntajes" component={Puntajes} />
          <Route path="/" component={Bienvenida} />

          
        </Switch>
        <Footer/>
      </Router>

    </>
  )
}