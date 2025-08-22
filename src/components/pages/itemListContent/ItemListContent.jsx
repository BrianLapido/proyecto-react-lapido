
import "./ItemListContent.css"
import { Portada } from "../../common/portada/Portada"
import { useParams } from "react-router"
import { useEffect, useState } from "react"
import { db } from "../../../firebaseConfig"
import { collection, getDocs, query, where } from "firebase/firestore"
import { ProductCard } from "../../common/productCard/ProductCard"

export const ItemListContent = () => {
  const [items, setItems] = useState([]);
  const {categoria}= useParams()
  

useEffect(() => {
    let productsCollection = collection( db, "products" )
    let consulta = productsCollection
    if(categoria){
          let filtrado = query( productsCollection , where( "category", "==" , categoria))
          consulta = filtrado
    }
    

    getDocs(consulta).then(res => {
     let arrayDeElementos = res.docs.map((elemento) =>{
      return {id: elemento.id, ...elemento.data()}
     });
     setItems(arrayDeElementos);
    })
    }, [categoria]);

  return (
  <div className="flex-container">
    <Portada />
      <h2>Promociones del dia del niño</h2>
      <h4>Validas hasta noviembre del 2025</h4>

    <section className="products">

      {items.length > 0 ?
        items.map((product) => (
        <div key={product.id} className="product-card">
        <ProductCard key={product.id} product={product} />
        </div>
        )
        ) : (<p className="loading">Cargando productos...</p>
      )}
    
    </section>
  </div> 
)
};
    
 
