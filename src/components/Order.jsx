import React from 'react'


function Order({ele , date, method , delivered}) {
  const {image , name, price, amount, size  } = ele
  
  return (
    <div>
        <div className='py-4 border-b border-gray-200 text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4'>
        <div className=' flex items-center gap-6 text-sm sm:mb-0 mb-2'>
            <img src={Array.isArray(image) ? image[0] : image} alt="" className='w-16 sm:w-20'/>
            <div >
                <h3 className='sm:text-base font-medium'>{name}</h3>
                <p className=' mt-1 text-base text-gray-700'>${price} Quantity: {amount} Size: {size}</p>
                <p className='mt-1'>Date: <span className=' text-base text-gray-400'>{date}</span></p>
                <p className='mt-1'>Payment:  <span className=' text-base text-gray-400'>{method}</span></p>
            </div>
        </div>
        <div className='flex w-full items-center md:w-1/2 justify-between'>
            <p className='text-sm md:text-base flex items-center gap-2'><span className=' block w-2 h-2 rounded-full bg-green-500'></span> {delivered ? "Delivered" : "Order Placed"}</p>
            <p className='border border-gray-200 px-4 py-2 text-sm font-medium rounded-sm'>Track Order</p>
        </div>
    </div>
    </div>
  )
}

export default Order