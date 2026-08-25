import React, { useState } from "react";
import { Link,NavLink,useNavigate } from "react-router-dom";
import {FiShoppingCart,FiMenu,FiX,FiUser} from "react-icons/fi";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/Authcontext.jsx";
function Navbar (){
const [open,setOpen]=useState(false);
const {cartCount}=useCart();
const {user,signOut}=useAuth();
const navigate=useNavigate();

const LinkClass=({isActive})=>
isActive ? " text-orange-500 font-semibold" : "text-grey-700 hover:text-orange-500"



 function handleSignOut(){
  signOut();
  setOpen(false);
  navigate("/");
 }
return(
<header className="bg-coffee-cream border-b border-coffee-orange sticky top-0 z-50">
 <div className="max-w-6xl mx-auto p-4 ">
    <div className="flex items-center justify-between">
<Link to="/" className="flex items-center gap-2">
<span className="text-3xl">☕</span>
<span className="font-bold text-lg text-coffee-brown">kamil Abdalhadi</span>
<span className="text-coffee-orange font-bold" >Coffe Shop!</span>
</Link>

<nav className="md:flex hidden gap-2">
<NavLink to="/" className={LinkClass}>
    Home
</NavLink>

<NavLink to="Menu"  className={LinkClass}>
    Menu
</NavLink>
</nav>
<div className="flex items-center gap-4">
    <Link to="/cart"
    className="text-coffee-brown relative  hover:text-coffee-orange">
     <FiShoppingCart size={24} />

     {cartCount > 0 && <span className="absolute -top-2 -right-2 h-5 px-1 rounded-lg bg-red-500 flex items-center justify-center">{cartCount}</span>

     }
</Link>
<div className="md:flex hidden gap-2 items-center">  
   
{
user ? (
<div>
 <Link to="/profile" title="user.name"
  className=" w-9 h-9 rounded-full font-bold overflow-hidden flex items-center justify-center bg-coffee-orange text-white hover:bg-coffee-brown">
 {
    user.profileImage ? 
        <img src={user.profileImage} alt="profile" className="w-full h-full rounded-full object-cover" />
    : (user.name?.[0].toUpperCase() || <FiUser />)
 }
 </Link>
</div>
):(
    <div className="space-x-3">
    <Link to="/signIn" onClick={()=>setOpen(false)}>
    <button
    className="px-3 py-1 border border-coffee-orange rounded-xl hover:bg-coffee-orange hover:text-white">
        Sign In
    </button>
    </Link>
    <Link to="/signup" onClick={()=>setOpen(false)}>
    <button
    className="px-4 py-1  text-coffee-orange border border-coffee-orange rounded-xl hover:bg-coffee-brown hover:text-white">
        Sign Up
    </button>
    </Link>
    </div>
)
}

    </div>


</div>
<button className="md:hidden flex justify-center text-coffee-brown hover:text-orange-400 "
onClick={()=> setOpen(!open)}>
    {
       open ? <FiX  size={24}/> : <FiMenu size={24}/>
    }
 
 
</button>
</div>

</div>

 {
    open && (
        <div className="md:hiodden">
<nav className=" flex flex-col p-4  gap-4">
<NavLink to="/" className={LinkClass} onClick={()=>setOpen(false)}>
    Home
</NavLink>

<NavLink to="/menu"  className={LinkClass} onClick={()=>setOpen(false)}>
    Menu
</NavLink>
{
user ? (
<div className="flex flex-col gap-2">
<Link className="flex items-center text-coffee-brown"
 to="/profile" onClick={()=>setOpen(false)}>
<span className="flex items-center gap-2  font-bold rounded-full bg-coffee-orange text-white px-3 py-1 hover:bg-coffee-brown overflow-hidden">
{
    user.profileImage ?
    <img src={user.profileImage}  className="w-4 h-4 rounded-full object-cover " />
    : (user.name?.[0].toUpperCase() || <FiUser size={20} />)
}
 
    </span>

  my profile
</Link>


</div>
): (

  <div className="space-x-3 px-1">
    <Link to="/signIn" onClick={()=>setOpen(false)}>
    <button
    className="px-3 py-1 border border-coffee-orange rounded-xl hover:bg-coffee-orange hover:text-white">
        Sign In
    </button>
    </Link>
    <Link to="/signup" onClick={()=>setOpen(false)}>
    <button
    className="px-3 py-1 border border-coffee-orange rounded-xl hover:bg-coffee-brown hover:text-white">
        Sign Up
    </button>
    </Link>
    </div>


)
}
</nav>
 </div>
    )
 }

</header>
);
}
export default Navbar;