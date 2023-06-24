import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import {
  addTransaction,
  getTransactionCropsQuantityList,
  getTransactionsList,
} from "../actions/transactionActions";

const initialState = {
  loading: false,
  transactionsList: [],
  transactionsCropsQuantityList: [],
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
      toast.success("Transaction added successfully!");
      state.loading = false;
      state.transactionsList = [payload, ...state.transactionsList];
    },
    [addTransaction.rejected]: (state, { payload }) => {
      toast.error(payload);
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

    // get all transactions
    [getTransactionCropsQuantityList.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [getTransactionCropsQuantityList.fulfilled]: (state, { payload }) => {
      console.log(payload);
      state.loading = false;
      state.transactionsCropsQuantityList = payload;
    },
    [getTransactionCropsQuantityList.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});
export default transactionSlice.reducer;
