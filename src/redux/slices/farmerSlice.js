import { createSlice } from "@reduxjs/toolkit";
import { registerFarmer } from "../actions/farmerActions";

const initialState = {
  loading: false,
  farmersList: [],
  error: null,
  success: false,
};

const farmerSlice = createSlice({
  name: "farmer",
  initialState,
  reducers: {},
  extraReducers: {
    // register farmer
    [registerFarmer.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [registerFarmer.fulfilled]: (state, { payload }) => {
      console.log(payload);
      state.loading = false;
    },
    [registerFarmer.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});
export default farmerSlice.reducer;
