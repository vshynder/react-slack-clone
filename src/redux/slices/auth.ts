import { createSlice } from "@reduxjs/toolkit";

interface IinitState {
  token: string | null;
}

const initialState: IinitState = {
  token: null,
};

const authSlice = createSlice({
  initialState: initialState,
  name: "auth",
  reducers: {
    login(state, action) {
      console.log("login reducer worked");
    },
  },
});

export const { login } = authSlice.actions;
export default authSlice.reducer;
