import "./CartWidget.css"
import { Contador } from "../contador/Contador";
import { TiShoppingCart } from "react-icons/ti";

export const CartWidget = () => {


  return (
    <div>
     
    <div className="carrito">
    <span><TiShoppingCart size={24} color="green"/></span> 
    </div>

    <div className="contador">
      <h5>Productos agregados: </h5>
      <Contador />
    </div>
        
      
    </div>
  )
}
