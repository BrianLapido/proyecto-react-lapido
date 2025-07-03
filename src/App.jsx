import { Header } from "./components/header/Header"
import { CartWidget } from "./components/cartWidget/CartWidget"
import { Footer } from "./components/footer/Footer"
import { ItemListContent } from "./components/itemListContent/ItemListContent"
function App() {
  

  return (
    <>
      <div><Header /></div>
      <div><CartWidget /></div>
      <div><ItemListContent /></div>
      <div><Footer /></div>
      
    </>
  )
}

export default App
