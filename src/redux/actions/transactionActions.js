import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  ADD_TRANSACTION_API,
  TRANSACTION_API,
  TRANSACTION_CROPS_WITH_COUNT_API,
} from "../../constants/apisConstants";

export const addTransaction = createAsyncThunk(
  "transaction/add",
  async ({ name, crop, quantity }, { rejectWithValue }) => {
    try {
      const userToken = await localStorage.getItem("userToken");

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + userToken,
        },
      };
      const response = await axios.post(
        ADD_TRANSACTION_API,
        { farmer_name: name, crop, quantity },
        config
      );

      const { data } = response;

      return data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const getTransactionsList = createAsyncThunk(
  "transaction/all",
  async (selectedDate, { rejectWithValue }) => {
    try {
      const userToken = await localStorage.getItem("userToken");

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + userToken,
        },
        params: {
          selectedDate: selectedDate,
        },
      };
      const response = await axios.get(TRANSACTION_API, config);
      const { data } = response;

      return data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const getTransactionCropsQuantityList = createAsyncThunk(
  "transaction/transaction-crops-with-count",
  async (selectedDate, { rejectWithValue }) => {
    try {
      const userToken = await localStorage.getItem("userToken");

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + userToken,
        },
        params: {
          selectedDate: selectedDate,
        },
      };
      const response = await axios.get(
        TRANSACTION_CROPS_WITH_COUNT_API,
        config
      );
      const { data } = response;

      return data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
