import "./CartWidget.css"
import { Contador } from "../../common/contador/Contador";
import { TiShoppingCart } from "react-icons/ti";
import { Link } from "react-router";
export const CartWidget = ({contador}) => {


  return (
    <Link className="add-cart" to= "/carrito">
    <div className="cart-widget">
      <h5>Carrito</h5>
      {contador > 0 && <Contador contador={contador} />}
      <span className="carrito"><TiShoppingCart size={24}/></span>
    </div>
    </Link>
  )
}
