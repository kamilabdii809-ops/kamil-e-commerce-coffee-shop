import React, {useState} from 'react'
import { FiMail, FiLock,FiEye,FiEyeOff } from "react-icons/fi"
import { Link ,useNavigate,useLocation} from 'react-router-dom'
import { useAuth } from "../context/Authcontext.jsx"
function SignIn(){  
  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");
  const[showPassword,setShowPassword]=useState(false);
  const {SignIn,error,loading}=useAuth();
  const navigate= useNavigate();
  const location =useLocation();
 
  function handleSubmit(e){
    e.preventDefault();
    const success= SignIn(email,password);
    if(success){
      setEmail("");
      setPassword("");
      setShowPassword(false);
     const redirectTo= location.state?.from?.pathname||"/";
     navigate(redirectTo, {replace:true})
    }
  }
  return (
    <div className='min-h-screen flex items-center justify-center h-screen bg-gradient-to-b from-coffee-cream to-white mb-4 px-4'>
      <div className='w-full max-w-md'>
        <div className='text-2xl font-bold text-coffee-brown mb-4 text-center'>
          <h1 className='text-2xl font-bold text-coffee-brown mb-4 text-center'>Welcome to the Sign In page☕</h1>
          <p className='text-gray-500 text-sm text-center'>
            Sign in to access your account and enjoy a personalized coffee experience. Enter your credentials below to get started.
          </p>
        </div>
        <div className='w-full rounded-lg shadow p-8 mt-4 border border-coffee-caramel'>
          <form  className='space-y-5' onSubmit={handleSubmit}>
            <div>
              <label className='block text-sm font-semibold text-coffee-brown mb-2'>Email address</label>
              <div className='relative'>
                <FiMail className='absolute left-3 top-3 text-coffee-brown' />
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
                  type={showPassword ? "text" : "password"}
                  name='password'
                  placeholder='Enter your password'
                  value={password}
                  onChange={(e)=>setPassword(e.target.value)}
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
             <div className='flex items-center justify-between text-sm'>
              <label className='flex items-center text-coffee-brown gap-2 cursor-pointer'>
             <input type="checkbox" className='mr-2 accent-coffee-caramel' />
             remember me
              </label>
              <Link className='text-coffee-orange hover:text-coffee-brown font-medium' to='/forgot-password'>
              forgot password?
              </Link>
              </div>

              {error && <p className='text-red-500 text-sm'>{error}</p>}
            <button
              type='submit'
              disabled={loading}
              className='w-full bg-coffee-orange text-white py-2 rounded-lg hover:bg-coffee-brown transition-colors duration-300'
            >
              {loading ? "Signing in..." : "Sign In"}
            </button>
          </form>
          <div className='mt-4 text-center text-sm text-gray-500'>
            <p>
              Don't have an account?
              <Link className='text-coffee-orange hover:text-coffee-brown font-medium px-3' to='/signup'>
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>    
  )
}

export default SignIn
