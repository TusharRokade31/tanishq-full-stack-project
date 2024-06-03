import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// export const saveUser = createAsyncThunk(
//     "saveUser",
//     async (userdata,{rejectWithValue}) =>{
//         try {
//             const { data } = await axios.post(
//               `https://64c22b3efa35860baea148fe.mockapi.io/records/users`,
//               userdata
//             );
            
//             return data;
//           } catch (error) {
//             return rejectWithValue(error);
//           }
//     }
// )

export const getDashProducts = createAsyncThunk(
    "getDashProducts",
    async({ page, size, search },{rejectWithValue})=>{
        try {
            const { data } = await axios.get(
              `http://localhost:8001/products/get-products?page=${page}&size=${size}&search=${search}`
            );
            return data;
          } catch (error) {
            return rejectWithValue(error);
          }
    }
)


export const addProducts = createAsyncThunk(
  "addProducts",
  async(values,{rejectWithValue})=>{
      try {
          const { data } = await axios.post(
            `http://localhost:8001/products/add-product`,
            values
          );
          return data;
        } catch (error) {
          return rejectWithValue(error);
        }
  }
)


export const updateProducts = createAsyncThunk(
  "updateProducts",
  async({values, ID},{rejectWithValue})=>{
      try {
          const { data } = await axios.put(
            `http://localhost:8001/products/update-product/${ID}`,
            values
          );
          return data;
        } catch (error) {
          return rejectWithValue(error);
        }
  }
)





export const getSearchProducts = createAsyncThunk(
  "getSearchProducts",
  async( search,{rejectWithValue})=>{
      try {
          const { data } = await axios.get(
            `http://localhost:8001/products/get-products?search=${search}`
          );
          return data;
        } catch (error) {
          return rejectWithValue(error);
        }
  }
)


export const getAllProducts = createAsyncThunk(
  "getAllProducts",
  async(arg,{rejectWithValue})=>{
      try {
          const { data } = await axios.get(
            `http://localhost:8001/products/get-all-products`
          );
          return data;
        } catch (error) {
          return rejectWithValue(error);
        }
  }
)

export const getProduct = createAsyncThunk(
  
  "getProduct",
  async(product_id,{rejectWithValue})=>{
      try {
          const { data } = await axios.get(
            `http://localhost:8001/products/get-product/${product_id}`
          );
          return data;
        } catch (error) {
          return rejectWithValue(error);
        }
  }
)

export const deleteProduct = createAsyncThunk(
  "deleteProduct",
  async (itemid, { rejectWithValue }) => {
    try {
      const { data } = await axios.delete(
        `http://localhost:8001/products/delete-product/${itemid}`,
        
      );
      return itemid
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);