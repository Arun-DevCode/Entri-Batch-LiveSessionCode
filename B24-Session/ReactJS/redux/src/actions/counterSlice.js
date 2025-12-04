import { createSlice } from "@reduxjs/toolkit";

// Initial State
const initialState = {
  count: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state, action) => {
      state.count += 1;
    },
    decrement: (state) => {
      console.log("clicked");
      if (state.count >= 0) {
        state.count -= 1;
      }
    },
  },
});

// export to use
export const { increment, decrement } = counterSlice.actions;
export const counterReducer = counterSlice.reducer;
