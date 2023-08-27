import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: 0 };

const countSlice = createSlice({
  name: "conter",
  initialState,
  reducers: {
    addItem(state) {
      if (state.value < 20) state.value += 1;
    },
    removeItem(state) {
      if (state.value > 0) state.value -= 1;
    }
  }
});

export const { addItem, removeItem } = countSlice.actions;
export default countSlice.reducer;
