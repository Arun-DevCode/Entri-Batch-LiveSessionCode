import { createSlice } from "@reduxjs/toolkit";

// Initial State
const initialState = {
  count: 0,
  like: 0,
  order: 0,
};

// Slice Config
const CounterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state, action) => {
      state.count = action.payload;
    },
  },
});

export default CounterSlice;
