import { useState } from "react"

import { FiMail, FiLock, FiUser, FiEye,FiEyeOff } from "react-icons/fi"
import { Link,useNavigate } from 'react-router-dom'
import { useAuth } from "../context/Authcontext"
function Signup(){  
const[name,setName]=useState("");
const[email,setEmail]=useState("");
const[password,setPassword]=useState("");
const[confirmPassword,setConfirmPassword]=useState("");
const[showPassword,setShowPassword]=useState(false);
const[showConfirmPassword,setShowConfirmPassword]=useState(false);

const {signup,error,loading}=useAuth();
const navigate=useNavigate();

function handleSubmit(e){
  e.preventDefault();
  if(password!==confirmPassword){
    alert("Passwords do not match");
    return;
  }

  const result=signup(email,password,name);
  if (result.success) {
    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setShowPassword(false);
    setShowConfirmPassword(false);
    navigate("/");
  }
}

  return (
    <div className='min-h-screen flex items-center justify-center h-screen bg-gradient-to-b from-coffee-cream to-white mb-16 mt-16 px-4 '>
      <div className='w-full max-w-md'>
        <div className='text-2xl font-bold text-coffee-brown mb-4 text-center'>
          <h1 className='text-2xl font-bold text-coffee-brown mb-4 text-center'>Join us on our Sign Up page☕</h1>
          <p className='text-gray-500 text-sm text-center'>
            Sign up to create your account and enjoy a personalized coffee experience. Fill in the details below to get started.
          </p>
        </div>


        <div className='w-full rounded-lg shadow p-8 mt-4 border border-coffee-caramel'>
          <form onSubmit={handleSubmit} className='space-y-5'>
               <div>
              <label className='block text-sm font-semibold text-coffee-brown mb-2'>Full Name</label>
              <div className='relative'>
                <FiUser className='absolute left-3 top-3 text-coffee-brown' />
                <input
                  type='text'
                  value={name}
                  onChange={(e)=>setName(e.target.value)}
                  name='name'
                  placeholder='Enter your full name'
                  className='w-full border border-coffee-caramel px-4 py-2 rounded-lg focus:outline-none focus:ring-1 focus:ring-coffee-orange pl-10'
                />
              </div>
            </div>

            <div>
              <label className='block text-sm font-semibold text-coffee-brown mb-2'>Email address</label>
              <div className='relative'>
                <FiUser className='absolute left-3 top-3 text-coffee-brown' />
                <input
                  type='email'
                  value={email}
                  onChange={(e)=>setEmail(e.target.value)}
                  name='email'
                  placeholder='Enter your email'
                  className='w-full border border-coffee-caramel px-4 py-2 rounded-lg focus:outline-none focus:ring-1 focus:ring-coffee-orange pl-10'
                />
              </div>
            </div>
            <div>
              <label className='block text-sm font-semibold text-coffee-brown mb-2'>Password</label>
              <div className='relative'>
                <FiLock className='absolute left-3 top-3 text-coffee-brown' />
                <input
                  value={password}
                  onChange={(e)=>setPassword(e.target.value)}
                  type={showPassword ? "text" : "password"}
                  name='password'
                  placeholder='Enter your password'
                  className='w-full border border-coffee-caramel px-4 py-2 rounded-lg focus:outline-none focus:ring-1 focus:ring-coffee-orange pl-10'
                />
                <button
                  type='button'
                  onClick={() => setShowPassword(!showPassword)}
                  className='absolute right-3 top-3 text-coffee-brown'
                >
                  {showPassword ? <FiEyeOff /> : <FiEye />}
                </button>
              </div>
            </div>
             <div>
              <label className='block text-sm font-semibold text-coffee-brown mb-2'>Confirm Password</label>
              <div className='relative'>
                <FiLock className='absolute left-3 top-3 text-coffee-brown' />
                <input
                  type='password'
                  name='confirmPassword'
                  placeholder='Confirm your password'
                  value={confirmPassword}
                  onChange={(e)=>setConfirmPassword(e.target.value)}
                  className='w-full border border-coffee-caramel px-4 py-2 rounded-lg focus:outline-none focus:ring-1 focus:ring-coffee-orange pl-10'
                />
                <button
                  type='button'
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className='absolute right-3 top-3 text-coffee-brown'
                >
                  {showConfirmPassword ? <FiEyeOff /> : <FiEye />}
                </button> 
              </div>
            </div>
            {error && <p className='text-red-500 text-sm'>{error}</p>}
            <button
              type='submit'
              disabled={loading}
              className='w-full bg-coffee-orange text-white py-2 rounded-lg hover:bg-coffee-brown transition-colors duration-300'
            >
             {loading ? "Signing up..." : "Sign Up"}
            </button>
          </form>
<div className='mt-4 text-center text-sm text-gray-500'>
            <p>
              Already have an account? <Link to='/signin' className='text-coffee-orange hover:underline'>
               signin
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup


