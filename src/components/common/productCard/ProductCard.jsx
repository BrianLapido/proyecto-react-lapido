import "./ProductCard.css"
import { Link } from "react-router"
import { Buttons } from "../buttons/Buttons";

export const ProductCard = ({product, onRemoveFromCart, onAddToCart}) => {

    const {title, description, price, stock, id, imageUrl} = product;
  return (
    <div>
        <div key={product.id} className="product-card">
            <h3>{title}</h3>
            <img src={imageUrl} alt={title} className="product-image"/>
            <p className="product-description"><strong>Descripcion:</strong> {description}</p>
            <p className="product-price"><strong>Precio:</strong> ${price.toLocaleString('es-AR')}</p>
            <p className="product-stock"><strong>Stock:</strong> {stock}</p>
            <Link to = {`/detail/${id}`} className="btn-detail">Ver detalles</Link>


            <Buttons  texto = {"Agregar al carrito"} funcionClick={() => {onAddToCart()}}
            />
      
            <Buttons texto = {"Eliminar"} funcionClick={() => onRemoveFromCart()}/>
          </div>
    </div>
  )
}
