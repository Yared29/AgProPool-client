import { createSlice } from "@reduxjs/toolkit";
import { registerMediator, getMediatorsList } from "../actions/mediatorActions";
import { toast } from "react-toastify";

const initialState = {
  loading: false,
  mediatorsList: [],
  error: null,
  success: false,
};

const mediatorSlice = createSlice({
  name: "mediator",
  initialState,
  reducers: {},
  extraReducers: {
    // register mediator
    [registerMediator.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [registerMediator.fulfilled]: (state, { payload }) => {
      toast.success("Mediator registered successfully!");
      state.loading = false;
      state.mediatorsList = [payload, ...state.mediatorsList];
    },
    [registerMediator.rejected]: (state, { payload }) => {
      if (payload) toast.error(payload);
      state.loading = false;
      state.error = payload;
    },

    // get all mediators
    [getMediatorsList.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [getMediatorsList.fulfilled]: (state, { payload }) => {
      console.log(payload);
      state.loading = false;
      state.mediatorsList = payload;
    },
    [getMediatorsList.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});
export default mediatorSlice.reducer;
