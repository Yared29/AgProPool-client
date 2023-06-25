import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { REGISTER_ADMIN_API, ADMIN_API } from "../../constants/apisConstants";

export const registerAdmin = createAsyncThunk(
  "admin/register",
  async ({ name, phone, gender, password }, { rejectWithValue }) => {
    try {
      const userToken = await localStorage.getItem("userToken");

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + userToken,
        },
      };
      const response = await axios.post(
        REGISTER_ADMIN_API,
        { name, phone, gender, password },
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

export const getAdminsList = createAsyncThunk(
  "admin/all",
  async (_, { rejectWithValue }) => {
    try {
      const userToken = await localStorage.getItem("userToken");

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + userToken,
        },
      };
      const response = await axios.get(ADMIN_API, config);
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
