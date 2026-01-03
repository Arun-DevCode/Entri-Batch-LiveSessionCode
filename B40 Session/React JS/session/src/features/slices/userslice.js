import { createSlice } from "@reduxjs/toolkit";

// Initial State
const initialState = {
  name: "",
  email: "",
  password: "",
};

// Slice Config
const UserSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addNewUser(state, actions) {
      const payload = actions.payload;
      state = {
        ...state,
        payload,
      };
    },
    updateUser() {},
    deletUser() {},
  },
});

const { addNewUser, updateUser, deletUser } = UserSlice.actions;
export { addNewUser, updateUser, deletUser };

// Default
export default UserSlice.reducer;
