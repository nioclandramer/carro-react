import React from "react";

class CarroComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        carros: [
            { id: 1, ubicacion: 'Ubicacion 1', modelo: 'Modelo 1', fechaInicio: '2024-06-09', fechaFin: '2024-06-16', precio: 1000, rentados: [] },
            { id: 2, ubicacion: 'Ubicacion 2', modelo: 'Modelo 2', fechaInicio: '2024-06-10', fechaFin: '2024-06-17', precio: 1500, rentados: [] }
        ]
        };
    }

    render() {
        return (
        <div>
            <h2>Lista de Coches</h2>
            <table className="table">
            <thead>
            <tr>
                <th>ID</th>
                <th>Ubicación</th>
                <th>Modelo</th>
                <th>Fecha de Inicio</th>
                <th>Fecha de Fin</th>
                <th>Precio</th>
                <th>Alquilados</th>
            </tr>
            </thead>
            <tbody>
              {/* Mapeamos la lista de coches para mostrar cada uno */}
                {this.state.carros.map(carro => (
                <tr key={carro.id}>
                    <td>{carro.id}</td>
                    <td>{carro.ubicacion}</td>
                    <td>{carro.modelo}</td>
                    <td>{carro.fechaInicio}</td>
                    <td>{carro.fechaFin}</td>
                    <td>{carro.precio}</td>
                    <td>
                    <ul>
                      {/* Mapeamos la lista de coches rentados asociados a este coche */}
                        {carro.rentados.map(rentado => (
                        <li key={rentado.id}>
                        </li>
                        ))}
                    </ul>
                    </td>
                </tr>
                ))}
            </tbody>
            </table>
        </div>
        );
    }
}
export default CarroComponent;