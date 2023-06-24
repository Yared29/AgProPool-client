import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  REGISTER_MEDIATOR_API,
  MEDIATOR_API,
} from "../../constants/apisConstants";

export const registerMediator = createAsyncThunk(
  "mediator/register",
  async ({ name, kebele, age, gender, phone }, { rejectWithValue }) => {
    try {
      const userToken = await localStorage.getItem("userToken");

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + userToken,
        },
      };
      const response = await axios.post(
        REGISTER_MEDIATOR_API,
        { name, kebele, age, gender, phone },
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

export const getMediatorsList = createAsyncThunk(
  "mediator/all",
  async (_, { rejectWithValue }) => {
    try {
      const userToken = await localStorage.getItem("userToken");

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + userToken,
        },
      };
      const response = await axios.get(MEDIATOR_API, config);
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
