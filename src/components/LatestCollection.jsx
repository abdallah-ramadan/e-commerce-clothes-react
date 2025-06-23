import React, { useState } from 'react'
import Title from './Title'
import { products } from '../assets/assets'
import ProductCard from './ProductCard'

function LatestCollection() {
  const [latestCollection,] = useState(products.slice(0, 10))

  return (
    <div className='my-10'>
      <div className=' py-8 text-3xl'>
        <Title text1="Latest" text2="Collections" />
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-center text-gray-600'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.</p>
      </div>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
        {latestCollection.map((ele) => {
          return <ProductCard key={ele._id} id={ele._id} title={ele.name} price={ele.price} image={ele.image[0]} />
        })}
      </div>
    </div>
  )
}

export default LatestCollection