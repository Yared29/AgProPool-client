import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { LOGIN_API } from "../../constants/apisConstants";

export const userLogin = createAsyncThunk(
  "auth/login",
  async ({ phone, password }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const response = await axios.post(LOGIN_API, { phone, password }, config);
      const { data } = response;

      localStorage.setItem("userInfo", JSON.stringify(data));
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

export const userLogout = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      localStorage.removeItem("userInfo");
      localStorage.removeItem("userToken");
      localStorage.clear();
      return null;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
