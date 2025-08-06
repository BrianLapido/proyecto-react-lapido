import "./Logo.css"
import { Link } from "react-router"
export const Logo = () => {
  return (
    <div className="logo">
      <Link to="/" ><img src="https://res.cloudinary.com/dglpzels3/image/upload/v1754077645/Gemini_Generated_Image_ge2ra8ge2ra8ge2r_wgi8eu.png" alt="logo" />
</Link>
    </div>
  )
}
