import React from 'react'
import { Link } from 'react-router-dom'
export default function SignIn() {
  return (
    <div className='p-3 max-w-lg mx-auto h-screen mt-32'> 
      <h1 className='text-3xl text-center font-semibold my-7'>Sign In</h1>
      <form className='flex flex-col gap-4'>
        <input type='email' placeholder='email' className='border p-3 rounded-lg' id='email'/>
        <input type='password' placeholder='password' className='border p-3 rounded-lg' id='password'/>
        <button className='bg-orange-500 text-white p-3 rounded-lg uppercase hover:opacity-90 disabled:opacity-80'>Sign In</button>
      </form>
      <div className='flex gap-2 mt-5'>
        <p>Don't have an account?</p>
        <Link to={'/sign-up'}>
        <span className='text-blue-700'>sign up</span>
        </Link>
      </div>
    </div>
  )
}
