import { configureStore } from '@reduxjs/toolkit';
import basketReducer from "../features/basketSlice";
import favoritesReducer from '../features/favoritesSlice';
import snackBarReducer from '../features/snackBarSlice';
export const store = configureStore({
  reducer: {
    basket : basketReducer,
    favorites : favoritesReducer,
    snackBar : snackBarReducer,
  },
});