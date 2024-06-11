import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { CarroProvider } from '../public/components/CarroProvider.jsx';
import CarroComponent from '../public/components/carroComponent.jsx';
import './App.css';


function App() {

  return (
    <CarroProvider>
      <div className='App'>
        <CarroComponent/>
      </div>
    </CarroProvider>
  );
}

export default App;
