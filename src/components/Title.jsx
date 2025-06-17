import React from 'react'

function Title({text1, text2}) {
  return ( 
    <div className=' flex justify-center items-center gap-2 mb-3'>
        <p className=' text-gray-500 uppercase'>{text1} <span className=' text-gray-700 font-medium'>{text2}</span> </p>
        <hr className='w-8 hidden sm:block sm:w-12 h-[1px] sm:h-[2px] bg-gray-700'/>
    </div>
  )
}

export default Title