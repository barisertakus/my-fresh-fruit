import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  user: {},
  totalPrice: 0,
};

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addBasket: (state, action) => {
      const { quantity } = action.payload;
      let item = state.items.filter(
        (item) => action.payload.name === item.name
      )[0];
      if (item) {
        // it contains
        item.quantity += action.payload.quantity;
      } else {
        state.items = [...state.items, action.payload];
      }

      state.totalPrice += action.payload.price * quantity;
    },
    removeFromBasket: (state, action) => {
      let item = state.items.filter((item) => action.payload.name === item.name)[0];
      if (item) {
        const index = state.items.indexOf(item)
        state.items.splice(index, 1);
        state.totalPrice -= item.price * item.quantity
      }
    },
  },
});

export const itemsSelector = (state) => state.basket.items;
export const totalPriceSelector = (state) => state.basket.totalPrice;

export const { addBasket, removeFromBasket } = basketSlice.actions;
export default basketSlice.reducer;
