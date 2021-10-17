import React, { Component }  from 'react';

import {Bienvenida} from './modules/Bienvenida';
import {Menu} from './modules/Menu';
import {Footer} from './modules/Footer';



function App() {
  return (
    <div className="App">

      <Menu/>
      <Bienvenida/>
      <Footer/>

    </div>
  );
}

export default App;
