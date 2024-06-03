import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getCategories = createAsyncThunk(
    "getcategories",
    async (arg, { rejectWithValue }) => {
      try {
        const { data } = await axios.get(
          `http://localhost:8001/categories/get-categories`
          
        );
        return data
      } catch (error) {
        return rejectWithValue(error);
      }
    }
  );


  export const addCategory = createAsyncThunk(
    "addCategory",
    async(values,{rejectWithValue})=>{
        try {
            const { data } = await axios.post(
              `http://localhost:8001/categories/add-category`,
              values
            );
            return data;
          } catch (error) {
            return rejectWithValue(error);
          }
    }
  )


  export const deleteCategory = createAsyncThunk(
    "deleteCategory",
    async(catID,{rejectWithValue})=>{
        try {
            const { data } = await axios.delete(
              `http://localhost:8001/categories/delete-category/${catID}`
            );
            return catID;
          } catch (error) {
            return rejectWithValue(error);
          }
    }
  )


  export const updateCategory = createAsyncThunk(
    "updateCategory",
    async({values, ID},{rejectWithValue})=>{
        try {
            const { data } = await axios.put(
              `http://localhost:8001/categories/update-category/${ID}`,
              values
            );
            return data;
          } catch (error) {
            return rejectWithValue(error);
          }
    }
  )


  export const getCategory = createAsyncThunk(
  
    "getCategory",
    async(cat_id,{rejectWithValue})=>{
        try {
            const { data } = await axios.get(
              `http://localhost:8001/categories/get-category/${cat_id}`
            );
            return data;
          } catch (error) {
            return rejectWithValue(error);
          }
    }
  )