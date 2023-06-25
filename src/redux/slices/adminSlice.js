import { createSlice } from "@reduxjs/toolkit";
import { registerAdmin, getAdminsList } from "../actions/adminActions";
import { toast } from "react-toastify";

const initialState = {
  loading: false,
  adminsList: [],
  error: null,
  success: false,
};

const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {},
  extraReducers: {
    // register admin
    [registerAdmin.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [registerAdmin.fulfilled]: (state, { payload }) => {
      toast.success("Admin registered successfully!");
      state.loading = false;
      state.adminsList = [payload, ...state.adminsList];
    },
    [registerAdmin.rejected]: (state, { payload }) => {
      if (payload) toast.error(payload);
      state.loading = false;
      state.error = payload;
    },

    // get all admins
    [getAdminsList.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [getAdminsList.fulfilled]: (state, { payload }) => {
      console.log(payload);
      state.loading = false;
      state.adminsList = payload;
    },
    [getAdminsList.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});
export default adminSlice.reducer;
