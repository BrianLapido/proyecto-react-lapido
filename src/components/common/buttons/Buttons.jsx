import "./Buttons.css"

export const Buttons = ( {texto, funcionClick} ) => {
  const isDelete = texto === "Eliminar";
  return (
    <div>

        <button style={{

          backgroundColor: isDelete ? "#880808" : "#00913f",
         
        }}
         onClick={funcionClick}
        > {texto}
          </button>

      </div>
  )
}
