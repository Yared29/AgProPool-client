import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  ADD_CROP_API,
  CROP_API,
  CROP_DROPDOWN_API,
} from "../../constants/apisConstants";

export const addCrop = createAsyncThunk(
  "crop/add",
  async ({ name }, { rejectWithValue }) => {
    try {
      const userToken = await localStorage.getItem("userToken");
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + userToken,
        },
      };
      const response = await axios.post(ADD_CROP_API, { name }, config);
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

export const getCropsList = createAsyncThunk(
  "crop/all",
  async (_, { rejectWithValue }) => {
    try {
      const userToken = await localStorage.getItem("userToken");
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + userToken,
        },
      };
      const response = await axios.get(CROP_API, config);
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

export const getCropsListForDropdown = createAsyncThunk(
  "crop/dropdown",
  async (_, { rejectWithValue }) => {
    try {
      const userToken = await localStorage.getItem("userToken");
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + userToken,
        },
      };
      const response = await axios.get(CROP_DROPDOWN_API, config);
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
