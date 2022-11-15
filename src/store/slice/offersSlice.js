import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

export const offersSlice = createSlice({
  name: "offers",
  initialState,
  reducers: {
    setOffers: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setOffers } = offersSlice.actions;

export default offersSlice.reducer;
