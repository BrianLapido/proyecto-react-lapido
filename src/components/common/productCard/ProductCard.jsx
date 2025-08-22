import "./ProductCard.css"
import { Link } from "react-router";


export const ProductCard = ({product}) => {
 
    const {title, description, price, id, stock, imageUrl} = product;
  return (
    <div className="product-card">
            <h3>{title}</h3>
            <img src={imageUrl} alt={title} className="product-image"/>
            <p className="product-description"><strong>Descripcion:</strong> {description}</p>
            <p className="product-price"><strong>Precio:</strong> ${price}</p>
            <p className="product-stock"><strong>Stock:</strong> {stock}</p>
           <Link to= {`/detail/${id}`} className="btn-detail">Ver detalles</Link>
    </div>
  )
}
