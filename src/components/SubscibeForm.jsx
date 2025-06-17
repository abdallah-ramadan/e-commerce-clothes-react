import React from 'react'

function SubscibeForm() {
  return (
    <div className='text-center'>
            <h3 className='text-2xl font-medium text-gray-800'>Subscribe now & get 20% off</h3>
            <p className='text-gray-400 mt-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <form className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border border-gray-400  pl-3'>
                <input type="text"className='w-full sm:flex-1 outline-none' placeholder="Enter your email"/>
                <button className='bg-black text-white text-xs px-10 py-4'>SUBSCRIBE</button>
            </form>
        </div>
  )
}

export default SubscibeForm