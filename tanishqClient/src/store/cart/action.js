import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const addToCart = createAsyncThunk(
  "addtocart",
  async (cartData, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        `http://localhost:8001/carts/add-to-cart`,
        cartData
        
      );
      return data
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);


export const getItems = createAsyncThunk(
  "getItems",
  async (userid, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        `http://localhost:8001/carts/get-cart`,
        userid
        
      );
      return data
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);


export const clearItem = createAsyncThunk(
  "clearItem",
  async (userid, { rejectWithValue }) => {
    try {
      const { data } = await axios.delete(
        `http://localhost:8001/carts/clear-cart`,
        userid
        
      );
      return data
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const updateQuantity = createAsyncThunk(
  "updateQuantity",
  async ({cartId, type }, { rejectWithValue }) => {
    try {
      const { data } = await axios.put(
        `http://localhost:8001/carts/update-quantity/${cartId}?type=${type}`,
        cartId
        
      );
      return {cartId , data , type}
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);


export const deleteItems = createAsyncThunk(
  "deleteItems",
  async (itemid, { rejectWithValue }) => {
    try {
      const { data } = await axios.delete(
        `http://localhost:8001/carts/delete-cart-item/${itemid}`,
        
      );
      return itemid
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);