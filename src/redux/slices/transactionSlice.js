import { createSlice } from "@reduxjs/toolkit";
import {
  addTransaction,
  getTransactionsList,
} from "../actions/transactionActions";

const initialState = {
  loading: false,
  transactionsList: [],
  error: null,
  success: false,
};

const transactionSlice = createSlice({
  name: "transaction",
  initialState,
  reducers: {},
  extraReducers: {
    // add transaction
    [addTransaction.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [addTransaction.fulfilled]: (state, { payload }) => {
      console.log(payload);
      state.loading = false;
      state.transactionsList = [payload, ...state.transactionsList];
    },
    [addTransaction.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },

    // get all transactions
    [getTransactionsList.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [getTransactionsList.fulfilled]: (state, { payload }) => {
      console.log(payload);
      state.loading = false;
      state.transactionsList = payload;
    },
    [getTransactionsList.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});
export default transactionSlice.reducer;
