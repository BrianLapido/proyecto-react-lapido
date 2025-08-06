import {BrowserRouter, Routes, Route} from "react-router"
import { useState } from "react"
import { CartWidget } from "./components/pages/cart/CartWidget"
import { Footer } from "./components/layouts/footer/Footer"
import { ItemListContent } from "./components/pages/itemListContent/ItemListContent"
import { Navbar } from "./components/layouts/navbar/Navbar"
import { Nosotros } from "./components/pages/nosotros/Nosotros"
import { Header } from "./components/common/header/Header"
import { NotFound } from "./components/pages/notFound/NotFound"
import { ItemDetailContainer } from "./components/pages/itemDetailContainer/ItemDetailContainer"

function App() {
   const [contador, setContador] = useState(0);

  // Función para agregar al carrito
 const handleAddToCart = () => {
    setContador(contador + 1);
  };

  // Función para eliminar del carrito
  const handleremoveFromCart= () => {
    if(contador > 0){
      setContador(contador - 1);
  }; 
    }
    

  return (
    <>
      <BrowserRouter>
      <CartWidget contador={contador}/>
      <Header />
      <Navbar />
      <Routes>
        
      <Route path="/" element= {<ItemListContent onAddToCart= {handleAddToCart} 
      onRemoveFromCart={handleremoveFromCart} />} />
      <Route path= "/category/:categoria" element= {<ItemListContent onAddToCart= {handleAddToCart} 
      onRemoveFromCart={handleremoveFromCart}/>}/>
      <Route path= "/detail/:id" element= {<ItemDetailContainer />}/>
      <Route path="/category/nosotros" element= {<Nosotros />}/>
      <Route path="*" element= {<NotFound />}/>
      
      </Routes>
      </BrowserRouter>
      <Footer />
     
    </>
  )
}

export default App
