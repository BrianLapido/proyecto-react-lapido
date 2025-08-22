import {BrowserRouter, Routes, Route} from "react-router"
import { CartWidget } from "./components/pages/cartWidget/CartWidget"
import { Footer } from "./components/layouts/footer/Footer"
import { ItemListContent } from "./components/pages/itemListContent/ItemListContent"
import { Navbar } from "./components/layouts/navbar/Navbar"
import { Nosotros } from "./components/pages/nosotros/Nosotros"
import { Header } from "./components/common/header/Header"
import { NotFound } from "./components/pages/notFound/NotFound"
import { ItemDetailContainer } from "./components/pages/itemDetailContainer/ItemDetailContainer"
import { CartContextProvider } from "./Context/CartContext"
import { Cart } from "./components/pages/cart/Cart"
import { Checkout } from "./components/pages/checkout/Checkout"
function App() {

  return (
    <>
<BrowserRouter>
      
      <Header />
      <Navbar />
  <CartContextProvider>
    
      <CartWidget />
    <Routes>
      <Route path="/" element= {<ItemListContent />} />
      <Route path= "/category/:categoria" element = { <ItemListContent />} />
      <Route path= "/detail/:id" element= {<ItemDetailContainer />}/>
      <Route path="/category/nosotros" element= {<Nosotros />}/>
      <Route path="/carrito" element= {<Cart />} />
      <Route path="/checkout" element= {<Checkout />} />
      <Route path="*" element= {<NotFound />}/>
    </Routes>

  </CartContextProvider>
      <Footer />
</BrowserRouter>
    </>
  )
}

export default App
