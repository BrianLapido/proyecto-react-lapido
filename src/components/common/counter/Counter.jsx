
import "./Counter.css"
import { CartContext } from "../../../Context/CartContext";
import { useContext, useState } from "react";

export const Counter = ({product}) => {
  const [contador, setContador] = useState(1);
  const {addToCart} = useContext(CartContext);
  

  const sumar = () =>{
    if(contador < product.stock){
    setContador(contador + 1)
    }
  };

  const restar = () =>{
    if(contador > 1){
    setContador(contador - 1)
  }else{
    alert ("La minima cantidad es 1")
  }};

  const agregarAlCarrito = () => {
    let productoCantidad = {...product, cantidad : contador}
    addToCart(productoCantidad);
  };  
     
  return (
    <div className="contador">
      <button className="btn-counter" onClick={restar} disabled={contador === 1}>-</button>
      <span className="contador-valor">{contador}</span>
      <button className="btn-counter" onClick={sumar}>+</button>

       <button onClick={agregarAlCarrito} className="add-product-btn">Agregar al carrito</button>
    </div>
  )
};
