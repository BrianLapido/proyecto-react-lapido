import { useEffect, useState } from "react"
import Swal from "sweetalert2"
import { useParams } from "react-router"
import "./ItemDetailContainer.css"
import { Counter } from "../../common/counter/Counter"
import { ItemListContent } from "../itemListContent/ItemListContent"
import { db } from "../../../firebaseConfig"
import { collection, getDoc, doc } from "firebase/firestore"
export const ItemDetailContainer = () => {

    const [product, setProduct]= useState({})

    const {id} = useParams()

    useEffect(() =>{

        let productCollection = collection( db, "products" )
        let referenciaDoc = doc(productCollection , id)
        getDoc(referenciaDoc).then((res) =>
        setProduct({ id: res.id, ...res.data() })
         )
    }, [id]);

    /* console.log(product) */
    if(!product){
      Swal.fire({
      icon: "error",
      title: "Upss ⛔",
      text: "Producto no encontrado",
      });
      return <ItemListContent />
    };

  return (
    <div className="product-detail">

        <div className="product-img">
          <img src={product.imageUrl} alt={product.title} className="product-detail-img"/>
        </div>

        <div className="product-info">
          <h1 className="product-title">{product.title}</h1>
          <p className="product-price">Precio: ${product.price}</p>
          <p className="product-description"> <strong>Descripcion: </strong>{product.description}</p>
          <Counter product={product}/>
        </div>
    
    </div>
  )
}
