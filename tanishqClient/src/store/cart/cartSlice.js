import { createSlice } from "@reduxjs/toolkit";
import { deleteItems, getItems, addToCart, updateQuantity } from "./action.js";

const initialState = {
  cartItems: [],
  cartmessage: "empty",
  filepath: "http://localhost:8001/uploads/",
  isLoading: false,
  success: null,
  error: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getItems.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getItems.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cartItems = action.payload.data;
      })
      .addCase(getItems.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(addToCart.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        state.isLoading = false;
        if (action.payload.message == "Successfully added to cart") {
          state.cartItems.push(action.payload.data);
        } else if (action.payload.message == "Cart updated") {
          const index = state.items.findIndex((item) => item._id === cartId);
          if (index !== -1) {
            state.items[index].quantity += 1;
          }
        }
      })
      .addCase(addToCart.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(deleteItems.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteItems.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cartItems = state.cartItems.filter(
          (item) => item._id !== action.payload
        );
      })
      .addCase(deleteItems.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(updateQuantity.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateQuantity.fulfilled, (state, action) => {
        state.isLoading = false;
        if (action.payload.type === "inc") {
          const item = state.cartItems.find((item) => item._id === action.payload.cartId);
          if (item) {
            item.quantity += 1;
            if(item.quantity > 10){
              state.cartmessage = action.payload.data.message
              item.quantity = 10;
            }
          }
        } else if (action.payload.type === "dec") {
          const item = state.cartItems.find((item) => item._id === action.payload.cartId);
          if (item) {
            item.quantity -= 1;
            if(item.quantity < 1){
              state.cartItems = state.cartItems.filter(
                (item) => item._id !== action.payload.cartId
              )
              state.cartmessage = action.payload.data.message
            }
            state.cartmessage = ''
          }
        }
      })
      .addCase(updateQuantity.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default cartSlice.reducer;
