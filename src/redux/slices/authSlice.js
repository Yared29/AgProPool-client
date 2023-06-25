import { createSlice } from "@reduxjs/toolkit";
import { userLogin, userLogout } from "../actions/authActions";
import { toast } from "react-toastify";

// initialize userToken from local storage
const userToken = localStorage.getItem("userToken")
  ? localStorage.getItem("userToken")
  : null;
const userInfo = localStorage.getItem("userInfo")
  ? localStorage.getItem("userInfo")
  : null;
console.log(
  'localStorage.getItem("userInfo") : ',
  localStorage.getItem("userInfo")
);
const initialState = {
  loading: false,
  userInfo: userInfo && JSON.parse(userInfo),
  userToken,
  error: null,
  success: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: {
    // login user
    [userLogin.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [userLogin.fulfilled]: (state, { payload }) => {
      toast.success("Login success!");
      state.loading = false;
      state.userInfo = payload;
      state.userToken = payload.token;
    },
    [userLogin.rejected]: (state, { payload }) => {
      if (payload) toast.error(payload);
      state.loading = false;
      state.error = payload;
    },

    // logout user
    [userLogout.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [userLogout.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.userInfo = payload;
      state.userToken = payload;
    },
    [userLogout.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});
export default authSlice.reducer;
