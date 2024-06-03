import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getGenders = createAsyncThunk(
    "getGenders",
    async (arg, { rejectWithValue }) => {
      try {
        const { data } = await axios.get(
          `http://localhost:8001/genders/get-genders`
          
        );
        return data
      } catch (error) {
        return rejectWithValue(error);
      }
    }
  );