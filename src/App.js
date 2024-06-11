import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import CarroComponent from '../public/components/carroComponent.jsx';
import './App.css';

export const carroContext = React.createContext();

function App() {
  const [carro,setCarro]=useState(null);

  const llenaCarro = ()=> {
    setCarro({
      name:''
    });
  }
  return (
    <carroContext.Provider value={carro}>
      <div>
        <CarroComponent/>
      </div>
    </carroContext.Provider>
  );
}

export default App;
