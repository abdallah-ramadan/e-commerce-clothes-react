import React, { useState } from 'react'
import Title from './Title'
import ProductCard from './ProductCard'
import { products } from '../assets/assets'

function BestSeller() {
  const [bestSeller] = useState(products.filter((ele) => {
    return ele.bestseller
  }))
  return (
    <div className='my-10'>
      <div className=' py-8 text-3xl'>
        <Title text1="Best" text2="Sellers" />
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-center text-gray-600'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.</p>
      </div>
      <div className='grid grid-cols-2 justify-center sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
        {bestSeller.map((ele) => {
          return <ProductCard key={ele._id} id={ele._id} title={ele.name} price={ele.price} image={ele.image[0]} />
        })}
      </div>
    </div>
  )
}

export default BestSeller