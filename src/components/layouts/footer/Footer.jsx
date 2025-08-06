import "./Footer.css"

export const Footer = () => {
 


  return (
    <div className="form container-flex">
      <h2>Deje su consulta y responderemos a la brevedad</h2>
      <label htmlFor="formControlInput">Email</label>
      <input type="email" name="email" id="formControlInput"/>

      <label htmlFor="formControlInputNum">Numero</label>
      <input type="tel" name="num" id="formControlInputNum"/>

      <label htmlFor="textArea">Reclamos</label>
      <textarea name="textArea" id="textArea"></textarea>

      <input type="submit" id="enviar" value="Enviar" />
      
    </div>
    
  )
}
