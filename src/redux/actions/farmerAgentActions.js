import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  REGISTER_FARMER_AGENT_API,
  FARMER_AGENT_API,
} from "../../constants/apisConstants";

export const registerFarmerAgent = createAsyncThunk(
  "farmerAgent/register",
  async ({ name, phone, gender, kebele, password }, { rejectWithValue }) => {
    try {
      const userToken = await localStorage.getItem("userToken");

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + userToken,
        },
      };
      const response = await axios.post(
        REGISTER_FARMER_AGENT_API,
        { name, phone, password, gender, kebele },
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

export const getFarmerAgentsList = createAsyncThunk(
  "farmerAgent/all",
  async (_, { rejectWithValue }) => {
    try {
      const userToken = await localStorage.getItem("userToken");

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + userToken,
        },
      };
      const response = await axios.get(FARMER_AGENT_API, config);
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
