import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    userName: "admin",
    password: "12345678",
  },
  isLogin: false,
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setLogin: (state, action) => {
      state.isLogin = action.payload;
    },
  },
});

export const { setLogin } = loginSlice.actions;

export default loginSlice.reducer;
