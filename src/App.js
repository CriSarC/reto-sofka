import React, { Component }  from 'react';

import {Bienvenida} from './modules/Bienvenida';
import {Menu} from './modules/Menu';
import {Footer} from './modules/Footer';
import {AppRouter} from './router/Router';



function App() {
  return (
    <div className="App">

      <AppRouter/>
      {/* <Menu/>
      <Bienvenida/>
      <Footer/> */}

    </div>
  );
}

export default App;
