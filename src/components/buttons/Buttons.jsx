import "./Buttons.css"

export const Buttons = ( {texto, funcionClick} ) => {
  const isDelete = texto === "Eliminar carrito";
  return (
    <div>

        <button style={{
          fontSize: "medium",
          padding: "10px 20px",
          backgroundColor: isDelete ? "red" : "#4CAF50",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          margin: "10px",
        
        }}
         onClick={funcionClick}
        > {texto}
          </button>

      </div>
  )
}
