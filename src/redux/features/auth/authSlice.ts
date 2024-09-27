import { createSlice } from "@reduxjs/toolkit";
import { TUser } from "../../../types/global.type";

interface initialStateInterface {
  user: TUser | null;
  token: string | null;
}

const initialState: initialStateInterface = {
  user: null,
  token: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userLogin: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    userLogout: (state) => {
      state.user = null;
      state.token = null;
    },
  },
});

export const { userLogin, userLogout } = authSlice.actions;
export default authSlice.reducer;
