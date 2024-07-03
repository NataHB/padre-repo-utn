import React from "react";
import { useState } from "react";

const Contador = ({limit}) => {
    const [contador, setContador] = useState(0)

    const sumar = () => {
        if (contador != limit){
        setContador(contador +1)
        }
    }
    const restar = () => {
        if (contador != 0){
            setContador(contador -1)
        }
    }
    return (
        <div>
            { 
                contador === 0 
                ? (<button onClick={sumar}>Comprar</button>)
                : (
                    <>
                        <button onClick={restar}>-</button>
                        <span>{contador}</span>
                        {
                        contador === limit
                        ? <span>Limite alcanzado</span>
                        : <button onClick={sumar}>+</button>
                        }
                    </>
                )
            }
            { contador >= 1 && <h2>Sigue comprando</h2>}
        </div>
    )
}  

export default Contador