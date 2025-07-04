import React from 'react'
import { assets } from '../assets/assets'
import SubscibeForm from './SubscibeForm'

const Service = () => {
  return (
    <div>
        <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700'>
            <div>
                <img src={assets.exchange_icon} alt="cross" className='w-12 m-auto mb-5'/>
                <p className=' font-semibold'>Easy Exchange Policy</p>
                <p className=' text-gray-400'>We offer hassle free exchange policy</p>
            </div>
            <div>
                <img src={assets.quality_icon} alt="cross" className='w-12 m-auto mb-5'/>
                <p className=' font-semibold'>Easy Exchange Policy</p>
                <p className=' text-gray-400'>We offer hassle free exchange policy</p>
            </div>
            <div>
                <img src={assets.support_img} alt="cross" className='w-12 m-auto mb-5'/>
                <p className=' font-semibold'>Easy Exchange Policy</p>
                <p className=' text-gray-400'>We offer hassle free exchange policy</p>
            </div>
        </div>
        <SubscibeForm />
    </div>
  )
}

export default Service