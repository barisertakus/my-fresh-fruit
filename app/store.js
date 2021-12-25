import { configureStore } from '@reduxjs/toolkit';
import basketReducer from "../features/basketSlice";
import snackBarReducer from '../features/snackBarSlice';
export const store = configureStore({
  reducer: {
    basket : basketReducer,
    snackBar : snackBarReducer
  },
});