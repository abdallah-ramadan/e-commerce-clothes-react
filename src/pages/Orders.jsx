import React from 'react'
import Title from '../components/Title'
import Order from '../components/Order'
import { useSelector } from 'react-redux'

const Orders = () => {
  const {orders} = useSelector(state => state.orders)
  
  return (
    <div className=' pt-16 border-t border-gray-200'> 
  <div className='flex justify-start text-xl sm:text-2xl'>
  <Title text1="My" text2="Orders" />
  </div>
  {orders?.map((order) => {
  return order.items.map((ele) => (
    <Order key={`${ele._id}${ele.size}`} ele={ele} date={order.date} method={order.method}  delivered={order.delivered}/>
  ))
})}
    </div>
  )
}

export default Orders