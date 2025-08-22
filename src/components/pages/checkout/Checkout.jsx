import {  useContext, useState } from "react"
import "./Checkout.css"
import { db } from "../../../firebaseConfig"
import { addDoc, collection, doc, updateDoc } from "firebase/firestore"
import { CartContext } from "../../../Context/CartContext"
import { Link } from "react-router"
export const Checkout = () => {

   const {cart, getTotal, clearCart} = useContext(CartContext)

   const [orderId, setOrderId] = useState(null)

    const handleSubmit = (evento) => {
      evento.preventDefault()
          console.log(user)
          let total = getTotal()
          let purchaseObjet = {
            buyer: user,
            items: cart,
            total: total,
            date: new Date()
          };

          let ordersCollections = collection(db , "orders");
          let res = addDoc( ordersCollections , purchaseObjet);
          res
          .then((res) => {
            setOrderId(res.id)
            clearCart()
          })
          .catch(error => console.error("Error al finalizar la compra:", error))
       
        let productsCollection = collection (db , "products")
          purchaseObjet.items.forEach((elemento) =>{
          let document = doc(productsCollection, elemento.id);
          updateDoc(document, {stock:elemento.stock - elemento.cantidad})
        });
      };

        const handleChange = (evento) =>{ 
        setUser({...user, [evento.target.name] : evento.target.value});
            }

    const [user, setUser] = useState({
        nombre: "",
        telefono: "",
        email: ""
        });

  return (
    <div className="checkout-container">
        {
          orderId ? 
          (<>
            <h1 className="mensaje-gracias">Gracias por tu compra!🎉</h1>
            <h2 className="order-info">Su numero de orden es <span className="order-id">{orderId}</span> por reclamos o devoluciones</h2>
            <div className="back-home-button-container">
              <Link to="/" className="btn-back-home">Volver al inicio</Link>
            </div>
          </>) : 
          (<>
          <h1>Ingrese sus datos para finalizar con la compra</h1>

        <form className="checkout-form" onSubmit={handleSubmit}>
            <input type="text" 
            placeholder="Nombre" 
            name="nombre"
            onChange={handleChange}></input>
            
            <input type="number" 
            placeholder="Telefono" 
            name="telefono"
            onChange={handleChange}></input>
            
            <input type="email" 
            placeholder="Email" 
            name="email"
            onChange={handleChange}></input>
            
            <button>comprar</button>
        </form>
        </>)
        }
    </div>
  )
}
