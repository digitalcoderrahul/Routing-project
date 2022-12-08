import React, { useState } from 'react'
import { useEffect} from 'react'
import { useNavigate } from 'react-router-dom'



const Login = () => {

    const [email ,setEmail]=useState();
    const [pass, setPass] =useState();
    const [btn ,setBtn]=useState();

    // const Submit =()=>{
    //     let item={email ,pass}
    //     setBtn (item)
    //     console.log(item)
    // }

    const login =()=>{
        localStorage.setItem('login',true)
        navigate('/a')
        let item={email ,pass}
        setBtn (item)
        console.log(item)
    }
    
    const navigate=useNavigate()
    useEffect(()=>{
        let login=localStorage.getItem('login')
        if(login==='true'){
            navigate('/a')
        }
        })

  return (
    <>
    {/* <div className='flex flex-col gap-3 mt-3'>
        <input className='outline-none border-2' type="email" name='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <input  className='outline-none border-2' type="password" name='pass' value={pass} onChange={(e)=>setPass(e .target.value)} />
        <button className='bg-black text-white' onClick={login}>LOGIN</button>
    </div> */}



<div className="bg-blue-500   ">
        <div className="flex justify-center container mx-auto my-auto w-screen h-screen items-center flex-col">
            <div className="text-slate-100 items-center">
               
            </div>

            <div className="w-full md:w-3/4  lg:w-1/2 flex flex-col items-center bg-slate-50 rounded-md pt-12">
                
                <div className="w-3/4 mb-6">
                <input className='w-full py-4 px-8 bg-slate-200 placeholder:font-semibold rounded hover:ring-1 hover:ring-gray-600 outline-slate-500  border-solid border-2 border-slate-300' type="email" name='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>

                   
                </div>
               
                <div className="w-3/4 mb-6">
        <input  className='w-full py-4 px-8 bg-slate-200 placeholder:font-semibold rounded hover:ring-1 hover:ring-gray-600 outline-slate-500  border-solid border-2 border-slate-300' type="password" name='pass' value={pass} onChange={(e)=>setPass(e .target.value)} />
                   
                </div>
                
                <div className="w-3/4 mb-12">
                <button className='py-4 bg-blue-500 w-full rounded text-blue-50 font-bold hover:bg-blue-700' onClick={login}>LOGIN</button>
                </div>
            </div>
            <div className="flex justify-center container mx-auto mt-6 text-slate-100 text-sm">
                <div className="flex flex-col sm:flex-row  justify-between md:w-1/2 items-center">
                   
                </div>
            </div>
        </div>
        
        
    </div>
    </>
  )
  
}

export default Login