import { createSlice } from "@reduxjs/toolkit";
import { addMetal, deleteMetal, getMetals, updateMetal } from "./action";

const initialState = {
  metals: [],
  metal: [],
  isLoading: false,
  success: null,
  error: null,
};

const metalSlice = createSlice({
  name: "metal",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getMetals.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getMetals.fulfilled, (state, action) => {
        (state.isLoading = false), (state.metals = action.payload.data);
      })
      .addCase(getMetals.rejected, (state, action) => {
        (state.isLoading = false), (state.error = action.payload);
      })
      .addCase(addMetal.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addMetal.fulfilled, (state, action) => {
        (state.isLoading = false), state.metals.unshift(action.payload.data);
      })
      .addCase(addMetal.rejected, (state, action) => {
        (state.isLoading = false), (state.error = action.payload);
      })
      .addCase(updateMetal.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateMetal.fulfilled, (state, action) => {
        state.isLoading = false;
        const index = state.metals.findIndex(
          (p) => p._id === action.payload.data._id
        );
        if (index !== -1) {
          state.metals[index] = action.payload.data;
        }
        if (state.metal._id === action.payload.data._id) {
          state.metal = action.payload.data;
        }
      })
      .addCase(updateMetal.rejected, (state, action) => {
        (state.isLoading = false), (state.error = action.payload);
      })
      .addCase(deleteMetal.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteMetal.fulfilled, (state, action) => {
        (state.isLoading = false), (state.metals = state.metals.filter(
          (item) => item._id !== action.payload
        ));
      })
      .addCase(deleteMetal.rejected, (state, action) => {
        (state.isLoading = false), (state.error = action.payload);
      });
  },
});

export default metalSlice.reducer;
