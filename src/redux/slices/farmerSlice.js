import { createSlice } from "@reduxjs/toolkit";
import {
  registerFarmer,
  getFarmersList,
  getFarmersListForDropdown,
} from "../actions/farmerActions";
import { toast } from "react-toastify";

const initialState = {
  loading: false,
  farmersList: [],
  farmersListForDropdown: [],
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
      toast.success("Farmer added successfully!");
      state.loading = false;
      state.farmersList = [payload, ...state.farmersList];
    },
    [registerFarmer.rejected]: (state, { payload }) => {
      if (payload) toast.error(payload);
      state.loading = false;
      state.error = payload;
    },

    // get all farmers
    [getFarmersList.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [getFarmersList.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.farmersList = payload;
    },
    [getFarmersList.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },

    // get farmers for dropdown
    [getFarmersListForDropdown.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [getFarmersListForDropdown.fulfilled]: (state, { payload }) => {
      console.log(payload);
      state.loading = false;
      state.farmersListForDropdown = payload;
    },
    [getFarmersListForDropdown.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});
export default farmerSlice.reducer;
