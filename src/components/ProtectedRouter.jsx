import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import{useAuth} from "../context/Authcontext.jsx"

function ProtectedRouter({children}) {
    const {user} = useAuth();
    const location = useLocation();

if(!user){
        return <Navigate to="/SignIn"  replace  state={{from: location}}/>
}

  return children;
}

export default ProtectedRouter
