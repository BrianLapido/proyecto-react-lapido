import { Link } from "react-router"
import "./NotFound.css"
export const NotFound = () => {
  return    (
    <div className="not-found-container">
        <h1>Error 404 not found</h1>
        <p>Lo sentimos, la pagina no esta disponible</p>
        <Link to="/">Pagina de inicio</Link>
    </div>
  )
}
