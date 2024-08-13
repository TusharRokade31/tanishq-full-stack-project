import { createSlice } from "@reduxjs/toolkit";
import {
  getProduct,
  getSearchProducts,
  getDashProducts,
  addProducts,
  getAllProducts,
  updateProducts,
  deleteProduct,
} from "./action";
const initialState = {
  products: [],
  Dashproducts: [],
  Searchproducts: [],
  updateMessage: "",
  // productImages:[],
  product: {},
  filepath: "http://localhost:8001/uploads/",
  isLoading: false,
  success: null,
  error: null,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllProducts.pending, (state) => {
        state.isLoading = true;
      })
      // .addCase(getDashProducts.fulfilled, (state, action) => {
      //   state.isLoading = false;
      //   const combinedProducts = [
      //     ...state.products,
      //     ...action.payload.products,
      //   ];
      //   const uniqueProductsMap = new Map(
      //     combinedProducts.map((product) => [product._id, product])
      //   );
      //   state.products = Array.from(uniqueProductsMap.values());
      // })
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products = action.payload.products;
      })
      .addCase(getAllProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(getDashProducts.pending, (state) => {
        state.isLoading = true;
      })
      // .addCase(getDashProducts.fulfilled, (state, action) => {
      //   state.isLoading = false;
      //   const combinedProducts = [
      //     ...state.Dashproducts,
      //     ...action.payload.products,
      //   ];
      //   const uniqueProductsMap = new Map(
      //     combinedProducts.map((product) => [product._id, product])
      //   );
      //   state.Dashproducts = Array.from(uniqueProductsMap.values());
      // })
      .addCase(getDashProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.Dashproducts = action.payload.products;
      })
      .addCase(getDashProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(getProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.product = action.payload.data;
        // state.productImages = action.payload.data.images;
      })
      .addCase(getProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(getSearchProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getSearchProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.Searchproducts = action.payload.products;
        // state.productImages = action.payload.data.images;
      })
      .addCase(getSearchProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(updateProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.updateMessage = action.payload.message;
        const index = state.Dashproducts.findIndex(
          (p) => p._id === action.payload.data._id
        );
        if (index !== -1) {
          state.Dashproducts[index] = action.payload.data;
        }
        if (state.product._id === action.payload.data._id) {
          state.product = action.payload.data;
        }
      })
      .addCase(updateProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(addProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        console.log(action.payload.data);
        state.Dashproducts.unshift(action.payload.data);
        state.products.unshift(action.payload.data);
      })
      .addCase(addProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(deleteProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.Dashproducts = state.Dashproducts.filter(
          (item) => item._id !== action.payload
        );
      })
      .addCase(deleteProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});
export default productSlice.reducer;
