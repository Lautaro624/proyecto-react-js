import React from 'react'
import { Link } from 'react-router-dom';
import { useCartContext } from '../context/CartContext';
import ItemCart from '../ItemCart';

const Cart = () => {
  const [cart , totalPrice] = useCartContext()

  if (cart.lenght === 0) {
    return (
      
        <p> No hay elemnetos en el carrito</p>
       
      
      
    )

  }
  
    return (
      <>
        {
          cart.map(product => <ItemCart key={product.id} product= {product} />)
        }

        <p> Total: {totalPrice()}</p>
      </>    
    
    )

}

export default Cart;