import PropTypes from 'prop-types';
import React, { useCallback, useContext, useState } from "react";

const carroContext = React.createContext;
const carroTContext = React.createContext;

export function useCarroContex(){
    return useContext(carroContext);
}

export function useCarroTContex(){
    return useContext(carroTContext);
}

export function CarroProvider({children}){
    
    const [carro,setCarro] = useState([
            {id: 1, ubicacion: 'Ubicacion 1', modelo: 'Modelo 1', fechaInicio: '2024-06-09', fechaFin: '2024-06-16', precio: 1000,String:'url' ,rentados:[]},
            {id: 2, ubicacion: 'Ubicacion 1', modelo: 'Modelo 1', fechaInicio: '2024-06-09', fechaFin: '2024-06-16', precio: 1000,String:'url' ,rentados:[]},
            {id: 3, ubicacion: 'Ubicacion 1', modelo: 'Modelo 1', fechaInicio: '2024-06-09', fechaFin: '2024-06-16', precio: 1000,String:'url' ,rentados:[]},
            {id: 4, ubicacion: 'Ubicacion 1', modelo: 'Modelo 1', fechaInicio: '2024-06-09', fechaFin: '2024-06-16', precio: 1000,String:'url' ,rentados:[]},
            {id: 5, ubicacion: 'Ubicacion 1', modelo: 'Modelo 1', fechaInicio: '2024-06-09', fechaFin: '2024-06-16', precio: 1000,String:'url' ,rentados:[]},
            {id: 6, ubicacion: 'Ubicacion 1', modelo: 'Modelo 1', fechaInicio: '2024-06-09', fechaFin: '2024-06-16', precio: 1000,String:'url' ,rentados:[]}
    ]);
    const getCarro =useCallback((id)=>{
        return carro.find(carro=>carro.id===id);
    },[carro]);
    return (
        <carroContext.Provider value={carro}>
            <carroTContext.Provider value={getCarro}>
                {children}
            </carroTContext.Provider>
        </carroContext.Provider>
    );
}
CarroProvider.propTypes = {
    children: PropTypes.node.isRequired
};