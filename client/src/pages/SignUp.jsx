import React, { useState } from 'react';
import {Link} from 'react-router-dom';

export default function SignUp() {
  const [formData , setFormData]=useState({})
  const handleChange = (e) =>{
    setFormData(
      {
        ...formData,
        [e.target.id]:e.target.value,
      }
    );
  };
  const handleSubmit = async(e)=>{
    e.preventDefault();
    const res = await fetch('/api/auth/signup',
      {
        method: 'Post',
        headers:{
          'Content-Type':'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
  };
  return (
    <div className='p-3 max-w-lg mx-auto h-screen'> 
      <h1 className='text-3xl text-center font-semibold my-7'>Sign Up</h1>
      <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
        <input type='text' placeholder='username' className='border p-3 rounded-lg' id='username' onChange={handleChange}/>
        <input type='email' placeholder='email' className='border p-3 rounded-lg' id='email'/>
        <input type='password' placeholder='password' className='border p-3 rounded-lg' id='password'/>
        <input type='tel' placeholder='Mobile Number' className='border p-3 rounded-lg' pattern="[0-9]{10}" id='Mobile' required />
        <button className='bg-orange-500 text-white p-3 rounded-lg uppercase hover:opacity-90 disabled:opacity-80'>Sign Up</button>
      </form>
      <div className='flex gap-2 mt-5'>
        <p>Have an account?</p>
        <Link to={'/sign-in'}>
        <span className='text-blue-700'>sign in</span>
        </Link>
      </div>
    </div>
  )
}