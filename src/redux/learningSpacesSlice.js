import { createSlice } from "@reduxjs/toolkit";

export const learningSpacesSlice = createSlice({
  name: "learning-spaces",
  initialState: {
    value: [],
  },
  reducers: {
    add: (state, action) => {
      state.value = action.payload;
    },
    remove: (state) => {
      state.value = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const { add, remove } = learningSpacesSlice.actions;

export default learningSpacesSlice.reducer;
