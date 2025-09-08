import { createSlice } from "@reduxjs/toolkit"; // slice package import

//inital State
const initialState = {
  name: null,
};

const StudentSlice = createSlice({
  name: "student",
  initialState,
  reducers: {
    addStudent: (state, actions) => {
      state.name = "Entri App";
    },
  },
});

// Slice function
export const { addStudent } = StudentSlice.actions;
// Slice exported
export default StudentSlice.reducer;
