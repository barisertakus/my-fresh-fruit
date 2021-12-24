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
      console.log(action.payload)
      const { quantity } = action.payload;
      let item = state.items.filter((item) => action.payload.name === item.name)[0];
        console.log(item)
      if (item) {
        // it contains
        item.quantity += action.payload.quantity;
      } else {
        state.items = [...state.items, action.payload];
      }

      state.totalPrice += action.payload.price * quantity;
    },
    removeFromBasket: (state, action) => {
      const items = items.filter((item) => item.id !== action.payload.id);
      state = { ...state, items, totalPrice: totalPrice - action.payload.id };
    },
  },
});

export const itemsSelector = (state) => state.basket.items;
export const totalPriceSelector = (state) => state.basket.totalPrice;

export const { addBasket, removeFromBasket } = basketSlice.actions;
export default basketSlice.reducer;
