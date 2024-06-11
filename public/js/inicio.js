import CarroComponent from "../components/carroComponent";
import { CarroProvider } from "../components/CarroProvider";

let mostrar= document.querySelector("#buscar");



mostrar.addEventListener('click',()=>{
        return(
            <CarroProvider>
                <div>
                    <CarroComponent/>
                </div>
            </CarroProvider>
        );
    }
)