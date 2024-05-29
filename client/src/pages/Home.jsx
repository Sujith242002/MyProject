import React from 'react';
import Modern from '../assets/modern-hotel-room-with-illuminated-pictures.jpg';
import { FaHome } from 'react-icons/fa';
import { MdAccessTime } from 'react-icons/md';
import { MdLightbulbOutline } from 'react-icons/md';
import { FaCalendarAlt } from 'react-icons/fa';
import { FaRupeeSign } from 'react-icons/fa';
import { FaStar } from 'react-icons/fa';
import BgOfHowWeWork from '../assets/BgOfHowWeWork.jpg'
import { Link } from 'react-router-dom';

const handleClick = () => {
    window.scrollTo(0, 0);
};

export default function Home() {
  return (
    <div>
      <div style={{width:"1920" , height:"800"}}>
        <img src={Modern} style={{width:"1920" }}/>
      </div>
      <div className='bg-zinc-950  flex justify-between items-center p-3'>
        <div className='flex-col ml-6 item-center'>
          <MdLightbulbOutline className="text-orange-400 text-6xl mb-3 ml-5" />
          <h4  className='w-3/4 font-medium text-white'>INNOVATIVE IDEAS & DESIGN</h4>
        </div>
        <div className='flex-col ml-6 item-center'>
          <FaCalendarAlt className="text-orange-400 text-6xl mb-3 ml-8" />
          <h4 className='w-3/4 font-medium text-white'>PROPER PLANNING AND BUDGETING</h4>
        </div>
        <div className='flex-col ml-6 item-center'>
          <FaHome className="text-orange-500 text-6xl mb-3 ml-4 " />
          <h4 className='w-3/4 font-medium text-white'>BRILLIANT SPACE UTILIZATION</h4>
        </div>
        <div className='flex-col ml-6 item-center'>
          <FaRupeeSign className="text-orange-500 text-6xl mb-3" />
          <h4 className='w-3/4 font-medium text-white'>AFFORDABLE PRICE</h4>
        </div>
        <div className='flex-col ml-6 item-center'>
          <FaStar className="text-orange-500 text-6xl mb-3" /> 
          <h4 className='w-3/4 font-medium text-white'>QUALITY WORK</h4>
        </div>
        <div className='flex-col ml-6 item-center'>
          <MdAccessTime  className='text-6xl text-orange-500 mb-3'/> 
          <h4 className='w-3/4 font-medium text-white'> ON TIME DELIVERY </h4>
        </div> 
      </div>
      <div className='h-80 flex justify-between items-center p-3'>
        <Link to={'/howwework'} onClick={handleClick}>
          <div className='items-center text-center ml-10 text-lg font-semibold'>
            <div className='bg-orange-200 h-10 w-10 ml-7 mb-2 rounded-full flex justify-center items-center'>
              <h1 className='text-xl'>1</h1>
            </div>  
            <h4 className='w-3/4'>Online Consultation</h4>
          </div>
        </Link>
        <Link to={'/howwework'} onClick={handleClick}>
          <div className='items-center text-center ml-10 text-lg font-semibold'>
            <div className='bg-orange-200 h-10 w-10 ml-11 mb-2 rounded-full flex justify-center items-center'>
              <h1 className='text-xl'>2</h1>
            </div> 
            <h4 className='w-3/4'>Approximate Cost Estimatation</h4>
          </div>
        </Link>
        <Link to={'/howwework'} onClick={handleClick}>
          <div className='items-center text-center ml-10 text-lg font-semibold'>
            <div className='bg-orange-200 h-10 w-10 ml-7 mb-2 rounded-full flex justify-center items-center'>
              <h1 className='text-xl'>3</h1>
            </div>
            <h4 className='w-3/4'>In Person Discussion</h4>
          </div>
        </Link>
        <Link to={'/howwework'} onClick={handleClick}>
          <div className='items-center text-center ml-10 text-lg font-semibold'>
            <div className='bg-orange-200 h-10 w-10 ml-5 mb-2 rounded-full flex justify-center items-center' >
              <h1 className='w-5/4 text-xl'>4</h1>
            </div>
            <h4 className='w-3/4'>Advance Booking</h4>
          </div>
        </Link>
        <Link to={'/howwework'} onClick={handleClick}>
          <div className='items-center text-center ml-10 text-lg font-semibold'>
            <div className='bg-orange-200 h-10 w-10 ml-3 mb-2 rounded-full flex justify-center items-center'>
              <h1 className='w-5/4 text-xl'>5</h1>
            </div>
            <h4 className='w-3/4'>2D/3D Design</h4>
          </div>
        </Link>
        <Link to={'/howwework'} onClick={handleClick}>
          <div className='items-center text-center ml-10 text-lg font-semibold'>
            <div className='bg-orange-200 h-10 w-10 ml-7 mb-2 rounded-full flex justify-center items-center'>
              <h1 className='w-5/4 text-xl'>6</h1>
            </div>
            <h4 className='w-3/4'>Material Presentation</h4>
          </div>
        </Link>
        <Link to={'/howwework'} onClick={handleClick}>
          <div className='items-center text-center ml-10 text-lg font-semibold'>
            <div className='bg-orange-200 h-10 w-10 ml-4 mb-2 rounded-full flex justify-center items-center'>
              <h1 className='w-5/4 text-xl'>7</h1>
            </div>
            <h4 className='w-3/4'>Final Quotation</h4>
          </div>
        </Link>
        <Link to={'/howwework'} onClick={handleClick}>
          <div className='items-center text-center ml-10 text-lg font-semibold'>
            <div className='bg-orange-200 h-10 w-10 ml-5 mb-2 rounded-full flex justify-center items-center'>
              <h1 className='w-5/4 text-xl'>8</h1>
            </div>
            <h4 className='w-3/4'>Execution Begins</h4>
          </div>
        </Link>
        <Link to={'/howwework'} onClick={handleClick}>
          <div className='items-center text-center ml-10 text-lg font-semibold'>
            <div className='bg-orange-200 h-10 w-10 ml-5 mb-2 rounded-full flex  justify-center items-center '>
              <h1 className='w-5/4 text-xl'>9</h1>
            </div>
            <h4 className='w-3/4'>Project Handover</h4>
          </div>
        </Link>
      </div>
      <div className='bg-orange-400 h-40 flex justify-center items-center'>
        <h1 className='text-center text-white text-2xl font-bold mr-5'>Search Our Projects</h1>
        <button className='border border-gray-600 rounded-md px-4 py-2 bg-white text-gray-600 font-semibold hover:bg-gray-100 transition duration-300'>Projects</button>
      </div>
      <div className='flex flex-row items-center justify-center space-x-4 mt-5 mb-5 bg-h-full w-full p-10 gap-5'>
          <div className='bg-white rounded-lg overflow-hidden w-60  flex-col'>
            <img src={BgOfHowWeWork} alt='Image description' className='w-full h-1/3 object-cover'/>
            <h1 className='flex-col font-bold pl-4 pt-4 w-full text-center'>LIVING ROOM</h1>
            <p className='text-justify'>Make every night relaxing with the finest Bedroom Interiors and wake up super fresh! We strive to serve our customers with the Delight they Deserve! Why choose us? We have Years of Expertise on our side to make your Dreams become a Reality!</p>
              <Link to={'/ourservices'} className='flex justify-start p-4' onClick={handleClick} >
                <button className='bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-700 transition duration-300 w-full'>Read More</button>
              </Link>
          </div>
        <div className='bg-white rounded-lg overflow-hidden w-60 flex-col'>
            <img src={BgOfHowWeWork} alt='Image description' className='w-full h-1/3 object-cover'/>
            <h1 className='flex-col font-bold pt-4 w-full text-center'>BED ROOM</h1>
            <p className='text-justify'>Now your guests need not only be served with delicacies but let your Living Room be a delight to their eyes! Our Expert Team consists of Professionals that make your task much easier to implement your customized inputs and shaping your dreams!</p>
            <Link to={'/ourservices'} className='flex justify-start p-4' onClick={handleClick} >
            <button className='bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-700 transition duration-300 w-full'>Read More</button>
            </Link>
        </div>
        <div className='bg-white rounded-lg overflow-hidden w-60 flex-col'>
          <img src={BgOfHowWeWork} alt='Image description' className='w-full h-1/3 object-cover'/>
          <h1 className='flex-col font-bold  text-center pt-4'>MODULAR KITCHEN</h1>
          <p className='text-justify'>Your Modular Kitchen would no longer be a space you would be wanting to leave! Our Exemplary years of Commitment are a Testimony to our Services that speaks volumes. Shape your space that reflects you and we are here to fulfil just that!</p>
          <Link to={'/ourservices'} className='flex justify-start p-4' onClick={handleClick} >
            <button className='bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-700 transition duration-300 w-full '>Read More</button>
          </Link>
        </div>
        <div className='bg-white rounded-lg overflow-hidden w-60 flex-col'>
          <img src={BgOfHowWeWork} alt='Image description' className='w-full h-1/3 object-cover'/>
          <h1 className='flex-col font-bold pl-4 pt-4 text-center'>TV UNIT</h1>
          <p className='text-justify'>Keep your popcorns ready to binge-watch your favorite Netflix shows in your bespoke Hall! We at Lush Interiors create memorable moments that never fade away.Our Reputed Interior Designers that take a deep dive into your imagination!</p>
          <Link to={'/ourservices'} className='flex justify-start p-4' onClick={handleClick} >
            <button className='bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600 transition duration-300 w-full'>Read More</button>
          </Link>
        </div>
        {/* <div className='bg-white rounded-lg overflow-hidden w-60 flex-col'>
          <img src={BgOfHowWeWork} alt='Image description' className='w-full h-60 object-cover'/>
          <h1 className='flex-col font-semibold pl-4 pt-4'>Villa</h1>
          <div className='flex justify-start p-4'>
            <button className='bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600 transition duration-300'>For More</button>
          </div>
        </div> */}
    </div>
  </div>

  )
}