import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  ADD_KEBELE_API,
  KEBELE_API,
  KEBELE_DROPDOWN_API,
} from "../../constants/apisConstants";

export const addKebele = createAsyncThunk(
  "kebele/add",
  async ({ name }, { rejectWithValue }) => {
    try {
      const userToken = await localStorage.getItem("userToken");
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + userToken,
        },
      };
      const response = await axios.post(ADD_KEBELE_API, { name }, config);
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

export const getKebelesList = createAsyncThunk(
  "kebele/all",
  async (_, { rejectWithValue }) => {
    try {
      const userToken = await localStorage.getItem("userToken");
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + userToken,
        },
      };
      const response = await axios.get(KEBELE_API, config);
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

export const getKebelesListForDropdown = createAsyncThunk(
  "kebele/dropdown",
  async (_, { rejectWithValue }) => {
    try {
      const userToken = await localStorage.getItem("userToken");
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + userToken,
        },
      };
      const response = await axios.get(KEBELE_DROPDOWN_API, config);
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
