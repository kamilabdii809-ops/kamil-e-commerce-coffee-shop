import { useState } from 'react'

import { useCart } from '../context/CartContext'
import { FiMapPin ,FiMail, FiPhone, FiLoader,FiCheckCircle} from 'react-icons/fi';
import { Link } from 'react-router-dom';
Link
function CheckOut() {

const {cartCount,Cartitems,clearCart} =useCart();
const [orderPlaced, setOrderPlaced] = useState(false)


const[formData, setFormData] = useState({
    address: '',
    email: '',
    phone: ''
})
const [errors, setErrors] = useState("");
const [loading, setLoading] = useState(false);

if(orderPlaced){
    return(
        <div className='max-w-lg mx-auto px-4 py-20 text-center'>
         <FiCheckCircle  size={72} className='mx-auto text-green-500 mb-4'/>
         <h2 className='text-3xl font-bold text-coffee-orange mb-2 '>Order placed seccessfully!</h2>
         <p className='text-gray-800 mb-2'>Thank you for your order! your order is on the way.</p>

         <div className='flex flex-col sm:flex-row gap-3 justify-center'>
           <Link to="/menu" className='px-6 py-3 bg-coffee-orange text-white font-bold rounded-lg hover:bg-coffee-brown'>
                 Order more
           </Link>
           <Link to="/" className="px-6 py-3 bg-coffee-orange text-white font-bold rounded-lg hover:bg-coffee-brown">Back to home</Link>
         </div>
        </div>
    )
}

const subtotal = Cartitems.reduce((sum, item) => sum + item.price * item.quantity, 0);
const shipping= subtotal >= 50 ? 0 : 5; // Example shipping cost
const tax = subtotal * 0.1; // Example tax rate of 10%
const total = subtotal + shipping + tax;

function hundleChange(e){
    const {name, value} = e.target;
    setFormData((prevData) => ({...prevData, [name]: value }))
if (errors[name]) {
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  }
};
function validateForm() {
    if (!formData.address.trim()) {
    return "Address is required.";
  }
    if (!formData.email.trim()) {
    return "Email is required.";
  } 
  if (!formData.phone.trim()) {
    return "Phone number is required.";
  }
  if (!/^\d{10}$/.test(formData.phone)) {
    return "Phone number must be 10 digits.";
  }
  return "";
    }

function hundleplaceOrder(e){
    const validationError = validateForm();
    if (validationError) {
        setErrors(validationError);
        return;
      }
    setLoading(true);
    setTimeout(() => {
        setLoading(false);
        clearCart();
       setOrderPlaced(true);
        setFormData({
            address: '',
            email: '',
            phone: ''
        },2000);
    })}


  return (
    <div className='bg-linear-to-b from-coffee-cream to-white py-12 '>
        <div className='max-w-6xl mx-auto px-4 '>
            <h1 className='text-4xl font-bold text-coffee-orange mb-2 '>Checkout</h1>
        <div className='grid md:grid-cols-[70%_30%] gap-8 '>
         <div className='md:grid-cols-2 space-y-6 '>
            <h2 className='text-2xl font-bold mb-2 '>Order items{}</h2>
            <div className='space-y-4'>
                {
Cartitems.map((item)=>(
    <div key={item.id} className='flex flex-1 justify-between gap-4 border-b pb-3 border-gray-400'>
        <div className='flex items-center gap-4 flex-1'>
        {item.image && ( 
            <img src={item.image} 
            alt={item.name} 
            className='w-16 h-16 rounded-lg object-cover'
            />       
        )}
        <div>
            <p className='font-semibold text-coffee-brown '>{item.name}</p>
             <p className='text-sm text-gray-600'>${item.price.toFixed(2)} x {item.quantity}</p>
        </div>
        </div>
        <p className='font-bold text-coffee-brown'>
            ${( item.price*item.quantity).toFixed(2)}
        </p>
    </div>
))
                }
            </div>
                     <div className='bg-white rounded-lg border border-coffee-caramel shadow p-8'>
            <h2 className='text-2xl text-coffee-brown flex items-center gap-2 mb-2 font-semibold'>
             <FiMapPin /> shipping
            </h2>
            <div className='space-y-2'>
                <div>
                    <label className='block font-semibold text-coffee-brown mb-2  '>shipping address </label>
                    <textarea
                     name="address" value={formData.address} onChange={hundleChange}
                      type='text'
                      placeholder='123 Main street, city, state 12345 '
                      rows={3}
                      className=' text-sm border border-coffee-caramel px-4 py-6 rounded-lg focus:outline-none w-full'
                      
                      ></textarea>
                      <div>
                        <label className='text-sm font-semibold text-coffee-brown flex items-center gap-2 mb-2 '>
                            <FiMail  size={24}/>Email
                        </label>
                        <input type="email"
                        name="email"
                        value={formData.email}
                        onChange={hundleChange}
                        placeholder='Email'
                        className='focus:outline-none w-full border border-coffee-caramel px-4 py-2 rounded-lg text-sm '
                        />
                      </div>

                  <div>
                        <label className='text-sm font-semibold text-coffee-brown flex items-center gap-2 mb-2 '>
                            <FiPhone  size={24}/>phone number
                        </label>
                        <input type="tel"
                        name="phone" 
                        value={formData.phone}
                        onChange={hundleChange}
                        placeholder='(+251 444 567 2342)'
                        className='focus:outline-none w-full border border-coffee-caramel px-4 py-2 rounded-lg text-sm '
                        />
                      </div>
                 {
errors && (
    <p className='text-red-500 text-smmt-2'>{errors}</p>
)
                 }

                      
                </div>
            </div>
         </div>

         </div>

<div>
    <div className='bg-white border border-coffee-orange rounded-lg p-6 sticky top-20'>
        <h2 className='text-2xl text-coffee-brown font-semiboldmb-4  '>Order summary</h2>
    
    <div className='flex justify-between gap-2 mb-2 text-sm text-gray-500'>
        <span>subtotal </span>
        <span>${subtotal.toFixed(2)}</span>
    </div>
    <div className='flex justify-between gap-2 mb-2 text-sm  text-gray-500'>
            <span>shipping</span>
            <span>{shipping===0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
    </div>
    <div className='flex justify-between gap-2 mb-2 text-sm  text-gray-500'>
        <span>Tax</span>
        <span>${tax.toFixed(2)}</span>
    </div>
    <div className='flex justify-between gap-2 mb-2 text-2xl font-bold text-coffee-brown border-t border-gray-300 pt-2'>
        <span>Total</span>
        <span className='text-2xl font-bold text-coffee-orange'>${total.toFixed(2)}</span>
    </div>
    <button
    onClick={hundleplaceOrder}
    disabled={loading}
    className=' w-full bg-green-500 hover:bg-green-700 text-black font-bold py-2 px-4 rounded-lg'>
    {
loading ? <span className='flex items-center justify-center gap-2'>
    <FiLoader className='animate-spin mr-2 inline-block' />
    Placing order...</span> : 'Place Order'
    }
    </button>
    <Link to="/menu" className='block text-center mt-4  text-sm border border-coffee-orange hover:bg-coffee-orange hover:text-white text-coffee-orange font-semibold py-2 px-4 rounded-lg'
    >continue shopping</Link>
    </div>
</div>

        </div>
        
        </div>

    </div>
  )
}

export default CheckOut
