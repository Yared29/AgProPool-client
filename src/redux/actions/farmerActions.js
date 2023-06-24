import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { REGISTER_FARMER_API } from "../../constants/apisConstants";

export const registerFarmer = createAsyncThunk(
  "farmer/register",
  async ({ farmer_name, kebele, age, gender, phone }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const response = await axios.post(
        REGISTER_FARMER_API,
        { farmer_name, kebele, age, gender, phone },
        config
      );
      const { data } = response;

      localStorage.setItem("user", data);
      localStorage.setItem("userToken", data.token);
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

export const getFarmers = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      localStorage.removeItem("user");
      localStorage.removeItem("userToken");
      localStorage.clear();
      return null;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
