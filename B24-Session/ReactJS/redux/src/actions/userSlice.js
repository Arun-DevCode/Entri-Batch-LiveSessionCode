import { createSlice } from "@reduxjs/toolkit";

// Initial State
const initialState = {
  email: "",
  password: "",
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    createUser: (state, action) => {
      state = action.payload;
    },
  },
});

const { createUser } = userSlice.actions;
const reducer = userSlice.reducer;

export { createUser, reducer };
