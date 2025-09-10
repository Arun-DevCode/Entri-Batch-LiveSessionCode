import { createSlice } from "@reduxjs/toolkit"; // slice package import

//inital State
const initialState = {
  name: "Entri App",
  password: "123",
};

const StudentSlice = createSlice({
  name: "student",
  initialState,
  reducers: {
    addStudent: (state, actions) => {
      state.name = actions.payload;
    },
  },
});

// Slice function
export const { addStudent } = StudentSlice.actions;
// Slice exported
export default StudentSlice.reducer;
