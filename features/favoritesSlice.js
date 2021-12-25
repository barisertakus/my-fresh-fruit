import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addfavorites: (state, action) => {
      let item = state.items.filter(
        (item) => action.payload.name === item.name
      )[0];
      if (!item) {
        state.items = [...state.items, action.payload];
      }
    },
    removeFromfavorites: (state, action) => {
      let item = state.items.filter((item) => action.payload.name === item.name)[0];
      if (item) {
        const index = state.items.indexOf(item)
        state.items.splice(index, 1);
      }
    },
    toggleFavorite: (state, action) => {
      let item = state.items.find((item) => action.payload.name === item.name);
      if (item) {
        state.items = state.items.filter((item) => action.payload.name !== item.name);
      } else {
        state.items = [...state.items, action.payload];
      }
    },
  },
});

export const itemsSelector = (state) => state.favorites.items;

export const { addfavorites, removeFromfavorites, toggleFavorite } =
  favoritesSlice.actions;
export default favoritesSlice.reducer;
