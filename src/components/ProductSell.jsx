import React from 'react'
import { assets } from '../assets/assets'
import { useDispatch } from 'react-redux'
import { decreaseAmount, increaseAmount, removeFromCart } from '../redux/Cart/CartSlice'

function ProductSell({ele}) {
  
  const dispatch = useDispatch()

  const handleDelete = () => {
    dispatch(removeFromCart(ele))
  }

  const handleChange = (e) => {
    const newAmount = parseInt(e.target.value, 10);
  
    if (isNaN(newAmount) || newAmount < 1) return;
  
    const difference = newAmount - ele.amount;
  
    if (difference > 0) {
      for (let i = 0; i < difference; i++) {
        dispatch(increaseAmount(ele));
      }
    } else if (difference < 0) {
      for (let i = 0; i < Math.abs(difference); i++) {
        dispatch(decreaseAmount(ele));
      }
    }
  };
  
  return (
    <div>
<div className="py-4 border-gray-200 border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4">
  <div className="flex items-start gap-6">
    <img
      className="w-16 sm:w-20"
      src={Array.isArray(ele.image) ? ele.image[0] : ele.image}
      alt=""
    />
    <div>
      <p className="text-xs sm:text-lg font-medium">{ele.name}</p>
      <div className="flex items-center gap-5 mt-2">
        <p>{ele.price}</p>
        <p className="px-2 sm:px-3 sm:py-1 border-gray-200 border bg-slate-50">{ele.size}</p>
      </div>
    </div>
  </div>
  <input
    className="border border-gray-200 max-w-10 sm:max-w-20 px-1 sm:px-2 py-1"
    type="number"
    min="1"
    onChange={handleChange}
    value={ele.amount}
  />
  <img
    className="w-4 mr-4 sm:w-5 cursor-pointer"
    src={assets.bin_icon}
    alt=""
    onClick={handleDelete}
  />
</div>
</div>
  )
}

export default ProductSell