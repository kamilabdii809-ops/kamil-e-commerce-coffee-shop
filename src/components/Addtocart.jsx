import React from 'react'
import { useCart } from '../context/CartContext.jsx'

function Addtocart({product}) {

const {addTocart}=useCart();
function hundleclick(){
    addTocart(product)
}

  return (
   <button onClick={hundleclick}
   className='bg-coffee-orange px-2 py-1 m-2 text-white rounded-xl text-sm hover:bg-coffee-brown gap-4' >
    Add to cart
   </button>
  )
}

export default Addtocart;
