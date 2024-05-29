import React from 'react'
import {FaSearch} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Carnetlogo from '../assets/Carnetlogo.jpeg'

export default function Header() {
  return (
    <header className='bg-black shadow-md'>
        <div className="flex justify-between items-center max-w-6xl mx-auto p-3 h-32">
            <div className="flex items-center space-x-4">
                <img src={Carnetlogo} className="h-14 w-auto rounded-md" alt="Carnet Logo" />
                <Link to='/'>
                    <h1 className="font-bold text-sm sm:text-4xl flex flex-wrap">
                        <span className="text-orange-500">Carnet</span>
                        <span className="text-orange-500">Group</span>
                    </h1>
                </Link>
            </div>
            {/* <form className='bg-orange-200 p-3 rounded-lg flex items-center'>
                <input type='text' placeholder='Search...' className='bg-transparent focus:outline-none w-24 sm:w-64 '/>
                <FaSearch className='text-orange-600'/>
            </form> */}
            <div className="flex items-center justify-end flex-1 ml-4"> 
                <ul className='flex gap-6 items-center'>
                    <Link to='/home'>
                       <li className='hidden sm:inline text-orange-600 hover:underline text-xl '>HOME</li>
                    </Link>
                    <Link to='/about'>
                        <li className='hidden sm:inline text-orange-600 hover:underline  text-xl'>ABOUT</li>
                    </Link>
                    <Link to='/howwework'>
                        <li className='hidden sm:inline text-orange-600 hover:underline text-xl'>HOW WE WORK</li>
                    </Link>
                    <Link to='/ourservices'>
                        <li className='hidden sm:inline text-orange-600 hover:underline  text-xl'>OUR SERVICES</li>
                    </Link>
                    <Link to='/sign-in'>
                        <li className='hidden sm:inline text-orange-600 hover:underline  text-xl'>SIGN IN </li>
                    </Link>
                    <Link to='/sign-up'>
                        <li className='hidden sm:inline text-orange-600 hover:underline  text-xl'>SIGN UP</li>
                    </Link>
                </ul>
            </div>
        </div>
    </header>
  )
}