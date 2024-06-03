import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getMetals = createAsyncThunk(
    "getMetals",
    async (arg, { rejectWithValue }) => {
      try {
        const { data } = await axios.get(
          `http://localhost:8001/metals/get-metals`
          
        );
        return data
      } catch (error) {
        return rejectWithValue(error);
      }
    }
  );


  export const addMetal = createAsyncThunk(
    "addMetal",
    async(values,{rejectWithValue})=>{
        try {
            const { data } = await axios.post(
              `http://localhost:8001/metals/add-metal`,
              values
            );
            return data;
          } catch (error) {
            return rejectWithValue(error);
          }
    }
  )


  export const deleteMetal = createAsyncThunk(
    "deleteMetal",
    async(metID,{rejectWithValue})=>{
        try {
            const { data } = await axios.delete(
              `http://localhost:8001/metals/delete-metal/${metID}`
            );
            return metID;
          } catch (error) {
            return rejectWithValue(error);
          }
    }
  )


  export const updateMetal = createAsyncThunk(
    "updateMetal",
    async({values, ID},{rejectWithValue})=>{
        try {
            const { data } = await axios.put(
              `http://localhost:8001/metals/update-metal/${ID}`,
              values
            );
            return data;
          } catch (error) {
            return rejectWithValue(error);
          }
    }
  )


  export const getMetal = createAsyncThunk(
  
    "getMetal",
    async(met_id,{rejectWithValue})=>{
        try {
            const { data } = await axios.get(
              `http://localhost:8001/metals/get-metal/${met_id}`
            );
            return data;
          } catch (error) {
            return rejectWithValue(error);
          }
    }
  )