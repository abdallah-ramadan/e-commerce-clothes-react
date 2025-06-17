import React, { useState } from 'react'
import Title from '../components/Title'
import CartCalc from '../components/CartCalc'
import { assets } from '../assets/assets'
import { useDispatch, useSelector } from 'react-redux'
import { addOrder } from '../redux/Order/OrderSlice'
import { useNavigate } from 'react-router-dom'
import { clearCart } from '../redux/Cart/CartSlice'

const PlaceOrder = () => {
  const { cartItems } = useSelector(state => state.cart)
  const dispatch = useDispatch()
  const router = useNavigate()

  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [street, setStreet] = useState("")
  const [city, setCity] = useState("")
  const [state, setState] = useState("")
  const [zipcode, setZipcode] = useState("")
  const [country, setCountry] = useState("")
  const [phone, setPhone] = useState("")

  const handleClick = (e) => {
    e.preventDefault()

    
    if (!firstName || !lastName || !email || !street || !city || !state || !zipcode || !country || !phone) {
      alert("Please fill in all the fields before placing the order.")
      return
    }
   
    const newOrder = {
      items: cartItems,
      date: new Date().toDateString(),
      firstName,
      lastName,
      email,
      phone,
      zipcode,
      street,
      city,
      country,
      state,
      delivered: false,
      method : "COD"
    }
    
    dispatch(addOrder(newOrder))
    dispatch(clearCart())
    
    router("/orders")
  }

  return (
    <div className='border-t border-gray-200 pt-12'>
      <div className='text-xl sm:text-2xl my-3 flex justify-start'>
        <Title text1='Delivery' text2='Information' />
      </div>
      <form>
        <div className='py-3 flex justify-between gap-3 sm:flex-row flex-col '>
          <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>
            <div className='flex gap-3'>
              <input
              required
                type="text"
                placeholder='First Name'
                className='border border-gray-300 rounded py-1.5 px-3.5 w-full'
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <input
              required
                type="text"
                placeholder='Last Name'
                className='border border-gray-300 rounded py-1.5 px-3.5 w-full'
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <input
            required
              type="email"
              placeholder='Email'
              className='border border-gray-300 rounded py-1.5 px-3.5 w-full'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
            required
              type="text"
              placeholder='Street'
              className='border border-gray-300 rounded py-1.5 px-3.5 w-full'
              value={street}
              onChange={(e) => setStreet(e.target.value)}
            />
            <div className='flex gap-3'>
              <input
              required
                type="text"
                placeholder='City'
                className='border border-gray-300 rounded py-1.5 px-3.5 w-full'
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
              <input
              required
                type="text"
                placeholder='State'
                className='border border-gray-300 rounded py-1.5 px-3.5 w-full'
                value={state}
                onChange={(e) => setState(e.target.value)}
              />
            </div>
            <div className='flex gap-3'>
              <input
              required
                type="text"
                placeholder='Zipcode'
                className='border border-gray-300 rounded py-1.5 px-3.5 w-full'
                value={zipcode}
                onChange={(e) => setZipcode(e.target.value)}
              />
              <input
              required
                type="text"
                placeholder='Country'
                className='border border-gray-300 rounded py-1.5 px-3.5 w-full'
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              />
            </div>
            <input
            required
              type="text"
              placeholder='Phone'
              className='border border-gray-300 rounded py-1.5 px-3.5 w-full'
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <div className='mt-3 sm:mt-0 flex flex-col min-w-80'>
            <div className="w-full">
              <CartCalc />
            </div>
            <div className='mt-12'>
              <div className="flex justify-start">
                <Title text1="Payment" text2="Method" />
              </div>
              <div className='flex gap-4 flex-row sm:flex-col lg:flex-row'>
                <div className='border border-gray-200 flex px-3 py-1.5 gap-2 items-center'>
                  <input
                  required type="radio" id='strip' disabled />
                  <label htmlFor="strip"><img src={assets.stripe_logo} alt="" /></label>
                </div>
                <div className='border border-gray-200 flex px-3 py-1.5 gap-2 items-center'>
                  <input
                  required type="radio" id='razorpay' disabled />
                  <label htmlFor="razorpay"><img src={assets.razorpay_logo} alt="" /></label>
                </div>
                <div className='border border-gray-200 flex px-3 py-1.5 gap-2 items-center'>
                  <input
                  required type="radio" id='cash' checked />
                  <label htmlFor="cash" className='uppercase'>Cash On Delivery</label>
                </div>
              </div>
              <div className="w-full text-end mt-8">
                <button
                  type="submit"
                  onClick={handleClick}
                  className="bg-black cursor-pointer text-white px-16 py-3 text-sm"
                >
                  PLACE ORDER
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default PlaceOrder
