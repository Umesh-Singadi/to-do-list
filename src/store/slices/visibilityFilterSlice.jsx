import { createSlice } from "@reduxjs/toolkit";

const visibilityFilterSlice = createSlice({
  name: "visibilityFilter",
  initialState: "all",
  reducers: {
    setVisibilityFilter(state, action) {
      return action.payload;
    },
  },
});

export const visibilityFilterReducer = visibilityFilterSlice.reducer;
export const { setVisibilityFilter } = visibilityFilterSlice.actions;
