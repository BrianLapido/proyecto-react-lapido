import { Link } from "react-router"
import { Logo } from "../logo/Logo"
import "./Navbar.css"
export const Navbar = () => {
  return (
    
    <nav>
      
      <div className="logo">
        
        <Logo />
      </div>
        <ul className="list">
        <Link to="/">Inicio</Link>
        <Link to="/category/electro">Electro</Link>
        <Link to="/category/hogar">Hogar</Link>
        <Link to="/category/niños">Niños</Link>
        <Link to="/category/indumentaria">Indumentaria</Link>
        <Link to="/category/nosotros">Sobre nosotros</Link>
        </ul>
    </nav>
    
  )
}
