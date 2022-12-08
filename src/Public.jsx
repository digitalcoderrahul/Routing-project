import React from 'react'
import { Navigate, Outlet,  } from 'react-router-dom'


const Public = () => {
    let login=localStorage.getItem('login')

    return login=== null?  <Outlet/> : <Navigate to={"/a"} /> 
}

export default Public