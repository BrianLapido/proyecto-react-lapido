import "./Contador.css"
import { useState } from "react";

export const Contador = () => {
  const [contador, setContador] = useState(0);

  const sumar = () =>{
    setContador(contador + 1)
  } 

  return (
    <div className="contador">
      <h4>{contador}</h4>
      <button onClick={sumar}>Sume sus productos</button>
    </div>
  )
};
