import "./CartWidget.css"
import { TiShoppingCart } from "react-icons/ti";
import { Link } from "react-router";
import { useContext } from "react";
import { CartContext } from "../../../Context/CartContext";
export const CartWidget = () => {
  
  const {getTotalCantidad} = useContext(CartContext);
  let total = getTotalCantidad();

  return (
    <Link className="add-cart" to= "/carrito">
    <div className="cart-widget">
      <h5>{total}</h5>
      <span className="carrito"><TiShoppingCart size={24}/></span>
    </div>
    </Link>
  )
}
