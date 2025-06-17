import React from 'react'
import Title from './Title'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function CartCalc() {
    const {total} = useSelector(state => state.cart)
  return (
    
        
            <div className="w-full">
                <div className="text-2xl w-fit">
                    <Title text1="Cart" text2="Totals" />
                </div>
                <div className="flex flex-col gap-2 mt-2 text-sm">
                    <div className="flex justify-between">
                        <p>Subtotal</p>
                        <p>$ {total}</p>
                    </div>
                    <hr className=' text-gray-200' />
                    <div className="flex justify-between">
                        <p>Shipping Fee</p>
                        <p>$ 10.00</p>
                    </div>
                    <hr className=' text-gray-200'/>
                    <div className="flex justify-between">
                        <b>Total</b>
                        <b>$ {total > 0 ? total + 10 : 0}</b>
                    </div>
                </div>
            </div>

        
        
    
  )
}

export default CartCalc