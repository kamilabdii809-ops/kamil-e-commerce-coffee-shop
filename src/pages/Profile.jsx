import react, { useState,useRef } from "react";
import {Navigate, useNavigate} from "react-router-dom";
import {FiUser,FiMail,FiPhone,FiMap,FiEdit2,FiSave,FiCamera,FiLogOut, FiMapPin, FiX} from "react-icons/fi";
import { useAuth } from "../context/Authcontext.jsx";

function Profile() {
    const [isEditing,setIsEditing]=useState(false);
    const [message,setMessage]=useState("");
    const {signOut,user,updateProfile}=useAuth();
    const navigate=useNavigate();

const [formData,setFormData]=useState({
name:user?.name || "",
phone:user?.phone || "",
address:user?.address || "",
 bio:user.bio?.bio||"",
profileImage:user?.profileImage || ""
})
const fileUpload=useRef(null);

if(!user){
    return <Navigate to="/signIn" replace />

}
 
 function handleChange(e){
    const {name,value}=e.target;
    setFormData((prev)=>({...prev,[name]:value}));
 }

 function handleImage(e){
    const file=e.target.files[0];
    if(!file) return;

    if(!file.type.startsWith("image/")){
        setMessage("Please select a valid image file.");
        return;}
      if(file.size>2*1024*1024){
        setMessage("imageis too large. please choose under 2MB")
        return
      }
 const reader = new FileReader()
        reader.onload= ()=>{
            setFormData((prev)=>({...prev, profileImage:reader.result}))
            setMessage("")
        }
            reader.readAsDataURL(file);
     
    }

   
function handleSave(e){
  e.preventDefault();
  if(!formData.name.trim()){
    setMessage("name required")
    return
  }
  updateProfile(formData)
  setIsEditing(false)
  setMessage("profile updated seccessfully")

}

 function handleCancel(){
setFormData(
{
     name:user?.name || "",
    Phone:user?.Phone || "",
    address:user?.address || "",
    bio:user.bio?.bio||"",
    profileImage:user?.profileImage || ""
}  
)
setMessage("");
setIsEditing(false)

 }

 function Logout(){
  signOut();
  navigate("/")
 }


  return (
    <div className="min-h-screen bg-linear-to-b from-coffee-cream to-white py-10 px-4">
  <div className="max-w-2xl mx-auto ">
    <h1 className="text-2xl font-bold text-coffee-orange text-center">my profile</h1>
    <div className="bg-white border border-coffee-caramel rounded-lg shadow-lg p-8">
      <div className="flex flex-col items-center mb-8">
       <div className="w-24 h-24 rounded-full bg-coffee-orange text-coffee-brown  flex justify-center items-center overflow-hidden font-bold mb-3 text-4xl">
        {
          formData.profileImage? <img  src={formData.profileImage} className=" w-full h-full object-cover "/>
           :(user.name?.[0]?.toUpperCase()||<FiUser />)
        }
      </div>
      <h1 className="text-2xl text-coffee-brown font-bold">{
        user.name
        }</h1>
        <p className="text-gray-500">{user.email}</p>
      </div>
      {message &&(
        <p className="text-center text-green-500 font-semibold mb-4">{message}</p>
      )}
      
      {
        isEditing ?(
  <form onSubmit={handleSave} className="space-y-4">
     <div>
      <label htmlFor=""className="block text-sm font-semibold  text-coffee-brown mb-3" > profile photo</label>
      <div className="flex items-center gap-4">
        <div className="w-16 h-16 rounded-full bg-coffee-orange flex items-center justify-center overflow-hidden text-2xl font-bold ">
          {
            formData.profileImage?<img src={formData.profileImage} className="w-full h-full object-cover"/> 
            :(user.name?.[0]?.toUpperCase() || <FiUser />)
          }
        </div>
        <button className=" p-2 flex items-center border border-coffee-orange text-coffee-brown rounded-lg font-semibold hover:bg-orange-600 cursor-pointer"
        onClick={()=>fileUpload.current.click()}          
         type="button"
        >
         <FiCamera /> choose photo
        </button>
        <input type="file"
        className="hidden"
        accept="image/*"
        ref={fileUpload}
        onChange={handleImage}
        />
      </div>
     </div>

     <div>
      <label className="block mb-2 font-semibold text-sm" >full name</label>
      <input type="text" name="name"
      value={formData.name}
      onChange={handleChange}
      className="w-full border border-coffee-caramel px-2 py-2 rounded-lg  focus:outline-none"
      />
     </div>
 <div>
      <label className="block mb-2 font-semibold text-sm" >Phone number</label>
      <input type="tel" name="Phone"
      value={formData.Phone}
      onChange={handleChange}
      placeholder="+251 --- --- ---"
      className="w-full border border-coffee-caramel px-2 py-2 rounded-lg  focus:outline-none"
      />
     </div>
      <div>
      <label className="block mb-2 font-semibold text-sm" >Adress</label>
      <textarea type="text" name="address"
      value={formData.address}
      onChange={handleChange}
      placeholder="country, city, kebele123..."
      className="w-full border border-coffee-caramel px-2 py-2 rounded-lg  focus:outline-none"
      />
     </div>
     <div>
      <label className="block mb-2 font-semibold text-sm" >Bio</label>
      <textarea type="text" name="bio"
      value={formData.bio}
      onChange={handleChange}
      placeholder="tell us a little about your self."
      className="w-full border border-coffee-caramel px-2 py-2 rounded-lg  focus:outline-none"
      />
     </div>
     <div className="flex gap-2">
      <button type="submit"
      className="flex flex-1 items-center justify-center gap-2 bg-coffee-orange text-white font-bold py-3 rounded-lg  px-1 cursor-pointer hover:bg-orange-700">
        <FiSave /> Save Change
      </button>
      <button type="button"
      onClick={handleCancel}
      className="flex flex-1 border border-coffee-orange items-center justify-center gap-2 text-coffee-brown font-bold py-3 rounded-lg  px-1 cursor-pointer hover:border-red-700">
        <FiX /> Cancel
      </button>
     </div>
  </form>
        ):(
          <div className="space-x-4">
            <div className=" flex items-center gap-2 mb-1">
              <FiMail />
              <span>{user.email}</span>
            </div>
             <div className=" flex items-center gap-2 mb-1 ">
              <FiPhone />
              <span>{user.Phone || "no phone number added yet!"}</span>
            </div>
             <div className=" flex items-center gap-2 mb-1 ">
              <FiMapPin />
              <span>{user.address|| "no address added yet!"}</span>
            </div>
             <div className="gap-2 ">
            <p className="text-sm font-bold text-coffee-brown mb-1">Bio</p>
            <p>{user.bio|| "No bio added yet!"}</p>
            </div>
            <button 
            onClick={ ()=>setIsEditing(true)}
            className="w-full flex items-center justify-center border border-coffee-orange gap-2 my-2 bg-coffee-orange text-white font-bold py-2 rounded-lg hover:bg-coffee-brown cursor-pointer "
            >
              <FiEdit2 /> Edit profile
            </button>
                <button 
            onClick={Logout}
            className="w-full flex items-center justify-center border border-red-500 gap-2 my-2 text-red-500 font-bold py-2 rounded-lg cursor-pointer "
            >
             Logout
               </button>
          </div>
        )

      }

    </div>
  </div>
  </div>
  )
}

export default Profile
