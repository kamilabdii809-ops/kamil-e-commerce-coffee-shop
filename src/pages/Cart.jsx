import React from 'react'
import { useCart } from '../context/CartContext'
import { FiPlus,FiMinus,FiTrash2} from 'react-icons/fi';
import { Link } from 'react-router-dom';

function Cart() {
    const {Cartitems, increaseQuantity, decreaseQuantity,removeFromcart, cartCount,cartTotal}= useCart();
  if(Cartitems.length===0){
    return(
      <div className='max-w-6x mx-auto px-4 py-14 '>
        <h1  className='text-4xl font-bold text-coffee-orange mx-auto px-4 py-2 text-center  mt-3'>Your cart is empty</h1>
        <Link to="/menu" className='mt-6 block px-6 py-3 border border-coffee-orange text-coffee-orange rounded-lg text-center hover:bg-amber-900'>
        Continue shopping
        </Link>
      </div>
    )
  }

  return (
   <div className='max-w-6x mx-auto px-4 py-14 '>
<h1 className='text-4xl font-bold text-coffee-orange mx-auto px-4 py-2 text-center mt-3'>shopping cart</h1>
  <div className='space-y-4 mb-8'>

  
  {
  Cartitems.map(item=>(
    <div key={item.id} className='flex items-center gap-4 p-4 border border-coffee-orange rounded-2xl bg-white'>
<img src={item.image} alt="item.name" className='w-24 h-24 object-cover rounded-lg' />
<div className='flex-1'>
    <h3 className='font-bold text-lg text-coffee-brown '>{item.name}</h3>
    <p className='text-sm text-gray-300'>{item.description}</p>
    <p className='text-coffee-orange font-bold mt-2 text-lg'>{item.price.toFixed(2)}</p>
</div>
<div  className="flex items-center gap-2 bg-gray-200 p-1 rounded-lg">
    
     <button onClick={()=>decreaseQuantity(item.id)}
      className='p-2 hover:bg-coffee-brown transition text-red-600 rounded-xl' >
    <FiMinus />
    </button>
    <span>
      {item.quantity}
    </span>
    <button onClick={()=>increaseQuantity(item.id)}
    className='p-2 hover:bg-coffee-brown transition text-black rounded-xl'>
    <FiPlus />
    </button>
    <button onClick={()=>removeFromcart(item.id)}
    className="p-2 hover:bg-red-400 transition text-black rounded-xl">
      <FiTrash2 />
    </button>
</div>

    </div>
  ))

  }
   </div>
<div className='bg-coffee-cream border border-coffee-orange rounded-lg p-6'>
  <div className='space-y-3 mb-4 '>
    <div  className='flex justify-between'>
<span className='text-gray-500'>Subtotal {cartCount}</span>
<span className='font-bold'>{cartTotal.toFixed(2)}</span>
    </div>
    <div className='flex justify-between'>
      <span className='text-gray-700'>shipping</span>
      <span className='font-bold'>$0.00</span>
    </div>
    <div className='flex justify-between border-t border-coffee-orange pt-6'>
      <span className='text-lg font-bold'>
        Total 
      </span>
      <span className='text-2xl font-bold text-coffee-orange'>${cartTotal.toFixed(2)}</span>
    </div>
  </div>
<Link to="/checkout" className='w-full block text-center px-6 py-3 bg-coffee-orange text-white font-bold rounded-lg hover:bg-coffee-brown transition'>
Proceed to checkout
 </Link>
 <Link to="/menu" className='w-full border border-coffee-orange block bg-white px-6 py-3 mt-4 rounded-lg text-center font-bold text-coffee-orange hover:bg-coffee-orange hover:text-white'>
 continue shopping
 </Link>

</div>

  </div>
  )
}

export default Cart
