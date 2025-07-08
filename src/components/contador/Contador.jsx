import "./Contador.css"
import { useState } from "react";
import { Buttons } from "../buttons/Buttons";

export const Contador = () => {
  const [contador, setContador] = useState(0);



  return (
    <div className="contador">
      <h4>{contador}</h4>
      
      <Buttons texto = {"Sumar productos"} funcionClick = {() => {
        setContador(contador+1)}}
      />
      
      <Buttons texto = {"Eliminar carrito"} funcionClick={() => {

      (setContador(0))
      }} />
    </div>
  )
};
