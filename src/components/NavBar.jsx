import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
const NavBar = () => {
  const { amounts } = useSelector(state => state.cart)
  const [showSearch, setShowSearch] = useState(false)
  return (
    <div className=' flex items-center justify-between py-5 font-medium'>
      <img src={assets.logo} alt="Logo" className='w-36' />
      {showSearch ? "crcbierbcie" : ""}
      <ul className=' hidden sm:flex gap-5 uppercase items-center text-gray-700'>
        <NavLink to='/' className=" flex flex-col gap-1 justify-center items-center  ">
          <p>Home</p>
          <hr className=' w-2/4 border-1 ' />
        </NavLink>
        <NavLink to='/collections' className=" flex flex-col gap-1 justify-center items-center  ">
          <p>Collections</p>
          <hr className=' w-2/4 border-1 ' />
        </NavLink>
        <NavLink to='/about' className=" flex flex-col gap-1 justify-center items-center  ">
          <p>About</p>
          <hr className=' w-2/4 border-1 ' />
        </NavLink>
        <NavLink to='/contact' className=" flex flex-col gap-1 justify-center items-center  ">
          <p>Contact</p>
          <hr className=' w-2/4 border-1 ' />
        </NavLink>

      </ul>
      <div className="flex items-center gap-6">
        <img src={assets.search_icon} alt='search' className=' w-5 cursor-pointer' onClick={() => setShowSearch(pre => !pre)} />
        <img src={assets.profile_icon} alt='search' className=' w-5 cursor-pointer' />
        <NavLink to="/cart" className="relative"><img src={assets.cart_icon} alt='search' className=' w-5 cursor-pointer' />
          <span className=' absolute bottom-[-5px] leading-4 right-[-5px] w-4 h-4 text-center text-[9px] bg-black rounded-full text-white '>{amounts}</span>
        </NavLink>
      </div>
    </div>
  )
}

export default NavBar