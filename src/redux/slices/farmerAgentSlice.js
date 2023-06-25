import { createSlice } from "@reduxjs/toolkit";
import {
  registerFarmerAgent,
  getFarmerAgentsList,
} from "../actions/farmerAgentActions";
import { toast } from "react-toastify";

const initialState = {
  loading: false,
  farmerAgentsList: [],
  error: null,
  success: false,
};

const farmerAgentSlice = createSlice({
  name: "farmerAgent",
  initialState,
  reducers: {},
  extraReducers: {
    // register farmerAgent
    [registerFarmerAgent.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [registerFarmerAgent.fulfilled]: (state, { payload }) => {
      toast.success("Farmer agent registered successfully!");
      state.loading = false;
      state.farmerAgentsList = [payload, ...state.farmerAgentsList];
    },
    [registerFarmerAgent.rejected]: (state, { payload }) => {
      if (payload) toast.error(payload);
      state.loading = false;
      state.error = payload;
    },

    // get all farmerAgents
    [getFarmerAgentsList.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [getFarmerAgentsList.fulfilled]: (state, { payload }) => {
      console.log(payload);
      state.loading = false;
      state.farmerAgentsList = payload;
    },
    [getFarmerAgentsList.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});
export default farmerAgentSlice.reducer;
