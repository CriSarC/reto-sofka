import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import { Tutorial } from '../modules/Tutorial'
import { Menu } from '../modules/Menu'
import { Footer } from '../modules/Footer'
import { Puntajes } from './../modules/puntaje_jugador'
import { Ronda1 } from '../modules/1er_ronda'
import { Ronda2 } from '../modules/2da_ronda'
import { Ronda3 } from '../modules/3er_ronda'
import { Ronda4 } from '../modules/4ta_ronda'
import { Ronda5 } from '../modules/5ta_ronda'

export const AppRouter = () => {
  return (
    <>
      <Router>
        <Menu />
        <Switch>
          <Route path="/1ra-Ronda" component={Ronda1} />
          <Route path="/2da-Ronda" component={Ronda2} />
          <Route path="/3ra-Ronda" component={Ronda3} />
          <Route path="/4ta-Ronda" component={Ronda4} />
          <Route path="/5ta-Ronda" component={Ronda5} />
          <Route path="/Puntajes" component={Puntajes} />
          <Route path="/" component={Tutorial} />
        </Switch>
        <Footer />
      </Router>
    </>
  )
}