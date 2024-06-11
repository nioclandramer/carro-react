import { useCarroContex, useCarroTContex } from "./CarroProvider";

const CarroComponent =()=>{
    const carro=useCarroContex();
    const getCarro=useCarroTContex();

    return <div className="container">
        <div className="card" style={{ width: "18rem" }}>
            <img src={getCarro(1).imagen} className="card-img-top" alt={carro.modelo} />
            <div className="card-body">
            <h5 className="card-title">{carro.modelo}</h5>
            <p className="card-text">
            Precio: ${getCarro(1).precio}
            </p>
            </div>
        </div>
    </div>
}

export default CarroComponent;