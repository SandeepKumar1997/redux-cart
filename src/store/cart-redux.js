import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    itemsList: [],
    totalQuantity: 0,
    showCart: false,
    change: false,
  },
  reducers: {
    reloadDatafromBackend(state, action) {
      state.itemsList = action.payload.itemsList;
      state.totalQuantity = action.payload.totalQuantity;
    },
    addToCart(state, action) {
      state.change = true;
      const newItem = action.payload;
      const existingItem = state.itemsList.find(
        (item) => item.id === newItem.id
      );
      if (existingItem) {
        existingItem.totalPrice += newItem.price;
        existingItem.quantity++;
      } else {
        state.itemsList.push({
          id: newItem.id,
          name: newItem.name,
          price: newItem.price,
          totalPrice: newItem.price,
          quantity: 1,
        });
        state.totalQuantity++;
      }
    },
    removeFromCart(state, action) {
      state.change = true;
      const id = action.payload;
      const getItem = state.itemsList.find((item) => item.id === id);
      if (getItem.quantity === 1) {
        state.itemsList = state.itemsList.filter((item) => item.id !== id);
        state.totalQuantity--;
      } else {
        getItem.quantity--;
        getItem.totalPrice -= getItem.price;
      }
    },
    setShowCart(state) {
      state.showCart = !state.showCart;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
