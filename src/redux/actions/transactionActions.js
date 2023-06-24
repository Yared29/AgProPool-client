import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  ADD_TRANSACTION_API,
  TRANSACTION_API,
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
      console.log("response: ", response);
      const { data } = response;
      console.log("data: ", data);

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
      console.log(selectedDate);
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
