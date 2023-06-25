import { createSlice } from "@reduxjs/toolkit";
import {
  addKebele,
  getKebelesList,
  getKebelesListForDropdown,
} from "../actions/kebeleActions";
import { toast } from "react-toastify";

const initialState = {
  loading: false,
  kebelesList: [],
  kebelesListForDropdown: [],
  error: null,
  success: false,
};

const kebeleSlice = createSlice({
  name: "kebele",
  initialState,
  reducers: {},
  extraReducers: {
    // add kebele
    [addKebele.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [addKebele.fulfilled]: (state, { payload }) => {
      toast.success("Kebele added successfully!");
      state.loading = false;
      state.kebelesList = [payload, ...state.kebelesList];
      state.kebelesListForDropdown = [payload, ...state.kebelesListForDropdown];
    },
    [addKebele.rejected]: (state, { payload }) => {
      if (payload) toast.error(payload);
      state.loading = false;
      state.error = payload;
    },

    // get all kebeles
    [getKebelesList.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [getKebelesList.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.kebelesList = payload;
    },
    [getKebelesList.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },

    // get kebeles for dropdown
    [getKebelesListForDropdown.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [getKebelesListForDropdown.fulfilled]: (state, { payload }) => {
      console.log(payload);
      state.loading = false;
      state.kebelesListForDropdown = payload;
    },
    [getKebelesListForDropdown.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});
export default kebeleSlice.reducer;
