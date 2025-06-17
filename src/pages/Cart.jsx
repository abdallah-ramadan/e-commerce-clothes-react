import React from 'react'
import Title from '../components/Title'
import CartCalc from '../components/CartCalc'
import Footer from '../components/Footer'
import ProductSell from '../components/ProductSell'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Cart = () => {
  const { cartItems } = useSelector(state => state.cart)

  if (cartItems.length === 0) {
    return (
      <>

        <div className='flex flex-col justify-center items-center min-h-[50vh] gap-4 text-center p-6'>
          <p className='text-2xl font-medium text-gray-800'>Your cart is impty</p>

          <Link
            to="/collections"
            className='px-6 py-3 bg-[#f0bad4] text-white rounded-lg hover:bg-[#e1c0d0] transition-colors duration-200 font-medium shadow-sm'
          >
            Fill It
          </Link>
        </div>
        <Footer />
      </>
    )
  }


  return (
    <div className=' border-t  border-gray-200'>
      <div className='w-fit pt-14 text-2xl'>
        <Title text1="Your" text2="Cart" />
      </div>
      <div>
        {cartItems.map((ele) => {
          return <ProductSell key={ele._id} ele={ele} />
        })}

      </div>
      <div className="flex flex-col items-end justify-end my-20">
        <div className='w-full sm:w-[450px]'>
          <CartCalc />
        </div>
        <div className="text-end flex justify-end">
          <Link to="/place-order" className="block bg-black text-white text-sm my-8 px-8 py-3">PROCEED TO CHECKOUT</Link>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Cart