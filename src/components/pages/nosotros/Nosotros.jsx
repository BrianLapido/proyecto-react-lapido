import "./Nosotros.css"
import { Link } from "react-router"
export const Nosotros = () => {
  return (
    <div className="info">
      <h2>Bienvenido a Domexia</h2>
      <p>Con más de 15 años de experiencia en el sector, nos hemos consolidado como líderes en la venta de productos, ofreciendo un catálogo cuidadosamente seleccionado para satisfacer las necesidades de cada cliente</p>
      <p>Todos nuestros productos cuentan con un contrato de garantía que certifica su durabilidad y rendimiento</p>
      <p>Para brindárle la seguridad y el respaldo que usted merece.</p>
      <h3>En Domexia, su satisfacción es nuestra principal prioridad.</h3>
      <p> Nuestra sede central se encuentra en Av. Las Palmas 3258, Ciudad Jardín, desde donde gestionamos cada pedido con la máxima eficiencia y dedicación.</p>
    
    <button className="boton-inicio"><Link to="/">Pagina de inicio</Link></button>
    </div>
  )
}
