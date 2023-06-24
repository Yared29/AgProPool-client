import { createSlice } from "@reduxjs/toolkit";
import {
  addCrop,
  getCropsList,
  getCropsListForDropdown,
} from "../actions/cropActions";

const initialState = {
  loading: false,
  cropsList: [],
  error: null,
  success: false,
};

const cropSlice = createSlice({
  name: "crop",
  initialState,
  reducers: {},
  extraReducers: {
    // add crop
    [addCrop.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [addCrop.fulfilled]: (state, { payload }) => {
      console.log(payload);
      state.loading = false;
      state.cropsList = [payload, ...state.cropsList];
    },
    [addCrop.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },

    // get all crops
    [getCropsList.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [getCropsList.fulfilled]: (state, { payload }) => {
      console.log(payload);
      state.loading = false;
      state.cropsList = payload;
    },
    [getCropsList.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },

    // get crops for dropdown
    [getCropsListForDropdown.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [getCropsListForDropdown.fulfilled]: (state, { payload }) => {
      console.log(payload);
      state.loading = false;
      state.cropsListForDropdown = payload;
    },
    [getCropsListForDropdown.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});
export default cropSlice.reducer;
