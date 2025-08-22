import { createContext, useState, useEffect } from "react"
import Swal from "sweetalert2";
export const CartContext = createContext()
export const CartContextProvider = ({children}) => {
  const [cart, setCart] = useState(() => {
    try{
      const storedCart = localStorage.getItem("cart");
      return storedCart ? JSON.parse(storedCart) : [];
    }catch(error){
      console.error("Falla en el localStorage:", error);
      return [];
    }
  });
     
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify (cart))
  }, [cart]);
  
  const addToCart = (product) =>{
    setCart([...cart, product])
  };

  const clearCart = () =>{
    setCart([]);
  };

  const removeById = (id) =>{
    Swal.fire({
      title: '¿Eliminar producto?',
      text: "Esta acción no se puede deshacer",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#e63946',
      cancelButtonColor: '#6c757d',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if(result.isConfirmed){
        let arrayFiltrado = cart.filter(elemento => elemento.id !== id)
    setCart(arrayFiltrado)
     Swal.fire({
          title: 'Eliminado',
          text: 'El producto fue eliminado del carrito.',
          icon: 'success',
          timer: 1500,
          showConfirmButton: false
        });
      }
    })
    
  };

  const getTotal = () => {
    let total = cart.reduce((acc , elemento) =>{
      return acc + elemento.price * elemento.cantidad;
    } ,0)
      return total
    }
    
    const getTotalCantidad = () =>{
      let total =cart.reduce((acc, elemento) => {
      return acc + elemento.cantidad;
    }, 0)
    return total;
    }

  return (  
    <CartContext.Provider value={ 
      {cart,
      addToCart, 
      removeById,
      clearCart,
      getTotal,
      getTotalCantidad,
      } }>    
        {children}
    </CartContext.Provider>
  )
}
