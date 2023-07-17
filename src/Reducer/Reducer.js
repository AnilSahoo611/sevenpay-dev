import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  googleMap: {
    isOpen:true
  }
};

export const GoogleMapReducer = createSlice({
  name: "Sevenpay",
  initialState,
  reducers: {
    hideGoogleMap: (state, action) => {
      state.googleMap.isOpen = false;
    },
  },
  extraReducers: {},
});

// Action creators are generated for each case reducer function
export const {
    hideGoogleMap,
} = GoogleMapReducer.actions;

export default GoogleMapReducer.reducer;

// getCartList
