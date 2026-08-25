import React from 'react'
import { Link } from 'react-router-dom'
import { FiHome,FiCoffee } from 'react-icons/fi'
function Notfound() {
  return (
    <div className='min-h-[70vh] flex items-center justify-center px-4'>
   <div className='text-center '>
    <FiCoffee size={64} className='text-coffee-orange mb-4 mx-auto'/>
    <h1 className='text-6xl font-extrabold text-coffee-orange mb-4'>4o4</h1>
    <h2 className='text-2xl font-bold text-coffee-brown'>page not found</h2>
    <div className='flex flex-col sm:flex-row gap-3 justify-center mt-3'>
           <Link to="/menu" className='px-6 py-3 bg-coffee-orange text-white font-bold rounded-lg hover:bg-coffee-brown flex items-center gap-2'>
                 Order more
           </Link>
           <Link to="/" className="px-6 py-3 bg-coffee-orange text-white font-bold rounded-lg hover:bg-coffee-brown"> < FiHome/>Back to home</Link>
         </div>
   </div>

    </div>
  )
}

export default Notfound
