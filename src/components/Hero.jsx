import React from 'react'
import { Link } from 'react-router-dom'
import HeroImage from "./../assets/jimma.png"
function Hero() {
  return ( <>
  <section className='bg-linear-to-b from-coffee-cream to-white'>
    <div className='max-w-6xl mx-auto py-16 px-8 grid md:grid-cols-2 items-center gap-8'>
        <div>
            <p className='bg-coffee-orange inline-flex items-center px-4 py-2 rounded-full text-sm'>☕ Fresh and fast order</p>
            <h1 className='mt-4 text-4xl font-extrabold text-coffee-brown tracking-tight md:text-5xl'>Fresh coffee from {" "} 
                <span className='text-coffee-orange'>Kamil Abdalhadi </span>coffee shop </h1>
 <p className='mt-4'>order your foverite coffee snacks online.
 simple menu, quick checkout,smooth ordering experiance</p> 
 <div className='flex mt-4 gap-4 items-center'>
    <Link to="/menu"
     className='bg-coffee-orange py-1 px-4 rounded-xl hover:bg-coffee-brown'>Explore Menu</Link>
    <Link to="/cart"
    className='  border border-amber-950 py-1 px-4 rounded-xl text-coffee-brown hover:text-coffee-orange '>view cart</Link>
 </div>
        </div>
        <div>
            <img src={HeroImage} alt="heroo" className='w-full' />
        </div>
    </div>
   
    
  </section>
   
  </>
  )
}

export default Hero

