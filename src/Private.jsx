import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const Private = () => {
  let login=localStorage.getItem('login')
  // if(login!== null) return true

// let login=localStorage.getItem('login')
    // let isLoggedin=false;
    // if(isLoggedin){
    //         return  <Outlet/> }
    // else{
    //     return <Navigate to={"/login"}/>
    // }

    // return isLoggedin()?  <Outlet/> :<Navigate to={"/login"} />

    return login!== null?  <Outlet/> :<Navigate to={"/login"} />
}

export default Private