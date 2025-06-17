import React from 'react'
import { Link } from 'react-router-dom'

function ProductCard({id, title, price, image}) {
  return (
   <div className='text-gray-700'>
    <Link to={`/product/${id}`} className='block'>
        <div className='overflow-hidden'>
        <img src={Array.isArray(image) ? image[0] : image} alt="image" className='hover:scale-110 transition ease-in-out' />
        </div>
        <p className='pt-3 pb-1 text-sm'>{title}</p>
        <p className=' text-sm font-medium'>{price} EG</p>
    </Link>
   </div>
  )
}

export default ProductCard