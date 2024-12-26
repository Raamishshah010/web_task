import React from 'react'

import { BiEnvelope,BiLockAlt } from "react-icons/bi";
import { Link, useNavigate } from 'react-router-dom';


const Login = () => {


    const navigate = useNavigate()
    const login = () =>{
        navigate('/home')
    }


  return (
    <>

    <div className='flex items-center justify-center gap-5'>
        

        {/* LOGIN FORM */}
        <div className='bg-theme h-screen w-full flex-1 p-12 pt-32 max-md:p-5'>
            <div>
                <h1 className='text-white text-4xl mb-2 font-bold'>Welcome Back</h1>
                <h5 className='text-white'>Signin to your account</h5>

                <div className='mt-12'>

                    <div className='flex items-center gap-2 bg-white py-3 px-4 text-paragpraph/85 rounded-full shadow-md mb-12'>
                        <span><BiEnvelope/></span>
                        <input type="text" className='bg-transparent w-full outline-none text-sm' placeholder='Email' />
                    </div>

                    <div className='flex items-center gap-2 bg-white py-3 px-4 text-paragpraph/85 rounded-full shadow-md mb-12'>
                        <span><BiLockAlt/></span>
                        <input type="password" className='bg-transparent w-full outline-none text-sm' placeholder='Password' />
                    </div>

                    <div className='mb-12'>
                        <button  className='bg-white inline-block px-12 py-1 text-theme rounded-full font-semibold shadow-lg' onClick={login}>Login</button>
                    </div>

                    
                    <div className='text-white'>
                        <p>Don't have an account? <Link to="/register" className='underline'>Join Now</Link></p>
                    </div>

                </div>
            </div>
        </div>

        {/* LOGIN IMAGE */}

        <div className='flex-1 relative max-md:hidden'>

            <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                <img src="/loginImg.svg" alt="login image" />
            </div>

        </div>
    </div>
      
    </>
  )
}

export default Login
