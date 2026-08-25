import React from 'react'
import { Link } from 'react-router-dom'
import { FiShoppingCart } from 'react-icons/fi'
import products from "../data/products.js"
import Addtocart from './Addtocart.jsx'
function ProductPriview() {
  return (
   <section className='py-14 md:py-18 bg-white '>
    <div key={products.id} className='max-w-6xl mx-auto px-10 '>
    
        <div>
            <h2 className='mb-6 text-4xl md:text-5xl font-extrabold text-coffee-orange'>popular picks</h2>
        </div>
        {/* single card */}
        <div className=' grid gap-6  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
            {products.map((product) =>(
  <div key={product.id}
  className=' rounded-2xl p-4 border border-coffee-caramel shadow-md hover:shadow-xl bg-white overflow-hidden transition-all'>
            <div className='relative overflow-hidden h-48'>
              <Link>
              <img className=' rounded-2xl w-full h-full object-cover hover:scale-110 transition-transform duration-300'
              src={product.image} alt="" />
              </Link>  
            </div>
            <div key={product.id}
            className='p-4'>
                <h3 className='font-extrabold text-coffee-orange '>{product.name}</h3>
                <p className='text-sm text-gray-400 '>{product.description}</p>
                <div className='flex items-center justify-between'>
                    <span className='font-extrabold text-coffee-orange text-2xl'>${product.price}</span>
                  <Addtocart product={product}  />
                </div>
                <Link className='mt-3 block text-center bg-coffee-caramel px-3 py-2 rounded-2xl text-coffee-brown text-sm hover:bg-coffee-orange'
                to={`/product/${product.id}`}>
                view details
                </Link>
            </div>
        </div>
            ))}  
        </div>
    </div>
   </section>
  )
}

export default ProductPriview
