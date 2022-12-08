import React from 'react'
import { Link, NavLink } from 'react-router-dom'


const A = () => {
  return (
    <>
    
    
<div className="relative">
    <div className="sticky top-0 h-screen flex flex-col items-center justify-center bg-green-400">
        <NavLink to="/a" className="text-4xl">A</NavLink>
        <p>Scroll Down</p>
    </div>
    <div className="sticky top-0 h-screen flex flex-col items-center justify-center bg-indigo-600 text-white">
        <NavLink to="/b"  className="text-4xl">B</NavLink>
        <p>Scroll Down</p>
    </div>
    <div className="sticky top-0 h-screen flex flex-col items-center justify-center bg-purple-600 text-white">
        <NavLink to="/c" className="text-4xl">C</NavLink>
        <p>Scroll Down</p>
    </div>
    
</div>
    </>
  )
}

export default A