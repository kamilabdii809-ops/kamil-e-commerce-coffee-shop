import React, { useMemo, useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import products from '../data/products'
import Addtocart from '../components/Addtocart'
import { Link } from 'react-router-dom'
function Menu() {
    const [searchQuery, setsearchQuery]= useState("");

    const filteredproduct= useMemo(()=>{
        return products.filter((product)=>
        product.name.toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase())
        );
    },
[searchQuery]

)
  return (
    <div className='bg-coffee-cream'>
   <div className='max-w-6xl mx-auto px-4 py-10 '>
    <div className='mb-12'>
        <h1 className='text-2xl font-bold text-coffee-orange'>Our Menu Page☕</h1>
        <p className='text-left text-gray-500 mb-2'>This is our primium selection of coffee.
            select your foverite!
        </p>
    </div>
<div className='mb-8 relative '>
<FiSearch  className='absolute left-4 top-2'/>
<input type="text" placeholder='search for coffee ...'
value={searchQuery}
onChange={(e)=>setsearchQuery(e.target.value)}
className='w-full pl-12 pr-4 border-2 border-coffee-orange rounded-xl focus:outline-none text-gray-500 ' size={20} />
</div>

<div className='grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
    {
filteredproduct.map((product)=>(
<div key={product.id} className='border border-coffee-orange rounded-2xl bg-white overflow-hidden'>
<img src={product.image} alt={product.name} className='w-full h-48 object-cover' />
<div className='items-center'>
    <h3 className='font-bold text-coffee-brown px-3'>{product.name}</h3>
    <p className='text-sm text-gray-500 mt-2  px-3'>{product.description}</p>
    <p className='text-lg text-coffee-orange font-bold px-3 '>${product.price}</p>
<div>
    <Addtocart product={product} />
    <Link className='mt-3 block text-center bg-coffee-caramel px-3 py-2 rounded-2xl text-coffee-brown text-sm hover:bg-coffee-orange'
                to={`/product/${product.id}`}>
                view details
                </Link>
</div>


</div>
</div>

))

    }
</div>

   </div>

    </div>
  )
}

export default Menu
