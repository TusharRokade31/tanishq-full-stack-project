import { createSlice } from "@reduxjs/toolkit";
import { addCategory, deleteCategory, getCategories, getCategory, updateCategory } from "./action";

const initialState = {
  categoires: [],
  category: {},
  isLoading: false,
  success: null,
  error: null,
};

const categorieSlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCategories.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCategories.fulfilled, (state, action) => {
        (state.isLoading = false), (state.categoires = action.payload.data);
      })
      .addCase(getCategories.rejected, (state, action) => {
        (state.isLoading = false), (state.error = action.payload);
      })
      .addCase(addCategory.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addCategory.fulfilled, (state, action) => {
        (state.isLoading = false),
          state.categoires.unshift(action.payload.data);
      })
      .addCase(addCategory.rejected, (state, action) => {
        (state.isLoading = false), (state.error = action.payload);
      })
      .addCase(deleteCategory.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteCategory.fulfilled, (state, action) => {
        (state.isLoading = false),
          (state.categoires = state.categoires.filter(
            (item) => item._id !== action.payload
          ));
      })
      .addCase(deleteCategory.rejected, (state, action) => {
        (state.isLoading = false), (state.error = action.payload);
      })
      .addCase(updateCategory.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        const index = state.categoires.findIndex(
          (p) => p._id === action.payload.data._id
        );
        if (index !== -1) {
          state.categoires[index] = action.payload.data;
        }
        if (state.category._id === action.payload.data._id) {
          state.category = action.payload.data;
        }
      })
      .addCase(updateCategory.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(getCategory.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.category = action.payload.data;
      })
      .addCase(getCategory.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
  },
});

export default categorieSlice.reducer;
