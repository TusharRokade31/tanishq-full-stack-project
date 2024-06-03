import { createSlice } from "@reduxjs/toolkit";
import { getGenders } from "./action";

const initialState = {
  genders: [],
  isLoading: false,
  success: null,
  error: null,
};

const genderSlice = createSlice({
  name: "gender",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getGenders.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getGenders.fulfilled, (state, action) => {
        (state.isLoading = false), (state.genders = action.payload.data);
      })
      .addCase(getGenders.rejected, (state, action) => {
        (state.isLoading = false), (state.error = action.payload);
      });
  },
});

export default genderSlice.reducer;
