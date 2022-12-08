import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex gap-4 justify-center ">
      {/* {
         localStorage.getItem('login')? 
           <>  */}
      <NavLink
        to="/login"
        style={({isActive})=>{return{backgroundColour:isActive?'red':'blue'}}}
        className="p-4 border-b-2 border-blue-500  border-opacity-0 hover:border-opacity-100 hover:text-blue-500  duration-200 cursor-pointer active"
      >
        Login
      </NavLink>

      {/* </>: 
             <>  */}

      <Link
        to="/a"
        className="text-lg font-bold p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer active"
      >
        A
      </Link>
      <Link
        to="/b"
        className=" text-lg font-bold p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer active"
      >
        B
      </Link>
      <Link
        to="/c"
        className=" text-lg font-bold p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer active"
      >
        C
      </Link>

      {/*            
            </> 
} */}
    </div>
  );
};

export default Navbar;
