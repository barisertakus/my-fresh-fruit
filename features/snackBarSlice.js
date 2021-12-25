import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  visible: false,
  message: "",
};

const snackBarSlice = createSlice({
  name: "snackBar",
  initialState,
  reducers: {
    openSnackbar: (state, action) => {
      if(!state.visible){
        state.visible = true;
        state.message = action.payload.message;
      }
    },
    closeSnackbar: (state, action) => {
      if(state.visible){
        state.visible = false;
        state.message = "";
      }
    }
  },
});

export const selectSnackbar = state => state.snackBar;

export const { openSnackbar, closeSnackbar } = snackBarSlice.actions;
export default snackBarSlice.reducer;
