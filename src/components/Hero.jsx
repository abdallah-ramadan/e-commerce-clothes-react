import React from 'react'
import { assets } from '../assets/assets'
import { NavLink } from 'react-router-dom'
const Hero = () => {
  return (
    <div className=' flex-col  sm:flex sm:flex-row border border-gray-400 items-center '>
        <div className='flex justify-center items-center p-16 sm:p-0 sm:w-2/4 text-[#414141]'>
          <div >
          <div className=' flex gap-2 items-center'>
            <hr className='w-8 md:w-11 h-[2px] bg-[#414141]'/>
            <p className=' uppercase  font-medium text-sm md:text-base'>Our Bestsellers</p>
          </div>
          <p className='prata-regular text-3xl sm:py-3 lg:text-5xl'>Latest Arrivals</p>
          <div className=' flex items-center gap-2'>
            <NavLink to="/collections" className="font-semibold text-sm md:texr-base uppercase">Shop Now</NavLink>
            <hr className=' w-8 md:w-11 h-[1px] bg-[#414141]'/>
          </div>
          </div>
        </div>
        <div className='w-full sm:w-2/4'>
          <img src={assets.hero_img} alt="hero image" />
        </div>
      </div>
  )
}

export default Hero