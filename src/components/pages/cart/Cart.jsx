import { useContext } from "react"
import { CartContext } from "../../../Context/CartContext"
import { Link } from "react-router"
import "./Cart.css"
export const Cart = () => {
  
  const {cart, clearCart, removeById, getTotal} = useContext(CartContext)
  
  
  return (
    <div className="cart-container">
      <h1 className="cart-title">Productos de carrito</h1>

    {cart.length === 0 ? (
      <p className="cart-empty">No hay productos en el carrito</p>
    ) : (
    cart.map((product) =>{

  return(
    <div className="cart-item">
      <div className="cart-info">
        <h2 className="cart-product">{product.title}</h2>
        <span>${product.price}</span>
        <span className="cart-qty">x{product.cantidad} =</span>
        <span>${product.price * product.cantidad}</span>
        <button onClick={() => removeById(product.id)} 
          className="eliminate-product">Eliminar producto</button>
      </div>
    </div>)
      })
    )}


      {cart.length > 0 ? (
        <button onClick={clearCart} className="clear-cart-btn">🛒Eliminar carrito</button>
      ) : <h2 className="empty-cart-message"> Tu carrito esta vacio. Te recomendamos algunos de nuestros productos: <Link to= "/" className="empty-cart-link">Home</Link></h2>} 
      
      {cart.length >= 1 && (<h4 className="total-pagar"><span></span>El total a pagar es: <span>${getTotal()}</span></h4>)
       && <Link to= "/checkout" className="btn-finalizar-compra">Finalizar compra</Link>  
      }
    </div>
  )
}
