import { useEffect, useState } from "react"
import { productDigital } from "../../../productDigital"
import { useParams } from "react-router"
import "./ItemDetailContainer.css"
export const ItemDetailContainer = () => {

    const [product, setProduct]= useState({})

    const {id} = useParams()

    useEffect(() =>{
        const element = productDigital.find((product) => product.id == id);
        setProduct(element)
    }, [id]);

    if(!product){
      return <div>Producto no encontrado.</div>
    }
  return (
    <div className="product-detail">

        <div className="product-img">
          <img src={product.imageUrl} alt={product.title} className="product-detail-img"/>
        </div>

        <div className="product-info">
          <h1 className="product-title">{product.title}</h1>
        <p className="product-price">Precio: ${product.price}</p>
        <p className="product-description"> <strong>Descripcion: </strong>{product.description}</p>
        <button className="add-product-btn">Agregar al carrito</button>
        </div>
    
    </div>
  )
}
