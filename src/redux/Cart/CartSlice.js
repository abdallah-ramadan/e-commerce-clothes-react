import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  total: 0,
  amounts: 0
};

if(JSON.parse(localStorage.getItem("cart-products"))){
const cartProducts =JSON.parse(localStorage.getItem("cart-products"))
initialState.cartItems = cartProducts
for(let i =0;i< cartProducts.length; i++){
  initialState.amounts += cartProducts[i].amount
  initialState.total += cartProducts[i].price * cartProducts[i].amount
}
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { _id, size, price } = action.payload;
    
      const existingIndex = state.cartItems.findIndex(
        item => item._id === _id && item.size === size
      );
    
      if (existingIndex >= 0) {
        state.cartItems[existingIndex].amount += 1;
        state.amounts += 1
        localStorage.setItem("cart-products", JSON.stringify(state.cartItems))
      } else {
        state.cartItems.push({ ...action.payload, amount: 1 });
        state.amounts += 1
        localStorage.setItem("cart-products", JSON.stringify(state.cartItems))
      }
    
      state.total += price;
    },
    
    removeFromCart: (state, action) => {
      const {amount , size , price , _id} = action.payload
      state.cartItems = state.cartItems.filter(
        item => !(item._id === _id && item.size === size)
      );
      localStorage.setItem("cart-products", JSON.stringify(state.cartItems))
      state.total -= amount * price
      state.amounts -= amount
    },
    
    decreaseAmount: (state, action) => {
      const { _id, size, price , amount} = action.payload;
    
      const index = state.cartItems.findIndex(
        item => item._id === _id && item.size === size
      );
    
      if (index !== -1) {
        if (state.cartItems[index].amount > 1) {
          state.cartItems[index].amount -= 1;
          localStorage.setItem("cart-products", JSON.stringify(state.cartItems))

          state.amounts -= 1
        } else {
          state.cartItems.splice(index, 1);
          localStorage.setItem("cart-products", JSON.stringify(state.cartItems))
          state.amounts -= amount
        }
        state.total -= price ;
      }
    },
    
    increaseAmount: (state, action) => {
      const { _id, size, price } = action.payload;
    
      const index = state.cartItems.findIndex(
        item => item._id === _id && item.size === size
      );
    
      if (index !== -1) {
        state.cartItems[index].amount += 1;
        localStorage.setItem("cart-products", JSON.stringify(state.cartItems))
        state.total += price;
        state.amounts += 1
      }
    },    
    clearCart: state => {
      state.cartItems = [];
      localStorage.setItem("cart-products", JSON.stringify(state.cartItems))
      state.total = 0
      state.amounts = 0
    }
  }
});

export const { addToCart, removeFromCart, decreaseAmount, increaseAmount, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
