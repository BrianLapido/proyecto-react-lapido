import { productDigital } from "../../../productDigital"
import "./ItemListContent.css"
import { Portada } from "../../common/portada/Portada"
import { useParams } from "react-router"
import { useEffect, useState } from "react"
import { ProductCard } from "../../common/productCard/ProductCard"


export const ItemListContent = () => {
  const [items, setItems] = useState([]);
  const {categoria}= useParams()
  console.log(categoria);

useEffect(() => {

  const getProducts = new Promise((resolve) =>{
    setTimeout(() => {
      if(categoria){
        const productosFiltrados = productDigital.filter((producto) => producto.category === categoria
      );
      resolve(productosFiltrados);
      } else{
        resolve(productDigital)
      }
    }, 2000);
  });
    getProducts.then((res) =>{
      setItems(res);
    })
  }, [categoria]);

  return (
  <div className="flex-container">
    <Portada />
      <h2>Promociones del dia del niño</h2>
      <h3>Validas hasta noviembre del 2025</h3>


<section className="products">

    {items.length > 0 ? (
      items.map((product) =>
      <ProductCard key={product.id} product={product} />
    )) : (
    <p className="loading">Cargando productos...</p>
  )}
  </section>
  </div> 
);
};
    
 
