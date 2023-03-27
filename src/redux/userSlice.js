import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    value: {},
  },
  reducers: {
    add: (state, action) => {
      state.value = action.payload;
    },
    remove: (state) => {
      state.value = {};
    },
  },
});

// Action creators are generated for each case reducer function
export const { add, remove } = userSlice.actions;

export default userSlice.reducer;
